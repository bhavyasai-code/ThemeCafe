/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Coffee, Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  openReservationModal: () => void;
}

export default function Navbar({ isDark, setIsDark, openReservationModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Themes', href: '#themes' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 shadow-md bg-stone-900/95 text-stone-100 backdrop-blur-md border-b border-stone-800'
          : 'py-6 bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="flex items-center gap-2 group"
          id="logo-brand"
        >
          <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#E07A5F] to-[#D4A017] text-white transition-transform group-hover:rotate-12 duration-300 shadow-md">
            <Coffee className="w-6 h-6" />
          </div>
          <span className="font-sans text-xl font-bold tracking-tight text-white">
            Theme <span className="text-[#D4A017] group-hover:text-[#E07A5F] transition-colors duration-300">Café</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="font-sans text-sm font-medium opacity-85 hover:opacity-100 dark:hover:text-[#D4A017] hover:text-[#D4A017] transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#D4A017] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Light/Dark Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg bg-stone-800/80 text-stone-200 hover:text-[#D4A017] hover:bg-stone-700 transition-colors border border-stone-700/50"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle dark mode"
            id="theme-toggle-desktop"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Table Book CTA */}
          <button
            onClick={openReservationModal}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E07A5F] via-[#D4A017] to-[#E07A5F] bg-[length:200%_auto] hover:bg-[100%_center] text-white text-sm font-semibold tracking-wide transition-all duration-500 shadow-md hover:shadow-[#D4A017]/20 border border-transparent active:scale-95 cursor-pointer"
            id="nav-book-button"
          >
            Book a Table
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg bg-stone-800/80 text-stone-200 hover:text-[#D4A017] transition-colors border border-stone-700/50"
            aria-label="Toggle dark mode"
            id="theme-toggle-mobile"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-lg bg-stone-800/80 text-stone-200 hover:text-white transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-burger"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-stone-900/98 backdrop-blur-lg border-t border-stone-800 transition-all duration-300 z-40 flex flex-col justify-between p-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                style={{ animationDelay: `${idx * 50}ms` }}
                className="font-sans text-lg font-semibold text-stone-100 hover:text-[#D4A017] border-b border-stone-800/50 pb-2 animate-fade-in-down"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pb-8">
            <button
              onClick={() => {
                setIsOpen(false);
                openReservationModal();
              }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E07A5F] to-[#D4A017] text-white text-center font-bold shadow-md hover:bg-opacity-95 transition-all text-base"
              id="mobile-book-button"
            >
              Book a Table Now
            </button>
            <p className="text-center text-xs text-stone-400 font-mono tracking-wider">
              Experience Cafe • Unique Dining
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
