import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CalendarHeaderProps {
  mobile?: boolean;
  month: string;
  length?: number | undefined;
  current?: number;
  setCurrent?: React.Dispatch<React.SetStateAction<number>>;
}

export default function CalendarHeader({
  mobile,
  month,
  length,
  current,
  setCurrent,
}: CalendarHeaderProps) {
  return (
    <div className={`${mobile ? "md:hidden flex justify-start" : "flex md:sticky md:top-1 fixed bottom-3 justify-center md:justify-start"} md:w-fit w-full left-0 z-10 items-center`}>
      <div className="ml-3 flex items-center justify-center gap-3 w-fit rounded-full bg-light-background-light px-3 py-3 dark:bg-dark-background-dark">
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
    </div>
  );
}
