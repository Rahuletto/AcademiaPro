import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

export const metadata: Metadata = {
  title: "AcademiaPro",
  description: "📖 University data, beautifully presented at your fingertips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-screen ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="h-screen">{children}</body>
    </html>
  );
}
