import { URL } from "./url";

export function setCookie(
  c_name: string,
  value: string,
  exdays?: number | null,
) {
  const exdate = new Date();
  exdate.setDate(exdate.getDate() + (exdays || 20 * 60 * 60 * 1000));
  const c_value =
    escape(value) +
    (exdays === null ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = c_name + "=" + c_value + ";secure";

  localStorage.setItem(c_name, value);
}

export function getCookie(c_name: string) {
  if (localStorage.getItem(c_name)) return localStorage.getItem(c_name);

  let i;
  let x;
  let y;
  const ARRcookies = document.cookie.split(";");
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x === c_name) {
      return unescape(y);
    }
  }
}

export function clearCookies() {
  const token = localStorage.getItem("token");
  fetch(`${URL}/api/cleanup`, {
    headers: {
      "X-CSRF-Token": token || "",
    },
  });

  const cookies = document.cookie.split(";");
  localStorage.clear();
  sessionStorage.clear();

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}
