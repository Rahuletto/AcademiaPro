import runtimeCaching from "next-pwa/cache.js";
import pwa from "next-pwa";

const withPWA = pwa({
  dest: "public/serviceWorker",
  runtimeCaching,
  register: true,
  reloadOnOnline: true,
  cacheOnFrontEndNav: true,
  disable: process.env.NODE_ENV === "development",
  skipWaiting: true,
  fallbacks: {
    document: "/offline",
  },
});

const conf = {
  poweredByHeader: false,
  swcMinify: true,
  reactStrictMode: true,
  compress: true,
  experimental: {
    turbo: {
      resolveExtensions: [
        ".mdx",
        ".tsx",
        ".ts",
        ".jsx",
        ".js",
        ".mjs",
        ".json",
      ],
    },
  },
};

export default withPWA(conf);
