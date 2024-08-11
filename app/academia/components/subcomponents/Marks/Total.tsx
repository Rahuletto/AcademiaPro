import React from "react";
import { FaCalculator, FaXmark } from "react-icons/fa6";
import { Overall } from "@/types/Marks";
import dynamic from "next/dynamic";

import { MarkDisplay } from "./MarkElement";

interface TotalProps {
  overall: Overall;
  calculate: boolean;
  setCalculate: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TotalSection({
  overall,
  calculate,
  setCalculate,
}: TotalProps) {
  return (
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
      <MarkDisplay marks={overall} />
    </div>
  );
}
