import { useUser } from "@/providers/UserProvider";
import { clearCookies } from "@/utils/cookies";
import { useRouter } from "next/router";
import React, { useRef, useEffect } from "react";
import styles from "@/styles/Profile.module.css";
import { IoMdLogOut } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { GrClose } from "react-icons/gr";

const ProfileDialog = () => {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const u = useUser();
  const user = u?.userInfo;

  const data = {
    Year: user?.year,
    Semester: user?.semester,
    Classroom: user?.classroom,
    Section: user?.section,
    Combo: user?.combo,
    Batch: user?.batch,
    Program: user?.program,
    Department: user?.dept,
  };

  function logoutSequence() {
    const out = confirm("Are you sure want to log out?");
    if (out) {
      clearCookies();
      router.push("/");
    } else return;
  }

  useEffect(() => {
    const dialog = document.querySelector<HTMLDialogElement>("#profileDialog");

    function handleClickOutside(event: any) {
      const rect = dialog?.getBoundingClientRect();

      if (rect && dialog) {
        const cond =
          rect.left < event.clientX &&
          event.clientX < rect.right &&
          rect.top < event.clientY &&
          event.clientY < rect.bottom;

        if (!cond) {
          dialog.close();
        }
      }
    }

    dialog?.addEventListener("click", handleClickOutside);

    return () => {
      dialog?.removeEventListener("click", handleClickOutside);
    };
  }, []);

  if (!user) return null;

  return (
    <dialog id="profileDialog" className="dialog" ref={dialogRef}>
      <button
        className={styles.close}
        onClick={() => dialogRef.current?.close()}
      >
        <GrClose />
      </button>
      <h2>
        {user.name
          .toLowerCase()
          .split(" ")
          .filter((a: string) => a.length != 1)
          .join(" ")}
      </h2>
      <h4>{user.reg}</h4>
      <div className={styles.userData}>
        {Object.keys(data).map((element, i) => (
          <div key={i}>
            <p>{element}:</p>
            <span>{(data as any)[element]}</span>
          </div>
        ))}
      </div>
      <button className={styles.logout} onClick={() => logoutSequence()}>
        <IoMdLogOut style={{ fontSize: 24 }} /> Logout
      </button>
    </dialog>
  );
};

export default ProfileDialog;
