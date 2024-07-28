import React from "react";

export default function Indicator({
  type,
  extended,
}: {
  type: "Practical" | "Theory" | "Lab";
  extended?: boolean;
}) {
  return extended ? (
    <div className="flex w-full gap-3 items-center">
      <span
        className={`flex items-start justify-start rounded-full text-xs font-semibold ${type === "Practical" || type === "Lab" ? "dark:text-practical text-light-success-color" : "dark:text-theory text-light-warn-color"}`}
      >
        {type}
      </span>
      <hr className="border-practical w-full opacity-40" />
    </div>
  ) : (
    <span
      className={`flex h-5 w-5 scale-90 items-center justify-center rounded-full p-1 text-xs font-semibold ${type === "Practical"|| type === "Lab" ? "bg-light-success-background dark:text-practical text-light-success-color dark:bg-dark-success-background" : "bg-light-warn-background dark:text-theory text-light-warn-color dark:bg-dark-warn-background"}`}
    >
      {type === "Practical" || type === "Lab" ? "P" : "T"}
    </span>
  );
}
