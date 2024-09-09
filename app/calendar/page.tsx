"use client";
import Loading from "@/components/States/Loading";
import { useCalendar } from "@/provider/CalendarProvider";

import React, { useEffect, useState } from "react";
import Error from "@/components/States/Error";
import dynamic from "next/dynamic";

import { Sidebar } from "@/components/Sidebar";

import CalendarGrid from "./components/CalendarGrid";
import { useMutateAll } from "@/hooks/useMutate";

const CalendarHeader = dynamic(
  () => import("./components/CalendarHeader").then((a) => a.default),
  { ssr: false },
);

export default function Calendar() {

  const { calendar, isLoading, error, requestedAt } = useCalendar();
  const [isOld, setIsOld] = useState(false);
  const [current, setCurrent] = useState(new Date().getMonth() % 5);
  const actual = new Date().getMonth();

  const month = calendar?.[current].month || "";
  const days = calendar?.[current].days || [];

  useEffect(() => {
    if (
      !isLoading && !error &&
      (
        (!requestedAt || Date.now() - requestedAt > 4 * 60 * 60 * 1000))
    ) {
      setIsOld(true);
    } else if (requestedAt && Date.now() - requestedAt < 4 * 60 * 60 * 1000) {
      setIsOld(false);
    }
  }, [calendar, isLoading, error, requestedAt]);

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
              <div className={`${isOld ? "border-light-info-color dark:border-dark-info-color" : "border-transparent" } pb-1 px-1 rounded-2xl mb-16 border-4 border-dotted`}>
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
