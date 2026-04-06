import type { Metadata } from 'next';
import '@/styles/globals.css';
import ContactWidget from '@/components/ContactWidget';
import ThemeProvider from '@/components/ThemeProvider';

const siteUrl = 'https://esperpartners.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Esper Partners — Software Development Studio | Ghana, Nigeria, UK',
    template: '%s — Esper Partners',
  },
  description: 'Esper Partners is a software development studio building websites, mobile apps, and enterprise platforms for businesses in Ghana, Nigeria, the UK, and the USA. Fixed-price projects. 100% code ownership.',
  keywords: [
    'software development Ghana',
    'software company Ghana',
    'web development Accra',
    'mobile app development Nigeria',
    'software agency UK',
    'Next.js developer Ghana',
    'Flutter developer Nigeria',
    'website design Ghana',
    'custom software development Africa',
    'Esper Partners',
  ],
  authors: [{ name: 'Esper Partners', url: siteUrl }],
  creator: 'Esper Partners',
  publisher: 'Esper Partners',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Esper Partners',
    title: 'Esper Partners — Software Development Studio',
    description: 'Building websites, mobile apps, and enterprise platforms for businesses in Ghana, Nigeria, the UK, and the USA.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Esper Partners — Software Development Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Esper Partners — Software Development Studio',
    description: 'Building websites, mobile apps, and enterprise platforms for businesses in Ghana, Nigeria, the UK, and the USA.',
    images: ['/og-image.png'],
    creator: '@esperpartners',
  },
  alternates: { canonical: siteUrl },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Esper Partners',
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              description: 'Software development studio building websites, mobile apps, and enterprise platforms.',
              foundingLocation: { '@type': 'Place', name: 'Accra, Ghana' },
              areaServed: ['Ghana', 'Nigeria', 'United Kingdom', 'United States', 'Togo'],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+233208713610',
                contactType: 'customer service',
                email: 'hello@esperpartners.com',
                availableLanguage: ['English'],
              },
              sameAs: [
                'https://linkedin.com/company/esperpartners',
                'https://github.com/johnsonsemmanuel',
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <ContactWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
