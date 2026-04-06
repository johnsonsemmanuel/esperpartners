'use client';

import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, MagneticWrap } from './FadeIn';

export default function CTA() {
  return (
    <section
      id="contact"
      className="text-center relative overflow-hidden"
      style={{ padding: '100px 20px', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%',
          translateX: '-50%', translateY: '-50%',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(255,165,0,0.1) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-[1]" style={{ maxWidth: 1180, margin: '0 auto' }}>
        <FadeIn>
          <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>
            Let&apos;s Build Together
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="font-syne font-extrabold leading-[1.06] tracking-[-0.04em] mb-5 mx-auto"
            style={{ fontSize: 'clamp(32px,4.5vw,60px)', color: 'var(--text)', maxWidth: 680 }}
          >
            Your vision deserves{' '}
            <span style={{ color: 'var(--orange)' }}>world-class engineering.</span>
          </h2>
          <p
            className="font-light leading-[1.75] mb-12 mx-auto"
            style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 480 }}
          >
            Tell us about your project. We&apos;ll respond within 24 hours with a clear proposal — no jargon, no pressure.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="flex gap-4 justify-center items-center flex-wrap">
          <MagneticWrap
            as="a"
            href="https://cal.com/esperpartners/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-9 py-[15px] rounded-full text-white font-semibold text-[15px]"
            style={{ background: 'var(--orange)', boxShadow: '0 8px 36px rgba(255,165,0,0.35)' }}
          >
            <Calendar size={16} strokeWidth={2} />
            Book a Free Discovery Call
          </MagneticWrap>

          <MagneticWrap
            as="a"
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full border font-normal text-[15px] transition-colors duration-200"
            style={{ borderColor: 'var(--border-hover)', color: 'var(--text-2)' }}
          >
            Send a Brief <ArrowRight size={15} strokeWidth={1.5} />
          </MagneticWrap>
        </FadeIn>

        {/* Social proof footnote */}
        <FadeIn delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            {[
              '48h response guarantee',
              'No lock-in contracts',
              '100% code ownership',
              'Projects in 5 countries',
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-[13px] font-light" style={{ color: 'var(--text-3)' }}>
                <span style={{ color: 'var(--orange)' }}>✓</span> {t}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
