import Card from "@/components/cards/Card";
import { useCourses } from "@/providers/CourseProvider";
import styles from "@/styles/Attendance.module.css";
import type { AttendanceCourse, AttendanceResponse } from "@/types/Attendance";
import type { Course } from "@/types/Course";
import { clearCookies } from "@/utils/cookies";
import { useEffect } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AttendanceTable = ({
  data,
  todayTable,
}: {
  data: AttendanceResponse | null;
  todayTable?: (string | undefined)[];
}) => {
  const courses = useCourses();
  return (
    <>
      <table className="w-full">
        <thead />
        <thead />
        <tbody className={`${styles.attr} attTable`}>
          {data?.attendance[0] ? (
            data.attendance.map((element: AttendanceCourse, index: number) => (
              <Card
                key={index}
                title={element.courseTitle}
                code={element.courseCode}
                category={element.category}
                data={{
                  present:
                    Number(element.hoursConducted) -
                    Number(element.hoursAbsent),
                  absent: Number(element.hoursAbsent),
                  total: Number(element.hoursConducted),
                }}
                percent={element.attendancePercentage}
                todayTable={todayTable}
              />
            ))
          ) : data?.expireAt ? (
            courses
              ?.filter((course) => course.courseTitle !== "Total")
              .map((course: Course, index) => (
                <Card
                  key={index}
                  title={course.courseTitle}
                  code={course.courseCode}
                  category={course.courseType}
                  data={{
                    present: 0,
                    absent: 0,
                    total: 0,
                  }}
                  percent="0"
                  todayTable={todayTable}
                />
              )) || (
              <div className="m-[12px_24px] flex h-[280px] items-center justify-center rounded-[22px] bg-backgroundLight">
                <h4 className="text-center text-base opacity-80">
                  There is no attendance here, Interesting...
                </h4>
              </div>
            )
          ) : (
            <>
              <Skeleton className="h-[64px] w-[60vw] rounded-xl opacity-60" />
              <Skeleton className="h-[64px] w-[60vw] rounded-xl opacity-10" />
              <Skeleton className="h-[64px] w-[60vw] rounded-xl opacity-60" />

              <Skeleton className="h-[64px] w-[60vw] rounded-xl opacity-10" />

              <Skeleton className="h-[64px] w-[60vw] rounded-xl opacity-60" />
              <Skeleton className="h-[64px] w-[60vw] rounded-xl opacity-10" />
            </>
          )}
        </tbody>
      </table>
    </>
  );
};

export default AttendanceTable;
