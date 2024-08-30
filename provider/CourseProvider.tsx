"use client";
import { Cookie as cookies } from "@/utils/Cookies";
import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";
import useSWRImmutable from "swr/immutable";
import Storage from "@/utils/Storage";
import { ProscrapeURL } from "@/utils/URL";
import { Course } from "@/types/Course";
import { token } from "@/utils/Encrypt";

interface CourseContextType {
  courses: Course[] | null;
  error: Error | null;
  isLoading: boolean;
  mutate: () => Promise<void | Course[] | null | undefined>;
}

const CourseContext = createContext<CourseContextType>({
  courses: null,
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
        "Cache-Control": "private, maxage=86400, stale-while-revalidate=7200",
      },
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, body: ${errorBody}`,
      );
    }

    const data: { courses: Course[] } = await response.json();
    if (!data || !data.courses) {
      throw new Error("Invalid response format");
    }

    return data.courses;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unexpected error occurred");
  }
};

export function useCourses() {
  return useContext(CourseContext);
}

export function CourseProvider({
  children,
  initialCourses,
}: {
  children: ReactNode;
  initialCourses?: Course[] | null;
}) {
  const [retryCount, setRetryCount] = useState(0);

  const getCachedCourses = useCallback(
    () => Storage.get<Course[] | null>("courses", null),
    [],
  );

  const {
    data: courses,
    error,
    isValidating,
    mutate,
  } = useSWRImmutable<Course[] | null>(`${ProscrapeURL}/api/courses`, fetcher, {
    fallbackData: initialCourses || getCachedCourses(),
    revalidateOnMount: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    keepPreviousData: true,
    errorRetryCount: 4,
    revalidateIfStale: false,
    dedupingInterval: 1000 * 60 * 2,
    onSuccess: (data) => {
      if (data) {
        Storage.set("courses", data);
      }
      setRetryCount(0);
    },
  });

  return (
    <CourseContext.Provider
      value={{
        courses: courses || null,
        error: error || null,
        isLoading: isValidating,
        mutate,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}
