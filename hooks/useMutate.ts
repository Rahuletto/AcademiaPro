import { token } from "@/utils/Encrypt";
import { getUrl, revalUrl } from "@/utils/URL";
import { useSWRConfig } from "swr";
import { Cookie as cookies } from "@/utils/Cookies";
import { useUser } from "@/provider/UserProvider";

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
  const { user } = useUser();

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
      mutate(url, undefined, { revalidate: true });

      const uniqueUrl = addCacheBustParam(url);
      try {
        const data = await fetcher(uniqueUrl);
        mutate(url, data, { revalidate: false });
      } catch (error) {
        throw new Error("Server might be down, try again");
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
