'use client';

import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  Services: ['Web Development', 'Mobile Apps', 'Enterprise Software', 'AI & Automation', 'Cloud & DevOps'],
  Company: ['About Us', 'Careers', 'Blog', 'Case Studies', 'Contact'],
  Connect: ['LinkedIn', 'GitHub', 'Dribbble', 'Twitter / X'],
};

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '60px 40px 36px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div className="grid gap-14 mb-14" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr' }}>
          <div>
            <Link href="/" className="no-underline block mb-4">
              <Image src="/logo.png" alt="Esper Partners" width={40} height={40} className="rounded-lg" />
            </Link>
            <p className="text-[14px] font-light leading-[1.7]" style={{ color: 'var(--text-3)' }}>
              Building the software that powers tomorrow&apos;s most ambitious businesses. Excellence is our only standard.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[11px] font-bold uppercase tracking-[.1em] mb-5" style={{ color: 'var(--text-3)' }}>{title}</h4>
              <ul className="list-none flex flex-col gap-[10px]">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[14px] font-light no-underline transition-colors duration-200 hover:text-white"
                      style={{ color: 'var(--text-3)' }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center flex-wrap gap-4 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="text-[13px] font-light" style={{ color: 'var(--text-3)' }}>© 2026 Esper Partners. All rights reserved.</div>
          <div className="flex items-center gap-2 text-[12px]" style={{ color: 'var(--text-3)' }}>
            Built with <span style={{ color: 'var(--orange)' }}>♥</span> for the world
          </div>
        </div>
      </div>
    </footer>
  );
}
