"use client";
import React, { useState, ReactNode, useEffect, useRef } from "react";
import {
  FaBookOpen,
  FaGraduationCap,
  FaLink,
  FaWhatsapp,
} from "react-icons/fa6";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { MdHelpOutline } from "react-icons/md";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import Link from "./SidebarLink";
import DayOrder from "../badges/Day";
import Hours from "../badges/Hours";

import Footer from "../Footer";

// import Poster from "../Poster";
import { IoLibrarySharp } from "react-icons/io5";
import InstallButton from "./Buttons/InstallButton";
import Popup from "./Popup";
import Debugger from "@/app/academia/components/subcomponents/Debugger";
import GradeX from "@/public/images/gradex";

const MiniButtons = dynamic(
  () => import("./Buttons/MiniButtons").then((a) => a.default),
  { ssr: false },
);
const ProfileBadge = dynamic(
  () => import("./ProfileBadge").then((a) => a.default),
  { ssr: false },
);
const OpenButton = dynamic(
  () => import("./Buttons/OpenButton").then((a) => a.default),
  { ssr: false },
);
const ThemeToggle = dynamic(
  () => import("./Buttons/ThemeToggle").then((a) => a.default),
  { ssr: true },
);

export function Sidebar({
  children,
  error,
}: {
  children: ReactNode;
  error?: boolean;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isAnchored, setIsAnchored] = useState(true);
  const [isHoverEnabled, setIsHoverEnabled] = useState(false);
  const [debug, setDebug] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const installRef = useRef<HTMLButtonElement>(null);
  const content = useRef<HTMLDivElement>(null);

  function resize() {
    if (window.innerWidth > 768) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    const storedIsAnchored = sessionStorage.getItem("isAnchored") === "true";
    setIsAnchored(storedIsAnchored);

    setIsMounted(true);

    let touchstartX = 0,
      touchendX = 0;

    function handleGesture() {
      const screenWidth = window.innerWidth;
      const swipeThreshold = screenWidth / 3;

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

    window.addEventListener("touchstart", startTouch, false);
    window.addEventListener("touchend", stopTouch, false);
    window.addEventListener("resize", resize, false);

    const savedIsAnchored = sessionStorage.getItem("isAnchored");
    if (savedIsAnchored) {
      setIsAnchored(savedIsAnchored === "true");
      setIsOpen(savedIsAnchored === "true");
    } else {
      setIsAnchored(true);
      setIsOpen(true);
    }

    resize();

    return () => {
      window.removeEventListener("touchstart", startTouch);
      window.removeEventListener("touchend", stopTouch);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!isAnchored && isHoverEnabled) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isAnchored && isHoverEnabled) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const checkHoverCapability = () => {
      setIsHoverEnabled(
        window.matchMedia("(hover: hover) and (pointer: fine)").matches,
      );
    };

    checkHoverCapability();
    window.addEventListener("resize", checkHoverCapability);

    const contentElement = content.current;
    const refElement = ref.current;

    if (!isAnchored && isHoverEnabled) {
      contentElement?.addEventListener("mouseenter", handleMouseLeave);
      refElement?.addEventListener("mouseenter", handleMouseEnter);
    }

    return () => {
      contentElement?.removeEventListener("mouseenter", handleMouseLeave);
      refElement?.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("resize", checkHoverCapability);
    };
  }, [isAnchored, isHoverEnabled]);

  useEffect(() => {
    if (navigator.vibrate) {
      navigator.vibrate(20);
    }
  }, [isOpen]);

  useEffect(() => {
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }
  }, [debug]);

  function onOpenClick() {
    const newIsAnchored = !isAnchored;
    setIsAnchored(newIsAnchored);
    sessionStorage.setItem("isAnchored", newIsAnchored.toString());

    if (!newIsAnchored && isHoverEnabled) {
      setIsOpen(
        content.current?.matches(":hover") ||
          ref.current?.matches(":hover") ||
          false,
      );
    }
  }

  if (!isMounted) {
    return null;
  } else
    return (
      <>
        {debug && <Debugger setOpen={setDebug} />}
        {/* <Poster /> */}
        <nav
          className={`fixed left-0 top-0 flex h-screen w-screen flex-row justify-between gap-10 p-2 transition duration-300 md:p-3`}
        >
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
                  <button
                    onClick={() => setDebug(true)}
                    className="text-3xl font-semibold"
                  >
                    ClassPro
                  </button>
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

                <Link href="/gradex">
                  <GradeX className="text-xl" />
                  GradeX
                </Link>

                <Link href="/links">
                  <FaLink className="text-xl" />
                  Links
                </Link>
              </div>

              <hr className="border-t-light-side dark:border-t-dark-side" />

              {/* <Link
                className="font-semibold text-light-warn-color hover:bg-light-warn-background hover:text-light-warn-color dark:text-dark-warn-color dark:hover:bg-dark-warn-background dark:hover:text-dark-warn-color"
                title="BetterLab"
                href="https://better-lab.vercel.app"
              >
                <HiLightningBolt className="text-xl" />
                eLab
              </Link> */}

              <Link
                className="relative font-semibold text-[#786CFF] hover:bg-[#786CFF1e] hover:text-[#786CFF] dark:text-[#857aff] dark:hover:bg-[#786CFF1e] dark:hover:text-[#857aff]"
                title="Question papers"
                href="/papers"
              >
                <IoLibrarySharp className="text-xl" />
                Library
              </Link>

              <Link
                aria-disabled
                className="relative cursor-not-allowed border border-dashed border-[#F34F4F1e] font-semibold text-[#F34F4F] hover:bg-[#F34F4F1e] hover:text-[#F34F4F] dark:text-[#F34F4F] dark:hover:bg-[#F34F4F1e] dark:hover:text-[#F34F4F]"
                title="Coming Soon"
                href="#"
              >
                {/* <BsFillPinAngleFill className="text-xl" /> */}
                <span className="text-xl">🏗️</span>
                Events
              </Link>
            </div>

            <div className="flex flex-col-reverse gap-4">
              <div className="flex items-center gap-2 text-light-color dark:text-dark-color">
                <h4 className="font-mono text-xs opacity-60 transition duration-200">
                  Community:{" "}
                </h4>
                <MiniButtons icon={<FiGithub />} href="/github" />
                <MiniButtons icon={<FaWhatsapp />} href="/whatsapp" />
              </div>
              <ProfileBadge
                className={isOpen ? "animate-fadeIn" : "opacity-0"}
              />
            </div>
            <InstallButton anchor={isAnchored} ref={installRef} />
            <OpenButton
              anchor={isAnchored}
              isOpen={isOpen}
              onClick={onOpenClick}
            />
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
              className={`m-0.5 !pt-14 ${isOpen ? "brightness-60 scale-[0.98] shadow-inner md:scale-100 md:shadow-none md:brightness-100" : ""} h-full w-full overflow-y-auto overflow-x-hidden scroll-smooth rounded-2xl bg-light-background-light transition-all duration-300 ${error ? "p-1" : "p-6 md:p-7"} dark:bg-dark-background-dark`}
            >
              <div
                style={error ? { height: "-webkit-fill-available" } : {}}
                className="min-h-[89vh] animate-fadeIn"
              >
                {children}
              </div>
              <Footer className="mt-12" />
            </main>
            <NextLink href="/wrapped" className="dark:text-dark-accent font-medium text-light-accent bg-light-info-background dark:bg-dark-info-background h-10 flex items-center justify-center w-full absolute -top-1 rounded-t-xl ml-2">Sem Wrapped&apos;24</NextLink>
          </div>

          <Popup />

          <OpenButton
            mobile
            isOpen={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </nav>
        <div id="dialog-root" />
      </>
    );
}
