"use client";

import { Cookie } from "@/utils/Cookies";
import { token } from "@/utils/Encrypt";
import { getAllUrls, getUrl } from "@/utils/URL";
import { useTransitionRouter as useRouter } from "next-view-transitions";
import React, { useEffect, useMemo } from "react";
import { RiLoader3Fill } from "react-icons/ri";

export default function Logout() {
  const router = useRouter();
  useMemo(() => {
    const logout = async () => {
      const urls = getAllUrls();

      try {
        for (const url of urls) {
          const response = await fetch(`${url}/logout`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token()}`,
              "X-CSRF-Token": Cookie.get("key") as string,
              Origin: "https://academia-pro.vercel.app",
            },
          });

          if (!response.ok) {
            alert("An error occurred! Try to clear cookies manually.");
            continue;
          } else {
            Cookie.clear();
            sessionStorage.clear();
            if ("caches" in window) {
              const cacheNames = await caches.keys();
              for (const name of cacheNames) {
                await caches.delete(name);
              }
            }
            router.push("/");
            break;
          }
        }
      } catch (error) {
        console.warn(error);
        setError(1);
      } finally {
        setTimeout(() => setError(0), 6000);
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
function setError(arg0: number) {
  throw new Error("Function not implemented.");
}
