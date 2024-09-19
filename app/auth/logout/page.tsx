"use client";

import { Cookie } from "@/utils/Cookies";
import { token } from "@/utils/Encrypt";
import Storage from "@/utils/Storage";
import { getAllUrls, getUrl } from "@/utils/URL";
import { useTransitionRouter as useRouter } from "next-view-transitions";
import React, { useEffect, useMemo } from "react";
import { RiLoader3Fill } from "react-icons/ri";

export default function Logout() {
  const router = useRouter();
  useMemo(() => {
    const logout = async () => {
      try {
        await fetch(
          `${process.env.NEXT_PUBLIC_API_URL_MORN}/logout`,
          {
            method: "DELETE",
            headers: {
              cookie: `key=${Cookie.get("key")}`,
              Authorization: `Bearer ${token()}`,
              "X-CSRF-Token": Cookie.get("key") as string,
              Origin: "https://academia-pro.vercel.app",
            },
          },
        );

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
        
      } catch (error) {
        alert("An error occurred! Try to clear cookies manually.");
        console.warn(error);
      }
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
