import { useDay } from "@/provider/DayProvider";
import React from "react";
import { BiError } from "react-icons/bi";
import { RiLoader3Fill } from "react-icons/ri";

export default function DayOrder({
  mini,
  ...props
}: {
  [x: string]: any;
  mini?: boolean;
}) {
  const { day, isLoading, error } = useDay();
  return (
    <div
      role="contentinfo"
      className={`w-fit cursor-default rounded-full px-3 py-1 ${
        error || !day || day.includes("No")
          ? "bg-light-error-background dark:bg-dark-error-background"
          : "bg-light-side dark:bg-dark-side"
      } ${props.className}`}
    >
      {isLoading ? (
        <RiLoader3Fill
          title="loading"
          className={`animate-spin font-medium ${error || !day || day.includes("No") ? "text-light-error-color dark:text-dark-error-color" : "text-light-accent dark:text-dark-accent"}`}
        />
      ) : error || !day ? (
        <BiError
          title="*crashes*"
          className="font-medium text-light-error-color dark:text-dark-error-color"
        />
      ) : day.includes("No") ? (
        <span
          aria-hidden="true"
          style={{ WebkitUserSelect: "none" }}
          title={`Holiday`}
          className="select-none text-md font-medium text-light-error-color dark:text-dark-error-color"
        >
          {mini ? "H" : "Holiday"}
        </span>
      ) : (
        <span
          title={`Day Order: ${day}`}
          className={`${mini ? "flex h-6 w-2 items-center justify-center text-sm" : "text-base"} font-medium text-light-accent dark:text-dark-accent`}
        >
          {mini ? "" : "Day Order: "}
          {day}
        </span>
      )}
    </div>
  );
}
