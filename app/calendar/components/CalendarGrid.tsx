"use client";

import React, { useEffect, useRef } from "react";
import DayCell from "./DayCell";
import { Day } from "@/types/Calendar";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface CalendarGridProps {
  month: number;
  days: Day[];
}

export default function CalendarGrid({ days, month }: CalendarGridProps) {
  const todayRef = useRef<HTMLDivElement>(null);
  const date = new Date().getDate();

  useEffect(() => {
    if (todayRef.current)
      todayRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [month]);

  const getFirstDayIndex = () => weekdays.indexOf(days[0].day);

  return (
    <div className="mb-16 w-full pt-1">
      <div className="hidden text-center font-bold xl:grid xl:grid-cols-7 xl:gap-4">
        {weekdays.map((weekday) => (
          <div key={weekday} className="rounded p-2 font-medium">
            {weekday}
          </div>
        ))}
      </div>
      <div className="text-center xl:grid xl:grid-cols-7">
        {Array.from({ length: getFirstDayIndex() }, (_, index) => (
          <div style={{ opacity: 0.6 }} key={`empty-${index}`} />
        ))}
        {days
          .filter((a) => a.dayOrder.length <= 1)
          .map((day, index) => (
            <DayCell
              key={index}
              day={day}
              isTomorrow={
                date + 1 === Number(day.date) &&
                new Date().getMonth() === month &&
                new Date().getHours() > 16
              }
              isToday={
                date === Number(day.date) && new Date().getMonth() === month
              }
              ref={date === Number(day.date) ? todayRef : null}
            />
          ))}
      </div>
    </div>
  );
}
