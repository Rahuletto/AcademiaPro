/** @type {import('next').NextConfig} */

import pwa from "next-pwa";

const withPWA = pwa({
  dest: "public/serviceWorker",
  register: true,
  disable: process.env.NODE_ENV === "development",
  skipWaiting: true,
  fallbacks: {
    image: "/fallback.png",
    document: "/_offline",
  },
});

const conf = {
  poweredByHeader: false,
  swcMinify: true,
  reactStrictMode: true,
  compress: true,
  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    };
    return config;
  },
};

export default withPWA(conf);
