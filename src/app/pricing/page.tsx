import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — Esper Partners',
  description: 'Transparent fixed-price project rates and monthly retainer plans in USD, GHS, and NGN.',
};

export default function PricingPage() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        {/* Page header */}
        <div className="relative overflow-hidden" style={{ padding: '140px 20px 60px', background: 'var(--bg)' }}>
          <div className="hero-bg" />
          <div className="hero-grid" />
          <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>
              Transparent Pricing
            </div>
            <h1 className="font-syne font-extrabold leading-[1.05] tracking-[-0.04em] mb-4"
              style={{ fontSize: 'clamp(36px,5vw,72px)', color: 'var(--text)', maxWidth: 700 }}>
              Know What You Pay<br /><span style={{ color: 'var(--orange)' }}>Before You Start</span>
            </h1>
            <p className="font-light leading-[1.7]" style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 520 }}>
              No surprise invoices. No scope creep billing. Fixed-price projects or monthly retainers — whichever fits how you work.
            </p>
          </div>
        </div>
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
