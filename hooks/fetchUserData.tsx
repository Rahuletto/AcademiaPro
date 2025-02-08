"use server";
import { cache } from "react";
import type { AllResponse } from "@/types/Response";
import { token } from "@/utils/Tokenize";
import rotateUrl from "@/utils/URL";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const dataCache: Map<string, { data: AllResponse; timestamp: number }> =
	new Map();

async function fetchData(): Promise<AllResponse> {
	const cookie = (await cookies()).get("key");
	const userKey = `key-${cookie?.value}`;

	const cachedData = dataCache.get(userKey);
	const now = Date.now();
	if (cachedData && now - cachedData.timestamp < 2 * 60 * 1000) {
		return cachedData.data;
	}

	const controller = new AbortController();
	const timeoutId = setTimeout(() => {
		controller.abort();
		redirect("/sleeping");
	}, 10000);

	try {
		const url = rotateUrl()
		const response = await fetch(`${url}/get`, {
			method: "GET",
			cache: "force-cache",
			next: {
				revalidate: 60,
			},
			headers: {
				"Content-Type": "application/json",
				"X-CSRF-Token": cookie?.value ?? "",
				Authorization: `Bearer ${token()}`,
			},
			signal: controller.signal,
		});

		clearTimeout(timeoutId);

		let json: AllResponse;
		try {
			const text = await response.text();
			if (text.trim().startsWith('<!DOCTYPE')) {
				redirect('/suspended');
			}
			json = JSON.parse(text);
		} catch (e) {
			if (e instanceof SyntaxError && e.message.includes('Unexpected token')) {
				redirect('/suspended');
			}
			throw e;
		}

		if (json.tokenInvalid) redirect("/invalid");
		if (json.ratelimit) redirect("/ratelimit");

		dataCache.set(userKey, {
			data: json,
			timestamp: now,
		});

		if (dataCache.size > 100) {
			const oldEntries = Array.from(dataCache.entries()).filter(
				([_, value]) => now - value.timestamp > 10 * 60 * 1000,
			);
			for (const [key] of oldEntries) {
				dataCache.delete(key);
			}
		}

		return json;
	} catch (error) {
		if ((error as Error).name === "AbortError") {
			redirect("/sleeping");
		}
		throw error;
	}
}

export const fetchUserData = cache(async () => {
	return await fetchData();
});
