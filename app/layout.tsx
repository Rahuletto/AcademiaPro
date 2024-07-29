import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { UserProvider } from "@/provider/UserProvider";

import "./globals.css";
import { DayProvider } from "@/provider/DayProvider";
import { TableProvider } from "@/provider/TimetableProvider";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { MarksProvider } from "@/provider/MarksProvider";
import { cookies } from "next/headers";
import { Themes } from "@/theme";
import { ViewTransitions } from "next-view-transitions";
import { AttendanceProvider } from "@/provider/AttendanceProvider";

const APP_NAME = "AcademiaPro";
const APP_DEFAULT_TITLE = "AcademiaPro";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION =
  "📖 University data, beautifully presented at your fingertips";

export const metadata: Metadata = {
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
    // startUpImage: [],
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
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
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

          {key && key.value ? (
            <UserProvider>
              <MarksProvider>
                <DayProvider>
                  <TableProvider>
                    <AttendanceProvider>
                      <body className="h-screen">{children}</body>
                    </AttendanceProvider>
                  </TableProvider>
                </DayProvider>
              </MarksProvider>
            </UserProvider>
          ) : (
            <body className="h-screen">{children}</body>
          )}
        </ThemeProvider>
      </html>
    </ViewTransitions>
  );
}
