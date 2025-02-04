"use server";
import { cache } from "react";
import { cookies } from "next/headers";
import { filesUrl } from "@/utils/URL";
import { Folders } from "@/types/Folders";


async function fetchResources() {
    const cookie = (await cookies()).get("key");

    const response = await fetch(`${filesUrl}/resources`, {
        method: "GET",
        cache: "force-cache",
        next: {
            revalidate: 3600,
        },
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": cookie?.value ?? "",
        },
    });

    const json: Folders = await response.json();

    return json;
}

export const fetchResourcesArray = cache(async () => {
    return await fetchResources();
});
