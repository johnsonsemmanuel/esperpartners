'use client';

import { useReveal } from './useReveal';
import { Star } from 'lucide-react';

const testimonials = [
  { text: "Esper Partners didn't just build our platform — they thought like a co-founder. The product shipped on time, under budget. Best technical decision we've made.", name: 'Amara Diallo', role: 'CEO, PaySwift Africa', initial: 'A' },
  { text: "World-class engineering quality. Their code is clean, communication impeccable, and the UI transitions feel like something Apple would ship.", name: 'James Thornton', role: 'CTO, NovaMed UK', initial: 'J' },
  { text: "Figma to live platform in 14 weeks. Our investors were blown away. Esper Partners is now our permanent engineering partner.", name: 'Sofia Mendez', role: 'Founder, TradeLoop Mexico', initial: 'S' },
  { text: "Three agencies failed before Esper Partners. They understood the complexity from Day 1 and delivered an enterprise system our board is proud of.", name: 'Kwame Asante', role: 'Director of Digital, GoldCoast Bank', initial: 'K' },
  { text: "Every micro-interaction, every loading state — they cared about things most developers ignore completely. The result is a product users rave about.", name: 'Lena Fischer', role: 'Head of Product, Karbon DE', initial: 'L' },
  { text: "We scaled from 0 to 100K users in 6 months. Esper Partners' infrastructure never blinked. They built for scale from Day 1.", name: 'Ravi Patel', role: 'Founder, LogiChain India', initial: 'R' },
];
const doubled = [...testimonials, ...testimonials];

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section ref={ref} style={{ background: 'var(--bg)', overflow: 'hidden', paddingBottom: 0 }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '100px 40px 0' }}>
        <div className="reveal"><div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>Client Stories</div></div>
        <div className="reveal d1">
          <h2 className="font-syne font-extrabold leading-[1.08] tracking-[-0.035em] mb-11" style={{ fontSize: 'clamp(30px,3.8vw,52px)', color: 'var(--text)' }}>
            Trusted by Builders <span style={{ color: 'var(--orange)' }}>Worldwide</span>
          </h2>
        </div>
      </div>

      <div className="testi-track flex pb-16" style={{ gap: 20, width: 'max-content', marginTop: 44 }}>
        {doubled.map((t, i) => (
          <div key={i} className="testi-card flex-shrink-0 rounded-[18px] border"
            style={{ width: 340, padding: 28, background: 'var(--bg2)', borderColor: 'var(--border)' }}>
            <div className="flex gap-[3px] mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={13} className="fill-[#FF6200]" style={{ color: 'var(--orange)' }} strokeWidth={0} />
              ))}
            </div>
            <p className="text-[14px] font-light leading-[1.7] mb-5" style={{ color: 'var(--text-2)' }}>"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold font-syne text-white flex-shrink-0 text-[14px]"
                style={{ background: 'var(--orange)' }}>
                {t.initial}
              </div>
              <div>
                <div className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{t.name}</div>
                <div className="text-[11px] mt-[1px]" style={{ color: 'var(--text-3)' }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
