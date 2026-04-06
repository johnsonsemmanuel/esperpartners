# Esper Partners — Software Company Website

A world-class Next.js 14 marketing website for Esper Partners. Built with Apple-inspired transitions, orange & white branding, and zero gradients.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS
- **Animations**: CSS keyframes + Framer Motion
- **Fonts**: Syne (display) + DM Sans (body) via Google Fonts

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Home page (imports all sections)
├── components/
│   ├── Cursor.tsx         # Custom orange cursor with ring
│   ├── Navbar.tsx         # Sticky glass nav with mobile menu
│   ├── Hero.tsx           # Animated orbit + floating app cards
│   ├── Stats.tsx          # Animated counter stats strip
│   ├── Services.tsx       # 9-service grid with hover effects
│   ├── Process.tsx        # 4-step dark process section
│   ├── Showcase.tsx       # Portfolio grid with project cards
│   ├── TechStack.tsx      # Technology logos strip
│   ├── Testimonials.tsx   # Infinite-scroll testimonial carousel
│   ├── CTA.tsx            # Call-to-action section
│   └── Footer.tsx         # Full footer with links
└── styles/
    └── globals.css        # Global styles, animations, cursor
```

## Customisation

### Colors
All orange values are `#FF6200`. Update in:
- `tailwind.config.js` → `colors.orange.DEFAULT`
- `src/styles/globals.css` → `--orange: #FF6200`

### Content
Each component file contains its own data arrays at the top — edit services, testimonials, projects, etc. directly there.

### Contact Email
In `src/components/CTA.tsx`, update `hello@esperpartners.com` to your email.

## Deployment

### Deploy to Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Deploy to any Node host
```bash
npm run build
npm start   # runs on port 3000
```

## Adding New Pages

Thanks to Next.js App Router, add pages by creating folders:

```
src/app/
├── about/page.tsx
├── services/page.tsx
├── blog/page.tsx
└── contact/page.tsx
```

Each page automatically gets its own route.
