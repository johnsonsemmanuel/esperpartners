'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['Web Apps', 'Mobile Apps', 'SaaS Platforms', 'E-Commerce', 'Enterprise Systems'];

// One real social proof snippet above the fold
const proof = { quote: 'Figma to live platform in 14 weeks. Our investors were blown away.', name: 'Sofia M.', role: 'Founder, TradeLoop' };

const stats = [
  { value: '5', label: 'Countries' },
  { value: '48h', label: 'Response Time' },
  { value: '100%', label: 'Code Ownership' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
      style={{ padding: 'clamp(100px,15vw,140px) clamp(20px,5vw,60px) 80px' }}>

      {/* Video */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0, filter: 'blur(3px) brightness(0.55)', transform: 'scale(1.05)' }}>
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0" style={{ zIndex: 1, background: 'rgba(0,0,0,0.58)' }} />
      <div className="hero-grid absolute inset-0" style={{ zIndex: 2 }} />
      <div className="absolute pointer-events-none" style={{ zIndex: 2, top: '-10%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 400, background: 'radial-gradient(ellipse, rgba(255,165,0,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      {/* Content */}
      <div className="relative flex flex-col items-center" style={{ zIndex: 3, maxWidth: 860, width: '100%' }}>

        {/* Social proof pill — above the fold */}
        <motion.div {...fadeUp(0.1)}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)' }}>
          <div className="flex gap-[2px]">
            {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-[#FFA500]" style={{ color: 'var(--orange)' }} strokeWidth={0} />)}
          </div>
          <span className="text-[12px] font-light" style={{ color: 'rgba(255,255,255,0.75)' }}>
            &ldquo;{proof.quote}&rdquo;
          </span>
          <span className="text-[11px] font-semibold flex-shrink-0" style={{ color: 'var(--orange)' }}>— {proof.name}</span>
        </motion.div>

        {/* Eyebrow */}
        <motion.div {...fadeUp(0.2)} className="text-[12px] font-semibold uppercase tracking-[.12em] mb-5" style={{ color: 'var(--orange)' }}>
          Ghana · Nigeria · UK · USA · Togo
        </motion.div>

        {/* Headline */}
        <motion.h1 {...fadeUp(0.3)} className="font-syne font-extrabold leading-[1.02] tracking-[-0.04em] mb-5 text-center"
          style={{ fontSize: 'clamp(40px,6.5vw,84px)' }}>
          <span className="text-white">We Build </span>
          <span className="relative inline-block" style={{ minHeight: '1.1em', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.span key={idx}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="block" style={{ color: 'var(--orange)' }}>
                {words[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          <span className="text-white">That Move Markets</span>
        </motion.h1>

        {/* Sub — specific, answers "can you build what I need" */}
        <motion.p {...fadeUp(0.4)} className="font-light leading-[1.75] mb-4 text-center"
          style={{ fontSize: 'clamp(15px,1.8vw,18px)', color: 'rgba(255,255,255,0.65)', maxWidth: 520 }}>
          From a simple business website to a full fintech platform — we scope it honestly, price it fairly, and deliver on time. Every time.
        </motion.p>

        {/* Trust line */}
        <motion.p {...fadeUp(0.45)} className="text-[13px] font-medium mb-10" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Trusted by founders in Accra, Lagos, London &amp; beyond
        </motion.p>

        {/* CTAs — discovery call is primary */}
        <motion.div {...fadeUp(0.5)} className="flex gap-3 items-center justify-center flex-wrap mb-14">
          <motion.a href="https://cal.com/esperpartners/discovery"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-[14px] rounded-full text-white font-semibold text-[15px]"
            style={{ background: 'var(--orange)', boxShadow: '0 8px 32px rgba(255,165,0,0.35)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
            <Calendar size={16} strokeWidth={2} />
            Book a Free Discovery Call
          </motion.a>
          <motion.a href="/contact"
            className="inline-flex items-center gap-2 px-7 py-[13px] rounded-full font-normal text-[15px]"
            style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.04)' }}
            whileHover={{ scale: 1.03, borderColor: 'rgba(255,255,255,0.4)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
            Send a Brief <ArrowRight size={14} strokeWidth={1.5} />
          </motion.a>
        </motion.div>

        {/* Quick stats strip */}
        <motion.div {...fadeUp(0.6)} className="flex items-center gap-8 flex-wrap justify-center">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="font-syne font-extrabold text-[22px] tracking-[-0.03em] text-white">{s.value}</span>
              <span className="text-[11px] uppercase tracking-[.08em]" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div {...fadeUp(0.8)} className="mt-14 flex flex-col items-center gap-2" style={{ opacity: 0.35 }}>
          <motion.div className="w-[1px] h-10 bg-white/40"
            animate={{ scaleY: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} />
          <span className="text-[10px] uppercase tracking-[.12em] text-white/50">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
