import { ImageResponse } from "@vercel/og";
import Timetabler from "@/generator/TimetableGenerator";

export const runtime = "edge";

export default async function GET(request: Request) {
  const cookie =
    request.headers.getSetCookie()[0] || request.headers.get("cookie");

  const { searchParams } = new URL(request.url);

  const batch = searchParams.get("batch") || "2";

  const key = cookie;

  if (!key)
    return new Response(
      JSON.stringify({
        error: "Not signed in!",
        message:
          "Cannot find a user token! Most probably you didn't login. Try again after logging in.",
        url: "https://academia-pro.vercel.app/login",
      }),
      {
        status: 401,
        statusText: "Unauthorized",
      }
    );
  else {
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
  }
}
