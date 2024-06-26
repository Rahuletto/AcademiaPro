import CalendarGenerator from "@/generator/CalendarGenerator";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { Sidebar } from "@/components/Sidebar";
import { useDay } from "@/providers/DayProvider";
import { useUser } from "@/providers/UserProvider";
import { CalendarResponse } from "@/types/Calendar";
import { clearCookies, getCookie } from "@/utils/cookies";
import { URL } from "@/utils/url";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import Footer from "@/components/Footer";

export default function Academia() {
  const router = useRouter();

  const userInfo = useUser();
  const day = useDay();
  const [page, setPage] = useState(0);
  const [calendar, setCalendar] = useState<CalendarResponse | null>(null);

  useEffect(() => {
    if (!getCookie("token")) router.push("/login");

    const c = localStorage.getItem("univPlanner");
    if (c && JSON.parse(c).expireAt > Date.now()) setCalendar(JSON.parse(c));
    else
      fetch(`${URL}/api/calendar`, {
        next: { revalidate: 2 * 3600 },
        method: "GET",
        cache: "force-cache",
        headers: {
          "X-CSRF-Token": getCookie("token") as string,
          "Set-Cookie": getCookie("token") as string,
          Cookie: getCookie("token") as string,
          Connection: "keep-alive",
          "Accept-Encoding": "gzip, deflate, br, zstd",
        },
      })
        .then((r) => r.json())
        .then((res) => {
          if (res.token_refresh) {
            clearCookies();
            window.location.reload();
          } else {
            localStorage.setItem("univPlanner", JSON.stringify(res));
            setCalendar(res);
          }
        })
        .catch(() => {});

    setTimeout(() => {
      const todayScroll = document.getElementById("today");
      todayScroll?.scrollIntoView();
    }, 2000);
  }, []);

  useEffect(() => {
    const month = new Date().getMonth() % 6;
    setPage(
      calendar?.calendar && calendar?.calendar?.length < month ? 0 : month,
    );
  }, [calendar]);

  return (
    <>
      <Loader />
      <Header title={"Calendar | AcademiaPro"} />
      <main className="root">
        <Sidebar day={day} page="Calendar" />

        <div className="flex-grow p-4">
          {calendar?.calendar &&
          !calendar.calendar[0].month.includes("released") ? (
            <>
              <CalendarGenerator page={page} data={calendar.calendar[page]}>
                <div className="paginate">
                  <button
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
            <div className="m-3 flex h-[82vh] items-center justify-center rounded-[22px] bg-backgroundLight">
              <h4 className="text-center text-lg opacity-80">
                It{"'"}s not released yet. Please check back later.
              </h4>
            </div>
          )}
          <Footer />
        </div>
      </main>
    </>
  );
}
