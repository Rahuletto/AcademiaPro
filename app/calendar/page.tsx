"use client";
import Loading from "@/components/States/Loading";
import { useCalendar } from "@/provider/CalendarProvider";

import React, { useState } from "react";
import Error from "@/components/States/Error";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("@/components/Sidebar").then(a => a.Sidebar), { ssr: true });

const CalendarGrid = dynamic(() => import("./components/CalendarGrid").then(a => a.default), { ssr: false });
const CalendarHeader = dynamic(() => import("./components/CalendarHeader").then(a => a.default), { ssr: false });

export default function Calendar() {
  const { calendar, isLoading, error } = useCalendar();
  const [current, setCurrent] = useState(new Date().getMonth() % 5);
  const actual = new Date().getMonth();

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
          ) : error ? (
            <Error component="Calendar" />
          ) : (
            <section id="calendar" className="flex flex-col gap-6">
              <CalendarHeader mobile month={"Calendar"} />
              <CalendarHeader
                month={month}
                length={calendar?.length}
                setCurrent={setCurrent}
                current={current}
              />
              <CalendarGrid
                days={days}
                month={actual <= 4 ? current : current + 5}
              />
            </section>
          )}
        </div>
      </Sidebar>
    </main>
  );
}
