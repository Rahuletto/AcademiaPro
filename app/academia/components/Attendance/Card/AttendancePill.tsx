import React from "react";

type AttendancePillProps = {
	present: number;
	absent: number;
	total: number;
};

export default function AttendanceDetails({
	present,
	absent,
	total,
}: AttendancePillProps) {
	return (
		<div
			style={{ WebkitUserSelect: "none" }}
			className="flex select-none items-center gap-3 self-end justify-self-start rounded-full bg-light-background-darker p-0.5 font-medium md:self-center md:justify-self-center dark:bg-dark-input"
		>
			<div className="flex items-center font-medium">
				<span className="rounded-l-full bg-light-success-background px-3 text-light-success-color dark:bg-dark-success-background dark:text-dark-success-color">
					{present}
				</span>
				<span className="rounded-r-full bg-light-error-background px-3 text-light-error-color dark:bg-dark-error-background dark:text-dark-error-color">
					{absent}
				</span>
			</div>
			<span className="rounded-full bg-light-color px-3 font-bold text-light-background-light opacity-80 dark:bg-dark-color dark:text-dark-background-dark">
				{total}
			</span>
		</div>
	);
}
