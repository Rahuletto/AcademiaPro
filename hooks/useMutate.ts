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

  const urls = {
    user: `${revalUrl}/user`,
    attendance: `${revalUrl}/attendance`,
    marks: `${revalUrl}/marks`,
    timetable: `${revalUrl}/timetable?batch=${user?.batch || 1}`,
    courses: `${revalUrl}/courses`,
    data: `${revalUrl}/get`,
    planner: `${revalUrl}/getCal`,
  };

  const fetcher = async (url: string) => {
    const cookie = cookies.get("key");
    if (!cookie) return null;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token()}`,
        "X-CSRF-Token": cookie,
        Cookie: cookie,
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "content-type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(`Fetch failed: ${url}, status: ${response.status}`);
      return null;
    }
    return response.json();
  };

  const addCacheBustParam = (url: string) => {
    const cacheBustParam = `cache_bust=${Date.now()}`;
    return url.includes("?")
      ? `${url}&${cacheBustParam}`
      : `${url}?${cacheBustParam}`;
  };

  const clearAndRevalidate = async (url: string, type: string) => {
    const cacheBustedUrl = addCacheBustParam(url);
    const data = await fetcher(cacheBustedUrl);

    if (!data) return;

    if (type === "planner") {
      mutate(
        urls.data,
        {
          calendar: data.calendar || calendar,
          dayOrder: data.today?.dayOrder || dayOrder,
        },
        false,
      );
      return;
    } else {
      let obj: any = {
        user,
        attendance,
        marks,
        courses,
        timetable,
        requestedAt: Date.now(),
      };

      switch (type) {
        case "user":
          obj.user = data.user || user;
          break;
        case "attendance":
          obj.attendance = data.attendance || attendance;
          break;
        case "marks":
          obj.marks = data.marks || marks;
          break;
        case "courses":
          obj.courses = data.courses || courses;
          break;
        case "timetable":
          obj.timetable = data.timetable || timetable;
          break;
      }

      mutate(urls.data, { ...obj }, false);
    }
  };

  return async function (options: MutateOptions = {}) {
    const {
      mutateUser,
      mutateAttendance,
      mutateDay,
      mutateMarks,
      mutateTimetable,
      mutateCourse,
      mutateCalendar,
    } = options;

    const tasks = [];

    if (mutateCalendar || mutateDay) {
      tasks.push(clearAndRevalidate(urls.planner, "planner"));
    }
    if (mutateUser) tasks.push(clearAndRevalidate(urls.user, "user"));
    if (mutateAttendance)
      tasks.push(clearAndRevalidate(urls.attendance, "attendance"));
    if (mutateMarks) tasks.push(clearAndRevalidate(urls.marks, "marks"));
    if (mutateCourse) tasks.push(clearAndRevalidate(urls.courses, "courses"));
    if (mutateTimetable)
      tasks.push(clearAndRevalidate(urls.timetable, "timetable"));

    if (tasks.length > 0) {
      await Promise.all(tasks);
    } else {
      await Promise.all(
        Object.keys(urls).map((key) =>
          clearAndRevalidate(urls[key as keyof typeof urls], key),
        ),
      );
    }
  };
}
