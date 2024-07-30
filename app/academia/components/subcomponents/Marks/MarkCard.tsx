import React from "react";
import { Mark } from "../../../../../types/Marks";
import Indicator from "@/components/Indicator";
import MarkElement, { MarkDisplay } from "./MarkElement";

export default function MarkCard({ mark }: { mark: Mark }) {
  return (
    <div
      title={`${mark.courseName} (${mark.courseCode})`}
      className="flex flex-col justify-between gap-3 rounded-3xl bg-light-background-normal p-4 px-5 pb-5 dark:bg-dark-background-normal"
    >
      <div className="flex h-full flex-col gap-4">
        <div className="flex w-full items-start justify-between gap-2">
          <h1
            title={mark.courseCode}
            aria-label={`${mark.courseName} (${mark.courseCode})`}
            className="text-md font-medium capitalize"
          >
            {mark.courseName.toLowerCase()}
          </h1>
          <Indicator type={mark.courseType as "Practical" | "Theory"} />
        </div>
        {mark.testPerformance[0] ? (
          <div className="flex w-full flex-col gap-2 border-l-2 border-dark-background-light">
            {mark.testPerformance.map((test, i) => (
              <MarkElement test={test} key={i} />
            ))}
          </div>
        ) : (
          <div
            style={{ WebkitUserSelect: "none" }}
            className="flex h-full w-full select-none flex-col items-center justify-center gap-2 rounded-xl bg-light-side p-3 opacity-60 dark:bg-dark-side"
          >
            <h1
              aria-hidden
              className="font-mono text-xs font-medium text-light-accent dark:text-dark-accent"
            >
              No tests conducted.
            </h1>
          </div>
        )}
      </div>
      <div
        title="Total"
        aria-label="Total"
        role="alert"
        className="ml-2 mt-3 flex items-center justify-between gap-2 border-t-2 border-dashed border-dark-background-light pt-4"
      >
        <h2>Total</h2>
        <MarkDisplay marks={mark.overall} />
      </div>
    </div>
  );
}
