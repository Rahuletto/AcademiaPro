import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/States/Loading";
import { fetchUserData } from "@/hooks/fetchUserData";
import { supabase } from "@/utils/Database/supabase";
import { cookies } from "next/headers";
import { encode } from "@/utils/Cookies";

const Attendance = dynamic(() => import("./components/Attendance"), {
	ssr: true,
});

const Marks = dynamic(() => import("./components/Marks"), { ssr: true });
const Timetable = dynamic(() => import("./components/Timetable"), {
	ssr: true,
});

export default async function Academia() {
	const json = await fetchUserData();
	const cookie = (await cookies()).get("key");
	let ophours = [];

	const { data, error } = await supabase
		.from("goscrape")
		.select("ophour")
		.eq("token", encode(cookie?.value ?? ""))
		.single();

	if (error) {
		if (error.code === "PGRST116") ophours = json.ophour?.split(",") ?? [];
		else console.error("Error fetching ophours:", error);
	} else {
		ophours = data?.ophour?.split(",");
	}

	return (
		<>
			<div id="items" className="flex flex-col gap-12 relative">
				<Suspense fallback={<Loading size="xl" />}>
					<Timetable
						ophours={ophours ?? []}
						schedule={json.timetable?.schedule}
					/>
				</Suspense>
				<Suspense fallback={<Loading size="xl" />}>
					<Attendance data={json} />
				</Suspense>
				<Suspense fallback={<Loading size="xl" />}>
					<Marks marks={json.marks?.marks} courses={json.courses?.courses} />
				</Suspense>
			</div>
		</>
	);
}
