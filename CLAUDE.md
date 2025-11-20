# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

**Elvenwood Interior** is a luxury interior design website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. The site showcases room designs, kitchen configurations, and services with smooth animations and an interactive enquiry system.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build production bundle
npm run build

# Run production server
npm start

# Lint code with ESLint
npm run lint
```

## Architecture & Key Concepts

### App Router Structure
- Uses Next.js 14 **App Router** (not Pages Router)
- Route groups in `app/(routes)/` for organization
- Dynamic routes for kitchen shapes: `/kitchen/[shape]/`
- Dynamic API routes: `app/api/leads/route.ts`
- All pages are **Server Components by default** - use `'use client'` directive when needed for interactivity

### Component Architecture

**Layout System:**
- `AppLayout` (app/components/AppLayout.tsx) wraps all pages via root layout
- AppLayout includes Header, Footer, and WatermarkLayer
- WatermarkLayer is a fixed background element - keep it in layout to avoid re-renders on page changes

**Component Patterns:**
- **Stateful pages** (e.g., home, contact, process) use `'use client'` + useState for modal/form state
- **Pure components** (Cards, Layout) are Server Components
- Modal state management is localized to individual pages - not global

**UI Component Reusability:**
- `CapabilityCard`, `RoomCard`, `KitchenShapeCard` are stateless and reusable
- `ModalEnquiry` is imported on pages that need forms
- All forms submit to `/api/leads` endpoint

### Custom Hooks

**useHoverDelay** (app/hooks/useHoverDelay.ts)
- Used by Header dropdown menu
- Delays menu close by 300ms to prevent flickering on mouse movement
- Pattern: Call `delayedClose(() => setState(false))` on mouse leave
- Always `cancel()` timeout on cleanup if needed

**useReducedMotion** (app/hooks/useReducedMotion.ts)
- Detects `prefers-reduced-motion: reduce` media query
- Returns boolean - use to conditionally disable animations
- WatermarkLayer returns null if motion is reduced
- ImageWithMotion skips fade-in animation if motion is reduced

### Global Styles & Animations

**File:** `app/globals.css`

**Important Structure:**
- Must start with `@import "tailwindcss";` (not @tailwind directives)
- All @layer rules must be inside proper layers (base, components)
- Reset styles (*, :root) are in @layer base
- Animation utilities (.animate-*) are class-based

**Available Animations:**
- `.animate-fadeInSlideUp` - 0.6s fade + slide up (scroll-triggered)
- `.animate-slideUp` - 0.3s slide (modals)
- `.animate-moveVertical` - 20s continuous vertical movement (watermark)
- `.animate-fadeIn` - 0.5s fade
- `.animate-scaleIn` - 0.4s scale entrance
- All respect `prefers-reduced-motion` media query

**Custom Utilities:**
- `.btn-luxury` - Dark button with hover scale/shadow
- `.btn-outline` - Border button with fill on hover
- `.card-luxury` - Card with hover elevation

### API Design

**POST /api/leads** (app/api/leads/route.ts)

Validation rules:
```typescript
- name: required, string
- email: required, must match email regex
- phone: required, string
- message: required, min 10 characters
```

Returns:
- Success (201): `{ success: true, message: "Lead received successfully" }`
- Error (400): `{ error: "Validation error message" }`
- Error (500): `{ error: "Failed to process request" }`

**Form Integration Pattern:**
```typescript
const handleEnquiry = async (data: EnquiryData) => {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to submit');
  alert('Thank you! We will contact you soon.');
};
```

### Page Structure

**Standard Page Pattern:**

1. **'use client'** directive (if state needed)
2. Import necessary components
3. State management (modalOpen, etc.)
4. API handler (handleEnquiry)
5. Return JSX with sections:
   - Hero section (dark background, white text)
   - Content section (white background)
   - CTA section
   - Modal component at bottom

**URL Patterns:**
- Route pages in `app/(routes)/[room]/page.tsx`
- Kitchen shapes: `app/(routes)/kitchen/[shape]/page.tsx`
- Each page should have metadata exported if SEO needed

## Path Aliases

```typescript
// Use @/ to import from project root
import Header from '@/app/components/Header';
import { useHoverDelay } from '@/app/hooks/useHoverDelay';
```

Configured in `tsconfig.json`:
```json
"paths": { "@/*": ["./*"] }
```

## Image Optimization

**next.config.ts** configured for:
- Remote pattern matching (all HTTPS hosts)
- WebP/AVIF format support
- Compression enabled

**Image Component Usage:**
```typescript
import Image from 'next/image';

