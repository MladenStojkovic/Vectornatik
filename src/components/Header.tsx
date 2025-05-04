"use client";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="md:border-b-6 border-black md:mb-24">
      <div className="container px-6 font-primary mx-auto py-6 flex justify-between items-center relative">
        <Image src="/logo.svg" alt="Vectornatik" width="127" height="25" />

        <button
          aria-label="Toggle navigation menu"
          className="hamburger-menu md:hidden text-3xl"
          onClick={toggleMenu}
        >
          &#9776;
        </button>

        <div
          className={`absolute top-16 left-0 md:w-auto md:hidden z-10 md:static md:flex w-full overflow-hidden transition-all duration-500 ease-in-out border-3 border-foreground bg-white ${
            isMenuOpen
              ? "opacity-100 translate-y-0 max-h-[300px] visible"
              : "opacity-0 translate-y-4 max-h-0 invisible"
          }`}
        >
          <ul className="flex flex-col md:flex-row text-center md:space-x-8 p-4">
            <li>
              <a
                href="#"
                className="text-black hover:bg-gray-700 md:hover:bg-transparent block p-1.5"
              >
                /Work
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:bg-gray-700 md:hover:bg-transparent block p-1.5"
              >
                /About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:bg-gray-700 md:hover:bg-transparent block p-1.5"
              >
                /Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <ul className="flex text-2xl font-light">
            <li className="ml-5">
              <a
                href="#"
                className="text-black hover:bg-gray-700 md:hover:bg-transparent block p-1.5"
              >
                /Work
              </a>
            </li>
            <li className="ml-5">
              <a
                href="#"
                className="text-black hover:bg-gray-700 md:hover:bg-transparent block p-1.5"
              >
                /About
              </a>
            </li>
            <li className="ml-5">
              <a
                href="#"
                className="text-black hover:bg-gray-700 md:hover:bg-transparent block p-1.5"
              >
                /Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
