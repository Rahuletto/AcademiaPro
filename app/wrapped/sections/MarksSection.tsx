"use client";
import { CustomTooltip } from "@/app/academia/components/subcomponents/Marks/PerfGraph";
import { useData } from "@/provider/DataProvider";
import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
  BarChart,
} from "recharts";

export default function Marks() {
  const { marks, courses } = useData();

  const max = marks?.sort(
    (a, b) => Number(b.overall.marks) - Number(a.overall.marks),
  )[0];

  return (
    <>
      <div className="relative flex h-[95vh] w-[95vw] flex-col items-center justify-center overflow-hidden rounded-3xl md:h-[80vh] md:w-[80vw]">
        <div className="animate-gradient absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900 opacity-50 mix-blend-multiply" />
        <div className="absolute right-8 top-8 flex flex-col items-end justify-start gap-3 text-right">
          <h1
            style={{ animationDelay: "0.1s" }}
            className="animate-text-slide-up text-right text-xl font-semibold text-gray-200 opacity-0"
          >
            Marks
          </h1>
          {marks?.[0] && (
            <>
              <h1
                style={{ animationDelay: "0.1s" }}
                className="animate-text-slide-up text-right lg:text-4xl text-3xl font-semibold opacity-0"
              >
                Your best marks in this
                <br />
                semester so far
              </h1>
              <p
                style={{ animationDelay: "1.6s" }}
                className="flex animate-fadeIn items-center justify-end gap-4 text-right text-sm font-medium text-gray-300 opacity-0"
              >
                Did you cook? or did you get cooked?
              </p>
            </>
          )}
        </div>

        <div
          style={{
            borderTopLeftRadius: "2rem",
            borderBottomLeftRadius: "2rem",
            borderTopRightRadius: "6rem",
            borderBottomRightRadius: "6rem",
          }}
          className="absolute right-12 shadow-lg top-64 z-20 flex max-w-[400px] rotate-6 scale-90 items-center justify-center gap-6 bg-dark-background-normal p-3 px-5 pr-3 transition-all duration-150 lg:scale-100"
        >
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-left text-base font-semibold">
              {
                (
                  (courses
                    ? courses.find((a) => a.code === max?.courseCode)?.title
                    : max?.courseCode) ?? ""
                ).split(":")[0]
              }
            </h2>
            {/* <p className="text-sm opacity-40">{max?.courseCode}</p> */}
          </div>
          <div className="h-full rounded-full bg-dark-success-background p-4 text-xl font-semibold text-dark-success-color">
            {(
              (parseFloat(max?.overall.marks ?? "0") /
                parseFloat(max?.overall.total ?? "1")) *
              100
            ).toFixed(2)}
            %
          </div>
        </div>
        <div className="absolute bottom-20 left-3 flex w-[96%] max-w-[700px] flex-col items-center justify-center rounded-2xl bg-dark-background-normal p-7 pl-0 lg:bottom-5 lg:left-5 lg:w-full lg:-rotate-3">
          <ResponsiveContainer height={360}>
            <BarChart
              data={
                marks
                  ?.sort(
                    (a, b) => Number(b.overall.marks) - Number(a.overall.marks),
                  )
                  ?.filter((a) => Number(a.overall.total) > 0)
                  .map((mark) => ({
                    name: (
                      (courses
                        ? courses.find((a) => a.code === mark?.courseCode)
                            ?.title
                        : mark?.courseCode) ?? ""
                    ).split(":")[0],
                    scored: mark.overall.marks,
                    total: mark.overall.total,
                    percentage: mark.overall.marks
                      ? (parseFloat(mark.overall.marks) /
                          parseFloat(mark.overall.total)) *
                        100
                      : 0,
                    fill: `hsl(210, ${(parseFloat(mark.overall.marks ?? "0") / parseFloat(mark.overall.total)) * 100}%, 50%)`,
                  })) || []
              }
              margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={"#444444c3"} />
              <XAxis dataKey="name" tick={{ fill: "#aaa", fontSize: 8 }} />
              <YAxis tick={{ fill: "#aaa", fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="scored" fillOpacity={1} />
            </BarChart>
          </ResponsiveContainer>
          <p className="-my-2 w-full text-center text-sm font-medium opacity-60">
            Marks
          </p>
        </div>
      </div>
    </>
  );
}
