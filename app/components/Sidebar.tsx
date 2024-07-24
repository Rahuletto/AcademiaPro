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
      <div className="nav">
        <div className="navbox">
          <div className="nav-title">
            <h1>Academia</h1>
            <Link href="/docs.pdf">
              <BiHelpCircle title="How to use it like a pro?" />
            </Link>
          </div>

          <hr />

          <div className="nav-buttons">
            <Link className="h-button active" href="/academia#timetable">
              Home
              <FaBookOpen className="text-xl" />
            </Link>

            <Link className="h-button" href="/courses">
              Course list
              <FaGraduationCap className="text-lg" />
            </Link>

            <Link className="h-button" href="/calendar#today">
              Calendar
              <BsCalendar2WeekFill className="text-xl" />
            </Link>

            <Link className="h-button" href="/links">
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
        <div className="nav-foot"></div>
      </div>

      <button type="button" name="Open navbar" className="open">
        <TbMenu2 />
      </button>
    </>
  );
}
