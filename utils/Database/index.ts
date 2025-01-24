import type { CalendarData } from "@/types/CalendarData";
import { supabase } from "./supabase";
import { encode } from "../Cookies";

interface DatabaseRecord {
	regNumber: string;
	user?: string;
	timetable?: string;
	course?: string;
	attendance?: string;
	marks?: string;
	lastUpdated?: number;
	token?: string;
}

class Database {
	async getEvents(): Promise<CalendarData[]> {
		const { data, error } = await supabase
			.from("calendar_events") // Replace with your actual table name
			.select("*");

		if (error) {
			console.error("Error fetching events:", error.message);
			throw new Error("Failed to fetch calendar events");
		}

		const events = data as {
			date: string;
			day: string;
			event: string;
			dayOrder: string;
		}[];
		const calendar: CalendarData[] = [];

		for (const event of events) {
			const [month, date] = event.date.split(" - ");
			const monthData = calendar?.find((cal) => cal.month === month);

			if (monthData) {
				monthData.days.push({
					date,
					day: event.day,
					event: event.event,
					dayOrder: event.dayOrder,
				});
			} else {
				calendar.push({
					month,
					days: [
						{
							date,
							day: event.day,
							event: event.event,
							dayOrder: event.dayOrder,
						},
					],
				});
			}
		}

		return calendar;
	}

	// Method to get data by regNumber
	async getData(regNumber: string): Promise<DatabaseRecord | null> {
		try {
			const { data, error } = await supabase
				.from("proscrape") // Replace with your actual table name
				.select("*")
				.eq("regNumber", regNumber)
				.single(); // Use single() to return a single record

			if (error) {
				console.error(error);
				console.error(`Error fetching data: ${error.message}`);
				return null;
			}

			return data as DatabaseRecord;
		} catch (error: any) {
			console.error(`Supabase getData error: ${error.message}`);
			return null;
		}
	}

	async getSpecific(
		cookie: string,
		selector = "*",
	): Promise<DatabaseRecord | null> {
		try {
			const { data, error } = await supabase
				.from("proscrape") // Replace with your actual table name
				.select(selector)
				.eq("token", encode(cookie))
				.single(); // Use single() to return a single record

			if (error) {
				if (error.code === "PGRST116") return null;

				console.error(`Error fetching data: ${error.message}`);
				return null;
			}

			return data as unknown as DatabaseRecord;
		} catch (error: any) {
			console.error(`Supabase getData error: ${error.message}`);
			return null;
		}
	}

	async getRegFromHash(regNum: string, hash: string): Promise<object> {
		let authData: any;
		const { data, error: authErr } = await supabase
			.from("auth") // Replace with your actual table name
			.select("*")
			.eq("hash", hash)
			.single();

		authData = data;
		if (authErr) {
			if (authErr.code === "PGRST116" || !authData) {
				const { data, error } = await supabase
					.from("auth")
					.insert({ regNumber: regNum, hash });

				authData = data;
			}
		}

		return authData;
	}

	async authCheck(
		regNum: string,
		hash: string,
	): Promise<DatabaseRecord | null> {
		const { data: authData, error: authErr } = await supabase
			.from("auth") // Replace with your actual table name
			.select("*")
			.eq("hash", hash)
			.single();

		if (authErr) {
			if (authErr.code === "PGRST116" || !authData)
				await supabase.from("auth").insert({ hash, regNumber: regNum });
		}

		const reg = authData?.regNumber || regNum;

		const { data, error } = await supabase
			.from("proscrape") // Replace with your actual table name
			.select("*")
			.eq("regNumber", reg)
			.single();

		if (error) {
			if (error.code === "PGRST116") return null;

			console.error(`Error fetching data: ${error.message}`);
			return null;
		}

		return data as DatabaseRecord;
	}

	async checkCookie(cookie: string): Promise<DatabaseRecord | null> {
		try {
			const { data, error } = await supabase
				.from("proscrape") // Replace with your actual table name
				.select("*")
				.eq("token", encode(cookie))
				.single(); // Use single() to return a single record

			if (error) {
				if (error.code === "PGRST116") return null;

				console.error(`Error fetching data: ${error.message}`);
				return null;
			}

			return data as DatabaseRecord;
		} catch (error: any) {
			console.error(`Supabase getData error: ${error.message}`);
			return null;
		}
	}

	// Method to delete data by regNumber
	async deleteData(regNumber: string): Promise<void> {
		try {
			const { error } = await supabase
				.from("proscrape") // Replace with your actual table name
				.delete()
				.eq("regNumber", regNumber);

			if (error) throw new Error(`Error deleting data: ${error.message}`);
			console.info(`Data deleted for regNumber: ${regNumber}`);
		} catch (error: any) {
			console.error(`Supabase deleteData error: ${error.message}`);
		}
	}
}

export default Database;
