import CourseTitle from "@/app/academia/components/subcomponents/Attendance/Title";
import { Course } from "@/types/Course";
import React from "react";
import Class from "./Class";
import Credit from "./Credit";
import CourseCode from "./CourseCode";
import { Link } from "next-view-transitions";
import { searchUrl } from "@/urls";

export default function CourseCard({ course }: { course: Course }) {
  const url = searchUrl(course.facultyName.split("(")[0])[0]?.url

  return (
    <div
      tabIndex={0}
      role="gridcell"
      className="grid w-full grid-cols-[3fr_1fr] grid-rows-[2fr_1fr] gap-3 rounded-3xl p-4 md:flex md:min-w-[900px] md:items-center md:justify-between md:rounded-xl"
    >
      <div className="flex md:w-[35%] w-auto flex-col items-start gap-1 md:gap-3 lg:w-[40%] lg:flex-row lg:items-center lg:gap-8 xl:w-[50%]">
        <CourseTitle
          courseTitle={course.courseTitle}
          category={course.courseType}
        />
        <Class
          classroom={course.roomNo}
          category={course.courseType}
          className="hidden lg:flex"
        />
        <Credit credit={Number(course.credit)} className="ml-9 lg:hidden" />
      </div>
      <Class
        classroom={course.roomNo}
        category={course.courseType}
        className="h-fit w-fit self-start justify-self-end lg:hidden"
      />
      <Credit
        credit={Number(course.credit)}
        className="hidden w-[20%] lg:flex"
      />
      <CourseCode code={course.courseCode} className="hidden md:flex" />
      <Link href={url || ""} title={course.facultyName.split("(")[0]} aria-label={course.facultyName.split("(")[0]} className={`${url ? "underline decoration-wavy decoration-light-warn-color dark:decoration-dark-warn-color " : ""} mb-1 ml-1 mt-4 text-left self-end md:self-center text-base font-medium text-light-color opacity-90 md:mb-0 md:ml-0 md:mt-0 md:w-[20%] md:text-right lg:my-3 lg:mr-3 dark:text-dark-color`} >
        {course.facultyName.split("(")[0]}
      </Link>
      <CourseCode
        code={course.courseCode}
        className="h-fit w-fit self-end justify-self-end md:hidden"
      />
    </div>
  );
}
