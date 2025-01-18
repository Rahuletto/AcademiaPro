"use client";
import React, { useState } from "react";
import type { Mark } from "@/types/Marks";
import TotalSection from "./Total";
import MarkList from "./MarkList";

import dynamic from "next/dynamic";
import type { Course } from "@/types/Course";
// import PerformanceChart from "./PerfGraph";

const Indicator = dynamic(
	() => import("@/components/Indicator").then((a) => a.default),
	{ ssr: false },
);

export default function MarkCard({
	mark,
	course,
	// graph = false,
}: {
	mark: Mark | undefined;
	course: Course;
	// graph: boolean;
}) {
	// if (!mark) return null;
	return (
		<div className={"relative flex flex-col items-center"}>
			<div
				title={`${course.title} (${course.code})`}
				className={`relative flex h-full min-h-[195px] w-full flex-col ${course?.credit === "0" ? "border-x-2 border-light-background-light dark:border-dark-background-light" : "border-transparent"} justify-between gap-3 rounded-3xl border bg-light-background-normal p-4 px-5 pb-5 dark:bg-dark-background-normal`}
			>
				<div className={"flex h-full flex-col gap-4"}>
					<div className="flex w-full items-start justify-between gap-2">
						<h1
							title={course.code}
							aria-label={`${course.title} (${course.code})`}
							className="text-md font-medium capitalize"
						>
							{course.title}
						</h1>
						<Indicator type={course.slotType as "Practical" | "Theory"} />
					</div>
					<div className="flex flex-col gap-16">
						{/* {graph ? (
              <PerformanceChart testPerformance={mark.testPerformance} />
            ) : null} */}

						<MarkList testPerformance={mark?.testPerformance} />
					</div>
				</div>

				<TotalSection
					// graph={graph}
					overall={mark?.overall}
				/>
			</div>
			{course?.credit === "0" && (
				<div className="absolute -bottom-3 z-10 mx-auto my-0.5 w-fit rounded-full border border-light-background-light bg-light-background-dark px-3 py-0.5 dark:border-dark-background-light dark:bg-dark-background-light">
					<p className="text-center font-mono text-[10px] text-light-color opacity-40 dark:text-dark-color">
						Zero Credit
					</p>
				</div>
			)}
		</div>
	);
}
