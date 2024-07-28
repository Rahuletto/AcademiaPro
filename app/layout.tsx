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

export const metadata: Metadata = {
  title: "AcademiaPro",
  description: "📖 University data, beautifully presented at your fingertips",
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
                  <body className="h-screen">{children}</body>
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
