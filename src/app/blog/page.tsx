import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { ArrowRight, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog — Esper Partners',
  description: 'Insights on software development, building products in Africa, and engineering best practices.',
};

const posts = [
  {
    tag: 'Business',
    title: 'Why Most Software Projects in Ghana Fail (And How to Avoid It)',
    excerpt: 'The three most common reasons software projects go wrong for Ghanaian businesses — and what to do differently from Day 1.',
    readTime: '5 min read',
    date: 'March 2026',
    slug: '#',
  },
  {
    tag: 'Mobile',
    title: 'Building for Low-Bandwidth: Mobile App Best Practices for West Africa',
    excerpt: 'How we optimise mobile apps for users on 2G/3G connections in Ghana and Nigeria — offline-first, image compression, and smart caching.',
    readTime: '7 min read',
    date: 'February 2026',
    slug: '#',
  },
  {
    tag: 'Payments',
    title: 'Integrating Paystack in a Next.js App: A Complete Guide',
    excerpt: 'Step-by-step guide to adding Paystack payment processing to a Next.js application — webhooks, verification, and error handling included.',
    readTime: '10 min read',
    date: 'January 2026',
    slug: '#',
  },
  {
    tag: 'Pricing',
    title: 'How Much Does a Website Cost in Ghana in 2026?',
    excerpt: 'A transparent breakdown of website development costs in Ghana — what affects the price, what to watch out for, and what fair pricing looks like.',
    readTime: '6 min read',
    date: 'January 2026',
    slug: '#',
  },
  {
    tag: 'AI',
    title: 'Adding AI to Your Existing Product Without Starting Over',
    excerpt: 'You do not need to rebuild your product to add AI features. Here is how we integrate LLMs into existing systems without disrupting what already works.',
    readTime: '8 min read',
    date: 'December 2025',
    slug: '#',
  },
  {
    tag: 'Process',
    title: 'Why We Use Fixed-Price Sprints (And Why It Works Better for Clients)',
    excerpt: 'Hourly billing creates misaligned incentives. Here is why we moved to fixed-price sprints and how it makes projects run smoother for everyone.',
    readTime: '4 min read',
    date: 'November 2025',
    slug: '#',
  },
];

const tagColors: Record<string, string> = {
  Business: '#3B82F6',
  Mobile: '#8B5CF6',
  Payments: '#22C55E',
  Pricing: '#FFA500',
  AI: '#EC4899',
  Process: '#14B8A6',
};

export default function BlogPage() {
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
            <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>Insights</div>
            <h1 className="font-syne font-extrabold leading-[1.05] tracking-[-0.04em] mb-4"
              style={{ fontSize: 'clamp(36px,5vw,72px)', color: 'var(--text)', maxWidth: 700 }}>
              The Esper Partners <span style={{ color: 'var(--orange)' }}>Blog</span>
            </h1>
            <p className="font-light leading-[1.7]" style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 520 }}>
              Practical insights on building software, working with clients in Africa and the UK, and engineering best practices.
            </p>
          </div>
        </div>

        {/* Posts */}
        <div style={{ padding: '80px 20px', background: 'var(--bg2)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ maxWidth: 1180, margin: '0 auto' }}>
            {posts.map((p) => (
              <a key={p.title} href={p.slug}
                className="rounded-[20px] border flex flex-col group transition-all duration-300 hover:border-[var(--orange)] no-underline"
                style={{ background: 'var(--bg3)', borderColor: 'var(--border)', padding: '24px' }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-[.08em] px-3 py-1 rounded-full"
                    style={{ background: `${tagColors[p.tag]}18`, color: tagColors[p.tag], border: `1px solid ${tagColors[p.tag]}30` }}>
                    {p.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[11px]" style={{ color: 'var(--text-3)' }}>
                    <Clock size={11} strokeWidth={1.5} /> {p.readTime}
                  </div>
                </div>
                <h2 className="font-syne font-bold text-[16px] leading-[1.3] tracking-[-0.02em] mb-3 flex-1"
                  style={{ color: 'var(--text)' }}>
                  {p.title}
                </h2>
                <p className="text-[13px] font-light leading-[1.65] mb-5" style={{ color: 'var(--text-2)' }}>{p.excerpt}</p>
                <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <span className="text-[12px]" style={{ color: 'var(--text-3)' }}>{p.date}</span>
                  <span className="inline-flex items-center gap-1 text-[13px] font-semibold transition-all duration-200 group-hover:gap-2"
                    style={{ color: 'var(--orange)' }}>
                    Read <ArrowRight size={13} strokeWidth={2} />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Coming soon note */}
          <div className="mt-12 text-center" style={{ maxWidth: 1180, margin: '48px auto 0' }}>
            <p className="text-[14px] font-light" style={{ color: 'var(--text-3)' }}>
              More articles coming soon. Want to be notified?{' '}
              <a href="mailto:hello@esperpartners.com" className="font-semibold" style={{ color: 'var(--orange)' }}>
                hello@esperpartners.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
