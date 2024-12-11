import React, { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Mark } from "@/types/Marks";
import { useData } from "@/provider/DataProvider";
import { MarkDisplay } from "@/app/academia/components/subcomponents/Marks/MarkElement";
import Medal from "./Medals";
import { getGrade, grade_points } from "@/types/Grade";
import { determineGrade } from "@/utils/Grade";

export const medalStyles = {
  O: {
    text: "text-light-success-color dark:text-dark-success-color",
    bg: "bg-light-success-background dark:bg-dark-success-background",
    border: "border-light-success-color dark:border-dark-success-color border",
  },
  "A+": {
    text: "text-gray-500 dark:text-gray-400",
    bg: "bg-gray-200 dark:bg-gray-700",
    border: "border-gray-300 dark:border-gray-600 border",
  },
  A: {
    text: "text-light-color dark:text-dark-color",
    bg: "bg-light-background-normal dark:bg-dark-background-light",
    border:
      "border-light-color dark:border-dark-color border border-opacity-30 dark:border-opacity-20",
  },
  "B+": {
    text: "text-light-color dark:text-dark-color",
    bg: "bg-light-background-normal dark:bg-dark-background-light",
    border:
      "border-light-color dark:border-dark-color border border-opacity-30 dark:border-opacity-20",
  },
  B: {
    text: "text-light-color dark:text-dark-color",
    bg: "bg-light-background-normal dark:bg-dark-background-light",
    border:
      "border-light-color dark:border-dark-color border border-opacity-30 dark:border-opacity-20",
  },
  C: {
    text: "text-light-color dark:text-dark-color",
    bg: "bg-light-background-normal dark:bg-dark-background-light",
    border:
      "border-light-color dark:border-dark-color border border-opacity-30 dark:border-opacity-20 border-dashed",
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
  const [editMode, setEditMode] = useState(false);
  const courseDetails = courses?.find((a) => a.code === mark.courseCode);

  const [requiredMarks, setRequiredMarks] = useState("0");
  const [expectedInternal, setExpectedInternal] = useState(0);

  // Set the expected internal marks based on total marks
  useEffect(() => {
    if (Number(mark.overall.total) !== 60) {
      setExpectedInternal(60 - Number(mark.overall.total));
    }
  }, [mark.overall.total]);

  // Calculate required marks whenever the selected grade or marks change
  useEffect(() => {
    if (mark.courseType === "Practical")
      setRequiredMarks(
        (
          (grade_points[currentGrade] -
            (Number(mark.overall.marks) + expectedInternal))
        ).toFixed(2),
      );
    else
      setRequiredMarks(
        (
          ((grade_points[currentGrade] -
            (Number(mark.overall.marks) + expectedInternal)) /
            40) *
          75
        ).toFixed(2),
      );
  }, [currentGrade, expectedInternal, mark.overall.marks, mark.courseType]);

  useEffect(() => {
    const lostMark: number =
      Number(mark.overall.total) - Number(mark.overall.marks);
    const calculatedGrade =
      Number(mark.overall.total) == 100
        ? getGrade(Number(mark.overall.marks))
        : determineGrade(lostMark);
    updateGrade(mark.courseCode, calculatedGrade);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mark.overall.total, mark.overall.marks, mark.courseCode]);

  const getSliderValue = (grade: string) => {
    return Object.entries(gradeMap).find(([_, g]) => g === grade)?.[0] || "5";
  };

  const handleSliderChange = (value: number[]) => {
    if (navigator.vibrate) {
      navigator.vibrate(40);
    }

    const newGrade = gradeMap[value[0]];
    updateGrade(mark.courseCode, newGrade);
  };

  return (
    <div
      className={`flex min-h-40 flex-col justify-between gap-8 rounded-2xl ${
        Number(mark.overall.marks) <= 60
          ? "bg-light-background-normal dark:bg-dark-background-normal"
          : `bg-opacity-80 dark:bg-opacity-40 ${
              medalStyles[currentGrade as "O" | "A+" | "A" | "B+" | "B" | "C"]
                .bg
            }`
      } p-4 px-5 text-light-color dark:text-dark-color`}
    >
      <div className="grid grid-cols-[1fr_0.2fr] items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold capitalize">
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

      <div className="relative flex flex-col-reverse gap-4">
        {Number(mark.overall.marks) <= 60 ? (
          <>
            {60 - Number(mark.overall.total) > 0 && (
              <div className="flex items-center justify-between">
                <p>
                  Expected remaining from {60 - Number(mark.overall.total)}:
                </p>
                <input
                  type="number"
                  className="w-16 appearance-none rounded-md border-none bg-light-background-darker px-2 py-1 text-center outline-none dark:bg-dark-background-dark"
                  value={expectedInternal}
                  maxLength={3}
                  max={60 - Number(mark.overall.total)}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (
                      value >= 0 &&
                      value <= 60 - Number(mark.overall.total)
                    ) {
                      setExpectedInternal(value);
                    }
                  }}
                />
              </div>
            )}

            <div className="flex flex-row items-center justify-between gap-2 border-t-2 border-dashed border-black/10 pt-3 dark:border-white/10">
              <h2>Goal for sem exam</h2>
              <div className="flex items-center gap-1 rounded-full bg-light-background-dark dark:bg-dark-background-dark">
                <span
                  className={`pl-2 text-sm font-medium ${
                    Number(requiredMarks) <= 0
                      ? "text-light-accent dark:text-dark-accent"
                      : Number(requiredMarks) > (mark.courseType === "Practical" ? 40 : 75)
                        ? "text-light-error-color dark:text-dark-error-color"
                        : "text-light-success-color dark:text-dark-success-color"
                  }`}
                >
                  {requiredMarks}
                </span>
                <span className="ml-1 rounded-full bg-light-success-color px-2 py-0.5 pr-2 text-sm font-bold text-light-success-background dark:bg-dark-success-color dark:text-dark-success-background">
                 {mark.courseType === "Practical" ? 40 : 75}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-light-accent dark:text-dark-accent">
              {["C", "B", "B+", "A", "A+", "O"].map((grade) => (
                <span
                  key={grade}
                  className={`${
                    currentGrade === grade ? "font-semibold" : "opacity-40"
                  }`}
                >
                  {grade}
                </span>
              ))}
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
          <>
            <Medal
              edit={editMode}
              setEdit={setEditMode}
              grade={
                (Number(mark.overall.total) == 100
                  ? getGrade(Number(mark.overall.marks))
                  : determineGrade(
                      Number(mark.overall.total) - Number(mark.overall.marks),
                    )) as "O" | "A+" | "A" | "B+" | "B" | "C"
              }
            />

            {editMode && (
              <>
                <div className="flex items-center justify-between text-xs text-light-accent dark:text-dark-accent">
                  {["C", "B", "B+", "A", "A+", "O"].map((grade) => (
                    <span
                      key={grade}
                      className={`${
                        currentGrade === grade ? "font-semibold" : "opacity-40"
                      }`}
                    >
                      {grade}
                    </span>
                  ))}
                </div>
                <Slider
                  max={5}
                  step={1}
                  value={[parseInt(getSliderValue(currentGrade))]}
                  onValueChange={handleSliderChange}
                  className="w-full"
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
