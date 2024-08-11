"use client";
import Link from "@/components/Link";
import Loading from "@/components/States/Loading";
import { useTimetable } from "@/provider/TimetableProvider";
import { useUser } from "@/provider/UserProvider";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function Timetable() {
  const { user } = useUser();
  const { timetable } = useTimetable();

  const [data, setData] = useState("");

  useEffect(() => {
    if (user?.reg && timetable) {
      fetch(`/generate`, {
        method: "POST",
        body: JSON.stringify({
          table: timetable,
        }),
      })
        .then((d) => d.blob())
        .then((res: Blob | MediaSource) => {
          const imageUrl = URL.createObjectURL(res);
          setData(imageUrl);
        });
    }
  }, [user, timetable]);

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-12 bg-light-background-normal dark:bg-dark-background-normal">
      {data ? (
        <>
          <Link
            href="/academia"
            style={{ padding: 12, borderRadius: 32 }}
            className="absolute left-6 top-6 z-10 bg-light-error-background text-light-error-color dark:bg-dark-error-background dark:text-dark-error-color"
          >
            <FaArrowLeft />
          </Link>
          <Image
            className="scale-95 rounded-3xl"
            alt="timetable"
            src={data}
            width={2000}
            height={766}
          />
          <Link
            href={data}
            download={`timetable-${user?.section}-${user?.classroom}.png`}
            className="dark:bg-dark-background-lig bg-light-background-dark text-light-color dark:text-dark-background-light"
          >
            Download
          </Link>
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
}
