import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

const AttendanceTable = dynamic(
  () => import("@/components/Attendance").then((mod) => mod.default),
  { ssr: false }
);

const MarksTable = dynamic(
  () => import("@/components/Marks").then((mod) => mod.default),
  { ssr: false }
);

const TimeTableComponent = dynamic(
  () => import("@/components/Timetable").then((mod) => mod.default),
  { ssr: false }
);

const DayOrder = dynamic(
  () => import("@/components/badges/DayOrder").then((mod) => mod.default),
  { ssr: false }
);

const Hour = dynamic(
  () => import("@/components/badges/Hour").then((mod) => mod.default),
  { ssr: false }
);

const Profile = dynamic(
  () => import("@/components/badges/Profile").then((mod) => mod.default),
  { ssr: false }
);

import type { AttendanceResponse } from "@/types/Attendance";
import type { DayOrderResponse } from "@/types/DayOrder";
import type { Table, TimeTableResponse } from "@/types/TimeTable";
import type { InfoResponse } from "@/types/UserInfo";
import type { MarksResponse } from "@/types/Marks";

import { getCookie, clearCookies } from "@/utils/cookies";

import Loader from "@/components/Loader";
import Header from "@/components/Header";

export default function Academia() {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState<InfoResponse | null>(null);
  const [day, setDay] = useState<DayOrderResponse | null>(null);
  const [attendance, setAttendance] = useState<AttendanceResponse | null>(null);
  const [table, setTable] = useState<TimeTableResponse | null>(null);
  const [todayTable, setToday] = useState<(string | undefined)[] | undefined>(
    []
  );
  const [marks, setMarks] = useState<MarksResponse | null>(null);

  useEffect(() => {
    // marks timetable attendance dayorder
    const m = localStorage.getItem("marks");
    const tt = localStorage.getItem("timetable");
    const a = localStorage.getItem("attendance");
    const da = localStorage.getItem("dayOrder");

    if (m) setMarks(JSON.parse(m));
    if (tt) setMarks(JSON.parse(tt));
    if (a) setMarks(JSON.parse(a));
    if (da) setMarks(JSON.parse(da));

    const info = localStorage.getItem("userData");
    if (info && info?.length > 1) setUserInfo(JSON.parse(info));
    else {
      fetch("https://proscrape.vercel.app/api/info", {
        method: "GET",
        headers: {
          "X-CSRF-Token": getCookie("token") as string,
          "Set-Cookie": getCookie("token") as string,
          Cookie: getCookie("token") as string,
          Connection: "keep-alive",
          Origin: "https://proscrape.vercel.app",
          Referer: "https://proscrape.vercel.app",
          Host: "proscrape.vercel.app",

          "content-type": "application/json",
        },
      })
        .then((e) => e.json())
        .then((data) => {
          setUserInfo(data);
          localStorage.setItem("userData", JSON.stringify(data));
        });
    }

    fetch("https://proscrape.vercel.app/api/dayorder", {
      method: "GET",
      headers: {
        "X-CSRF-Token": getCookie("token") as string,
        "Set-Cookie": getCookie("token") as string,
        Cookie: getCookie("token") as string,
        Connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Cache-Control": "s-maxage=86400, stale-while-revalidate=7200",
      },
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.token_refresh) {
          clearCookies();
          window.location.reload();
        } else {
          localStorage.setItem("dayOrder", JSON.stringify(res));
          setDay(res);
        }
      });

    if (!getCookie("token")) router.push("/login");

    const sections = document.querySelectorAll("section");
    const menu_links = document.querySelectorAll(".h-button");

    const loader = document.querySelector<HTMLElement>(".loadScreen");
    if (loader)
      setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.style.display = "none";
        }, 100);
      }, 3000);

    const makeActive = (link: number) =>
      menu_links[link].classList.add("active");
    const removeActive = (link: number) =>
      menu_links[link].classList.remove("active");
    const removeAllActive = () =>
      [...Array(sections.length).keys()].forEach((link) => removeActive(link));

    const sectionMargin = 100;

    let currentActive = 0;

    window.addEventListener("scroll", () => {
      const current =
        sections.length -
        [...sections]
          .reverse()
          .findIndex(
            (section) => window.scrollY >= section.offsetTop - sectionMargin
          ) -
        1;

      if (current !== currentActive) {
        removeAllActive();
        currentActive = current;
        makeActive(current);
      }
    });

    const btn = document.querySelector(".open");
    const nav = document.querySelector(".nav");
    const navCloser = document.querySelector(".nav-hider");

    btn?.addEventListener("click", (e) => {
      e.preventDefault();
      nav?.classList.toggle("viewable");
      navCloser?.classList.toggle("viewable");
    });

    navCloser?.addEventListener("click", () => {
      nav?.classList.remove("viewable");
      navCloser?.classList.remove("viewable");
    });

    const home = document.querySelector(".h-button[href='#timetable']");
    home?.addEventListener("click", () => {
      setTimeout(() => window.scroll(0, 0), 20);
    });
  }, []);

  useEffect(() => {
    if (userInfo) {
      fetch("https://proscrape.vercel.app/api/attendance", {
        method: "GET",
        headers: {
          "X-CSRF-Token": getCookie("token") as string,
          "Set-Cookie": getCookie("token") as string,
          Cookie: getCookie("token") as string,
          Connection: "keep-alive",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "Cache-Control": "s-maxage=86400, stale-while-revalidate=7200",
        },
      })
        .then((r) => r.json())
        .then((res) => {
          if (res.token_refresh) {
            clearCookies();
            window.location.reload();
          } else {
            setAttendance(res);
            localStorage.setItem("attendance", JSON.stringify(res));
          }
        })
        .catch(() => {});

      fetch(
        `https://proscrape.vercel.app/api/timetable?batch=${userInfo?.userInfo.batch}`,
        {
          method: "GET",
          headers: {
            "X-CSRF-Token": getCookie("token") as string,
            "Set-Cookie": getCookie("token") as string,
            Cookie: getCookie("token") as string,
            Connection: "keep-alive",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Cache-Control": "s-maxage=86400, stale-while-revalidate=7200",
          },
        }
      )
        .then((r) => r.json())
        .then((res) => {
          if (res.token_refresh) {
            clearCookies();
            window.location.reload();
          } else {
            setTable(res);
            localStorage.setItem("timetable", JSON.stringify(res));
          }
        })
        .catch(() => {});

      fetch("https://proscrape.vercel.app/api/marks", {
        method: "GET",
        headers: {
          "X-CSRF-Token": getCookie("token") as string,
          "Set-Cookie": getCookie("token") as string,
          Cookie: getCookie("token") as string,
          Connection: "keep-alive",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "Cache-Control": "s-maxage=86400, stale-while-revalidate=7200",
        },
      })
        .then((r) => r.json())
        .then((res) => {
          if (res.token_refresh) {
            clearCookies();
            window.location.reload();
          } else {
            setMarks(res);
            localStorage.setItem("marks", JSON.stringify(res));
          }
        })
        .catch(() => {});
    }
  }, [userInfo]);

  useEffect(() => {
    if (day && !day.dayOrder.includes("No"))
      setToday(table?.table[Number(day.dayOrder) - 1].subjects);
    console.log(table?.table[Number(day?.dayOrder) - 1]);
  }, [table, day]);

  return (
    <>
      <Loader />
      <Header title={"Academia | AcademiaPro"} />
      <style>{`
    body {
        padding-left: 0px !important;
        padding-right: 0px !important;
      }
      `}</style>
      <main className="root">
        <div className="nav-hider"></div>
        <div className="nav">
          <div className="navbox">
            <h1>Academia</h1>
            <div style={{ display: "flex", gap: 12 }}>
              {DayOrder && Hour && (
                <>
                  <DayOrder data={day} />
                  {todayTable && <Hour data={todayTable.filter((e) => e)?.length} />}
                </>
              )}
            </div>
            <hr />

            <div className="nav-buttons">
              <Link className="h-button active" href="#timetable">
                Time Table
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    id="timetable"
                    d="M18.9714 0.251953H2.83211C1.56402 0.251953 0.526489 1.32406 0.526489 2.63442V19.3117C0.526489 20.6221 1.56402 21.6942 2.83211 21.6942H18.9714C20.2395 21.6942 21.277 20.6221 21.277 19.3117V2.63442C21.277 1.32406 20.2395 0.251953 18.9714 0.251953ZM10.9018 16.9292H3.98491V14.5468H10.9018V16.9292ZM14.3602 12.1643H7.44334V9.78183H14.3602V12.1643ZM17.8186 7.39936H10.9018V5.01689H17.8186V7.39936Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>

              <Link className="h-button" href="#attendance">
                Attendance
                <svg
                  width="25"
                  height="21"
                  viewBox="0 0 25 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1636 8.77817L12.9017 7.74877L15.1636 6.71938L16.1957 4.46346L17.2277 6.71938L19.4896 7.74877L17.2277 8.77817L16.1957 11.0341L15.1636 8.77817ZM4.11791 13.2243L5.15 10.9684L7.41184 9.93898L5.15 8.90959L4.11791 6.65367L3.08581 8.90959L0.823975 9.93898L3.08581 10.9684L4.11791 13.2243ZM9.0588 7.74877L10.2556 5.10957L12.9017 3.91591L10.2556 2.72224L9.0588 0.0830383L7.86201 2.72224L5.21588 3.91591L7.86201 5.10957L9.0588 7.74877ZM4.66689 20.3425L11.2548 13.7609L15.6467 18.1413L24.9795 7.67212L23.4313 6.12802L15.6467 14.856L11.2548 10.4756L3.01993 18.6998L4.66689 20.3425Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>

              <Link className="h-button" href="#marks">
                Marks
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="19"
                  viewBox="0 0 21 19"
                  fill="currentColor"
                >
                  <path
                    d="M7.81438 7.74047L8.88143 9.83027H6.74733L7.81438 7.74047ZM20.9355 2.26882V17.3917C20.9356 17.5207 20.902 17.6475 20.8379 17.7602C20.7739 17.8728 20.6815 17.9676 20.5695 18.0354C20.4576 18.1032 20.3298 18.1419 20.1983 18.1476C20.0668 18.1534 19.936 18.1262 19.8182 18.0685L17.0763 16.7244L14.3344 18.0685C14.2272 18.121 14.1089 18.1484 13.989 18.1484C13.8691 18.1484 13.7508 18.121 13.6436 18.0685L10.9017 16.7244L8.15977 18.0685C8.05254 18.121 7.93429 18.1484 7.81438 18.1484C7.69447 18.1484 7.57622 18.121 7.46899 18.0685L4.72706 16.7244L1.98514 18.0685C1.86743 18.1262 1.7366 18.1534 1.6051 18.1476C1.47361 18.1419 1.3458 18.1032 1.23384 18.0354C1.12189 17.9676 1.02949 17.8728 0.965445 17.7602C0.901398 17.6475 0.867826 17.5207 0.86792 17.3917V2.26882C0.86792 1.86774 1.03055 1.48308 1.32005 1.19947C1.60954 0.915861 2.00217 0.756531 2.41158 0.756531H19.3918C19.8012 0.756531 20.1938 0.915861 20.4833 1.19947C20.7728 1.48308 20.9355 1.86774 20.9355 2.26882ZM11.5925 11.7603L8.50517 5.71117C8.44115 5.58534 8.3426 5.47949 8.22057 5.4055C8.09855 5.33151 7.95788 5.29232 7.81438 5.29232C7.67087 5.29232 7.53021 5.33151 7.40818 5.4055C7.28616 5.47949 7.1876 5.58534 7.12359 5.71117L4.03628 11.7603C3.94467 11.9398 3.9296 12.1476 3.99437 12.338C4.05915 12.5283 4.19846 12.6857 4.38167 12.7755C4.56488 12.8652 4.77697 12.88 4.97129 12.8165C5.16562 12.753 5.32625 12.6166 5.41785 12.4371L5.9755 11.3426H9.65326L10.2109 12.4371C10.2563 12.526 10.319 12.6052 10.3957 12.6703C10.4723 12.7354 10.5612 12.7851 10.6575 12.8165C10.7537 12.8479 10.8553 12.8605 10.9564 12.8534C11.0576 12.8464 11.1564 12.8199 11.2471 12.7755C11.3378 12.731 11.4187 12.6695 11.4851 12.5944C11.5516 12.5194 11.6023 12.4322 11.6344 12.338C11.6665 12.2437 11.6793 12.1442 11.6721 12.0451C11.6649 11.946 11.6378 11.8492 11.5925 11.7603ZM18.62 9.07413C18.62 8.87358 18.5387 8.68125 18.3939 8.53945C18.2492 8.39765 18.0529 8.31798 17.8482 8.31798H16.3045V6.80569C16.3045 6.60515 16.2232 6.41282 16.0784 6.27102C15.9337 6.12921 15.7374 6.04955 15.5327 6.04955C15.328 6.04955 15.1316 6.12921 14.9869 6.27102C14.8422 6.41282 14.7608 6.60515 14.7608 6.80569V8.31798H13.2172C13.0125 8.31798 12.8162 8.39765 12.6714 8.53945C12.5267 8.68125 12.4454 8.87358 12.4454 9.07413C12.4454 9.27467 12.5267 9.467 12.6714 9.6088C12.8162 9.75061 13.0125 9.83027 13.2172 9.83027H14.7608V11.3426C14.7608 11.5431 14.8422 11.7354 14.9869 11.8772C15.1316 12.019 15.328 12.0987 15.5327 12.0987C15.7374 12.0987 15.9337 12.019 16.0784 11.8772C16.2232 11.7354 16.3045 11.5431 16.3045 11.3426V9.83027H17.8482C18.0529 9.83027 18.2492 9.75061 18.3939 9.6088C18.5387 9.467 18.62 9.27467 18.62 9.07413Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          {userInfo && <Profile data={userInfo} />}
        </div>

        <button name="Open navbar" className="open">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="32px"
            width="32px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"></path>
          </svg>
        </button>

        <div className="content">
          <h2
            style={{
              marginTop: 0,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
            className="subtitle"
          >
            Timetable{" "}
            {userInfo ? (
              <a
                href={`/api/${userInfo.userInfo.regNo}?batch=${userInfo.userInfo.batch}`}
                className="download"
              >
                View all
              </a>
            ) : null}
          </h2>
          <section id="timetable" className="table-responsive">
            <table className="table table-bordered text-center">
              <thead>
                <tr className="bg-light-gray">
                  <th title="08:00 - 08:50" className="text-uppercase">
                    1
                  </th>
                  <th title="08:50 - 09:40" className="text-uppercase">
                    2
                  </th>
                  <th title="09:45 - 10:35" className="text-uppercase">
                    3
                  </th>
                  <th title="10:40 - 11:30" className="text-uppercase">
                    4
                  </th>
                  <th title="11:35 - 12:25" className="text-uppercase">
                    5
                  </th>
                  <th title="12:30 - 01:20" className="text-uppercase">
                    6
                  </th>
                  <th title="01:25 - 02:15" className="text-uppercase">
                    7
                  </th>
                  <th title="02:20 - 03:10" className="text-uppercase">
                    8
                  </th>
                  <th title="03:10 - 04:00" className="text-uppercase">
                    9
                  </th>
                  <th title="04:00 - 04:50" className="text-uppercase">
                    10
                  </th>
                </tr>
              </thead>
              {table && userInfo && (
                <TimeTableComponent table={todayTable} userInfo={userInfo} />
              )}
            </table>
          </section>

          <section id="attendance" className="attendance">
            <h2 className="subtitle">Attendance</h2>
            <AttendanceTable data={attendance} />
          </section>

          <section className="marks" id="marks">
            <h2 className="subtitle">Marks</h2>
            <MarksTable data={marks} />
          </section>
        </div>
      </main>
    </>
  );
}
