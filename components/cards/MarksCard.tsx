import styles from "@/styles/MarksCard.module.css";
import { Overall, TestPerformance } from "@/types/Marks";
import { useEffect, useState } from "react";

interface Props {
  name: string;
  category: string;
  marks: TestPerformance[];
  overall: Overall;
  code: string;
}

const grade_points: {
  [key: string]: number;
} = {
  O: 91,
  "A+": 81,
  A: 71,
  "B+": 61,
  B: 56,
  C: 50,
};

const MarksCard = ({ name, marks, code, category, overall }: Props) => {
  const [arr, setArr] = useState<TestPerformance[]>([]);
  const [grade, setGrade] = useState("O");
  const [req, setReq] = useState("0");
  const [expectedInternal, setExpectedInternal] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setArr([...marks]);
  }, [marks]);

  useEffect(() => {
    setReq(
      (
        ((grade_points[grade] - (Number(overall.marks) + expectedInternal)) /
          40) *
        75
      ).toPrecision(3),
    );
  }, [grade, expanded, overall, expectedInternal]);

  function expand() {
    const e = document.getElementsByClassName("markExpand");
    Array.from(e).forEach((w) => {
      w.classList.toggle("markExpand");
    });
    if (parseFloat(overall.total) !== 100) {
      setExpanded((e) => !e);
    }
  }

  return (
    <>
      {arr[0] ? (
        <div
          className={`${
            expanded && category === "Theory" ? "markExpand" : ""
          } markContainer`}
        >
          <div
            title={`${code} (${category})`}
            id={category.toLowerCase()}
            onDoubleClick={expand}
            className="card markCard"
          >
            <div className="flex w-full items-center justify-between gap-2">
              <h4 className="title">{name}</h4>
              <div
                className={`circle ${category === "Theory" ? "" : "greenCircle"}`}
              ></div>
            </div>
            <div className={styles.marks}>
              {marks.map((element, index) => (
                <div key={index} className={styles.row}>
                  <span className={[styles.muted_title, "col-6"].join(" ")}>
                    {element.test}
                  </span>

                  <div className={styles.markPill}>
                    <span
                      className={
                        element.marks.scored == "Abs" ||
                        parseFloat(element.marks.total) / 2 >
                          parseFloat(element.marks.scored)
                          ? styles.red
                          : styles.mark
                      }
                    >
                      {element.marks.scored}
                    </span>
                    <span className={styles.total}>
                      {element.marks.total.split(".")[0]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div id="total-row" className="row border-t border-sideActive pt-3">
              <span id="total" className="muted_title col-6">
                Total
              </span>

              <button
                disabled={parseFloat(overall.total) === 100}
                onClick={expand}
                id="calc-btn"
                className="download"
              ></button>

              <div
                className="markPill"
                title={`Lost ${(
                  parseFloat(overall.total) - parseFloat(overall.marks)
                ).toPrecision(3)} marks`}
              >
                <span className="mark text-color">{overall.marks}</span>
                <span className="total">{overall.total.split(".")[0]}</span>
              </div>
            </div>
          </div>

          <div className="grade">
            {60 - parseFloat(overall.total) > 0 && (
              <div id="gradex">
                <p>Expected Internal of {60 - parseFloat(overall.total)}:</p>
                <input
                  type="number"
                  value={expectedInternal}
                  min={0}
                  max={60 - parseFloat(overall.total)}
                  onChange={(e) => {
                    if (
                      Number(e.target.value) >= 0 &&
                      Number(e.target.value) <=
                        Number(60 - parseFloat(overall.total))
                    ) {
                      setExpectedInternal(Number(e.target.value));
                    }
                  }}
                />
              </div>
            )}

            <div id="gradex">
              <div className="flex items-center space-x-2">
                <p>Required for</p>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                >
                  <option value="O">O</option>
                  <option value="A+">A+</option>
                  <option value="A">A</option>
                  <option value="B+">B+</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
                <p>grade</p>
              </div>
              <div>
                <span
                  className={`${parseFloat(req) > 75 ? "text-red" : "mark"}`}
                >
                  {req}
                </span>
                <span className="total">75</span>
              </div>
            </div>

            <span id="warn">
              This shows how many marks you want to get in the final semester
              exam! So make sure your total internal is at 60
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MarksCard;
