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
      style={{ padding: 'clamp(100px, 15vw, 140px) clamp(20px, 5vw, 60px) 80px' }}>

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0, filter: 'blur(3px) brightness(0.6)', transform: 'scale(1.05)' }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Black overlay */}
      <div className="absolute inset-0" style={{ zIndex: 1, background: 'rgba(0,0,0,0.55)' }} />

      {/* Grid overlay */}
      <div className="hero-grid absolute inset-0" style={{ zIndex: 2 }} />

      {/* Orange glow */}
      <div className="absolute pointer-events-none" style={{
        zIndex: 2,
        top: '-10%', left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 400,
        background: 'radial-gradient(ellipse, rgba(255,98,0,0.10) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      {/* Content */}
      <div className="relative flex flex-col items-center" style={{ zIndex: 3 }}>

        {/* Eyebrow */}
        <div className="hero-fade-1 text-[13px] font-medium uppercase tracking-[.1em] mb-6"
          style={{ color: 'var(--orange)' }}>
          Idea → Architecture → Launch
        </div>

        {/* Headline */}
        <h1 className="hero-fade-2 font-syne font-extrabold leading-[1.02] tracking-[-0.04em] mb-5 text-center"
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
                className="block"
                style={{ color: 'var(--orange)' }}
              >
                {words[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        {/* Sub */}
        <p className="hero-fade-3 font-light leading-[1.75] mb-10 text-center"
          style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: 'rgba(255,255,255,0.7)', maxWidth: 520 }}>
          From sleek websites to enterprise-grade platforms — we engineer software that powers ambitious businesses across Ghana, Nigeria, the UK, the USA, and Togo.
        </p>

        {/* CTAs */}
        <div className="hero-fade-4 flex gap-4 items-center justify-center flex-wrap">
          <a href="#contact"
            className="inline-flex items-center gap-2 px-9 py-[15px] rounded-full text-white font-semibold text-[15px] transition-all duration-200 hover:scale-[1.04]"
            style={{ background: 'var(--orange)', boxShadow: '0 8px 32px rgba(255,98,0,0.35)' }}>
            Start a Project
          </a>
          <a href="#features"
            className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full border font-normal text-[15px] transition-all duration-200 hover:border-white/40"
            style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.05)' }}>
            See What We Build <ArrowRight size={15} strokeWidth={1.5} />
          </a>
        </div>

        {/* Scroll hint */}
        <div className="hero-fade-4 mt-16 flex flex-col items-center gap-2 opacity-40">
          <div className="w-[1px] h-10 bg-white/40" style={{ animation: 'scrollHint 1.8s ease-in-out infinite' }} />
          <span className="text-[11px] uppercase tracking-[.12em] text-white/50">Scroll</span>
        </div>
      </div>
    </section>
  );
}
