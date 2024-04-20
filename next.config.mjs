/** @type {import('next').NextConfig} */

import pwa from 'next-pwa';
const withPWA = pwa({
  dest: 'public/serviceWorker',
});

const config = withPWA({
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
  async redirects() {
    return [
      {
        source: '/betterlab',
        destination: 'https://better-lab.vercel.app',
        permanent: true,
      },
    ]
  }
});

export default config;