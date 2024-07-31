import React from "react";
import Error from "@/components/States/Error";
import { useTimetable } from "@/provider/TimetableProvider";
import TableHeader from "./subcomponents/Timetable/TableHeader";
import Loading from "@/components/States/Loading";
import TableCard from "./subcomponents/Timetable/TableCard";
import Link from "@/components/Link";
import Container from "./subcomponents/Timetable/Container";

export default function Timetable() {
  const { timetable, isLoading, error } = useTimetable();
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
