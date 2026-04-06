'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Services', href: '#features' },
  { label: 'Process', href: '#steps' },
  { label: 'Work', href: '#work' },
  { label: 'FAQ', href: '#faq' },
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
    <nav className={`nav-glass fixed top-0 left-0 right-0 z-[900] flex items-center ${scrolled ? 'scrolled' : ''}`}
      style={{ height: 60, padding: '0 40px' }}>
      <div className="flex items-center justify-between w-full max-w-[1400px] mx-auto">
        <Link href="/" className="no-underline flex items-center">
          <Image src="/logo.png" alt="Esper Partners" width={36} height={36} className="rounded-lg" priority />
        </Link>

        <ul className="hidden md:flex gap-8 list-none ml-auto mr-8">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-[14px] no-underline transition-colors duration-200"
                style={{ color: 'var(--text-2)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact"
          className="hidden md:inline-block px-6 py-[9px] rounded-full text-white font-semibold text-[14px] transition-all duration-200 hover:scale-[1.04]"
          style={{ background: 'var(--orange)' }}>
          Start a Project
        </a>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-[5px]" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
          style={{ cursor: 'none' }}>
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className="absolute top-[60px] left-0 right-0 overflow-hidden transition-all duration-300 md:hidden"
        style={{ maxHeight: menuOpen ? 280 : 0, background: 'rgba(12,12,12,0.95)', borderBottom: '1px solid var(--border)' }}>
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-[15px] py-2 no-underline border-b"
              style={{ color: 'var(--text-2)', borderColor: 'var(--border)' }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="text-[14px] font-semibold text-white text-center py-3 rounded-full mt-1"
            style={{ background: 'var(--orange)' }}>
            Start a Project
          </a>
        </div>
      </div>
    </nav>
  );
}
