# Premium "How We Work" Process Section
## Three Layout Variations for Elvenwood Interior

---

# VARIANT A — Sequential Flow (Timeline Ribbon)

## 1) HTML SNIPPET (Tailwind)

```jsx
'use client';

import { useState } from 'react';

export default function ProcessVariantA() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-amber-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Crafted with Intention
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Every project unfolds in carefully orchestrated phases, ensuring nothing is left to chance.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our proven methodology blends meticulous planning with creative intuition. From initial discovery to final unveiling, each phase builds upon the last—creating interiors that transcend expectation.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200" />

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { num: 1, title: 'Discovery', desc: 'Understanding your aesthetic, lifestyle, and aspirations.' },
                { num: 2, title: 'Concept', desc: 'Crafting bespoke design directions tailored to you.' },
                { num: 3, title: 'Refinement', desc: 'Collaborating to perfect every material and detail.' },
                { num: 4, title: 'Execution', desc: 'Flawless production and installation with precision.' },
                { num: 5, title: 'Reveal', desc: 'Stepping into your finished sanctuary.' },
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Circle */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-amber-500 flex items-center justify-center mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-amber-600">{step.num}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 text-center mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 text-center leading-tight">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-white rounded-2xl border border-gray-200 p-12 mb-12">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">
            Why Clients Choose Elvenwood
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Bespoke design with museum-quality craftsmanship and precision.',
              'Transparent process with white-glove support every step.',
              'Lifetime partnership—your concierge for all future refinements.',
            ].map((highlight, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-100">
                    <svg className="h-5 w-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105" aria-label="Begin your interior design journey">
            Start Your Project
          </button>
          <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300" aria-label="See completed projects and design inspiration">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
```

## 2) PLAIN-TEXT CONTENT BLOCK

```
VARIANT A — Sequential Flow (Timeline Ribbon)

HEADLINE:
Crafted with Intention

SUBHEADLINE:
Every project unfolds in carefully orchestrated phases, ensuring nothing is left to chance.

DESCRIPTION:
Our proven methodology blends meticulous planning with creative intuition. From initial discovery to final unveiling, each phase builds upon the last—creating interiors that transcend expectation.

5-STEP PROCESS:
1. Discovery — Understanding your aesthetic, lifestyle, and aspirations.
2. Concept — Crafting bespoke design directions tailored to you.
3. Refinement — Collaborating to perfect every material and detail.
4. Execution — Flawless production and installation with precision.
5. Reveal — Stepping into your finished sanctuary.

PREMIUM HIGHLIGHTS:
- Bespoke design with museum-quality craftsmanship and precision.
- Transparent process with white-glove support every step.
- Lifetime partnership—your concierge for all future refinements.

CALLS-TO-ACTION:
Primary: Start Your Project
Secondary: View Case Studies
```

## 3) DESIGN GUIDANCE

Left-to-right horizontal timeline with numbered circles (1–5) connected by an amber gradient line. Progress bar reinforces forward momentum. Responsive: stacks vertically on mobile, horizontal ribbon on desktop. Add subtle shadow to circles for depth. Highlights section below with checkmark icons in light amber circles. Use generous white space and breathing room.

## 4) ACCESSIBILITY NOTES

- Primary button: `aria-label="Begin your interior design journey"`
- Secondary button: `aria-label="See completed projects and design inspiration"`
- Timeline numbers: Use semantic `<h3>` for step titles
- Highlights section: Wrap in `<ul>` with `<li>` for screen readers
- Use `role="region"` and `aria-labelledby` for timeline section if needed

---

# VARIANT B — Card Grid with Staggered Reveals

## 1) HTML SNIPPET (Tailwind)

