import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { ReactLenis } from "lenis/react";

import { Cursor } from "@/components/cursor";
import { Montserrat } from "next/font/google";

const sinisuka = localFont({
  src: "./fonts/sinisuka-webfont.woff",
  variable: "--font-sinisuka",
  weight: "100 900",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Ilimitado Studio - Replicate",
  description: "Replicated by Fandi Ilham",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sinisuka.variable} ${montserrat.className} antialiased overflow-hidden`}
      >
        <Header />
        <ReactLenis root>{children}</ReactLenis>
        <Cursor />
      </body>
    </html>
  );
}
