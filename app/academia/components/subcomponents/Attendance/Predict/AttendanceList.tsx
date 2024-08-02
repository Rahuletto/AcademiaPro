import AttendanceCard from "../AttendanceCard";
import Indicator from "@/components/Indicator";
import { AttendanceCourse } from "@/types/Attendance";

interface AttendanceListProps {
  displayedAttendance: AttendanceCourse[] | null;
}

export default function AttendanceList({
  displayedAttendance,
}: AttendanceListProps) {
  return (
    <>
      {displayedAttendance && (
        <div className="opacity-0 transition duration-200 xl:translate-y-6 xl:hover:opacity-100 xl:group-hover:translate-y-0 xl:group-hover:opacity-100">
          <AttendanceCard legend course={displayedAttendance[0]} />
        </div>
      )}
      <div className="animate-fadeIn transition duration-200 xl:-translate-y-16 xl:group-hover:translate-y-0">
        <div className="my-4">
          {displayedAttendance
            ?.filter((a) => a.category === "Theory")
            .map((course, index) => (
              <div
                key={index}
                className="my-1 rounded-xl odd:bg-light-background-normal even:bg-light-background-light odd:dark:bg-dark-background-normal even:dark:bg-dark-background-darker"
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
