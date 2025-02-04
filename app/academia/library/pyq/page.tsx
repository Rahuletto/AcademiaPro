import React from "react";
import Library from "./PYQ";
import { fetchUserData } from "@/hooks/fetchUserData";
import { fetchFileArray } from "@/hooks/fetchFiles";
import PayRequired from "../../../payment";
import { supabase } from "@/utils/Database/supabase";

export default async function Docupro() {
	const { courses, user } = await fetchUserData();

	const { data, error } = await supabase
		.from("goscrape")
		.select("subscribed, subscribedSince")
		.eq("regNumber", user?.regNumber)
		.single();

	if (error) {
		console.warn("Cannot find data?", user?.regNumber, user);
	}

	const subscribed = data?.subscribed ?? false;
	const subscribedSince = data?.subscribedSince ?? null;

	if (
		!subscribed ||
		!subscribedSince ||
		(subscribed && Date.now() - subscribedSince > 30 * 24 * 60 * 60 * 1000)
	) {
		return <PayRequired />;
	}
	const files = await fetchFileArray();
	return <Library courses={courses.courses} files={files} />;
}
