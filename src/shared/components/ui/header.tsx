"use client";
import {
  HiMusicNote,
  HiCamera,
  HiOutlineBookOpen,
  HiInformationCircle,
  HiOutlineDocumentText,
  HiMenu,
  HiX,
} from "react-icons/hi";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    {
      name: "Canciones",
      icon: <HiMusicNote className="text-xl" />,
      path: "/Aleja/canciones",
    },
    {
      name: "Galería",
      icon: <HiCamera className="text-xl" />,
      path: "/Aleja/galeria",
    },
    {
      name: "Notas",
      icon: <HiOutlineBookOpen className="text-xl" />,
      path: "/Aleja/notas",
    },
    {
      name: "She",
      icon: <HiInformationCircle className="text-xl" />,
      path: "/Aleja/she",
    },
    {
      name: "Sobre este proyecto",
      icon: <HiOutlineDocumentText className="text-xl" />,
      path: "/Aleja/about",
    },
  ];

  return (
    <header className="bg-rose-300 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo y título */}
        <Link href={"/Aleja/home"} className="flex items-center space-x-2">
          <Image src="/img/logoHeader.png" alt="Logo" width={50} height={50} />
          <h1 className="font-serif text-xl hidden sm:block">ADMV</h1>
          <Image
            src="/img/logoHeader.png"
            alt="Logo"
            width={50}
            height={50}
            className="hidden sm:block"
          />
        </Link>

        {/* Menú desktop (visible en pantallas grandes) */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="flex items-center hover:text-rose-700 transition-colors font-semibold"
            >
              <span className="mr-1">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Botón de menú móvil */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Menú móvil (desplegable) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-rose-300 shadow-lg py-4 px-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="flex items-center hover:text-rose-700 transition-colors font-semibold py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
