import styles from "@/styles/Card.module.css";
import type { Course } from "@/types/Course";

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <tr
      className={`${styles.courseCard} attCard relative my-8 md:my-0 ${course.courseTitle === "Total" ? styles.totalCreds : ""}`}
    >
      <td className="max-h-18 md:max-w-64">
        <div
          className={`flex ${course.roomNo ? "flex-col items-start justify-start gap-3 md:flex-row md:items-center md:justify-between md:gap-2" : "flex-row items-center justify-between gap-2"}`}
        >
          <h4>{course.courseTitle}</h4>
          {course.courseTitle !== "Total" && !course.roomNo && (
            <div
              className={
                course.courseType === "Theory"
                  ? styles.circle
                  : `${styles.circle} ${styles.greenCircle}`
              }
            ></div>
          )}
          {course.courseTitle !== "Total" && course.roomNo && (
            <span
              className={`rounded-full px-3 py-1 pt-[6px] text-xs font-semibold capitalize ${course.courseType === "Theory" ? "bg-theoryLight text-theory" : "bg-practicalLight text-practical"} ${styles.roomBadge}`}
            >
              {course.roomNo}
            </span>
          )}
        </div>
      </td>
      <td>
        <p className={`text-right md:text-center ${styles.margin}`}>
          Credit:{" "}
          <span className={`${Number(course.credit) === 0 ? "" : styles.blue}`}>
            {course.credit}
          </span>
        </p>
      </td>
      <td>
        {course.courseTitle !== "Total" && (
          <div className="m-0 px-0 py-1">
            <span
              style={{ color: "black" }}
              className="rounded-full bg-[#d4d4d4] px-2 py-0.5 text-sm text-black"
            >
              {course.courseCode}
            </span>
          </div>
        )}
      </td>
      <td className="md:max-w-64">
        <h3
          className={`font-regular text-right text-2xl md:text-3xl ${course.facultyName.includes("(null)") ? "text-red" : ""}`}
        >
          {course.facultyName.includes("(null)")
            ? "Not available"
            : course.facultyName.split(" (")[0]}
        </h3>
      </td>
    </tr>
  );
};

export default CourseCard;
