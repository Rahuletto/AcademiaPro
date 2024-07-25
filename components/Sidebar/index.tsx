import Link from "./SidebarLink";
import { TbMenu2 } from "react-icons/tb";
import { BiHelpCircle } from "react-icons/bi";
import { FaBookOpen, FaGraduationCap, FaLink } from "react-icons/fa6";
import { HiLightningBolt } from "react-icons/hi";
import { BsCalendar2WeekFill } from "react-icons/bs";
import DayOrder from "../badges/Day";
import Hours from "../badges/Hours";

export function Sidebar() {
  return (
    <>
      <div className="nav-hider" />
      <div className="bg-background sticky top-[12px] flex min-h-[95vh] w-full min-w-[200px] max-w-[300px] flex-col justify-between p-[22px] pl-[32px] transition-[0.2s_cubic-bezier(0.65,_0.35,_0.17,_1)]">
        <div className="flex flex-col gap-[18px]">
          <div className="text-color flex items-center justify-between">
            <h1 className="text-3xl font-semibold">AcademiaPro</h1>
            <Link href="/docs.pdf">
              <BiHelpCircle
                className="*: text-lg"
                title="How to use it like a pro?"
              />
            </Link>
          </div>
          <div className="flex justify-between">
            <DayOrder />
            <Hours />
          </div>
          <hr className="border-backgroundDark" />

          <div className="text-md flex flex-col gap-2 font-semibold">
            <Link href="/academia">
              <FaBookOpen className="text-xl" />
              Home
            </Link>

            <Link href="/courses">
              <FaGraduationCap className="text-xl" />
              Course list
            </Link>

            <Link href="/calendar#today">
              <BsCalendar2WeekFill className="text-xl" />
              Calendar
            </Link>

            <Link href="/links">
              <FaLink className="text-xl" />
              Useful Links
            </Link>
          </div>

          <hr className="border-backgroundDark" />

          <Link
            className="font-semibold text-light-warn-color hover:bg-light-warn-background hover:text-light-warn-color dark:text-dark-warn-color dark:hover:bg-dark-warn-background dark:hover:text-dark-warn-color"
            title="BetterLab"
            href="https://better-lab.vercel.app"
            target="_blank"
          >
            <HiLightningBolt className="text-xl" />
            eLab
          </Link>
        </div>
        <div className="nav-foot"></div>
      </div>
    </>
  );
}
