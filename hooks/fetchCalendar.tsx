"use server";
import type { CalendarResponse } from "@/types/Calendar";
import { token } from "@/utils/Tokenize";
import rotateUrl from "@/utils/URL";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";

let cachedData: CalendarResponse | null = null;
let lastFetchTime: number | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export default async function fetchCal() {
	const now = Date.now();
	if (cachedData && lastFetchTime && now - lastFetchTime < CACHE_DURATION) {
		return cachedData;
	}

	const cookie = (await cookies()).get("key");
	const a = await fetch(`${rotateUrl()}/calendar`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"X-CSRF-Token": cookie?.value ?? "",
			// biome-ignore lint/style/useNamingConvention: <explanation>
			Authorization: `Bearer ${token()}`,
		},
	});

	const json: CalendarResponse = await a.json();

	if (json.ratelimit) redirect("/ratelimit");


	cachedData = json;
	lastFetchTime = now;

	return json;
}

export const fetchCalendar = cache(fetchCal);
