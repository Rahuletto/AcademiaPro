import { useState, useEffect } from "react";

import styles from "@/styles/Badge.module.css";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Hour({ data } : {data: number | null}) {
  return (
    <>
      {data && data !== 0 ? (
        (
          <span className={styles.badge}>{data} hours</span>
        )
      ) : (
        !data && data == undefined ? <Skeleton
          style={{
            width: "100px",
            height: "30px",
            borderRadius: "12px",
            opacity: 0.6,
          }}
        /> : null
      )}
    </>
  );
}
