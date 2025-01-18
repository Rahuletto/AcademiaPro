import { fetchCalendar } from "@/hooks/fetchCalendar";
import React, { Suspense } from "react";

import Loading from "@/components/States/Loading";
import dynamic from "next/dynamic";

const CalendarGrid = dynamic(() => import("./components/Grid"));

export default async function Calendar() {
	const { calendar, index } = await fetchCalendar();

	return (
		<main className="pb-3">
			<Suspense fallback={<Loading size="xl" />}>
				<CalendarGrid calendar={calendar} index={index} isDownload={false} />
			</Suspense>
		</main>
	);
}
