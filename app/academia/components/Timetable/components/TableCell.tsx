import type { ScheduleSlot } from "@/types/Timetable";
import { timeRange } from "@/utils/Range";
import { Time, timeConvert } from "@/utils/Times";
import React from "react";

export default function TableCell({
	cell,
	first,
	last,
	index,
	currentTime,
	isClassGoing,
}: {
	cell: ScheduleSlot | null;
	first?: boolean;
	index: number;
	last?: boolean;
	currentTime: Date;
	isClassGoing: boolean;
}) {
	const start = Time.start[last ? index + 5 : index];
	const end = Time.end[last ? index + 5 : index];

	const inRange = timeRange(currentTime, `${start}-${end}`);

	return (
		<div
			className={`border-[0.3px]  flex flex-col text-black group relative justify-between items-start ${!cell || cell.isOptional ? "bg-white/80 dark:bg-black/60" : isClassGoing ? (inRange ? "" : "bg-white/30 dark:bg-black/30") : ""} border-dark-background-dark/60 ${first ? "xl:first:rounded-l-xl first:rounded-t-xl xl:first:rounded-tr-none" : ""} ${last ? "xl:last:rounded-r-xl xl:last:rounded-bl-none last:rounded-b-xl" : ""}`}
		>
			<div
				className={`flex flex-col min-h-16 relative h-full w-full p-2 justify-between items-start ${cell?.isOptional ? "opacity-40" : ""}`}
			>
				<p className="text-xs font-semibold text-left mr-3">
					{cell?.name.split(":")[0]}
				</p>
				<div className="flex items-end justify-start w-full opacity-60">
					<p className="text-xs font-semibold">{cell?.roomNo}</p>
				</div>
				<div className="opacity-40 lg:opacity-0 transition-all duration-200 absolute right-2 bottom-1 lg:group-hover:opacity-40">
					<p className="text-[10px] font-semibold">
						{timeConvert(start)}-{timeConvert(end)}
					</p>
				</div>
				{inRange && (
					<div
						className="absolute left-0 bottom-0 h-full w-1 bg-light-success-color/60 z-0"
						style={{
							left: `${((currentTime.getHours() * 60 + currentTime.getMinutes() - (Number.parseInt(start.split(":")[0]) * 60 + Number.parseInt(start.split(":")[1]))) / (Number.parseInt(end.split(":")[0]) * 60 + Number.parseInt(end.split(":")[1]) - (Number.parseInt(start.split(":")[0]) * 60 + Number.parseInt(start.split(":")[1])))) * 100}%`,
						}}
					/>
				)}
			</div>
		</div>
	);
}
