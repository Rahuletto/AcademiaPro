import type { Course } from "@/types/Course";
import React from "react";
import CourseCode from "./CourseCode";
import { Link } from "next-view-transitions";
import Class from "./Class";
import { searchUrl } from "@/misc/faculties";
import Credit from "./Credit";
import CourseTitle from "./CourseTitle";

export default function CourseCard({ course }: { course: Course }) {
	const urls = searchUrl(course.faculty.split("(")[0]);
	const url = urls[0]?.url;

	return (
		<div
			tabIndex={0}
			role="gridcell"
			className="animate-fadeIn odd:bg-light-background-normal relative even:bg-light-background-light dark:odd:bg-dark-background-normal dark:even:bg-dark-background-dark duration-150 transition grid w-full grid-cols-[3fr_1fr] grid-rows-[2fr_1fr] gap-3 rounded-3xl p-4 md:flex md:min-w-[900px] md:items-center md:justify-between md:rounded-xl"
		>
			<div className="flex md:w-[35%] w-auto flex-col items-start gap-1 md:gap-3 lg:w-[40%] lg:flex-row lg:items-center lg:gap-8 xl:w-[40%] xl:justify-between">
				<CourseTitle courseTitle={course.title} category={course.slotType} />
				<Class
					classroom={course.room}
					category={course.slotType as "Practical" | "Theory"}
					className="hidden lg:flex"
				/>
				<Credit credit={Number(course.credit)} className="ml-9 lg:hidden" />
			</div>
			<Class
				classroom={course.room}
				category={course.slotType as "Practical" | "Theory"}
				className="h-fit w-fit self-start justify-self-end lg:hidden"
			/>
			<Credit
				credit={Number(course.credit)}
				className="hidden w-[20%] lg:flex"
			/>
			<CourseCode code={course.code} className="hidden md:flex" />
			<Link
				href={url?.url || ""}
				target="_blank"
				title={course.faculty.split("(")[0]}
				aria-label={course.faculty.split("(")[0]}
				className={`${url?.url ? "decoration-2 underline decoration-light-info-color dark:decoration-dark-info-color " : ""} mb-1 ml-1 mt-4 text-left self-end md:self-center text-base font-medium text-light-color opacity-90 md:mb-0 md:ml-0 md:mt-0 md:w-[20%] md:text-right lg:my-3 lg:mr-3 dark:text-dark-color`}
			>
				{course.faculty.split("(")[0]}
			</Link>
			<CourseCode
				code={course.code}
				className="h-fit w-fit self-end justify-self-end md:hidden"
			/>
		</div>
	);
}
