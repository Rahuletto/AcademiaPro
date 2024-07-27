import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { UserProvider } from "@/provider/UserProvider";

import "./globals.css";
import { DayProvider } from "@/provider/DayProvider";
import { TableProvider } from "@/provider/TimetableProvider";
import { ThemeProvider } from "@/provider/ThemeProvider";

export const metadata: Metadata = {
  title: "AcademiaPro",
  description: "📖 University data, beautifully presented at your fingertips",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-screen dark dark:bg-dark-background-normal bg-light-background-normal ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <ThemeProvider>
        <UserProvider>
          <DayProvider>
            <TableProvider>
              <body className="h-screen">{children}</body>
            </TableProvider>
          </DayProvider>
        </UserProvider>
      </ThemeProvider>
    </html>
  );
}
