import type { Metadata } from "next";
import localFont from "next/font/local"
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmSans = IBM_Plex_Mono({
  variable: "--font-ibm",
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin']
});

const satoshiMono = localFont({
  src: "../public/fonts/Satoshi-Medium.woff2"
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
        className={`${ibmSans.className} ${satoshiMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
