import Refresh from "@/components/Refresh";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";

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
  const router = useRouter()
  return (
    <>
    <div
      className={`${mobile ? "flex justify-start md:hidden" : "fixed bottom-3 flex justify-center md:sticky md:top-1 md:justify-start"} z-50 gap-3 left-0 w-full items-center md:w-fit`}
    >
      <div className="ml-3 flex w-fit items-center justify-center gap-3 rounded-full bg-light-background-light px-3 py-3 dark:bg-dark-background-dark">
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

      <div className="px-3 py-3 dark:bg-dark-background-dark flex gap-3 bg-light-background-light rounded-full">
        <Refresh type={{ mutateCalendar: true }} />
        <button
      tabIndex={0}
      className={`rounded-full p-1 text-sm text-light-color opacity-60 transition duration-200 hover:bg-light-background-dark active:-rotate-45 dark:text-dark-color dark:hover:bg-dark-background-dark`}
      onClick={() => router.push("/calendar/download")}
    >
      <LiaDownloadSolid />
    </button>
      </div>
    </div>
    </>
  );
}
