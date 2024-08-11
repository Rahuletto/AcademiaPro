"use client";
import { useCourses } from "@/provider/CourseProvider";
import React, { useEffect } from "react";
import Loading from "@/components/States/Loading";
import Error from "@/components/States/Error";

import dynamic from "next/dynamic";

const Indicator = dynamic(
  () => import("@/components/Indicator").then((a) => a.default),
  { ssr: false },
);

const CourseCard = dynamic(
  () => import("./components/CourseCard").then((a) => a.default),
  { ssr: false },
);

const Sidebar = dynamic(
  () => import("@/components/Sidebar").then((a) => a.Sidebar),
  { ssr: true },
);

export default function Courses() {
  const { courses, isLoading, error, mutate } = useCourses();

  useEffect(() => {
    if (!isLoading && !courses) mutate();
  }, [mutate, isLoading, courses]);
  
  return (
    <main className="h-screen w-full bg-light-background-normal text-light-color dark:bg-dark-background-normal dark:text-dark-color">
      <Sidebar>
        <h1 className="mb-4 text-2xl font-semibold">Courses</h1>
        {isLoading ? (
          <Loading size="max" />
        ) : error ? (
          <Error component="Courses" />
        ) : (
          <div>
            <div className="animate-fadeIn transition duration-200">
              {courses
                ?.filter((a) => a.courseType === "Theory")
                .map((course, i) => (
                  <div
                    key={i}
                    className="my-1 flex items-center justify-center rounded-3xl odd:bg-light-background-normal even:bg-light-background-light lg:rounded-xl odd:dark:bg-dark-background-normal even:dark:bg-dark-background-darker"
                  >
                    <CourseCard course={course} />
                  </div>
                ))}
            </div>
            <Indicator type="Practical" separator />
            <div className="mt-4 animate-fadeIn transition duration-200">
              {courses
                ?.filter((a) => a.courseType === "Practical")
                .map((course, i) => (
                  <div
                    key={i}
                    className="my-1 flex items-center justify-center rounded-3xl odd:bg-light-background-normal even:bg-light-background-light lg:rounded-xl odd:dark:bg-dark-background-normal even:dark:bg-dark-background-darker"
                  >
                    <CourseCard course={course} />
                  </div>
                ))}
            </div>
          </div>
        )}
      </Sidebar>
    </main>
  );
}
