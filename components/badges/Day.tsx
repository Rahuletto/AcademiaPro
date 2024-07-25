import { useDay } from "@/provider/DayProvider";
import React from "react";
import { MdErrorOutline } from "react-icons/md";
import { RiLoader3Fill } from "react-icons/ri";

export default function DayOrder({ ...props }) {
  const { day, isLoading, error } = useDay();
  return (
    <div
      role="contentinfo"
      className={`w-fit cursor-default rounded-full px-4 py-2 ${
        error || !day || day.includes("No")
          ? "bg-light-error-background dark:bg-dark-error-background"
          : "bg-light-side dark:bg-dark-side"
      } ${props.className}`}
    >
      {isLoading ? (
        <RiLoader3Fill
          title="loading"
          className="animate-spin font-medium text-light-accent dark:text-dark-accent"
        />
      ) : error || !day ? (
        <MdErrorOutline
          title="*crashes*"
          className="font-medium text-light-error-color dark:text-dark-error-color"
        />
      ) : day.includes("No") ? (
        <span
          title={`Holiday`}
          className="text-base font-medium text-light-error-color dark:text-dark-error-color"
        >
          Holiday
        </span>
      ) : (
        <span
          title={`Day Order: ${day}`}
          className="text-base font-medium text-light-accent dark:text-dark-accent"
        >
          Day Order: {day}
        </span>
      )}
    </div>
  );
}
