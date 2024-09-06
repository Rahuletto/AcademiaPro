"use client";
import Link from "@/components/Link";
import Loading from "@/components/States/Loading";
import { useCalendar } from "@/provider/CalendarProvider";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function Calendar() {
  const { calendar, isLoading, error } = useCalendar();

  const [data, setData] = useState("");

  useEffect(() => {
    if (calendar && calendar[0]) {
      fetch(`/calendar/download/api`, {
        method: "POST",
        body: JSON.stringify({
          calendar: calendar?.[new Date().getMonth() % 5]
        }),
        headers: {
            "Content-Type": "application/json",
        }
      })
        .then((d) => d.blob())
        .then((res: Blob | MediaSource) => {
          const imageUrl = URL.createObjectURL(res);
          setData(imageUrl);
        });
    }
  }, [calendar]);
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
            className="scale-70 rounded-3xl"
            alt="calendar"
            src={data}
            width={800}
            height={400}
          />
          <a
            href={data}
            download={`calendar.png`}
            className="w-fit transform rounded-xl bg-light-background-dark px-5 py-1 font-medium text-light-color transition-all duration-300 hover:scale-105 hover:opacity-80 dark:bg-dark-background-light dark:text-dark-color"
          >
            Download
          </a>
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
}
