import { useDay } from "@/provider/DayProvider";
import { useTimetable } from "@/provider/TimetableProvider";
import React from "react";
import { BiError } from "react-icons/bi";
import { RiLoader3Fill } from "react-icons/ri";

export default function Hours({ ...props }) {
  const { day, isLoading, error } = useDay();
  const { timetable, isLoading: tableLoad, error: tableError } = useTimetable();

  return !day || day.includes("No") ? null : (
    <div
      {...props}
      role="contentinfo"
      className={`flex w-fit cursor-default items-center justify-center rounded-full px-3 py-1 ${
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
      ) : error || tableError ? (
        <BiError
          title="*crashes*"
          className="font-medium text-light-error-color dark:text-dark-error-color"
        />
      ) : (
        day && (
          <span
            title={`Day Order: ${day}`}
            className="text-md font-medium text-light-accent dark:text-dark-accent"
          >
            {!day.includes("No") &&
              timetable
                ?.find((e) => e.day === Number(day))
                ?.subjects.filter((a) => a && a !== "null").length}{" "}
            hours
          </span>
        )
      )}
    </div>
  );
}
