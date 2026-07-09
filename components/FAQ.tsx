"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// Interface voor een FAQ item
interface FAQItem {
  q: string;
  a: string;
}

// Interface voor de FAQ props
interface FAQProps {
  items: FAQItem[];
  schemaId?: string;
}

// Interface voor de FAQ schema structuur
interface FAQSchema {
  "@context": string;
  "@type": string;
  mainEntity: {
    "@type": string;
    name: string;
    acceptedAnswer: {
      "@type": string;
      text: string;
    };
  }[];
}

export default function FAQ({ items, schemaId = "faq" }: FAQProps) {
  const [open, setOpen] = useState<number>(0);

  const faqSchema: FAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item: FAQItem) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div data-testid={`faq-${schemaId}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="space-y-3">
        {items.map((item: FAQItem, index: number) => {
          const isOpen: boolean = open === index;
          return (
            <div
              key={index}
              className="border-2 border-black bg-white"
              data-testid={`faq-item-${index}`}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-heading font-bold uppercase text-base sm:text-lg tracking-tight">
                  {item.q}
                </span>
                <span className={`shrink-0 grid place-items-center w-9 h-9 border-2 border-black ${isOpen ? "bg-[#FF4500] text-white" : "bg-white"}`}>
                  {isOpen ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 -mt-1 text-[#1a1a1a] text-base leading-relaxed border-t border-black/10">
                  <div className="pt-4 whitespace-pre-line">{item.a}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
