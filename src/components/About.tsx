'use client';

import { useEffect, useRef } from 'react';
import { Users, Globe2, Award, Handshake } from 'lucide-react';

const pillars = [
  { icon: Users, title: 'People First', desc: 'We hire exceptional engineers and treat them well. Great teams build great software.' },
  { icon: Globe2, title: 'Global Reach', desc: 'Clients across 28+ countries trust us to deliver on time, every time.' },
  { icon: Award, title: 'Quality Standard', desc: 'We don\'t ship until it\'s excellent. Every line of code is reviewed, tested, and owned.' },
  { icon: Handshake, title: 'Long-Term Partners', desc: 'We don\'t disappear after launch. We stay on as your engineering partner.' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-[120px] px-6 md:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF6200] mb-4">Who We Are</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="reveal reveal-d1">
            <h2 className="font-syne font-extrabold text-black leading-[1.1] tracking-[-0.03em] mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              A Studio Built on Craft and Conviction
            </h2>
            <p className="text-[17px] text-[#5A5A5A] font-light leading-[1.7] mb-4">
              Esper Partners is a software engineering studio founded on a simple belief: the best software comes from teams that care deeply about the problem, not just the paycheck.
            </p>
            <p className="text-[17px] text-[#5A5A5A] font-light leading-[1.7]">
              We work with startups, scale-ups, and enterprises to design, build, and scale digital products that make a real difference in the world.
            </p>
          </div>

          <div className="reveal reveal-d2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="p-6 rounded-2xl border border-[#E0E0E0] hover:border-[#FF6200] transition-colors duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-[#F2F2F2] flex items-center justify-center mb-4 group-hover:bg-[#FF6200] transition-colors duration-300">
                    <Icon size={18} strokeWidth={1.5} className="text-[#1A1A1A] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="font-syne font-bold text-[15px] text-black mb-2">{p.title}</div>
                  <div className="text-[13px] text-[#5A5A5A] font-light leading-[1.6]">{p.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
