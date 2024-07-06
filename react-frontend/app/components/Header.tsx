'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full md:hidden z-50 px-5 py-5 transition-all duration-300 ${isScrolled ? 'transform translate-y-[-100%]' : 'transform translate-y-0'}  bg-slate-300 shadow-lg`}>
      <div className="header-bar">
        <Link href="/" passHref>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-lg">Jiayi Matthew Gu</p>
          </div>
        </Link>
        <div>
          
        </div>
        <nav className="hidden md:nav-bar">
          <div className="nav-link" onClick={() => scrollToSection('home')}>Home</div>
          <div className="nav-link" onClick={() => scrollToSection('about')}>About</div>
          <div className="nav-link" onClick={() => scrollToSection('projects')}>Recent Projects</div>
          <Link href="/contact" passHref><div className="nav-link">Contact</div></Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;