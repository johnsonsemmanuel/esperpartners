'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '/#features' },
  { label: 'Process', href: '/#steps' },
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[900] flex justify-center pointer-events-none"
      style={{ padding: '16px 24px' }}>

      {/* Floating pill nav */}
      <nav
        className="pointer-events-auto flex items-center justify-between w-full transition-all duration-300"
        style={{
          maxWidth: 860,
          height: 52,
          padding: '0 12px 0 16px',
          borderRadius: 100,
          border: '1px solid var(--border-hover)',
          background: scrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg-idle)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.25)' : '0 4px 24px rgba(0,0,0,0.1)',
          transition: 'background 0.3s var(--ease), box-shadow 0.3s var(--ease)',
        }}
      >
        {/* Logo */}
        <Link href="/" className="no-underline flex items-center flex-shrink-0">
          <Image src="/logo.png" alt="Esper Partners" width={32} height={32} className="rounded-lg" priority />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7 list-none mx-auto">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href}
                className="text-[13px] font-medium no-underline transition-colors duration-200 hover:text-white"
                style={{ color: 'var(--text-2)' }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label="Toggle colour theme"
          className="hidden md:flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 transition-colors duration-200"
          style={{ background: 'var(--bg3)', border: '1px solid var(--border)', cursor: 'none' }}>
          {theme === 'dark'
            ? <Sun size={14} style={{ color: 'var(--text-2)' }} strokeWidth={1.5} />
            : <Moon size={14} style={{ color: 'var(--text-2)' }} strokeWidth={1.5} />}
        </button>

        {/* CTA */}
        <a href="/contact"
          className="hidden md:inline-flex items-center px-5 py-[8px] rounded-full text-white font-semibold text-[13px] transition-all duration-200 hover:scale-[1.04] flex-shrink-0"
          style={{ background: 'var(--orange)', marginLeft: 8 }}>
          Start a Project
        </a>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-[5px] ml-auto" onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu" style={{ cursor: 'none' }}>
          <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown — outside the pill, below it */}
      <div
        className="absolute pointer-events-auto md:hidden overflow-hidden transition-all duration-300 rounded-2xl"
        style={{
          top: 76,
          left: 24,
          right: 24,
          maxHeight: menuOpen ? 280 : 0,
          background: 'rgba(12,12,12,0.95)',
          border: menuOpen ? '1px solid var(--border)' : '1px solid transparent',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="flex flex-col px-5 py-4 gap-3">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-[15px] py-2 no-underline border-b"
              style={{ color: 'var(--text-2)', borderColor: 'var(--border)' }}>
              {l.label}
            </a>
          ))}
          <a href="/contact" className="text-[14px] font-semibold text-white text-center py-3 rounded-full mt-1"
            style={{ background: 'var(--orange)' }}>
            Start a Project
          </a>
          <button onClick={toggle}
            className="flex items-center justify-center gap-2 py-2 text-[13px] font-medium"
            style={{ color: 'var(--text-3)', cursor: 'none' }}>
            {theme === 'dark' ? <Sun size={13} strokeWidth={1.5} /> : <Moon size={13} strokeWidth={1.5} />}
            {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  );
}
