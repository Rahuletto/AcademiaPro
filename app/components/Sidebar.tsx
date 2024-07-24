import Link from "next/link";
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
            <h1>Academia</h1>
            <Link href="/docs.pdf">
              <BiHelpCircle className="text-xl" title="How to use it like a pro?" />
            </Link>
          </div>

          <hr className="border-backgroundDark" />

          <div className="flex flex-col gap-4 text-lg font-semibold">
            <Link
              className="flex items-center gap-2 text-color hover:text-accent transition"
              href="/academia#timetable"
            >
              <FaBookOpen className="text-xl" />
              Home
            </Link>

            <Link className="flex items-center gap-2 text-color hover:text-accent transition" href="/courses">
              <FaGraduationCap className="text-xl" />
              Course list
            </Link>

            <Link className="flex items-center gap-2 text-color hover:text-accent transition" href="/calendar#today">
              <BsCalendar2WeekFill className="text-xl" />
              Calendar
            </Link>

            <Link className="flex items-center gap-2 text-color hover:text-accent transition" href="/links">
              <FaLink className="text-xl" />
              Useful Links
            </Link>
          </div>

          <hr className="border-backgroundDark" />

          <Link
            className="flex items-center gap-2 text-yellow hover:text-yellow transition"
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

      <button type="button" name="Open navbar" className="open text-color">
        <TbMenu2 className="text-2xl" />
      </button>
    </>
  );
}
