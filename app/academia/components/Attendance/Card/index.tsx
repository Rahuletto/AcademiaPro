import type { AttendanceCourse } from "@/types/Attendance";
import React from "react";
import CourseTitle from "./Title";
import AttendanceMargin from "./Margin";
import AttendanceDetails from "./AttendancePill";

export default function AttendanceCard({
	attendance,
	continuous,
}: { attendance: AttendanceCourse; continuous?: boolean }) {
	const {
		courseTitle,
		category,
		hoursConducted,
		hoursAbsent,
		attendancePercentage,
	} = attendance;

	const present =
		Number.parseInt(hoursConducted, 10) - Number.parseInt(hoursAbsent, 10);
	const total = Number.parseInt(hoursConducted, 10);
	const absent = Number.parseInt(hoursAbsent, 10);

	return (
		<div
			role="cell"
			className={`odd:bg-light-background-normal relative even:bg-light-background-light dark:odd:bg-dark-background-normal dark:even:bg-dark-background-dark grid w-full grid-cols-[3fr_1fr] grid-rows-[repeat(2,1fr)] items-center gap-3 gap-y-2 p-4 px-6 transition duration-150 md:my-0 md:flex md:items-center md:justify-between ${continuous ? "md:first:rounded-t-xl md:last:rounded-b-xl first:rounded-t-2xl last:rounded-b-2xl" : "rounded-2xl md:rounded-xl"}`}
		>
			<CourseTitle
				courseTitle={courseTitle.split(":")[0]}
				category={category}
			/>
			<div>
				<AttendanceMargin present={present} total={total} />
			</div>
			<AttendanceDetails present={present} absent={absent} total={total} />
			<span
				className={`w-24 self-end justify-self-end text-right font-semibold md:self-center md:justify-self-center ${
					Number.parseFloat(attendancePercentage) === 100
						? "text-3xl text-light-success-color dark:text-dark-success-color"
						: Number.parseFloat(attendancePercentage) === 75
							? "text-2xl text-light-warn-color dark:text-dark-warn-color"
							: Number.parseFloat(attendancePercentage) < 75
								? "text-2xl text-light-error-color dark:text-dark-error-color"
								: "text-2xl text-light-color dark:text-dark-color"
				}`}
			>
				{attendancePercentage.replace(".00", "").replace("%", "")}%
			</span>
		</div>
	);
}
