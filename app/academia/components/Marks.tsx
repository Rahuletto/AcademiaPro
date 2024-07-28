import Link from "@/components/Link";
import { useMarks } from "@/provider/MarksProvider";
import React from "react";
import MarkCard from "./subcomponents/MarkCard";
import Indicator from "@/components/Indicator";

export default function Marks() {
  const { marks, isLoading, error } = useMarks();
  return (
    <section id="marks" className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Marks</h1>
        <Link
          href="#"
          secondary
          className="flex items-center justify-center text-sm text-light-accent dark:text-dark-accent"
        >
          Predict
        </Link>
      </div>
      <div className="grid-cols-marks grid gap-2">
        {marks
          ?.filter((a) => a.courseType === "Theory")
          .map((mark, i) => <MarkCard key={i} mark={mark} />)}
      </div>
      <Indicator type="Practical" extended />

      <div className="grid-cols-marks grid gap-2">
        {marks
          ?.filter((a) => a.courseType === "Practical" || a.courseType === "Lab")
          .map((mark, i) => <MarkCard key={i} mark={mark} />)}
      </div>
    </section>
  );
}
