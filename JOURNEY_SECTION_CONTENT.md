# Journey Section - Content Block
## Premium Homepage Section for Elvenwood Interior

---

## HEADLINE
**Your Journey to Refinement**

---

## SUBHEADLINE
From visionary concept to flawless execution—your home transformed with uncompromising craftsmanship.

---

## DESCRIPTION
We believe your interior should tell your story. Every material, every detail, every decision reflects who you are. That's why we partner with you at every stage, ensuring your vision becomes reality with the precision of an atelier and the warmth of a trusted advisor.

---

## 4-STEP JOURNEY SNAPSHOT

### Step 1: Consultation
We listen, understand your vision, and craft your design story.

### Step 2: Design Phase
Bespoke concepts refined through collaborative refinement and 3D visualization.

### Step 3: Execution
Flawless production and installation with white-glove attention to detail.

### Step 4: Move-In
Your sanctuary awaits—perfectly appointed, ready for living.

---

## PREMIUM SERVICE HIGHLIGHTS
(4 key value propositions)

1. **Bespoke design curated exclusively for your aesthetic and lifestyle.**
2. **In-house atelier crafting custom elements with museum-quality precision.**
3. **White-glove coordination from concept through move-in day.**
4. **Lifetime partnership with dedicated concierge support.**

---

## CALLS-TO-ACTION

### Primary CTA (Action-Forward)
**Schedule a Consultation**

### Secondary CTA (Softer)
**View Our Portfolio**

---

## DESIGN NOTES

**Layout Structure:**
- Left column: Timeline buttons (Consultation → Design Phase → Execution → Move-In)
- Active step description panel below buttons (with subtle background gradient)
- Service highlights list with checkmark icons
- Right column: Hero image of family in luxury interior space
- Image overlay text: "Move-In" heading + supporting copy
- CTAs centered below, stacked on mobile / side-by-side on desktop

**Visual Hierarchy:**
- Headline: Large (48-60px on desktop), with "Refinement" italicized in amber
- Subheadline: 20px, medium weight, gray-600
- Description: 18px, warm gray, generous leading
- Button text: Semibold, all-caps friendly
- Highlights: Body text with checkmark icons, amber-100 background circles

**Animation & Interactivity:**
- Smooth transitions (300ms) on button state changes
- Active step button: Amber background, white text
- Inactive buttons: Light amber background, hover to medium amber
- Step description panel: Subtle fade-in / scale-out on click
- Buttons: Hover scale (1.05) and shadow increase on hover

**Spacing & White Space:**
- Section padding: 96px top/bottom (py-24)
- Grid gap: 48px (lg:gap-12)
- Button spacing: 16px (gap-4) between CTAs
- Highlights list: 16px spacing between items (space-y-4)

**Color Palette:**
- Amber accent: #D97706 (amber-600)
- Light amber: #FEF3C7 (amber-50)
- Dark text: #111827 (gray-900)
- Body text: #4B5563 (gray-700)
- Button hover: Scale up + shadow increase

---

## TECHNICAL IMPLEMENTATION

**Component:** `JourneySection.tsx`
**Parent:** `app/page.tsx`
**Imports Required:**
- React hooks (useState)
- Next.js Image component
- Tailwind CSS classes

**Key Features:**
- Interactive timeline buttons (controlled via `activeStep` state)
- Dynamic step description display
- Accessibility: ARIA labels on buttons, semantic HTML
- Responsive: Single column on mobile (grid-cols-1), two columns on lg+ (lg:grid-cols-2)
- Image path: `/images/journey-home.jpg` (user should add their own image)

---

## CONTENT GUIDELINES FOR EDITORS

- **Tone:** Elegant, confident, client-focused (benefits over features)
- **Vocabulary:** Luxury terms (bespoke, atelier, refinement, white-glove, concierge)
- **Length:** Keep lines concise and scannable
- **Benefits:** Always speak to what the client *feels* or *gains*, not just what we do
- **Voice:** Warm, sophisticated, trustworthy

---

**Last Updated:** November 21, 2025
**Status:** Ready for production
**Image Asset Placeholder:** `/images/journey-home.jpg` (6000x4000px recommended)
