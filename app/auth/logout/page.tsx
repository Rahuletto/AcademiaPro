"use client";

import { Cookie } from "@/utils/Cookies";
import { token } from "@/utils/Tokenize";
import Storage from "@/utils/Storage";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { RiLoader3Fill } from "react-icons/ri";
import rotateUrl from "@/utils/URL";

export default function Logout() {
  const router = useRouter();

  useMemo(() => {
    const logout = async () => {
      await fetch(`${rotateUrl()}/logout`, {
        method: "DELETE",
        headers: {
          cookie: `key=${Cookie.get("key")}`,
          Authorization: `Bearer ${token()}`,
          "X-CSRF-Token": Cookie.get("key") as string,
          Origin: "https://academia-pro.vercel.app",
        },
      });

      Cookie.clear();
      Storage.clear();
      sessionStorage.clear();

      if ("caches" in window) {
        const cacheNames = await caches.keys();
        for (const name of cacheNames) {
          await caches.delete(name);
        }
      }

      router.push("/auth/login");
    };

    logout();
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
