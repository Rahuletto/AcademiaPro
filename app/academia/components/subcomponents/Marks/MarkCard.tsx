import React, { useEffect, useState } from "react";
import { Mark } from "../../../../../types/Marks";
import Indicator from "@/components/Indicator";
import MarkElement, { MarkDisplay } from "./MarkElement";
import { FaCalculator } from "react-icons/fa6";

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

export default function MarkCard({ mark }: { mark: Mark }) {
  const [calculate, setCalcuate] = useState(false);
  const [grade, setGrade] = useState("O");
  const [req, setReq] = useState("0");
  const [expectedInternal, setExpectedInternal] = useState(0);

  useEffect(() => {
    setReq(
      (
        ((grade_points[grade] -
          (Number(mark.overall.marks) + expectedInternal)) /
          40) *
        75
      ).toPrecision(3),
    );
  }, [grade, calculate, expectedInternal]);
  return (
    <div
      title={`${mark.courseName} (${mark.courseCode})`}
      className="flex flex-col justify-between gap-3 rounded-3xl bg-light-background-normal p-4 px-5 pb-5 dark:bg-dark-background-normal"
    >
      <div className="flex h-full flex-col gap-4">
        <div className="flex w-full items-start justify-between gap-2">
          <h1
            title={mark.courseCode}
            aria-label={`${mark.courseName} (${mark.courseCode})`}
            className="text-md font-medium capitalize"
          >
            {mark.courseName?.toLowerCase()}
          </h1>
          <Indicator type={mark.courseType as "Practical" | "Theory"} />
        </div>
        {mark.testPerformance[0] ? (
          <div className="flex w-full flex-col gap-2 border-l-2 border-dark-background-light">
            {mark.testPerformance.map((test, i) => (
              <MarkElement test={test} key={i} />
            ))}
          </div>
        ) : (
          <div
            style={{ WebkitUserSelect: "none" }}
            className="flex h-full w-full select-none flex-col items-center justify-center gap-2 rounded-xl bg-light-side p-3 opacity-60 dark:bg-dark-side"
          >
            <h1
              aria-hidden
              className="font-mono text-xs font-medium text-light-accent dark:text-dark-accent"
            >
              No tests conducted.
            </h1>
          </div>
        )}
      </div>
      <div
        title="Total"
        aria-label="Total"
        role="alert"
        className="ml-2 mt-3 flex items-center justify-between gap-2 border-t-2 border-dashed border-dark-background-light pt-4"
      >
        <div className="flex flex-row items-center gap-2">
          <h2>Total</h2>
          <button
            className="rounded-full p-2 text-sm opacity-80 transition duration-200 hover:bg-light-background-dark dark:hover:bg-dark-background-dark"
            onClick={() => setCalcuate(!calculate)}
          >
            <FaCalculator />
          </button>
        </div>
        <MarkDisplay marks={mark.overall} />
      </div>
      {calculate && (
        <>
          <div
            title="Total"
            aria-label="Total"
            role="alert"
            className="ml-2 mt-3 items-center justify-between gap-2 border-t-2 border-dashed border-dark-background-light pt-4 text-sm text-light-accent dark:text-dark-accent"
          >
            <div className="flex items-center justify-between py-2">
              <div className="">Enter the required Grade</div>
              <div>
                <select className="appearance-none rounded-md border-none bg-light-background-light px-2 py-1 text-white outline-none dark:bg-dark-background-light">
                  <option value="O">O</option>
                  <option value="A+">A+</option>
                  <option value="A">A</option>
                  <option value="B+">B+</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
              </div>
            </div>
            {60 - Number.parseFloat(mark.overall.total) > 0 && (
              <div className="flex items-center justify-between py-2">
                <p>
                  Expected Internal of{" "}
                  {60 - Number.parseFloat(mark.overall.total)}:
                </p>
                <input
                  type="number"
                  className="appearance-none rounded-md border-none bg-light-background-light px-2 py-1 text-white outline-none hover:appearance-none dark:bg-dark-background-light"
                  value={expectedInternal}
                  min={0}
                  maxLength={3}
                  max={60 - Number.parseFloat(mark.overall.total)}
                  onChange={(e) => {
                    if (
                      Number(e.target.value) >= 0 &&
                      Number(e.target.value) <=
                        Number(60 - Number.parseFloat(mark.overall.total))
                    ) {
                      setExpectedInternal(Number(e.target.value));
                    }
                  }}
                />
              </div>
            )}
            <div className="flex flex-row items-center justify-between gap-2">
              <h2>Rquired Marks</h2>
              <div className="flex items-center gap-1 rounded-full border bg-gray-100 dark:bg-gray-800">
                <span className="pl-2 text-sm font-medium">{req}</span>
                <span className="rounded-full py-0.5 pr-2 text-sm font-bold">
                  /75
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
