import { clearCookies } from "@/utils/cookies";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Logout() {
  const router = useRouter();
  useEffect(() => {
    clearCookies();
    router.push("/login");
  }, []);
  return <div>Logging out</div>;
}
