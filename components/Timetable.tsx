import { colorNull } from "@/generator/TimetableGenerator";
import styles from "@/styles/Timetable.module.css";
import type { Course } from "@/types/Course";
import { endingTimesSlot, startingTimesSlot } from "@/types/Times";
import { timeRange } from "@/utils/range";
import { truncateString } from "@/utils/truncate";
import { convertUnicode } from "@/utils/unicode";
import { useInterval } from "@/utils/useInterval";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const TimeTableComponent = ({
  table,
  courses,
  view,
}: {
  table: (string | undefined)[] | undefined;
  courses: Course[] | null;
  view: boolean;
}) => {
  const router = useRouter();
  const [time, setTime] = useState(new Date());

  function openGen() {
    router.push("/timetable");
  }

  useEffect(() => {
    const currentTime = new Date();

    const currentOffset = currentTime.getTimezoneOffset();

    const ISTOffset = 330;

    setTime(
      new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000),
    );
  }, []);

  useInterval(() => {
    const currentTime = new Date();

    const currentOffset = currentTime.getTimezoneOffset();

    const ISTOffset = 330;

    setTime(
      new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000),
    );
  }, 30 * 1000);

  return (
    <>
      <tbody
        onKeyDown={() => {}}
        onClick={() => table && openGen()}
        className={`${table && timeRange(time, `${startingTimesSlot[0]}-${endingTimesSlot[table.length - 1]}`) ? "class-on" : ""} ${styles.body}`}
      >
        {table?.map((element: string | undefined, index: number) =>
          element ? (
            <td
              key={index}
              className={`${timeRange(time, `${startingTimesSlot[index]}-${endingTimesSlot[index]}`) ? "active-tt-table" : "tt-items"} ${String(element).includes("Theory") ? styles.theory : styles.lab}`}
            >
              {truncateString(convertUnicode(element).split("(")[0])}
              {view && (
                <span
                  className="absolute bottom-2 left-2 text-xs opacity-70"
                  style={{ width: "min-content" }}
                >
                  {courses?.[0] && getClass(String(element), courses)}
                </span>
              )}
              <span className={styles.timeSlot}>
                {startingTimesSlot[index]} - {endingTimesSlot[index]}
              </span>
            </td>
          ) : (
            <td
              key={index}
              style={{ ...colorNull(index, table, true) }}
              className={`${timeRange(time, `${startingTimesSlot[index]}-${endingTimesSlot[index]}`) ? "active-tt-empty p-3" : "tt-empty"} min-h-[50px] w-full md:min-h-[90px] md:w-[10%]`}
            >
              {timeRange(
                time,
                `${startingTimesSlot[index]}-${endingTimesSlot[index]}`,
              ) && (
                <p
                  style={{ ...colorNull(index, table) }}
                  className="rounded-full px-4 py-2 text-xs font-semibold text-background opacity-60 md:hidden"
                >
                  Current
                </p>
              )}
            </td>
          ),
        )}
      </tbody>
    </>
  );
};

export default TimeTableComponent;

function getClass(subject: string, courses: Course[]) {
  const [courseTitle, courseType] = subject.split(" (");
  const formattedCourseType = courseType?.replace(")", "").trim(); // Extract and format the course type

  const course = courses.find(
    (course) =>
      course.courseTitle === courseTitle.trim() &&
      (formattedCourseType ? course.courseType === formattedCourseType : true),
  );
  return course ? course.roomNo : null;
}
