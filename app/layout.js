'use client'
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const roboto = Roboto({
  subsets: ["latin"], weight: ["400", "500", "700"]
});


export default function RootLayout({ children }) {




  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased bg-zinc-950`}
      >
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
