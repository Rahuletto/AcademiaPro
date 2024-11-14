"use client";
import React, { useState } from "react";
import { Mark } from "@/types/Marks";
import TotalSection from "./Total";
import MarkList from "./MarkList";

import dynamic from "next/dynamic";
import PerformanceChart from "./PerfGraph";
import { useData } from "@/provider/DataProvider";

const CalculatorSection = dynamic(
  () => import("./Calculate").then((a) => a.default),
  { ssr: false },
);

const Indicator = dynamic(
  () => import("@/components/Indicator").then((a) => a.default),
  { ssr: false },
);

export default function MarkCard({
  mark,
  graph = false,
}: {
  mark: Mark;
  graph: boolean;
}) {
  const [calculate, setCalculate] = useState(false);
  const {courses} = useData();

  return (
    <div
      title={`${mark.courseName} (${mark.courseCode})`}
      className={`relative flex min-h-[195px] flex-col ${courses?.find((a) => a.code === mark.courseCode)?.credit === "0" ? "border-light-background-light dark:border-dark-background-light border-x-2" : "border-transparent"} border justify-between gap-3 rounded-3xl bg-light-background-normal p-4 px-5 pb-5 dark:bg-dark-background-normal`}
    >
      <div
        className={`${calculate ? "opacity-50" : "opacity-100"} flex h-full flex-col gap-4`}
      >
        <div className="flex w-full items-start justify-between gap-2">
          <h1
            title={mark.courseCode}
            aria-label={`${mark.courseName} (${mark.courseCode})`}
            className="text-md font-medium capitalize"
          >
            {mark.courseName !== "N/A" ? mark.courseName?.toLowerCase() : courses ? courses.find((a) => a.code === mark.courseCode)?.title : "N/A"}
          </h1>
          <Indicator type={mark.courseType as "Practical" | "Theory"} />
        </div>
        <div className="flex flex-col gap-16">
          {graph ? (
            <PerformanceChart testPerformance={mark.testPerformance} />
          ) : null}

          <MarkList testPerformance={mark.testPerformance} />
        </div>
      </div>

      <TotalSection
        graph={graph}
        overall={mark.overall}
        calculate={calculate}
        setCalculate={setCalculate}
      />
      {calculate && <CalculatorSection overall={mark.overall} />}
    </div>
  );
}
