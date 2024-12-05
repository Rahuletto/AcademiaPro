"use client";
import React, { useState } from "react";
import IntroSection from "./sections/IntroSection";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import HatedAttendance from "./sections/HatedAttendance";
import Marks from "./sections/MarksSection";
import SummarySection from "./sections/SummarySection";
import { useRouter } from "next/navigation";
import { FaBookOpen } from "react-icons/fa";

const sections = [
  { id: 1, title: "Welcome to Your Wrapped", component: <IntroSection /> },
  {
    id: 2,
    title: "Attendance Highlights",
    component: <HatedAttendance />,
  },
  { id: 3, title: "Marks Breakdown", component: <Marks /> },
  { id: 4, title: "Final Summary", component: <SummarySection /> },
];

const WrappedPage: React.FC = () => {
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState(0);
  const [transitionStage, setTransitionStage] = useState<
    "fade-out" | "fade-in" | "none"
  >("none");

  const changeSection = (direction: "next" | "prev") => {
    setTransitionStage("fade-out");

    setTimeout(() => {
      setCurrentSection((prev) =>
        direction === "next"
          ? (prev + 1) % sections.length
          : (prev - 1 + sections.length) % sections.length,
      );

      setTransitionStage("fade-in");
    }, 300);
  };

  return (
    <div className="relative animate-fadeIn flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-dark-background-normal text-white">
      {/* Section Wrapper */}
      <div
        className={`absolute flex h-full w-full items-center justify-center transition-all duration-300 ease-out ${
          transitionStage === "fade-out" ? "opacity-0" : ""
        } ${transitionStage === "fade-in" ? "opacity-100" : ""}`}
      >
        <div className="text-center">{sections[currentSection].component}</div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute z-10 bottom-12 mt-6 flex justify-between gap-4 lg:w-full transition-all duration-150 lg:px-24">
        {currentSection !== 0 ? <button
          onClick={() => changeSection("prev")}
          className="rounded-full border-2 hover:px-5 border-light-accent transition-all duration-150 text-light-accent dark:border-dark-accent dark:text-dark-accent p-3"
        >
          <FaArrowLeftLong />
        </button> : <div />}
        <button
          onClick={() => currentSection === 3 ? router.push("/academia") : changeSection("next")}
          className="rounded-full border-2 hover:px-5 transition-all duration-150 border-light-accent text-light-accent dark:border-dark-accent dark:text-dark-accent p-3"
        >
          {currentSection === 3 ? <FaBookOpen /> : <FaArrowRightLong />}
        </button>
      </div>
    </div>
  );
};

export default WrappedPage;
