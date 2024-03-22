import type { Metadata } from "next";
import "./globals.css";



import Navbar from "./components/navbar";
import MobileMenu from "./components/mobileMenu";


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
        <MobileMenu />
        {children}
      </body>
    </html>
  );
}
