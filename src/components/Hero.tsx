'use client';

import { useEffect, useState } from 'react';
import { ShoppingCart, LayoutDashboard, HeartPulse, Landmark, Link2, BrainCircuit, Lightbulb, PenLine, Settings2, FlaskConical, Rocket, ArrowRight } from 'lucide-react';
import Cursor from './Cursor';

const floatingCards = [
  { icon: ShoppingCart, label: 'E-Commerce Platform', style: { top: '12%', left: '3%' }, duration: '7s', delay: '0s' },
  { icon: LayoutDashboard, label: 'Analytics Dashboard', style: { top: '20%', right: '2%' }, duration: '6.5s', delay: '1.2s' },
  { icon: HeartPulse, label: 'Health Management App', style: { top: '55%', left: '1%' }, duration: '8s', delay: '2.1s' },
  { icon: Landmark, label: 'FinTech Solution', style: { top: '62%', right: '3%' }, duration: '7.5s', delay: '0.7s' },
  { icon: Link2, label: 'API Integration', style: { top: '80%', left: '8%' }, duration: '6s', delay: '3s' },
  { icon: BrainCircuit, label: 'AI-Powered Automation', style: { top: '8%', right: '14%' }, duration: '9s', delay: '1.8s' },
];

const stages = [
  { icon: Lightbulb, label: 'Idea', caption: 'Spark of genius' },
  { icon: PenLine, label: 'Design', caption: 'Blueprint it' },
  { icon: Settings2, label: 'Build', caption: 'Engineering magic' },
  { icon: FlaskConical, label: 'Test', caption: 'Quality assured' },
  { icon: Rocket, label: 'Launch', caption: 'Live worldwide' },
];

export default function Hero() {
  const [activeStage, setActiveStage] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const progressPct = (activeStage / (stages.length - 1)) * 100;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white"
      style={{ padding: '120px 48px 80px' }}
    >
      <Cursor />

      {/* Grid bg */}
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      {/* Floating cards — hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        {floatingCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className="absolute flex items-center gap-3 bg-white border border-[#E0E0E0] rounded-2xl px-[18px] py-[14px] text-[13px] font-medium text-black shadow-[0_8px_40px_rgba(0,0,0,0.08)] opacity-85"
              style={{
                ...card.style,
                animation: `floatDrift ${card.duration} ease-in-out ${card.delay} infinite`,
              } as React.CSSProperties}
            >
              <span className="w-8 h-8 bg-[#F2F2F2] rounded-[10px] flex items-center justify-center">
                <Icon size={15} className="text-[#1A1A1A]" strokeWidth={1.5} />
              </span>
              {card.label}
            </div>
          );
        })}
      </div>

      {/* Tag */}
      <div className="hero-fade-1 inline-flex items-center gap-2 px-4 py-[6px] border border-[#E0E0E0] rounded-full text-[12px] font-medium text-[#5A5A5A] uppercase tracking-[0.08em] mb-8">
        <span className="w-[6px] h-[6px] rounded-full bg-[#FF6200] animate-pulse-dot" />
        Software Excellence · Global Standard
      </div>

      {/* Title */}
      <h1 className="hero-fade-2 font-syne font-extrabold text-center text-black leading-[1.0] tracking-[-0.04em] mb-6"
        style={{ fontSize: 'clamp(48px, 7vw, 96px)', maxWidth: 900 }}>
        From Idea to<br />
        <span className="text-[#FF6200]">Extraordinary</span><br />
        Software
      </h1>

      {/* Subtitle */}
      <p className="hero-fade-3 text-[#5A5A5A] text-center font-light leading-[1.7] mb-12"
        style={{ fontSize: 'clamp(16px, 2vw, 20px)', maxWidth: 540 }}>
        We engineer software that powers businesses across the world — from elegant web apps to enterprise-grade platforms.
      </p>

      {/* Actions */}
      <div className="hero-fade-4 flex gap-4 items-center mb-24 flex-wrap justify-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-white font-semibold text-[15px] transition-all duration-200 hover:scale-[1.04]"
          style={{ background: '#FF6200', boxShadow: '0 8px 32px rgba(255,98,0,0.25)' }}
        >
          Start Building
        </a>
        <a
          href="#work"
          className="inline-flex items-center gap-2 px-[30px] py-[15px] rounded-full border border-[#E0E0E0] text-black font-medium text-[15px] transition-all duration-200 hover:border-black hover:scale-[1.02]"
        >
          See Our Work <ArrowRight size={15} strokeWidth={2} />
        </a>
      </div>

      {/* Stage tracker */}
      <div className="hero-fade-5 relative w-full" style={{ maxWidth: 780, height: 340 }}>
        {/* Track */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#E0E0E0]">
          <div
            className="orbit-progress-bar absolute left-0 top-0 bottom-0 bg-[#FF6200] rounded-[2px]"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {/* Stages */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between items-center">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            const isActive = i === activeStage;
            const isDone = i < activeStage;
            return (
              <div
                key={i}
                className={`relative flex flex-col items-center gap-3 ${isActive ? 'stage-active' : ''} ${isDone ? 'stage-done' : ''}`}
              >
                {/* Caption */}
                <div
                  className="stage-caption absolute text-[13px] font-medium text-black bg-white border border-[#E0E0E0] px-[14px] py-[6px] rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] whitespace-nowrap pointer-events-none"
                  style={{ top: -72 }}
                >
                  {stage.caption}
                </div>

                {/* Bubble */}
                <div
                  className="stage-bubble relative z-[2] flex items-center justify-center bg-white border-2 border-[#E0E0E0] shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                  style={{
                    width: 60, height: 60, borderRadius: 18,
                    ...(isActive ? { borderColor: '#FF6200', background: '#FF6200', transform: 'scale(1.15)', boxShadow: '0 8px 32px rgba(255,98,0,0.3)' } : {}),
                    ...(isDone ? { borderColor: '#FF6200' } : {}),
                  }}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="transition-colors duration-300"
                    style={{ color: isActive ? '#fff' : isDone ? '#FF6200' : '#A0A0A0' }}
                  />
                </div>

                {/* Label */}
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.06em] whitespace-nowrap transition-colors duration-300"
                  style={{ color: isActive ? '#FF6200' : isDone ? '#0A0A0A' : '#A0A0A0' }}
                >
                  {stage.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
