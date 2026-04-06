'use client';

import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '/#features' },
    { label: 'Mobile Apps', href: '/#features' },
    { label: 'Enterprise Software', href: '/#features' },
    { label: 'AI & Automation', href: '/#features' },
    { label: 'Pricing', href: '/pricing' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Book a Call', href: 'https://cal.com/esperpartners/discovery' },
  ],
  Connect: [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/esperpartners' },
    { label: 'GitHub', href: 'https://github.com/johnsonsemmanuel' },
    { label: 'WhatsApp', href: 'https://wa.me/233208713610' },
    { label: 'hello@esperpartners.com', href: 'mailto:hello@esperpartners.com' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '60px 20px 36px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        {/* Grid: stacks on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="no-underline block mb-4">
              <Image src="/logo.png" alt="Esper Partners" width={40} height={40} className="rounded-lg" />
            </Link>
            <p className="text-[14px] font-light leading-[1.7]" style={{ color: 'var(--text-3)' }}>
              Building the software that powers tomorrow&apos;s most ambitious businesses. Excellence is our only standard.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[11px] font-bold uppercase tracking-[.1em] mb-4" style={{ color: 'var(--text-3)' }}>{title}</h4>
              <ul className="list-none flex flex-col gap-[10px]">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith('http') || l.href.startsWith('mailto') ? '_blank' : undefined}
                      rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[13px] font-light no-underline transition-colors duration-200"
                      style={{ color: 'var(--text-3)' }}
                      onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--orange)')}
                      onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--text-3)')}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="text-[13px] font-light" style={{ color: 'var(--text-3)' }}>© 2026 Esper Partners. All rights reserved.</div>
          <div className="flex items-center gap-2 text-[12px]" style={{ color: 'var(--text-3)' }}>
            Built with <span style={{ color: 'var(--orange)' }}>♥</span> for the world
          </div>
        </div>
      </div>
    </footer>
  );
}
