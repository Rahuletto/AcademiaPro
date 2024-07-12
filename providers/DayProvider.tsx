import ErrorStack from "@/pages/error";
import type { DayOrderResponse } from "@/types/DayOrder";
import { clearCookies, getCookie } from "@/utils/cookies";
import { URL } from "@/utils/url";

import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const DayContext = createContext<DayOrderResponse | null>(null);

export function useDay() {
  return useContext(DayContext);
}

export function DayProvider({ children }: { children: ReactNode }) {
  const [day, setDay] = useState<DayOrderResponse | null>(null);

  useEffect(() => {
    const cookie = getCookie("token");
    if (cookie)
      fetch(`${URL}/api/dayorder`, {
        cache: "default",
        method: "GET",
        headers: {
          "X-CSRF-Token": cookie,
          "Set-Cookie": cookie,
          Cookie: cookie,
          Connection: "keep-alive",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "Cache-Control":
            "public, s-maxage=86400, stale-while-revalidate=7200",
        },
      })
        .then((r) => r.json())
        .then((res) => {
          if (res.error) {
            return <ErrorStack error={res.error} />;
          } else {
            sessionStorage.setItem("dayOrder", JSON.stringify(res));
            setDay(res);
          }
        });
  }, []);

  return <DayContext.Provider value={day}>{children}</DayContext.Provider>;
}
