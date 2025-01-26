"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import DayCell from "./DayCell";
import type { Calendar } from "@/types/Calendar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Loading from "@/components/States/Loading";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export default function CalendarGrid({
	calendar,
	isDownload,
	index,
}: {
	calendar: Calendar[];
	isDownload: boolean;
	index: number;
}) {
	const [month, setMonth] = useState(index);
	const date = new Date().getDate();
	const todayRef = useRef<HTMLDivElement>(null);
	const head = useRef<HTMLDivElement>(null);

	const days = calendar[month].days;

	const getFirstDayIndex = () => weekdays.indexOf(days?.[0]?.day);

	useEffect(() => {
		if (todayRef.current) {
			todayRef.current.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "center",
			});
		} else if (head.current) {
			head.current.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "start",
			});
		}
	}, [todayRef, month]);

	return (
		<div className="w-full">
			<div ref={head} />
			<div className="sticky -top-5 pt-3 pb-3 md:-mt-8 flex flex-col md:mb-16 z-10 bg-light-background-light dark:bg-dark-background-dark">
				<div className="flex gap-4 items-center justify-start ml-4 m-2 md:mt-6">
					<button
						type="button"
						disabled={month === 0}
						onClick={() => setMonth(month === 0 ? 0 : month - 1)}
						className="p-2 disabled:opacity-10"
					>
						<FaChevronLeft className="text-white text-lg" />
					</button>
					<div
						onKeyDown={(event) => {
							if (event.key === " ") {
								setMonth(index);
							}
						}}
						onClick={() => setMonth(index)}
						className="cursor-pointer flex items-end min-w-[150px] md:min-w-[220px]  w-fit justify-start gap-2"
					>
						<h1 className="font-semibold text-2xl md:text-4xl">
							{months[month]}
						</h1>
						<p className="text-md font-medium md:font-semibold opacity-60">
							20{calendar[calendar.length - 1].month.split("'")[1]}
						</p>
					</div>
					<button
						type="button"
						disabled={month === calendar.length - 1}
						onClick={() =>
							setMonth(
								month === calendar.length ? calendar.length - 1 : month + 1,
							)
						}
						className="p-2  disabled:opacity-10"
					>
						<FaChevronRight className="text-white text-lg" />
					</button>
				</div>
				<div className=" hidden text-center font-bold 2xl:grid 2xl:grid-cols-7 2xl:gap-4">
					{weekdays.map((weekday) => (
						<div
							key={weekday}
							id="weekdays"
							className="p-2 opacity-60 font-medium"
						>
							{weekday}
						</div>
					))}
				</div>
			</div>
			<div className="text-center 2xl:grid 2xl:grid-cols-7">
				{Array.from({ length: getFirstDayIndex() }, (_, index) => (
					<div style={{ opacity: 0.6 }} key={`empty-${index}`} />
				))}
				<Suspense fallback={<Loading size="xl" />}>
					{days
						.filter((a) => a.dayOrder.length <= 1)
						.map((day, index) => (
							<DayCell
								key={index}
								day={day}
								isTomorrow={
									isDownload
										? false
										: date + 1 === Number(day.date) &&
											new Date().getMonth() === month &&
											new Date().getHours() > 16
								}
								isToday={
									isDownload
										? false
										: date === Number(day.date) &&
											new Date().getMonth() === month
								}
								ref={
									isDownload
										? null
										: date === Number(day.date) &&
												new Date().getMonth() === month
											? todayRef
											: null
								}
							/>
						))}
				</Suspense>
			</div>
		</div>
	);
}
