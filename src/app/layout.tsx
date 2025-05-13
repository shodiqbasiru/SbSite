"use client";

// import type { Metadata } from "next";
// import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react";
import {
  Alegreya_SC,
  Anonymous_Pro,
  IBM_Plex_Mono,
  Roboto_Mono,
} from "next/font/google";

import "primereact/resources/themes/lara-dark-amber/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import "@/assets/globals.css";

// const geistSans = localFont({
//   src: "../assets/fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "../assets/fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const alegreyaSC = Alegreya_SC({
  subsets: ["latin"],
  variable: "--font-alegreya-sc",
  weight: "400",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: "400",
});

const anonymousPro = Anonymous_Pro({
  subsets: ["latin"],
  variable: "--font-anonymous-pro",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${alegreyaSC.variable} ${ibmPlexMono.variable} ${anonymousPro.variable} ${"font-body"} ${"antialiased"} ${"min-h-screen"} ${"overflow-hidden"} ${"flex flex-col gap-0 antialiased lg:flex-row lg:gap-8"} flex flex-col gap-0 antialiased lg:flex-row lg:gap-8`}
      >
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
