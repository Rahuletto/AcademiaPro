import styles from "@/styles/Card.module.css";
import { Course } from "@/types/Course";
import { useEffect, useState } from "react";

const grade_points: { [key: string]: number } = {
  O: 91,
  "A+": 81,
  A: 71,
  "B+": 61,
  B: 56,
  C: 50,
};

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <tr className={`${styles.card} attCard`}>
      <td className="max-h-18">
        <div className="flex items-center justify-between gap-2">
          <h4>{course.courseTitle}</h4>
          <div
            className={
              course.category === "Theory"
                ? styles.circle
                : `${styles.circle} ${styles.greenCircle}`
            }
          ></div>
        </div>
      </td>
      <td>
        <p className={`text-center ${styles.margin}`}>
          Credit:{" "}
          <span
            className={
              course.category === "Theory"
                ? styles.theoryColor
                : styles.labColor
            }
          >
            {course.credit}
          </span>
        </p>
      </td>
      <td>
        <div className={`py-0 md:mx-auto ${styles.attendance}`}>
          <span className={styles.total}>{course.courseCode}</span>
        </div>
      </td>
      <td>
        <h4 className="font-regular text-right text-2xl md:pr-6 md:text-3xl">
          {course.facultyName}
        </h4>
      </td>
    </tr>
  );
};

export default CourseCard;
