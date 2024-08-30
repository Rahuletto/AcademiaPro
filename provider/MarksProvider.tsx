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
import { Mark } from "@/types/Marks";
import { token } from "@/utils/Encrypt";

interface MarksContextType {
  marks: Mark[] | null;
  error: Error | null;
  isLoading: boolean;
  mutate: () => Promise<void | Mark[] | null | undefined>;
}

const MarksContext = createContext<MarksContextType>({
  marks: null,
  error: null,
  isLoading: false,
  mutate: async () => {},
});

const fetcher = async (url: string) => {
  const cookie = cookies.get("key");
  if (!cookie) return null;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
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
    if (!data || !data.marks) {
      throw new Error("Invalid response format");
    }

    return data.marks;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unexpected error occurred");
  }
};

export function useMarks() {
  return useContext(MarksContext);
}

export function MarksProvider({
  children,
  initialMarks,
}: {
  children: ReactNode;
  initialMarks?: Mark[] | null;
}) {
  const [retryCount, setRetryCount] = useState(0);

  const getCachedMarks = useCallback(
    () => Storage.get<Mark[] | null>("marks", null),
    [],
  );

  const {
    data: marks,
    error,
    isValidating,
    mutate,
  } = useSWR<Mark[] | null>(`${ProscrapeURL}/api/marks`, fetcher, {
    fallbackData: initialMarks || getCachedMarks(),
    refreshInterval: 1000 * 60 * 30,
    revalidateOnMount: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    keepPreviousData: true,
    errorRetryCount: 4,
    revalidateIfStale: false,
    dedupingInterval: 1000 * 60 * 2,
    onSuccess: (data) => {
      if (data) {
        Storage.set("marks", data);
      }
      setRetryCount(0);
    },
    onError: (err) => {
        Storage.remove("marks");
    },
  });

  return (
    <MarksContext.Provider
      value={{
        marks:
          marks?.sort((a, b) => (a.courseName < b.courseName ? -1 : 1)) || null,
        error: error || null,
        isLoading: isValidating,
        mutate,
      }}
    >
      {children}
    </MarksContext.Provider>
  );
}
