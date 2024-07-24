"use client";
import { Cookie as cookies } from "@/utils/Cookies";
import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";
import useSWR from "swr";
import Storage from "@/utils/Storage";
import { ProscrapeURL } from "@/utils/URL";
import { Table, TimeTableResponse } from "@/types/Timetable";
import { useUser } from "./UserProvider";

interface TimetableContextType {
  timetable: Table[] | null;
  error: Error | null;
  isLoading: boolean;
  mutate: () => Promise<void | Table[] | null | undefined>;
}

const TimetableContext = createContext<TimetableContextType>({
  timetable: null,
  error: null,
  isLoading: false,
  mutate: async () => {},
});

const fetcher = async (url: string) => {
  const cookie = cookies.get("token");
  if (!cookie) return null;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-CSRF-Token": cookie,
        "Set-Cookie": cookie,
        Cookie: cookie,
        Connection: "keep-alive",
        "content-type": "application/json",
        "Cache-Control": "private, maxage=86400, stale-while-revalidate=7200",
      },
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, body: ${errorBody}`,
      );
    }

    const data = await response.json();
    if (!data || !data.table) {
      throw new Error("Invalid response format");
    }

    return data.table;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unexpected error occurred");
  }
};

export function useTimetable() {
  return useContext(TimetableContext);
}

export function TableProvider({
  children,
  initialTable,
}: {
  children: ReactNode;
  initialTable?: Table[] | null;
}) {
  const { user } = useUser();
  const [retryCount, setRetryCount] = useState(0);

  const getCachedTable = useCallback(
    () => Storage.get<Table[] | null>("timetable", null),
    [],
  );

  const {
    data: timetable,
    error,
    isValidating,
    mutate,
  } = useSWR<Table[] | null>(
    `${ProscrapeURL}/api/timetable?batch=${user?.batch || "1"}`,
    fetcher,
    {
      fallbackData: initialTable || getCachedTable(),
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      onSuccess: (data) => {
        if (data) {
          Storage.set("timetable", data);
        }
        setRetryCount(0);
      },
      onError: (err) => {
        console.error("Error fetching table data:", err);
        if (retryCount < 3) {
          setTimeout(
            () => {
              setRetryCount((prev) => prev + 1);
            },
            5000 * (retryCount + 1),
          );
        } else {
          Storage.remove("timetable");
        }
      },
    },
  );

  return (
    <TimetableContext.Provider
      value={{
        timetable: timetable || null,
        error: error || null,
        isLoading: isValidating,
        mutate,
      }}
    >
      {children}
    </TimetableContext.Provider>
  );
}
