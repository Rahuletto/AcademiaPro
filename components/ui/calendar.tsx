"use client";

import * as React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	...props
}: CalendarProps) {
	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cn("p-3 mt-3", className)}
			classNames={{
				months:
					"flex flex-col text-light-color dark:text-dark-color w-fit mx-auto space-y-4 sm:space-x-4 sm:space-y-0",
				month_caption:
					"flex justify-start pb-2 w-fit relative items-center px-3 text-light-color dark:text-dark-color",
				caption_label:
					"text-sm font-medium text-light-color dark:text-dark-color",
				nav: "space-x-1 flex items-center z-10 text-light-color dark:text-dark-color justify-end mb-[-24px]",
				button_previous: cn(
					"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
				),
				button_next: cn(
					"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
				),
				table: "w-full border-collapse space-y-1",
				weekdays: "flex",
				weekday:
					"text-neutral-500 rounded-md w-8 font-normal text-[0.8rem] dark:text-neutral-400",
				week: "flex w-full mt-2 group text-black dark:text-white",
				day_button: cn(
					"relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-neutral-100 [&:has([aria-selected].outside)]:bg-neutral-100/50 [&:has([aria-selected].range_end)]:rounded-r-md dark:[&:has([aria-selected])]:bg-neutral-800 dark:[&:has([aria-selected].outside)]:bg-neutral-800/50",
					props.mode === "range"
						? "[&:has(>.range_end)]:rounded-r-md [&:has(>.range_start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
						: "[&:has([aria-selected])]:rounded-md",
				),
				day: cn(
					"h-8 w-8 p-0 flex items-center justify-center font-normal aria-selected:opacity-100",
				),
				range_start: "range_start",
				range_end: "range_end",
				selected:
					"bg-light-accent scale-110 z-2 text-white rounded-lg focus:bg-light-accent focus:text-light-accent dark:bg-dark-accent dark:text-black dark:focus:bg-dark-accent dark:focus:text-black",
				today:
					"bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50",
				outside:
					"outside  text-neutral-500 aria-selected:bg-neutral-100/50 aria-selected:text-neutral-500 dark:text-neutral-400 dark:aria-selected:bg-neutral-800/50 dark:aria-selected:text-neutral-400",
				disabled: "text-neutral-500 opacity-50 dark:text-neutral-400",
				range_middle:
					"aria-selected:bg-neutral-100 z-1! scale-100! rounded-none! aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-50",
				hidden: "invisible",
				...classNames,
			}}
			components={{
				Chevron: (props) => {
					if (props.orientation === "left") {
						return (
							<LuChevronLeft
								className={`h-4 w-4 ${props.disabled ? "opacity-30 cursor-not-allowed" : ""}`}
							/>
						);
					}
						return (
							<LuChevronRight
								className={`h-4 w-4 ${props.disabled ? "opacity-30 cursor-not-allowed" : ""}`}
							/>
						);
				},
			}}
			{...props}
		/>
	);
}
Calendar.displayName = "Calendar";

export { Calendar };
