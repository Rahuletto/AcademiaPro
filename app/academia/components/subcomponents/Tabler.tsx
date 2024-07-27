import React, { useMemo, useState } from "react";
import { constructNullStyles } from "@/components/Generators/Timetable";
import { useDay } from "@/provider/DayProvider";
import { useTimetable } from "@/provider/TimetableProvider";
import { useInterval } from "@/utils/Interval";
import { timeRange } from "@/utils/Range";
import { getISTTime, Time } from "@/utils/Times";

interface SubjectCellProps {
  subject: string | null;
  type: string | undefined;
  isActive: boolean;
  inRange: boolean;
  nullStyler: React.CSSProperties;
  index: number;
}

function SubjectCell({
  subject,
  type,
  isActive,
  inRange,
  nullStyler,
  index,
}: SubjectCellProps) {
  const baseClasses = `
    group relative h-auto lg:min-h-24 min-h-16 lg:w-[10%] lg:max-w-[10%] w-full border-[0.3px]
    border-dark-background-dark p-2 lg:pb-2 pb-8 text-xs font-semibold 
    text-dark-background-dark dark:border-dark-background-dark 
    dark:text-dark-background-darker
    ${index === 0 ? "lg:rounded-none lg:rounded-l-xl rounded-t-xl" : index === 9 ? "lg:rounded-none lg:rounded-r-xl rounded-b-xl" : ""}
    ${type === "Theory" ? "bg-theory" : type === "Practical" ? "bg-practical" : ""}
  `;

  const style: React.CSSProperties = subject
    ? inRange && !isActive
      ? { opacity: 0.5, paddingBottom: "28px" }
      : isActive
        ? { opacity: 1, paddingBottom: "28px" }
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
      {subject ? (
        subject
      ) : isActive ? (
        <span
          style={constructNullStyles(0, index, [], false, true)}
          className="rounded-full p-2"
        ></span>
      ) : null}
      <span
        className={`${!subject ? "hidden lg:block lg:text-light-color lg:dark:text-dark-color" : "text-dark-background-dark"} absolute bottom-1 right-2 text-xs font-normal opacity-40 transition duration-200 lg:left-2 lg:opacity-0 lg:group-hover:opacity-40`}
      >
        {Time.start[index] + " - " + Time.end[index]}
      </span>
    </div>
  );
}

export default function Tabler() {
  const { timetable } = useTimetable();
  const { day } = useDay();
  const [time, setTime] = useState<Date>(getISTTime());

  useMemo(() => {
    setTime(getISTTime());
  }, []);

  useInterval(() => {
    setTime(getISTTime());
  }, 30 * 1000);

  if (!day || !timetable || (typeof day === "string" && day.includes("No"))) {
    return day && typeof day === "string" && day.includes("No") ? (
      <div className="flex h-28 items-center justify-center rounded-xl bg-light-error-background dark:bg-dark-error-background">
        <h1 className="text-3xl font-semibold text-light-error-color dark:text-dark-error-color">
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
    <div className="flex w-full flex-col justify-between rounded-xl bg-light-background-light lg:flex-row dark:bg-dark-background-dark">
      {timetable[Number(day) - 1].subjects.map((sub, i) => {
        const [subject, typeWithParens] = sub?.split("(") ?? [];
        const type = typeWithParens?.split(")")?.[0];
        const nullStyler = constructNullStyles(
          0,
          i,
          timetable[Number(day) - 1].subjects,
          true,
          true,
        );
        const isActive = timeRange(time, `${Time.start[i]}-${Time.end[i]}`);

        return (
          <SubjectCell
            key={i}
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
  );
}
