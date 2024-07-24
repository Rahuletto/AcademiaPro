import { useDay } from "@/provider/DayProvider";
import { useTimetable } from "@/provider/TimetableProvider";
import React from "react";
import { MdErrorOutline } from "react-icons/md";
import { RiLoader3Fill } from "react-icons/ri";

export default function Hours() {
  const { day, isLoading, error } = useDay();
  const { timetable, isLoading: tableLoad, error: tableError } = useTimetable();

  return (
    <div
      role="contentinfo"
      className={`px-4 py-2 rounded-full w-fit cursor-default ${
        error || !day
          ? "dark:bg-dark-error-background bg-light-error-background"
          : "dark:bg-dark-side bg-light-side"
      }`}
    >
      {isLoading || tableLoad ? (
        <RiLoader3Fill
          title="loading"
          className="animate-spin dark:text-dark-accent text-light-accent font-medium"
        />
      ) : error || tableError || !day ? (
        <MdErrorOutline
          title="*crashes*"
          className="dark:text-dark-error-color text-light-error-color font-medium"
        />
      ) : (
        <span
          title={`Day Order: ${day}`}
          className="dark:text-dark-accent text-light-accent font-medium text-base"
        >
          {!day.includes("No") &&
            timetable
              ?.find((e) => e.day === Number(day))
              ?.subjects.filter((a) => a !== null).length}{" "}
          hours
        </span>
      )}
    </div>
  );
}
