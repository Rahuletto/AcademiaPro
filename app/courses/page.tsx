"use client";
import { useCourses } from "@/provider/CourseProvider";
import React, { useEffect } from "react";
import Loading from "@/components/States/Loading";
import Error from "@/components/States/Error";
import { Sidebar } from "@/components/Sidebar";

import dynamic from "next/dynamic";
import Refresh from "@/components/Refresh";
import NoData from "../academia/components/subcomponents/NoData";
import { useData } from "@/provider/DataProvider";

const Indicator = dynamic(
  () => import("@/components/Indicator").then((a) => a.default),
  { ssr: false },
);

const CourseCard = dynamic(
  () => import("./components/CourseCard").then((a) => a.default),
  { ssr: false },
);

export default function Courses() {
  const { courses, isLoading, error, mutate } = useData();

  useEffect(() => {
    if (!isLoading && !courses && !error) mutate();
  }, [mutate, isLoading, courses, error]);

  return (
    <main className="h-screen w-full bg-light-background-normal text-light-color dark:bg-dark-background-normal dark:text-dark-color">
      <Sidebar>
        <div className="flex items-center justify-between">
          <h1 className="mb-4 text-2xl font-semibold">Courses</h1>
          <Refresh type={{ mutateCourse: true }} />
        </div>
        {isLoading ? (
          <Loading size="max" />
        ) : error ? (
          <Error component="Courses" />
        ) : courses ? (
          <div>
            <div className="animate-fadeIn transition duration-200">
              {courses &&
                courses
                  ?.filter((a) => a.courseTitle !== "null")
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
            {courses?.[0] && <Indicator type="Practical" separator />}
            <div className="mt-4 animate-fadeIn transition duration-200">
              {courses &&
                courses
                  ?.filter((a) => a.courseTitle !== "null")
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
        ) : (
          <NoData component="Courses" />
        )}
      </Sidebar>
    </main>
  );
}
