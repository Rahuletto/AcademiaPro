"use client";
import { Cookie as cookies, getCookie } from "@/utils/Cookies";
import { type ReactNode, createContext, useContext, useState } from "react";
import useSWR from "swr";
import Storage from "@/utils/Storage";
import { AttendanceResponse, AttendanceCourse } from "@/types/Attendance";
import { getUrl, revalUrl } from "@/utils/URL";
import { token } from "@/utils/Encrypt";

interface AttendanceContextType {
  attendance: AttendanceCourse[] | null;
  error: Error | null;
  requestedAt: number | null;
  isOld?: boolean;
  isLoading: boolean;
  mutate: () => Promise<void | AttendanceResponse | null | undefined>;
}

const AttendanceContext = createContext<AttendanceContextType>({
  attendance: null,
  error: null,
  isOld: false,
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
      const response = await fetch(getUrl() + "/attendance", {
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
      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, body: ${errorBody}`,
        );
      }

      const data: AttendanceResponse = await response.json();
      if (!data || !data.attendance) {
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

export function useAttendance() {
  return useContext(AttendanceContext);
}

export function AttendanceProvider({
  children,
  initialAttendance,
}: {
  children: ReactNode;
  initialAttendance?: AttendanceResponse | null;
}) {
  const [retryCount, setRetryCount] = useState(0);

  const getCachedAttendance = () =>
    Storage.get<AttendanceResponse | null>("attendance", null);

  const cookie = cookies.get("key");

  const {
    data: attendance,
    error,
    isValidating,
    mutate,
  } = useSWR<AttendanceResponse | null>(
    cookie ? `${revalUrl}/attendance` : null,
    fetcher,
    {
      fallbackData: initialAttendance || getCachedAttendance(),
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
          Storage.set("attendance", data);
        }
        setRetryCount(0);
        return data;
      },
    },
  );

  return (
    <AttendanceContext.Provider
      value={{
        attendance: attendance?.attendance || null,
        requestedAt: attendance?.requestedAt || 0,
        error: error || null,
        isOld:
          !isValidating && !error && attendance?.requestedAt
            ? Date.now() - attendance?.requestedAt > 2 * 60 * 60 * 1000
            : false,
        isLoading: isValidating,
        mutate,
      }}
    >
      {children}
    </AttendanceContext.Provider>
  );
}
