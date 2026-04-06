import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Process from '@/components/Process';
import Showcase from '@/components/Showcase';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Stats />
        <Process />
        <Showcase />
        <Pricing />
        <Testimonials />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
