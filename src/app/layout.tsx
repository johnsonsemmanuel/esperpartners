import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Esper Partners — Software Excellence',
  description: 'We engineer software that powers businesses across the world — from elegant web apps to enterprise-grade platforms.',
  keywords: ['software development', 'web development', 'mobile apps', 'enterprise software', 'AI automation'],
  openGraph: {
    title: 'Esper Partners — Software Excellence',
    description: 'From idea to extraordinary software. Web, mobile, enterprise, AI — we build it all.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
