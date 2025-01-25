import React from "react";
import Library from "./library";
import { fetchUserData } from "@/hooks/fetchUserData";
import { fetchFileArray } from "@/hooks/fetchFiles";

export default async function Docupro() {
	const files = await fetchFileArray();
	const { courses } = await fetchUserData();
	return <Library courses={courses.courses} files={files} />;
}
