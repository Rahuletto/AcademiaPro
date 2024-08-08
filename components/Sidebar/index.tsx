"use client";
import { useState, ReactNode, useEffect, useRef } from "react";
import Link from "./SidebarLink";
import { Link as TransitionLink } from "next-view-transitions";
import {
  FaBookOpen,
  FaGraduationCap,
  FaLink,
  FaWhatsapp,
} from "react-icons/fa6";
import { HiLightningBolt } from "react-icons/hi";
import { BsCalendar2WeekFill } from "react-icons/bs";
import DayOrder from "../badges/Day";
import Hours from "../badges/Hours";
import ThemeToggle from "./Buttons/ThemeToggle";
import OpenButton from "./Buttons/OpenButton";
import ProfileBadge from "./ProfileBadge";
import MiniButtons from "./Buttons/MiniButtons";
import { FiGithub } from "react-icons/fi";
import { MdHelpOutline } from "react-icons/md";
import Poster from "../Poster";
import Footer from "../Footer";

export function Sidebar({
  children,
  error,
}: {
  children: ReactNode;
  error?: boolean;
}) {
  const [isMounted, setIsMounted] = useState(false);

  const [isOpen, setIsOpen] = useState(true);

  const ref = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);

    let touchstartX = 0,
      touchendX = 0;

    function handleGesture() {
      const screenWidth = window.innerWidth;
      const swipeThreshold = screenWidth / 4;

      if (touchendX < touchstartX - swipeThreshold) {
        setIsOpen(false);
      }

      if (touchendX > touchstartX + swipeThreshold) {
        setIsOpen(true);
      }
    }

    function startTouch(event: TouchEvent) {
      touchstartX = event.changedTouches[0].screenX;
    }

    function stopTouch(event: TouchEvent) {
      touchendX = event.changedTouches[0].screenX;
      handleGesture();
    }

    function resize() {
      if (window.innerWidth > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }

    window.addEventListener("touchstart", startTouch, false);
    window.addEventListener("touchend", stopTouch, false);
    window.addEventListener("resize", resize, false);

    resize();

    return () => {
      window.removeEventListener("touchstart", startTouch);
      window.removeEventListener("touchend", stopTouch);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsOpen(true);
    };
    const handleMouseLeave = () => {
      setIsOpen(false);
    };

    if (content.current) {
      content.current.addEventListener("touchstart", handleMouseLeave);
    }

    if (ref.current && !isOpen) {
      if (content.current) {
        content.current.addEventListener("mouseenter", handleMouseLeave);
      }

      ref.current.addEventListener("mouseenter", handleMouseEnter);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref.current?.removeEventListener("mouseenter", handleMouseEnter);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref.current?.removeEventListener("touchstart", handleMouseEnter);
    };
  }, [isOpen]);

  if (!isMounted) {
    return null;
  } else
    return (
      <>
        <Poster />
        <nav className="fixed left-0 top-0 flex h-screen w-screen flex-row justify-between gap-10 p-2 transition duration-300 md:p-3">
          <header
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
                  <TransitionLink
                    href="/home"
                    className="text-3xl font-semibold"
                  >
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
                  Resources
                </Link>
              </div>

              <hr className="border-t-light-side dark:border-t-dark-side" />

              <Link
                className="font-semibold text-light-warn-color hover:bg-light-warn-background hover:text-light-warn-color dark:text-dark-warn-color dark:hover:bg-dark-warn-background dark:hover:text-dark-warn-color"
                title="BetterLab"
                href="https://better-lab.vercel.app"
              >
                <HiLightningBolt className="text-xl" />
                eLab
              </Link>
            </div>

            <div className="flex flex-col-reverse gap-4">
              <div className="flex items-center gap-2 text-light-color dark:text-dark-color">
                <h4 className="font-mono text-xs opacity-60 transition duration-200">
                  Community:{" "}
                </h4>
                <MiniButtons
                  icon={<FiGithub />}
                  href="https://github.com/rahuletto/academiapro"
                />
                <MiniButtons
                  icon={<FaWhatsapp />}
                  href="https://chat.whatsapp.com/IiKvVzwV142I11Ytqn9RF9"
                />
              </div>
              <ProfileBadge
                className={isOpen ? "animate-fadeIn" : "opacity-0"}
              />
            </div>
            <OpenButton isOpen={isOpen} setIsOpen={setIsOpen} />
            {!isOpen && (
              <MiniButtons
                className="fixed bottom-8 right-9 hidden lg:block"
                icon={<MdHelpOutline />}
                href="https://chat.whatsapp.com/IiKvVzwV142I11Ytqn9RF9"
              />
            )}
          </header>

          <div
            className={`fixed h-full max-h-[98vh] w-full max-w-[96vw] flex-1 transform duration-300 md:relative md:w-full ${isOpen ? "ml-[300px]" : "-ml-1 lg:ml-[55px]"}`}
          >
            <main
              ref={content}
              className={`m-0.5 h-full w-full overflow-y-auto overflow-x-hidden rounded-2xl bg-light-background-light ${error ? "p-1" : "p-6 md:p-7"} dark:bg-dark-background-dark`}
            >
              <div
                style={error ? { height: "-webkit-fill-available" } : {}}
                className="min-h-[89vh] animate-fadeIn"
              >
                {children}
              </div>
              <Footer className="mt-12" />
            </main>
          </div>

          <OpenButton mobile isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
        <div id="dialog-root" />
      </>
    );
}
