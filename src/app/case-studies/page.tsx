import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import type { Metadata } from 'next';
import { ArrowUpRight, ShoppingCart, Building2, Smartphone, Globe, Bot } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies — Esper Partners',
  description: 'Real projects built for clients in Ghana, Nigeria, the UK, and the USA.',
};

const cases = [
  {
    tag: 'E-Commerce · Ghana',
    title: 'Multi-Vendor Marketplace for a Ghanaian Retail Brand',
    desc: 'A Ghanaian retail brand needed to move their physical market online and allow multiple vendors to list products. We built a full-stack marketplace with vendor dashboards, mobile money integration (MTN MoMo, Vodafone Cash), real-time order tracking, and an admin control panel.',
    outcome: ['Launched in 11 weeks', 'Mobile money checkout integrated', '40+ vendors onboarded at launch', 'Mobile-first, works on 2G connections'],
    icon: ShoppingCart,
    bg: '#1A1A1A',
    country: '🇬🇭 Ghana',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Paystack'],
  },
  {
    tag: 'SaaS · UK',
    title: 'B2B Operations Platform for a London Logistics Company',
    desc: 'A London-based logistics company was running their entire operation on spreadsheets and WhatsApp. We replaced it with a custom CRM and invoicing system — client management, job scheduling, driver tracking, and automated invoicing in one place.',
    outcome: ['Replaced 6 spreadsheets with one system', 'Invoice generation time cut by 80%', 'Real-time job status for all drivers', 'Delivered in 14 weeks'],
    icon: Building2,
    bg: '#FFA500',
    country: '🇬🇧 United Kingdom',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
  },
  {
    tag: 'Mobile · Nigeria',
    title: 'Fintech Savings & Payments App',
    desc: 'A Nigerian fintech startup needed a cross-platform mobile app for savings groups (ajo/esusu) and peer-to-peer payments. We built the iOS and Android app with group savings management, wallet top-up, and bank transfer integration.',
    outcome: ['Launched on iOS & Android', 'Bank transfer + card payments integrated', '2,000+ users in first month', 'Delivered in 16 weeks'],
    icon: Smartphone,
    bg: '#141414',
    country: '🇳🇬 Nigeria',
    tech: ['Flutter', 'Node.js', 'Paystack', 'Firebase'],
  },
  {
    tag: 'Website · Togo',
    title: 'Corporate Website for a Togolese Import/Export Company',
    desc: 'A Lomé-based import/export company needed a professional web presence to attract international partners. We built a bilingual (French/English) corporate website with a product catalogue, inquiry form, and WhatsApp integration.',
    outcome: ['Bilingual French/English', 'WhatsApp lead capture integrated', 'Delivered in 7 days', 'Mobile-optimised for low-bandwidth'],
    icon: Globe,
    bg: '#1C1C1C',
    country: '🇹🇬 Togo',
    tech: ['Next.js', 'Tailwind CSS'],
  },
  {
    tag: 'AI Integration · USA',
    title: 'AI Document Processing Tool for a US Legal Firm',
    desc: 'A US-based legal services firm needed to automate the review of standard contracts. We integrated an LLM pipeline that extracts key clauses, flags risks, and generates summaries — reducing review time from hours to minutes.',
    outcome: ['Contract review time reduced by 70%', 'Integrated with existing document workflow', 'Handles 50+ document types', 'Delivered in 10 weeks'],
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
              A selection of products we have built for clients across Ghana, Nigeria, the UK, the USA, and Togo.
            </p>
          </div>
        </div>

        {/* Cases */}
        <div style={{ padding: '80px 20px', background: 'var(--bg2)' }}>
          <div className="flex flex-col gap-6" style={{ maxWidth: 1180, margin: '0 auto' }}>
            {cases.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="rounded-[20px] border overflow-hidden grid grid-cols-1 lg:grid-cols-2"
                  style={{ borderColor: 'var(--border)', background: 'var(--bg3)' }}>
                  {/* Visual side */}
                  <div className="relative flex items-center justify-center p-12 min-h-[240px]"
                    style={{ background: c.bg }}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none">
                      <Icon size={220} strokeWidth={0.4} className="text-white" />
                    </div>
                    <div className="relative z-[1] text-center">
                      <div className="text-[11px] font-semibold uppercase tracking-[.1em] px-3 py-1 rounded-full border border-white/20 mb-4 inline-block"
                        style={{ color: 'rgba(255,255,255,0.6)' }}>
                        {c.tag}
                      </div>
                      <div className="text-[13px] font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>{c.country}</div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="font-syne font-bold text-[20px] leading-[1.2] tracking-[-0.02em] mb-3" style={{ color: 'var(--text)' }}>
                        {c.title}
                      </h2>
                      <p className="text-[14px] font-light leading-[1.7] mb-5" style={{ color: 'var(--text-2)' }}>{c.desc}</p>
                      <div className="grid grid-cols-2 gap-2 mb-5">
                        {c.outcome.map((o) => (
                          <div key={o} className="flex items-start gap-2 text-[13px]" style={{ color: 'var(--text-2)' }}>
                            <span style={{ color: 'var(--orange)', flexShrink: 0 }}>✓</span> {o}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                      <div className="flex flex-wrap gap-2">
                        {c.tech.map((t) => (
                          <span key={t} className="text-[11px] px-2 py-1 rounded-md"
                            style={{ background: 'var(--bg)', color: 'var(--text-3)', border: '1px solid var(--border)' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <a href="/contact"
                        className="inline-flex items-center gap-1 text-[13px] font-semibold flex-shrink-0 ml-4"
                        style={{ color: 'var(--orange)' }}>
                        Similar Project <ArrowUpRight size={13} strokeWidth={2} />
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
