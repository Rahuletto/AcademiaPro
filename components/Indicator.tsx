import React from "react";

export default function Indicator({
  type,
  extended,
  separator
}: {
  type: "Practical" | "Theory" | "Lab";
  extended?: boolean;
  separator?: boolean
}) {
  return separator ? (
    <div className="select-none flex w-full gap-3 items-center" aria-hidden="true" style={{ WebkitUserSelect: "none" }} >
      <span
        className={`flex items-start justify-start rounded-full text-xs font-semibold ${type === "Practical" || type === "Lab" ? "dark:text-practical text-light-success-color" : "dark:text-theory text-light-warn-color"}`}
      >
        {type}
      </span>
      <hr className="border-practical w-full opacity-40" />
    </div>
  ) : (
    <span
    title={type}
    aria-label={type}
    aria-hidden="true"
    style={{ WebkitUserSelect: "none" }}
      className={`${extended ? "px-2 py-0.5" : "min-h-5 min-w-5 max-h-5 max-w-5 p-1"} select-none flex scale-90 items-center justify-center rounded-full text-xs font-semibold ${type === "Practical"|| type === "Lab" ? "bg-light-success-background dark:text-practical text-light-success-color dark:bg-dark-success-background" : "bg-light-warn-background dark:text-theory text-light-warn-color dark:bg-dark-warn-background"}`}
    >
      {extended ? (type === "Practical" || type === "Lab" ? "Practical" : "Theory") :(type === "Practical" || type === "Lab" ? "P" : "T")}
    </span>
  );
}
