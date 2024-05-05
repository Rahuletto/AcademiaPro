import Timetabler from '@/generator/TimetableGenerator';
import { URL } from '@/utils/url';
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export default async function POST(request: Request) {
  try {
    const c = await request.json();

    const t = await fetch(`${URL}/api/timetable?batch=${c.batch}`, {
      cache: 'default',
      method: 'GET',
      headers: {
        'X-CSRF-Token': c.cookies,
        'Set-Cookie': c.cookies,
        Cookie: c.cookies,
        Connection: 'keep-alive',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Cache-Control': 'maxage=86400',
      },
    });

    const table = await t.json();

    if (!table.table || !table.table[0])
      return new Response(
        JSON.stringify({
          message:
            'Hmm, An error occured while grabbing your timetable data. Logout and login again.',
          fix: 'Logout and retry. Its better be old expired cookies 🍪',
        }),
        {
          status: 500,
          headers: {
            'content-type': 'application/json',
          },
        },
      );
    else
      return new ImageResponse(Timetabler({ body: table }), {
        width: 2400,
        height: 920,
        headers: {
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'cache-control': 'private, maxage=86400',
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
        statusText: 'Server Error',
      },
    );
  }
}
