"use client";
import { Cookie as cookies } from "@/utils/Cookies";
import {
  type ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import useSWR from "swr";
import Storage from "@/utils/Storage";
import { AttendanceResponse, AttendanceCourse } from "@/types/Attendance";
import { ProscrapeURL } from "@/utils/URL";

interface AttendanceContextType {
  attendance: AttendanceCourse[] | null;
  error: Error | null;
  isLoading: boolean;
  mutate: () => Promise<void | AttendanceCourse[] | null | undefined>;
}

const AttendanceContext = createContext<AttendanceContextType>({
  attendance: null,
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

    return data.attendance;
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
  initialAttendance?: AttendanceCourse[] | null;
}) {
  const [retryCount, setRetryCount] = useState(0);

  const getCachedAttendance = () =>
    Storage.get<AttendanceCourse[] | null>("attendance", null);

  const {
    data: attendance,
    error,
    isValidating,
    mutate,
  } = useSWR<AttendanceCourse[] | null>(
    `${ProscrapeURL}/api/attendance`,
    fetcher,
    {
      fallbackData: initialAttendance || getCachedAttendance(),
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      keepPreviousData: true,
      refreshInterval: 1000 * 60 * 60,
      errorRetryCount: 4,
      onSuccess: (data) => {
        if (data) {
          Storage.set("attendance", data);
        }
        setRetryCount(0);
      },
      onError: (err) => {
        console.error("Error fetching attendance data:", err);
        if (retryCount < 3) {
          setTimeout(
            () => {
              setRetryCount((prev) => prev + 1);
            },
            5000 * (retryCount + 1),
          );
        } else {
          Storage.remove("attendance");
        }
      },
    },
  );

  return (
    <AttendanceContext.Provider
      value={{
        attendance: attendance || null,
        error: error || null,
        isLoading: isValidating,
        mutate,
      }}
    >
      {children}
    </AttendanceContext.Provider>
  );
}
