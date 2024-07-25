import Link from "./SidebarLink";
import { TbMenu2 } from "react-icons/tb";
import { BiHelpCircle } from "react-icons/bi";
import { FaBookOpen, FaGraduationCap, FaLink } from "react-icons/fa6";
import { HiLightningBolt } from "react-icons/hi";
import { BsCalendar2WeekFill } from "react-icons/bs";

export function Sidebar() {
  return (
    <>
      <div className="nav-hider" />
      <div className="w-full max-w-[300px] min-w-[200px] min-h-[95vh] flex flex-col sticky top-[12px] p-[22px] justify-between transition-[0.2s_cubic-bezier(0.65,_0.35,_0.17,_1)] pl-[32px] bg-background">
        <div className="flex flex-col gap-[18px]">
          <div className="flex items-center justify-between text-color">
            <h1 className="text-3xl font-semibold">AcademiaPro</h1>
            <Link href="/docs.pdf">
              <BiHelpCircle className="text-xl" title="How to use it like a pro?" />
            </Link>
          </div>

          <hr className="border-backgroundDark" />

          <div className="flex flex-col gap-2 text-md font-semibold">
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
            className="text-light-warn-color dark:text-dark-warn-color font-semibold hover:bg-light-warn-background dark:hover:bg-dark-warn-background hover:text-light-warn-color dark:hover:text-dark-warn-color "
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
