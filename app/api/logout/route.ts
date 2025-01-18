import { token } from "@/utils/Tokenize";
import rotateUrl from "@/utils/URL";
import { cookies } from "next/headers";

export async function DELETE() {
	const cookie = await cookies();

	const a = await fetch(`${rotateUrl()}/logout`, {
		method: "DELETE",
		headers: {
			cookie: `${cookie.get("key")?.value ?? ""}`,
			Authorization: `Bearer ${token()}`,
			"X-CSRF-Token": cookie.get("key")?.value ?? "",
			Origin: "https://class-pro.vercel.app",
		},
	});

	if (a.ok) {
		for (const c of cookie.getAll()) {
			cookie.delete(c);
		}
		return Response.json({ message: "Logged out" });
	}
		return Response.json({ message: "Failed to log out" });
}
