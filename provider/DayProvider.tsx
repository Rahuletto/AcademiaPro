"use client";
import { Cookie as cookies, getCookie } from "@/utils/Cookies";
import { type ReactNode, createContext, useContext, useState } from "react";
import useSWR from "swr";
import { getAllUrls, getUrl, revalUrl } from "@/utils/URL";
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
  const urls = getAllUrls();

  for (const url of urls) {
    try {
      const response = await fetch(`${url}/dayorder`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token()}`,
          "X-CSRF-Token": cookie,
          "Set-Cookie": cookie,
          Cookie: cookie,
          Connection: "keep-alive",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "content-type": "application/json",
          "Cache-Control": "private, maxage=86400, stale-while-revalidate=7200",
        },
      });

      if (!response.ok) continue;

      const data: DayOrderResponse = await response.json();
      if (!data || !data.dayOrder) {
        throw new Error("Invalid response format");
      }

      return data;
    } catch (error) {
      console.error(`Error fetching from ${url}:`, (error as any).message);
      continue;
    }
  }

  throw new Error("All URLs failed to fetch data.");
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
