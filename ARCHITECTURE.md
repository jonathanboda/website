# Elvenwood Interior – Architecture Documentation

## Project Overview

Elvenwood Interior is a luxury interior design website built with Next.js 14, TypeScript, and Tailwind CSS. The site showcases room designs, kitchen shapes, and services with smooth animations, scroll-triggered effects, and an interactive enquiry system.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **Animations**: Framer Motion
- **API**: Next.js API Routes
- **Deployment**: Vercel

## Folder Structure

```
elvenwood/
├── app/
│   ├── components/          # Reusable React components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── styles/              # Global styles & animations
│   ├── (routes)/            # Route group for pages
│   ├── api/                 # API endpoints
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global Tailwind styles
├── public/
│   └── assets/              # Images, videos, icons
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Core Components

### Layout Components
- **AppLayout**: Root wrapper with Header, Footer, and content area
- **Header**: Navigation, branding, dropdown menu
- **Footer**: Links, contact info, social

### UI Components
- **ImageWithMotion**: Image with scroll-triggered animations
- **WatermarkLayer**: Moving text watermark (left/right vertical)
- **ModalEnquiry**: Enquiry form modal with scroll-lock
- **CapabilityCard**: Service/feature card
- **RoomCard**: Room showcase card
- **KitchenShapeCard**: Kitchen layout showcase

## Custom Hooks

- **useHoverDelay**: Delays dropdown/menu close for better UX
- **useReducedMotion**: Detects and respects `prefers-reduced-motion`

## Pages (Routes)

- `/` – Home
- `/process` – Design process
- `/services` – Services overview
- `/explore-rooms` – Room exploration landing
- `/living-room` – Living room showcase
- `/kitchen` – Kitchen overview
- `/kitchen/l-shaped` – L-shaped kitchen
- `/kitchen/u-shaped` – U-shaped kitchen
- `/kitchen/parallel` – Parallel/Galley kitchen
- `/kitchen/island` – Island kitchen
- `/kitchen/straight` – Straight kitchen
- `/bedroom` – Bedroom showcase
- `/kids-room` – Kids room showcase
- `/home-office` – Home office showcase
- `/dining` – Dining room showcase
- `/about` – About page
- `/contact` – Contact page

## API Routes

- `POST /api/leads` – Submit enquiry form

## Animations & Effects

- Scroll-triggered fade-in/slide-up
- Hover scale/shadow elevation
- Image blend/feather edges
- Moving watermark
- Modal entrance/exit
- Luxury button interactions

## SEO & Performance

- JSON-LD structured data
- Open Graph metadata
- Sitemap & robots.txt
- Image optimization (next/image)
- Lazy loading
- Reduced motion support
- GA4 & Sentry monitoring

## Deployment

- Hosted on Vercel
- Environment variables for API keys
- Automatic builds on git push
