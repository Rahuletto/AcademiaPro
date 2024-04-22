/** @type {import('next').NextConfig} */

import pwa from 'next-pwa';
const withPWA = pwa({
  dest: 'public/serviceWorker',
  register: true,
  disable: process.env.NODE_ENV === "development"
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
      {
        source: '/map',
        destination: 'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/06/srmist-ktr-campus-layout.jpg',
        permanent: true
      },
      {
        source: '/ssr',
        destination: 'https://academia.srmist.edu.in/#Form:Student_Service_Requests_SSR',
        permanent: true
      }
    ]
  }
})

export default config;
