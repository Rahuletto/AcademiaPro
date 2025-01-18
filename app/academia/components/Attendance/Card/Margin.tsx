import { calculateMargin } from "@/utils/Margin";
import React from "react";

type AttendanceMarginProps = {
	present: number;
	total: number;
};

export default function AttendanceMargin({
	present,
	total,
}: AttendanceMarginProps) {
	const margin = calculateMargin(present, total);

	return (
		<div
			aria-hidden
			title="Margin"
			style={{ WebkitUserSelect: "none" }}
			className="w-24 select-none absolute md:static top-4 right-4 self-start justify-self-end text-right md:self-center md:justify-self-center"
		>
			<span
				title={"The hours you can skip"}
				className={`text-sm flex items-center justify-center font-medium ${margin < 0 ? "text-light-error-color dark:text-dark-error-color" : "text-light-accent dark:text-dark-accent"}`}
			>
				<span className="opacity-40">
					{margin >= 0 ? "Margin: " : "Required: "}
				</span>

				<span
					className={`text-md ml-1 font-semibold ${margin <= 0 ? "text-light-error-color dark:text-dark-error-color" : "text-light-info-color dark:text-dark-info-color"}`}
				>
					{Math.abs(margin)}
				</span>
			</span>
		</div>
	);
}
