import type { TimeTableResponse } from "@/types/TimeTable";
import { endingTimesSlot, startingTimesSlot } from "@/types/Times";
import { timeConvert } from "@/utils/convert";
import { truncateString } from "@/utils/truncate";
import { convertUnicode } from "@/utils/unicode";
import type { CSSProperties } from "react";

export default function TimetableGen({ body }: { body: TimeTableResponse }) {
  return (
    <div
      tw="bg-[#0a0d12] flex items-center justify-center h-screen w-screen"
      style={{
        transform: "scale(3.8)",
      }}
    >
      <div tw="m-0 w-[610px] flex flex-col bg-[#12171e] rounded-[8px] rounded-t-[14px] p-[2px]">
        <div tw="flex text-white font-bold h-[20px]">
          {body?.table[0].subjects.map((_e, i) => (
            <div
              key={`timeslot-${i}`}
              style={{ fontSize: 6 }}
              tw="flex items-center justify-center w-[10%] text-center font-semibold p-[0.1rem_0.5rem]"
            >
              {timeConvert(startingTimesSlot[i])} -{" "}
              {timeConvert(endingTimesSlot[i])}
            </div>
          ))}
        </div>
        <div tw="flex flex-col bg-[#04070b] rounded-[6px]">
          {body?.table.map((row, i) => (
            <div tw="flex" key={i}>
              {row.subjects.map((elem, j) =>
                elem ? (
                  <div tw="flex w-[10%] border-0" key={`table-${i}-${j}`}>
                    <td
                      tw="text-[#0a0d12] h-[40px] text-left p-[4px] w-full flex flex-col relative"
                      style={constructStyles(i, j, elem)}
                    >
                      {truncateString(convertUnicode(elem).split("(")[0])}
                      {convertUnicode(elem).includes("[Online]") && (
                        <span
                          tw="absolute bottom-0.5 right-0.5 opacity-90 pt-[1px] px-0.5 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.1)]"
                          style={{ fontSize: 5 }}
                        >
                          Online
                        </span>
                      )}{" "}
                    </td>
                  </div>
                ) : (
                  <div
                    key={i}
                    tw="opacity-15 w-[10%]"
                    style={{
                      ...constructNullStyles(i, j, row.subjects),
                      border: "0.3px solid #12171e",
                    }}
                  />
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function constructNullStyles(
  i: number,
  j: number,
  totalSubjects: (string | undefined)[],
) {
  let obj: CSSProperties = {
    fontSize: 6,
    ...colorNull(j, totalSubjects),
  };

  if (i === 0 && j === 0) obj = { borderTopLeftRadius: "6px", ...obj };
  else if (i === 0 && j === 9) obj = { borderTopRightRadius: "6px", ...obj };
  else if (i === 4 && j === 0) obj = { borderBottomLeftRadius: "6px", ...obj };
  else if (i === 4 && j === 9) obj = { borderBottomRightRadius: "6px", ...obj };

  return obj;
}

export function colorNull(j: number, totalSubjects: (string | undefined)[]) {
  const obj: CSSProperties = {
    border: "0.3px solid #12171e",
    background: "#70fa70",
  };

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

  if (
    (isTheoryInFirst && j <= 4) ||
    (isPracticalInSecond && j < 4) ||
    (isPracticalInFirst && j > 4) ||
    (isTheoryInSecond && j >= 5)
  ) {
    obj.background = "#f3d86a";
  } else if (
    (isPracticalInFirst && j <= 4) ||
    (isTheoryInSecond && j <= 4) ||
    (isPracticalInSecond && j >= 5) ||
    (isTheoryInFirst && j >= 5)
  ) {
    obj.background = "#70fa70";
  }

  return obj;
}

function constructStyles(i: number, j: number, name: string) {
  let obj: CSSProperties = { border: "0.3px solid #12171e", fontSize: 6 };

  if (name.includes("Theory")) obj = { background: "#f3d86a", ...obj };
  else if (name.includes("Practical")) obj = { background: "#70fa70", ...obj };

  if (i === 0 && j === 0) obj = { borderTopLeftRadius: "6px", ...obj };
  else if (i === 0 && j === 9) obj = { borderTopRightRadius: "6px", ...obj };
  else if (i === 4 && j === 0) obj = { borderBottomLeftRadius: "6px", ...obj };
  else if (i === 4 && j === 9) obj = { borderBottomRightRadius: "6px", ...obj };

  return obj;
}
