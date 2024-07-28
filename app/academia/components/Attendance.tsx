import Loading from "@/components/States/Loading";
import { useAttendance } from "@/provider/AttendanceProvider";
import Error from "@/components/States/Error";
import { useEffect } from "react";
import AttendanceCard from "./subcomponents/AttendanceCard";

export default function Attendance() {
  const { attendance, isLoading, error } = useAttendance();
  useEffect(() => {
    console.log(attendance);
  }, [attendance]);
  return (
    <section id="attendance">
      <h1 className="text-2xl font-semibold">Attendance</h1>
      <div className="container mx-auto p-4">
        <div className="bg-dark">
          {isLoading ? (
            <Loading />
          ) : error ? (
            <Error component="Attendance" />
          ) : (
            <>
              {attendance?.map((course, index) => (
                <div
                  key={index}
                  className="my-1 rounded-xl odd:bg-light-background-normal even:bg-light-background-darker odd:dark:bg-dark-background-normal even:dark:bg-dark-background-darker"
                >
                  <AttendanceCard course={course} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
