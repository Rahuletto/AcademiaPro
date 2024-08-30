"use client";
import { Cookie as cookies } from "@/utils/Cookies";
import { type ReactNode, createContext, useContext, useState } from "react";
import useSWR from "swr";
import { ProscrapeURL } from "@/utils/URL";
import { DayOrderResponse } from "@/types/DayOrder";
import { token } from "@/utils/Encrypt";

interface DayContextType {
  day: string | null;
  error: Error | null;
  isLoading: boolean;
  mutate: () => Promise<void | DayOrderResponse | null | undefined>;
}

const DayContext = createContext<DayContextType>({
  day: null,
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

  const {
    data: day,
    error,
    isValidating,
    mutate,
  } = useSWR<DayOrderResponse | null>(`${ProscrapeURL}/api/dayorder`, fetcher, {
    fallbackData: initialDay,
    revalidateOnFocus: false,
    refreshInterval: 1000 * 60 * 60,
    revalidateOnReconnect: true,
    errorRetryCount: 4,
    onSuccess: (data) => {
      setRetryCount(0);
    },
  });

  return (
    <DayContext.Provider
      value={{
        day: day?.dayOrder || null,
        error: error || null,
        isLoading: isValidating,
        mutate,
      }}
    >
      {children}
    </DayContext.Provider>
  );
}
