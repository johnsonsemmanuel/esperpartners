'use client';

import { Lock, Plug, Cloud, Smartphone, BarChart3, Bot } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './FadeIn';

export default function Services() {
  return (
    <section id="features" style={{ padding: '80px 20px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <FadeIn><div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>What We Build</div></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-syne font-extrabold leading-[1.08] tracking-[-0.035em] mb-4" style={{ fontSize: 'clamp(28px,3.8vw,52px)', color: 'var(--text)' }}>
            Every Software Solution.<br /><span style={{ color: 'var(--orange)' }}>One Studio.</span>
          </h2>
          <p className="font-light leading-[1.7] mb-10" style={{ fontSize: 16, color: 'var(--text-2)', maxWidth: 520 }}>
            From landing pages to distributed enterprise systems — we architect, design, and build digital products that scale globally.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-[16px] overflow-hidden flex flex-col md:grid md:rounded-[20px]"
            style={{ gap: 2, background: 'var(--border)', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: 'auto auto' }}>

            {/* Web & Mobile */}
            <div className="bento-card p-6 md:p-9 relative overflow-hidden md:[grid-row:span_2]">
              <div className="text-[11px] font-bold tracking-[.1em] uppercase mb-3" style={{ color: 'var(--orange)' }}>Web &amp; Mobile</div>
              <div className="font-syne font-extrabold text-[20px] leading-[1.2] tracking-[-0.03em] mb-2" style={{ color: 'var(--text)' }}>Apps That Feel Alive</div>
              <p className="text-[14px] font-light leading-[1.65] mb-5" style={{ color: 'var(--text-2)' }}>High-performance web apps and native mobile experiences with buttery-smooth UX your users will love.</p>
              <FadeInStagger className="flex flex-col gap-[8px]">
                {[
                  { icon: Smartphone, text: 'iOS App Deployed', sub: 'App Store · Live in 34 countries', time: '2m ago' },
                  { icon: BarChart3, text: 'Web App v2.4 Released', sub: 'Zero downtime deployment', time: '8m ago' },
                  { icon: Lock, text: 'Performance: 99/100', sub: 'Lighthouse score achieved', time: '12m ago' },
                  { icon: Plug, text: '1,240 New Users Today', sub: 'Onboarding flow complete', time: '1h ago' },
                ].map((n) => {
                  const Icon = n.icon;
                  return (
                    <FadeInItem key={n.text}>
                      <div className="flex items-center gap-3 rounded-xl border p-3 text-[13px]"
                        style={{ background: 'var(--bg3)', borderColor: 'var(--border)' }}>
                        <div className="w-8 h-8 rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: 'var(--orange)' }}>
                          <Icon size={14} className="text-white" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate" style={{ color: 'var(--text)' }}>{n.text}</div>
                          <div className="text-[11px] mt-[2px] truncate" style={{ color: 'var(--text-2)' }}>{n.sub}</div>
                        </div>
                        <div className="text-[11px] flex-shrink-0" style={{ color: 'var(--text-3)' }}>{n.time}</div>
                      </div>
                    </FadeInItem>
                  );
                })}
              </FadeInStagger>
            </div>

            {/* Analytics */}
            <div className="bento-card p-6 md:p-9 relative overflow-hidden md:[grid-column:span_2]">
              <div className="text-[11px] font-bold tracking-[.1em] uppercase mb-3" style={{ color: 'var(--orange)' }}>Data &amp; Analytics</div>
              <div className="font-syne font-extrabold text-[20px] leading-[1.2] tracking-[-0.03em] mb-2" style={{ color: 'var(--text)' }}>Revenue Intelligence</div>
              <p className="text-[14px] font-light leading-[1.65] mb-5" style={{ color: 'var(--text-2)' }}>Real-time dashboards and BI tools that turn raw data into decisions that grow your business faster.</p>
              <div className="flex items-end gap-2" style={{ height: 80 }}>
                {[45, 55, 40, 70, 85, 100].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-md border"
                    style={{ height: `${h}%`, background: i === 5 ? 'var(--orange)' : 'var(--bg3)', borderColor: i === 5 ? 'var(--orange)' : 'var(--border)' }} />
                ))}
              </div>
              <div className="font-syne font-extrabold text-[24px] tracking-[-0.03em] mt-4" style={{ color: 'var(--text)' }}>$1.26M</div>
              <div className="text-[12px] mt-1" style={{ color: 'var(--text-2)' }}>Total Revenue · H1 2025</div>
              <div className="inline-flex items-center gap-1 mt-2 px-2 py-[3px] rounded-full text-[11px] font-semibold"
                style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.2)', color: '#22c55e' }}>
                ↑ +34% from last year
              </div>
            </div>

            {/* Enterprise */}
            <div className="bento-card p-6 md:p-9 relative overflow-hidden">
              <div className="text-[11px] font-bold tracking-[.1em] uppercase mb-3" style={{ color: 'var(--orange)' }}>Enterprise</div>
              <div className="font-syne font-extrabold text-[20px] leading-[1.2] tracking-[-0.03em] mb-2" style={{ color: 'var(--text)' }}>Mission-Critical Systems</div>
              <p className="text-[14px] font-light leading-[1.65] mb-4" style={{ color: 'var(--text-2)' }}>ERP, CRM, and custom enterprise platforms built for Fortune-level scale and compliance.</p>
              <div className="flex flex-col gap-2">
                {[{ icon: Lock, label: 'Security Layer', pct: 98 }, { icon: Plug, label: 'API Gateway', pct: 91 }, { icon: Cloud, label: 'Cloud Infra', pct: 87 }].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="flex items-center gap-3 rounded-[10px] border p-3 text-[13px]"
                      style={{ background: 'var(--bg3)', borderColor: 'var(--border)' }}>
                      <div className="w-[26px] h-[26px] rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(255,165,0,0.15)', border: '1px solid rgba(255,165,0,0.2)' }}>
                        <Icon size={12} style={{ color: 'var(--orange)' }} strokeWidth={1.5} />
                      </div>
                      <span style={{ color: 'var(--text)' }}>{s.label}</span>
                      <div className="flex-1 h-1 rounded-sm overflow-hidden ml-1" style={{ background: 'var(--bg)' }}>
                        <div className="h-full rounded-sm" style={{ width: `${s.pct}%`, background: 'var(--orange)' }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AI */}
            <div className="bento-card p-6 md:p-9 relative overflow-hidden">
              <div className="text-[11px] font-bold tracking-[.1em] uppercase mb-3" style={{ color: 'var(--orange)' }}>AI &amp; Automation</div>
              <div className="font-syne font-extrabold text-[20px] leading-[1.2] tracking-[-0.03em] mb-2" style={{ color: 'var(--text)' }}>Intelligent by Default</div>
              <p className="text-[14px] font-light leading-[1.65] mb-4" style={{ color: 'var(--text-2)' }}>LLM integrations, ML pipelines, and automation that transforms how your business operates at scale.</p>
              <div className="flex flex-col gap-2">
                {[{ icon: Bot, label: 'AI Model v3.1', pct: 95 }, { icon: BarChart3, label: 'Automation Engine', pct: 88 }, { icon: Cloud, label: 'Predictions', pct: 78 }].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="flex items-center gap-3 rounded-[10px] border p-3 text-[13px]"
                      style={{ background: 'var(--bg3)', borderColor: 'var(--border)' }}>
                      <div className="w-[26px] h-[26px] rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(255,165,0,0.15)', border: '1px solid rgba(255,165,0,0.2)' }}>
                        <Icon size={12} style={{ color: 'var(--orange)' }} strokeWidth={1.5} />
                      </div>
                      <span style={{ color: 'var(--text)' }}>{s.label}</span>
                      <div className="flex-1 h-1 rounded-sm overflow-hidden ml-1" style={{ background: 'var(--bg)' }}>
                        <div className="h-full rounded-sm" style={{ width: `${s.pct}%`, background: 'var(--orange)' }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
