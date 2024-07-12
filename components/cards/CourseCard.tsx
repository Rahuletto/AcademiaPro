import styles from "@/styles/Card.module.css";
import { Course } from "@/types/Course";

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <tr className={`${styles.card} attCard`}>
      <td className="max-h-18 md:max-w-64">
        <div className="flex items-center justify-between gap-2">
          <h4>{course.courseTitle}</h4>
          {course.courseTitle !== "Total" && (
            <div
              className={
                course.courseType === "Theory"
                  ? styles.circle
                  : `${styles.circle} ${styles.greenCircle}`
              }
            ></div>
          )}
        </div>
      </td>
      <td>
        <p className={`text-center ${styles.margin}`}>
          Credit:{" "}
          <span
            className={
              course.courseType === "Theory"
                ? styles.theoryColor
                : styles.labColor
            }
          >
            {course.credit}
          </span>
        </p>
      </td>
      <td>
      {course.courseTitle !== "Total" && (
        <div className={`py-0 md:mx-auto ${styles.attendance}`}>
          <span className={styles.total}>{course.courseCode}</span>
        </div>
      )}
        
      </td>
      <td>
        <h4 className="font-regular text-right text-2xl md:pr-6 md:text-3xl">
          {course.facultyName}
        </h4>
      </td>
      <td className="capitalize">
        <span className={styles.roomBadge}>{course.roomNo}</span>
      </td>
    </tr>
  );
};

export default CourseCard;
