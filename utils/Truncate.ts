export function truncateString(str: string) {
  if (str.length <= 50) {
    return str;
  } else {
    return str.slice(0, 50) + "...";
  }
}
