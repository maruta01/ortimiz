
import BootstrapClient from "../components/BootstrapClient"
import type { Metadata } from "next";
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.css';
import "./ort.css"
import "./globals.css";
import React from "react";
import Navbar from "../components/Navbar";
import 'bootstrap-icons/font/bootstrap-icons.css';

import '@fontsource/kanit'; // Defaults to weight 400
import '@fontsource/kanit/300.css'; // Weight 400
import '@fontsource/kanit/400.css'; // Weight 400
import '@fontsource/kanit/500.css'; // Weight 400
import '@fontsource/kanit/600.css'; // Weight 400
import '@fontsource/kanit/700.css'; // Weight 700


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
        <BootstrapClient />
      </head>
      <body>
        <Navbar />

        {children}
      </body>
    </html>

  );
}
