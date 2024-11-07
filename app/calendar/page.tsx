"use client";
import Loading from "@/components/States/Loading";

import React, { useEffect, useState } from "react";
import Error from "@/components/States/Error";
import dynamic from "next/dynamic";

import { Sidebar } from "@/components/Sidebar";

import CalendarGrid from "./components/CalendarGrid";
import { usePlanner } from "@/provider/DataCalProvider";

const CalendarHeader = dynamic(
  () => import("./components/CalendarHeader").then((a) => a.default),
  { ssr: false },
);

export default function Calendar() {
  const { calendar, isLoading, error } = usePlanner();
  const [current, setCurrent] = useState(new Date().getMonth() - 5);
  const actual = new Date().getMonth();

  const month = calendar?.[current].month || "";
  const days = calendar?.[current].days || [];

  return (
    <main className="h-screen w-full bg-light-background-normal text-light-color dark:bg-dark-background-normal dark:text-dark-color">
      <Sidebar>
        <div className="flex flex-col gap-12">
          {isLoading ? (
            <>
              <CalendarHeader current={current} month={"Calendar"} />
              <Loading size="max" />
            </>
          ) : error ? (
            <Error error={error} component="Calendar" />
          ) : (
            <section id="calendar" className="flex flex-col gap-6">
              <CalendarHeader current={current} mobile month={"Calendar"} />
              <CalendarHeader
                month={month}
                length={calendar?.length}
                setCurrent={setCurrent}
                current={current}
              />
              <div>
                <CalendarGrid
                  days={days}
                  month={actual <= 4 ? current : current + 5}
                />
              </div>
            </section>
          )}
        </div>
      </Sidebar>
    </main>
  );
}
