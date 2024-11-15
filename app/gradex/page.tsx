"use client";
import React, { useEffect, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { useData } from "@/provider/DataProvider";
import Loading from "@/components/States/Loading";
import Error from "@/components/States/Error";
import GradeCard from "./components/GradeCard";

export default function GradeX() {
  const { marks, isLoading, error, courses, isValidating } = useData();
  const [grades, setGrades] = useState<{ [courseCode: string]: string }>({});
  const [sgpa, setSgpa] = useState(0);

  const gradePoints: { [key: string]: number } = {
    O: 10,
    "A+": 9,
    A: 8,
    "B+": 7,
    B: 6,
    C: 5,
  };

  useEffect(() => {
    if (marks) {
      const initialGrades = Object.fromEntries(
        marks.map((mark) => [mark.courseCode, "O"]),
      );
      setGrades(initialGrades);
    }
  }, [marks]);

  useEffect(() => {
    sgpaCalculator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grades, courses]);

  const updateGrade = (courseCode: string, grade: string) => {
    setGrades((prevGrades) => ({
      ...prevGrades,
      [courseCode]: grade,
    }));
  };

  const sgpaCalculator = () => {
    if (!courses || !grades) return;

    let totalPoints = 0;
    let totalCredits = 0;

    Object.entries(grades).forEach(([courseCode, grade]) => {
      const course = courses.find((c) => c.code === courseCode);
      if (course) {
        const credits = Number(course.credit);
        const gradePoint = gradePoints[grade] || 0;

        totalPoints += credits * gradePoint;
        totalCredits += credits;
      }
    });

    const calculatedSgpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
    setSgpa(parseFloat(calculatedSgpa.toFixed(2)));
  };

  return (
    <main className="h-screen w-full bg-light-background-normal pb-0 text-light-color dark:bg-dark-background-normal dark:text-dark-color">
      <Sidebar>
        <div className="flex flex-col gap-12">
          <section id="links" className="flex flex-col gap-6">
            <h1 className="text-3xl font-semibold">GradeX</h1>
            <div className="bg-light-background-dark p-4 px-5 pb-5 dark:bg-dark-background-dark">
              <h2 className="text-2xl font-semibold capitalize">
                SGPA Calculator: {sgpa}
              </h2>
              <div>
                {isLoading || isValidating ? (
                  <Loading size="3xl" />
                ) : error ? (
                  <Error component="GradeX" error={error} />
                ) : marks ? (
                  <div className="grid animate-fadeIn grid-cols-marks gap-2 transition-all duration-200">
                    {marks
                      .filter((a) => a.courseType === "Theory")
                      .map((mark, index) => (
                        <div className="py-4" key={mark.courseCode}>
                          <GradeCard
                            mark={mark}
                            currentGrade={grades[mark.courseCode] || "O"}
                            updateGrade={updateGrade}
                          />
                        </div>
                      ))}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </section>
        </div>
      </Sidebar>
    </main>
  );
}
