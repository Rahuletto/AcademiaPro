import { useState, ReactNode, useEffect, useRef } from "react";
import Link from "./SidebarLink";
import {
  FaAnglesLeft,
  FaAnglesRight,
  FaBookOpen,
  FaGraduationCap,
  FaLink,
} from "react-icons/fa6";
import { HiLightningBolt } from "react-icons/hi";
import { BsCalendar2WeekFill } from "react-icons/bs";
import DayOrder from "../badges/Day";
import Hours from "../badges/Hours";

export function Sidebar({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (ref.current && !isOpen) {
      const handleMouseEnter = () => {
        setIsOpen(true);
      };
      const handleMouseLeave = () => {
        setIsOpen(false);
      };

      if (content.current) {
        content.current.addEventListener("mouseenter", handleMouseLeave);
      }

      ref.current.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        ref.current?.removeEventListener("mouseenter", handleMouseEnter);
      };
    }
  }, [isOpen]);

  return (
    <>
      <div className="fixed left-0 top-0 flex h-screen w-screen flex-row justify-between gap-10 p-2 transition duration-300 md:p-3">
        <div
          ref={ref}
          className={`fixed left-0 top-0 flex h-full transform flex-col gap-2 bg-light-background-light p-4 text-white transition-transform duration-300 dark:bg-dark-background-normal ${
            isOpen ? "translate-x-0" : "-translate-x-96 lg:-translate-x-56"
          } w-[310px] p-8`}
        >
          {isOpen && (
            <>
              <div>
                <div className="text-color flex items-center justify-between">
                  <h1 className="text-3xl font-semibold">AcademiaPro</h1>
                </div>
                <div className="my-4 flex gap-2">
                  <DayOrder />
                  <Hours />
                </div>
              </div>
              <hr className="border-t-light-side dark:border-t-dark-side" />
            </>
          )}

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

          <button
            type="button"
            name="Open navbar"
            className={`fixed bottom-5 hidden rounded-full p-3 lg:block ${isOpen ? "right-5 bg-light-error-background dark:bg-dark-error-background" : "right-7 bg-transparent"}`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <FaAnglesLeft className="text-xl dark:text-dark-error-color" />
            ) : (
              <FaAnglesRight className="text-xl" />
            )}
          </button>
        </div>

        <div
          className={`fixed h-full max-h-[98vh] max-w-[96vw] w-full flex-1 transform duration-300 md:relative md:w-full ${isOpen ? "ml-[300px]" : "-ml-1 lg:ml-[55px]"}`}
        >
          <div
            ref={content}
            className="m-0.5 h-full w-full animate-fadeIn overflow-y-auto overflow-x-hidden rounded-2xl bg-light-background-dark p-6 md:p-7 dark:bg-dark-background-dark"
          >
            {children}
          </div>
        </div>
        <button
          type="button"
          name="Open navbar"
          className={`fixed bottom-5 rounded-full p-3 lg:hidden ${isOpen ? "right-5 bg-light-error-background dark:bg-dark-error-background" : "right-5 bg-transparent"}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <FaAnglesLeft className="text-xl dark:text-dark-error-color" />
          ) : (
            <FaAnglesRight className="text-xl" />
          )}
        </button>
      </div>
    </>
  );
}
