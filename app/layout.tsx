import type { Metadata } from "next";
import localFont from "next/font/local"
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmSans = IBM_Plex_Mono({
  variable: "--font-ibm-sans",
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin']
});

const tungstenSans = localFont({
  src: "../public/fonts/tungsten/tungsten-narrow-bold.woff2",
  variable: "--font-tungsten-sans"
});

const satoshiMono = localFont({
  src: "../public/fonts/satoshi/Satoshi-Medium.woff2",
  variable: "--font-satoshi-mono"
});

export const metadata: Metadata = {
  title: "Kai Pereira!",
  description: "Welcome to my world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tungstenSans.variable} ${ibmSans.variable} ${satoshiMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
