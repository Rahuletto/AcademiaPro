import Card from "@/components/Card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "@/styles/Attendance.module.css";
import type { AttendanceResponse, Course } from "@/types/Attendance";

const AttendanceTable = ({ data }: { data: AttendanceResponse | null }) => {
  return (
    <>
      <table style={{ width: "-webkit-fill-available" }}>
        <thead />
        <thead />
        <tbody className={[styles.attr, "attTable"].join(" ")}>
          {data && data.attendance ? (
            data.attendance.map((element: Course, index: any) => (
              <Card
                key={index}
                title={element.courseTitle}
                code={element.courseCode}
                category={element.category}
                data={{
                  present:
                    Number(element.hoursConducted) -
                    Number(element.hoursAbsent),
                  absent: Number(element.hoursAbsent),
                  total: Number(element.hoursConducted),
                }}
                percent={element.attendancePercentage}
              />
            ))
          ) : (
            <>
              <Skeleton
                style={{ width: "60vw", height: "64px", borderRadius: "12px" }}
              />
              <Skeleton
                style={{
                  width: "60vw",
                  height: "64px",
                  borderRadius: "12px",
                  opacity: 0.1,
                }}
              />
              <Skeleton
                style={{ width: "60vw", height: "64px", borderRadius: "12px" }}
              />

              <Skeleton
                style={{
                  width: "60vw",
                  height: "64px",
                  borderRadius: "12px",
                  opacity: 0.1,
                }}
              />

              <Skeleton
                style={{ width: "60vw", height: "64px", borderRadius: "12px" }}
              />
              <Skeleton
                style={{
                  width: "60vw",
                  height: "64px",
                  borderRadius: "12px",
                  opacity: 0.1,
                }}
              />
            </>
          )}
        </tbody>
      </table>
    </>
  );
};

export default AttendanceTable;
