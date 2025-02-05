import React from "react";
import { fetchUserData } from "@/hooks/fetchUserData";
import PayRequired from "../../../payment";
import { supabase } from "@/utils/Database/supabase";
import Resources from "./Resources";
import { fetchResourcesArray } from "@/hooks/fetchResources";

export default async function Docupro() {
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
	const subscribedSince = data?.freesub ? Date.now() : data?.subscribedSince ?? null;

	if (
		!subscribed ||
		!subscribedSince ||
		(subscribed && Date.now() - subscribedSince > 30 * 24 * 60 * 60 * 1000)
	) {
		return <PayRequired />;
	}
	const folders = await fetchResourcesArray();
	return <Resources folders={folders} />;
}
