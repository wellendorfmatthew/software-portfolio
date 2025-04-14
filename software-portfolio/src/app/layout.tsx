import type { Metadata } from "next";
import { Noto_Sans, Roboto } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  display: "swap"
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap"
});

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Matthew Wellendorf Portfolio",
  description: "My Sotware Developer Repertoire",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
