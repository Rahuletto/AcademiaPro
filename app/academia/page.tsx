"use client";
import { useUser } from "@/provider/UserProvider";
import { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import Timetable from "./components/Timetable";

export default function Academia() {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    console.log(window.location);
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  } else
    return (
      <div className="h-screen w-full bg-light-background-normal text-light-color dark:bg-dark-background-normal dark:text-dark-color">
        <Sidebar>
          <Timetable />
        </Sidebar>
      </div>
    );
}
