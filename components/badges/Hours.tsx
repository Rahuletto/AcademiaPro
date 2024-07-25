import { useDay } from "@/provider/DayProvider";
import { useTimetable } from "@/provider/TimetableProvider";
import React from "react";
import { MdErrorOutline } from "react-icons/md";
import { RiLoader3Fill } from "react-icons/ri";

export default function Hours({ ...props }) {
  const { day, isLoading, error } = useDay();
  const { timetable, isLoading: tableLoad, error: tableError } = useTimetable();

  return (
    <div
      role="contentinfo"
      className={`w-fit cursor-default rounded-full px-4 py-2 ${
        error || !day
          ? "bg-light-error-background dark:bg-dark-error-background"
          : "bg-light-side dark:bg-dark-side"
      }`}
    >
      {isLoading || tableLoad ? (
        <RiLoader3Fill
          title="loading"
          className="animate-spin font-medium text-light-accent dark:text-dark-accent"
        />
      ) : error || tableError || !day ? (
        <MdErrorOutline
          title="*crashes*"
          className="font-medium text-light-error-color dark:text-dark-error-color"
        />
      ) : (
        <span
          title={`Day Order: ${day}`}
          className="text-base font-medium text-light-accent dark:text-dark-accent"
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
