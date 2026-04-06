'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] nav-glass transition-all duration-300 ${
        scrolled ? 'shadow-[0_2px_32px_rgba(0,0,0,0.08)]' : ''
      }`}
      style={{ height: 64, display: 'flex', alignItems: 'center', padding: '0 48px' }}
    >
      <div className="flex items-center justify-between w-full max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link href="/" className="font-syne font-extrabold text-[22px] tracking-[-0.5px] text-black no-underline">
          Esper <span className="text-[#FF6200]">Partners</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-9 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[14px] font-medium text-[#5A5A5A] no-underline transition-colors duration-200 hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-[14px] font-semibold text-white no-underline px-6 py-[10px] rounded-full transition-all duration-200 hover:scale-[1.04]"
              style={{ background: '#FF6200' }}
            >
              Start a Project
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute top-16 left-0 right-0 nav-glass border-t border-[#E0E0E0] transition-all duration-300 overflow-hidden md:hidden`}
        style={{ maxHeight: menuOpen ? 300 : 0 }}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[15px] font-medium text-[#5A5A5A] no-underline py-2 border-b border-[#F2F2F2]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[14px] font-semibold text-white text-center py-3 rounded-full mt-2"
            style={{ background: '#FF6200' }}
          >
            Start a Project
          </a>
        </div>
      </div>
    </nav>
  );
}
