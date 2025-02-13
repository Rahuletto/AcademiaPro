import React from "react";
import Library from "@/app/academia/library/LibraryHome";
import { fetchUserData } from "@/hooks/fetchUserData";

export default async function Docupro() {
	const { user } = await fetchUserData();

	return <Library />;
}
