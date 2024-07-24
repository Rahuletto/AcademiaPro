"use client";
import { useDay } from "@/provider/DayProvider";
import { useUser } from "@/provider/UserProvider";
import { useEffect, useState } from "react";

export default function Academia() {
  const { user, isLoading, error: userError } = useUser();
  const { day, isLoading: dayLoading, error: dayError } = useDay();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  } else
    return (
      <div>
        <h1>AcademiaPro</h1>
        {user ? <p>Logged in as: {user.name}</p> : <p>Not logged in</p>}
        {day ? <p>Today is {day}</p> : <p>Pewoop</p>}
      </div>
    );
}
