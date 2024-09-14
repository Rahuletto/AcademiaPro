"use client";
import { Cookie as cookies, getCookie } from "@/utils/Cookies";
import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import useSWRImmutable from "swr/immutable";
import Storage from "@/utils/Storage";
import { getUrl, revalUrl } from "@/utils/URL";
import { Table, TimeTableResponse } from "@/types/Timetable";
import { useUser } from "./UserProvider";
import { token } from "@/utils/Encrypt";
import { User } from "@/types/User";

interface TimetableContextType {
  timetable: Table[] | null;
  requestedAt: number | null;
  error: Error | null;
  isLoading: boolean;
  mutate: () => Promise<void | TimeTableResponse | null | undefined>;
}

const TimetableContext = createContext<TimetableContextType>({
  timetable: null,
  requestedAt: null,
  error: null,
  isLoading: false,
  mutate: async () => {},
});

const fetcher = async (url: string) => {
  const cookie = cookies.get("key");
  if (!cookie) return null;

  const batch = url.split("?batch=")[1];
  const cook = getCookie(cookie ?? "", "_iamadt_client_10002227248");
  if (
    !cook ||
    cook === "" ||
    cook === "undefined" ||
    cookie.includes("undefined")
  )
    return null;
  else
    try {
      const response = await fetch(
        getUrl() + "/timetable?batch=" + batch,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token()}`,
            "X-CSRF-Token": cookie,
            "Set-Cookie": cookie,
            Cookie: cookie,
            Connection: "keep-alive",
            "content-type": "application/json",
            "Cache-Control":
              "private, maxage=86400, stale-while-revalidate=7200",
          },
        },
      );

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

      return data;
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
  initialTable?: TimeTableResponse | null;
}) {

  const getCachedTable = useCallback(
    () => Storage.get<TimeTableResponse | null>("timetable", null),
    [],
  );
  const { user } = useUser();
  const shouldFetch = user !== null;

  const {
    data: timetable,
    error,
    isValidating,
    mutate,
  } = useSWRImmutable<TimeTableResponse | null>(
    shouldFetch
      ? `${revalUrl}/timetable?batch=${user.batch}`
      : null,
    fetcher,
    {
      fallbackData: initialTable || getCachedTable(),
      revalidateOnMount: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
      keepPreviousData: true,
      revalidateIfStale: true,
      dedupingInterval: 1000 * 60 * 2,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (retryCount >= 2) return;

        setTimeout(() => revalidate({ retryCount }), 3000);
      },
      onSuccess: (data) => {
        if (data) {
          Storage.set("timetable", data);
        }
      },
    },
  );

  useEffect(() => {
    mutate();
  }, [user?.batch, mutate]);

  return (
    <TimetableContext.Provider
      value={{
        timetable: timetable?.table || null,
        requestedAt: timetable?.requestedAt || 0,
        error: error || null,
        isLoading: isValidating,
        mutate,
      }}
    >
      {children}
    </TimetableContext.Provider>
  );
}
