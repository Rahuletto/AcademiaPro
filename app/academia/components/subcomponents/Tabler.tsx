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
    group relative h-auto min-h-24 w-[10%] max-w-[10%] border-r 
    border-light-background-dark p-2 text-xs font-semibold 
    text-light-background-darker dark:border-dark-background-dark 
    dark:text-dark-background-darker
    ${index === 0 ? "rounded-l-xl" : index === 9 ? "rounded-r-xl" : ""}
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
        className={`${!subject ? "hidden lg:block lg:text-dark-color" : "text-dark-background-dark"} absolute bottom-1 right-2 text-xs font-normal opacity-40 transition duration-200 lg:left-2 lg:opacity-0 lg:group-hover:opacity-40`}
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
      <div className="flex h-48 items-center justify-center rounded-2xl bg-light-error-background dark:bg-dark-error-background">
        <h1 className="text-3xl text-light-error-color dark:text-dark-error-color">
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
    <div className="flex w-full justify-between rounded-xl bg-light-background-dark dark:bg-dark-background-dark">
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
