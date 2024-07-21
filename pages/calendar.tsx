import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { Sidebar } from "@/components/Sidebar";
import CalendarGenerator from "@/generator/CalendarGenerator";
import { useDay } from "@/providers/DayProvider";
import { useTimeTable } from "@/providers/TableProvider";
import type { CalendarResponse } from "@/types/Calendar";
import { getCookie } from "@/utils/cookies";
import { URL } from "@/utils/url";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import ErrorStack from "./error";

export default function Calendar() {
  const router = useRouter();

  const day = useDay();
  const [page, setPage] = useState(0);
  const [calendar, setCalendar] = useState<CalendarResponse | null>(null);

  const [today, setToday] = useState<(string | undefined)[] | undefined>([]);
  const table = useTimeTable();

  useEffect(() => {
    if (day && !day.dayOrder.includes("No") && table?.table)
      setToday(table?.table[Number(day.dayOrder) - 1].subjects);
    else if (day?.dayOrder.includes("No")) {
      setToday([]);
    }
  }, [table, day]);

  useEffect(() => {
    if (!getCookie("token")) router.push("/login");

    const sessionCal = sessionStorage.getItem("cal");
    if (sessionCal) {
      setCalendar(JSON.parse(sessionCal));
    }

    fetch(`${URL}/api/calendar`, {
      method: "GET",
      next: { revalidate: 7200 },
      headers: {
        "X-CSRF-Token": getCookie("token") as string,
        "Set-Cookie": getCookie("token") as string,
        Cookie: getCookie("token") as string,
        Connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Cache-Control": "public, maxage=86400, stale-while-revalidate=7200",
      },
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.error) return <ErrorStack error={res.error} />;
        sessionStorage.setItem("cal", JSON.stringify(res));
        setCalendar(res);
      })
      .catch(() => {});
  }, [router]);

  useEffect(() => {
    const month = new Date().getMonth() % 5;
    setPage(
      calendar?.calendar && calendar?.calendar?.length < month ? 0 : month,
    );
    setTimeout(() => {
      const todayScroll = document.getElementById("today");
      todayScroll?.scrollIntoView();
    }, 10);
  }, [calendar]);

  return (
    <>
      <Loader />
      <Header title={"Calendar | AcademiaPro"} />
      <main className="root">
        <Sidebar todayTable={today} day={day} page="Calendar" />
        <div className="content flex-grow p-4">
          {calendar?.calendar?.[0]?.month?.includes("released") ? (
            <div className="m-3 flex h-[89vh] items-center justify-center rounded-[22px] bg-backgroundLight">
              <h4 className="text-center text-lg opacity-80">
                It{"'"}s not released yet. Please check back later.
              </h4>
            </div>
          ) : calendar?.calendar[0] ? (
            <>
              <CalendarGenerator page={page} data={calendar.calendar[page]}>
                <div className="paginate">
                  <button
                    type="button"
                    onClick={() => setPage((e) => e - 1)}
                    disabled={page <= 0}
                    className="p-2"
                  >
                    <FaCaretLeft />
                  </button>
                  <h3 className="month text-center">
                    {calendar?.calendar[page]?.month}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setPage((e) => e + 1)}
                    disabled={page >= calendar?.calendar.length - 1}
                    className="p-2"
                  >
                    <FaCaretRight />
                  </button>
                </div>
              </CalendarGenerator>
            </>
          ) : (
            <Skeleton
              count={30}
              height={42}
              containerClassName="w-[80vw] mt-3"
              style={{ borderRadius: 12 }}
            />
          )}
          <Footer />
        </div>
      </main>
    </>
  );
}
