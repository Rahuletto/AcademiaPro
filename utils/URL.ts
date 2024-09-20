function shuffleArray(array: (string | undefined)[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const urls = [
  process.env.NEXT_PUBLIC_API_URL_EVEN,
  process.env.NEXT_PUBLIC_API_URL_NIGHT,
  process.env.NEXT_PUBLIC_API_URL_2,
  process.env.NEXT_PUBLIC_API_URL_H,
  process.env.NEXT_PUBLIC_API_URL,
];

const mornUrl = process.env.NEXT_PUBLIC_API_URL_MORN;

export function getAllUrls() {
  const shuffledUrls = shuffleArray(urls);
  return [...shuffledUrls, mornUrl];
}

export function getUrl() {
  const rand = Math.floor(Math.random() * urls.length);
  return urls[rand] || process.env.NEXT_PUBLIC_API_URL_H;
}

export const revalUrl = process.env.NEXT_PUBLIC_API_URL;


export function rotateArray(array: (string | undefined)[], urlIndex: number = 0) {
  const rotatedArray = array.slice(urlIndex).concat(array.slice(0, urlIndex));
  urlIndex = (urlIndex + 1) % array.length;
  return rotatedArray;
}