import { useState, ReactNode, useEffect, useRef } from "react";
import Link from "./SidebarLink";
import { Link as TransitionLink } from "next-view-transitions";
import { FaBookOpen, FaGraduationCap, FaLink, FaWhatsapp } from "react-icons/fa6";
import { HiLightningBolt } from "react-icons/hi";
import { BsCalendar2WeekFill } from "react-icons/bs";
import DayOrder from "../badges/Day";
import Hours from "../badges/Hours";
import ThemeToggle from "./ThemeToggle";
import OpenButton from "./OpenButton";
import ProfileBadge from "./ProfileBadge";
import MiniButtons from "./MiniButtons";
import { FiGithub } from "react-icons/fi";
import { MdHelpOutline } from "react-icons/md";

export function Sidebar({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  const ref = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        ref.current?.removeEventListener("mouseenter", handleMouseEnter);
      };
    }
  }, [isOpen]);

  return (
    <>
      <div className="fixed left-0 top-0 flex h-screen w-screen flex-row justify-between gap-10 p-2 transition duration-300 md:p-3">
        <div
          ref={ref}
          className={`fixed left-0 top-0 flex h-full transform flex-col justify-between bg-light-background-normal p-4 text-white transition-transform md:duration-300 dark:bg-dark-background-normal ${
            isOpen ? "translate-x-0" : "-translate-x-96 lg:-translate-x-56"
          } w-[310px] p-8`}
        >
          <div className="flex flex-col gap-2">
            <div
              className={`transition duration-200 ${isOpen ? "opacity-100" : "opacity-0"}`}
            >
              <div className="text-color flex items-center justify-between text-light-color dark:text-dark-color">
                <TransitionLink href="/home" className="text-3xl font-semibold">
                  AcademiaPro
                </TransitionLink>
                <ThemeToggle />
              </div>
              <div className="my-4 flex gap-2">
                <DayOrder />
                <Hours />
              </div>
            </div>
            {!isOpen && (
              <DayOrder
                mini
                className="fixed right-9 flex items-center justify-center"
              />
            )}
            <hr className="border-t-light-side dark:border-t-dark-side" />

            <div className="text-md flex flex-col gap-2 font-semibold text-light-color dark:text-dark-color">
              <Link href="/academia">
                <FaBookOpen className="text-xl" />
                Home
              </Link>

              <Link href="/courses">
                <FaGraduationCap className="text-xl" />
                Course list
              </Link>

              <Link href="/calendar">
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

          <div className="flex flex-col-reverse gap-4">
            <div className="flex gap-2 items-center">
              <h4 className="text-xs opacity-60 transition duration-200 font-mono">Support: </h4>
              <MiniButtons icon={<FiGithub />} href="https://github.com/rahuletto/academiapro" />
              <MiniButtons icon={<FaWhatsapp />} href="https://chat.whatsapp.com/IiKvVzwV142I11Ytqn9RF9" />
            </div>
            {isOpen && <ProfileBadge />}
            </div>
          <OpenButton isOpen={isOpen} setIsOpen={setIsOpen} />
          {!isOpen && <MiniButtons className="lg:block hidden fixed bottom-8 right-9" icon={<MdHelpOutline />} href="https://chat.whatsapp.com/IiKvVzwV142I11Ytqn9RF9" />}
        </div>

        <div
          className={`fixed h-full max-h-[98vh] w-full max-w-[96vw] flex-1 transform duration-300 md:relative md:w-full ${isOpen ? "ml-[300px]" : "-ml-1 lg:ml-[55px]"}`}
        >
          <div
            ref={content}
            className="m-0.5 h-full w-full animate-fadeIn overflow-y-auto overflow-x-hidden rounded-2xl bg-light-background-dark p-6 md:p-7 dark:bg-dark-background-dark"
          >
            {children}
          </div>
        </div>

        <OpenButton mobile isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div id="dialog-root" />
    </>
  );
}
