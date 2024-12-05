"use client";
import Indicator from "@/components/Indicator";
import { useData } from "@/provider/DataProvider";
import React, { useEffect, useState } from "react";

export default function HatedAttendance() {
  const [mounted, setMounted] = useState(false);
  const { attendance } = useData();
  const [low, setLow] = useState(false);

  useEffect(() => {
    setMounted(true);

    attendance?.filter((subject) => {
      if (Number(subject.hoursAbsent) > 5) {
        setLow(true);
      }
    });
  }, []);

  const detainable = attendance?.filter(
    (a) => parseFloat(a.attendancePercentage) < 75,
  );

  return (
    <>
      <div className="relative flex h-[95vh] w-[95vw] flex-col items-center justify-center overflow-hidden rounded-3xl md:h-[80vh] md:w-[80vw]">
        <div className="animate-gradient absolute inset-0 bg-gradient-to-br from-red-500 via-rose-500 to-pink-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900 opacity-70 mix-blend-multiply" />
        <div className="absolute left-8 top-8 flex flex-col items-start justify-start gap-3">
          <h1
            style={{ animationDelay: "0.1s" }}
            className="animate-text-slide-up text-xl font-semibold text-gray-200 opacity-0"
          >
            Attendance
          </h1>
          {attendance?.[0] && (detainable?.[0] ? (
            <h1
              style={{ animationDelay: "0.1s" }}
              className="animate-text-slide-up text-left lg:text-4xl text-3xl font-semibold opacity-0"
            >
              Bro. You really need
              <br />
              some help
            </h1>
          ) : low ? (
            <h1
              style={{ animationDelay: "0.1s" }}
              className="animate-text-slide-up text-left lg:text-4xl text-3xl font-semibold opacity-0"
            >
              Seems like you hated
              <br />
              some classes
            </h1>
          ) : (
            <h1
              style={{ animationDelay: "0.1s" }}
              className="animate-text-slide-up text-left lg:text-4xl text-3xl font-semibold opacity-0"
            >
              Seems like you loved
              <br />
              many classes
            </h1>
          ))}
          {attendance?.[0] && (detainable?.[0] ? (
            <p
              style={{ animationDelay: "1.6s" }}
              className="flex animate-fadeIn items-center justify-start gap-4 text-left text-sm font-medium text-gray-400 opacity-0"
            >
              You might get detained
            </p>
          ) : (
            <p
              style={{ animationDelay: "1.6s" }}
              className="flex animate-fadeIn items-center justify-start gap-4 text-left text-sm font-medium text-gray-400 opacity-0"
            >
              Or maybe just {low ? "bored" : "a nerd"}
            </p>
          ))}
        </div>
        <div className="absolute -right-2 bottom-[40px] z-10 flex scale-[0.55] origin-bottom flex-col items-center justify-center gap-14 md:bottom-3 md:right-3 md:flex-row md:gap-3 lg:bottom-14 lg:right-14 lg:scale-100">
          {attendance?.[0] &&
            (detainable?.[0]
              ? detainable
                  .sort((a, b) => Number(b.hoursAbsent) - Number(a.hoursAbsent))
                  .slice(0, 2)
                  .map((subject, index) => (
                    <div
                      key={index}
                      style={{ animationDelay: `${0.5 + index * 0.5}s` }}
                      className={`${index == 1 ? "rotate-12 md:-ml-4" : "-mb-24 mr-12 -rotate-12 md:mb-0 md:mr-0 md:-rotate-2"} relative flex h-[400px] w-[320px] animate-fadeIn flex-col items-start justify-between rounded-3xl bg-light-background-light p-7 opacity-0 shadow-xl dark:bg-dark-background-normal`}
                    >
                      <div className="flex flex-col gap-2">
                        <h1 className="text-left text-3xl font-semibold text-light-color dark:text-dark-color">
                          {subject.courseTitle}
                        </h1>
                        <p className="flex items-center justify-start gap-4 text-left text-sm font-medium text-gray-400">
                          {subject.courseCode}{" "}
                          <Indicator type={subject.category} />
                        </p>
                      </div>
                      <div className="flex items-center justify-center gap-4">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-light-success-color text-3xl font-semibold text-dark-background-dark dark:bg-dark-success-color">
                          {Number(subject.hoursConducted) -
                            Number(subject.hoursAbsent)}
                        </span>
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-light-error-color text-3xl font-semibold text-dark-background-dark dark:bg-dark-error-color">
                          {subject.hoursAbsent}
                        </span>
                      </div>
                    </div>
                  ))
              : low
                ? attendance
                    .sort(
                      (a, b) => Number(b.hoursAbsent) - Number(a.hoursAbsent),
                    )
                    .slice(0, 2)
                    .map((subject, index) => (
                      <div
                        key={index}
                        style={{ animationDelay: `${0.5 + index * 0.5}s` }}
                        className={`${index == 1 ? "rotate-12 md:-ml-4" : "-mb-24 mr-12 -rotate-12 md:mb-0 md:mr-0 md:-rotate-2"} relative flex h-[400px] w-[320px] animate-fadeIn flex-col items-start justify-between rounded-3xl bg-light-background-light p-7 opacity-0 shadow-xl dark:bg-dark-background-normal`}
                      >
                        <div className="flex flex-col gap-2">
                          <h1 className="text-left text-3xl font-semibold text-light-color dark:text-dark-color">
                            {subject.courseTitle}
                          </h1>
                          <p className="flex items-center justify-start gap-4 text-left text-sm font-medium text-gray-400">
                            {subject.courseCode}{" "}
                            <Indicator type={subject.category} />
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-light-success-color text-3xl font-semibold text-dark-background-dark dark:bg-dark-success-color">
                            {Number(subject.hoursConducted) -
                              Number(subject.hoursAbsent)}
                          </span>
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-light-error-color text-3xl font-semibold text-dark-background-dark dark:bg-dark-error-color">
                            {subject.hoursAbsent}
                          </span>
                        </div>
                      </div>
                    ))
                : attendance?.[0] &&
                  attendance
                    .sort(
                      (a, b) =>
                        Number(b.hoursConducted) -
                        Number(b.hoursAbsent) -
                        (Number(a.hoursConducted) - Number(a.hoursAbsent)),
                    )
                    .slice(0, 2)
                    .map((subject, index) => (
                      <div
                        key={index}
                        style={{ animationDelay: `${0.5 + index * 0.5}s` }}
                        className={`${index == 1 ? "rotate-12 md:-ml-4" : "bottom-10 right-16 -mb-24 -rotate-12 md:mb-0 md:-rotate-2 lg:bottom-0 lg:right-0"} relative flex h-[400px] w-[320px] animate-fadeIn flex-col items-start justify-between rounded-3xl bg-light-background-light p-7 opacity-0 shadow-xl dark:bg-dark-background-normal`}
                      >
                        <div className="flex flex-col gap-2">
                          <h1 className="text-left text-3xl font-semibold text-light-color dark:text-dark-color">
                            {subject.courseTitle}
                          </h1>
                          <p className="flex items-center justify-start gap-4 text-left text-sm font-medium text-gray-400">
                            {subject.courseCode}{" "}
                            <Indicator type={subject.category} />
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-light-success-color text-3xl font-semibold text-dark-background-dark dark:bg-dark-success-color">
                            {Number(subject.hoursConducted) -
                              Number(subject.hoursAbsent)}
                          </span>
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-light-error-color text-3xl font-semibold text-dark-background-dark dark:bg-dark-error-color">
                            {subject.hoursAbsent}
                          </span>
                        </div>
                      </div>
                    )))}
        </div>
        {!attendance?.[0] && (
          <div className="flex flex-col gap-2">
            <h1
              style={{ animationDelay: "0.5s" }}
              className="animate-text-slide-up mx-5 text-center lg:text-4xl text-3xl font-semibold opacity-0"
            >
              Hope you attended all of your classes
            </h1>
            <p
              style={{ animationDelay: "1s" }}
              className="animate-text-slide-up text-lg font-medium text-gray-200 opacity-0"
            >
              Because SRM wiped your attendance data 😭
            </p>
          </div>
        )}

        {mounted &&
          Array.from({ length: 200 }).map((_, index) => {
            const letters =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            const randomLetter =
              letters[Math.floor(Math.random() * letters.length)];

            const columns = 20;
            const row = Math.floor(index / columns);
            const col = index % columns;

            const position = {
              top: `${row * 10 + 5}%`,
              left: `${col * 10 + 5}%`,
            };

            return (
              <div
                key={index}
                className="absolute font-mono opacity-0 mix-blend-overlay"
                style={{
                  ...position,
                  animationDelay: `${Math.random() * 3}s`,
                  fontSize: "24px",
                  opacity: `${0.2 + Math.random() * 0.5}`,
                  color: `rgb(255, 255, 255))`,
                  fontWeight: "100",
                }}
              >
                {randomLetter}
              </div>
            );
          })}
      </div>
    </>
  );
}
