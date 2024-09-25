// components/AppBar.tsx
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const AppBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
    <nav className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 ${scrolled ? 'bg-white bg-opacity-90 text-black' : 'bg-transparent text-white'}`} style={{ zIndex: 1000 }}>
      <div className="flex items-center justify-between">
        <img 
          src="https://up.yimg.com/ib/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&rs=1&c=1&qlt=95&w=177&h=114" 
          className="h-10 w-10 rounded-full" 
          alt="Logo" 
        />
        <div className="hidden md:flex space-x-4">
          <Link href="/" className={`${scrolled ? 'text-black' : 'text-white'} transition-colors`}>Home</Link>
          <Link href="/about" className={`${scrolled ? 'text-black' : 'text-white'} transition-colors`}>About</Link>
          <Link href="/contact" className={`${scrolled ? 'text-black' : 'text-white'} transition-colors`}>Contact</Link>
          {/* <Link href="/login" className={`${scrolled ? 'text-black' : 'text-white'} transition-colors`}>Login</Link> */}
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          <i className={`fas fa-${menuOpen ? 'times' : 'bars'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white bg-opacity-90 text-black p-4 rounded mt-2 shadow-lg">
          <ul className="flex flex-col space-y-2">
            <li><Link href="/" className="transition-colors" onClick={closeMenu}>Home</Link></li>
            <li><Link href="/about" className="transition-colors" onClick={closeMenu}>About</Link></li>
            <li><Link href="/contact" className="transition-colors" onClick={closeMenu}>Contact</Link></li>
            <li><Link href="/login" className="transition-colors" onClick={closeMenu}>Login</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default AppBar;
