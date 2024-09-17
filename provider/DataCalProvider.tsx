"use client";
import { Cookie as cookies, getCookie } from "@/utils/Cookies";
import { type ReactNode, createContext, useContext, useState } from "react";
import useSWR from "swr";
import Storage from "@/utils/Storage";
import { AttendanceCourse } from "@/types/Attendance";
import { getUrl, getAllUrls } from "@/utils/URL";
import { token } from "@/utils/Encrypt";
import { Mark } from "@/types/Marks";
import { Course } from "@/types/Course";
import { User } from "@/types/User";
import { Table } from "@/types/Timetable";
import { AllResponses, CalResponses } from "@/types/Response";
import DayOrder from "../components/badges/Day";
import { Calendar, CalendarResponse } from "@/types/Calendar";

interface DayContextType {
  calendar: Calendar[] | null;
  dayOrder: string | null;
  error: Error | null;
  requestedAt: number | null;
  isLoading: boolean;
  mutate: () => Promise<void | CalResponses | null | undefined>;
}

const DayContext = createContext<DayContextType>({
  calendar: null,
  dayOrder: null,
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
      const response = await fetch(`${url}/getCal`, {
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

      const data: CalResponses = await response.json();
      if (!data || !data.calendar || !data.today) {
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
    mutate,
  } = useSWR<CalResponses | null>(
    cookie ? `${getUrl()}/getCal` : null,
    fetcher,
    {
    fallbackData: getCachedPlanner(),
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      revalidateOnReconnect: true,
      keepPreviousData: true,
      refreshInterval: 1000 * 60 * 30,
      errorRetryCount: 2,
      revalidateIfStale: false,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        return;
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
        dayOrder: data?.today.dayOrder || null,
        requestedAt: data?.requestedAt || 0,
        error: error || null,

        isLoading: isValidating,
        mutate,
      }}
    >
      {children}
    </DayContext.Provider>
  );
}
