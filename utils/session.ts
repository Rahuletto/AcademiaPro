export function setSession(name: string, data: any) {
  sessionStorage.setItem(name, JSON.stringify(data));
}

export function getSession(name: string) {
  const d = sessionStorage.getItem(name);
  try {
    if (d) return JSON.parse(d);
    else return null;
  } catch {
    return d;
  }
}
