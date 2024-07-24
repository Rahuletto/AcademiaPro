"use client";
import DayOrder from "@/components/badges/Day";
import { useDay } from "@/provider/DayProvider";
import { useUser } from "@/provider/UserProvider";
import { useEffect, useState } from "react";

export default function Academia() {
  const { user, isLoading, error: userError } = useUser();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  } else
    return (
      <div className="dark:bg-dark-background-normal bg-light-background-normal h-screen w-full dark:text-dark-color text-light-color">
        <h1>AcademiaPro</h1>
        {user ? <p>Logged in as: {user.name}</p> : <p>Not logged in</p>}
        <DayOrder />
      </div>
    );
}
