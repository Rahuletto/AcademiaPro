"use client";
import { useUser } from "@/provider/UserProvider";

export default function Academia() {
  const { user, error } = useUser();

  return (
    <div>
      <h1>AcademiaPro</h1>
      {user ? <p>Logged in as: {user.name}</p> : <p>Not logged in</p>}
    </div>
  );
}
