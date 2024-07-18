/** eslint-disable @next/next/no-html-link-for-pages */
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

import { getCookie } from "@/utils/cookies";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { Sidebar } from "@/components/Sidebar";
import { TableHeader } from "@/components/TableHeader";
import { useCourses } from "@/providers/CourseProvider";
import { useDay } from "@/providers/DayProvider";
import { useTimeTable } from "@/providers/TableProvider";
import { useUser } from "@/providers/UserProvider";
import { URL } from "@/utils/url";
import Link from "next/link";
import ErrorStack from "./error";

export default function Academia() {
  const router = useRouter();
  const userInfo = useUser();
  const day = useDay();
  const table = useTimeTable();
  const courses = useCourses();

  const [attendance, setAttendance] = useState<AttendanceResponse | null>(null);
  const [todayTable, setToday] = useState<(string | undefined)[] | undefined>(
    [],
  );
  const [marks, setMarks] = useState<MarksResponse | null>(null);
  const [view, setView] = useState(false);

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
  }, [attendance, marks, userInfo]);

  useEffect(() => {
    if (day && !day.dayOrder.includes("No"))
      setToday(table?.table[Number(day.dayOrder) - 1].subjects);
    else if (day?.dayOrder.includes("No")) {
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
              {userInfo?.userInfo && (
                <Link href="/timetable" className="download">
                  Generate
                </Link>
              )}
            </h2>
            <div className="table-responsive">
              <table className="table-bordered flex w-full text-center md:table md:gap-1">
                <thead className="table-header-group">
                  <TableHeader />
                </thead>
                {todayTable && userInfo && (
                  <TimeTableComponent
                    view={view}
                    courses={courses}
                    table={todayTable}
                  />
                )}
              </table>
            </div>
            {courses?.[0] && (
              <div
                onKeyDown={() => {}}
                onClick={() => setView((prev) => !prev)}
                className="mt-3 flex items-center justify-center gap-3 opacity-70"
              >
                <button
                  className={`${view ? "border-transparent bg-green" : "border-accent"} h-3 w-3 rounded-full border-2`}
                  type="button"
                />{" "}
                {view ? "Hide" : "View"} classroom no.
              </div>
            )}
          </section>

          <section id="attendance" className="attendance">
            <h2 className="subtitle">Attendance</h2>
            <AttendanceTable data={attendance} todayTable={todayTable} />
          </section>

          <section className="marks" id="marks">
            <h2 className="subtitle">
              Marks{" "}
              {userInfo?.userInfo ? (
                <a href="https://gradex.vercel.app" className="download">
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
