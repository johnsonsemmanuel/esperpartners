'use client';

import { useReveal } from './useReveal';

const benefits = [
  { num: '10×', title: 'Faster Time to Market', desc: 'Our proven sprint framework takes products from wireframe to launch in weeks, not months. Ready to ship means ready to grow.', accent: true, wide: true },
  { num: '98%', title: 'Client Retention', desc: 'We become your long-term engineering partner, not just a vendor. Our clients stay because the results speak for themselves.' },
  { num: '28+', title: 'Countries Served', desc: 'From Accra to Amsterdam, Singapore to São Paulo — we build software that works globally from Day 1.' },
  { num: '340+', title: 'Products Shipped', desc: 'From MVPs to million-user platforms — each one delivered with the same obsessive attention to quality.' },
  { num: '0', title: 'Missed Deadlines', desc: 'We set realistic timelines and we hit them. Project management is not an afterthought — it\'s built into our DNA.' },
];

export default function Stats() {
  const ref = useReveal();

  return (
    <section ref={ref} style={{ padding: '100px 40px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div className="reveal"><div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>Why Esper Partners</div></div>
        <div className="reveal d1">
          <h2 className="font-syne font-extrabold leading-[1.08] tracking-[-0.035em] mb-4" style={{ fontSize: 'clamp(30px,3.8vw,52px)', color: 'var(--text)' }}>
            Built to Help You <span style={{ color: 'var(--orange)' }}>Grow</span>
          </h2>
          <p className="font-light leading-[1.7] mb-14" style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 520 }}>
            We handle the engineering complexity so you can focus on what matters — your customers and your growth.
          </p>
        </div>

        <div className="reveal d2 rounded-[20px] overflow-hidden grid grid-cols-1 md:grid-cols-2" style={{ gap: 2, background: 'var(--border)' }}>
          {benefits.map((b, i) => (
            <div key={i}
              className={b.wide ? 'md:col-span-2' : ''}
              style={{
                background: b.accent ? 'var(--orange)' : i > 2 ? 'var(--bg3)' : 'var(--bg)',
                padding: '40px 36px',
                position: 'relative',
                overflow: 'hidden',
              }}>
              <div className="font-syne font-extrabold leading-none mb-[-16px] tracking-[-0.04em] select-none"
                style={{ fontSize: 72, color: b.accent ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)' }}>
                {b.num}
              </div>
              <div className="font-syne font-extrabold tracking-[-0.03em] mb-2"
                style={{ fontSize: b.wide ? 26 : 20, color: b.accent ? '#fff' : 'var(--text)' }}>
                {b.title}
              </div>
              <div className="text-[14px] font-light leading-[1.65]"
                style={{ color: b.accent ? 'rgba(255,255,255,0.7)' : 'var(--text-2)' }}>
                {b.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
