import React from "react";
import Library from "./PYQ";
import { fetchUserData } from "@/hooks/fetchUserData";
import { fetchFileArray } from "@/hooks/fetchFiles";

export default async function Docupro() {
	const { courses } = await fetchUserData();

	const files = await fetchFileArray();
	return <Library courses={courses.courses} files={files} />;
}