```jsx
'use client';

import { useState, useEffect } from 'react';

export default function ProcessVariantB() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCards((prev) => {
        const next = [...prev];
        if (next.length < 4) next.push(next.length);
        return next;
      });
    }, 200);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { title: 'Vision Discovery', description: 'We listen deeply to understand your dreams and design preferences.' },
    { title: 'Conceptual Design', description: 'Bespoke concepts crafted with your style and sensibility in mind.' },
    { title: 'Masterful Execution', description: 'In-house atelier production with unwavering attention to detail.' },
    { title: 'Grand Unveiling', description: 'Your sanctuary awaits—every element perfectly curated and placed.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Four Phases of Refinement
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            A curated journey designed around you, crafted with uncompromising standards.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Each phase of our process is an opportunity to deepen collaboration and elevate your vision. We orchestrate every detail, ensuring your interior becomes a true reflection of who you are.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`group relative bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 rounded-xl p-8 transition-all duration-500 transform hover:shadow-xl hover:border-amber-500 ${
                visibleCards.includes(idx) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                transitionDelay: visibleCards.includes(idx) ? '0ms' : '500ms',
              }}
            >
              {/* Phase Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {idx + 1}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Accent Line */}
              <div className="h-1 w-0 bg-amber-500 group-hover:w-8 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="bg-gray-900 text-white rounded-2xl p-12 mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">
            What Sets Elvenwood Apart
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '✨', text: 'Atelier-quality craftsmanship with 20+ years of industry mastery.' },
              { icon: '🤝', text: 'Collaborative approach with transparent communication throughout.' },
              { icon: '♾️', text: 'Lifetime concierge support ensuring your satisfaction forever.' },
            ].map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <p className="text-gray-200 leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300" aria-label="Schedule a consultation with our design experts">
            Book a Consultation
          </button>
          <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300" aria-label="Explore our portfolio of completed projects">
            Explore Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
```

## 2) PLAIN-TEXT CONTENT BLOCK

```
VARIANT B — Card Grid with Staggered Reveals

HEADLINE:
Four Phases of Refinement

SUBHEADLINE:
A curated journey designed around you, crafted with uncompromising standards.

DESCRIPTION:
Each phase of our process is an opportunity to deepen collaboration and elevate your vision. We orchestrate every detail, ensuring your interior becomes a true reflection of who you are.

4-STEP PROCESS:
1. Vision Discovery — We listen deeply to understand your dreams and design preferences.
2. Conceptual Design — Bespoke concepts crafted with your style and sensibility in mind.
3. Masterful Execution — In-house atelier production with unwavering attention to detail.
4. Grand Unveiling — Your sanctuary awaits—every element perfectly curated and placed.

PREMIUM HIGHLIGHTS:
- Atelier-quality craftsmanship with 20+ years of industry mastery.
- Collaborative approach with transparent communication throughout.
- Lifetime concierge support ensuring your satisfaction forever.

CALLS-TO-ACTION:
Primary: Book a Consultation
Secondary: Explore Our Work
```

## 3) DESIGN GUIDANCE

Four cards in a 2×2 grid (desktop) or stacked (mobile), each with a numbered circle in the top-left corner. Cards have light amber gradient background, bounce in with staggered animation (200ms delays). Hover state: shadow increase, border color shift to darker amber, animated accent line grows from left. Dark section below with three benefit boxes (emoji + text). Use generous padding and breathing room between cards.

## 4) ACCESSIBILITY NOTES

- Primary button: `aria-label="Schedule a consultation with our design experts"`
- Secondary button: `aria-label="Explore our portfolio of completed projects"`
- Process cards: Wrap in `<article>` with `<h3>` for step titles
- Numbers: Use semantic numbering (not just decorative)
- Emoji icons: Use `role="img"` with descriptive `aria-label` if screen-reader critical

---

# VARIANT C — Split-Screen Hero with Diagonal Process

## 1) HTML SNIPPET (Tailwind)

```jsx
'use client';

import Image from 'next/image';

