'use client'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from 'react';
// Other components
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsScrolled(true);
      } else {
        // Scrolling up
        setIsScrolled(false);
      }
      // Update lastScrollY to current scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 px-5 py-5 transition-all duration-300 ${isScrolled ? 'transform translate-y-[-100%]' : 'transform translate-y-0'}  bg-slate-300 shadow-lg`}>
      <div className="header-bar">
        <Link href="/" passHref>
          <div className="flex items-center gap-2">
            <Image src="/next.svg" alt="logo" width="32" height="32" />
            <p className="font-semibold text-lg">Jiayi Matthew Gu</p>
          </div>
        </Link>
        {/* <ThemeSwitcher /> */}
        <nav className="nav-bar">
          <Link href="/" passHref><div className="nav-link">Home</div></Link>
          <Link href="/about" passHref><div className="nav-link">About</div></Link>
          <Link href="/projects" passHref><div className="nav-link">Recent Projects</div></Link>
          <Link href="/contact" passHref><div className="nav-link">Contact</div></Link>
        </nav>
      </div>
    </header>
  );
}