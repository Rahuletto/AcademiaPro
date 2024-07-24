import { useDay } from "@/provider/DayProvider";
import React from "react";
import { MdErrorOutline } from "react-icons/md";
import { RiLoader3Fill } from "react-icons/ri";

export default function DayOrder() {
  const { day, isLoading, error } = useDay();
  return (
    <div
      className={`px-4 py-2 rounded-full w-fit ${
        error || !day
          ? "dark:bg-dark-error-background bg-light-error-background"
          : "dark:bg-dark-side bg-light-side"
      }`}
    >
      {isLoading ? (
        <RiLoader3Fill className="animate-spin dark:text-dark-accent text-light-accent font-medium" />
      ) : error || !day ? (
        <MdErrorOutline className="dark:text-dark-error-color text-light-error-color font-medium" />
      ) : (
        <span className="dark:text-dark-accent text-light-accent font-medium text-base">
          Day Order: {day}
        </span>
      )}
    </div>
  );
}
