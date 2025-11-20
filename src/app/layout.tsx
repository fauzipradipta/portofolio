import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syawadhilah Fauzi Pradipta",
  description: "Syawadhilah Fauzi Pradipta's Personal Portfolio Website",
  icons: {
    icon:  '/icon3.png', 
    shortcut: '/icon3.png', 
    apple: '/icon3.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid-background"/>
        {children}
      </body>
    </html>
  );
}