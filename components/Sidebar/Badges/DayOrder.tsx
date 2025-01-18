import { fetchCalendar } from "@/hooks/fetchCalendar";
import React from "react";

export default async function DayOrder({
	mini,
	...props
}: {
	mini?: boolean;
	className?: string;
}) {
	const { today } = await fetchCalendar();

	const day = today?.dayOrder;

	return (
		<div
			role="banner"
			className={`w-fit cursor-default rounded-full px-3 py-1 ${
				!day || day.includes("-")
					? "bg-light-error-background dark:bg-dark-error-background"
					: "bg-light-side dark:bg-dark-side"
			} ${props.className}`}
		>
			{day.includes("-") ? (
				<span
					aria-hidden="true"
					// biome-ignore lint/style/useNamingConvention: <explanation>
					style={{ WebkitUserSelect: "none" }}
					title={"Holiday"}
					className="select-none text-md font-medium text-light-error-color dark:text-dark-error-color"
				>
					{mini ? "H" : "Holiday"}
				</span>
			) : (
				<span
					title={`Day Order: ${day}`}
					className={`${mini ? "flex h-6 w-2 items-center justify-center text-sm" : "text-base"} font-medium text-light-accent dark:text-dark-accent`}
				>
					{mini ? "" : "Day Order: "}
					{day}
				</span>
			)}
		</div>
	);
}
