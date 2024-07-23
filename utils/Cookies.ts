export const Cookie = {
  clear() {
    const cookies = document.cookie.split(";");
    localStorage.clear();
    sessionStorage.clear();

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie =
        name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    }
  },

  set(name: string, value: string) {
    const exdate = new Date();
    exdate.setMonth(exdate.getMonth() + 3);
    const c_value = escape(value);
    document.cookie = name + "=" + c_value + ";secure";
  },

  get(name: string): string | null {
    const nameEQ = encodeURIComponent(name) + "=";

    const cookies = document.cookie;

    let cookie = cookies.trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }

    return null;
  },
};
