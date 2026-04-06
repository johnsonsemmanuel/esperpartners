import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import type { Metadata } from 'next';
import { ArrowUpRight, ShoppingCart, Building2, Smartphone, Globe, Bot } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real software projects built by Esper Partners for clients in Ghana, Nigeria, the UK, and the USA — marketplaces, fintech apps, SaaS platforms, and AI tools.',
  alternates: { canonical: 'https://esperpartners.vercel.app/case-studies' },
};

const cases = [
  {
    tag: 'E-Commerce · Ghana',
    title: 'Multi-Vendor Marketplace',
    client: 'Ghanaian Retail Brand',
    desc: 'Moved a physical market online — vendor dashboards, MTN MoMo & Vodafone Cash checkout, real-time order tracking, and admin panel.',
    outcome: ['Launched in 11 weeks', 'Mobile money integrated', '40+ vendors at launch', 'Works on 2G connections'],
    icon: ShoppingCart,
    bg: '#1A1A1A',
    country: '🇬🇭 Ghana',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Paystack'],
  },
  {
    tag: 'SaaS · UK',
    title: 'B2B Operations Platform',
    client: 'London Logistics Company',
    desc: 'Replaced 6 spreadsheets with a custom CRM — client management, job scheduling, driver tracking, and automated invoicing.',
    outcome: ['Replaced 6 spreadsheets', 'Invoicing 80% faster', 'Real-time driver status', 'Delivered in 14 weeks'],
    icon: Building2,
    bg: '#FFA500',
    country: '🇬🇧 United Kingdom',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
  },
  {
    tag: 'Mobile · Nigeria',
    title: 'Fintech Savings App',
    client: 'Nigerian Fintech Startup',
    desc: 'Cross-platform app for savings groups (ajo/esusu) and peer-to-peer payments — wallet top-up and bank transfer built in.',
    outcome: ['iOS & Android launched', 'Paystack integrated', '2,000+ users month 1', 'Delivered in 16 weeks'],
    icon: Smartphone,
    bg: '#141414',
    country: '🇳🇬 Nigeria',
    tech: ['Flutter', 'Node.js', 'Paystack', 'Firebase'],
  },
  {
    tag: 'Website · Togo',
    title: 'Corporate Website',
    client: 'Togolese Import/Export Co.',
    desc: 'Bilingual (French/English) corporate site with product catalogue, inquiry form, and WhatsApp integration for a Lomé-based firm.',
    outcome: ['French & English', 'WhatsApp lead capture', 'Delivered in 7 days', 'Low-bandwidth optimised'],
    icon: Globe,
    bg: '#1C1C1C',
    country: '🇹🇬 Togo',
    tech: ['Next.js', 'Tailwind CSS'],
  },
  {
    tag: 'AI · USA',
    title: 'AI Contract Review Tool',
    client: 'US Legal Services Firm',
    desc: 'LLM pipeline that extracts key clauses, flags risks, and generates summaries — cutting contract review from hours to minutes.',
    outcome: ['Review time cut 70%', 'Handles 50+ doc types', 'Fits existing workflow', 'Delivered in 10 weeks'],
    icon: Bot,
    bg: '#0A0A0A',
    country: '🇺🇸 United States',
    tech: ['Python', 'OpenAI API', 'Next.js', 'AWS'],
  },
];

export default function CaseStudiesPage() {
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
            <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>Our Work</div>
            <h1 className="font-syne font-extrabold leading-[1.05] tracking-[-0.04em] mb-4"
              style={{ fontSize: 'clamp(36px,5vw,72px)', color: 'var(--text)', maxWidth: 700 }}>
              Real Projects.<br /><span style={{ color: 'var(--orange)' }}>Real Results.</span>
            </h1>
            <p className="font-light leading-[1.7]" style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 540 }}>
              Products we have built for clients across Ghana, Nigeria, the UK, the USA, and Togo.
            </p>
          </div>
        </div>

        {/* Projects grid — side by side */}
        <div style={{ padding: '80px 20px', background: 'var(--bg2)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ maxWidth: 1180, margin: '0 auto' }}>
            {cases.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="rounded-[20px] border overflow-hidden flex flex-col group transition-all duration-300 hover:border-[var(--orange)]"
                  style={{ borderColor: 'var(--border)', background: 'var(--bg3)' }}>

                  {/* Coloured visual header */}
                  <div className="relative flex items-end justify-between p-5 min-h-[140px]"
                    style={{ background: c.bg }}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none">
                      <Icon size={160} strokeWidth={0.4} className="text-white" />
                    </div>
                    <div className="relative z-[1]">
                      <div className="text-[10px] font-semibold uppercase tracking-[.1em] px-2 py-1 rounded-full border border-white/20 mb-2 inline-block"
                        style={{ color: 'rgba(255,255,255,0.6)' }}>
                        {c.tag}
                      </div>
                      <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{c.country}</div>
                    </div>
                    <div className="relative z-[1] w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={14} className="text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-[11px] font-medium mb-1" style={{ color: 'var(--text-3)' }}>{c.client}</div>
                    <h2 className="font-syne font-bold text-[17px] leading-[1.2] tracking-[-0.02em] mb-2" style={{ color: 'var(--text)' }}>
                      {c.title}
                    </h2>
                    <p className="text-[13px] font-light leading-[1.65] mb-4 flex-1" style={{ color: 'var(--text-2)' }}>{c.desc}</p>

                    {/* Outcomes */}
                    <div className="grid grid-cols-2 gap-[6px] mb-4">
                      {c.outcome.map((o) => (
                        <div key={o} className="flex items-start gap-1 text-[12px]" style={{ color: 'var(--text-2)' }}>
                          <span style={{ color: 'var(--orange)', flexShrink: 0 }}>✓</span> {o}
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                      <div className="flex flex-wrap gap-1">
                        {c.tech.map((t) => (
                          <span key={t} className="text-[10px] px-2 py-[3px] rounded-md"
                            style={{ background: 'var(--bg)', color: 'var(--text-3)', border: '1px solid var(--border)' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <a href="/contact"
                        className="inline-flex items-center gap-1 text-[12px] font-semibold flex-shrink-0 ml-3 transition-all duration-200 hover:gap-2"
                        style={{ color: 'var(--orange)' }}>
                        Similar <ArrowUpRight size={12} strokeWidth={2} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
