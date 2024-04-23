import { ImageResponse } from "@vercel/og";
import Timetabler from "@/generator/TimetableGenerator";

export const runtime = "edge";

export default async function GET(request: Request) {
  try {

    const cookie = decodeURIComponent((
      (request.headers.get("cookie") as string) ||
        (request.headers.get("X-CSRF-Token") as string)
      )?.replace("token=", ""))
    

    if (!cookie)
      return new Response(
        JSON.stringify({
          error: "Unauthorized",
          status: 401,
          message:
            "Cannot find a session cookie, you might've blocked cookies 🍪 for me or you didn't login.",
          fix: "If you logged in, then your browser blocked me from eatin ya cookies ;(  Change your browser settings",
        }),
        {
          status: 500,
          headers: {
            "content-type": "application/json",
          },
        }
      );

    const { searchParams } = new URL(request.url);

    const batch = searchParams.get("batch") || "2";

    const res = await fetch(
      `https://proscrape.vercel.app/api/timetable?batch=${batch}`,
      {
        method: "GET",

        headers: {
          "X-CSRF-Token": cookie,
          "Set-Cookie": cookie,
          Cookie: cookie,
          Connection: "keep-alive",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "Cache-Control": "s-maxage=86400, stale-while-revalidate=7200",
        },
      }
    );

    const response = await res.json();

    return new ImageResponse(Timetabler({ body: response }), {
      width: 2400,
      height: 920,
      headers: {
        "Accept-Encoding": "gzip, deflate, br, zstd",
      },
    });
  } catch (err: any) {
    console.log(err);
    return new Response(
      JSON.stringify({
        error: err.stack,
      }),
      {
        status: 500,
        statusText: "Server Error",
      }
    );
  }
}
