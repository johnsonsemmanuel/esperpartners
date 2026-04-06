'use client';

import { ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function CTA() {
  return (
    <section id="contact" className="text-center relative overflow-hidden"
      style={{ padding: '80px 20px', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(255,165,0,0.1) 0%, transparent 70%)' }} />

      <div className="relative z-[1]" style={{ maxWidth: 1180, margin: '0 auto' }}>
        <FadeIn><div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>Let&apos;s Build Together</div></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-syne font-extrabold leading-[1.08] tracking-[-0.035em] mb-4 mx-auto"
            style={{ fontSize: 'clamp(30px,3.8vw,52px)', color: 'var(--text)', maxWidth: 640 }}>
            Your Vision Deserves <span style={{ color: 'var(--orange)' }}>World-Class Engineering</span>
          </h2>
          <p className="font-light leading-[1.7] mb-11 mx-auto"
            style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 500 }}>
            Tell us about your project. We&apos;ll respond within 24 hours with a strategic proposal and zero pressure.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="flex gap-4 justify-center items-center flex-wrap">
          <a href="/contact"
            className="inline-flex items-center gap-2 px-9 py-[15px] rounded-full text-white font-semibold text-[15px] transition-all duration-200 hover:scale-[1.04]"
            style={{ background: 'var(--orange)', boxShadow: '0 8px 32px rgba(255,165,0,0.3)' }}>
            Start a Conversation
          </a>
          <a href="#work"
            className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full border font-normal text-[15px] transition-all duration-200 hover:border-white/30"
            style={{ borderColor: 'var(--border-hover)', color: 'var(--text-2)' }}>
            See Our Work <ArrowRight size={15} strokeWidth={1.5} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
