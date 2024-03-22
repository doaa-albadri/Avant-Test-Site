import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

import Button from "./components/button";


import logo from '../../public/images/logo.png'


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
        <div className="navbar">
          <nav className="navbar flex items-center justify-between px-20">
            <div className="flex items-center gap-1 ">
              <Image src={logo} alt="logo" />
              <h5>Nexus Creative</h5>
            </div>

            <div className="flex gap-10">
              <ul className="flex items-center gap-10">
                <li>
                  <a href="#investors">Investors</a>
                </li>
                <li>
                  <a href="#ourstory">Our Story</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <Button bgColor="bg-white" textColor="text-primary" label="Inestor Sign In" />
            </div>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
