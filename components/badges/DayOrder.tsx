import styles from "@/styles/Badge.module.css";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { DayOrderResponse } from "@/types/DayOrder";

export default function DayOrder({ data }: { data: DayOrderResponse | null }) {
  if (data) {
    return (
      <>
        {data.dayOrder ? (
          <>
            <span
              className={
                data.dayOrder.includes("No")
                  ? [styles.badge, styles.holiday].join(" ")
                  : styles.badge
              }
            >
              {data.dayOrder.includes("No")
                ? "Holiday"
                : `Day Order: ${data.dayOrder}`}
            </span>{" "}
          </>
        ) : (
          <Skeleton
            style={{
              width: "100px",
              height: "30px",
              borderRadius: "12px",
              opacity: 0.6,
            }}
          />
        )}
      </>
    );
  } else return null;
}
