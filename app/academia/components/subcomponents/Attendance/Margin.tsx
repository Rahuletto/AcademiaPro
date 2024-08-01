import React from "react";

type AttendanceMarginProps = {
  margin: number;
  category: "Practical" | "Theory";
  courseTitle: string;
  countHoursPerDay: (title: string, category: string) => number;
};

export default function AttendanceMargin({
  margin,
  category,
  courseTitle,
  countHoursPerDay,
}: AttendanceMarginProps) {
  const count = countHoursPerDay(courseTitle, category);
  return (
    <div
      aria-hidden
      title="Margin"
      style={{ WebkitUserSelect: "none" }}
      className="w-24 select-none self-start justify-self-end text-right md:self-center md:justify-self-center"
    >
      <span
        title={
          margin <= count
            ? "You are at the verge of going below 75%"
            : "The hours you can skip"
        }
        className={`text-sm font-medium ${margin < 0 ? `text-light-error-color dark:text-dark-error-color` : `text-light-accent dark:text-dark-accent`}`}
      >
        {margin >= 0 ? `Margin:` : `Required:`}
        <span
          className={`text-md ml-1 font-semibold ${margin <= 0 ? "text-light-error-color dark:text-dark-error-color" : margin <= count && margin > 0 ? "text-dark-warn-color dark:text-dark-warn-color" : "text-light-info-color dark:text-dark-info-color"}`}
        >
          {Math.abs(margin)}
        </span>
      </span>
    </div>
  );
}
