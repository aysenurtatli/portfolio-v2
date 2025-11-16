"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background";
import { Suspense } from "react";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased bg-zinc-950 bg-[url(/images/background.png)] bg-cover bg-fixed bg-center bg-no-repeat`}
      >
        <Background />
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <main>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
