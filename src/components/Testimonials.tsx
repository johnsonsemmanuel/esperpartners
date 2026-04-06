'use client';

import { useReveal } from './useReveal';
import { Star } from 'lucide-react';

const testimonials = [
  { text: "Esper Partners didn't just build our platform — they thought like a co-founder. The product shipped on time, under budget, and it's the best technical decision we've made.", name: 'Amara Diallo', role: 'CEO, PaySwift Africa', initial: 'A' },
  { text: "The engineering quality is world-class. Their code is clean, their communication impeccable, and the UI transitions feel like something Apple would ship.", name: 'James Thornton', role: 'CTO, NovaMed UK', initial: 'J' },
  { text: "We went from a Figma file to a live, scalable platform in 14 weeks. Our investors were blown away. Esper Partners is now our permanent engineering partner.", name: 'Sofia Mendez', role: 'Founder, TradeLoop Mexico', initial: 'S' },
  { text: "Three agencies failed before Esper Partners. They understood the complexity from Day 1 and delivered an enterprise system we're proud to show our board.", name: 'Kwame Asante', role: 'Director of Digital, GoldCoast Bank', initial: 'K' },
  { text: "The attention to detail is exceptional. Every micro-interaction, every loading state — they cared about things most developers ignore completely.", name: 'Lena Fischer', role: 'Head of Product, Karbon DE', initial: 'L' },
];

export default function Testimonials() {
  const sectionRef = useReveal();

  const doubled = [...testimonials, ...testimonials];

  return (
    <section ref={sectionRef} className="py-[120px] bg-[#F7F7F5] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="reveal">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF6200] mb-4">Client Stories</div>
        </div>
        <div className="reveal reveal-d1">
          <h2 className="font-syne font-extrabold text-black leading-[1.1] tracking-[-0.03em] mb-16"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', maxWidth: 600 }}>
            Trusted by Builders Worldwide
          </h2>
        </div>
      </div>

      <div
        className="testi-track flex gap-6"
        style={{ width: 'max-content', animation: 'scrollLeft 30s linear infinite' }}
      >
        {doubled.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-[20px] border border-[#E0E0E0] flex-shrink-0"
            style={{ width: 360, padding: 32 }}
          >
            <div className="flex gap-[3px] mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={13} className="text-[#FF6200] fill-[#FF6200]" strokeWidth={0} />
              ))}
            </div>
            <p className="text-[15px] text-black font-light leading-[1.7] mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[16px] font-bold font-syne text-white flex-shrink-0"
                style={{ background: '#FF6200' }}
              >
                {t.initial}
              </div>
              <div>
                <div className="text-[14px] font-semibold text-black">{t.name}</div>
                <div className="text-[12px] text-[#A0A0A0]">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
