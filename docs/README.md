# Goliard Landing Page

A production-ready single-page landing site for the Goliard platform — a lifestyle brand and digital space for graduate-school women in their 20s-30s who balance academics, love, travel, and self-discovery.

## Overview

Goliard (from goliards — medieval wandering scholars who wrote of love, wine, and adventure) is a lifestyle platform for women in graduate school navigating the beautiful contradiction of being deeply intellectual AND deeply alive: in love, in motion, in discovery.

## Quick Start

```bash
# Install dependencies
cd goliard
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
goliard/
├── src/
│   └── app/
│       ├── globals.css    # Brand colors, Tailwind theme, animations
│       ├── layout.tsx     # Root layout with fonts and metadata
│       └── page.tsx       # Main landing page with all sections
├── docs/                  # Documentation
│   ├── README.md          # This file
│   ├── BRAND.md           # Brand identity guide
│   └── ARCHITECTURE.md    # Technical architecture
├── public/                # Static assets
├── next.config.ts         # Next.js configuration
├── postcss.config.mjs     # PostCSS/Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## Page Sections

1. **Hero** — Full-viewport intro with brand name, tagline, and CTA
2. **Tension** — Names the problem she feels but nobody names
3. **Features** — Five pillars: World Map, Reading Room, Love & Latitude, Nature Diaries, Pan-African Thread
4. **Community** — Three fictional member profiles
5. **Manifesto** — Letter to the target audience
6. **Waitlist/CTA** — Email capture form
7. **Footer** — Logo, links, social handles

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with custom brand theme
- **Typography**: Cormorant Garamond (display) + DM Sans (body)
- **Language**: TypeScript

## Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary-700` | `#C1440E` | Primary buttons, accents |
| `--color-secondary-500` | `#E8C88A` | Highlights, accents |
| `--color-dark-800` | `#1C0F0A` | Text, dark backgrounds |
| `--color-accent-500` | `#7A9E7E` | Nature elements |
| `--color-cream` | `#FAF6F0` | Light backgrounds |

### Typography

- **Display**: Cormorant Garamond — elegant serif for headlines
- **Body**: DM Sans — humanist sans-serif for readability

## Documentation

- [Brand Identity Guide](./BRAND.md) — Full brand specifications
- [Technical Architecture](./ARCHITECTURE.md) — Implementation details

## License

© {new Date().getFullYear()} Goliard. All rights reserved.