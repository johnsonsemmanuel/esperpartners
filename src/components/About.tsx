'use client';

import { useReveal } from './useReveal';
import { Users, Globe2, ShieldCheck, Handshake } from 'lucide-react';

const pillars = [
  { icon: Users, title: 'Small Team, Big Output', desc: 'We are a focused team of engineers, designers, and product thinkers. No bloated agencies, no juniors learning on your budget.' },
  { icon: Globe2, title: 'Africa & Beyond', desc: 'Based across Ghana, Nigeria, and the UK — we understand the markets, the infrastructure, and the real problems businesses face.' },
  { icon: ShieldCheck, title: 'You Own Everything', desc: 'Full source code, full IP. We hand over everything at the end of every project, no questions asked.' },
  { icon: Handshake, title: 'Long-Term Thinking', desc: 'We build for the next 3 years, not just the next sprint. Architecture decisions are made with your growth in mind.' },
];

export default function About() {
  const sectionRef = useReveal();

  return (
    <section id="about" ref={sectionRef} style={{ padding: '80px 20px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div className="reveal">
          <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>Who We Are</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="reveal d1">
            <h2 className="font-syne font-extrabold leading-[1.08] tracking-[-0.035em] mb-6"
              style={{ fontSize: 'clamp(30px,3.8vw,52px)', color: 'var(--text)' }}>
              A Studio Built on <span style={{ color: 'var(--orange)' }}>Craft and Honesty</span>
            </h2>
            <p className="font-light leading-[1.7] mb-4" style={{ fontSize: 16, color: 'var(--text-2)' }}>
              Esper Partners is a software engineering studio working with businesses in Ghana, Nigeria, the UK, the USA, and Togo. We build the kind of software that actually solves problems — not just looks good in a demo.
            </p>
            <p className="font-light leading-[1.7] mb-4" style={{ fontSize: 16, color: 'var(--text-2)' }}>
              We work with founders who need their first product built right, and with growing companies that need to scale what they already have. Whether you need a mobile app, a web platform, or a backend system — we scope it honestly, price it fairly, and deliver it on time.
            </p>
            <p className="font-light leading-[1.7]" style={{ fontSize: 16, color: 'var(--text-2)' }}>
              No inflated timelines. No surprise invoices. No disappearing after launch.
            </p>
          </div>

          <div className="reveal d2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="p-6 rounded-2xl border transition-colors duration-300 group"
                  style={{ background: 'var(--bg3)', borderColor: 'var(--border)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[var(--orange)]"
                    style={{ background: 'rgba(255,98,0,0.12)' }}>
                    <Icon size={18} strokeWidth={1.5} style={{ color: 'var(--orange)' }} className="group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="font-syne font-bold text-[15px] mb-2" style={{ color: 'var(--text)' }}>{p.title}</div>
                  <div className="text-[13px] font-light leading-[1.6]" style={{ color: 'var(--text-2)' }}>{p.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
