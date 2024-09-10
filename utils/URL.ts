export function getUrl(key: string, endpoint: string) {
  const rand = Math.floor(Math.random() * 4) + 1;
  switch (rand) {
    case 1:
      return (
        process.env.NEXT_PUBLIC_API_URL_MORN || process.env.NEXT_PUBLIC_API_URL
      );
    case 2:
      return (
        process.env.NEXT_PUBLIC_API_URL_EVEN || process.env.NEXT_PUBLIC_API_URL
      );
    case 3:
      return (
        process.env.NEXT_PUBLIC_API_URL_NIGHT || process.env.NEXT_PUBLIC_API_URL
      );
    case 4:
      return process.env.NEXT_PUBLIC_API_URL_2 || process.env;
    default:
      return process.env.NEXT_PUBLIC_API_URL;
  }
}

export const revalUrl = process.env.NEXT_PUBLIC_API_URL;

// function hash(token: string): number {
//     const combined = `${token}`;
//     let hash = 0;
//     for (let i = 0; i < combined.length; i++) {
//         hash = (hash << 5) - hash + combined.charCodeAt(i);
//         hash |= 0;
//     }

//     const minutes = Math.floor(Date.now() / (1000 * 60 * 5));
//     return Math.abs((hash + minutes) % 3) + 1;
// }
