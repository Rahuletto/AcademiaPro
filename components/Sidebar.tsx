import Link from "next/link";
import { TbMenu2 } from "react-icons/tb";

import { BiHelpCircle } from "react-icons/bi";
import { FaBookOpen, FaGraduationCap, FaLink } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import DayOrder from "./badges/DayOrder";
import Hour from "./badges/Hour";
import Profile from "./badges/Profile";
import { DayOrderResponse } from "@/types/DayOrder";
import { useEffect, useRef } from "react";

import { Hyperping } from "@/utils/hyperping";
import { BsCalendar2WeekFill } from "react-icons/bs";
import ProfileDialog from "./ProfileDialog";
import { useUser } from "@/providers/UserProvider";
import Warn from "./badges/Warn";

interface SidebarProps {
  todayTable?: (string | undefined)[] | undefined;
  day?: DayOrderResponse | null;
  page?: "Home" | "Calendar" | "Link" | "Course" | "Results";
}

export function Sidebar({ todayTable, day, page }: SidebarProps) {
  const hyper = useRef<any>(null);

  const userInfo = useUser();

  useEffect(() => {
    if (!hyper.current) {
      hyper.current = Hyperping.init({
        statuspage: "https://academia-pro.hyperping.app",
        border: "none",
        borderColor: "",
        uptime: false,
        dot: false,
        dotSize: 10,
        isNeutral: false,
        dotOk: "#2BAC76",
        dotIncident: "#FFAF36",
        dotOutage: "#E95858",
        dotMaintenance: "#0070F3",
        dotNeutral: "#0070F3",
        operational: "Smooth sailing",
        incident: "Minor incident",
        outage: "Something's off",
        maintenance: "Under maintainance",
      });
    }

    const btn = document.querySelector(".open");
    const nav = document.querySelector(".nav");
    const navCloser = document.querySelector(".nav-hider");

    function visible(e: any) {
      e.preventDefault();
      nav?.classList.toggle("viewable");
      navCloser?.classList.toggle("viewable");
    }

    function hide() {
      nav?.classList.remove("viewable");
      navCloser?.classList.remove("viewable");
    }

    btn?.addEventListener("click", visible);

    navCloser?.addEventListener("click", hide);

    return () => {
      btn?.removeEventListener("click", visible);
      navCloser?.removeEventListener("click", hide);
    };
  }, []);
  return (
    <>
      <div className="nav-hider"></div>
      <ProfileDialog />
      {/* <Warn /> */}
      <div className="nav">
        <div className="navbox">
          <div className="nav-title">
            <a id="hyperping-badge">
              <h1>Academia</h1>
            </a>

            <Link href="/docs.pdf">
              <BiHelpCircle title="How to use it like a pro?" />
            </Link>
          </div>

          <div className="flex gap-[12px]">
            <>
              {day ? (
                <DayOrder data={day} />
              ) : (
                <Skeleton className="h-[30px] w-[100px] rounded-md opacity-60" />
              )}
              {todayTable && userInfo && (
                <Hour data={todayTable.filter((e) => e)?.length} />
              )}
            </>
          </div>

          <hr />

          <div className="nav-buttons">
            <Link
              className={
                "h-button" + (!page || page == "Home" ? " active" : "")
              }
              href="/academia#timetable"
            >
              Home
              <FaBookOpen className="text-xl" />{" "}
            </Link>

            {/* <Link
              className={'h-button' + (page == 'Results' ? ' active' : '')}
              href="/results"
            >
              Exam Results
                <FaSignature className="text-xl" />            
            </Link> */}

            <Link
              className={"h-button" + (page == "Calendar" ? " active" : "")}
              href="/calendar#today"
            >
              Calendar
              <BsCalendar2WeekFill className="text-xl" />
            </Link>

            {/* <Link
              className={'h-button' + (page == 'Course' ? ' active' : '')}
              href="/courses"
            >
              Course list
            <FaGraduationCap className="text-lg" />
            </Link> */}

            <Link
              title="🏗️ Coming soon. 🚧"
              className={`h-button disabled${page == "Course" ? "active" : ""}`}
              href="#"
            >
              Course list
              <FaGraduationCap className="text-lg" />
            </Link>

            <Link
              className={`h-button${page == "Link" ? "active" : ""}`}
              href="/links"
            >
              Useful Links
              <FaLink className="text-lg" />
            </Link>
          </div>
        </div>
        <div className="nav-foot">
          {userInfo ? (
            <Profile data={userInfo} />
          ) : (
            <Skeleton className="h-[64px] w-full rounded-md opacity-60" />
          )}
        </div>
      </div>

      <button name="Open navbar" className="open">
        <TbMenu2 />
      </button>
    </>
  );
}
