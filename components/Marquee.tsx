"use client";

import { useEffect, useRef } from "react";

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    
    let animationId: number;
    let position = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      position -= speed;
      // Reset when half the content has scrolled (first set of items)
      const halfWidth = track.scrollWidth / 2;
      if (Math.abs(position) >= halfWidth) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  const items: string[] = [
    "SEO ROTTERDAM",
    "NEXT.JS SPEED",
    "CONVERSIE",
    "NO-NONSENSE",
    "100/100 PAGESPEED",
    "LOKAAL",
  ];

  // Triple the items to ensure seamless looping
  const content: string[] = [...items, ...items, ...items];

  return (
    <section className="bg-black border-y-2 border-black overflow-hidden py-6 sm:py-8" data-testid="marquee-banner">
      <div
        ref={trackRef}
        className="whitespace-nowrap flex items-center gap-12 will-change-transform"
      >
        {content.map((t: string, i: number) => (
          <span
            key={i}
            className="font-heading font-extrabold uppercase text-5xl sm:text-7xl text-transparent shrink-0"
            style={{
              WebkitTextStroke: "2px #FAFAFA",
            }}
          >
            {t} <span className="text-[#FF4500] mx-3" style={{ WebkitTextStroke: "0" }}>///</span>
          </span>
        ))}
      </div>
    </section>
  );
}
