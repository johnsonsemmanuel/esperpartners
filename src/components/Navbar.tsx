'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
          background: scrolled
            ? 'rgba(12,12,12,0.85)'
            : 'rgba(12,12,12,0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.4)' : '0 4px 24px rgba(0,0,0,0.2)',
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

        {/* CTA */}
        <a href="/contact"
          className="hidden md:inline-flex items-center px-5 py-[8px] rounded-full text-white font-semibold text-[13px] transition-all duration-200 hover:scale-[1.04] flex-shrink-0"
          style={{ background: 'var(--orange)' }}>
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
        </div>
      </div>
    </div>
  );
}
