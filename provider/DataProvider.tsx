"use client";
import { Cookie as cookies, getCookie } from "@/utils/Cookies";
import { type ReactNode, createContext, useContext, useState } from "react";
import useSWR from "swr";
import Storage from "@/utils/Storage";
import { AttendanceCourse, AttendanceResponse } from "@/types/Attendance";
import { getUrl, getAllUrls, revalUrl } from "@/utils/URL";
import { token } from "@/utils/Encrypt";
import { Mark } from "@/types/Marks";
import { Course } from "@/types/Course";
import { User } from "@/types/User";
import { Table } from "@/types/Timetable";
import { AllResponses } from "@/types/Response";

interface DataContextType {
  attendance: AttendanceCourse[] | null;
  marks: Mark[] | null;
  courses: Course[] | null;
  user: User | null;
  timetable: Table[] | null;
  error: Error | null;
  requestedAt: number | null;
  isLoading: boolean;
  mutate: () => Promise<void | AllResponses | null | undefined>;
}

const DataContext = createContext<DataContextType>({
  attendance: null,
  marks: null,
  courses: null,
  user: null,
  timetable: null,
  error: null,
  requestedAt: null,
  isLoading: false,
  mutate: async () => {},
});

const fetcher = async () => {
  const cookie = cookies.get("key");
  if (!cookie) return null;

  const cook = getCookie(cookie ?? "", "_iamadt_client_10002227248");
  if (
    !cook ||
    cook === "" ||
    cook === "undefined" ||
    cookie.includes("undefined")
  ) {
    return null;
  }

  const urls = getAllUrls();

  for (const url of urls) {
    try {
      const response = await fetch(`${url}/get`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token()}`,
          "X-CSRF-Token": cookie,
          "Set-Cookie": cookie,
          Cookie: cookie,
          Connection: "keep-alive",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "content-type": "application/json",
          "Cache-Control": "private, max-age=3600",
          "stale-while-revalidate": "7200",
        },
      });

      if (!response.ok) continue;

      const data: AllResponses = await response.json();
      if (
        !data ||
        !data.user ||
        !data.attendance ||
        !data.marks ||
        !data.courses ||
        !data.timetable
      ) {
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

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }: { children: ReactNode }) {
  const cookie = cookies.get("key");

  const isOld = Storage.get<AttendanceResponse | null>("attendance", null);
  if (isOld) Storage.clear();

  const getData = () => Storage.get<AllResponses | null>("data", null);

  const {
    data: data,
    error,
    isValidating,
    mutate,
  } = useSWR<AllResponses | null>(cookie ? `${revalUrl}/get` : null, fetcher, {
    fallbackData: getData(),
    revalidateOnFocus: false,
    shouldRetryOnError: false,
    revalidateOnReconnect: true,
    keepPreviousData: true,
    revalidateIfStale: false,
    dedupingInterval: 1000 * 60 * 30,
    refreshInterval: 1000 * 60 * 30, 
    refreshWhenHidden: false, 
    refreshWhenOffline: false,
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      return;
    },
    onSuccess: (data) => {
      if (data) {
        Storage.set("data", data);
      }
      return data;
    },
  });

  return (
    <DataContext.Provider
      value={{
        attendance: data?.attendance || null,
        marks: data?.marks || null,
        courses: data?.courses || null,
        user: data?.user || null,
        timetable: data?.timetable || null,

        requestedAt: data?.requestedAt || 0,
        error: error || null,

        isLoading: isValidating,
        mutate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
