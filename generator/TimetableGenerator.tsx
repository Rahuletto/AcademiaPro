import type { TimeTableResponse } from "@/types/TimeTable";
import { endingTimesSlot, startingTimesSlot } from "@/types/Times";
import { timeConvert } from "@/utils/convert";
import { truncateString } from "@/utils/truncate";
import { convertUnicode } from "@/utils/unicode";

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
                      tw="text-[#0a0d12] h-[40px] text-left p-[4px] w-full"
                      style={constructStyles(i, j, elem)}
                    >
                      {truncateString(convertUnicode(elem).split("(")[0])}
                    </td>
                  </div>
                ) : (
                  <div
                    key={i}
                    style={{
                      width: "10%",
                      border: "0.3px solid #12171e",
                      opacity: 0.5,
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

function constructStyles(i: number, j: number, name: string) {
  let obj: object = { border: "0.3px solid #12171e", fontSize: 6 };

  if (name.includes("Theory")) obj = { background: "#f3d86a", ...obj };
  else if (name.includes("Practical")) obj = { background: "#70fa70", ...obj };

  if (i === 0 && j === 0) obj = { borderTopLeftRadius: "6px", ...obj };
  else if (i === 0 && j === 9) obj = { borderTopRightRadius: "6px", ...obj };
  else if (i === 4 && j === 0) obj = { borderBottomLeftRadius: "6px", ...obj };
  else if (i === 4 && j === 9) obj = { borderBottomRightRadius: "6px", ...obj };

  return obj;
}
