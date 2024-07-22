export function setCookie(c_name: string, value: string, exdays?: number | null): void {
  const exdate = new Date();
 exdate.setDate(exdate.getDate() + (exdays || 31 * 24 * 60 * 60 * 1000));
const c_value = escape(value) + (exdays === null ? "" : "; expires=" + exdate.toUTCString());
 document.cookie = c_name + "=" + c_value + ";secure";
}

export function getCookie(c_name: string) {
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
  localStorage.clear();
  sessionStorage.clear();

  document.cookie.split(";").forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
}
