import React from "react";
import Resources from "./Resources";
import { fetchResourcesArray } from "@/hooks/fetchResources";

export default async function Docupro() {
	const folders = await fetchResourcesArray();
	return <Resources folders={folders} />;
}
