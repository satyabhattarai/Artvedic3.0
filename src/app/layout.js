"use client";

import "./globals.css";
import "aos/dist/aos.css";

import { Geist, Geist_Mono } from "next/font/google";

import AOS from "aos";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true, // Only animate once
      });
    }
  }, []);
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto mt-8">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
