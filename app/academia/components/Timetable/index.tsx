import { fetchCalendar } from "@/hooks/fetchCalendar";
import type { Schedule } from "@/types/Timetable";
import React from "react";
import TimetableStack from "./components/TimetableStack";
import { FiDownload } from "react-icons/fi";
import { Link } from "next-view-transitions";
import EditTimetable from "./EditTimetable";

export default async function Timetable({
	schedule,
	ophours,
}: {
	schedule: Schedule[];
	ophours: string[];
}) {
	const { today } = await fetchCalendar();

	return (
		<section id="timetable">
			<div className="flex justify-between items-center px-2 mb-1">
				<h1 className="text-2xl font-semibold">Timetable</h1>
				<div className="flex items-center justify-center gap-3">
					<Link
						href="/download/timetable"
						className="p-1 rounded-lg transition-all duration-150 hover:bg-light-button dark:hover:bg-dark-button"
					>
						<FiDownload className="text-lg text-light-accent dark:text-dark-accent cursor-pointer" />
					</Link>
					<EditTimetable timetable={schedule} ophours={ophours} />
				</div>
			</div>
			<div className={"transition duration-150"}>
				<TimetableStack schedule={schedule} ophours={ophours} today={today} />
				<div id="edit-timetable" />
			</div>
		</section>
	);
}
