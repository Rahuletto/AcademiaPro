import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { cookies } from "next/headers";
import { Themes } from "@/misc/theme";
import { ViewTransitions } from "next-view-transitions";
import { ReactNode } from "react";
import ErrorBoundary from "./Boundary";
import { DataProvider } from "@/provider/DataProvider";
import { PlannerProvider } from "@/provider/DataCalProvider";

const APP_NAME = "ClassPro";
const APP_DEFAULT_TITLE = "ClassPro";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION =
  "📖 University data, beautifully presented at your fingertips";
const PRODUCTION_URL = "https://academia-pro.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? PRODUCTION_URL
      : "http://localhost:0243",
  ),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [
      {
        url: "/images/og.png",
        width: 1280,
        height: 720,
        alt: APP_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: ["/images/og.png"],
  },
  icons: {
    icon: [
      {
        url: "/icons/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icons/maskable_icon_x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const key = cookies().get("key");
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`dark h-screen bg-light-background-normal dark:bg-dark-background-normal ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <ErrorBoundary>
          <ThemeProvider>
            <meta
              name="theme-color"
              media="(prefers-color-scheme: dark)"
              content={Themes.dark.background.normal}
            />
            <meta
              name="theme-color"
              media="(prefers-color-scheme: light)"
              content={Themes.light.background.normal}
            />

            <meta name="theme-color" content={Themes.dark.background.normal} />

            <body className="h-screen">
              <Analytics />
              {key && key.value ? (
                <GroupProviders>{children}</GroupProviders>
              ) : (
                children
              )}
            </body>
          </ThemeProvider>
        </ErrorBoundary>
      </html>
    </ViewTransitions>
  );
}

function GroupProviders({ children }: { children: ReactNode }) {
  return (
    <PlannerProvider>
      <DataProvider>{children}</DataProvider>
    </PlannerProvider>
  );
}
