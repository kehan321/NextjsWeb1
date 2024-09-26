"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const AppBar2: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu on body click outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-3 transition-all duration-300 ${
        scrolled ? 'bg-white bg-opacity-60 text-black shadow-lg' : 'bg-transparent text-black'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex items-center justify-between text-xl mx-auto px-4 md:px-16">
        <Link href="/" aria-label="Home">
          <img
            src="https://ieworkspk.vercel.app/assets/logo.png"
            className="h-20 w-20 rounded-full cursor-pointer"
            alt="Logo"
          />
        </Link>

        <div className="hidden md:flex space-x-6 font-poppins font-bold">
          {["about", "services", "portfolio", "blog", "contact"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className={`transition-colors duration-200 ${scrolled ? 'text-black hover:text-blue-800 hover:underline' : 'text-black hover:text-blue-800 hover:underline'}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-2xl text-gray-400 focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <i className={`fas fa-${menuOpen ? 'times' : 'bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-white bg-opacity-60 text-black p-4 rounded font-roboto mt-2 shadow-lg transition-transform transform duration-300 ease-in-out"
        >
          <ul className="flex flex-col space-y-2">
            {["about", "services", "portfolio", "blog", "contact"].map((item) => (
              <li key={item}>
                <Link href={`/${item}`} className="transition-colors hover:text-blue-600" onClick={closeMenu}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default AppBar2;
