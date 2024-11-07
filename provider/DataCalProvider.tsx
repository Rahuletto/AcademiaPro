"use client";
import { Cookie as cookies } from "@/utils/Cookies";
import { type ReactNode, createContext, useContext } from "react";
import useSWR from "swr";
import Storage from "@/utils/Storage";
import rotateUrl, { revalUrl } from "@/utils/URL";
import { token } from "@/utils/Tokenize";
import { CalResponses } from "@/types/Response";
import { Calendar } from "@/types/Calendar";

interface DayContextType {
  calendar: Calendar[] | null;
  dayOrder: string | null;
  error: Error | null;
  requestedAt: number | null;
  isLoading: boolean;
  isValidating: boolean;
  mutate: () => Promise<void | CalResponses | null | undefined>;
  index: number;
}

const DayContext = createContext<DayContextType>({
  calendar: null,
  dayOrder: null,
  error: null,
  requestedAt: null,
  isLoading: false,
  isValidating: false,
  mutate: async () => {},
  index: 0,
});

const fetcher = async (url: string) => {
  const cookie = cookies.get("key");
  if (!cookie) return null;

  const response = await fetch(`${rotateUrl()}/calendar`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token()}`,
      "X-CSRF-Token": cookie,
      "Set-Cookie": cookie,
      Cookie: cookie,
      Connection: "keep-alive",
      "Accept-Encoding": "gzip, deflate, br, zstd",
      "Content-Type": "application/json",
      "Cache-Control":
        "public, max-age=3600, s-maxage=7200, stale-while-revalidate=3600, stale-if-error=86400",
    },
  });

  const data: CalResponses = await response.json();
  return data;
};

export function usePlanner() {
  return useContext(DayContext);
}

export function PlannerProvider({ children }: { children: ReactNode }) {
  const cookie = cookies.get("key");

  const getCachedPlanner = () =>
    Storage.get<CalResponses | null>("planner", null);

  const {
    data: data,
    error,
    isValidating,
    isLoading,
    mutate,
  } = useSWR<CalResponses | null>(
    cookie ? `${revalUrl}/calendar` : null,
    fetcher,
    {
      fallbackData: getCachedPlanner(),
      revalidateOnFocus: false,
      suspense: true,
      shouldRetryOnError: false,
      revalidateOnReconnect: true,
      revalidateOnMount: true,
      keepPreviousData: true,
      refreshInterval: 1000 * 60 * 30,
      revalidateIfStale: true,
      dedupingInterval: 1000 * 60 * 5,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        return;
      },
      onError: (error) => {
        console.warn(error);
        throw new Error(error);
      },
      onSuccess: (data) => {
        if (data) {
          Storage.set("planner", data);
        }
        return data;
      },
    },
  );

  return (
    <DayContext.Provider
      value={{
        calendar: data?.calendar || null,
        dayOrder: data?.today?.dayOrder || null,
        requestedAt: data?.requestedAt || 0,
        error: error || null,
        isLoading,
        isValidating,
        mutate,
        index: data?.index ?? 0,
      }}
    >
      {children}
    </DayContext.Provider>
  );
}
