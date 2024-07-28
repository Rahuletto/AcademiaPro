import React, { useEffect, useState } from "react";
import { AttendanceCourse } from "@/types/Attendance";
import { calculateMargin } from "@/utils/Margin";

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
    <div className="flex items-center justify-between p-4 shadow-lg">
      <div className="flex flex-grow items-center space-x-3">
        <div
          className={`h-2 w-2 rounded-full ${
            category === "Theory"
              ? "bg-dark-warn-color dark:bg-dark-warn-color"
              : "bg-light-success-color dark:bg-dark-success-color"
          }`}
        ></div>
        <span className="text-lg text-light-color dark:text-dark-color">
          {courseTitle}
        </span>
      </div>
      <div className="flex items-center space-x-6">
        <span className="text-light-accent dark:text-dark-accent">
          Margin:{" "}
          <span className="text-dark-warn-color dark:text-dark-warn-color">
            {calculateMargin(present, total)}
          </span>
        </span>
        <div className="flex items-center space-x-2">
          <span className="text-light-success-color dark:text-dark-success-color">
            {present}
          </span>
          <span className="text-light-error-color dark:text-dark-error-color">
            {absent}
          </span>
          <span className="text-light-color text-light-info-color dark:text-dark-color">
            {total}
          </span>
        </div>
        <span
          className={`text-2xl font-semibold ${
            parseFloat(attendancePercentage) === 100
              ? "text-light-success-color dark:text-dark-success-color"
              : parseFloat(attendancePercentage) < 75
                ? "text-light-error-color dark:text-dark-error-color"
                : "text-light-color dark:text-dark-color"
          }`}
        >
          {attendancePercentage}
        </span>
      </div>
    </div>
  );
}
