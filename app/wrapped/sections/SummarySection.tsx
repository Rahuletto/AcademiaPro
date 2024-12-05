"use client";
import AttendancePill from "@/app/academia/components/subcomponents/Attendance/AttendancePill";
import { useData } from "@/provider/DataProvider";
import React from "react";
import { FaBookOpen } from "react-icons/fa";

export default function SummarySection() {
  const { marks, attendance, user, courses } = useData();

  const scoredTotal =
    marks?.reduce(
      (acc, mark) => acc + parseFloat(mark.overall.marks ?? "0"),
      0,
    ) ?? 0;

  const actualTotal =
    marks?.reduce(
      (acc, mark) => acc + parseFloat(mark.overall.total ?? "0"),
      0,
    ) ?? 0;

  const absented = attendance?.reduce(
    (acc, a) => acc + parseFloat(a.hoursAbsent),
    0,
  );

  const cond = attendance?.reduce(
    (acc, a) => acc + parseFloat(a.hoursConducted),
    0,
  );

  const max = marks
    ?.sort(
      (a, b) =>
        parseFloat(b?.overall.marks ?? "0") /
          parseFloat(b?.overall.total ?? "1") -
        parseFloat(a?.overall.marks ?? "0") /
          parseFloat(a?.overall.total ?? "1"),
    )
    .slice(0, 3);

  const maxAtt = attendance
    ?.sort(
      (a, b) =>
        parseFloat(b?.attendancePercentage ?? "0") -
          parseFloat(a?.attendancePercentage ?? "0") ||
        parseFloat(b?.hoursConducted ?? "0") -
          parseFloat(a?.hoursConducted ?? "0"),
    )
    .filter((a) => parseFloat(a?.hoursConducted ?? "0") > 0)
    .slice(0, 3);

  const detainable = attendance?.filter(
    (a) => parseFloat(a.attendancePercentage) < 75,
  );

  return (
    <>
      <div className="relative mx-2 mb-24 mt-10 flex h-[85vh] w-[100vw] max-w-[500px] flex-col items-start justify-start overflow-hidden rounded-3xl p-8 md:h-[80vh]">
        <div
          style={{ animationDelay: "0.05s" }}
          className="absolute inset-0 animate-fadeIn bg-dark-background-dark opacity-0 transition-all duration-200"
        />
        <div style={{ animationDelay: "0.4s" }} className="absolute animate-fadeIn bottom-4 left-6 flex opacity-0 flex-col items-start justify-start gap-1">
          <h2 className="text-left text-lg font-semibold capitalize max-w-[500px]">
            {user?.name.toLowerCase()}
          </h2>
          <p className="ext-left text-xs font-medium capitalize opacity-40">
            {user?.regNumber}
          </p>
        </div>
        <p style={{ animationDelay: "2.8s" }} className="absolute animate-fadeIn bottom-4 right-6 text-right text-lg font-semibold text-dark-accent  opacity-0">
          #SEMWRAPPED24
        </p>
        <FaBookOpen style={{ animationDelay: "0.2s" }} className="absolute animate-fadeIn opacity-0 right-10 top-10 z-20 text-6xl text-dark-accent" />

        <div className="z-10 mt-2 flex h-full w-full flex-col items-start justify-start gap-2">
          <div
            style={{ animationDelay: "0.95s" }}
            className="flex animate-fadeIn flex-col items-start justify-start gap-3 rounded-2xl opacity-0"
          >
            <h1 className="text-4xl font-bold text-gray-100">
              {((scoredTotal / actualTotal) * 100).toFixed(0)}%
            </h1>
            <div className="flex flex-col items-start justify-center">
              <h1 className="text-xl font-medium text-gray-300">Total Marks</h1>
              <p className="text-md font-light text-gray-500">
                Scored {scoredTotal.toFixed(0)} out of {actualTotal.toFixed(0)}.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-gray-400 border-opacity-20 py-3">
            {max?.map((mark, index) => (
              <div
                key={index}
                style={{
                  animationDelay: `${1.2 + index * 0.2}s`,
                }}
                className="flex animate-fadeIn items-center justify-start gap-3 opacity-0"
              >
                <span className="rounded-full bg-dark-success-background px-2 py-1 text-sm font-semibold text-dark-success-color">
                  {(
                    (parseFloat(mark?.overall.marks ?? "0") /
                      parseFloat(mark?.overall.total ?? "1")) *
                    100
                  ).toFixed(2)}
                  %
                </span>
                <h3 className="text-sm font-medium">
                  {
                    (
                      (courses
                        ? courses.find((a) => a.code === mark?.courseCode)
                            ?.title
                        : mark?.courseCode) ?? ""
                    ).split(":")[0]
                  }
                </h3>
              </div>
            ))}
          </div>

          {attendance?.[0] ? (
            <>
              <div
                style={{ animationDelay: "2s" }}
                className="flex w-full animate-fadeIn flex-col items-end justify-start gap-3 border-t border-dashed border-gray-600 pt-5 opacity-0"
              >
                <h1 className="text-right text-4xl font-bold text-gray-100">
                  {detainable?.[0]
                    ? detainable?.length
                    : (
                        (((cond ?? 0) - (absented ?? 0)) / (cond ?? 0)) *
                        100
                      ).toFixed(0) + "%"}
                </h1>
                <div className="flex flex-col items-end justify-center">
                  <h1 className="text-right text-xl font-medium text-gray-300">
                    {detainable?.[0] ? "Detainable courses" : "Attendance"}
                  </h1>
                  <p className="text-md font-light text-right text-gray-500">
                    Attended {(cond ?? 0) - (absented ?? 0)} out of {cond ?? 0}{" "}
                    hours.
                  </p>
                </div>
              </div>
            </>
          ) : null}
          <img
            src="/holo.png"
            alt="holo"
            style={{ animationDelay: "2.3s" }}
            className={`${attendance?.[0] ? "mt-8" : "mt-32"} w-full animate-fadeIn opacity-0`}
          />
        </div>
      </div>
    </>
  );
}
