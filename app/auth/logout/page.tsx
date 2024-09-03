"use client";

import { Cookie } from "@/utils/Cookies";
import { token } from "@/utils/Encrypt";
import { ProscrapeURL } from "@/utils/URL";
import { useTransitionRouter as useRouter } from "next-view-transitions";
import React, { useEffect } from "react";
import { RiLoader3Fill } from "react-icons/ri";

export default function Logout() {
  const router = useRouter();
  useEffect(() => {
    fetch(`${ProscrapeURL}/logout`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token()}`,
        "X-CSRF-Token": Cookie.get("key") as string,
        Origin: "https://academia-pro.vercel.app",
      },
    }).then((a) => {
      Cookie.clear();
      sessionStorage.clear();

      if ("caches" in window) {
        caches.keys().then(function (names) {
          for (let name of names) {
            caches.delete(name);
          }
        });
      }

      if (!a.ok) {
        alert("An error occured! Try to clear cookies manually.");
      }
      router.push("/");
    });
  }, [router]);

  return (
    <main className="flex h-screen w-screen animate-fadeIn flex-col items-center justify-center p-12 text-light-accent dark:text-dark-accent">
      <RiLoader3Fill
        title="loading"
        className="animate-spin text-5xl font-medium text-light-accent dark:text-dark-accent"
      />
      <h1 className="mt-4 text-xl font-medium">Logging out...</h1>
    </main>
  );
}
