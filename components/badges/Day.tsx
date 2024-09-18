import { usePlanner } from "@/provider/DataCalProvider";
import React, { useEffect } from "react";
import { BiError } from "react-icons/bi";
import { RiLoader3Fill } from "react-icons/ri";

export default function DayOrder({
  mini,
  ...props
}: {
  [x: string]: any;
  mini?: boolean;
}) {
  const { calendar, isLoading, error, mutate, requestedAt } = usePlanner();
  const current = calendar?.[new Date().getMonth() % 5].days;
    const val = current.find(
      (day) => day.date === new Date().getDate().toString()
    );
  const day = val.dayOrder

  return (
    <div
      role="contentinfo"
      className={`w-fit cursor-default rounded-full px-3 py-1 ${
        error || !day || day.includes("-")
          ? "bg-light-error-background dark:bg-dark-error-background"
          : "bg-light-side dark:bg-dark-side"
      } ${props.className}`}
    >
      {isLoading ? (
        <RiLoader3Fill
          title="loading"
          className={`animate-spin font-medium ${error || !day || day.includes("-") ? "text-light-error-color dark:text-dark-error-color" : "text-light-accent dark:text-dark-accent"}`}
        />
      ) : error || !day ? (
        <BiError
          title="*crashes*"
          className="font-medium text-light-error-color dark:text-dark-error-color"
        />
      ) : day.includes("-") ? (
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
