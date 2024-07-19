if (!self.define) {
  let e,
    s = {};
  const c = (c, a) => (
    (c = new URL(c + ".js", a).href),
    s[c] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = c), (e.onload = s), document.head.appendChild(e);
        } else (e = c), importScripts(c), s();
      }).then(() => {
        let e = s[c];
        if (!e) throw new Error(`Module ${c} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, n) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let t = {};
    const r = (e) => c(e, i),
      f = { module: { uri: i }, exports: t, require: r };
    s[i] = Promise.all(a.map((e) => f[e] || r(e))).then((e) => (n(...e), t));
  };
}
define(["./workbox-9b4d2a02"], function (e) {
  "use strict";
  importScripts("fallback-IDYaLPxhUZBt8jombsSet.js"),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/IDYaLPxhUZBt8jombsSet/_buildManifest.js",
          revision: "71e023b9a30a5286345df19475c5f1a1",
        },
        {
          url: "/_next/static/IDYaLPxhUZBt8jombsSet/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/186.9b1d767ef2cd811d.js",
          revision: "9b1d767ef2cd811d",
        },
        {
          url: "/_next/static/chunks/3a17f596-d859ffe565e942f3.js",
          revision: "d859ffe565e942f3",
        },
        {
          url: "/_next/static/chunks/424-37090e041c1bcfe6.js",
          revision: "37090e041c1bcfe6",
        },
        {
          url: "/_next/static/chunks/4577d2ec-1aede1a8a82c0726.js",
          revision: "1aede1a8a82c0726",
        },
        {
          url: "/_next/static/chunks/58.332b090c5ef5092b.js",
          revision: "332b090c5ef5092b",
        },
        {
          url: "/_next/static/chunks/646e0218-6f6867573bb19954.js",
          revision: "6f6867573bb19954",
        },
        {
          url: "/_next/static/chunks/69480c19-c2079e59350655fb.js",
          revision: "c2079e59350655fb",
        },
        {
          url: "/_next/static/chunks/696-c776ea8e256c02e8.js",
          revision: "c776ea8e256c02e8",
        },
        {
          url: "/_next/static/chunks/874.271bec33207150d0.js",
          revision: "271bec33207150d0",
        },
        {
          url: "/_next/static/chunks/cb355538-671650ac643ac2ac.js",
          revision: "671650ac643ac2ac",
        },
        {
          url: "/_next/static/chunks/ebc70433-be863c9a171e9e91.js",
          revision: "be863c9a171e9e91",
        },
        {
          url: "/_next/static/chunks/framework-ecc4130bc7a58a64.js",
          revision: "ecc4130bc7a58a64",
        },
        {
          url: "/_next/static/chunks/main-c96cd52e568f72f2.js",
          revision: "c96cd52e568f72f2",
        },
        {
          url: "/_next/static/chunks/pages/404-f6084bfaa9043d8f.js",
          revision: "f6084bfaa9043d8f",
        },
        {
          url: "/_next/static/chunks/pages/_app-a4345c30a5d19443.js",
          revision: "a4345c30a5d19443",
        },
        {
          url: "/_next/static/chunks/pages/_error-9aa9e13bd09fd2da.js",
          revision: "9aa9e13bd09fd2da",
        },
        {
          url: "/_next/static/chunks/pages/_offline-05bff8d0b738f925.js",
          revision: "05bff8d0b738f925",
        },
        {
          url: "/_next/static/chunks/pages/academia-a0bef0c95c8a80d8.js",
          revision: "a0bef0c95c8a80d8",
        },
        {
          url: "/_next/static/chunks/pages/calendar-0485bd9c7a1e5261.js",
          revision: "0485bd9c7a1e5261",
        },
        {
          url: "/_next/static/chunks/pages/courses-67a44c2819d7a4ea.js",
          revision: "67a44c2819d7a4ea",
        },
        {
          url: "/_next/static/chunks/pages/error-e6ea46316575711d.js",
          revision: "e6ea46316575711d",
        },
        {
          url: "/_next/static/chunks/pages/index-8672211436480f72.js",
          revision: "8672211436480f72",
        },
        {
          url: "/_next/static/chunks/pages/links-d6d3f8a7b59d563e.js",
          revision: "d6d3f8a7b59d563e",
        },
        {
          url: "/_next/static/chunks/pages/login-73cbc91fbd44d317.js",
          revision: "73cbc91fbd44d317",
        },
        {
          url: "/_next/static/chunks/pages/offline-13516437c1ae1852.js",
          revision: "13516437c1ae1852",
        },
        {
          url: "/_next/static/chunks/pages/results-250c5266fa480e84.js",
          revision: "250c5266fa480e84",
        },
        {
          url: "/_next/static/chunks/pages/timetable-f47f731044cd612d.js",
          revision: "f47f731044cd612d",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-6343742d9eb30d2f.js",
          revision: "6343742d9eb30d2f",
        },
        {
          url: "/_next/static/css/022f0111895944dd.css",
          revision: "022f0111895944dd",
        },
        {
          url: "/_next/static/css/147ae4edcee80e0a.css",
          revision: "147ae4edcee80e0a",
        },
        {
          url: "/_next/static/css/1c688354fd40245d.css",
          revision: "1c688354fd40245d",
        },
        {
          url: "/_next/static/css/2505c1c75e7c040f.css",
          revision: "2505c1c75e7c040f",
        },
        {
          url: "/_next/static/css/28fda73d46521c55.css",
          revision: "28fda73d46521c55",
        },
        {
          url: "/_next/static/css/4fd4902287ba4a68.css",
          revision: "4fd4902287ba4a68",
        },
        {
          url: "/_next/static/css/530c21f7ea29d3f9.css",
          revision: "530c21f7ea29d3f9",
        },
        {
          url: "/_next/static/css/78c627d2d31962a2.css",
          revision: "78c627d2d31962a2",
        },
        {
          url: "/_next/static/css/b90eacc4e7719584.css",
          revision: "b90eacc4e7719584",
        },
        {
          url: "/_next/static/css/c749535633f51ff1.css",
          revision: "c749535633f51ff1",
        },
        {
          url: "/_next/static/css/e7126f440c23c456.css",
          revision: "e7126f440c23c456",
        },
        {
          url: "/_next/static/media/05a31a2ca4975f99-s.woff2",
          revision: "f1b44860c66554b91f3b1c81556f73ca",
        },
        {
          url: "/_next/static/media/513657b02c5c193f-s.woff2",
          revision: "c4eb7f37bc4206c901ab08601f21f0f2",
        },
        {
          url: "/_next/static/media/51ed15f9841b9f9d-s.woff2",
          revision: "bb9d99fb9bbc695be80777ca2c1c2bee",
        },
        {
          url: "/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",
          revision: "74c3556b9dad12fb76f84af53ba69410",
        },
        {
          url: "/_next/static/media/d6b16ce4a6175f26-s.woff2",
          revision: "dd930bafc6297347be3213f22cc53d3e",
        },
        {
          url: "/_next/static/media/ec159349637c90ad-s.woff2",
          revision: "0e89df9522084290e01e4127495fae99",
        },
        {
          url: "/_next/static/media/fd4db3eb5472fc27-s.woff2",
          revision: "71f3fcaf22131c3368d9ec28ef839831",
        },
        { url: "/_offline", revision: "IDYaLPxhUZBt8jombsSet" },
        { url: "/docs.pdf", revision: "3e052ef8c611f67829236d88ebdd865e" },
        { url: "/fallback.png", revision: "50624943e2672ba4d510fb653fb006ae" },
        { url: "/favicon.svg", revision: "2a9b191efbb83763311e8984c470392c" },
        {
          url: "/favicons/128.png",
          revision: "d2abb501ac0da617f2369db2c7cb98f0",
        },
        {
          url: "/favicons/144.png",
          revision: "1e84410363eaa7771b8f44e15e8e65bf",
        },
        {
          url: "/favicons/192.png",
          revision: "639de5e7ce4d9d9be038f5abc5f58bcd",
        },
        {
          url: "/favicons/256.png",
          revision: "3df47f126e9ba57ab70eadfa9bc3d511",
        },
        {
          url: "/favicons/android-launchericon-144-144.png",
          revision: "1e84410363eaa7771b8f44e15e8e65bf",
        },
        {
          url: "/favicons/android-launchericon-192-192.png",
          revision: "639de5e7ce4d9d9be038f5abc5f58bcd",
        },
        {
          url: "/favicons/android-launchericon-512-512.png",
          revision: "119bd0070e6f72c069100e1259d13a6b",
        },
        {
          url: "/favicons/maskable.png",
          revision: "c288f4c00dd3b7ced663649c23973e38",
        },
        {
          url: "/favicons/mono.png",
          revision: "46feaabea2d37fcb918dda7d5546fe37",
        },
        {
          url: "/fonts/Poppins-SemiBold.ttf",
          revision: "6f1520d107205975713ba09df778f93f",
        },
        { url: "/manifest.json", revision: "ae1023b7cc869309732aea062b6907e8" },
        { url: "/og.png", revision: "4f0c6ce3efd7404654e370c3d276d671" },
        { url: "/robots.txt", revision: "2dcf921680d38b4c6cc60fcdc72d5851" },
        {
          url: "/screenshot/narrow.png",
          revision: "c9c72cf5d659a9684b5215b813fac110",
        },
        {
          url: "/screenshot/wide.png",
          revision: "8fd84a33b12f769dd51b2db50de8ec15",
        },
        {
          url: "/shortcuts/attendance.png",
          revision: "0f4df0a970f844df58c57e4b982a4fb0",
        },
        {
          url: "/shortcuts/calendar.png",
          revision: "30d5d38b9848e976ec0821a115577a4e",
        },
        {
          url: "/shortcuts/marks.png",
          revision: "7af9027f7a40260d2705b3fd5e084604",
        },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: c,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET",
    );
});
