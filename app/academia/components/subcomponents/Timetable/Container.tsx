"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

import TableHeader from "./TableHeader";

const TableCard = dynamic(
  () => import("./TableCard").then((a) => a.default),
  { ssr: false },
);

interface ContainerProps {
  currentDayOrder: number;
  day?: string | null;
}

export default function Container({ currentDayOrder, day }: ContainerProps) {
  const [view, setView] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <div
        style={{ WebkitUserSelect: "none" }}
        className={`${!(isNaN(Number(currentDayOrder)) || currentDayOrder === Number(day)) ? "border-light-warn-color border-dashed dark:border-dark-warn-color" : "border-transparent"} border-2 text-md min-w-full animate-fadeIn select-none rounded-2xl bg-light-background-dark p-0.5 text-left transition duration-200 dark:bg-dark-background-normal`}
      >
        <TableHeader />
        <TableCard view={view} currentDayOrder={currentDayOrder} />
      </div>
      <div className="flex w-full animate-fadeIn flex-row items-center justify-center transition duration-150">
        <div
          className={`h-2 w-3 rounded-full border-2 opacity-50 transition duration-150 ${view ? "border-light-success-color bg-light-success-color dark:border-dark-success-color dark:bg-dark-success-color" : "border-dark-side"} p-1`}
        />
        <button
          className="px-3 font-medium opacity-40 transition duration-150"
          onClick={() => {
            setView((prev) => !prev);
          }}
        >
          {view ? "Hide" : "Show"} classrooms
        </button>
      </div>
    </div>
  );
}
