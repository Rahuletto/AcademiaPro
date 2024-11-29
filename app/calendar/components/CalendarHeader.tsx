import Refresh from "@/components/Refresh";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";

interface CalendarHeaderProps {
  mobile?: boolean;
  month: string;
  length?: number | undefined;
  header?: boolean;
  current: number;
  setCurrent?: React.Dispatch<React.SetStateAction<number>>;
}

export default function CalendarHeader({
  mobile,
  month,
  length,
  header,
  current,
  setCurrent,
}: CalendarHeaderProps) {
  const router = useRouter();

  return (
    <>
      <div
        className={header ? "flex justify-start md:hidden" : `${mobile ? "flex justify-center md:hidden sticky bottom-3" : "hidden fixed bottom-3 md:flex justify-center md:sticky md:top-1 md:justify-start"} left-0 z-50 w-full items-center gap-3 md:w-fit`}
      >
        <div className="md:-ml-2 md:-mt-4 flex w-fit items-center justify-center gap-3 rounded-full bg-light-background-light px-3 py-3 dark:bg-dark-background-dark">
          {setCurrent ? (
            <button
              onClick={() => setCurrent((prev) => prev - 1)}
              disabled={current === 0}
              className="px-3 transition duration-100 hover:-translate-x-1 active:translate-x-1 disabled:text-light-error-color disabled:opacity-15 disabled:dark:text-dark-error-color"
            >
              <FaArrowLeft />
            </button>
          ) : null}
          <h1 className="min-w-24 text-center text-2xl font-semibold">
            {month}
          </h1>
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

        <div className={mobile ? "hidden" : "md:-ml-2 md:-mt-4 flex gap-3 rounded-full bg-light-background-light px-3 py-3 dark:bg-dark-background-dark"}>
          <Refresh type={{ mutateCalendar: true }} />
          <button
            tabIndex={0}
            className={`rounded-full p-1 text-sm text-light-color opacity-60 transition duration-200 hover:bg-light-background-dark active:-rotate-45 dark:text-dark-color dark:hover:bg-dark-background-dark`}
            onClick={() => router.push("/calendar/download?index=" + current)}
          >
            <LiaDownloadSolid />
          </button>
        </div>
      </div>
    </>
  );
}
