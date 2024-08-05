"use client";
import React, { useState } from "react";
import TableCard from "./TableCard";
import TableHeader from "./TableHeader";

interface ContainerProps {
  currentDayOrder: number;
}

export default function Container({ currentDayOrder }: ContainerProps) {
  const [view, setView] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <div
        style={{ WebkitUserSelect: "none" }}
        className="text-md min-w-full animate-fadeIn select-none rounded-2xl bg-light-background-dark p-1 text-left transition duration-200 dark:bg-dark-background-normal"
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
