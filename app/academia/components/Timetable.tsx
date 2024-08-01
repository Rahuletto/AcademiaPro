import React, { useEffect } from "react";
import Error from "@/components/States/Error";
import { useTimetable } from "@/provider/TimetableProvider";
import Loading from "@/components/States/Loading";
import Link from "@/components/Link";
import Container from "./subcomponents/Timetable/Container";

export default function Timetable() {
  const { timetable, isLoading, error, mutate } = useTimetable();

  useEffect(() => {
    if (!isLoading && !timetable) mutate();
  }, [isLoading, mutate, timetable]);

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
      </div>
      {timetable ? (
        <Container />
      ) : isLoading ? (
        <Loading />
      ) : (
        error && <Error component="timetable" />
      )}
    </section>
  );
}
