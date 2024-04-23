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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false); // Nuevo estado para el hover
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen); // Cambiar el estado del menú desplegable al hacer clic en el botón
  };


  const handleMouseEnter = () => {
    setIsHovering(true); // Función para manejar el hover
  };

  const handleMouseLeave = () => {
    setIsHovering(false); // Función para manejar el hover
  };

  const handleOptionClick = (option: string) => {
    setActiveLink(option); // Actualizar la opción seleccionada al hacer clic en una opción del menú
  };

  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <html lang="en">
      <body className={oxanium.className}>

        {/* <div className="flex flex-col md:flex-row items-center justify-between shadow-xl bg-gray-50 md:h-20 px-4">
          <div className="flex items-center space-x-4 md:space-x-10">*/}

        {/* Logo */}
        {/*<div className="h-10 w-10 relative">
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
        </div> */}


        <div className="navbar  bg-gray-50 md:h-20 px-4">
          <div className="navbar-start text-black">

            <div className="dropdown mr-4">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className={`menu bg-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ${isDropdownOpen ? 'block' : 'hidden'}`} onBlur={closeDropdown}>
            <li><a onClick={closeDropdown} className="cursor-pointer hover:underline hover:text-red-400">Item 1</a></li>
            <li>
              <a onClick={closeDropdown} className="cursor-pointer hover:underline hover:text-red-400">Parent</a>
              <ul className="p-2">
                <li><a onClick={closeDropdown} className="cursor-pointer hover:underline hover:text-red-400">Submenu 1</a></li>
                <li><a onClick={closeDropdown} className="cursor-pointer hover:underline hover:text-red-400">Submenu 2</a></li>
              </ul>
            </li>
            <li><a onClick={closeDropdown} className="cursor-pointer hover:underline hover:text-red-400">Item 3</a></li>
          </ul>
            </div>
            {/* Logo */}
            <div className="h-10 w-10 relative cursor-pointer">
              <Image src="/images/rabbit.png" alt="Logo" layout="fill" objectFit="contain" />
            </div>

          </div>
          <div className="flex items-end space-x-4 md:space-x-10 navbar-end text-black">
            {/* Botones */}
            <div className="items-end space-x-4 md:space-x-10 navbar-end hidden lg:flex">
              <div
                style={navbarStyles.navItem}
                className={`hover:bg-gray-800 hover:text-white cursor-pointer p-2 rounded ${activeLink === 'button1' ? 'bg-gray-800 text-white' : ''}`}
                onClick={() => setActiveLink('button1')}
              >
                <span>Button1</span>
              </div>
              {/* Botón del menú desplegable */}
              <div
                style={navbarStyles.navItem}
                className={`hover:bg-gray-800 hover:text-white cursor-pointer p-2 rounded ${activeLink === 'dropDown' ? 'bg-gray-800 text-white' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                
                <span>DropDown</span>
                {/* Renderizado condicional del menú desplegable */}
                {isHovering && (
                  <div className="absolute bg-white shadow-md p-2 mt-2 pr-6 rounded text-black">
                    <p
                      className={`cursor-pointer mb-2 hover:underline hover:text-red-400 ${activeLink === 'Option 1' ? 'text-red-400' : ''}`}
                      onClick={() => handleOptionClick('Option 1')}
                    >
                      Option 1
                    </p>
                    <p
                      className={`cursor-pointer mb-2 hover:underline hover:text-red-400 ${activeLink === 'Option 2' ? 'text-red-400' : ''}`}
                      onClick={() => handleOptionClick('Option 2')}
                    >
                      Option 2
                    </p>
                    <p
                      className={`cursor-pointer mb-2 hover:underline hover:text-red-400 ${activeLink === 'Option muy largo 1' ? 'text-red-400' : ''}`}
                      onClick={() => handleOptionClick('Option muy largo 1')}
                    >
                      Option muy largo 1
                    </p>
                    <p
                      className={`cursor-pointer hover:underline hover:text-red-400 ${activeLink === 'Option muy largo 2' ? 'text-red-400' : ''}`}
                      onClick={() => handleOptionClick('Option muy largo 2')}
                    >
                      Option muy largo 2
                    </p>
                  </div>
                )}
              </div>
              <div
                style={navbarStyles.navItem}
                className={`hover:bg-gray-800 hover:text-white cursor-pointer p-2 rounded ${activeLink === 'button2' ? 'bg-gray-800 text-white' : ''}`}
                onClick={() => setActiveLink('button2')}
              >
                <span>Button2</span>
              </div>
            </div>
            <div
              style={navbarStyles.navItem}
              className={`hover:bg-gray-800 hover:text-white cursor-pointer p-2 rounded ${activeLink === 'settings' ? 'bg-gray-800 text-white' : ''}`}
              onClick={() => setActiveLink('settings')}
              navbar-end
            >
              <span>Settings</span>
            </div>
          </div>

        </div>








        {children}
        <footer className='py-4 md:py-10 bg-gray-800 text-gray-50 flex justify-center items-center border-t border-white-700'>
          Made by Hikari
        </footer>
      </body>
    </html>
  );
}