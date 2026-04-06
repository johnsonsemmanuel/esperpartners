'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['That Scales.', 'That Converts.', 'That Wins.', 'That Lasts.', 'That Matters.'];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % words.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
      style={{ padding: '100px 40px 80px' }}>
      <div className="hero-bg" />
      <div className="hero-grid" />

      {/* Eyebrow only — removed badge */}
      <div className="hero-fade-1 text-[13px] font-medium text-[var(--orange)] uppercase tracking-[.1em] mb-6">
        Idea → Architecture → Launch
      </div>

      {/* Headline */}
      <h1 className="hero-fade-2 font-syne font-extrabold leading-[1.02] tracking-[-0.04em] mb-4"
        style={{ fontSize: 'clamp(44px, 6.5vw, 88px)', maxWidth: 900 }}>
        <span className="text-white">We Build Software</span>
        <br />
        <span className="relative inline-block" style={{ minHeight: '1.1em', overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={idx}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[var(--orange)] block"
            >
              {words[idx]}
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>

      {/* Sub */}
      <p className="hero-fade-3 font-light leading-[1.7] mb-11"
        style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: 'var(--text-2)', maxWidth: 520 }}>
        From sleek websites to enterprise-grade platforms — we engineer software that powers ambitious businesses across the world.
      </p>

      {/* CTAs */}
      <div className="hero-fade-4 flex gap-4 items-center justify-center flex-wrap">
        <a href="#contact"
          className="inline-flex items-center gap-2 px-9 py-[15px] rounded-full text-white font-semibold text-[15px] transition-all duration-200 hover:scale-[1.04]"
          style={{ background: 'var(--orange)', boxShadow: '0 8px 32px rgba(255,98,0,0.3)' }}>
          Start a Project
        </a>
        <a href="#features"
          className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full border font-normal text-[15px] transition-all duration-200 hover:border-white/30"
          style={{ borderColor: 'var(--border-hover)', color: 'var(--text-2)' }}>
          See What We Build <ArrowRight size={15} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
