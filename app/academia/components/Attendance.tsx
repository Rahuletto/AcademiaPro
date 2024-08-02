import Loading from "@/components/States/Loading";
import { useAttendance } from "@/provider/AttendanceProvider";
import Error from "@/components/States/Error";
import AttendanceCard from "./subcomponents/Attendance/AttendanceCard";
import Indicator from "@/components/Indicator";
import { useEffect } from "react";

export default function Attendance() {
  const { attendance, isLoading, error, mutate } = useAttendance();

  useEffect(() => {
    if (!isLoading && !attendance) mutate();
  }, [isLoading, mutate, attendance]);

  return (
    <section id="attendance">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Attendance</h1>
        <button
          className="flex items-center justify-center text-sm text-light-accent dark:text-dark-accentbg-light-button dark:bg-dark-button dark:text-dark-accent w-fit transform rounded-xl px-5 py-1 font-medium transition-all duration-300 hover:scale-105 hover:opacity-80"
        >
          Predict
        </button>
      </div>
      <div className="group px-2 pt-3">
        {isLoading ? (
          <Loading size="max" />
        ) : error ? (
          <Error component="Attendance" />
        ) : (
          <>
            {attendance && (
              <div className="opacity-0 transition duration-200 xl:translate-y-6 xl:hover:opacity-100 xl:group-hover:translate-y-0 xl:group-hover:opacity-100">
                <AttendanceCard legend course={attendance?.[0]} />
              </div>
            )}
            <div className="animate-fadeIn transition duration-200 xl:-translate-y-16 xl:group-hover:translate-y-0">
              <div className="my-4">
                {attendance
                  ?.filter((a) => a.category === "Theory")
                  .map((course, index) => (
                    <div
                      key={index}
                      className="my-1 rounded-xl odd:bg-light-background-normal even:bg-light-background-light odd:dark:bg-dark-background-normal even:dark:bg-dark-background-darker"
                    >
                      <AttendanceCard course={course} />
                    </div>
                  ))}
              </div>

              {attendance && attendance[0] && (
                <Indicator type="Practical" separator />
              )}

              <div className="my-4">
                {attendance
                  ?.filter((a) => a.category === "Practical")
                  .map((course, index) => (
                    <div
                      key={index}
                      className="my-1 rounded-xl odd:bg-light-background-normal even:bg-light-background-light odd:dark:bg-dark-background-normal even:dark:bg-dark-background-darker"
                    >
                      <AttendanceCard course={course} />
                    </div>
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
