import React from "react";
import Library from "./library";
import { fetchUserData } from "@/hooks/fetchUserData";
import { fetchFileArray } from "@/hooks/fetchFiles";
import PayRequired from "../../payment";

export default async function Docupro() {
	const { courses, subscribed, subscribedSince } = await fetchUserData();

	if(!subscribed || !subscribedSince || subscribedSince < Date.now() - (30 * 24 * 60 * 60 * 1000)) {
		return <PayRequired />;

	}
	const files = await fetchFileArray();
	return <Library courses={courses.courses} files={files} />;
}
