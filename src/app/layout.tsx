import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localfont from "next/font/local";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const bunken = localfont({
  src: [
    {
      path: "../../public/fonts/Bunken-Tech-Sans-SC-Wide.ttf",
      weight: "300",
    },
  ],
  variable: "--font-bunken",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vriddhi | Sport Fest Of NITR",
  description: "Sport Fest Of NITR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${bunken.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer position="top-right" autoClose={5000} />
        {children}
      </body>
    </html>
  );
}

// this is layout page
