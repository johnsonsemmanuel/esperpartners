import type { Metadata } from 'next';
import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSnapshot from '@/components/ServicesSnapshot';
import Process from '@/components/Process';
import Showcase from '@/components/Showcase';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Esper Partners — Software Development Studio | Ghana, Nigeria, UK',
  description: 'Esper Partners builds websites, mobile apps, and enterprise software for businesses in Ghana, Nigeria, the UK, and the USA. Fixed-price projects. 100% code ownership. Book a free discovery call.',
  alternates: { canonical: 'https://esperpartners.vercel.app' },
  openGraph: {
    title: 'Esper Partners — Software Development Studio',
    description: 'Websites, mobile apps, and enterprise platforms built for businesses in Ghana, Nigeria, the UK, and the USA.',
    url: 'https://esperpartners.vercel.app',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <ServicesSnapshot />
        <Process />
        <Showcase />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
