function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

const colors: string[] = [
  "#FFAC81",
  "#7EC8BD",
  "#9CA3DB",
  "#EFE9AE",
  "#64f58d",
  "#EA8592",
  "#E0FE9A",
  "#FF928B",
  "#8789AB",
  "#8BCAE5",
];

export function profileColor(registrationNumber: string): string {
  if(registrationNumber === undefined) return colors[0];
  const hash = hashString(registrationNumber);
  const colorIndex = hash % colors.length;
  return colors[colorIndex];
}
