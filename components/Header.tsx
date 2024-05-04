import { LogoJsonLd, NextSeo } from 'next-seo';
import Head from 'next/head';
import Script from 'next/script';

const Header = ({ title }: { title?: string } = { title: 'AcademiaPro' }) => (
  <>
    <Head>
      <NextSeo
        title={title || 'AcademiaPro'}
        description="University data, beautifully presented at your fingertips | Built for SRM University"
        canonical="https://academia-pro.vercel.app/"
        openGraph={{
          url: 'https://academia-pro.vercel.app',
          title: 'AcademiaPro',
          description:
            'University data, beautifully presented at your fingertips | Built for SRM University',
          images: [
            {
              url: '/og.png',

              alt: 'Academia Pro',
              type: 'image/png',
            },
          ],
          siteName: 'AcademiaPro',
        }}
        twitter={{
          handle: '@rahul_marban',
          cardType: 'summary_large_image',
        }}
      />

      <title>{title || 'AcademiaPro'}</title>

      <LogoJsonLd
        logo="/public/favicon.svg"
        url="https://academia-pro.vercel.app"
      />

      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/favicons/256.png"
      ></link>
      <link key="icon" rel="icon" href={'/favicons/256.png'} />
      <link rel="manifest" href="/manifest.json" />
      {/* PWA */}
      <meta name="application-name" content="AcademiaPro" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="AcademiaPro" />

      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#12161c" />
      <meta name="msapplication-tap-highlight" content="no" />

      <meta property="theme-color" content="#12161c" />
      <meta property="og:color" content="#a0aab6" />
      <meta
        name="keywords"
        content="academia pro, academia srm, srm, academiapro vercel, academia, srm pro, academia info, university, srmcheck, srm check me, student portal, srm student, srm university, timetable, calendar, srm calendar, srm mess, academia website"
      />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      <meta
        name="google-site-verification"
        content="0Cmv3J0IwkFN7JLhsv8jWAnIlX3SaPHFrlIlWy4kzK4"
      />
    </Head>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'WebSite',
          name: 'AcademiaPro',
          url: 'https://academia-pro.vercel.app',
        }),
      }}
    />
  </>
);

export default Header;
