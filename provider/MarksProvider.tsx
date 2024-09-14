"use client";
import { Cookie as cookies, getCookie } from "@/utils/Cookies";
import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";
import useSWR from "swr";
import Storage from "@/utils/Storage";
import { getUrl, revalUrl } from "@/utils/URL";
import { Mark, MarksResponse } from "@/types/Marks";
import { token } from "@/utils/Encrypt";

interface MarksContextType {
  marks: Mark[] | null;
  isOld?: boolean;
  requestedAt: number | null;
  error: Error | null;
  isLoading: boolean;
  mutate: () => Promise<void | MarksResponse | null | undefined>;
}

const MarksContext = createContext<MarksContextType>({
  marks: null,
  requestedAt: null,
  isOld: false,
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
      const response = await fetch(getUrl() + "/marks", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token()}`,
          "X-CSRF-Token": cookie,
          Origin: "https://academia-pro.vercel.app",
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

      return data;
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
  initialMarks?: MarksResponse | null;
}) {
  const [retryCount, setRetryCount] = useState(0);

  const getCachedMarks = useCallback(
    () => Storage.get<MarksResponse | null>("marks", null),
    [],
  );

  const {
    data: marks,
    error,
    isValidating,
    mutate,
  } = useSWR<MarksResponse | null>(`${revalUrl}/marks`, fetcher, {
    fallbackData: initialMarks || getCachedMarks(),
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    keepPreviousData: true,
    shouldRetryOnError: false,
    refreshInterval: 1000 * 60 * 30,
    errorRetryCount: 2,
    revalidateIfStale: false,
    dedupingInterval: 1000 * 60 * 2,
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (retryCount >= 2) return;

      setTimeout(() => revalidate({ retryCount }), 3000);
    },
    onSuccess: (data) => {
      if (data) {
        Storage.set("marks", data);
      }
      setRetryCount(0);
    },
  });

  return (
    <MarksContext.Provider
      value={{
        marks:
          marks?.marks?.sort((a, b) =>
            a.courseName < b.courseName ? -1 : 1,
          ) || null,
        requestedAt: marks?.requestedAt || 0,
        error: error || null,
        isOld: !isValidating && !error && marks?.requestedAt ? Date.now() - marks?.requestedAt > 4 * 60 * 60 * 1000 : false,
        isLoading: isValidating,
        mutate,
      }}
    >
      {children}
    </MarksContext.Provider>
  );
}