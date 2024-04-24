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
  const llistaMenu = [
    { nom: "opc 1", url: "/" },
    {
      nom: "opc 2",
      url: "/admissio",
      submenus: [
        { nom: "sub-opc 1", url: "/info/TasquesPrevies" },
        { nom: "sub-opc 2", url: "/admissio/presencial" },
        { nom: "sub-opc 3", url: "/admissio/virtual" },
        { nom: "sub-opc 4", url: "/admissio/cursosEspecialitzacio" },
        { nom: "sub-opc 5", url: "/admissio/certificatsProfesionals" },
      ]
    },
    {
      nom: "opc 3",
      url: "/admissio",
      submenus: [
        { nom: "sub-opc 6", url: "/modalitats/presencial" },
        { nom: "sub-opc 7", url: "/modalitats/intensiva" },
        { nom: "sub-opc 8", url: "/modalitats/virtual" },
        { nom: "sub-opc 9", url: "/modalitats/proveslliures" },
        { nom: "sub-opc 10", url: "/admissio/cursosEspecialitzacio" },
        { nom: "sub-opc 11", url: "/admissio/certificatsProfesionals" },
      ]
    },
    {
      nom: "opc 4",
      url: "",
      submenus: [
        { nom: "sub-opc 12", url: "/familia" },
        { nom: "sub-opc 13", url: "/etapa" },
        { nom: "sub-opc 14", url: "/centres" }
      ]
    },
    { nom: "opc 5", url: "/orientacio" },
  ];
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringSub, setIsHoveringSub] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [submenuHoverStates, setSubmenuHoverStates] = useState(
    llistaMenu.map(() => false)
  );



  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
    setSubmenuHoverStates(prevStates => prevStates.map(() => false));
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleOptionClick = (option: string) => {
    setActiveMenu(option); // Actualiza el menú activo al hacer clic en una opción
  };

  const handleMouseEnterSub = (index: number) => {
    setSubmenuHoverStates((prevStates) => {
      prevStates[index] = true;
      return [...prevStates];
    });
  };

  const handleMouseLeaveSub = () => {
    setSubmenuHoverStates(prevStates => {
      return prevStates.map(() => false);
    });
  };


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <html lang="en">
      <body className={oxanium.className}>


        {/* TopBanNavigation for SpaceX-API */}


        <div className="navbar  bg-gray-50 md:h-20 px-4">
          <div className="navbar-start text-black">

            <div className="dropdown mr-4">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul className={`menu bg-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ${isDropdownOpen ? 'block' : 'hidden'}`} onBlur={closeDropdown}>
                {llistaMenu.map((opcion, index) => (
                  <li key={index}>
                    <Link href={opcion.url}>
                      <span className="cursor-pointer hover:underline hover:text-red-400">
                        {opcion.nom}
                      </span>
                    </Link>
                    {opcion.submenus && (
                      <ul>
                        {opcion.submenus.map((submenu, subIndex) => (
                          <li key={subIndex}>
                            <Link href={submenu.url}>
                              <span onClick={closeDropdown} className="cursor-pointer hover:underline hover:text-red-400">
                                {submenu.nom}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
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

                {/* Decoracion botónd esplegable */}
                <div className="flex items-center">
                  <span>DropDown</span>
                  {isHovering && <Image src="/images/down-arrow.png" alt="DropDown Icon" className="ml-2" width={15} height={15} style={{ maxWidth: '15px', filter: 'invert(75%)' }} />}
                  {!isHovering && <Image src="/images/up-arrow.png" alt="DropUp Icon" className="ml-2" width={15} height={15} style={{ maxWidth: '15px' }} />}
                </div>


                <div onMouseLeave={() => handleMouseLeaveSub()}>
                  {/* Renderizado condicional del menú desplegable */}
                  {isHovering && (
                    <div className="absolute bg-white shadow-md p-2 mt-2 pr-6 rounded text-black">
                      {llistaMenu.map((opcion, index) => (
                        <div key={index} onClick={() => handleMouseEnterSub(index)}>


                          {/* Al tener subMebu solo se aplica el click */}
                          {opcion.submenus && (

                            <span onClick={() => handleOptionClick(opcion.nom)} className={`cursor-pointer hover:underline hover:text-red-400`}>
                              <div className="flex items-center">
                                {opcion.nom}{!isHoveringSub && opcion.submenus && <Image src="/images/rigt-down-arrow.png" alt="DropUp Icon" className="ml-2" width={10} height={10} style={{ maxWidth: '10px' }} />}
                              </div>
                            </span>

                          )}

                          {/* Como no tiene subMenu al hacer click tenemos el Link */}
                          {!opcion.submenus && (
                            <Link href={opcion.url} passHref>
                              <span onClick={() => handleOptionClick(opcion.nom)} className={`cursor-pointer hover:underline hover:text-red-400 ${activeLink === opcion.nom ? 'text-red-400' : ''}`}>
                                <div className="flex items-center">
                                  {opcion.nom}{!isHoveringSub && opcion.submenus && <Image src="/images/rigt-down-arrow.png" alt="DropUp Icon" className="ml-2" width={10} height={10} style={{ maxWidth: '10px' }} />}
                                </div>
                              </span>
                            </Link>
                          )}
                          
                          {/* Submenus */}
                          {submenuHoverStates[index] && opcion.submenus && (
                            <ul className="pl-6"> {/* Aplicando un margen izquierdo para desplazar los submenús hacia la derecha */}
                              {opcion.submenus.map((submenu, subIndex) => (
                                <li key={subIndex}>
                                  <Link href={submenu.url} passHref>
                                    <span onClick={() => handleOptionClick(submenu.nom)} className={`cursor-pointer hover:underline hover:text-red-400 ${activeLink === submenu.nom ? 'text-red-400' : ''}`}>
                                      {submenu.nom}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>


                  )}
                </div>
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







/*<div className="navbar  bg-gray-50 md:h-20 px-4">
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
        {/* Logo *//*}
/*<div className="h-10 w-10 relative cursor-pointer">
<Image src="/images/rabbit.png" alt="Logo" layout="fill" objectFit="contain" />
</div>

</div>
<div className="flex items-end space-x-4 md:space-x-10 navbar-end text-black">
{/* Botones *//*}
/*<div className="items-end space-x-4 md:space-x-10 navbar-end hidden lg:flex">
  <div
    style={navbarStyles.navItem}
    className={`hover:bg-gray-800 hover:text-white cursor-pointer p-2 rounded ${activeLink === 'button1' ? 'bg-gray-800 text-white' : ''}`}
    onClick={() => setActiveLink('button1')}
  >
    <span>Button1</span>
  </div>
  {/* Botón del menú desplegable *//*}
/*<div
style={navbarStyles.navItem}
className={`hover:bg-gray-800 hover:text-white cursor-pointer p-2 rounded ${activeLink === 'dropDown' ? 'bg-gray-800 text-white' : ''}`}
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
>

<span>DropDown</span>
{/* Renderizado condicional del menú desplegable *//*}
/*{isHovering && (
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

</div>*/









{/* TopBanNavigation for SpaceX-API */ }


{/* <div className="flex flex-col md:flex-row items-center justify-between shadow-xl bg-gray-50 md:h-20 px-4">
          <div className="flex items-center space-x-4 md:space-x-10">*/}

{/* Logo */ }
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
        </div> 
              {children}
        <footer className='py-4 md:py-10 bg-gray-800 text-gray-50 flex justify-center items-center border-t border-white-700'>
          Made by Hikari
        </footer>
      </body>
    </html>
  );
}


*/}