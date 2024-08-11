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
  open,
  displayedAttendance,
}: AttendanceListProps) {
  return (
    <>
      {displayedAttendance && (
        <div
          className={`transition duration-200 -mx-3 ${open ? "opacity-100" : "opacity-0 xl:translate-y-6 xl:hover:opacity-100 xl:group-hover:translate-y-0 xl:group-hover:opacity-100"}`}
        >
          <AttendanceCard legend course={displayedAttendance[0]} />
        </div>
      )}
      <div
        className={`animate-fadeIn transition duration-200 ${open ? "" : "xl:-translate-y-16 -translate-y-8 md:-translate-y-2 xl:group-hover:translate-y-0"}`}
      >
        <div className="mb-4">
          {displayedAttendance
            ?.filter((a) => a.category === "Theory")
            .map((course, index) => (
              <div
                key={index}
                className="my-1 -mx-3 rounded-xl odd:bg-light-background-normal even:bg-light-background-light odd:dark:bg-dark-background-normal even:dark:bg-transparent"
              >
                <AttendanceCard course={course} />
              </div>
            ))}
        </div>

        {displayedAttendance && displayedAttendance[0] && (
          <Indicator type="Practical" separator />
        )}

        <div className="my-4">
          {displayedAttendance
            ?.filter((a) => a.category === "Practical")
            .map((course, index) => (
              <div
                key={index}
                className="my-1 rounded-xl odd:bg-light-background-normal even:bg-light-background-light odd:dark:bg-dark-background-normal even:dark:bg-dark-background-darker"
              >
                <AttendanceCard course={course} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
