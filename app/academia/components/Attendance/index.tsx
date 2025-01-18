import React from "react";
import Prediction from "./Prediction";
import type { AllResponse } from "@/types/Response";
import { fetchCalendar } from "@/hooks/fetchCalendar";

export const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export default async function Attendance({ data }: { data: AllResponse }) {
	const cal = await fetchCalendar();

	const mappedCal = cal.calendar.flatMap((day) => {
		const month = months.findIndex(
			(month) => month.trim() === day.month.split("'")[0].trim(),
		);

		return day.days.map((date) => ({
			date: date.date,
			month: month,
			order: date.dayOrder,
			dateObj: new Date(
				new Date().getFullYear(),
				month,
				Number.parseInt(date.date),
			),
		}));
	});

	return (
		<>
			<section id="attendance">
				<div className="flex justify-between items-center px-2 mb-1">
					<h1 className="text-2xl font-semibold">Attendance</h1>
					<Prediction data={data} cal={mappedCal} calendar={cal.calendar} />
				</div>
				<div id="attendance-list" />
			</section>
		</>
	);
}
