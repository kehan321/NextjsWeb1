"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const AppBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-3 transition-all duration-300 ${
        scrolled ? 'bg-white bg-opacity-90 text-black shadow-lg' : 'bg-transparent text-white'
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
          <Link href="/about" className={`transition-colors duration-200 ${scrolled ? 'text-black hover:text-blue-800 hover:underline' : 'text-white hover:text-blue-800 hover:underline'}`}>About</Link>
          <Link href="/services" className={`transition-colors duration-200 ${scrolled ? 'text-black hover:text-blue-800 hover:underline' : 'text-white hover:text-blue-800 hover:underline'}`}>Services</Link>
          <Link href="/portfolio" className={`transition-colors duration-200 ${scrolled ? 'text-black hover:text-blue-800 hover:underline' : 'text-white hover:text-blue-800 hover:underline'}`}>Portfolio</Link>
          <Link href="/blog" className={`transition-colors duration-200 ${scrolled ? 'text-black hover:text-blue-800 hover:underline' : 'text-white hover:text-blue-800 hover:underline'}`}>Blog</Link>
          <Link href="/contact" className={`transition-colors duration-200 ${scrolled ? 'text-black hover:text-blue-800 hover:underline' : 'text-white hover:text-blue-800 hover:underline'}`}>Contact</Link>
        </div>
        <button className="md:hidden text-2xl focus:outline-none" onClick={toggleMenu} aria-expanded={menuOpen} aria-label="Toggle menu">
          <i className={`fas fa-${menuOpen ? 'times' : 'bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white bg-opacity-90 text-black p-4 rounded font-roboto mt-2 shadow-lg transition-transform transform duration-300 ease-in-out">
          <ul className="flex flex-col space-y-2">
            <li><Link href="/about" className="transition-colors hover:text-blue-600" onClick={closeMenu}>About</Link></li>
            <li><Link href="/services" className="transition-colors hover:text-blue-600" onClick={closeMenu}>Services</Link></li>
            <li><Link href="/portfolio" className="transition-colors hover:text-blue-600" onClick={closeMenu}>Portfolio</Link></li>
            <li><Link href="/blog" className="transition-colors hover:text-blue-600" onClick={closeMenu}>Blog</Link></li>
            <li><Link href="/contact" className="transition-colors hover:text-blue-600" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default AppBar;
