import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./css/globals.css";
import favIcon from './favicon.ico'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fasion",
  description: "a fasion project website ✨",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"/>
        <link rel="icon" href={favIcon.toString()} sizes="any" type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
