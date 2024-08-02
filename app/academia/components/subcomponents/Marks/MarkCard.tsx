import React, { useEffect, useState } from "react";
import { Mark } from "../../../../../types/Marks";
import Indicator from "@/components/Indicator";
import MarkElement, { MarkDisplay } from "./MarkElement";
import { FaCalculator, FaXmark } from "react-icons/fa6";

const grade_points: { [key: string]: number } = {
  O: 91,
  "A+": 81,
  A: 71,
  "B+": 61,
  B: 56,
  C: 50,
};

export default function MarkCard({ mark }: { mark: Mark }) {
  const [calculate, setCalculate] = useState(false);
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
  }, [grade, calculate, expectedInternal, mark.overall.marks]);

  return (
    <div
      title={`${mark.courseName} (${mark.courseCode})`}
      className="relative flex min-h-[195px] flex-col justify-between gap-3 rounded-3xl bg-light-background-normal p-4 px-5 pb-5 dark:bg-dark-background-normal"
    >
      <div
        className={`${calculate ? "opacity-50" : "opacity-100"} flex h-full flex-col gap-4`}
      >
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
        className={`${calculate ? "opacity-80" : "opacity-100"} ml-2 mt-3 flex items-center justify-between gap-2 border-t-2 border-dashed border-dark-background-light pt-4`}
      >
        <div className="flex flex-row items-center gap-4">
          <h2>Total</h2>
          <button
            className={`rounded-full p-2 text-xs opacity-70 transition duration-200 ${calculate ? "bg-light-error-background dark:bg-dark-error-background" : "hover:bg-light-background-dark dark:hover:bg-dark-background-dark"}`}
            onClick={() => setCalculate(!calculate)}
          >
            {calculate ? (
              <FaXmark className="text-light-error-color dark:text-dark-error-color" />
            ) : (
              <FaCalculator />
            )}
          </button>
        </div>
        <MarkDisplay marks={mark.overall} />
      </div>

      {calculate && (
        <>
          <div
            role="alert"
            className="absolute bottom-14 left-0 z-10 ml-2 mt-1 w-[97%] animate-fastfade items-center justify-between gap-2 rounded-2xl bg-light-background-light p-4 px-5 pb-5 pt-2 text-sm text-light-accent transition duration-300 md:bottom-[70px] md:w-[95%] dark:bg-dark-side dark:text-dark-accent"
          >
            <div className="flex items-center justify-between pt-2">
              <div>Enter the required Grade</div>
              <div>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="appearance-none rounded-full border-none bg-light-background-dark px-3 py-1 text-light-color outline-none dark:bg-dark-background-normal dark:text-dark-color"
                >
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
                  type="text"
                  className="w-16 appearance-none rounded-md border-none bg-light-background-dark px-2 py-1 text-center outline-none dark:bg-dark-background-normal"
                  value={expectedInternal}
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
              <h2>Required Marks</h2>
              <div className="flex items-center gap-1 rounded-full bg-light-background-dark dark:bg-dark-background-dark">
                <span
                  className={`pl-2 text-sm font-medium ${
                    Number(req) <= 0
                      ? "text-light-accent dark:text-dark-accent"
                      : Number(req) > 75
                        ? "text-light-error-color dark:text-dark-error-color"
                        : "text-light-success-color dark:text-dark-success-color"
                  }`}
                >
                  {req}
                </span>
                <span className="ml-1 rounded-full bg-light-success-color px-2 py-0.5 pr-2 text-sm font-bold text-light-success-background dark:bg-dark-success-color dark:text-dark-success-background">
                  75
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
