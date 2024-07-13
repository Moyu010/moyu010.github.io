'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className={`fixed top-0 left-0 w-full lg:hidden z-50 px-5 py-5 transition-all duration-300 ${isScrolled ? 'transform translate-y-[-100%]' : 'transform translate-y-0'}  bg-slate-300 shadow-lg`}>
      <div className='header-bar'>
        <Link href='/' passHref>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-lg'>Jiayi Matthew Gu</p>
          </div>
        </Link>
        <div className='sm:hidden flex flex-1 justify-end items-center' >
          <div onMouseEnter={() => setIsMenuOpen(true)}>
            <img className='w-[28px] h-[28px] object-contain cursor-pointer' src='/icon/menu.svg' alt='Menu' />
            {isMenuOpen && (
              <nav className='absolute right-0 mt-5 bg-white shadow-lg' onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}>
                <div className='p-4 bg-slate-300 hover:bg-gray-200' onClick={() => scrollToSection('home')}>Home</div>
                <div className='p-4 bg-slate-300 hover:bg-gray-200' onClick={() => scrollToSection('about')}>About</div>
                <div className='p-4 bg-slate-300 hover:bg-gray-200' onClick={() => scrollToSection('projects')}>Recent Projects</div>
              </nav>
            )}
          </div>

        </div>


        <nav className='nav-bar'>
          <div className='nav-link' onClick={() => scrollToSection('home')}>Home</div>
          <div className='nav-link' onClick={() => scrollToSection('about')}>About</div>
          <div className='nav-link' onClick={() => scrollToSection('projects')}>Recent Projects</div>
        </nav>
      </div>
    </header>
  );
};
// TODO: Make the menu button, and make the menu responsive
export default Header;