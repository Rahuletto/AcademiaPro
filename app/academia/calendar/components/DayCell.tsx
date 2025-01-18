import type { Day } from "@/types/Calendar";
import { forwardRef } from "react";

interface DayCellProps {
	day: Day;
	isToday: boolean;
	isTomorrow: boolean;
}

export default forwardRef<HTMLDivElement, DayCellProps>(function DayCell(
	{ day, isToday, isTomorrow },
	ref,
) {
	const isErrorDay = day?.dayOrder === "-";

	const cellClasses = ` 
    flex min-h-48 flex-col items-start justify-between gap-3 border border-dark-background-light p-4 xl:max-h-none xl:min-h-64 xl:items-end
    ${
			isToday && isErrorDay
				? "border-light-error-color bg-light-error-background dark:border-dark-error-color dark:bg-dark-error-background"
				: isErrorDay
					? "bg-light-error-background dark:bg-dark-error-background"
					: isToday
						? "opacity-100 border-light-success-color bg-light-success-background text-light-success-color dark:border-dark-success-color dark:bg-dark-success-background dark:text-dark-success-color"
						: isTomorrow
							? "bg-light-warn-background text-light-warn-color dark:bg-dark-warn-background opacity-50 dark:text-dark-warn-color"
							: "dark:opacity-60 bg-light-background-light dark:bg-dark-background-normal"
		}
  `;

	return (
		<div
			ref={ref}
			aria-label={day?.date}
			title={`${day.date} - Day Order: ${day?.dayOrder}`}
			className={cellClasses}
		>
			<DateDisplay
				date={day.date}
				day={day?.day}
				isToday={isToday}
				isErrorDay={isErrorDay}
			/>
			<HolidayDisplay holiday={day.event || ""} isErrorDay={isErrorDay} />
			<DayOrderDisplay dayOrder={day?.dayOrder} isToday={isToday} />
		</div>
	);
});

interface DateDisplayProps {
	date: string;
	day: string;
	isToday: boolean;
	isErrorDay: boolean;
}

const DateDisplay: React.FC<DateDisplayProps> = ({
	date,
	day,
	isToday,
	isErrorDay,
}) => (
	<div
		className={
			isErrorDay && !isToday
				? "text-light-error-color dark:text-dark-error-color"
				: ""
		}
	>
		<h4 className="text-md font-medium xl:hidden">{day}</h4>
		<h3
			className={`${isToday ? `flex aspect-square min-w-9 max-w-9 items-center justify-center p-1 ${isErrorDay ? "bg-light-error-color text-light-error-background dark:bg-dark-error-color dark:text-dark-error-background" : "bg-light-success-color text-light-success-background dark:bg-dark-success-color dark:text-dark-success-background"}` : ""} w-fit rounded-full text-right text-xl font-bold`}
		>
			{date}
		</h3>
	</div>
);

interface HolidayDisplayProps {
	holiday: string | null;
	isErrorDay: boolean;
}

const HolidayDisplay: React.FC<HolidayDisplayProps> = ({
	holiday,
	isErrorDay,
}) => {
	if (!holiday) return null;
	return (
		<p
			className={`text-left break-words -mx-2 text-sm ${isErrorDay ? "text-light-error-color dark:text-dark-error-color" : "rounded-md border-l-2 border-r-0 border-light-info-color bg-light-info-background px-1 py-0.5 pl-2 text-light-info-color dark:border-dark-info-color dark:bg-dark-info-background dark:text-dark-info-color dark:opacity-70"}`}
		>
			{holiday.replaceAll(",", ", ")}
		</p>
	);
};

interface DayOrderDisplayProps {
	dayOrder: string;
	isToday: boolean;
}

const DayOrderDisplay: React.FC<DayOrderDisplayProps> = ({
	dayOrder,
	isToday,
}) => {
	if (dayOrder === "-") return null;
	return (
		<h2 className="w-full text-right text-lg font-medium xl:text-left">
			Day Order{" "}
			<span className={`ml-2 ${isToday ? "text-3xl" : "text-2xl"} font-bold`}>
				{dayOrder}
			</span>
		</h2>
	);
};
