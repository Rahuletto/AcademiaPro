"use client";
import { Sidebar } from "@/components/Sidebar";
import Loading from "@/components/States/Loading";
import { useCalendar } from "@/provider/CalendarProvider";
import React, { useState } from "react";
import CalendarGrid from "./components/CalendarGrid";
import CalendarHeader from "./components/CalendarHeader";

export default function Calendar() {
  const { calendar, isLoading } = useCalendar();
  const [current, setCurrent] = useState(new Date().getMonth() % 5);
  const actual = new Date().getMonth()

  console.log(actual <= 4 ? current : current + 5)

  const month = calendar?.[current].month || "";
  const days = calendar?.[current].days || [];

  return (
    <main className="h-screen w-full bg-light-background-normal text-light-color dark:bg-dark-background-normal dark:text-dark-color">
      <Sidebar>
        <div className="flex flex-col gap-12">
          {isLoading ? (
            <>
              <CalendarHeader month={"Calendar"} />
              <Loading size="max" />
            </>
          ) : (
            <section id="calendar" className="flex flex-col gap-6">
              <CalendarHeader
                month={month}
                length={calendar?.length}
                setCurrent={setCurrent}
                current={current}
              />
              <CalendarGrid days={days} month={actual <= 4 ? current : current + 5} />
            </section>
          )}
        </div>
      </Sidebar>
    </main>
  );
}
