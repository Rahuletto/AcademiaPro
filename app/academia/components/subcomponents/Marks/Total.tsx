import React from "react";
import { FaCalculator, FaXmark } from "react-icons/fa6";
import { Overall } from "@/types/Marks";

import { MarkDisplay } from "./MarkElement";

interface TotalProps {
  overall: Overall;
  calculate: boolean;
  graph?: boolean;
  setCalculate: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TotalSection({
  overall,
  calculate,
  graph,
  setCalculate,
}: TotalProps) {
  const percent = (
    (parseFloat(overall.marks ?? "0") / parseFloat(overall.total ?? "1")) *
    100
  ).toFixed(1);

  return (
    <div className="relative ml-2 mt-3 flex flex-col gap-2">
      {/* <div className="absolute right-2 bottom-7 z-10">
        {Number(overall.total) <= 60 && (
          <button
            className={`rounded-full p-2 text-xs opacity-70 transition duration-200 ${calculate ? "bg-light-error-background dark:bg-dark-error-background" : "bg-light-background-dark dark:bg-dark-background-dark"}`}
            onClick={() => setCalculate(!calculate)}
          >
            {calculate ? (
              <FaXmark className="text-light-error-color dark:text-dark-error-color" />
            ) : (
              <FaCalculator />
            )}
          </button>
        )}
      </div> */}

      <div
        title="Total"
        aria-label="Total"
        role="alert"
        className={`${calculate ? "opacity-80" : "opacity-100"} flex items-center justify-between gap-2 border-t-2 border-dashed border-dark-background-light pt-4`}
      >
        <div className="flex flex-row items-center gap-4">
          <h2>Total</h2>

          {graph ? (
            <div
              className={`${Number(percent.split(".")[0]) <= 75 ? "bg-light-warn-background text-light-warn-color dark:bg-dark-warn-background dark:text-dark-warn-color" : Number(percent) < 50 ? "bg-light-error-background text-light-error-color dark:bg-dark-error-background dark:text-dark-error-color" : "bg-light-success-background text-light-success-color dark:bg-dark-success-background dark:text-dark-success-color"} rounded-md px-2 py-0.5`}
            >
              <p className="text-xs font-semibold">{percent}%</p>
            </div>
          ) : (
            Number(overall.total) <= 60 && (
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
            )
          )}
        </div>
        <MarkDisplay marks={overall} />
      </div>
    </div>
  );
}
