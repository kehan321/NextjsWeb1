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
    <nav className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 ${scrolled ? 'bg-white bg-opacity-60 text-black' : 'bg-transparent text-white'}`} style={{ zIndex: 1000 }}>
      <div className="flex items-center justify-between text-xl mx-auto px-4 md:px-16">
        <img 
          src="https://ieworkspk.vercel.app/assets/logo.png" 
          className="h-10 w-10 rounded-full" 
          alt="Logo" 
        />
        <div className="hidden md:flex space-x-4  font-serif font-extrabold">
          <Link href="/" className={`${scrolled ? 'text-black' : 'text-white'} transition-colors`}>Home</Link>
          <Link href="/about" className={`${scrolled ? 'text-black' : 'text-white'} transition-colors`}>About</Link>
          <Link href="/contact" className={`${scrolled ? 'text-black' : 'text-white'} transition-colors`}>Contact</Link>
        </div>
        <button className="md:hidden text-2xl" onClick={toggleMenu} aria-expanded={menuOpen} aria-label="Toggle menu">
          <i className={`fas fa-${menuOpen ? 'times' : 'bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white bg-opacity-60 text-black p-4 rounded font-serif mt-2 shadow-lg">
          <ul className="flex flex-col space-y-2">
            <li><Link href="/" className="transition-colors" onClick={closeMenu}>Home</Link></li>
            <li><Link href="/about" className="transition-colors" onClick={closeMenu}>About</Link></li>
            <li><Link href="/contact" className="transition-colors" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default AppBar;
