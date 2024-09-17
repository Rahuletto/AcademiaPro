import { token } from "@/utils/Encrypt";
import { getUrl, revalUrl } from "@/utils/URL";
import { useSWRConfig } from "swr";
import { Cookie as cookies } from "@/utils/Cookies";
import { useData } from "@/provider/DataProvider";
import { usePlanner } from "@/provider/DataCalProvider";

export interface MutateOptions {
  mutateUser?: boolean;
  mutateAttendance?: boolean;
  mutateDay?: boolean;
  mutateMarks?: boolean;
  mutateTimetable?: boolean;
  mutateCourse?: boolean;
  mutateCalendar?: boolean;
}

export function useMutateAll() {
  const { mutate } = useSWRConfig();
  const { attendance, marks, timetable, courses, user } = useData();
  const { calendar, dayOrder } = usePlanner();

  const fetcher = async (url: string) => {
    const cookie = cookies.get("key");
    if (!cookie) return null;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token()}`,
        "X-CSRF-Token": cookie,
        "Set-Cookie": cookie,
        Cookie: cookie,
        Connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "content-type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}`);
    }
    return response.json();
  };

  return async function (options: MutateOptions = {}) {
    const {
      mutateUser: shouldMutateUser,
      mutateAttendance: shouldMutateAttendance,
      mutateDay: shouldMutateDay,
      mutateMarks: shouldMutateMarks,
      mutateTimetable: shouldMutateTimetable,
      mutateCourse: shouldMutateCourse,
      mutateCalendar: shouldMutateCalendar,
    } = options;

    const urls = {
      user: `${revalUrl}/user`,
      attendance: `${revalUrl}/attendance`,
      dayorder: `${revalUrl}/dayorder`,
      marks: `${revalUrl}/marks`,
      timetable: `${revalUrl}/timetable?batch=${user?.batch || 1}`,
      courses: `${revalUrl}/courses`,
      calendar: `${revalUrl}/calendar`,
      data: `${revalUrl}/get`,
      planner: `${revalUrl}/getCal`,
    };

    const addCacheBustParam = (url: string) => {
      const [baseUrl, queryParams] = url.split("?");
      const cacheBustParam = `cache_bust=${Date.now()}`;
      if (queryParams) {
        return `${baseUrl}?${queryParams}&${cacheBustParam}`;
      }
      return `${baseUrl}?${cacheBustParam}`;
    };

    const clearAndRevalidate = async (url: string) => {
      if (
        url.includes("attendance") ||
        url.includes("marks") ||
        url.includes("courses") ||
        url.includes("timetable") ||
        url.includes("user")
      ) {
        const splitted = url.split("/");
        const last = splitted[splitted.length - 1];

        const uniqueUrl = addCacheBustParam(`${getUrl()}/${last}`);
        try {
          const data = await fetcher(uniqueUrl);
          const obj = {
            user: url.includes("user") ? data.user : user,
            attendance: url.includes("attendance")
              ? data.attendance
              : attendance,
            marks: url.includes("marks") ? data.marks : marks,
            courses: url.includes("courses") ? data.courses : courses,
            timetable: url.includes("timetable") ? data.timetable : timetable,
            requestedAt: Date.now(),
          };

          mutate(urls.data, obj, { revalidate: true });
        } catch (error: any) {
          throw new Error(
            error.message.includes("fetch")
              ? "Server might be down, try again"
              : error.message,
          );
        }
      } else if (url.includes("calendar") || url.includes("dayorder")) {
        const splitted = url.split("/");
        const last = splitted[splitted.length - 1];

        const uniqueUrl = addCacheBustParam(`${getUrl()}/${last}`);
        try {
          const data = await fetcher(uniqueUrl);
          const obj = {
            calendar: url.includes("calendar") ? data.calendar : calendar,
            dayOrder: url.includes("dayorder") ? data.today.dayOrder : dayOrder,
            requestedAt: Date.now(),
          };

          mutate(urls.planner, obj, { revalidate: true });
        } catch (error: any) {
          throw new Error(
            error.message.includes("fetch")
              ? "Server might be down, try again"
              : error.message,
          );
        }
      }
    };

    if (shouldMutateUser) await clearAndRevalidate(urls.user);
    else if (shouldMutateCalendar) await clearAndRevalidate(urls.calendar);
    else if (shouldMutateCourse) await clearAndRevalidate(urls.courses);
    else if (shouldMutateAttendance) await clearAndRevalidate(urls.attendance);
    else if (shouldMutateDay) await clearAndRevalidate(urls.dayorder);
    else if (shouldMutateMarks) await clearAndRevalidate(urls.marks);
    else if (shouldMutateTimetable) await clearAndRevalidate(urls.timetable);
    else {
      await Promise.all(
        Object.values(urls).map((url) => clearAndRevalidate(url)),
      );
    }
  };
}
