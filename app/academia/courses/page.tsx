import { fetchUserData } from "@/hooks/fetchUserData";
import React, { Suspense } from "react";
import CourseCard from "./components/Card";
import Indicator from "@/components/Indicator";
import Loading from "@/components/States/Loading";

export default async function Courses() {
	const json = await fetchUserData();

	return (
		<div className="flex flex-col gap-12">
			<section id="links" className="flex flex-col gap-4">
				<h1 className="text-2xl font-semibold">Courses</h1>
				<Suspense fallback={<Loading size="xl" />}>
					<div className="flex flex-col items-center gap-2 justify-center">
						{json.courses?.courses
							.filter((a) => a.slotType === "Theory")
							.map((course, i) => (
								<CourseCard key={i} course={course} />
							))}
					</div>
					<Indicator type="Practical" separator />
					<div className="flex flex-col items-center gap-2 justify-center">
						{json.courses?.courses
							.filter((a) => a.slotType === "Practical")
							.map((course, i) => (
								<CourseCard key={i} course={course} />
							))}
					</div>
				</Suspense>
			</section>
		</div>
	);
}
