import React, { useMemo } from "react";
import type { TimeTableResponse } from "@/types/Timetable";
import { truncateString, convertUnicode } from "@/utils/Convert";
import { Time, timeConvert } from "@/utils/Times";
import type { CSSProperties } from "react";

const colorMap = {
  theory: "#f3d86a",
  practical: "#70fa70",
  default: "#70fa70",
};

export const constructStyles = (
  i: number,
  j: number,
  name: string,
): CSSProperties => {
  const base: CSSProperties = {
    border: "0.3px solid #12171e",
    fontSize: 6,
    background: name.includes("Theory")
      ? colorMap.theory
      : name.includes("Practical")
        ? colorMap.practical
        : colorMap.default,
  };

  if (i === 0 && j === 0) base.borderTopLeftRadius = "6px";
  else if (i === 0 && j === 9) base.borderTopRightRadius = "6px";
  else if (i === 4 && j === 0) base.borderBottomLeftRadius = "6px";
  else if (i === 4 && j === 9) base.borderBottomRightRadius = "6px";

  return base;
};

export const constructNullStyles = (
  i: number,
  j: number,
  totalSubjects: (string | undefined)[],
  hide?: boolean,
  homeTable?: boolean,
): CSSProperties => {
  const opacity = hide ? "1a" : "";
  const [firstSlice, secondSlice] = [
    totalSubjects.slice(0, 5),
    totalSubjects.slice(5, 10),
  ];
  const isTheoryInFirst = firstSlice.some((subj) => subj?.includes("Theory"));
  const isPracticalInFirst = firstSlice.some((subj) =>
    subj?.includes("Practical"),
  );
  const isTheoryInSecond = secondSlice.some((subj) => subj?.includes("Theory"));
  const isPracticalInSecond = secondSlice.some((subj) =>
    subj?.includes("Practical"),
  );

  let background = colorMap.default + opacity;
  if (
    (isTheoryInFirst && j <= 4) ||
    (isPracticalInSecond && j < 4) ||
    (isPracticalInFirst && j > 4) ||
    (isTheoryInSecond && j >= 5)
  ) {
    background = colorMap.theory + opacity;
  } else if (
    (isPracticalInFirst && j <= 4) ||
    (isTheoryInSecond && j <= 4) ||
    (isPracticalInSecond && j >= 5) ||
    (isTheoryInFirst && j >= 5)
  ) {
    background = colorMap.practical + opacity;
  }

  const base: CSSProperties = {
    border: "0.3px solid #12171e",
    background,
  };

  if (!homeTable) {
    if (i === 0 && j === 0) base.borderTopLeftRadius = "6px";
    else if (i === 0 && j === 9) base.borderTopRightRadius = "6px";
    else if (i === 4 && j === 0) base.borderBottomLeftRadius = "6px";
    else if (i === 4 && j === 9) base.borderBottomRightRadius = "6px";
  }

  return base;
};

const TimeSlot: React.FC<{ start: string; end: string }> = React.memo(
  ({ start, end }) => (
    <div
      style={{ fontSize: 6 }}
      tw="flex items-center justify-center w-[10%] text-center font-semibold p-[0.1rem_0.5rem]"
    >
      {start} - {end}
    </div>
  ),
);
TimeSlot.displayName = "TimeSlot";

const SubjectCell: React.FC<{ elem: string; i: number; j: number }> =
  React.memo(({ elem, i, j }) => {
    const convertedElem = convertUnicode(elem);
    const isOnline = convertedElem.includes("[Online]");
    const truncatedName = truncateString(convertedElem.split("(")[0]);

    return (
      <td
        tw="text-[#0a0d12] h-[40px] text-left p-[4px] w-full flex flex-col relative"
        style={constructStyles(i, j, elem)}
      >
        {truncatedName}
        {isOnline && (
          <span
            tw="absolute bottom-0.5 right-0.5 opacity-90 pt-[1px] px-0.5 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.1)]"
            style={{ fontSize: 5 }}
          >
            Online
          </span>
        )}
      </td>
    );
  });
SubjectCell.displayName = "SubjectCell";

const EmptyCell: React.FC<{
  i: number;
  j: number;
  subjects: (string | undefined)[];
}> = React.memo(({ i, j, subjects }) => (
  <div tw="opacity-15 w-[10%]" style={constructNullStyles(i, j, subjects)} />
));
EmptyCell.displayName = "EmptyCell";

const TimetableGen: React.FC<{ body: TimeTableResponse }> = ({ body }) => {
  const timeSlots = useMemo(
    () =>
      body?.table[0].subjects.map((_e, i) => (
        <TimeSlot
          key={`timeslot-${i}`}
          start={timeConvert(Time.start[i])}
          end={timeConvert(Time.end[i])}
        />
      )),
    [body?.table[0].subjects],
  );

  return (
    <div
      tw="bg-[#0a0d12] flex items-center justify-center h-screen w-screen"
      style={{ transform: "scale(3.8)" }}
    >
      <div tw="m-0 w-[610px] flex flex-col bg-[#12171e] rounded-[8px] rounded-t-[14px] p-[2px]">
        <div tw="flex text-white font-bold h-[20px]">{timeSlots}</div>
        <div tw="flex flex-col bg-[#04070b] rounded-[6px]">
          {body?.table.map((row, i) => (
            <div tw="flex" key={i}>
              {row.subjects.map((elem, j) =>
                elem ? (
                  <div tw="flex w-[10%] border-0" key={`table-${i}-${j}`}>
                    <SubjectCell elem={elem} i={i} j={j} />
                  </div>
                ) : (
                  <EmptyCell
                    key={`empty-${i}-${j}`}
                    i={i}
                    j={j}
                    subjects={row.subjects}
                  />
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimetableGen;
