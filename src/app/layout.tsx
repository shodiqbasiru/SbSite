import "@/assets/globals.css";
import "primereact/resources/themes/lara-dark-amber/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MSFB Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex gap-x-8 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
