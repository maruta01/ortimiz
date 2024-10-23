
import BootstrapClient from "../components/BootstrapClient"
import type { Metadata } from "next";
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.css';
import "./ort.css"
import "./globals.css";
import Link from 'next/link'
import React from "react";
import Navbar from "../components/Navbar";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ORTIMIZ",
  description: "KPI and Action Execution",
  icons: "/images/logo/Brand-Logo_0.svg"
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        <BootstrapClient />
      </head>
      <body>
        <Navbar />

        {children}
      </body>
    </html>

  );
}
