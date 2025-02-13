import { fetchCalendar } from "@/hooks/fetchCalendar";
import type { Schedule } from "@/types/Timetable";
import React from "react";
import TimetableStack from "./components/TimetableStack";
import { FiDownload } from "react-icons/fi";
import EditTimetable from "./EditTimetable";
import { supabase } from "@/utils/Database/supabase";
import { UserInfo } from "@/types/User";

export default async function Timetable({
	schedule,
	ophours,
	user,
}: {
	schedule: Schedule[];
	ophours: string[];
	user: UserInfo
}) {
	const { today, tomorrow } = await fetchCalendar();

	const subscribed = true
	const subscribedSince = Date.now()


	return (
		<section id="timetable">
			<div className="flex justify-between items-center px-2 mb-1">
				<h1 className="text-2xl font-semibold">Timetable</h1>
				<div className="flex items-center justify-center gap-3">
					{((subscribed && subscribedSince && (new Date().getTime() - subscribedSince) < (30 * 24 * 60 * 60 * 1000)) )? (
						<a
							href="/api/timetable"
							download
							className="p-1 rounded-lg transition-all duration-150 hover:bg-light-button dark:hover:bg-dark-button"
						>
							<FiDownload className="text-lg text-light-accent dark:text-dark-accent cursor-pointer" />
						</a>
					) : (
						<a
							href="/payment"
							className="p-1 rounded-lg transition-all border border-light-warn-color dark:border-dark-warn-color duration-150 hover:bg-light-button dark:hover:bg-dark-button opacity-50"
						>
							<FiDownload className="text-lg text-light-accent dark:text-dark-accent cursor-not-allowed" />
						</a>
					)}
					<EditTimetable timetable={schedule} ophours={ophours} />
				</div>
			</div>
			<div className={"transition duration-150"}>
				<TimetableStack schedule={schedule} ophours={ophours} today={today} tomorrow={tomorrow} />
				<div id="edit-timetable" />
			</div>
		</section>
	);
}
