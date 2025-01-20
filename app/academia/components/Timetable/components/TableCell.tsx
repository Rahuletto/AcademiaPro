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
			className={`border-[0.3px] flex flex-col text-black group relative justify-between items-start ${!cell || cell.isOptional ? "bg-white/80 dark:bg-black/60" : isClassGoing ? (inRange ? "" : "bg-white/30 dark:bg-black/30") : ""} border-dark-background-dark/60 ${first ? "lg:first:rounded-l-xl first:rounded-t-xl lg:first:rounded-tr-none" : ""} ${last ? "lg:last:rounded-r-xl lg:last:rounded-bl-none last:rounded-b-xl" : ""}`}
		>
			<div
				className={`flex flex-col min-h-16 relative h-full w-full p-2 justify-between items-start ${cell?.isOptional ? "opacity-40" : ""}`}
			>
				<p className="text-xs font-semibold text-left mr-3">
					{cell?.name.split(":")[0]}
				</p>
				<div className="flex items-end justify-between w-full opacity-60">
					<p className="text-xs font-semibold">{cell?.roomNo}</p>
					{cell?.isOptional && (
						<p className="text-xs absolute left-2 bottom-6 font-semibold">
							(Optional)
						</p>
					)}
				</div>
				<div className="opacity-40 md:opacity-0 transition-all duration-200 absolute right-2 bottom-1 lg:group-hover:opacity-40">
					<p className="text-[10px] font-semibold">
						{timeConvert(start)}-{timeConvert(end)}
					</p>
				</div>
			</div>
		</div>
	);
}
