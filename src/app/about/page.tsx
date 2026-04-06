import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { Users, Globe2, ShieldCheck, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Esper Partners is a software engineering studio based in Ghana, working with businesses in Nigeria, the UK, the USA, and Togo. We build software that solves real problems.',
  alternates: { canonical: 'https://esperpartners.vercel.app/about' },
};

const team = [
  { name: 'Emmanuel Johnson', role: 'Founder & Lead Engineer', location: 'Ghana', initial: 'E' },
  { name: 'Product Team', role: 'Design & Frontend', location: 'UK / Ghana', initial: 'P' },
  { name: 'Engineering Team', role: 'Backend & Mobile', location: 'Nigeria / Ghana', initial: 'E' },
];

const values = [
  { icon: Users, title: 'Honest Scoping', desc: 'We tell you what your project actually needs — not what sounds impressive. If something is out of scope, we say so upfront.' },
  { icon: Globe2, title: 'Built for African Markets', desc: 'We understand mobile money, low-bandwidth environments, and the real infrastructure challenges businesses face in West Africa.' },
  { icon: ShieldCheck, title: 'Quality Without Compromise', desc: 'Every line of code is reviewed. Every feature is tested. We do not ship until it meets our standard — which is high.' },
  { icon: Clock, title: 'On Time, Every Time', desc: 'We set realistic timelines and we hit them. If something changes, we communicate early — never at the deadline.' },
];

export default function AboutPage() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        {/* Hero */}
        <div className="relative overflow-hidden" style={{ padding: '140px 20px 80px', background: 'var(--bg)' }}>
          <div className="hero-bg" />
          <div className="hero-grid" />
          <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>
              Who We Are
            </div>
            <h1 className="font-syne font-extrabold leading-[1.05] tracking-[-0.04em] mb-6"
              style={{ fontSize: 'clamp(36px,5vw,72px)', color: 'var(--text)', maxWidth: 800 }}>
              A Studio Built on<br /><span style={{ color: 'var(--orange)' }}>Craft and Honesty</span>
            </h1>
            <p className="font-light leading-[1.75]" style={{ fontSize: 18, color: 'var(--text-2)', maxWidth: 580 }}>
              Esper Partners is a software engineering studio working with businesses in Ghana, Nigeria, the UK, the USA, and Togo. We build software that actually solves problems — not just looks good in a demo.
            </p>
          </div>
        </div>

        {/* Story */}
        <div style={{ padding: '80px 20px', background: 'var(--bg2)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20" style={{ maxWidth: 1180, margin: '0 auto' }}>
            <div>
              <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>Our Story</div>
              <h2 className="font-syne font-extrabold leading-[1.1] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(26px,3vw,42px)', color: 'var(--text)' }}>
                We started because we saw how badly businesses were being served
              </h2>
              <p className="font-light leading-[1.75] mb-4" style={{ fontSize: 16, color: 'var(--text-2)' }}>
                Too many agencies in Ghana and Nigeria were taking large deposits, delivering mediocre work, and disappearing. Founders were left with half-built products, no source code, and no recourse.
              </p>
              <p className="font-light leading-[1.75] mb-4" style={{ fontSize: 16, color: 'var(--text-2)' }}>
                Esper Partners was built to be the opposite of that. We scope honestly, price fairly, deliver on time, and hand over everything we build. No lock-in. No surprises.
              </p>
              <p className="font-light leading-[1.75]" style={{ fontSize: 16, color: 'var(--text-2)' }}>
                We work with founders building their first product, and with growing companies that need to scale what they already have — across web, mobile, and backend systems.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="flex gap-4 p-5 rounded-2xl border group transition-colors duration-300"
                    style={{ background: 'var(--bg3)', borderColor: 'var(--border)' }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                      style={{ background: 'rgba(255,165,0,0.12)' }}>
                      <Icon size={18} strokeWidth={1.5} style={{ color: 'var(--orange)' }} />
                    </div>
                    <div>
                      <div className="font-syne font-bold text-[15px] mb-1" style={{ color: 'var(--text)' }}>{v.title}</div>
                      <div className="text-[13px] font-light leading-[1.6]" style={{ color: 'var(--text-2)' }}>{v.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Team */}
        <div style={{ padding: '80px 20px', background: 'var(--bg)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>The Team</div>
            <h2 className="font-syne font-extrabold leading-[1.1] tracking-[-0.03em] mb-12"
              style={{ fontSize: 'clamp(26px,3vw,42px)', color: 'var(--text)' }}>
              Small on purpose. <span style={{ color: 'var(--orange)' }}>Focused by design.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {team.map((m) => (
                <div key={m.name} className="p-6 rounded-2xl border" style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-syne font-extrabold text-[18px] text-white mb-4"
                    style={{ background: 'var(--orange)' }}>
                    {m.initial}
                  </div>
                  <div className="font-syne font-bold text-[16px] mb-1" style={{ color: 'var(--text)' }}>{m.name}</div>
                  <div className="text-[13px] mb-2" style={{ color: 'var(--text-2)' }}>{m.role}</div>
                  <div className="text-[12px] font-medium" style={{ color: 'var(--orange)' }}>📍 {m.location}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <About />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
