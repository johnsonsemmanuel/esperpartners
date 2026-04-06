import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main className="min-h-screen flex items-center justify-center text-center" style={{ background: 'var(--bg)', padding: '120px 20px' }}>
        <div>
          <div className="font-syne font-extrabold tracking-[-0.04em] mb-4 select-none"
            style={{ fontSize: 'clamp(80px,15vw,160px)', color: 'rgba(255,255,255,0.04)', lineHeight: 1 }}>
            404
          </div>
          <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>Page Not Found</div>
          <h1 className="font-syne font-extrabold leading-[1.1] tracking-[-0.03em] mb-4"
            style={{ fontSize: 'clamp(28px,4vw,48px)', color: 'var(--text)' }}>
            This page does not exist
          </h1>
          <p className="font-light leading-[1.7] mb-8 mx-auto" style={{ fontSize: 16, color: 'var(--text-2)', maxWidth: 400 }}>
            The page you are looking for may have moved or never existed. Let us get you back on track.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-[14px] transition-all duration-200 hover:scale-[1.03]"
              style={{ background: 'var(--orange)', color: '#fff' }}>
              Back to Home <ArrowRight size={14} strokeWidth={2} />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-normal text-[14px] transition-all duration-200"
              style={{ border: '1px solid var(--border)', color: 'var(--text-2)' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
