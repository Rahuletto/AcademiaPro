import { ImageResponse } from "@vercel/og";
import Timetabler from "@/generator/TimetableGenerator";
import { getCookie } from "@/utils/cookies";
import { TimeTableResponse } from "@/types/TimeTable";

const req = await fetch(
  "https://fonts.cdnfonts.com/s/19795/Inter-SemiBold.woff"
);

const req2 = await fetch("https://fonts.cdnfonts.com/s/19795/Inter-Bold.woff");

const Inter = await req.arrayBuffer();
const InterBold = await req2.arrayBuffer();

export async function POST({ request }: { request: Request }) {
  const body = await request.json();

  return new ImageResponse(JSON.parse(JSON.stringify(Timetabler({ body }))), {
    width: 2400,
    height: 920,
    fonts: [
      {
        name: "Inter",
        data: Inter,
        style: "normal",
      },
      {
        name: "Inter-Bold",
        data: InterBold,
        style: "normal",
      },
    ],
  });
}

export const GET = async ({ request }: { request: Request }) => {
  const cookie = request.headers.getSetCookie()[0];
  const { searchParams } = new URL(request.url);

  const batch = searchParams.get("batch") || "2";

  return new Promise((resolve) => {
    const key = cookie ? cookie : (getCookie("token") as string);

    if (!key)
      resolve(
        new Response(
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
        )
      );
    else {
      fetch(`https://proscrape.vercel.app/api/timetable?batch=${batch}`, {
        method: "GET",
        credentials: 'include',
        headers: {
          "Set-Cookie": getCookie("token") as string,
          "Cookie": getCookie("token") as string,
          Connection: "keep-alive",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "Cache-Control": "s-maxage=86400, stale-while-revalidate=7200",
        },
      })
        .then((r) => r.json())
        .then((res: TimeTableResponse) => {
          resolve(
            new ImageResponse(
              JSON.parse(JSON.stringify(Timetabler({ body: res }))),
              {
                width: 2400,
                height: 920,
                headers: {
                  "Cache-Control":
                    "private, max-age 21600, stale-while-revalidate 7200, must-revalidate",
                  "Accept-Encoding": "gzip, deflate, br, zstd",
                },
                fonts: [
                  {
                    name: "Inter",
                    data: Inter,
                    style: "normal",
                  },
                ],
              }
            )
          );
        });
    }
  });
};