// For remote images
<Image
  src="/placeholder.jpg"
  alt="Room"
  width={800}
  height={600}
  className="w-full h-auto object-cover"
/>
```

## Styling Approach

- **Tailwind CSS v4** with @import syntax
- No CSS Modules used (pure Tailwind)
- Custom utilities in globals.css for component-like styles
- Hover states and animations use Tailwind classes
- Responsive breakpoints: sm, md, lg

## Common Tasks

### Adding a New Page

1. Create `app/(routes)/[pagename]/page.tsx`
2. Add `'use client'` if needs state/forms
3. Export metadata: `export const metadata = { title: '...' }`
4. Use standard section structure with consistent styling
5. Import ModalEnquiry if form needed
6. Add route to Header navigation if appropriate

### Adding Animation to Images

```typescript
<ImageWithMotion
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

ImageWithMotion automatically:
- Detects scroll position with Intersection Observer
- Applies fadeInSlideUp animation on view
- Respects prefers-reduced-motion

### Adding a New Form

1. Create form JSX in page component
2. Use ModalEnquiry component for modal form
3. Implement handleEnquiry function
4. Pass to ModalEnquiry's onSubmit prop
5. API validation happens server-side in /api/leads

### Updating Global Styles

Edit `app/globals.css`:
- Change colors in :root CSS variables
- Modify animation timing in @keyframes
- Update utility classes in @layer components
- Remember: all Tailwind utilities must be in proper @layer

## Build & Deployment

**Build Output:**
- All 17 pages pre-rendered as static HTML
- API route is dynamic (server-rendered on demand)
- Builds to `.next/` directory

**Deployment:**
- Vercel: Push to GitHub, auto-deploys from main
- Docker: `docker build -t elvenwood . && docker run -p 3000:3000 elvenwood`
- Any Node.js host: `npm run build && npm start`

**SEO Files:**
- `public/sitemap.xml` - All routes listed for search engines
- `public/robots.txt` - Crawl directives

## TypeScript Configuration

- **Strict Mode:** Enabled (`"strict": true`)
- **Target:** ES2017
- **Module Resolution:** bundler (Next.js recommended)
- **No Emit:** Compilation only, no output (Next.js handles)
- **Path Aliases:** `@/*` resolves from project root

## Important Implementation Details

### Scroll-Locked Modal
- ModalEnquiry sets `document.body.style.overflow = 'hidden'` when open
- Closes on Escape key or backdrop click
- Cleans up overflow on unmount

### Header Dropdown Behavior
- useHoverDelay prevents menu flickering on hover
- 300ms delay before closing
- Always call `cancel()` on mouse enter to clear pending close

### Watermark Animation
- Fixed positioning - visible on all pages
- Returns null if `prefers-reduced-motion` is set
- Uses 20s moveVertical animation (infinite loop)
- Low opacity (0.4) with pointer-events-none

### Image Feather Effect
- ImageWithMotion includes subtle mask-image gradient
- Creates soft edges on images (cosmetic only)
- Improves visual polish on hero sections

## Git & Version Control

- **Node modules:** Already in .gitignore
- **.next:** Already in .gitignore
- **Build artifacts:** Don't commit (auto-generated)

Typical commit workflow:
```bash
git add app/components/NewComponent.tsx
git commit -m "Add new component feature"
git push origin main
```

---

**Last Updated:** November 20, 2025
**Framework Version:** Next.js 16.0.3
**React Version:** 19.2.0
