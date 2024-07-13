/** eslint-disable react-hooks/exhaustive-deps */
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AttendanceTable = dynamic(
  () => import("@/components/Attendance").then((mod) => mod.default),
  { ssr: false },
);

const MarksTable = dynamic(
  () => import("@/components/Marks").then((mod) => mod.default),
  { ssr: false },
);

const TimeTableComponent = dynamic(
  () => import("@/components/Timetable").then((mod) => mod.default),
  { ssr: false },
);

import type { AttendanceResponse } from "@/types/Attendance";
import type { MarksResponse } from "@/types/Marks";

import { clearCookies, getCookie } from "@/utils/cookies";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { Sidebar } from "@/components/Sidebar";
import { TableHeader } from "@/components/TableHeader";
import { useDay } from "@/providers/DayProvider";
import { useTimeTable } from "@/providers/TableProvider";
import { useUser } from "@/providers/UserProvider";
import { URL } from "@/utils/url";
import ErrorStack from "./error";

export default function Academia() {
  const router = useRouter();
  const userInfo = useUser();
  const day = useDay();
  const table = useTimeTable();

  const [attendance, setAttendance] = useState<AttendanceResponse | null>(null);
  const [todayTable, setToday] = useState<(string | undefined)[] | undefined>(
    [],
  );
  const [marks, setMarks] = useState<MarksResponse | null>(null);

  useEffect(() => {
    if (!getCookie("token")) router.push("/login");
  }, [router]);

  useEffect(() => {
    if (userInfo) {
      if (!attendance)
        fetch(`${URL}/api/attendance`, {
          next: { revalidate: 2 * 3600 },
          cache: "default",
          method: "GET",
          headers: {
            "X-CSRF-Token": getCookie("token") as string,
            "Set-Cookie": getCookie("token") as string,
            Cookie: getCookie("token") as string,
            Connection: "keep-alive",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Cache-Control":
              "private, maxage=86400, stale-while-revalidate=7200",
          },
        })
          .then((r) => r.json())
          .then((res) => {
            if (res.error) {
              return <ErrorStack error={res.error} />;
            }
            setAttendance(res);
          })
          .catch(() => {});

      if (!marks)
        fetch(`${URL}/api/marks`, {
          cache: "default",
          next: { revalidate: 2 * 3600 },
          method: "GET",
          headers: {
            "X-CSRF-Token": getCookie("token") as string,
            "Set-Cookie": getCookie("token") as string,
            Cookie: getCookie("token") as string,
            Connection: "keep-alive",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Cache-Control":
              "private, maxage=86400, stale-while-revalidate=7200",
          },
        })
          .then((r) => r.json())
          .then((res) => {
            if (res.error) {
              return <ErrorStack error={res.error} />;
            }

            setMarks(res);
          })
          .catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attendance, marks, userInfo]);

  useEffect(() => {
    if (day && !day.dayOrder.includes("No"))
      setToday(table?.table[Number(day.dayOrder) - 1].subjects);
    else if (day && day.dayOrder.includes("No")) {
      setToday([]);
    }
  }, [table, day]);

  return (
    <>
      <Loader />
      <Header title={"Academia | AcademiaPro"} />

      <main className="root">
        <Sidebar day={day} todayTable={todayTable} />

        <div className="content">
          <section id="timetable">
            <h2 className="subtitle">
              Timetable{" "}
              {userInfo?.userInfo &&
              todayTable &&
              todayTable?.filter((a) => a != null).length > 0 ? (
                <a href={`/timetable`} className="download">
                  Generate
                </a>
              ) : null}
            </h2>
            <div className="table-responsive">
              <table className="table-bordered flex w-full gap-1 text-center md:table">
                <thead className="table-header-group">
                  <TableHeader />
                </thead>
                {todayTable && userInfo && (
                  <TimeTableComponent table={todayTable} userInfo={userInfo} />
                )}
              </table>
            </div>
          </section>

          <section id="attendance" className="attendance">
            <h2 className="subtitle">Attendance</h2>
            <AttendanceTable data={attendance} todayTable={todayTable} />
          </section>

          <section className="marks" id="marks">
            <h2 className="subtitle">
              Marks{" "}
              {userInfo?.userInfo ? (
                <a href={`https://gradex.vercel.app`} className="download">
                  Calculate
                </a>
              ) : null}
            </h2>
            <MarksTable data={marks} />
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
