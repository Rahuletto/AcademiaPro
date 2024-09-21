"use client";
import { Cookie as cookies, getCookie } from "@/utils/Cookies";
import { type ReactNode, createContext, useContext, useState } from "react";
import useSWR from "swr";
import Storage from "@/utils/Storage";
import { AttendanceCourse } from "@/types/Attendance";
import { getUrl, getAllUrls, revalUrl, rotateArray } from "@/utils/URL";
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
  isValidating: boolean;
  mutate: () => Promise<void | CalResponses | null | undefined>;
}

const urlIndex = 0;

const DayContext = createContext<DayContextType>({
  calendar: null,
  dayOrder: null,
  error: null,
  requestedAt: null,
  isLoading: false,
  isValidating: false,
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

  const urls = rotateArray(getAllUrls(), urlIndex);

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
          "Content-Type": "application/json",
          "Cache-Control": "public, maxage=86400, stale-while-revalidate=7200",
        },
      });

      if (response.ok) {
        const data: CalResponses = await response.json();
        if (data && data.calendar && data.today) {
          return data;
        } else {
          console.error("Invalid response format, moving to the next URL");
          continue;
        }
      } else {
        console.error(`Response not OK from ${url}, trying next URL`);
        continue;
      }
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
    isLoading,
    mutate,
  } = useSWR<CalResponses | null>(
    cookie ? `${revalUrl}/getCal` : null,
    fetcher,
    {
      fallbackData: getCachedPlanner(),
      revalidateOnFocus: false,
      suspense: true,
      shouldRetryOnError: false,
      revalidateOnReconnect: true,
      revalidateOnMount: true,
      keepPreviousData: true,
      refreshInterval: 1000 * 60 * 60 * 12,
      revalidateIfStale: false,
      dedupingInterval: 1000 * 60 * 5,
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
  const calendar = data?.calendar;
  const current = calendar?.[new Date().getMonth() % 5].days;
  const val = current?.find(
    (day) => day.date === new Date().getDate().toString(),
  );
  const day = val?.dayOrder;

  return (
    <DayContext.Provider
      value={{
        calendar: calendar || null,
        dayOrder: day || null,
        requestedAt: data?.requestedAt || 0,
        error: error || null,

        isLoading,
        isValidating,
        mutate,
      }}
    >
      {children}
    </DayContext.Provider>
  );
}
