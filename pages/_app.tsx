import '@/styles/globals.css';
import '@/styles/academia.css'

import 'bootstrap/dist/css/bootstrap.css';
import 'react-loading-skeleton/dist/skeleton.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Analytics } from '@vercel/analytics/react';
import { Inter} from 'next/font/google';
import { Component } from 'react';
import ErrorStack from "./error"

const inter = Inter({
  fallback: ['sans-serif'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--main-font',
});

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <style jsx global>
        {`
          html {
            --main-font: ${inter.style.fontFamily};
          }
        `}
      </style>

      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/favicon.svg"></link>
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
        <meta name="twitter:creator" content="@SRMStudents" />

        <meta
          name="google-site-verification"
          content="0Cmv3J0IwkFN7JLhsv8jWAnIlX3SaPHFrlIlWy4kzK4"
        />
      </Head>

      <Analytics />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
}

type ErrorBound = {
  hasError: boolean;
  error: Error;
};
class ErrorBoundary extends Component {
  constructor(props: ErrorBound | Readonly<ErrorBound>) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error };
  }
  componentDidCatch(error: Error, errorInfo: { componentStack: string }) {
    console.warn({ error, errorInfo });
  }
  render() {
    if ((this.state as ErrorBound).hasError) {
      return <ErrorStack error={(this.state as ErrorBound).error} />;
    }
    // @ts-expect-error
    return this.props.children;
  }
}