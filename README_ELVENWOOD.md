# Elvenwood Interior – Luxury Design Website

A modern, luxury interior design website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🎨 Features

### ✨ Core Features
- **Responsive Design** - Mobile, tablet, desktop optimized
- **Smooth Animations** - Scroll-triggered effects and hover states
- **SEO Optimized** - Structured data, metadata, sitemap
- **Fast Performance** - Image optimization and code splitting
- **Contact System** - Enquiry modal with validation

### 🏗️ Components
- AppLayout (Header, Footer, Watermark)
- Animated Image Component
- Modal Enquiry Form
- Room Showcase Cards
- Kitchen Shape Selector
- Custom React Hooks

### 📄 Pages (17 Total)
Home, Process, Services, Explore Rooms, Living Room, Bedroom, Kids Room, Home Office, Dining, Kitchen (+ 5 shapes), About, Contact

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 14 | Framework (App Router) |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| React Hooks | State Management |
| Next.js API Routes | Backend |
| Vercel | Deployment |

## 📁 Structure

```
app/
├── api/leads/          # Contact form API
├── components/         # 9+ reusable components
├── hooks/              # useHoverDelay, useReducedMotion
├── (routes)/           # 17 page routes
├── globals.css         # Animations & utilities
└── layout.tsx          # Root with SEO
public/
├── sitemap.xml         # SEO sitemap
└── robots.txt
```

## 🚀 Quick Start

```bash
# Install
npm install

# Development
npm run dev

# Build
npm run build
npm start
```

## 📞 API

**POST /api/leads** - Submit enquiry

```json
{
  "name": "John",
  "email": "john@example.com",
  "phone": "+1 (555) 123-4567",
  "message": "Kitchen redesign inquiry..."
}
```

## 🔍 SEO

- ✅ Sitemap at `/sitemap.xml`
- ✅ Robots.txt configuration
- ✅ Open Graph metadata
- ✅ Structured data ready

## ⚙️ Customization

1. **Colors**: Edit `tailwind.config.ts`
2. **Content**: Update files in `app/(routes)/`
3. **Animations**: Modify `app/globals.css`
4. **Images**: Add to `public/assets/`

## 📱 Performance

- Next.js Image optimization
- Code splitting & lazy loading
- CSS compression
- Responsive images
- Accessibility (reduced-motion support)

## 🌐 Deployment

### Vercel
```bash
vercel deploy
```

### Docker
```bash
docker build -t elvenwood .
docker run -p 3000:3000 elvenwood
```

## 📝 Notes

- All forms submit to `/api/leads`
- Images use Next.js Image component for optimization
- Animations respect `prefers-reduced-motion`
- SEO metadata configured per page
- Hover delays prevent dropdown flickering

## 💬 Support

Contact: hello@elvenwood.com

---

**Built with ❤️ using Next.js 14 + TypeScript + Tailwind CSS**
