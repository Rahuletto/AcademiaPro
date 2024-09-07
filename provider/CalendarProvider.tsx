"use client";
import { Cookie as cookies, getCookie } from "@/utils/Cookies";
import { type ReactNode, createContext, useContext, useState } from "react";
import useSWR from "swr";

import { getUrl, revalUrl } from "@/utils/URL";
import { Calendar, CalendarResponse } from "@/types/Calendar";
import { token } from "@/utils/Encrypt";

interface CalendarContextType {
  calendar: Calendar[] | null;
  requestedAt: number | null;
  error: Error | null;
  isLoading: boolean;
  mutate: () => Promise<void | CalendarResponse | null | undefined>;
}

const CalendarContext = createContext<CalendarContextType>({
  calendar: null,
  error: null,
  requestedAt: null,
  isLoading: false,
  mutate: async () => {},
});

const fetcher = async (url: string) => {
  const cookie = cookies.get("key");
  if (!cookie) return null;

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
      const response = await fetch(getUrl(cookie, "/calendar") + "/calendar", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token()}`,
          "X-CSRF-Token": cookie,
          "Set-Cookie": cookie,
          Cookie: cookie,
          Connection: "keep-alive",
          Origin: "https://academia-pro.vercel.app",
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

      return data;
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
  initialCalendar?: CalendarResponse | null;
}) {
  const [retryCount, setRetryCount] = useState(0);

  const cookie = cookies.get("key");

  const {
    data: calendar,
    error,
    isValidating,
    mutate,
  } = useSWR<CalendarResponse | null>(
    cookie ? `${revalUrl}/calendar` : null,
    fetcher,
    {
      fallbackData: initialCalendar,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      keepPreviousData: true,
      refreshInterval: 1000 * 60 * 30,
      errorRetryCount: 2,
      revalidateIfStale: false,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (retryCount >= 2) return;

        setTimeout(() => revalidate({ retryCount }), 3000);
      },
      onSuccess: (data) => {
        setRetryCount(0);
        return data;
      },
    },
  );

  return (
    <CalendarContext.Provider
      value={{
        calendar: calendar?.calendar || null,
        requestedAt: calendar?.requestedAt || 0,
        error: error || null,
        isLoading: isValidating,
        mutate,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
