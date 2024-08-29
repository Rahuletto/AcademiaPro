import React, { useEffect, useMemo, useState } from "react";
import { constructNullStyles } from "@/components/Generators/Timetable";
import { useDay } from "@/provider/DayProvider";
import { useTimetable } from "@/provider/TimetableProvider";
import { useInterval } from "@/utils/Interval";
import { timeRange } from "@/utils/Range";
import { getISTTime, Time } from "@/utils/Times";
import { useCourses } from "@/provider/CourseProvider";
import { Course } from "@/types/Course";

interface SubjectCellProps {
  subject: string | null;
  type: string | undefined;
  isActive: boolean;
  inRange: boolean;
  classRoom: string | null;
  nullStyler: React.CSSProperties;
  index: number;
}

function SubjectCell({
  subject,
  type,
  isActive,
  classRoom,
  inRange,
  nullStyler,
  index,
}: SubjectCellProps) {
  const baseClasses = `
    group relative h-auto ${!subject || subject === "null" && isActive ? "flex items-center justify-center" : ""} xl:min-h-24 min-h-16 xl:w-[10%] xl:max-w-[10%] w-full border-[0.3px]
    border-dark-background-dark p-2 xl:pb-2 ${isActive ? "pb-2" : "pb-8"}  text-xs font-semibold 
    text-dark-background-dark dark:border-dark-background-dark 
    dark:text-dark-background-darker
    ${index === 0 ? "xl:rounded-none xl:rounded-l-xl rounded-t-xl" : index === 9 ? "xl:rounded-none xl:rounded-r-xl rounded-b-xl" : ""}
    ${type === "Theory" ? "bg-theory" : type === "Practical" ? "bg-practical" : ""}
  `;

  const style: React.CSSProperties = subject && subject !== "null"
    ? inRange && !isActive
      ? { opacity: 0.5 }
      : isActive
        ? { opacity: 1 }
        : {}
    : inRange && !isActive
      ? { ...nullStyler }
      : isActive
        ? {
            opacity: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...nullStyler,
          }
        : {
            ...nullStyler,
          };

  return (
    <div className={baseClasses} style={style}>
      {subject && subject !== "null" ? (
        subject.split(" – ")[0]
      ) : isActive ? (
        <span
          style={constructNullStyles(0, index, [], false, true)}
          className="rounded-full p-2"
        ></span>
      ) : null}
      {classRoom && (
        <span
          className="absolute bottom-2 left-2 flex animate-fastfade text-xs capitalize opacity-70"
          style={{ width: "min-content" }}
        >
          {classRoom.split(" ")[0]}
        </span>
      )}

      <span
        className={`${subject == "null" ? "hidden xl:block xl:text-light-color xl:dark:text-dark-color" : "text-dark-background-dark"} absolute ${classRoom ? "bottom-1 md:bottom-6" : "bottom-1"} right-2 text-xs font-normal opacity-40 transition duration-200 xl:left-2 xl:opacity-0 xl:group-hover:opacity-40`}
      >
        {Time.start[index] + " - " + Time.end[index]}
      </span>
    </div>
  );
}
interface TableCardProps {
  view: boolean;
  currentDayOrder: number;
}

export default function TableCard({ view, currentDayOrder }: TableCardProps) {
  const { timetable } = useTimetable();
  const { courses, mutate } = useCourses();
  const { day } = useDay();
  const [time, setTime] = useState<Date>(getISTTime());

  useMemo(() => {
    setTime(getISTTime());
  }, []);

  useEffect(() => {
    if (!courses) mutate();
  }, [courses, mutate]);

  useInterval(() => {
    setTime(getISTTime());
  }, 30 * 1000);

  if (
    !day ||
    !timetable ||
    (typeof day === "string" && day.includes("No") && isNaN(currentDayOrder))
  ) {
    return day && typeof day === "string" && day.includes("No") ? (
      <div className="flex h-28 animate-fadeIn items-center justify-center rounded-xl bg-light-error-background transition-all duration-200 md:h-24 dark:bg-dark-error-background">
        <h1
          aria-label="Holiday"
          className="text-3xl font-semibold text-light-error-color dark:text-dark-error-color"
        >
          Holiday
        </h1>
      </div>
    ) : null;
  }

  const inRange = timeRange(
    time,
    `${Time.start[0]}-${Time.end[Time.end.length - 1]}`,
  );

  return (
    <>
      <div className="flex w-full animate-fadeIn flex-col justify-between rounded-xl bg-light-background-light transition duration-200 xl:flex-row dark:bg-dark-background-dark">
        {timetable[currentDayOrder - 1].subjects.map((sub, i) => {
          const [subject, typeWithParens] = sub?.split("(") ?? [];
          const type = typeWithParens?.split(")")?.[0];
          const nullStyler = constructNullStyles(
            0,
            i,
            timetable[currentDayOrder - 1].subjects,
            true,
            true,
          );
          const isActive = timeRange(time, `${Time.start[i]}-${Time.end[i]}`);

          return (
            <SubjectCell
              key={i}
              classRoom={view && courses ? getClass(String(sub), courses) : ""}
              subject={subject}
              type={type}
              isActive={isActive}
              inRange={inRange}
              nullStyler={nullStyler}
              index={i}
            />
          );
        })}
      </div>
    </>
  );
}

function getClass(subject: string, courses: Course[]) {
  const [courseTitle, courseType] = subject.split(" (");
  const formattedCourseType = courseType
    ?.replace(")", "")
    ?.split(" [")[0]
    .trim();

  const course = courses.find(
    (course) =>
      course.courseTitle === courseTitle.trim() &&
      (formattedCourseType ? course.courseType === formattedCourseType : true),
  );

  if (course) {
    if (course.roomNo) {
      const roomParts = course.roomNo.split("-");
      if (roomParts.length > 1) {
        return roomParts[0].trim();
      } else {
        return course.roomNo.replace(/\s+/g, "").trim();
      }
    } else {
      const roomFromSubject = subject.split("[")[1]?.replace("]", "");
      if (roomFromSubject) {
        const roomParts = roomFromSubject.split("-");
        return roomParts[0].replace(/\s+/g, "").trim();
      }
    }
  }

  return null;
}
