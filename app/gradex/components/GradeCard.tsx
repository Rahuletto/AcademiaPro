import React, { useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Mark } from "@/types/Marks";
import { useData } from "@/provider/DataProvider";
import { determineGrade } from "@/utils/Grade";

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
    <div className="mb-4 space-y-2 rounded-lg bg-light-background-light p-4 text-light-color dark:bg-dark-background-light dark:text-dark-color">
      <div className="font-semibold">
        {!mark.courseName.toLowerCase().includes("n/a")
          ? mark.courseName?.toLowerCase()
          : courseDetails?.title || mark.courseCode}
      </div>
      <div className="text-sm text-light-accent dark:text-dark-accent">
        Code: {mark.courseCode}
      </div>
      <div className="text-sm text-light-accent dark:text-dark-accent">
        Type: {mark.courseType}
      </div>
      <div className="mt-2 grid grid-cols-3 items-center gap-4">
        <div className="text-light-accent dark:text-dark-accent">
          Credit: {courseDetails?.credit || 0}
        </div>
        <div>Grade: {currentGrade}</div>
      </div>

      <div className="flex items-center justify-between text-xs text-light-accent dark:text-dark-accent">
        <span>C</span>
        <span>B</span>
        <span>B+</span>
        <span>A</span>
        <span>A+</span>
        <span>O</span>
      </div>
      <Slider
        max={5}
        step={1}
        value={[parseInt(getSliderValue(currentGrade))]}
        onValueChange={handleSliderChange}
        className="w-full"
      />
      <div className="mt-2 text-sm">
        Overall: {mark.overall.marks}/{mark.overall.total}
      </div>
    </div>
  );
}
