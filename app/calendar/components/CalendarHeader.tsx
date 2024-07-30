import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CalendarHeaderProps {
  month: string;
  length?: number | undefined;
  current?: number;
  setCurrent?: React.Dispatch<React.SetStateAction<number>>;
}

export default function CalendarHeader({
  month,
  length,
  current,
  setCurrent,
}: CalendarHeaderProps) {
  return (
    <div className="sticky top-1 z-10 ml-3 flex w-fit gap-3 rounded-full bg-light-background-light px-3 py-3 dark:bg-dark-background-dark">
      {setCurrent ? (
        <button
          onClick={() => setCurrent((prev) => prev - 1)}
          disabled={current === 0}
          className="px-3 transition duration-100 hover:-translate-x-1 active:translate-x-1 disabled:text-light-error-color disabled:opacity-15 disabled:dark:text-dark-error-color"
        >
          <FaArrowLeft />
        </button>
      ) : null}
      <h1 className="min-w-24 text-center text-2xl font-semibold">{month}</h1>
      {setCurrent ? (
        <button
          onClick={() => setCurrent((prev) => prev + 1)}
          disabled={current === length! - 1}
          className="px-3 transition duration-100 hover:translate-x-1 active:-translate-x-1 disabled:text-light-error-color disabled:opacity-15 disabled:dark:text-dark-error-color"
        >
          <FaArrowRight />
        </button>
      ) : null}
    </div>
  );
}
