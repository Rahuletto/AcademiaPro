import React from "react";
import Library from "./library";
import { fetchUserData } from "@/hooks/fetchUserData";

export default async function Docupro() {
	const { courses } = await fetchUserData();
	return <Library courses={courses.courses} />;
}
