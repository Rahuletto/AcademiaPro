"use client";
import { Cookie as cookies } from "@/utils/Cookies";
import { type ReactNode, createContext, useContext, useState } from "react";
import useSWR from "swr";

import { ProscrapeURL } from "@/utils/URL";
import { Calendar, CalendarResponse } from "@/types/Calendar";

interface CalendarContextType {
  calendar: Calendar[] | null;
  error: Error | null;
  isLoading: boolean;
  mutate: () => Promise<void | Calendar[] | null | undefined>;
}

const CalendarContext = createContext<CalendarContextType>({
  calendar: null,
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
        "X-CSRF-Token": cookie,
        "Set-Cookie": cookie,
        Cookie: cookie,
        Connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "content-type": "application/json",
        "Cache-Control": "public, maxage=86400, stale-while-revalidate=7200",
      },
    });
    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, body: ${errorBody}`,
      );
    }

    const data: CalendarResponse = await response.json();
    if (!data || !data.calendar) {
      throw new Error("Invalid response format");
    }

    return data.calendar;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unexpected error occurred");
  }
};

export function useCalendar() {
  return useContext(CalendarContext);
}

export function CalendarProvider({
  children,
  initialCalendar,
}: {
  children: ReactNode;
  initialCalendar?: Calendar[] | null;
}) {
  const [retryCount, setRetryCount] = useState(0);

  const {
    data: calendar,
    error,
    isValidating,
    mutate,
  } = useSWR<Calendar[] | null>(`${ProscrapeURL}/api/calendar`, fetcher, {
    fallbackData: initialCalendar,
    revalidateOnFocus: false,
    keepPreviousData: true,
    revalidateOnReconnect: false,
    onSuccess: (data) => {
      setRetryCount(0);
    },
    onError: (err) => {
      console.error("Error fetching calendar data:", err);
      if (retryCount < 3) {
        setTimeout(
          () => {
            setRetryCount((prev) => prev + 1);
          },
          5000 * (retryCount + 1),
        );
      }
    },
  });

  return (
    <CalendarContext.Provider
      value={{
        calendar: calendar || null,
        error: error || null,
        isLoading: isValidating,
        mutate,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
