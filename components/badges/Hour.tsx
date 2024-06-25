import styles from "@/styles/Badge.module.css";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Hour({ data }: { data: number | null }) {
  return (
    <>
      {data && data !== 0 ? (
        <span className={styles.badge}>{data} hours</span>
      ) : !data && data == undefined ? (
        <Skeleton className="h-[30px] w-[100px] rounded-md opacity-60" />
      ) : null}
    </>
  );
}
