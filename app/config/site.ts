// Site-wide configuration
// Update these values to change contact information across the entire site

export const siteConfig = {
  name: 'Elvenwood Interior',
  tagline: 'Luxury Interior Design',

  contact: {
    phone: '+91 9035913611',
    phoneHref: 'tel:+919035913611',
    email: 'info@elvenwood.in',
    emailHref: 'mailto:info@elvenwood.in',
  },

  address: {
    line1: 'Chandapura - Dommasandra Rd, post,',
    line2: 'Heelalige, Bengaluru, Bommasandra,',
    line3: 'Karnataka 560099',
    full: 'Chandapura - Dommasandra Rd, post, Heelalige, Bengaluru, Bommasandra, Karnataka 560099',
    mapQuery: 'Elvenwood+Interiors+Chandapura+Dommasandra+Rd+Heelalige+Bengaluru+560099',
  },

  hours: {
    weekday: 'Mon - Sat: 9:00 AM - 7:00 PM',
    sunday: 'Sunday: By Appointment',
  },

  social: {
    instagram: 'https://instagram.com/elvenwoodinteriors',
    facebook: 'https://facebook.com/elvenwoodinteriors',
    whatsapp: 'https://wa.me/919035913611',
  },

  // SEO defaults
  seo: {
    title: 'Elvenwood Interior - Luxury Interior Design in Bangalore',
    description: 'Transform your space with Elvenwood Interior. Premium interior design services for homes and offices in Bangalore. 8+ years of crafting excellence.',
    keywords: ['interior design', 'luxury interiors', 'Bangalore', 'home decor', 'modular kitchen'],
  },
} as const;

export type SiteConfig = typeof siteConfig;
