'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      text: "Working with Elvenwood transformed our Bangalore apartment into exactly what we envisioned. Their attention to spatial planning and material selection was impeccable—every detail from the cabinetry to the lighting felt purposeful. The team delivered on time and within budget, which rarely happens in interior projects.",
      author: "Priya Kapoor",
      project: "3BHK Apartment, Indiranagar",
    },
    {
      text: "We were initially hesitant about a complete villa renovation, but Elvenwood's transparent process and regular communication put us at ease. The craftsmanship in the custom joinery and finishes exceeded our expectations, and the way they managed the on-site coordination was seamless. Our home feels like a luxury retreat now.",
      author: "Rajesh & Meera Desai",
      project: "Villa Renovation, Whitefield",
    },
    {
      text: "The design presentation was so comprehensive that we could visualize our penthouse before a single piece was installed. Elvenwood's team understood our lifestyle preferences and translated them into functional, beautiful spaces. From concept to move-in, the professionalism and attention to detail were consistently exceptional.",
      author: "Vikram Singh",
      project: "Penthouse, Koramangala",
    },
    {
      text: "Our duplex project involved intricate architectural details and custom elements, and Elvenwood executed everything flawlessly. What impressed us most was their in-house manufacturing capability—we could see the quality being built, not just ordered. The installation was precise, and the finishing touches were museum-quality.",
      author: "Anita Sharma",
      project: "Duplex, Jubilee Hills",
    },
    {
      text: "Elvenwood didn't just design our home; they listened to our story and created spaces that reflect who we are. The collaborative process was enjoyable, the timelines were respected, and their post-installation support made us feel genuinely cared for. We're recommending them to everyone.",
      author: "Deepak & Neha Nair",
      project: "4BHK Home, Banjara Hills",
    },
  ];

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Real Experiences From Real People
        </h2>

        {/* Testimonial Content */}
        <div
          className="text-center transition-opacity duration-500"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <p className="text-lg md:text-xl text-gray-700 leading-8 md:leading-9 mb-8 min-h-32">
            {testimonials[activeIndex].text}
          </p>

          <div className="space-y-1">
            <p className="text-gray-900 font-semibold text-lg">
              - {testimonials[activeIndex].author}
            </p>
            <p className="text-orange-500 font-medium text-sm tracking-wide">
              {testimonials[activeIndex].project}
            </p>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${index === activeIndex
                  ? "w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 animate-gradient-xy"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
