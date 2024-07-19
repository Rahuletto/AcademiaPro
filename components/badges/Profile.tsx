import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "@/styles/Profile.module.css";
import { useEffect, useState } from "react";

import type { InfoResponse } from "@/types/UserInfo";
import { getColor } from "@/utils/color";
import { FaUser } from "react-icons/fa";

export default function Profile({ data }: { data: InfoResponse | null }) {
  const [name, setName] = useState("");

  function profilePage() {
    const dialog = document.querySelector<HTMLDialogElement>("#profileDialog");
    if (dialog) dialog.showModal();
  }

  useEffect(() => {
    if (data && data?.userInfo)
      setName(
        data?.userInfo?.name
          .toLowerCase()
          .split(" ")
          .filter((a: string) => a.length != 1)
          .join(" "),
      );
  }, [data]);

  return (
    <>
      {data?.userInfo && name ? (
        <div
          className={styles.pill}
          onKeyDown={() => {}}
          onClick={() => {
            profilePage();
          }}
        >
          <div
            className={styles.pic}
            style={{ background: getColor(data.userInfo?.reg) }}
          >
            <span>{name[0]}</span>
          </div>
          <h3 className={styles.name}>
            {name.slice(0, 20) +
              (name.length === name.slice(0, 20).length ? "" : "...")}
          </h3>
          <button
            name="user"
            type="button"
            className={styles.profileButton}
            title="User Info"
            onClick={() => {
              profilePage();
            }}
          >
            <FaUser />
          </button>
        </div>
      ) : (
        <Skeleton className="h-[64px] w-full rounded-lg opacity-60" />
      )}
    </>
  );
}
