import type { TimeTableResponse } from "@/types/TimeTable";
import { getCookie } from "@/utils/cookies";
import { URL } from "@/utils/url";
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useUser } from "./UserProvider";

const TableContext = createContext<TimeTableResponse | null>(null);

export function useTimeTable() {
  return useContext(TableContext);
}

export function TableProvider({ children }: { children: ReactNode }) {
  const [table, setTable] = useState<TimeTableResponse | null>(null);
  const userInfo = useUser();

  useEffect(() => {
    if (!userInfo) return;
    const cookie = getCookie("token");
    if (cookie)
      fetch(`${URL}/api/timetable?batch=${userInfo?.userInfo?.batch}`, {
        method: "GET",
        headers: {
          "X-CSRF-Token": cookie,
          "Set-Cookie": cookie,
          Cookie: cookie,
          Connection: "keep-alive",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "Cache-Control":
            "private, maxage=86400, stale-while-revalidate=43200",
        },
      })
        .then((r) => r.json())
        .then((res) => {
          if (!res.error) {
            setTable(res);
          }
        });
  }, [userInfo]);

  return (
    <TableContext.Provider value={table}>{children}</TableContext.Provider>
  );
}
