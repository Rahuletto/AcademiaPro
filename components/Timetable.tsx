import styles from "@/styles/Timetable.module.css";
import { useRouter } from "next/router";
import type { InfoResponse } from "@/types/UserInfo";
import { endingTimesSlot, startingTimesSlot } from "@/types/Times";

const TimeTableComponent = ({
  table,
  userInfo,
}: {
  userInfo: InfoResponse;
  table: (string | undefined)[] | undefined;
}) => {
  const router = useRouter();

  function openGen() {
    router.push(
      `/api/timetable/${userInfo?.userInfo?.regNo}?batch=${userInfo?.userInfo?.batch}`
    );
  }
  return (
    <>
      <tbody onClick={() => openGen()} className={[styles.body].join(' ')}>

          {table &&
            table.map((element: any, index: any) =>
              element ? (
                <td
                  key={index}
                  className={
                    String(element).includes("Theory")
                      ? styles.theory
                      : styles.lab
                  }
                >
                  {String(element).split("(")[0]}
                  <span className={styles.timeSlot}>
                    {startingTimesSlot[index]} - {endingTimesSlot[index]}
                  </span>
                </td>
              ) : (
                <td key={index} />
              )
            )}

      </tbody>
    </>
  );
};

export default TimeTableComponent;
