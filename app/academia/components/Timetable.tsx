"use client";
import Link from "@/components/Link";
import Error from "@/components/States/Error";
import Loading from "@/components/States/Loading";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import dynamic from "next/dynamic";
import Refresh from "@/components/Refresh";
import NoData from "./subcomponents/NoData";
import { useData } from "@/provider/DataProvider";
import { usePlanner } from "@/provider/DataCalProvider";

const Container = dynamic(
  () => import("./subcomponents/Timetable/Container").then((a) => a.default),
  { ssr: false },
);

export default function Timetable() {
  const {
    timetable,
    isLoading: timetableLoading,
    error: timetableError,
  } = useData();

  const { dayOrder: day, isLoading: dayLoading } = usePlanner();

  const [currentDayOrder, setCurrentDayOrder] = useState<string | number>("1");
  const [ampm, setAmpm] = useState(false);

  useEffect(() => {
    const ampm = localStorage.getItem("ampm");
    if (ampm) setAmpm(ampm === "true");
  }, []);

  useEffect(() => {
    if (day) setCurrentDayOrder(day);
  }, [day]);

  const isHoliday = day && typeof day === "string" && day.includes("-");

  const handlePreviousDayOrder = () => {
    setCurrentDayOrder((prevDayOrder) => {
      const numOrder =
        typeof prevDayOrder === "string"
          ? parseInt(prevDayOrder, 10)
          : prevDayOrder;
      return isNaN(numOrder) ? 1 : numOrder > 1 ? numOrder - 1 : 5;
    });
  };

  const handleNextDayOrder = () => {
    setCurrentDayOrder((prevDayOrder) => {
      const numOrder =
        typeof prevDayOrder === "string"
          ? parseInt(prevDayOrder, 10)
          : prevDayOrder;
      return isNaN(numOrder) ? 1 : (numOrder % 5) + 1;
    });
  };

  const handleTodayClick = async () => {
    if (day) {
      setCurrentDayOrder(day);
    }
  };

  const isTodaySelected = day && currentDayOrder.toString() === day;

  return (
    <section id="timetable" className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="z-20 flex items-center gap-4">
          <h1 className="text-2xl font-semibold">Timetable</h1>
          <Link
            href="/timetable"
            secondary
            className="flex items-center justify-center text-sm text-light-accent dark:text-dark-accent"
          >
            Download
          </Link>

        </div>
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => {
              setAmpm((prev) => !prev)
              localStorage.setItem("ampm", (!ampm).toString());
            }}
            className={`rounded-full p-0.5 text-xs font-mono text-light-color opacity-60 hover:bg-light-background-dark dark:text-dark-color dark:hover:bg-dark-background-dark`}
          >
            {ampm ? "24H" : "12H"}
          </button>
          {!timetableError && <Refresh type={{ mutateTimetable: true }} />}
        </div>
      </div>

      {timetable ? (
        <Container ampm={ampm} day={day} currentDayOrder={Number(currentDayOrder)} />
      ) : timetableLoading || dayLoading ? (
        <Loading />
      ) : timetableError ? (
        <Error error={timetableError} component="timetable" />
      ) : (
        <NoData component="Timetable" />
      )}

      <div className="flex items-center justify-center gap-2">
        <button
          onClick={handlePreviousDayOrder}
          className="rounded p-1 text-light-accent hover:bg-light-background-dark dark:text-dark-accent dark:hover:bg-dark-background-normal"
        >
          <FiChevronLeft />
        </button>
        <span className="text-sm text-light-accent dark:text-dark-accent">
          {isHoliday && isNaN(Number(currentDayOrder))
            ? "Holiday"
            : `Day ${currentDayOrder}`}
        </span>
        <button
          onClick={handleNextDayOrder}
          className="rounded p-1 text-light-accent hover:bg-light-background-dark dark:text-dark-accent dark:hover:bg-dark-background-normal"
        >
          <FiChevronRight />
        </button>
        <button
          onClick={handleTodayClick}
          className={`ml-2 rounded-full border-2 border-dashed px-3 py-0.5 text-sm text-light-accent transition-all duration-200 hover:bg-light-background-dark dark:text-dark-accent dark:hover:bg-dark-background-normal ${
            isTodaySelected
              ? "border-transparent bg-light-success-background text-light-success-color dark:bg-dark-success-background dark:text-dark-success-color"
              : "border-light-background-dark dark:border-dark-background-light"
          }`}
        >
          Today
        </button>
      </div>
    </section>
  );
}
