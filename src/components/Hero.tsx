'use client';

import { useEffect, useState, useRef } from 'react';
import {
  ShoppingCart, LayoutDashboard, HeartPulse, Landmark,
  Link2, BrainCircuit, ArrowRight, TrendingUp, Users, Zap,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Cursor from './Cursor';

const floatingCards = [
  { icon: ShoppingCart, label: 'E-Commerce Platform', style: { top: '18%', left: '2%' }, duration: '7s', delay: '0s' },
  { icon: LayoutDashboard, label: 'Analytics Dashboard', style: { top: '22%', right: '2%' }, duration: '6.5s', delay: '1.2s' },
  { icon: HeartPulse, label: 'Health Management', style: { top: '58%', left: '1%' }, duration: '8s', delay: '2.1s' },
  { icon: Landmark, label: 'FinTech Solution', style: { top: '65%', right: '2%' }, duration: '7.5s', delay: '0.7s' },
  { icon: Link2, label: 'API Integration', style: { top: '82%', left: '7%' }, duration: '6s', delay: '3s' },
  { icon: BrainCircuit, label: 'AI Automation', style: { top: '10%', right: '13%' }, duration: '9s', delay: '1.8s' },
];

const cyclingWords = ['Web Apps', 'Mobile Apps', 'Enterprise Systems', 'AI Products', 'SaaS Platforms'];

const mockStats = [
  { icon: TrendingUp, label: 'Revenue Growth', value: '+340%', sub: 'avg. client growth' },
  { icon: Users, label: 'Active Users', value: '4.2M+', sub: 'across all platforms' },
  { icon: Zap, label: 'Uptime SLA', value: '99.99%', sub: 'guaranteed' },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState(cyclingWords[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => {
        const next = (prev + 1) % cyclingWords.length;
        setDisplayed(cyclingWords[next]);
        return next;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#05050A]"
      style={{ padding: '120px 24px 80px' }}>
      <Cursor />

      {/* Grid */}
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      {/* Glow blobs */}
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      {/* Floating cards — desktop only */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        {floatingCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className="absolute flex items-center gap-3 bg-white/[0.05] border border-white/10 rounded-2xl px-4 py-3 text-[12px] font-medium text-white/80 backdrop-blur-sm"
              style={{
                ...card.style,
                animation: `floatDrift ${card.duration} ease-in-out ${card.delay} infinite`,
              } as React.CSSProperties}
            >
              <span className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon size={13} className="text-[#FF6200]" strokeWidth={1.5} />
              </span>
              {card.label}
            </div>
          );
        })}
      </div>

      {/* Badge */}
      <div className="hero-fade-1 inline-flex items-center gap-2 px-4 py-[6px] border border-white/10 rounded-full text-[11px] font-semibold text-white/50 uppercase tracking-[0.1em] mb-8 bg-white/[0.03]">
        <span className="w-[5px] h-[5px] rounded-full bg-[#FF6200] animate-pulse-dot" />
        Software Excellence · Global Standard
      </div>

      {/* Headline */}
      <h1
        className="hero-fade-2 font-syne font-extrabold text-center text-white leading-[1.05] tracking-[-0.04em] mb-6"
        style={{ fontSize: 'clamp(42px, 6.5vw, 88px)', maxWidth: 920 }}
      >
        We Build
        {' '}
        <span className="relative inline-block">
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[#FF6200] inline-block"
            >
              {displayed}
            </motion.span>
          </AnimatePresence>
        </span>
        <br />
        That Move Markets
      </h1>

      {/* Subtitle */}
      <p
        className="hero-fade-3 text-white/50 text-center font-light leading-[1.75] mb-10"
        style={{ fontSize: 'clamp(15px, 1.8vw, 19px)', maxWidth: 520 }}
      >
        From early-stage startups to Fortune-level enterprises — we engineer software that scales, performs, and lasts.
      </p>

      {/* CTAs */}
      <div className="hero-fade-4 flex gap-4 items-center mb-20 flex-wrap justify-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-[14px] rounded-full text-white font-semibold text-[14px] transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(255,98,0,0.4)]"
          style={{ background: '#FF6200', boxShadow: '0 8px 32px rgba(255,98,0,0.3)' }}
        >
          Start a Project <ArrowRight size={15} strokeWidth={2} />
        </a>
        <a
          href="#work"
          className="inline-flex items-center gap-2 px-8 py-[14px] rounded-full border border-white/10 text-white/70 font-medium text-[14px] transition-all duration-200 hover:border-white/30 hover:text-white hover:scale-[1.02]"
        >
          See Our Work
        </a>
      </div>

      {/* Mock dashboard card */}
      <div className="hero-fade-5 w-full max-w-[860px] mx-auto">
        <div
          className="relative rounded-3xl border border-white/10 overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)' }}
        >
          {/* Top bar */}
          <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.06]">
            <span className="w-3 h-3 rounded-full bg-white/10" />
            <span className="w-3 h-3 rounded-full bg-white/10" />
            <span className="w-3 h-3 rounded-full bg-white/10" />
            <span className="ml-4 text-[11px] text-white/20 font-mono">esper-dashboard.app</span>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 divide-x divide-white/[0.06] px-0">
            {mockStats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex flex-col gap-1 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={14} className="text-[#FF6200]" strokeWidth={1.5} />
                    <span className="text-[11px] text-white/30 uppercase tracking-[0.08em]">{s.label}</span>
                  </div>
                  <div className="font-syne font-extrabold text-white text-[28px] tracking-[-0.03em]">{s.value}</div>
                  <div className="text-[11px] text-white/30">{s.sub}</div>
                </div>
              );
            })}
          </div>

          {/* Chart bar area */}
          <div className="px-6 pb-6 pt-2">
            <div className="flex items-end gap-[6px] h-[80px]">
              {[35, 52, 41, 68, 55, 80, 62, 90, 74, 95, 82, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md transition-all duration-300"
                  style={{
                    height: `${h}%`,
                    background: i === 11
                      ? '#FF6200'
                      : `rgba(255,98,0,${0.12 + i * 0.04})`,
                    animationDelay: `${i * 0.05}s`,
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
                <span key={m} className="text-[9px] text-white/20 flex-1 text-center">{m}</span>
              ))}
            </div>
          </div>

          {/* Glow inside card */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: 400, height: 200,
              background: 'radial-gradient(ellipse, rgba(255,98,0,0.12) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
