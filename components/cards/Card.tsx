/** eslint-disable react-hooks/exhaustive-deps */
interface Props {
  title: string;
  code: string;
  percent: string;
  data: {
    present: number;
    absent: number;
    total: number;
  };
  category: "Theory" | "Practical" | string;
  todayTable?: (string | undefined)[];
}

import styles from "@/styles/Card.module.css";
import { calculateMargin } from "@/utils/margin";
import { useEffect, useState } from "react";
import { truncateString } from "../../utils/truncate";

const Card = ({ percent, title, code, data, category, todayTable }: Props) => {
  const [margin, setMargin] = useState(0);
  useEffect(() => {
    setMargin(calculateMargin(data.present, data.total));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.present, data.total]);

  const countHoursPerDay = (title: string) => {
    var count = 0;
    if (todayTable && todayTable.length != 0) {
      todayTable?.map((item) => {
        if (item?.includes(title)) {
          count += 1;
        }
      });
    }
    return count;
  };

  return (
    <>
      <tr className={`${styles.card} attCard relative my-8 md:my-0`}>
        <td className="max-h-18 md:max-w-64">
          <div className="flex flex-row items-center gap-3 md:items-center md:justify-between md:gap-2">
            <h4>{truncateString(title)}</h4>

            <div
              className={
                category === "Theory"
                  ? styles.circle
                  : `${styles.circle} ${styles.greenCircle}`
              }
            />
          </div>
        </td>
        <td>
          <p
            className={`text-right md:text-center ${styles.margin}`}
            title={
              margin <= countHoursPerDay(title)
                ? "You are at the verge of going below 75%"
                : "The hours you can skip"
            }
          >
            {margin < 0 ? "Required" : "Margin"}:{" "}
            <span
              className={
                margin <= countHoursPerDay(title) && margin > 0
                  ? styles.yellow
                  : margin > 0
                    ? styles.blue
                    : styles.red
              }
            >
              {margin}
            </span>
          </p>
        </td>

        <td>
          <div className={`${styles.attendance}`}>
            <span className={`${styles.present} ${styles.green}`}>
              {data.present}
            </span>
            <span className={`${styles.absent} ${styles.red}`}>
              {data.absent}
            </span>
            <span className={styles.total}>{data.total}</span>
          </div>
        </td>
        <td>
          <h3
            className={`font-regular text-right text-2xl md:pr-6 md:text-3xl ${
              Number(percent.split(".")[0]) === 100
                ? "text-2xl font-semibold text-green md:text-4xl"
                : Number(percent.split(".")[0]) < 75
                  ? "text-red"
                  : "text-accent"
            }`}
          >
            {Number(percent.split(".")[0]) === 100 ? 100 : percent}%
          </h3>
        </td>
      </tr>
    </>
  );
};

export default Card;
