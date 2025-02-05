import React from "react";
import Library from "@/app/academia/library/LibraryHome";
import { fetchUserData } from "@/hooks/fetchUserData";
import PayRequired from "../../payment";
import { supabase } from "@/utils/Database/supabase";

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

	return <Library />;
}
