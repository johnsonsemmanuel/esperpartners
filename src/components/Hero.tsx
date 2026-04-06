'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const words = ['Web Apps', 'Mobile Apps', 'SaaS Platforms', 'E-Commerce Stores', 'AI Systems'];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.25, 0.1, 0.25, 1] },
});

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
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  return (
    <motion.a ref={ref} href={href} target={target} rel={rel}
      style={{ ...style, x: sx, y: sy }} className={className}
      onMouseMove={handleMove} onMouseLeave={() => { x.set(0); y.set(0); }}
      whileTap={{ scale: 0.96 }}>
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
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
      style={{ padding: 'clamp(120px,15vw,160px) clamp(20px,5vw,60px) 100px' }}>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute inset-0" style={{ background: 'var(--bg)' }} />
        <motion.div className="absolute rounded-full"
          style={{ width: 700, height: 700, top: '-15%', left: '50%', translateX: '-50%', background: 'radial-gradient(circle, rgba(255,165,0,0.11) 0%, transparent 65%)', filter: 'blur(60px)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute rounded-full"
          style={{ width: 400, height: 400, bottom: '5%', right: '-8%', background: 'radial-gradient(circle, rgba(255,165,0,0.06) 0%, transparent 65%)', filter: 'blur(80px)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />
        <div className="hero-grid absolute inset-0" style={{ opacity: 0.5 }} />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center" style={{ zIndex: 1, maxWidth: 860, width: '100%' }}>

        {/* Social proof pill */}
        <motion.div {...fadeUp(0.1)}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8"
          style={{ background: 'rgba(255,165,0,0.08)', border: '1px solid rgba(255,165,0,0.2)' }}>
          <div className="flex gap-[2px]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="var(--orange)"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></svg>
            ))}
          </div>
          <span className="text-[12px] font-light" style={{ color: 'var(--text-2)' }}>
            &ldquo;Figma to live platform in 14 weeks. Our investors were blown away.&rdquo;
          </span>
          <span className="text-[11px] font-semibold flex-shrink-0" style={{ color: 'var(--orange)' }}>— Sofia M.</span>
        </motion.div>

        {/* Headline — fixed grammar, stronger copy */}
        <motion.h1 {...fadeUp(0.2)}
          className="font-syne font-extrabold leading-[1.02] tracking-[-0.04em] mb-5 text-center"
          style={{ fontSize: 'clamp(42px,6.8vw,88px)', color: 'var(--text)' }}>
          We Build{' '}
          <span className="relative inline-block" style={{ minHeight: '1.1em', overflow: 'hidden', verticalAlign: 'bottom' }}>
            <AnimatePresence mode="wait">
              <motion.span key={idx}
                initial={{ y: '105%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-105%', opacity: 0 }}
                transition={{ duration: 0.42, ease: [0.25, 0.1, 0.25, 1] }}
                className="block" style={{ color: 'var(--orange)' }}>
                {words[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          <span style={{ color: 'var(--text)' }}>That Drive Growth.</span>
        </motion.h1>

        {/* Sub — specific, honest, speaks to the client */}
        <motion.p {...fadeUp(0.32)}
          className="font-light leading-[1.8] mb-4 text-center"
          style={{ fontSize: 'clamp(15px,1.8vw,18px)', color: 'var(--text-2)', maxWidth: 500 }}>
          From a simple business website to a full fintech platform — we scope it honestly,
          price it fairly, and deliver on time. No surprises. No disappearing after launch.
        </motion.p>

        {/* Trust line */}
        <motion.p {...fadeUp(0.38)} className="text-[13px] mb-10" style={{ color: 'var(--text-3)' }}>
          Projects delivered in Ghana · Nigeria · UK · USA · Togo
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.44)} className="flex gap-3 items-center justify-center flex-wrap">
          <MagneticButton
            href="https://cal.com/esperpartners/discovery"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-[14px] rounded-full text-white font-semibold text-[15px]"
            style={{ background: 'var(--orange)', boxShadow: '0 8px 36px rgba(255,165,0,0.35)' }}>
            <Calendar size={16} strokeWidth={2} />
            Book a Free Call
          </MagneticButton>
          <MagneticButton
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-[13px] rounded-full font-normal text-[15px]"
            style={{ border: '1px solid var(--border-hover)', color: 'var(--text-2)', background: 'transparent' }}>
            Send a Brief <ArrowRight size={14} strokeWidth={1.5} />
          </MagneticButton>
        </motion.div>

        {/* Scroll hint */}
        <motion.div {...fadeUp(0.6)} className="mt-16 flex flex-col items-center gap-2" style={{ opacity: 0.3 }}>
          <motion.div className="w-[1px] h-10" style={{ background: 'var(--text-2)' }}
            animate={{ scaleY: [1, 1.4, 1], opacity: [0.4, 0.85, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} />
          <span className="text-[10px] uppercase tracking-[.12em]" style={{ color: 'var(--text-3)' }}>Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
