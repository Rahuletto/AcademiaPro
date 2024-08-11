import React, { useEffect, useState } from "react";
import { AttendanceCourse } from "@/types/Attendance";
import { calculateMargin } from "@/utils/Margin";
import { useTimetable } from "@/provider/TimetableProvider";
import { useDay } from "@/provider/DayProvider";
import dynamic from "next/dynamic";

import AttendancePill from "./AttendancePill";
import Margin from "./Margin";
import Title from "./Title";

const Legend = dynamic(
  () => import("./Legend").then((a) => a.default),
  { ssr: true },
);

export default function AttendanceCard({
  course,
  legend,
}: {
  course: AttendanceCourse;
  legend?: boolean;
}) {
  const { timetable } = useTimetable();
  const { day } = useDay();

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

  const countHoursPerDay = (title: string, category: string) => {
    if (!timetable || !day || day.includes("No")) return 0;

    const todayTable = timetable[Number(day) - 1]?.subjects ?? [];
    return todayTable.filter(
      (item) => item && item.includes(title) && item.includes(category),
    ).length;
  };

  if (legend) return <Legend />;

  return (
    <div
      tabIndex={0}
      role="gridcell"
      className="my-6 -mx-2 grid w-full grid-cols-[3fr_1fr] grid-rows-[repeat(2,1fr)] items-center gap-3 gap-y-2 rounded-3xl p-4 px-6 transition duration-200 md:my-0 md:flex md:items-center md:justify-between md:rounded-xl"
    >
      <Title courseTitle={courseTitle} category={category} />
      <Margin
        margin={margin}
        category={category}
        courseTitle={courseTitle}
        countHoursPerDay={countHoursPerDay}
      />
      <AttendancePill present={present} absent={absent} total={total} />
      <span
        className={`w-24 self-end justify-self-end text-right font-semibold md:self-center md:justify-self-center ${
          parseFloat(attendancePercentage) === 100
            ? "text-3xl text-light-success-color dark:text-dark-success-color"
            : parseFloat(attendancePercentage) === 75
              ? "text-2xl text-light-warn-color dark:text-dark-warn-color"
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
