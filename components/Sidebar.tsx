import Link from "next/link";
import { TbMenu2 } from "react-icons/tb";

import type { DayOrderResponse } from "@/types/DayOrder";
import { useEffect, useRef } from "react";
import { BiHelpCircle } from "react-icons/bi";
import { FaBookOpen, FaGraduationCap, FaLink } from "react-icons/fa6";
import { HiLightningBolt } from "react-icons/hi";
import Skeleton from "react-loading-skeleton";
import DayOrder from "./badges/DayOrder";
import Hour from "./badges/Hour";
import Profile from "./badges/Profile";

import { useUser } from "@/providers/UserProvider";
import { BsCalendar2WeekFill } from "react-icons/bs";
import ProfileDialog from "./ProfileDialog";
// import Warn from "./badges/Warn";

interface SidebarProps {
  todayTable?: (string | undefined)[] | undefined;
  day?: DayOrderResponse | null;
  page?: "Home" | "Calendar" | "Link" | "Course" | "Results";
}

export function Sidebar({ todayTable, day, page }: SidebarProps) {
  const userInfo = useUser();

  useEffect(() => {
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
      <div className="nav-hider" />
      <ProfileDialog />
      {/* <Warn /> */}
      <div className="nav">
        <div className="navbox">
          <div className="nav-title">
            <h1>Academia</h1>
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
              className={`h-button ${!page || page === "Home" ? "active" : ""}`}
              href="/academia#timetable"
            >
              Home
              <FaBookOpen className="text-xl" />{" "}
            </Link>

            {/* <Link
              className={'h-button' + (page === 'Results' ? ' active' : '')}
              href="/results"
            >
              Exam Results
                <FaSignature className="text-xl" />            
            </Link> */}

            <Link
              className={`h-button ${page === "Course" ? "active" : ""}`}
              href="/courses"
            >
              Course list
              <FaGraduationCap className="text-lg" />
            </Link>

            <Link
              className={`h-button ${page === "Calendar" ? "active" : ""}`}
              href="/calendar#today"
            >
              Calendar
              <BsCalendar2WeekFill className="text-xl" />
            </Link>

            <Link
              className={`h-button ${page === "Link" ? "active" : ""}`}
              href="/links"
            >
              Useful Links
              <FaLink className="text-lg" />
            </Link>

            <hr />

            <Link
              title="BetterLab"
              style={{ color: "#FFCA63" }}
              className="h-button"
              id="blab"
              target="_blank"
              href="https://better-lab.vercel.app"
            >
              eLab
              <HiLightningBolt className="text-lg" />
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

      <button type="button" name="Open navbar" className="open">
        <TbMenu2 />
      </button>
    </>
  );
}
