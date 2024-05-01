import Head from 'next/head';

const Header = ({ title }: { title?: string } = { title: 'AcademiaPro' }) => (
  <Head>
    <title>{title || 'AcademiaPro'}</title>
    <link
      rel="shortcut icon"
      type="image/x-icon"
      href="/favicons/maskable.png"
    ></link>
    <link rel="manifest" href="/manifest.json" />
    {/* PWA */}
    <meta name="application-name" content="AcademiaPro" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="AcademiaPro" />
    <meta
      name="description"
      content="University data, beautifully presented at your fingertips | Built for SRM University"
    />
    <meta name="format-detection" content="telephone=no" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="msapplication-TileColor" content="#12161c" />
    <meta name="msapplication-tap-highlight" content="no" />

    <meta
      name="description"
      content="University data, beautifully presented at your fingertips | Built for SRM University"
    />

    <meta property="theme-color" content="#12161c" />
    <meta property="og:color" content="#a0aab6" />

    <meta property="og:url" content="https://academia-pro.vercel.app" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="AcademiaPro" />
    <meta
      property="og:description"
      content="University data, beautifully presented at your fingertips | Built for SRM University"
    />
    <meta property="og:image" content="/og.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="academia-pro.vercel.app" />
    <meta property="twitter:url" content="https://academia-pro.vercel.app" />
    <meta name="twitter:title" content="AcademiaPro" />
    <meta
      name="twitter:description"
      content="University data, beautifully presented at your fingertips | Built for SRM University"
    />
    <meta name="twitter:image" content="/og.png" />
    <meta name="twitter:creator" content="@rahul_marban" />

    <meta
      name="google-site-verification"
      content="0Cmv3J0IwkFN7JLhsv8jWAnIlX3SaPHFrlIlWy4kzK4"
    />
  </Head>
);

export default Header;
