'use client';

import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";
import {useState, useEffect} from 'react';
import Storage from "@/utils/Storage";


export default function Popup() {
  const [opened, setOpened] = useState(false);
  
  useEffect(() => {
    const isAcknowledged = Storage.get("popup", false)
    if(!isAcknowledged) setOpened(true)
  }, [])

  function clicked() {
    setOpened(false);
    Storage.set("popup", true)
  }

  return ( opened &&
    <div
      role="button"
      tabIndex={0}
      className="fixed inset-0 z-50 flex animate-fastfade items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm transition duration-75"
    >
      <div
        role="button"
        tabIndex={-1}
        onKeyDown={() => {}}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative w-[30%] min-w-[400px] cursor-default items-center justify-center flex flex-col rounded-[42px] bg-light-background-normal p-4 pb-20 text-white shadow-lg dark:bg-dark-background-normal"
      >
        <div className="mb-6 flex flex-col items-center justify-center gap-5 p-2">
          <FaBookOpen
            style={{ filter: "drop-shadow(0px 0px 0.7px var(--accent))" }}
            className="text-4xl text-light-accent dark:text-dark-accent"
          />
          <h2 className="text-2xl font-semibold capitalize text-light-color dark:text-dark-color">
            Welcome to ClassPro
          </h2>
          <p className="-mt-3 text-sm underline decoration-light-accent opacity-40 dark:decoration-dark-accent">
            AcademiaPro is now ClassPro
          </p>
        </div>
        <p className="mx-2 text-center opacity-50">
          This platform is entirely developed by two students, operates independently, without any
          direct connection or endorsement from the university. The content is fetched from the university website itself.
        </p>
        <Link className="mt-4 dark:bg-dark-info-background bg-light-info-background px-3 py-1 rounded-lg text-light-info-color dark:text-dark-info-color font-medium" href="https://academia.srmist.edu.in" target="_blank">Link to official academia</Link>
        <button onClick={clicked} className="absolute bottom-0 left-0 flex h-12 w-full items-center justify-center rounded-b-[42px] bg-light-accent bg-opacity-25 font-medium text-light-accent dark:bg-dark-accent dark:bg-opacity-25 dark:text-dark-accent">
          Accept and Continue
        </button>
      </div>
    </div>
  );
}
