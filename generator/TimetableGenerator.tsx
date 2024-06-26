import { startingTimesSlot, endingTimesSlot } from "@/types/Times";
import { TimeTableResponse } from "@/types/TimeTable";
import { timeConvert } from "@/utils/convert";
import { truncateString } from "@/utils/truncate";
import { convertUnicode } from "@/utils/unicode";

const styled = {
  color: "#0a0d12",
  fontWeight: 600,
  border: "0.3px solid #12171e",
  height: "40px",
  textAlign: "left",
  fontSize: "6px",
  padding: "4px",
  width: "100%",
  fontFamily: "Inter !important",
};

export default function TimetableGen({ body }: { body: TimeTableResponse }) {
  return (
    <div className="font-inter flex h-screen w-screen scale-[3.8] transform items-center justify-center bg-gray-900">
      <div className="font-inter m-0 flex w-[610px] flex-col rounded-lg rounded-t-xl bg-gray-800 p-2">
        <div className="flex h-5 font-semibold text-color">
          {body?.table[0].subjects.map((_e, i) => (
            <div
              key={`timeslot-${i}`}
              className="font-inter-bold flex w-[10%] items-center justify-center p-[0.1rem] px-[0.5rem] text-center text-[6px]"
            >
              {timeConvert(startingTimesSlot[i])} -{" "}
              {timeConvert(endingTimesSlot[i])}
            </div>
          ))}
        </div>
        <div className="flex flex-col rounded-md bg-gray-900">
          {body?.table.map((row, i) => (
            <div className="flex" key={i}>
              {row.subjects.map((elem, j) =>
                elem ? (
                  <div className="flex w-[10%]" key={`table-${i}-${j}`}>
                    <td style={constructStyles(i, j, elem)}>
                      {truncateString(convertUnicode(elem).split("(")[0])}
                    </td>
                  </div>
                ) : (
                  <div
                    key={i}
                    className="w-[10%] border-[0.3px] border-gray-800 opacity-50"
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
  let obj: object = { ...styled };

  if (name.includes("Theory")) obj = { background: "#f3d86a", ...obj };
  else if (name.includes("Practical")) obj = { background: "#70fa70", ...obj };

  if (i == 0 && j == 0) obj = { borderTopLeftRadius: "6px", ...obj };
  else if (i == 0 && j == 9) obj = { borderTopRightRadius: "6px", ...obj };
  else if (i == 4 && j == 0) obj = { borderBottomLeftRadius: "6px", ...obj };
  else if (i == 4 && j == 9) obj = { borderBottomRightRadius: "6px", ...obj };

  return obj;
}
