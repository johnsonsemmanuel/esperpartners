'use client';

import { useState, useEffect } from 'react';
import { Lightbulb, PenLine, Settings2, Rocket, CheckCircle2 } from 'lucide-react';
import { FadeIn } from './FadeIn';

const steps = [
  { num: '01', title: 'Discover & Define', desc: 'We run a deep-dive workshop to understand your business, users, and goals. By the end you will have a clear product roadmap, not just a quote.', visual: [{ icon: Lightbulb, label: 'Share Vision' }, { icon: PenLine, label: 'Fill Brief' }, { icon: Settings2, label: 'Set Goals' }, { icon: Rocket, label: 'Set Timeline' }] },
  { num: '02', title: 'Design & Architect', desc: 'Our designers and architects create a pixel-perfect UI and a rock-solid technical foundation — reviewed and approved before a line of code is written.', checks: ['Technical architecture reviewed', 'Stack & integrations confirmed', 'UX wireframes approved', 'Sprint plan in progress'] },
  { num: '03', title: 'Build & Test', desc: 'Agile sprints with daily updates, automated test suites, and rigorous code reviews. You always know exactly where your product stands.', kpis: [{ num: '12', label: 'Sprints' }, { num: '98%', label: 'Test Coverage' }, { num: '0', label: 'Bugs Shipped' }, { num: '14w', label: 'Avg. Delivery' }] },
  { num: '04', title: 'Launch & Scale', desc: 'Zero-downtime deployment, full monitoring setup, and a 6-month support window. We stay on as your long-term tech partner.', checks: ['Deployed to production', 'Monitoring & alerts active', 'Team handover complete', '6-month support begins'] },
];

export default function Process() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % steps.length), 3200);
    return () => clearInterval(t);
  }, []);

  const s = steps[active];

  return (
    <section id="steps" style={{ padding: '80px 20px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <FadeIn><div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>How It Works</div></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-syne font-extrabold leading-[1.08] tracking-[-0.035em] mb-10" style={{ fontSize: 'clamp(28px,3.8vw,52px)', color: 'var(--text)' }}>
            From Brief to Launch <span style={{ color: 'var(--orange)' }}>in Weeks</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-col lg:grid lg:gap-16" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'start' }}>
          {/* Visual panel — desktop only */}
          <div className="hidden lg:flex sticky top-24 rounded-[20px] overflow-hidden border items-center justify-center p-7"
            style={{ background: 'var(--bg3)', borderColor: 'var(--border)', aspectRatio: '4/3' }}>
            {s.visual && (
              <div className="grid grid-cols-2 gap-3 w-full">
                {s.visual.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div key={v.label} className="flex items-center gap-3 rounded-xl border p-4 text-[13px] font-medium"
                      style={{ background: 'var(--bg2)', borderColor: 'var(--border)', color: 'var(--text)' }}>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,165,0,0.12)' }}>
                        <Icon size={14} style={{ color: 'var(--orange)' }} strokeWidth={1.5} />
                      </div>
                      {v.label}
                    </div>
                  );
                })}
              </div>
            )}
            {s.checks && (
              <div className="flex flex-col gap-3 w-full">
                {s.checks.map((c, i) => (
                  <div key={c} className="flex items-center gap-3 rounded-[10px] border p-3 text-[13px]"
                    style={{ background: 'var(--bg2)', borderColor: 'var(--border)', color: 'var(--text)' }}>
                    <CheckCircle2 size={18} strokeWidth={1.5} style={{ color: i < s.checks!.length - 1 ? '#22c55e' : 'var(--orange)', flexShrink: 0 }} />
                    {c}
                  </div>
                ))}
              </div>
            )}
            {s.kpis && (
              <div className="grid grid-cols-2 gap-3 w-full">
                {s.kpis.map((k) => (
                  <div key={k.label} className="rounded-xl border p-4 text-center" style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
                    <div className="font-syne font-extrabold text-[28px] tracking-[-0.03em]" style={{ color: 'var(--orange)' }}>{k.num}</div>
                    <div className="text-[11px] uppercase tracking-[.06em] mt-1" style={{ color: 'var(--text-3)' }}>{k.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Steps list */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div key={i} className="py-6 border-b" style={{ borderColor: 'var(--border)', cursor: 'none' }} onClick={() => setActive(i)}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[12px] font-bold font-syne border transition-all duration-300 flex-shrink-0"
                    style={{ background: active === i ? 'var(--orange)' : 'var(--bg3)', borderColor: active === i ? 'var(--orange)' : 'var(--border)', color: active === i ? '#fff' : 'var(--text-3)' }}>
                    {step.num}
                  </div>
                  <div className="font-syne font-extrabold text-[18px] tracking-[-0.03em] transition-colors duration-300"
                    style={{ color: active === i ? 'var(--text)' : 'var(--text-2)' }}>
                    {step.title}
                  </div>
                </div>
                <div className="text-[14px] font-light leading-[1.7] pl-10 transition-all duration-300"
                  style={{ color: 'var(--text-2)', maxHeight: active === i ? 120 : 0, overflow: 'hidden', opacity: active === i ? 1 : 0 }}>
                  {step.desc}
                </div>
                <div className="step-progress ml-10 mt-3 rounded-sm"
                  style={{ width: active === i ? '100%' : '0%', transition: active === i ? 'width 3.2s linear' : 'none' }} />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
