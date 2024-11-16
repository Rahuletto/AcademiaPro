import React, { useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Mark } from "@/types/Marks";
import { useData } from "@/provider/DataProvider";
import { determineGrade } from "@/utils/Grade";
import { MarkDisplay } from "@/app/academia/components/subcomponents/Marks/MarkElement";
import Medal from "./Medals";

export const medalStyles = {
  O: {
    text: "text-light-success-color dark:text-dark-success-color",
    bg: "bg-light-success-background dark:bg-dark-success-background",
  },
  "A+": {
    text: "text-gray-500 dark:text-gray-400",
    bg: "bg-gray-200 dark:bg-gray-700",
  },
  A: {
    text: "text-light-color dark:text-dark-color",
    bg: "bg-light-background-normal dark:bg-dark-background-light",
  },
  "B+": {
    text: "text-light-color dark:text-dark-color",
    bg: "bg-light-background-normal dark:bg-dark-background-light",
  },
  B: {
    text: "text-light-color dark:text-dark-color",
    bg: "bg-light-background-normal dark:bg-dark-background-light",
  },
  C: {
    text: "text-light-color dark:text-dark-color",
    bg: "bg-light-background-normal dark:bg-dark-background-light",
  },
};

const gradeMap: { [key: number]: string } = {
  0: "C",
  1: "B",
  2: "B+",
  3: "A",
  4: "A+",
  5: "O",
};

export default function GradeCard({
  mark,
  currentGrade,
  updateGrade,
}: {
  mark: Mark;
  currentGrade: string;
  updateGrade: (courseCode: string, grade: string) => void;
}) {
  const { courses } = useData();
  const courseDetails = courses?.find((a) => a.code === mark.courseCode);

  useEffect(() => {
    const lostMark: number =
      Number(mark.overall.total) - Number(mark.overall.marks);
    const calculatedGrade = determineGrade(lostMark);
    updateGrade(mark.courseCode, calculatedGrade);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mark.overall.total, mark.overall.marks, mark.courseCode]);

  const getSliderValue = (grade: string) => {
    return Object.entries(gradeMap).find(([_, g]) => g === grade)?.[0] || "5";
  };

  const handleSliderChange = (value: number[]) => {
    const newGrade = gradeMap[value[0]];
    updateGrade(mark.courseCode, newGrade);
  };

  return (
    <div
      className={`flex min-h-40 flex-col justify-between gap-8 rounded-2xl ${Number(mark.overall.marks) <= 60 ? "bg-light-background-normal dark:bg-dark-background-normal" : `bg-opacity-80 dark:bg-opacity-40 ${medalStyles[currentGrade as "O" | "A+" | "A" | "B+" | "B" | "C"].bg}`} p-4 px-5 text-light-color dark:text-dark-color`}
    >
      <div className="grid grid-cols-[1fr_0.2fr] items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">
            {!mark.courseName.toLowerCase().includes("n/a")
              ? mark.courseName?.toLowerCase()
              : courseDetails?.title || mark.courseCode}
          </h2>
          <p className="text-sm font-medium text-light-accent opacity-80 dark:text-dark-accent">
            Credit:{" "}
            <span className="text-sm text-light-info-color dark:text-dark-info-color">
              {courseDetails?.credit || 0}
            </span>
          </p>
        </div>

        <MarkDisplay marks={mark.overall} />
      </div>

      <div className="relative flex flex-col-reverse gap-2">
        {Number(mark.overall.marks) <= 60 ? (
          <>
            <div className="flex items-center justify-between text-xs text-light-accent dark:text-dark-accent">
              <span className={`${currentGrade === "C" ? "font-semibold" : "opacity-40"}`}>
                C
              </span>
              <span className={`${currentGrade === "B" ? "font-semibold" : "opacity-40"}`}>
                B
              </span>
              <span className={`${currentGrade === "B+" ? "font-semibold" : "opacity-40"}`}>
                B+
              </span>
              <span className={`${currentGrade === "A" ? "font-semibold" : "opacity-40"}`}>
                A
              </span>
              <span className={`${currentGrade === "A+" ? "font-semibold" : "opacity-40"}`}>
                A+
              </span>
              <span className={`${currentGrade === "O" ? "font-semibold" : "opacity-40"}`}>
                O
              </span>
            </div>
            <Slider
              max={5}
              step={1}
              value={[parseInt(getSliderValue(currentGrade))]}
              onValueChange={handleSliderChange}
              className="w-full"
            />
          </>
        ) : (
          <Medal grade={currentGrade as "O" | "A+" | "A" | "B+" | "B" | "C"} />
        )}
      </div>
    </div>
  );
}
