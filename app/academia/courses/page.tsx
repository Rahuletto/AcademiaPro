import { fetchUserData } from "@/hooks/fetchUserData";
import React, { Suspense } from "react";
import CourseCard from "./components/Card";
import Indicator from "@/components/Indicator";
import Loading from "@/components/States/Loading";
import { supabase } from "@/utils/Database/supabase";

export default async function Courses() {
	const json = await fetchUserData();

	const { data, error } = await supabase
		.from("goscrape")
		.select("subscribed, subscribedSince, freesub")
		.eq("regNumber", json.user?.regNumber)
		.single();

	if (error) {
		console.warn("Cannot find data?", json.user?.regNumber, json);
	}

	const subscribed = data?.freesub ? true : data?.subscribed ?? false;


	return (
		<div className="flex flex-col gap-12">
			<section id="links" className="flex flex-col gap-4">
				<h1 className="text-2xl font-semibold">Courses</h1>
				<Suspense fallback={<Loading size="xl" />}>
					<div className="flex flex-col items-center gap-2 justify-center">
						{json.courses?.courses
							.filter((a) => a.slotType === "Theory")
							.map((course, i) => (
								<CourseCard key={i} subscribed={subscribed} course={course} />
							))}
					</div>
					<Indicator type="Practical" separator />
					<div className="flex flex-col items-center gap-2 justify-center">
						{json.courses?.courses
							.filter((a) => a.slotType === "Practical")
							.map((course, i) => (
								<CourseCard key={i} subscribed={subscribed} course={course} />
							))}
					</div>
				</Suspense>
			</section>
		</div>
	);
}
