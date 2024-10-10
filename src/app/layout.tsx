
import BootstrapClient from "@components/BootstrapClient"
import type { Metadata } from "next";
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.css';
import "./ort.css"
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
