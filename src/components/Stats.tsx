'use client';

import { FadeIn, FadeInStagger, FadeInItem } from './FadeIn';

const countries = [
  { name: 'Ghana', flag: '🇬🇭' },
  { name: 'Nigeria', flag: '🇳🇬' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'United States', flag: '🇺🇸' },
  { name: 'Togo', flag: '🇹🇬' },
];

const benefits = [
  { num: '5', title: 'Countries We Operate In', desc: 'We serve clients across Ghana, Nigeria, the UK, the USA, and Togo — building software that works across time zones, regulations, and markets.', accent: true, wide: true, countries: true },
  { num: '48h', title: 'Average Response Time', desc: 'From first message to a detailed proposal in your inbox. We move fast so your project does too.' },
  { num: '100%', title: 'Source Code Ownership', desc: 'Everything we build belongs to you. Full IP transfer, no lock-in, no strings attached.' },
  { num: '6mo', title: 'Post-Launch Support', desc: 'Every project includes 6 months of support — bug fixes, monitoring, and minor updates included.' },
  { num: '0', title: 'Missed Deadlines', desc: 'We set realistic timelines and we hit them. Scope changes are managed transparently, never used as an excuse.' },
];

export default function Stats() {
  return (
    <section style={{ padding: '80px 20px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <FadeIn><div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>Why Esper Partners</div></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-syne font-extrabold leading-[1.08] tracking-[-0.035em] mb-4" style={{ fontSize: 'clamp(30px,3.8vw,52px)', color: 'var(--text)' }}>
            Built to Help You <span style={{ color: 'var(--orange)' }}>Grow</span>
          </h2>
          <p className="font-light leading-[1.7] mb-14" style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 520 }}>
            We handle the engineering complexity so you can focus on what matters — your customers and your growth.
          </p>
        </FadeIn>

        <FadeInStagger className="rounded-[20px] overflow-hidden grid grid-cols-1 md:grid-cols-2" style={{ gap: 2, background: 'var(--border)' }}>
          {benefits.map((b, i) => (
            <FadeInItem key={i} className={b.wide ? 'md:col-span-2' : ''}>
              <div style={{
                background: b.accent ? 'var(--orange)' : i > 2 ? 'var(--bg3)' : 'var(--bg)',
                padding: 'clamp(24px,4vw,40px) clamp(20px,3vw,36px)',
                height: '100%',
              }}>
                <div className="font-syne font-extrabold leading-none mb-[-16px] tracking-[-0.04em] select-none"
                  style={{ fontSize: 72, color: b.accent ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)' }}>
                  {b.num}
                </div>
                <div className="font-syne font-extrabold tracking-[-0.03em] mb-2"
                  style={{ fontSize: b.wide ? 26 : 20, color: b.accent ? '#fff' : 'var(--text)' }}>
                  {b.title}
                </div>
                <div className="text-[14px] font-light leading-[1.65] mb-4"
                  style={{ color: b.accent ? 'rgba(255,255,255,0.75)' : 'var(--text-2)' }}>
                  {b.desc}
                </div>
                {b.countries && (
                  <div className="flex flex-wrap gap-3 mt-2">
                    {countries.map((c) => (
                      <div key={c.name} className="flex items-center gap-2 px-3 py-[6px] rounded-full text-[13px] font-medium"
                        style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
                        <span>{c.flag}</span> {c.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
