import React, { useEffect, useState } from "react";
import { AttendanceCourse } from "@/types/Attendance";
import { calculateMargin } from "@/utils/Margin";
import Indicator from "@/components/Indicator";

export default function AttendanceCard({
  course,
  legend,
}: {
  course: AttendanceCourse;
  legend?: boolean;
}) {
  const {
    courseTitle,
    hoursConducted,
    hoursAbsent,
    attendancePercentage,
    category,
  } = course;
  const present = parseInt(hoursConducted, 10) - parseInt(hoursAbsent, 10);
  const total = parseInt(hoursConducted, 10);
  const absent = parseInt(hoursAbsent, 10);

  const [margin, setMargin] = useState(0);

  useEffect(() => {
    setMargin(calculateMargin(present, total));
  }, [present, total]);

  if (legend)
    return (
      <div className="hidden items-center justify-between p-4 opacity-40 xl:flex">
        <div className="flex w-[300px] items-center space-x-3">
          <span className="text-xs font-medium text-light-color dark:text-dark-color">
            Title
          </span>
        </div>
        <div className="w-24 text-right text-xs">
          <span className="text-xs font-medium">Margin</span>
        </div>
        <div className="flex items-center gap-3 rounded-full bg-light-background-darker p-0.5 text-xs font-medium dark:bg-dark-background-darker">
          <div className="flex items-center font-medium">
            <span className="rounded-l-full bg-light-success-background px-3 text-light-success-color dark:bg-dark-success-background dark:text-dark-success-color">
              Present
            </span>
            <span className="rounded-r-full bg-light-error-background px-3 text-light-error-color dark:bg-dark-error-background dark:text-dark-error-color">
              Absent
            </span>
          </div>
          <span className="rounded-full bg-light-color px-3 font-bold text-light-background-light opacity-80 dark:bg-dark-color dark:text-dark-background-dark">
            Total
          </span>
        </div>
        <span className="text-xs">Percentage</span>
      </div>
    );
  return (
    <div
      tabIndex={0}
      role="gridcell"
      className="grid w-full grid-cols-[3fr_1fr] grid-rows-[repeat(2,1fr)] items-center gap-3 gap-y-4 rounded-3xl p-4 transition duration-200 md:flex md:items-center md:justify-between md:rounded-xl"
    >
      <div
        title={courseTitle}
        aria-label={courseTitle}
        className="flex w-fit max-w-[300px] items-center gap-4 self-start justify-self-start md:justify-self-center md:self-center md:w-[350px]"
      >
        <Indicator type={category as "Practical" | "Theory"} />
        <span className="text-md font-medium text-light-color md:text-md dark:text-dark-color">
          {courseTitle}
        </span>
      </div>
      <div
        aria-hidden
        title="Margin"
        style={{ WebkitUserSelect: "none" }}
        className="w-24 select-none self-start justify-self-end md:justify-self-center md:self-center text-right"
      >
        <span className="text-sm font-medium text-light-accent dark:text-dark-accent">
          Margin:{" "}
          <span className="text-md font-semibold text-dark-warn-color dark:text-dark-warn-color">
            {margin}
          </span>
        </span>
      </div>
      <div
        style={{ WebkitUserSelect: "none" }}
        className="flex select-none items-center gap-3 self-end justify-self-start md:justify-self-center md:self-center rounded-full bg-light-background-darker p-0.5 font-medium dark:bg-dark-background-darker"
      >
        <div className="flex items-center font-medium">
          <span className="rounded-l-full bg-light-success-background px-3 text-light-success-color dark:bg-dark-success-background dark:text-dark-success-color">
            {present}
          </span>
          <span className="rounded-r-full bg-light-error-background px-3 text-light-error-color dark:bg-dark-error-background dark:text-dark-error-color">
            {absent}
          </span>
        </div>
        <span className="rounded-full bg-light-color px-3 font-bold text-light-background-light opacity-80 dark:bg-dark-color dark:text-dark-background-dark">
          {total}
        </span>
      </div>
      <span
        className={`w-24 self-end justify-self-end md:justify-self-center md:self-center text-right font-semibold ${
          parseFloat(attendancePercentage) === 100
            ? "text-3xl text-light-success-color dark:text-dark-success-color"
            : parseFloat(attendancePercentage) < 75
              ? "text-2xl text-light-error-color dark:text-dark-error-color"
              : "text-2xl text-light-color dark:text-dark-color"
        }`}
      >
        {attendancePercentage.replace(".00", "")}%
      </span>
    </div>
  );
}
