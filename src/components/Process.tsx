'use client';

import { useReveal } from './useReveal';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Deep-dive workshops to understand your business, users, and the problem space before a single line of code is written.',
  },
  {
    num: '02',
    title: 'Architect',
    desc: 'System design, UX wireframes, and technical architecture built for performance, security, and long-term scale.',
  },
  {
    num: '03',
    title: 'Engineer',
    desc: 'Agile sprints with daily progress, rigorous code reviews, and automated testing at every commit.',
  },
  {
    num: '04',
    title: 'Elevate',
    desc: 'Launch, monitor, optimize. We stay on as your long-term engineering partner — not just a vendor.',
  },
];

export default function Process() {
  const sectionRef = useReveal();

  return (
    <section id="process" ref={sectionRef} className="py-[120px] px-6 md:px-12 bg-[#111111] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF6200] mb-4">How We Work</div>
        </div>
        <div className="reveal reveal-d1">
          <h2 className="font-syne font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', maxWidth: 600 }}>
            Precision at Every Stage
          </h2>
          <p className="text-[17px] text-[#A0A0A0] font-light leading-[1.7] mb-16" style={{ maxWidth: 540 }}>
            Our Apple-inspired process ensures nothing ships until it's excellent.
          </p>
        </div>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num} className={`reveal reveal-d${Math.min(i + 1, 3)}`}>
              <div className="font-syne font-extrabold text-white leading-none mb-[-20px] tracking-[-0.04em] select-none"
                style={{ fontSize: 72, color: 'rgba(255,255,255,0.05)' }}>
                {step.num}
              </div>
              <div className="w-10 h-[3px] bg-[#FF6200] rounded-[2px] mb-4" />
              <div className="font-syne font-bold text-white text-[20px] tracking-[-0.02em] mb-3">{step.title}</div>
              <div className="text-[14px] text-[#A0A0A0] leading-[1.7] font-light">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
