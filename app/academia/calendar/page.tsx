import { fetchCalendar } from "@/hooks/fetchCalendar";
import React, { Suspense } from "react";

import Loading from "@/components/States/Loading";
import dynamic from "next/dynamic";
import { fetchUserData } from "@/hooks/fetchUserData";
import { supabase } from "@/utils/Database/supabase";

const CalendarGrid = dynamic(() => import("./components/Grid"));

export default async function Calendar() {
	const { calendar, index } = await fetchCalendar();
	const { user } = await fetchUserData();

	const { data, error } = await supabase
		.from("goscrape")
		.select("subscribed, subscribedSince, freesub")
		.eq("regNumber", user?.regNumber)
		.single();

	if (error) {
		console.warn("Cannot find data?", user?.regNumber, user);
	}

	const subscribed = data?.freesub ? true : data?.subscribed ?? false;
	const subscribedSince = data?.freesub ? true : data?.subscribedSince ?? null;


	return (
		<main className="pb-3">
			<Suspense fallback={<Loading size="xl" />}>
				<CalendarGrid freesub={data?.freesub} subscribed={subscribed} subscribedSince={subscribedSince} calendar={calendar} index={index} isDownload={false} />
			</Suspense>
		</main>
	);
}
