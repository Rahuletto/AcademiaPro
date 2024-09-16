function shuffleArray(array: (string | undefined)[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function getAllUrls() {
  const urls = [
    process.env.NEXT_PUBLIC_API_URL_MORN || process.env.NEXT_PUBLIC_API_URL,
    process.env.NEXT_PUBLIC_API_URL_EVEN || process.env.NEXT_PUBLIC_API_URL,
    process.env.NEXT_PUBLIC_API_URL_NIGHT || process.env.NEXT_PUBLIC_API_URL,
    process.env.NEXT_PUBLIC_API_URL_2 || process.env.NEXT_PUBLIC_API_URL,
    process.env.NEXT_PUBLIC_API_URL_H || process.env.NEXT_PUBLIC_API_URL,
  ];

  return shuffleArray(urls);
}

export function getUrl() {
  const urls = [
    process.env.NEXT_PUBLIC_API_URL_MORN,
    process.env.NEXT_PUBLIC_API_URL_EVEN,
    process.env.NEXT_PUBLIC_API_URL_NIGHT,
    process.env.NEXT_PUBLIC_API_URL_2,
    process.env.NEXT_PUBLIC_API_URL_H,
    process.env.NEXT_PUBLIC_API_URL,
  ];

  const rand = Math.floor(Math.random() * 5);

  return urls[rand] || process.env.NEXT_PUBLIC_API_URL_H;
}

export const revalUrl = process.env.NEXT_PUBLIC_API_URL;
