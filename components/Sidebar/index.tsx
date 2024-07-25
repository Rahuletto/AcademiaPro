import { useState } from "react";
import Link from "./SidebarLink";
import { FaBookOpen, FaGraduationCap, FaLink } from "react-icons/fa6";
import { HiLightningBolt } from "react-icons/hi";
import { BsCalendar2WeekFill } from "react-icons/bs";
import DayOrder from "../badges/Day";
import Hours from "../badges/Hours";
import { ReactNode } from "react";
import { TbMenu2 } from "react-icons/tb";

export function Sidebar({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed left-0 top-0 flex h-screen w-screen flex-row justify-between gap-10 p-3 transition duration-300">
        <div
          className={`fixed left-0 top-0 h-full transform bg-light-background-light p-4 text-white transition-transform dark:bg-dark-background-normal ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } w-[300px]`}
        >
          <div className="text-color flex items-center justify-between">
            <h1 className="text-3xl font-semibold">AcademiaPro</h1>
          </div>
          <div className="my-4 flex gap-2">
            <DayOrder />
            <Hours />
          </div>
          <hr className="border-t-light-side dark:border-t-dark-side" />

          <div className="text-md flex flex-col gap-1 font-semibold">
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

          <hr className="border-t-light-side dark:border-t-dark-side" />

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

        <div
          className={`h-full flex-1 transform transition-transform ${isOpen ? "ml-[300px]" : "ml-0"}`}
        >
          <div className="m-0.5 h-full w-full animate-fadeIn overflow-y-auto overflow-x-hidden rounded-2xl bg-light-background-dark p-4 md:p-7 dark:bg-dark-background-dark">
            {children}
          </div>
        </div>

        <button
          type="button"
          name="Open navbar"
          className="fixed bottom-5 right-5 rounded-full bg-gray-800 p-3 text-white shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <TbMenu2 className="text-xl" />
        </button>
      </div>
    </>
  );
}
