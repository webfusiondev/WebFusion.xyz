import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ki } from "./fonts";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={ki.className}>{children}</body>
    </html>
  );
}
