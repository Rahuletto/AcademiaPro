import { decodeString } from "@/misc/encode";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
    console.log(searchParams)
	const id = searchParams.get("id");
	const decodedId = decodeString(id as string);
	return Response.redirect(`${decodedId}`);
}

export const config = {
	runtime: "edge",
};
