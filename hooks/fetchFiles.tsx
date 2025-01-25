"use server";
import { cache } from "react";
import { cookies } from "next/headers";
import { loginUrl } from "@/utils/URL";
import type { CoursePapers } from "@/app/academia/library/library";


async function fetchFiles() {
    const cookie = (await cookies()).get("key");

    const response = await fetch(`${loginUrl}/files`, {
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

    const json: CoursePapers[] = await response.json();

    return json;
}

export const fetchFileArray = cache(async () => {
    return await fetchFiles();
});
