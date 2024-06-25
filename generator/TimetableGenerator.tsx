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
    <div
      style={{
        fontFamily: "Inter",
        background: "#0a0d12",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        transform: "scale(3.8)",
      }}
    >
      <div
        style={{
          margin: 0,
          fontFamily: "Inter",
          width: "610px",
          display: "flex",
          flexDirection: "column",
          background: "#12171e",
          borderRadius: 8,
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          padding: 2,
        }}
      >
        <div
          style={{
            height: 20,
            color: "white",
            fontWeight: 600,
            display: "flex",
          }}
        >
          {body?.table[0].subjects.map((_e, i) => (
            <div
              key={`timeslot-${i}`}
              style={{
                padding: "0.1rem 0.5rem",
                fontFamily: '"Inter-Bold"',
                width: "10%",
                fontSize: 6,
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {timeConvert(startingTimesSlot[i])} -{" "}
              {timeConvert(endingTimesSlot[i])}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#04070b",
            borderRadius: "6px",
          }}
        >
          {body?.table.map((row, i) => (
            <div style={{ display: "flex" }} key={i}>
              {row.subjects.map((elem, j) =>
                elem ? (
                  <div
                    style={{
                      border: "0px",
                      display: "flex",
                      width: "10%",
                    }}
                    key={`table-${i}-${j}`}
                  >
                    <td style={constructStyles(i, j, elem)}>
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
  let obj: object = { ...styled };

  if (name.includes("Theory")) obj = { background: "#f3d86a", ...obj };
  else if (name.includes("Practical")) obj = { background: "#70fa70", ...obj };

  if (i == 0 && j == 0) obj = { borderTopLeftRadius: "6px", ...obj };
  else if (i == 0 && j == 9) obj = { borderTopRightRadius: "6px", ...obj };
  else if (i == 4 && j == 0) obj = { borderBottomLeftRadius: "6px", ...obj };
  else if (i == 4 && j == 9) obj = { borderBottomRightRadius: "6px", ...obj };

  return obj;
}
