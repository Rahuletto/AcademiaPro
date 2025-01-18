import React from "react";
import type { Mark } from "@/types/Marks";
import type { Course } from "@/types/Course";
import List from "./List";

export default function Marks({
	marks,
	courses,
}: { marks: Mark[]; courses: Course[] }) {
	return (
		<section id="marks">
			<h1 className="text-2xl font-semibold pl-1">Marks</h1>
			<div className={"transition duration-150 py-2"}>
				<div className="my-4">
					<List list={marks} courses={courses} />
				</div>
			</div>
		</section>
	);
}
