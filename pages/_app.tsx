import "@/styles/academia.css";
import "@/styles/globals.css";

import "react-loading-skeleton/dist/skeleton.css";

import type { AppProps } from "next/app";

import { AppProvider } from "@/providers";
import { clearCookies } from "@/utils/cookies";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { Component, useEffect } from "react";
import ErrorStack from "./error";

const inter = Inter({
  fallback: ["sans-serif"],
  weight: ["500", "600"],
  display: "swap",
  style: ["normal"],
  subsets: ["latin"],
  variable: "--main-font",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const datas = localStorage.length;
    if (datas > 0) {
      localStorage.clear();
      router.push("/login");
    }
  }, []);
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
      <GoogleAnalytics gaId="G-WP4J311ZNK" />
      <GoogleTagManager gtmId="G-WP4J311ZNK" />
      <AppProvider>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </AppProvider>
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
    console.log(error);
    return { hasError: true, error: error };
  }
  componentDidCatch(error: Error, errorInfo: { componentStack: string }) {
    console.warn({ error, errorInfo });
  }
  render() {
    if ((this.state as ErrorBound).hasError) {
      console.log((this.state as any)?.error);
      return <ErrorStack error={(this.state as ErrorBound).error} />;
    }
    // @ts-expect-error
    return this.props.children;
  }
}
