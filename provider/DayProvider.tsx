"use client";
import { Cookie as cookies, getCookie } from "@/utils/Cookies";
import { type ReactNode, createContext, useContext, useState } from "react";
import useSWR from "swr";
import { getUrl, revalUrl } from "@/utils/URL";
import { DayOrderResponse } from "@/types/DayOrder";
import { token } from "@/utils/Encrypt";
import Storage from "@/utils/Storage";

interface DayContextType {
  day: string | null;
  requestedAt: number | null;
  error: Error | null;
  isLoading: boolean;
  mutate: () => Promise<void | DayOrderResponse | null | undefined>;
}

const DayContext = createContext<DayContextType>({
  day: null,
  requestedAt: null,
  error: null,
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
      const response = await fetch(getUrl(cookie, "/dayorder") + "/dayorder", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token()}`,
          "X-CSRF-Token": cookie,
          "Set-Cookie": cookie,
          Cookie: cookie,
          Connection: "keep-alive",
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

      const data = await response.json();
      if (!data || !data.date) {
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

export function useDay() {
  return useContext(DayContext);
}

export function DayProvider({
  children,
  initialDay,
}: {
  children: ReactNode;
  initialDay?: DayOrderResponse | null;
}) {
  const [retryCount, setRetryCount] = useState(0);

  const getCachedDayOrder = () =>
    Storage.get<DayOrderResponse | null>("dayorder", null);
  const cookie = cookies.get("key");

  const {
    data: day,
    error,
    isValidating,
    mutate,
  } = useSWR<DayOrderResponse | null>(
    cookie ? `${revalUrl}/dayorder` : null,
    fetcher,
    {
      fallbackData: initialDay || getCachedDayOrder(),
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      refreshInterval: 1000 * 60 * 60,
      errorRetryCount: 2,
      revalidateOnReconnect: true,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (retryCount >= 2) return;

        setTimeout(() => revalidate({ retryCount }), 3000);
      },
      onSuccess: (data) => {
        Storage.set("dayorder", data);
        setRetryCount(0);
        return data;
      },
    },
  );

  return (
    <DayContext.Provider
      value={{
        day: day?.dayOrder || null,
        requestedAt: day?.requestedAt || 0,
        error: error || null,
        isLoading: isValidating,
        mutate,
      }}
    >
      {children}
    </DayContext.Provider>
  );
}
