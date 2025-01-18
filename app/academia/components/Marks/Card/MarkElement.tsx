import type { Marks, Overall, TestPerformance } from "@/types/Marks";
import React from "react";

export default function MarkElement({ test }: { test: TestPerformance }) {
	return (
		<div className="flex items-center justify-between gap-2 pl-4">
			<span className="text-sm font-medium opacity-60">{test.test}</span>
			<MarkDisplay marks={test.marks} />
		</div>
	);
}

export function MarkDisplay({ marks }: { marks: Marks & Overall }) {
	const scored = marks.scored ? marks.scored : marks.marks;
	return (
		<div
			className={`${Number(scored) === Number(marks.total) && !marks.marks ? "border-light-success-color dark:border-dark-success-color" : Number(scored) < Number(marks.total) / 2 && !marks.marks ? "border-light-error-color dark:border-dark-error-color border-dashed" : "border-transparent"} flex items-center gap-1 rounded-full border bg-light-background-dark dark:bg-dark-background-dark`}
		>
			<span
				className={`px-2 pr-1 text-sm font-medium ${Number(scored) < Number(marks.total) / 2 ? "text-light-error-color dark:text-dark-error-color" : Number(scored) === Number(marks.total) ? "text-light-success-color dark:text-dark-success-color" : "text-light-color dark:text-dark-color"}`}
			>
				{scored}
			</span>
			<span
				className={`${marks.marks ? "bg-light-success-background text-light-success-color dark:bg-dark-success-background dark:text-dark-success-color" : "bg-light-color text-light-background-light dark:bg-dark-color dark:text-dark-background-darker"} rounded-full px-2 py-0.5 text-sm font-bold opacity-80`}
			>
				{marks.marks ? marks.total.split(".")[0] : marks.total}
			</span>
		</div>
	);
}
