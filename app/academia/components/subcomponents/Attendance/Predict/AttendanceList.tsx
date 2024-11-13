import React from "react";
import AttendanceCard from "../AttendanceCard";
import { AttendanceCourse } from "@/types/Attendance";

import dynamic from "next/dynamic";

const Indicator = dynamic(
  () => import("@/components/Indicator").then((a) => a.default),
  { ssr: false },
);

interface AttendanceListProps {
  displayedAttendance: AttendanceCourse[] | null;
  open?: boolean;
}

export default function AttendanceList({
  displayedAttendance,
}: AttendanceListProps) {
  const priority = displayedAttendance?.filter(
    (course) => Number(course.attendancePercentage.split(".")[0]) <= 75,
  );
  const remaining = displayedAttendance?.filter(
    (course) => Number(course.attendancePercentage.split(".")[0]) > 75,
  );
  return (
    <>
      {displayedAttendance && (
        <div className={`transition duration-200`}>
          <AttendanceCard legend course={displayedAttendance[0]} />
        </div>
      )}
      <div className={`animate-fadeIn transition duration-200`}>
        {priority && priority[0] && (
          <>
          <div className="-m-1 mb-3 mt-2 rounded-xl border-2 border-dashed border-light-warn-color bg-light-warn-background p-1 relative dark:border-dark-warn-color dark:bg-dark-warn-background">
            <p className="font-semibold font-mono dark:text-dark-warn-color text-light-warn-color -mb-4 mx-3 py-1 text-xs">Attention needed!</p>
            <div className="dark:bg-dark-background-dark bg-light-background-dark rounded-xl">
            {priority.filter((a) => a.category === "Theory").length > 0 &&
              priority
                .filter((a) => a.category === "Theory")
                .sort((a, b) => Number(a.attendancePercentage.split('.')[0]) - Number(b.attendancePercentage.split('.')[0]))
                .map((course, index) => (
                  <div
                    key={index}
                    className="my-1 rounded-xl odd:bg-light-background-normal even:bg-light-background-light odd:dark:bg-dark-background-normal even:dark:bg-transparent"
                  >
                    <AttendanceCard course={course} />
                  </div>
                ))}

            {priority.filter((a) => a.category === "Practical").length > 0 && (
              <>
                <Indicator type="Practical" separator />
                {priority
                  .filter((a) => a.category === "Practical")
                  .sort((a, b) => Number(a.attendancePercentage.split('.')[0]) - Number(b.attendancePercentage.split('.')[0]))
                  .map((course, index) => (
                    <div
                      key={index}
                      className="my-1 rounded-xl odd:bg-light-background-normal even:bg-light-background-light odd:dark:bg-dark-background-normal even:dark:bg-transparent"
                    >
                      <AttendanceCard course={course} />
                    </div>
                  ))}
              </>
            )}
            </div>
          </div>
          <Indicator type="Theory" separator />
          </>
        )}
        <div className="mb-4">
          {remaining
            ?.filter((a) => a.category === "Theory")
            .map((course, index) => (
              <div
                key={index}
                className="my-1 rounded-xl odd:bg-light-background-normal even:bg-light-background-light odd:dark:bg-dark-background-normal even:dark:bg-transparent"
              >
                <AttendanceCard course={course} />
              </div>
            ))}
        </div>

        {remaining && remaining[0] && <Indicator type="Practical" separator />}

        <div className="mt-4">
          {remaining
            ?.filter((a) => a.category === "Practical")
            .map((course, index) => (
              <div
                key={index}
                className="my-1 rounded-xl odd:bg-light-background-normal even:bg-light-background-light odd:dark:bg-dark-background-normal even:dark:bg-transparent"
              >
                <AttendanceCard course={course} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
