import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Esper Partners — Software Development Studio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0C0C0C',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Orange glow */}
        <div style={{
          position: 'absolute', top: -100, left: '50%',
          width: 600, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,165,0,0.2) 0%, transparent 70%)',
          transform: 'translateX(-50%)',
        }} />

        <div style={{ fontSize: 18, color: '#FFA500', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24 }}>
          Software Development Studio
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, color: '#FFFFFF', lineHeight: 1.05, marginBottom: 20, letterSpacing: '-0.03em' }}>
          Esper Partners
        </div>
        <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.55)', fontWeight: 300, maxWidth: 700, lineHeight: 1.5 }}>
          Websites, mobile apps &amp; enterprise platforms for businesses in Ghana, Nigeria, the UK &amp; USA.
        </div>
        <div style={{ marginTop: 48, display: 'flex', gap: 16 }}>
          {['Ghana 🇬🇭', 'Nigeria 🇳🇬', 'UK 🇬🇧', 'USA 🇺🇸'].map((c) => (
            <div key={c} style={{
              padding: '8px 16px', borderRadius: 100,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.6)', fontSize: 16,
            }}>
              {c}
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: 48, right: 80, fontSize: 18, color: 'rgba(255,255,255,0.25)' }}>
          esperpartners.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
