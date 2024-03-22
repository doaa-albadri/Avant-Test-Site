import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

import Button from "./components/button";


import logo from '../../public/images/logo.png'
import Navbar from "./components/navbar";


export const metadata: Metadata = {
  title: "Test Site",
  description: "Avant Frontend Developer Test Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">

      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
