import React, { use, useEffect, useRef, useState } from "react";
import Error from "@/components/States/Error";
import { useTimetable } from "@/provider/TimetableProvider";
import { useDay } from "@/provider/DayProvider";
import Loading from "@/components/States/Loading";
import Link from "@/components/Link";
import Container from "./subcomponents/Timetable/Container";
import { FiInfo, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import InfoPopup from "./subcomponents/Attendance/InfoPopup";

export default function Timetable() {
  const {
    timetable,
    isLoading: timetableLoading,
    error: timetableError,
  } = useTimetable();

  const { day, isLoading: dayLoading, error: dayError } = useDay();
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const infoIconRef = useRef<HTMLDivElement>(null);
  const [currentDayOrder, setCurrentDayOrder] = useState<string | number>("1");

  useEffect(() => {
    if (day) setCurrentDayOrder(day);
  }, [day]);

  const toggleInfoPopup = () => setShowInfoPopup((e) => !e);
  const isHoliday = day && typeof day === "string" && day.includes("No");

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

  const isTodaySelected = day && currentDayOrder.toString() === day.toString();

  return (
    <section id="timetable" className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Timetable</h1>
        <Link
          href="/timetable"
          secondary
          className="flex items-center justify-center text-sm text-light-accent dark:text-dark-accent"
        >
          Download
        </Link>

        <div className="relative" ref={infoIconRef}>
          <FiInfo
            className="cursor-help opacity-40"
            onClick={toggleInfoPopup}
            onMouseEnter={toggleInfoPopup}
            onMouseLeave={() => setShowInfoPopup(false)}
          />
          {showInfoPopup && (
            <InfoPopup
              bottom
              text="Generate your full schedule timetable and download it as image."
              onClose={() => setShowInfoPopup(false)}
            />
          )}
        </div>
      </div>
      {timetable ? (
        <Container day={day} currentDayOrder={Number(currentDayOrder)} />
      ) : timetableLoading || dayLoading ? (
        <Loading />
      ) : (
        (timetableError || dayError) && <Error component="timetable" />
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
