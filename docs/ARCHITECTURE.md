# Goliard Technical Architecture

## Overview

This document outlines the technical architecture and implementation details for the Goliard landing page, built with Next.js 16 and Tailwind CSS v4.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | React framework with App Router |
| React | 19.2.3 | UI library |
| Tailwind CSS | v4 | Utility-first CSS framework |
| TypeScript | 5.x | Type safety |
| ESLint | 9.x | Code linting |

## Project Structure

```
src/
└── app/
    ├── globals.css    # Global styles, brand variables, animations
    ├── layout.tsx     # Root layout with fonts and metadata
    └── page.tsx       # Main landing page component
```

## Implementation Details

### Fonts (next/font/google)

We use Google Fonts via Next.js font optimization:

```typescript
// src/app/layout.tsx
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
```

### CSS Variables & Tailwind Theme

Brand colors are defined as CSS custom properties in `globals.css`:

```css
/* Primary colors */
:root {
  --color-primary-700: #C1440E;
  --color-primary-500: #D4622A;
  /* ... */
}

/* Tailwind v4 theme integration */
@theme inline {
  --color-primary: var(--color-primary-700);
  --font-display: var(--font-cormorant);
  --font-body: var(--font-dm-sans);
}
```

### Animations

Custom CSS keyframe animations are defined in `globals.css`:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

Usage in components:
```jsx
className="animate-[fadeInUp_0.8s_ease-out_forwards]"
```

### Fluid Typography

Using CSS `clamp()` for responsive typography:

```css
html {
  font-size: clamp(14px, 1.2vw, 18px);
}
```

### Tailwind v4 Configuration

PostCSS configuration in `postcss.config.mjs`:

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

## Component Architecture

### Page Sections

The main page (`page.tsx`) is organized into these sections:

| Section | Description | Lines |
|---------|-------------|-------|
| Hero | Full-viewport intro with animated text | 14-67 |
| Tension | Emotional hook addressing audience pain points | 74-96 |
| Features | Five pillars in a responsive grid | 102-185 |
| Community | Three member profile cards | 191-243 |
| Manifesto | Emotional letter to the audience | 249-286 |
| Waitlist | Email capture form with CTA | 292-322 |
| Footer | Links, social handles, copyright | 328-436 |

### Responsive Breakpoints

Tailwind's default breakpoints are used:

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| sm | 640px | Small tablets |
| md | 768px | Tablets |
| lg | 1024px | Laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

### Component Patterns

1. **Section wrapper**: Max-width container with padding
2. **Cards**: Rounded corners with hover effects
3. **Buttons**: Pill-shaped with scale animation on hover
4. **Typography**: Semantic heading levels with custom fonts

## Build & Deployment

### Development

```bash
npm run dev
```

Starts the development server on http://localhost:3000

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Server

```bash
npm start
```

Starts the production server after build.

## Performance Considerations

### Font Optimization

- Uses `next/font/google` for automatic font optimization
- `display: swap` ensures text is visible during font load

### CSS

- Tailwind v4 generates minimal CSS
- CSS custom properties for theming (no runtime overhead)

### Animations

- CSS-only animations (no JS animation libraries)
- `will-change` not used unless necessary (let browser optimize)

### Images

- No heavy images in initial implementation
- SVG icons for UI elements

## Accessibility

- Semantic HTML5 elements (`<main>`, `<section>`, `<article>`, `<footer>`)
- ARIA labels on icon-only links
- Sufficient color contrast (WCAG AA)
- Keyboard-navigable form inputs
- Focus states on interactive elements

## SEO

Metadata configured in `layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Goliard | A Lifestyle Platform for Graduate Women",
  description: "Goliard is a lifestyle platform...",
  keywords: ["Goliard", "graduate women", ...],
  openGraph: { ... },
};
```

## Future Enhancements

### Planned Features

1. **Email capture integration** — Connect to newsletter service
2. **Animations** — Framer Motion for complex animations
3. **Image optimization** — Next.js Image component for photos
4. **Internationalization** — i18n support for global audience

### AI Features (Coming Soon)

- Personalized content feed
- AI chatbot "Goldie"
- Speech recognition
- Computer vision for travel photos
- Burnout prediction analytics