import type { Metadata } from "next";
import "./globals.css";
import { widolte } from "./fonts";

export const metadata: Metadata = {
  title: "Webfusion",
  description: "Webfusion Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={widolte.className}>{children}</body>
    </html>
  );
}
