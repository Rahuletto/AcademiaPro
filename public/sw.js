if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, c) => {
    const i =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[i]) return;
    let r = {};
    const t = (e) => a(e, i),
      f = { module: { uri: i }, exports: r, require: t };
    s[i] = Promise.all(n.map((e) => f[e] || t(e))).then((e) => (c(...e), r));
  };
}
define(['./workbox-9b4d2a02'], function (e) {
  'use strict';
  importScripts('fallback-FwQqSf35vJnaGC-74MY9m.js'),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/FwQqSf35vJnaGC-74MY9m/_buildManifest.js',
          revision: '22a511d35b0941319eb9b571c8058584',
        },
        {
          url: '/_next/static/FwQqSf35vJnaGC-74MY9m/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/276-ba348c665f59f7d1.js',
          revision: 'ba348c665f59f7d1',
        },
        {
          url: '/_next/static/chunks/2b7b2d2a-46368db76fb759e2.js',
          revision: '46368db76fb759e2',
        },
        {
          url: '/_next/static/chunks/3a17f596-3fed1a3b47535834.js',
          revision: '3fed1a3b47535834',
        },
        {
          url: '/_next/static/chunks/4577d2ec-1aede1a8a82c0726.js',
          revision: '1aede1a8a82c0726',
        },
        {
          url: '/_next/static/chunks/458.f4d62a6585aa5310.js',
          revision: 'f4d62a6585aa5310',
        },
        {
          url: '/_next/static/chunks/5727625e-d03d84699e3fb546.js',
          revision: 'd03d84699e3fb546',
        },
        {
          url: '/_next/static/chunks/664-806b52bf69b97e98.js',
          revision: '806b52bf69b97e98',
        },
        {
          url: '/_next/static/chunks/69480c19-b1426c44f47718f4.js',
          revision: 'b1426c44f47718f4',
        },
        {
          url: '/_next/static/chunks/705.4217beb8ae640461.js',
          revision: '4217beb8ae640461',
        },
        {
          url: '/_next/static/chunks/876-071e9803894ff5d3.js',
          revision: '071e9803894ff5d3',
        },
        {
          url: '/_next/static/chunks/950.c96f4caf2bbe8abe.js',
          revision: 'c96f4caf2bbe8abe',
        },
        {
          url: '/_next/static/chunks/987-6614b83f400b47a3.js',
          revision: '6614b83f400b47a3',
        },
        {
          url: '/_next/static/chunks/framework-2c16ac744b6cdea6.js',
          revision: '2c16ac744b6cdea6',
        },
        {
          url: '/_next/static/chunks/main-44343bc394548d4c.js',
          revision: '44343bc394548d4c',
        },
        {
          url: '/_next/static/chunks/pages/404-bff392a971220a06.js',
          revision: 'bff392a971220a06',
        },
        {
          url: '/_next/static/chunks/pages/_app-d056a11426ffa54b.js',
          revision: 'd056a11426ffa54b',
        },
        {
          url: '/_next/static/chunks/pages/_error-77823ddac6993d35.js',
          revision: '77823ddac6993d35',
        },
        {
          url: '/_next/static/chunks/pages/_offline-05bff8d0b738f925.js',
          revision: '05bff8d0b738f925',
        },
        {
          url: '/_next/static/chunks/pages/academia-dec0f665075820df.js',
          revision: 'dec0f665075820df',
        },
        {
          url: '/_next/static/chunks/pages/calendar-c46ec23b97c7f2af.js',
          revision: 'c46ec23b97c7f2af',
        },
        {
          url: '/_next/static/chunks/pages/docs-32a8bdce1d94d342.js',
          revision: '32a8bdce1d94d342',
        },
        {
          url: '/_next/static/chunks/pages/error-e6ea46316575711d.js',
          revision: 'e6ea46316575711d',
        },
        {
          url: '/_next/static/chunks/pages/index-f3871510bb395e8b.js',
          revision: 'f3871510bb395e8b',
        },
        {
          url: '/_next/static/chunks/pages/links-d6775fade5f4c572.js',
          revision: 'd6775fade5f4c572',
        },
        {
          url: '/_next/static/chunks/pages/login-44d719d89aee450c.js',
          revision: '44d719d89aee450c',
        },
        {
          url: '/_next/static/chunks/pages/offline-141dd770edbda33b.js',
          revision: '141dd770edbda33b',
        },
        {
          url: '/_next/static/chunks/pages/timetable-d7f60d085fabadaf.js',
          revision: 'd7f60d085fabadaf',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-314b98339c2903ef.js',
          revision: '314b98339c2903ef',
        },
        {
          url: '/_next/static/css/368d11387ab568af.css',
          revision: '368d11387ab568af',
        },
        {
          url: '/_next/static/css/534a413e1d480c8f.css',
          revision: '534a413e1d480c8f',
        },
        {
          url: '/_next/static/css/8f50940a4b23050f.css',
          revision: '8f50940a4b23050f',
        },
        {
          url: '/_next/static/css/982c6375484fc35a.css',
          revision: '982c6375484fc35a',
        },
        {
          url: '/_next/static/css/9a00b421258dad14.css',
          revision: '9a00b421258dad14',
        },
        {
          url: '/_next/static/css/a0684f29416a8b5e.css',
          revision: 'a0684f29416a8b5e',
        },
        {
          url: '/_next/static/css/bd8aee4c4ffcc380.css',
          revision: 'bd8aee4c4ffcc380',
        },
        {
          url: '/_next/static/css/d91d3959baa6a4eb.css',
          revision: 'd91d3959baa6a4eb',
        },
        {
          url: '/_next/static/css/e0844d90979f1780.css',
          revision: 'e0844d90979f1780',
        },
        {
          url: '/_next/static/css/ef06e1bf9352364f.css',
          revision: 'ef06e1bf9352364f',
        },
        {
          url: '/_next/static/media/05a31a2ca4975f99-s.woff2',
          revision: 'f1b44860c66554b91f3b1c81556f73ca',
        },
        {
          url: '/_next/static/media/513657b02c5c193f-s.woff2',
          revision: 'c4eb7f37bc4206c901ab08601f21f0f2',
        },
        {
          url: '/_next/static/media/51ed15f9841b9f9d-s.woff2',
          revision: 'bb9d99fb9bbc695be80777ca2c1c2bee',
        },
        {
          url: '/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2',
          revision: '74c3556b9dad12fb76f84af53ba69410',
        },
        {
          url: '/_next/static/media/d6b16ce4a6175f26-s.woff2',
          revision: 'dd930bafc6297347be3213f22cc53d3e',
        },
        {
          url: '/_next/static/media/ec159349637c90ad-s.woff2',
          revision: '0e89df9522084290e01e4127495fae99',
        },
        {
          url: '/_next/static/media/fd4db3eb5472fc27-s.woff2',
          revision: '71f3fcaf22131c3368d9ec28ef839831',
        },
        { url: '/_offline', revision: 'FwQqSf35vJnaGC-74MY9m' },
        { url: '/docs.pdf', revision: '3e052ef8c611f67829236d88ebdd865e' },
        { url: '/fallback.png', revision: '50624943e2672ba4d510fb653fb006ae' },
        { url: '/favicon.svg', revision: '77d1e86bcca2abda2feed90e9f7c70e3' },
        {
          url: '/favicons/128.png',
          revision: 'd2abb501ac0da617f2369db2c7cb98f0',
        },
        {
          url: '/favicons/144.png',
          revision: '1e84410363eaa7771b8f44e15e8e65bf',
        },
        {
          url: '/favicons/192.png',
          revision: '639de5e7ce4d9d9be038f5abc5f58bcd',
        },
        {
          url: '/favicons/256.png',
          revision: '3df47f126e9ba57ab70eadfa9bc3d511',
        },
        {
          url: '/favicons/android-launchericon-144-144.png',
          revision: '1e84410363eaa7771b8f44e15e8e65bf',
        },
        {
          url: '/favicons/android-launchericon-192-192.png',
          revision: '639de5e7ce4d9d9be038f5abc5f58bcd',
        },
        {
          url: '/favicons/android-launchericon-512-512.png',
          revision: '119bd0070e6f72c069100e1259d13a6b',
        },
        {
          url: '/favicons/maskable.png',
          revision: 'c288f4c00dd3b7ced663649c23973e38',
        },
        {
          url: '/favicons/mono.png',
          revision: '46feaabea2d37fcb918dda7d5546fe37',
        },
        { url: '/manifest.json', revision: '213f3b58079f7b2273c9912d4db39816' },
        { url: '/og.png', revision: '4f0c6ce3efd7404654e370c3d276d671' },
        { url: '/robots.txt', revision: 'fa1ded1ed7c11438a9b0385b1e112850' },
        {
          url: '/screenshot/narrow.png',
          revision: 'c9c72cf5d659a9684b5215b813fac110',
        },
        {
          url: '/screenshot/wide.png',
          revision: '8fd84a33b12f769dd51b2db50de8ec15',
        },
        {
          url: '/shortcuts/attendance.png',
          revision: '0f4df0a970f844df58c57e4b982a4fb0',
        },
        {
          url: '/shortcuts/calendar.png',
          revision: '30d5d38b9848e976ec0821a115577a4e',
        },
        {
          url: '/shortcuts/marks.png',
          revision: '7af9027f7a40260d2705b3fd5e084604',
        },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    );
});
