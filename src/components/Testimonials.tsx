'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, FadeInStagger, FadeInItem } from './FadeIn';

// 3 stronger testimonials — keep them focused on specific, credible outcomes
const testimonials = [
  {
    text: "Esper Partners didn't just build our platform — they thought like a co-founder. Shipped on time, under budget. Best technical decision we've made this year.",
    name: 'Amara Diallo',
    role: 'CEO',
    company: 'PaySwift Africa',
    initial: 'A',
    result: 'Delivered in 12 weeks',
  },
  {
    text: "World-class engineering quality. Their code is clean, communication is impeccable, and the UI feels like something Apple would ship. I don't say that lightly.",
    name: 'James Thornton',
    role: 'CTO',
    company: 'NovaMed UK',
    initial: 'J',
    result: '99/100 Lighthouse score',
  },
  {
    text: "Three agencies failed before Esper Partners. They understood the complexity from Day 1 and delivered an enterprise system our board is proud to demo.",
    name: 'Kwame Asante',
    role: 'Director of Digital',
    company: 'GoldCoast Bank',
    initial: 'K',
    result: 'Enterprise system · 8 months',
  },
];

export default function Testimonials() {
  return (
    <section style={{ background: 'var(--bg)', padding: '80px 20px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <FadeIn>
          <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>
            Client Stories
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="font-syne font-extrabold leading-[1.08] tracking-[-0.035em] mb-12"
            style={{ fontSize: 'clamp(28px,3.8vw,52px)', color: 'var(--text)' }}
          >
            Trusted by builders{' '}
            <span style={{ color: 'var(--orange)' }}>worldwide.</span>
          </h2>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <FadeInItem key={t.name}>
              <motion.div
                className="rounded-[20px] border flex flex-col h-full"
                style={{ background: 'var(--bg2)', borderColor: 'var(--border)', padding: '28px 24px' }}
                whileHover={{ y: -4, borderColor: 'var(--border-hover)' }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              >
                {/* Stars */}
                <div className="flex gap-[3px] mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={12} className="fill-[var(--orange)]" style={{ color: 'var(--orange)' }} strokeWidth={0} />
                  ))}
                </div>

                {/* Quote mark */}
                <Quote size={20} style={{ color: 'var(--orange)', opacity: 0.4, marginBottom: 12 }} strokeWidth={1.5} />

                {/* Text */}
                <p className="text-[14px] font-light leading-[1.75] flex-1 mb-6" style={{ color: 'var(--text-2)' }}>
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Result badge */}
                <div className="inline-flex items-center gap-1 px-3 py-[5px] rounded-full text-[11px] font-semibold mb-5 self-start"
                  style={{ background: 'rgba(255,165,0,0.1)', border: '1px solid rgba(255,165,0,0.2)', color: 'var(--orange)' }}>
                  ✓ {t.result}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold font-syne text-white flex-shrink-0 text-[14px]"
                    style={{ background: 'var(--orange)' }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{t.name}</div>
                    <div className="text-[11px] mt-[1px]" style={{ color: 'var(--text-3)' }}>
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* Subtle trust bar below */}
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-6 items-center justify-center">
            {['Ghana', 'Nigeria', 'United Kingdom', 'United States', 'Togo'].map((country) => (
              <div key={country} className="text-[13px] font-light" style={{ color: 'var(--text-3)' }}>
                {country}
              </div>
            ))}
          </div>
          <p className="text-center text-[12px] mt-3" style={{ color: 'var(--text-3)' }}>
            Projects delivered across 5 countries and counting.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
