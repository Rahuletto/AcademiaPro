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
  }, []);

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
      <tr
        className={`${styles.card} attCard`}
        title={`${code} (${category})`}
      >
        <td className="max-h-18 max-w-52">
          <div className="flex items-center gap-2 justify-between">
            <h4>{truncateString(title)}</h4>

            <div
              className={
                category == "Theory"
                  ? styles.circle
                  : `${styles.circle} ${styles.greenCircle}`
              }
            ></div>
          </div>
        </td>
        <td>
          <p
            className={`text-center ${styles.margin}`}
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
          <div className={`mx-auto py-0 ${styles.attendance}`}>
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
            className={`text-3xl text-right pr-6 font-semibold ${
              Number(percent.split(".")[0]) === 100
                ? "text-green text-4xl"
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