export default function ProcessVariantC() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Our Studio Method
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Merging artistry with precision across five transformative stages.
          </p>
        </div>

        {/* Two-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* Left: Visual */}
          <div className="relative overflow-hidden rounded-2xl h-96 md:h-full min-h-96 bg-gray-200">
            <Image
              src="/placeholder.jpg"
              alt="Luxury interior design workspace"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-semibold opacity-90">Our Atelier</p>
              <p className="text-lg font-bold">Where Visions Become Reality</p>
            </div>
          </div>

          {/* Right: Process List (Diagonal Steps) */}
          <div className="flex flex-col justify-center space-y-6">
            {[
              { step: 1, title: 'Understand', copy: 'Deep immersion in your aesthetic, lifestyle, and goals.' },
              { step: 2, title: 'Envision', copy: 'Creating multiple design directions for your consideration.' },
              { step: 3, title: 'Curate', copy: 'Sourcing materials and finishes with meticulous care.' },
              { step: 4, title: 'Construct', copy: 'In-house production and seamless on-site installation.' },
              { step: 5, title: 'Celebrate', copy: 'Your finished sanctuary, ready to become home.' },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-6 pb-6 border-l-2 border-amber-200 pl-6 ${
                  idx !== 4 ? 'border-b-2' : ''
                }`}
              >
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-lg font-bold text-amber-700">{item.step}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow pt-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 py-8 border-y border-gray-200">
          {[
            { title: 'Bespoke Atelier', desc: 'Custom production with museum-quality standards.' },
            { title: 'Transparent Partnerships', desc: 'Clear communication and collaborative refinement.' },
            { title: 'Perpetual Support', desc: 'Lifetime concierge ensuring enduring satisfaction.' },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105" aria-label="Start your interior design consultation today">
            Begin Your Design Journey
          </button>
          <button className="px-8 py-4 border-2 border-amber-600 text-amber-600 font-semibold rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300" aria-label="Browse recent design projects and completed interiors">
            See Recent Projects
          </button>
        </div>
      </div>
    </section>
  );
}
```

## 2) PLAIN-TEXT CONTENT BLOCK

```
VARIANT C — Split-Screen Hero with Diagonal Process

HEADLINE:
Our Studio Method

SUBHEADLINE:
Merging artistry with precision across five transformative stages.

DESCRIPTION:
(Minimal intro—focus on visual + process flow)

5-STEP PROCESS (Vertical, Staggered Layout):
1. Understand — Deep immersion in your aesthetic, lifestyle, and goals.
2. Envision — Creating multiple design directions for your consideration.
3. Curate — Sourcing materials and finishes with meticulous care.
4. Construct — In-house production and seamless on-site installation.
5. Celebrate — Your finished sanctuary, ready to become home.

PREMIUM HIGHLIGHTS:
- Bespoke Atelier — Custom production with museum-quality standards.
- Transparent Partnerships — Clear communication and collaborative refinement.
- Perpetual Support — Lifetime concierge ensuring enduring satisfaction.

CALLS-TO-ACTION:
Primary: Begin Your Design Journey
Secondary: See Recent Projects
```

## 3) DESIGN GUIDANCE

Split-screen layout: left side is full-height hero image with overlay text ("Our Atelier" + subhead). Right side features vertical staggered process steps with diagonal connecting lines. Each step has a numbered circle, bold title, and descriptive copy. Steps connect via left border (animated on scroll). Below: three-column highlight section with minimal design. Responsive: stacks on mobile (image first, then process steps). Use diagonal elements and asymmetrical layout for visual interest.

## 4) ACCESSIBILITY NOTES

- Primary button: `aria-label="Start your interior design consultation today"`
- Secondary button: `aria-label="Browse recent design projects and completed interiors"`
- Process steps: Each wrapped in `<div role="listitem">` or within `<ol>` for semantic ordering
- Image: `alt="Luxury interior design workspace"` with descriptive caption
- Visual connectors (borders): Decorative only—ensure content is readable without them
- Highlights section: Use `<dl>` (definition list) for semantic structure

---

## SUMMARY TABLE

| Variant | Layout | Best For | Key Feature |
|---------|--------|----------|------------|
| A | Horizontal Timeline | Linear, process-heavy narratives | Connected numbered circles with progress bar |
| B | Card Grid with Animation | Engaging, modern aesthetic | Staggered reveal with hover interactions |
| C | Split-Screen Staggered | Balanced visual + content | Hero image + diagonal process flow |

---

## IMPLEMENTATION NOTES

- All variants use Tailwind CSS (no external libraries)
- All include semantic HTML (`<h2>`, `<h3>`, `<button>`, etc.)
- Accessibility: `aria-label` on all primary/secondary CTAs
- Responsive: Mobile-first approach, optimized for md/lg breakpoints
- Color palette: Amber accents (#D97706), gray text (#4B5563), white/off-white backgrounds
- Typography: Bold headlines, readable body text, consistent hierarchy

**Last Updated:** November 21, 2025
**Status:** Production-ready
**Client:** Elvenwood Interior
