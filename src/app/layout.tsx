import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Laptop from "lucide-react"
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
    icon: [
      {
        url: '/assets/icon.png',
        sizes: '16x16',
      },
      {
        url: '/assets/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ]
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