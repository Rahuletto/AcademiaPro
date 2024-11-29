"use client";

import { Cookie } from "@/utils/Cookies";
import { token } from "@/utils/Tokenize";
import Storage from "@/utils/Storage";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { RiLoader3Fill } from "react-icons/ri";
import rotateUrl, { revalUrl } from "@/utils/URL";
import { cache } from "swr/_internal";

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

      if ("caches" in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map((name) => caches.delete(name)));
      }

      cache.delete(`${revalUrl}/getData`);
      if ("serviceWorker" in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (const registration of registrations) {
          registration.unregister();
        }
      }

      if ("storage" in navigator && "persist" in navigator.storage) {
        await navigator.storage.persist();
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
