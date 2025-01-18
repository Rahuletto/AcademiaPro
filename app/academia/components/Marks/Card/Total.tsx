import React from "react";
import type { Overall } from "@/types/Marks";

import { MarkDisplay } from "./MarkElement";

interface TotalProps {
	overall?: Overall;
	graph?: boolean;
}

export default function TotalSection({ overall, graph }: TotalProps) {
	if (!overall) {
		const percent = "0.00";
		return (
			<div className="ml-2 mt-3 flex flex-col gap-2 relative">
				<div
					title="Total"
					aria-label="Total"
					role="alert"
					className={"flex items-center justify-between gap-2 border-t-2 border-dashed border-dark-background-light pt-4"}
				>
					<div className="flex flex-row items-center gap-4">
						<h2>Total</h2>

						{graph && (
							<div
								className={`${Number(percent.split(".")[0]) <= 75 ? "bg-light-warn-background text-light-warn-color dark:bg-dark-warn-background dark:text-dark-warn-color" : Number(percent) < 50 ? "bg-light-error-background text-light-error-color dark:bg-dark-error-background dark:text-dark-error-color" : "bg-light-success-background text-light-success-color dark:bg-dark-success-background dark:text-dark-success-color"} rounded-md px-2 py-0.5`}
							>
								<p className="text-xs font-semibold">{percent}%</p>
							</div>
						)}
					</div>
					<MarkDisplay
						marks={{
							marks: "0.00",
							total: "0",
						}}
					/>
				</div>
			</div>
		);
	}

	const percent = (
		(Number.parseFloat(overall.marks ?? "0") / Number.parseFloat(overall.total ?? "1")) *
		100
	).toFixed(1);

	return (
		<div className="ml-2 mt-3 flex flex-col gap-2 relative">
			<div
				title="Total"
				aria-label="Total"
				role="alert"
				className={"flex items-center justify-between gap-2 border-t-2 border-dashed border-dark-background-light pt-4"}
			>
				<div className="flex flex-row items-center gap-4">
					<h2>Total</h2>

					{graph && (
						<div
							className={`${Number(percent.split(".")[0]) <= 75 ? "bg-light-warn-background text-light-warn-color dark:bg-dark-warn-background dark:text-dark-warn-color" : Number(percent) < 50 ? "bg-light-error-background text-light-error-color dark:bg-dark-error-background dark:text-dark-error-color" : "bg-light-success-background text-light-success-color dark:bg-dark-success-background dark:text-dark-success-color"} rounded-md px-2 py-0.5`}
						>
							<p className="text-xs font-semibold">{percent}%</p>
						</div>
					)}
				</div>
				<MarkDisplay marks={overall} />
			</div>
		</div>
	);
}
