import React, { Suspense } from "react";
import Prediction from "./Prediction";
import type { AllResponse } from "@/types/Response";
import { fetchCalendar } from "@/hooks/fetchCalendar";
import Loading from "@/components/States/Loading";
import { supabase } from "@/utils/Database/supabase";

export const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export default async function Attendance({ data }: { data: AllResponse }) {
	const cal = await fetchCalendar();

	if (!cal || !cal?.calendar) return (
		<>
			<section id="attendance">
				<div className="flex justify-between items-center px-2 mb-1">
					<h1 className="text-2xl font-semibold">Attendance</h1>
				</div>
				<div id="attendance-list" />
			</section>
		</>
	);

	const { data: subscriptionData, error } = await supabase
		.from("goscrape")
		.select("subscribed, subscribedSince, freesub")
		.eq("regNumber", data.user?.regNumber)
		.single();

	if (error) {
		console.warn("Cannot find data?", data.user?.regNumber, data);
	}

	const subscribedSince = subscriptionData?.subscribedSince ?? null;
	const isSubscriptionValid = subscriptionData?.freesub ? subscriptionData?.freesub : subscribedSince 
		? new Date(subscribedSince).getTime() + (30 * 24 * 60 * 60 * 1000) > new Date().getTime() 
		: false;
	const subscribed = subscriptionData?.freesub ? true : (data?.subscribed ?? false) && isSubscriptionValid;

	const mappedCal = cal.calendar?.flatMap((day) => {
		const month = months.findIndex(
			(month) => month.trim() === day.month.split("'")[0].trim(),
		);

		return day.days.map((date) => ({
			date: date.date,
			month: month,
			order: date?.dayOrder,
			dateObj: new Date(
				new Date().getFullYear(),
				month,
				Number.parseInt(date.date),
			),
		}));
	});

	return (
		<>
			<section id="attendance">
				<div className="flex justify-between items-center px-2 mb-1">
					<div className="flex items-center gap-2">
						<h1 className="text-2xl font-semibold">Attendance</h1>
						<div id="attendance-title-suffix" />
					</div>
					<Suspense fallback={<Loading size="xl" />}>
						<Prediction 
							data={data} 
							cal={mappedCal} 
							calendar={cal.calendar}
							subscribed={subscribed}
						/>
					</Suspense>
				</div>
				<div id="attendance-list" />
			</section>
		</>
	);
}
