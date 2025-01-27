import Image from "next/image";
import React from "react";
import { supabase } from "@/utils/Database/supabase";
import { encode } from "@/utils/Cookies";
import { cookies } from "next/headers";
import { FiDownload } from "react-icons/fi";

export default async function page() {
	const cookie = (await cookies()).get("key");
	
	const { data: json, error } = await supabase
		.from("goscrape")
		.select("timetable,ophour")
		.eq("token", encode(cookie?.value ?? ""))
		.single();

	if (error || !json) {
		if (error.code === "PGRST116") console.error("No data?")
		else console.error("Error fetching data:", error);
		return;
	}

	const fet = await fetch("https://class-pro.vercel.app/api/timetable", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			timetable: JSON.parse(json?.timetable),
			ophour: json?.ophour,
		}),
	});
	const res = await fet.arrayBuffer();
	const base64Image = Buffer.from(res).toString("base64");
	const imageUrl = `data:image/png;base64,${base64Image}`;

	return (
		<main className="h-screen w-screen flex flex-col items-center justify-center bg-light-background-normal dark:bg-dark-background-normal">
			<Image
				className="scale-95 rounded-2xl border border-light-accent dark:border-dark-accent"
				alt="timetable"
				src={imageUrl}
				width={2000}
				height={766}
			/>

			<a
				className="mt-4 px-4 py-2 flex items-center justify-center gap-2 bg-light-accent dark:bg-dark-accent text-light-background-light dark:text-dark-background-darker font-medium rounded-xl"
				href={imageUrl}
				download="timetable.png"
			>
				<FiDownload className="text-lg" /> Download
			</a>
		</main>
	);
}
