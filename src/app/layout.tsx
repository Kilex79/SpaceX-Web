'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { oxanium } from "./fonts";
import Link from "next/link";
import navbarStyles from "./navbarStyles";
import Image from 'next/image';
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  return (
    <html lang="en">
      <body className={oxanium.className}>

        <div className="flex flex-col md:flex-row items-center justify-between shadow-xl bg-gray-50 md:h-20 px-4">
          <div className="flex items-center space-x-4 md:space-x-10">

            {/* Logo */}
            <div className="h-10 w-10 relative">
              <Image src="/images/rabbit.png" alt="Logo" layout="fill" objectFit="contain" />
            </div>

            <Link href="/">
              <div 
                style={navbarStyles.navItem} 
                className={`hover:bg-gray-800 hover:text-white cursor-pointer p-2 rounded ${activeLink === 'home' ? 'bg-gray-800 text-white' : ''}`}
                onClick={() => setActiveLink('home')}
              >
                <span>Home</span>
              </div>
            </Link>

            <Link href="/dashboard/spaceShips">
              <div 
                style={navbarStyles.navItem} 
                className={`hover:bg-gray-800 hover:text-white cursor-pointer p-2 rounded ${activeLink === 'spaceShips' ? 'bg-gray-800 text-white' : ''}`}
                onClick={() => setActiveLink('spaceShips')}
              >
                <span>SpaceShips</span>
              </div>
            </Link>

            <Link href="/dashboard/missions">
              <div
                style={navbarStyles.navItem}
                className={`hover:bg-gray-800 hover:text-white cursor-pointer p-2 rounded ${activeLink === 'missions' ? 'bg-gray-800 text-white' : ''}`}
                onClick={() => setActiveLink('missions')}
              >
                <span>Missions</span>
              </div>
            </Link>

            <Link href="/dashboard/info">
              <div
                style={navbarStyles.navItem}
                className={`hover:bg-gray-800 hover:text-white cursor-pointer p-2 rounded ${activeLink === 'info' ? 'bg-gray-800 text-white' : ''}`}
                onClick={() => setActiveLink('info')}
              >
                <span>Info.</span>
              </div>
            </Link>
          </div>

          <Link href="/dashboard/settingsPage">
            <div 
              style={navbarStyles.navItem} 
              className={`hover:bg-gray-800 hover:text-white cursor-pointer p-2 rounded ${activeLink === 'settings' ? 'bg-gray-800 text-white' : ''}`}
              onClick={() => setActiveLink('settings')}
            >
              <span>Settings</span>
            </div>
          </Link>
        </div>

        {children}
        <footer className='py-4 md:py-10 bg-gray-800 text-gray-50 flex justify-center items-center border-t border-white-700'>
        Made by Hikari
        </footer>

      </body>
    </html>
  );
}
