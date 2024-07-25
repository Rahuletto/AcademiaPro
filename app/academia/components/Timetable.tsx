import React from "react";
import Error from "@/components/States/Error";
import { useTimetable } from "@/provider/TimetableProvider";
import TableHeader from "./subcomponents/TableHeader";
import Loading from "@/components/States/Loading";
import Tabler from "./subcomponents/Tabler";

export default function Timetable() {
  const { timetable, isLoading } = useTimetable();
  return (
    <section id="timetable" className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Timetable</h1>
      {timetable ? (
        <div className="text-md min-w-full animate-fadeIn rounded-2xl bg-light-background-normal p-1 text-left dark:bg-dark-background-normal">
          <TableHeader />
          <Tabler />
        </div>
      ) : isLoading ? (
        <Loading />
      ) : (
        <Error component="timetable" />
      )}
    </section>
  );
}
