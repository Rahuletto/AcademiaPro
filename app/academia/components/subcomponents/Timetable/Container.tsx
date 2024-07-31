"use client";
import React, { useState } from "react";
import TableCard from "./TableCard";
import TableHeader from "./TableHeader";

export default function Container() {
  const [view, setView] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <div
        style={{ WebkitUserSelect: "none" }}
        className="text-md min-w-full animate-fadeIn select-none rounded-2xl bg-light-background-dark p-1 text-left transition duration-200 dark:bg-dark-background-normal"
      >
        <TableHeader />
        <TableCard view={view} />
      </div>
      <div className="transition duration-150 animate-fadeIn flex w-full flex-row items-center justify-center">
        <div className={`transition duration-150 opacity-50 h-2 w-3 rounded-full border-2 ${view ? "dark:bg-dark-success-color dark:border-dark-success-color bg-light-success-color border-light-success-color" : "border-dark-side"} p-1`} />
        <button
          className="transition duration-150 px-3 font-medium opacity-40"
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
