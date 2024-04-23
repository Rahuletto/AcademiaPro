import "@/styles/globals.css";
import "@/styles/academia.css";

import "react-loading-skeleton/dist/skeleton.css";

import type { AppProps } from "next/app";

import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { Component } from "react";
import ErrorStack from "./error";
import Script from "next/script";

const inter = Inter({
  fallback: ["sans-serif"],
  weight: ["500", "600"],
  display: "swap",
  style: ["normal"],
  subsets: ["latin"],
  variable: "--main-font",
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
      <Analytics />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WP4J311ZNK"
      ></Script>

      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WP4J311ZNK');
          `,
        }}
      />

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
