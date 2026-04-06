'use client';

import { useReveal } from './useReveal';

export default function CTA() {
  const sectionRef = useReveal();

  return (
    <section id="contact" ref={sectionRef} className="py-[120px] px-12 bg-[#111111] text-center relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(255,98,0,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-[1]">
        <div className="reveal">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF6200] mb-4">Let's Build</div>
        </div>
        <div className="reveal reveal-d1">
          <h2
            className="font-syne font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-4 mx-auto"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', maxWidth: 700 }}
          >
            Your Vision Deserves World-Class Engineering
          </h2>
          <p className="text-[17px] text-[#A0A0A0] font-light leading-[1.7] mb-12 mx-auto" style={{ maxWidth: 500 }}>
            Tell us about your project. We'll respond within 24 hours with a strategic proposal.
          </p>
        </div>
        <div className="reveal reveal-d2 flex gap-4 justify-center items-center flex-wrap">
          <a
            href="mailto:hello@esperpartners.com"
            className="inline-block px-9 py-4 rounded-full text-white font-semibold text-[15px] transition-all duration-200 hover:scale-[1.04]"
            style={{ background: '#FF6200', boxShadow: '0 8px 32px rgba(255,98,0,0.3)' }}
          >
            Start a Conversation
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-[30px] py-[15px] rounded-full border font-medium text-[15px] transition-all duration-200 hover:scale-[1.02]"
            style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#A0A0A0' }}
          >
            View Case Studies →
          </a>
        </div>
      </div>
    </section>
  );
}
