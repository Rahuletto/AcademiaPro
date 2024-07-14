import styles from "@/styles/Timetable.module.css";
import type { Course } from "@/types/Course";
import { endingTimesSlot, startingTimesSlot } from "@/types/Times";
import { truncateString } from "@/utils/truncate";
import { convertUnicode } from "@/utils/unicode";
import { useRouter } from "next/router";

const TimeTableComponent = ({
  table,
  courses,
  view,
}: {
  table: (string | undefined)[] | undefined;
  courses: Course[] | null;
  view: boolean;
}) => {
  const router = useRouter();

  function openGen() {
    router.push("/timetable");
  }
  return (
    <>
      <tbody
        onKeyDown={() => {}}
        onClick={() => table && openGen()}
        className={styles.body}
      >
        {table?.map((element: string | undefined, index: number) =>
          element ? (
            <td
              key={index}
              className={
                String(element).includes("Theory") ? styles.theory : styles.lab
              }
            >
              {truncateString(convertUnicode(element).split("(")[0])}
              {view && (
                <span
                  className="absolute bottom-2 left-2 text-xs opacity-70"
                  style={{ width: "min-content" }}
                >
                  {courses?.[0] && getClass(String(element), courses)}
                </span>
              )}
              <span className={styles.timeSlot}>
                {startingTimesSlot[index]} - {endingTimesSlot[index]}
              </span>
            </td>
          ) : (
            <td key={index} style={{ width: "10%", height: "90px" }} />
          ),
        )}
      </tbody>
    </>
  );
};

export default TimeTableComponent;

function getClass(subject: string, courses: Course[]) {
  const [courseTitle, courseType] = subject.split(" (");
  const formattedCourseType = courseType?.replace(")", "").trim(); // Extract and format the course type

  const course = courses.find(
    (course) =>
      course.courseTitle === courseTitle.trim() &&
      (formattedCourseType ? course.courseType === formattedCourseType : true),
  );
  return course ? course.roomNo : null;
}
