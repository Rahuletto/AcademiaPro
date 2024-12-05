"use client";
import React, { useEffect, useState } from "react";
import {
  FaBook,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaMicroscope,
} from "react-icons/fa";
import { MdComputer, MdSchool, MdScience } from "react-icons/md";
import {
  GiTeacher,
  GiBookshelf,
  GiBrain,
  GiChemicalDrop,
  GiCircuitry,
  GiCompass,
  GiNotebook,
  GiOpenBook,
  GiPencilRuler,
  GiWhiteBook,
} from "react-icons/gi";

export default function IntroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 6 * 1000);
    try {
      if (!document.getElementById("intro-audio")) {
        const a = new Audio("/audio/secret.mp3");
        a.id = "intro-audio";
        a.volume = 0.05;
        a.play();
      }
    } catch (e) {
      console.warn("Play song")
    }
  }, []);
  return (
    <>
      <div
        style={{ animationDelay: "5s" }}
        className="animate-shrink relative flex h-[99vh] w-[99vw] flex-col items-center justify-center overflow-hidden rounded-3xl"
      >
        <div className="animate-gradient absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900 opacity-70 mix-blend-multiply" />
        <div className="relative z-10 flex flex-col items-center justify-center text-gray-100">
          <h1 className="animate-text-slide-up pl-32 md:text-8xl text-6xl font-semibold">
            2024
          </h1>
          <h1
            style={{ animationDelay: "0.1s" }}
            className="animate-text-slide-up md:text-8xl text-6xl font-semibold opacity-0"
          >
            Wrapped
          </h1>
          <h2
            style={{ animationDelay: "3s" }}
            className="animate-text-slide-up mt-12 md:text-xl text-lg font-medium text-gray-300 opacity-0"
          >
            Wrappin up your <span className="underline">Semester</span>
          </h2>
        </div>

        {mounted &&
          Array.from({ length: 30 }).map((_, index) => {
            const icons = [
              FaBook,
              FaGraduationCap,
              FaChalkboardTeacher,
              FaLaptopCode,
              FaMicroscope,
              MdComputer,
              MdSchool,
              MdScience,
              GiTeacher,
              GiBookshelf,
              GiBrain,
              GiChemicalDrop,
              GiCircuitry,
              GiCompass,
              GiNotebook,
              GiOpenBook,
              GiPencilRuler,
              GiWhiteBook,
            ];

            const IconComponent =
              icons[Math.floor(Math.random() * icons.length)];

            const position = {
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            };

            return (
              <div
                key={index}
                className="absolute mix-blend-overlay animate-fadeIn opacity-0"
                style={{
                  ...position,
                  fontSize: `${Math.random() * 50 + 20}px`,
                  color: `rgba(255, 255, 255, 0.3)`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                {React.createElement(IconComponent)}
              </div>
            );
          })}
      </div>
    </>
  );
}
