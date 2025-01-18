import React from "react";
import type { TestPerformance } from "@/types/Marks";
import dynamic from "next/dynamic";

const MarkElement = dynamic(
	() => import("./MarkElement").then((a) => a.default),
	{ ssr: false },
);

export default function MarkList({
	testPerformance,
}: {
	testPerformance?: TestPerformance[];
}) {
	if (testPerformance?.[0]) {
		return (
			<div className="flex w-full flex-col gap-2 border-l-2 border-dark-background-light">
				{testPerformance.map((test, i) => (
					<MarkElement test={test} key={i} />
				))}
			</div>
		);
	}

	return (
		<div
			style={{ WebkitUserSelect: "none" }}
			className="flex h-full w-full select-none flex-col items-center justify-center gap-2 rounded-xl bg-light-side p-3 opacity-60 dark:bg-dark-side"
		>
			<h1
				aria-label="No tests conducted."
				className="font-mono text-xs font-medium text-light-accent dark:text-dark-accent"
			>
				No tests conducted.
			</h1>
		</div>
	);
}
