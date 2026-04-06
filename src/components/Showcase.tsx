'use client';

import { useEffect, useRef } from 'react';

const projects = [
  {
    tag: 'FinTech · Enterprise',
    title: 'Pan-African Digital Banking Platform',
    sub: 'Real-time payments infrastructure serving 4M+ users across 12 countries',
    icon: '🏦',
    bg: '#1A1A1A',
    span: true,
  },
  {
    tag: 'E-Commerce · Scale',
    title: 'Global Marketplace Rebuild',
    sub: 'Headless commerce platform — 40% faster, 2× conversion rate',
    icon: '🛍️',
    bg: '#FF6200',
    span: false,
  },
  {
    tag: 'AI · Healthcare',
    title: 'AI Diagnostic Assistant',
    sub: 'ML-powered clinical decision support deployed across 80 hospitals',
    icon: '🤖',
    bg: '#0A0A0A',
    span: false,
  },
];

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-[120px] px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF6200] mb-4">Selected Work</div>
        </div>
        <div className="reveal reveal-d1">
          <h2 className="font-syne font-extrabold text-black leading-[1.1] tracking-[-0.03em] mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', maxWidth: 600 }}>
            Software That Moves Markets
          </h2>
          <p className="text-[17px] text-[#5A5A5A] font-light leading-[1.7] mb-16" style={{ maxWidth: 540 }}>
            A selection of the products we've built for innovators worldwide.
          </p>
        </div>

        <div className="reveal reveal-d2 grid gap-5" style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto' }}>
          {projects.map((p, i) => (
            <div
              key={i}
              className="showcase-card relative rounded-3xl overflow-hidden flex flex-col justify-end p-9 transition-transform duration-500 hover:scale-[0.985]"
              style={{
                background: p.bg,
                minHeight: p.span ? 740 : 360,
                gridRow: p.span ? 'span 2' : undefined,
              }}
            >
              {/* BG icon */}
              <div className="absolute inset-0 flex items-center justify-center text-[120px] opacity-[0.12] transition-transform duration-500 hover:scale-105 select-none pointer-events-none">
                {p.icon}
              </div>
              <div className="relative z-[1]">
                <span className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase px-3 py-1 rounded-full border border-white/30 text-white/70 mb-3">
                  {p.tag}
                </span>
                <div className="font-syne font-extrabold text-white leading-[1.15] tracking-[-0.02em] mb-2"
                  style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                  {p.title}
                </div>
                <div className="text-[14px] text-white/65 font-light">{p.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
