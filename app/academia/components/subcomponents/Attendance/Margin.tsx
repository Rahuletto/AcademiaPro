import React from "react";

type AttendanceMarginProps = {
  margin: number;
  courseTitle: string;
  countHoursPerDay: (title: string) => number;
};

export default function AttendanceMargin({
  margin,
  courseTitle,
  countHoursPerDay,
}: AttendanceMarginProps) {
  return (
    <div
      aria-hidden
      title="Margin"
      style={{ WebkitUserSelect: "none" }}
      className="w-24 select-none self-start justify-self-end text-right md:self-center md:justify-self-center"
    >
      <span
        title={
          margin <= countHoursPerDay(courseTitle)
            ? "You are at the verge of going below 75%"
            : "The hours you can skip"
        }
        className="text-sm font-medium text-light-accent dark:text-dark-accent"
      >
        Margin:
        <span
          className={`text-md font-semibold ${margin === 0 ? "text-light-error-color dark:text-dark-error-color" : margin <= countHoursPerDay(courseTitle) && margin > 0 ? "text-dark-warn-color dark:text-dark-warn-color" : "text-light-info-color dark:text-dark-info-color"}`}
        >
          {margin}
        </span>
      </span>
    </div>
  );
}
