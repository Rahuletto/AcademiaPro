import { usePlanner } from "@/provider/DataCalProvider";
import { token } from "@/utils/Tokenize";
import rotateUrl, { revalUrl } from "@/utils/URL";

import useSWR from "swr";
import { Cookie as cookies } from "@/utils/Cookies";

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
  const { mutate: mutatePlanner } = usePlanner();
  const { mutate } = useSWR(`${revalUrl}/getData`);

  const clearAndRevalidate = async (calendar: boolean) => {
    if (calendar) {
      mutatePlanner();
    } else {
      const cookie = cookies.get("key");
      const u = await fetch(
        `${rotateUrl().replace("proscrape", "newscrape")}/update`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token()}`,
            "X-CSRF-Token": cookie || "",
            "Set-Cookie": cookie || "",
            Cookie: cookie || "",
            "Content-Type": "application/json",
            "Cache-Control":
            "private, max-age=1200, s-maxage=3600, stale-while-revalidate=600, stale-if-error=86400",
          },
        },
      );
      
      const d = await u.json();

      mutate({ ...d }, {
        revalidate: false,
        optimisticData: { ...d },
        populateCache: true,
      });
    }
  };

  return async function (options: MutateOptions = {}) {
    const { mutateCalendar } = options;

    const tasks = [];

    if (mutateCalendar) {
      tasks.push(clearAndRevalidate(true));
    } else {
      tasks.push(clearAndRevalidate(false));
    }

    await Promise.all(tasks);
  };
}
