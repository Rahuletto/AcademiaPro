import React, { useEffect, useState } from "react";
import { AttendanceCourse } from "@/types/Attendance";
import { calculateMargin } from "@/utils/Margin";
import Indicator from "@/components/Indicator";

export default function AttendanceCard({
  course,
}: {
  course: AttendanceCourse;
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

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex flex-grow items-center space-x-3">
        <Indicator type={category as "Practical" | "Theory"} />
        <span className="text-lg text-light-color dark:text-dark-color">
          {courseTitle}
        </span>
      </div>
      <div className="flex items-center space-x-6 px-4">
        <span className="text-light-accent dark:text-dark-accent">
          Margin:{" "}
          <span className="text-dark-warn-color dark:text-dark-warn-color">
            {margin}
          </span>
        </span>
        <div className="flex w-24 items-center justify-end space-x-2">
          <span className="text-light-success-color dark:text-dark-success-color">
            {present}
          </span>
          <span className="text-light-error-color dark:text-dark-error-color">
            {absent}
          </span>
          <span className="rounded bg-gray-700 px-2 text-light-color dark:text-dark-color">
            {total}
          </span>
        </div>
        <span
          className={`w-20 text-right text-2xl font-semibold ${
            parseFloat(attendancePercentage) === 100
              ? "text-light-success-color dark:text-dark-success-color"
              : parseFloat(attendancePercentage) < 75
                ? "text-light-error-color dark:text-dark-error-color"
                : "text-light-color dark:text-dark-color"
          }`}
        >
          {attendancePercentage}%
        </span>
      </div>
    </div>
  );
}
