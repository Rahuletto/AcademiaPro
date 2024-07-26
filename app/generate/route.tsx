import Timetabler from "@/components/Generators/Timetable";
import { ImageResponse } from "next/og";

export async function POST(request: Request) {
  const geist = await fetch(
    new URL("../../public/fonts/Geist.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  try {
    const { table } = await request.json();

    if (!table[0])
      return new Response(
        JSON.stringify({
          message:
            "Hmm, An error occured while grabbing your timetable data. Logout and login again.",
          fix: "Logout and retry. Its better be old expired cookies 🍪",
        }),
        {
          status: 500,
          headers: {
            "content-type": "application/json",
          },
        },
      );

    return new ImageResponse(<Timetabler body={table} />, {
      width: 2400,
      height: 920,
      fonts: [
        {
          name: "Geist",
          data: geist,
          style: "normal",
        },
      ],
      headers: {
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "cache-control": "private, maxage=86400",
      },
    });
  } catch (err: any) {
    console.warn(err);
    return new Response(
      JSON.stringify({
        error: err.stack,
      }),
      {
        status: 500,
        statusText: "Server Error",
      },
    );
  }
}
export const runtime = "edge";
