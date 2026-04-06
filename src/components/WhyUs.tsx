'use client';

import { CheckCircle2, X } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './FadeIn';

const rows = [
  { feature: 'Fixed price — no surprise invoices', us: true, freelancer: false, agency: false },
  { feature: '100% source code ownership', us: true, freelancer: true, agency: false },
  { feature: 'Dedicated project manager', us: true, freelancer: false, agency: true },
  { feature: '6 months post-launch support', us: true, freelancer: false, agency: false },
  { feature: 'Paystack & mobile money integration', us: true, freelancer: 'sometimes', agency: false },
  { feature: 'Built for African markets', us: true, freelancer: 'sometimes', agency: false },
  { feature: 'Response within 48 hours', us: true, freelancer: false, agency: false },
  { feature: 'No lock-in or retainer required', us: true, freelancer: true, agency: false },
];

function Cell({ val }: { val: boolean | string }) {
  if (val === true) return <CheckCircle2 size={18} strokeWidth={2} style={{ color: '#22c55e' }} className="mx-auto" />;
  if (val === false) return <X size={16} strokeWidth={2} style={{ color: 'var(--text-3)' }} className="mx-auto" />;
  return <span className="text-[12px]" style={{ color: 'var(--text-3)' }}>Sometimes</span>;
}

export default function WhyUs() {
  return (
    <section style={{ padding: '80px 20px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <FadeIn>
          <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-3" style={{ color: 'var(--orange)' }}>Why Esper Partners</div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-syne font-extrabold leading-[1.08] tracking-[-0.035em] mb-3"
            style={{ fontSize: 'clamp(28px,3.8vw,48px)', color: 'var(--text)' }}>
            Us vs a Freelancer vs <span style={{ color: 'var(--orange)' }}>a Generic Agency</span>
          </h2>
          <p className="font-light leading-[1.7] mb-12" style={{ fontSize: 16, color: 'var(--text-2)', maxWidth: 520 }}>
            Most clients in Ghana and Nigeria have been burned before — by freelancers who disappear or agencies that over-promise. Here is how we are different.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-[20px] overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
            {/* Header */}
            <div className="grid grid-cols-4 border-b" style={{ borderColor: 'var(--border)', background: 'var(--bg2)' }}>
              <div className="p-4 text-[12px] font-bold uppercase tracking-[.08em]" style={{ color: 'var(--text-3)' }}>Feature</div>
              <div className="p-4 text-center text-[13px] font-bold font-syne" style={{ color: 'var(--orange)', background: 'rgba(255,165,0,0.06)', borderLeft: '1px solid var(--border)' }}>
                Esper Partners ✦
              </div>
              <div className="p-4 text-center text-[13px] font-bold font-syne border-l" style={{ color: 'var(--text-2)', borderColor: 'var(--border)' }}>Freelancer</div>
              <div className="p-4 text-center text-[13px] font-bold font-syne border-l" style={{ color: 'var(--text-2)', borderColor: 'var(--border)' }}>Typical Agency</div>
            </div>

            <FadeInStagger>
              {rows.map((r, i) => (
                <FadeInItem key={r.feature}>
                  <div className="grid grid-cols-4 border-b last:border-b-0 transition-colors duration-200 hover:bg-[var(--bg2)]"
                    style={{ borderColor: 'var(--border)' }}>
                    <div className="p-4 text-[13px] font-light" style={{ color: 'var(--text-2)' }}>{r.feature}</div>
                    <div className="p-4 flex items-center justify-center border-l" style={{ background: 'rgba(255,165,0,0.04)', borderColor: 'var(--border)' }}>
                      <Cell val={r.us} />
                    </div>
                    <div className="p-4 flex items-center justify-center border-l" style={{ borderColor: 'var(--border)' }}>
                      <Cell val={r.freelancer} />
                    </div>
                    <div className="p-4 flex items-center justify-center border-l" style={{ borderColor: 'var(--border)' }}>
                      <Cell val={r.agency} />
                    </div>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
