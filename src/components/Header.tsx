"use client";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container px-6 font-primary mx-auto py-6 flex justify-between items-center">
        <Image src="/logo.svg" alt="Vectornatik" width="127" height="25" />

        <button
          aria-label="Toggle navigation menu"
          className="hamburger-menu md:hidden text-3xl"
          onClick={toggleMenu}
        >
          &#9776;
        </button>

        <nav
          id="menu"
          className={`absolute top-16 right-2.5 md:w-auto md:static md:flex w-28 ${
            isMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-4 invisible"
          } transition-all duration-500 ease-in-out border-3 border-foreground bg-white`}
        >
          <ul className="text-center md:flex md:space-x-8 p-2.5">
            <li>
              <a
                href="#"
                className="text-black md:text-black hover:bg-gray-700 md:hover:bg-transparent block p-1.5"
              >
                /Work
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black md:text-black hover:bg-gray-700 md:hover:bg-transparent block p-1.5"
              >
                /About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black md:text-black hover:bg-gray-700 md:hover:bg-transparent block p-1.5"
              >
                /Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
