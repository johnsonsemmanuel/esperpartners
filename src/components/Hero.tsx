'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

// What we build — shown in the cycling slot
const words = ['Web Apps', 'Mobile Apps', 'SaaS Platforms', 'E-Commerce', 'AI Systems'];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.25, 0.1, 0.25, 1] },
});

// Magnetic button: follows cursor within its bounds
function MagneticButton({ children, className, style, href, target, rel }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href: string;
  target?: string;
  rel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 350, damping: 22 });
  const sy = useSpring(y, { stiffness: 350, damping: 22 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.3);
    y.set((e.clientY - cy) * 0.3);
  };

  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      style={{ ...style, x: sx, y: sy }}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % words.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
      style={{ padding: 'clamp(120px,15vw,160px) clamp(20px,5vw,60px) 100px' }}
    >
      {/* ── Animated gradient mesh background ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {/* Base */}
        <div className="absolute inset-0" style={{ background: 'var(--bg)' }} />

        {/* Animated orbs */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 700, height: 700,
            top: '-15%', left: '50%',
            translateX: '-50%',
            background: 'radial-gradient(circle, rgba(255,165,0,0.13) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 500, height: 500,
            bottom: '5%', right: '-10%',
            background: 'radial-gradient(circle, rgba(255,165,0,0.07) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 400, height: 400,
            top: '30%', left: '-8%',
            background: 'radial-gradient(circle, rgba(255,165,0,0.06) 0%, transparent 65%)',
            filter: 'blur(70px)',
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />

        {/* Subtle grid */}
        <div className="hero-grid absolute inset-0" style={{ opacity: 0.6 }} />
      </div>

      {/* ── Content ── */}
      <div className="relative flex flex-col items-center" style={{ zIndex: 1, maxWidth: 880, width: '100%' }}>

        {/* Main headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-syne font-extrabold leading-[1.02] tracking-[-0.04em] mb-6 text-center"
          style={{ fontSize: 'clamp(42px,6.8vw,88px)', color: 'var(--text)' }}
        >
          Software that{' '}
          <span
            className="relative inline-block"
            style={{ minHeight: '1.1em', overflow: 'hidden', verticalAlign: 'bottom' }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ y: '105%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-105%', opacity: 0 }}
                transition={{ duration: 0.42, ease: [0.25, 0.1, 0.25, 1] }}
                className="block"
                style={{ color: 'var(--orange)' }}
              >
                {words[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          <span style={{ color: 'var(--text)' }}>earn money.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...fadeUp(0.32)}
          className="font-light leading-[1.8] mb-10 text-center"
          style={{ fontSize: 'clamp(15px,1.8vw,18px)', color: 'var(--text-2)', maxWidth: 480 }}
        >
          From a simple business website to a full fintech platform — we scope it honestly,
          price it fairly, and deliver on time. Every time.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.42)} className="flex gap-3 items-center justify-center flex-wrap mb-16">
          <MagneticButton
            href="https://cal.com/esperpartners/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-[14px] rounded-full text-white font-semibold text-[15px]"
            style={{ background: 'var(--orange)', boxShadow: '0 8px 36px rgba(255,165,0,0.38)' }}
          >
            <Calendar size={16} strokeWidth={2} />
            Book a Free Call
          </MagneticButton>

          <MagneticButton
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-[13px] rounded-full font-normal text-[15px] transition-colors duration-200"
            style={{
              border: '1px solid var(--border-hover)',
              color: 'var(--text-2)',
              background: 'transparent',
            }}
          >
            Send a Brief <ArrowRight size={14} strokeWidth={1.5} />
          </MagneticButton>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          {...fadeUp(0.52)}
          className="flex items-center justify-center gap-8 flex-wrap"
        >
          {[
            { value: '5', label: 'Countries' },
            { value: '48h', label: 'Response Time' },
            { value: '100%', label: 'Code Ownership' },
            { value: '0', label: 'Missed Deadlines' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="font-syne font-extrabold text-[22px] tracking-[-0.03em]" style={{ color: 'var(--text)' }}>
                {s.value}
              </span>
              <span className="text-[11px] uppercase tracking-[.08em]" style={{ color: 'var(--text-3)' }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          {...fadeUp(0.7)}
          className="mt-16 flex flex-col items-center gap-2"
          style={{ opacity: 0.35 }}
        >
          <motion.div
            className="w-[1px] h-10"
            style={{ background: 'var(--text-2)' }}
            animate={{ scaleY: [1, 1.4, 1], opacity: [0.4, 0.85, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-[10px] uppercase tracking-[.12em]" style={{ color: 'var(--text-3)' }}>
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
