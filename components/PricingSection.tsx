import Link from "next/link";
import { Check, Star, Sparkles } from "lucide-react";

interface PricingPackage {
  id: string;
  name: string;
  priceExcl: string;
  priceIncl: string;
  audience: string;
  tagline: string;
  description: string;
  features: string[];
  featured: boolean;
  isCustom?: boolean;
}

const packages: PricingPackage[] = [
  {
    id: "essential",
    name: "Essential",
    priceExcl: "2.495",
    priceIncl: "3.019",
    audience: "Voor ZZP'ers & starters",
    tagline: "Jij levert de input, ik bouw de website.",
    description:
      "Een professionele, razendsnelle Next.js website om snel online te staan en gevonden te worden.",
    features: [
      "5 pagina's op maat",
      "Technische SEO basis",
      "100/100 SEO score",
      "Responsive design",
      "Contactformulier",
      "Google Analytics setup",
      "Hosting setup eerste jaar",
      "30 dagen support",
    ],
    featured: false,
  },
  {
    id: "professional",
    name: "Professional",
    priceExcl: "4.495",
    priceIncl: "5.439",
    audience: "Voor ondernemers met ambitie",
    tagline: "Complete website met lokale SEO en geavanceerde optimalisatie.",
    description:
      "Meer pagina's, meer bereik in Rotterdam en omgeving, en een website die klaar is voor groei.",
    features: [
      "Onbeperkt pagina's",
      "Lokale SEO Rotterdam",
      "Core Web Vitals 95+",
      "Blog / nieuws module",
      "Google Search Console setup",
      "Schema markup (FAQ, LocalBusiness, etc.)",
      "90 dagen support",
      "1 uur strategiegesprek",
    ],
    featured: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceExcl: "6.995",
    priceIncl: "8.464",
    audience: "Voor groeiende & gevestigde bedrijven",
    tagline: "Maatwerk, strategie en doorlopende optimalisatie.",
    description:
      "Een op maat gemaakte oplossing voor maximale groei, inclusief webshop functionaliteit, dashboards en SLA.",
    features: [
      "Volledige SEO strategie",
      "Headless CMS (Sanity / Contentful)",
      "Webshop functionaliteit (tot 100 producten)",
      "iDEAL / Mollie / Stripe integratie",
      "Geavanceerde animaties",
      "A/B test-ready setup",
      "Custom dashboards",
      "6 maanden support",
      "SLA beschikbaar",
    ],
    featured: false,
    isCustom: true,
  },
];

interface PricingSectionProps {
  compact?: boolean;
}

export default function PricingSection({ compact = false }: PricingSectionProps) {
  return (
    <section className="bg-[#FAFAFA] py-20 sm:py-28" data-testid="pricing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {!compact && (
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
              // Pakketten & Prijzen
            </p>
            <h2 className="font-heading font-extrabold uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95]">
              Heldere prijzen.<br />Geen verrassingen.
            </h2>
            <p className="mt-4 text-lg text-[#525252] max-w-2xl">
              Drie pakketten, één belofte: een website die laadt in een halve seconde,
              scoort in Google en eruit ziet alsof hij voor jou is gemaakt. Want dat is hij.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg: PricingPackage) => (
            <div
              key={pkg.id}
              className={`relative border-2 border-black p-6 flex flex-col transition-all hover:-translate-y-1 ${
                pkg.featured
                  ? "bg-[#FF4500] text-white shadow-brutal"
                  : "bg-white hover:shadow-brutal-sm"
              }`}
              data-testid={`pricing-card-${pkg.id}`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-4 bg-black text-white text-xs font-bold uppercase tracking-widest px-3 py-1 border-2 border-black flex items-center gap-1">
                  <Star size={12} fill="#FF4500" stroke="#FF4500" /> Meest gekozen
                </span>
              )}

              {/* Audience & Name */}
              <p className={`font-mono text-xs uppercase tracking-widest mb-1 ${pkg.featured ? "text-white/80" : "text-[#525252]"}`}>
                {pkg.audience}
              </p>
              <h3 className="font-heading font-extrabold uppercase text-3xl mb-2">{pkg.name}</h3>
              
              {/* Tagline */}
              <p className={`text-sm font-medium mb-3 ${pkg.featured ? "text-white/90" : "text-[#1a1a1a]"}`}>
                {pkg.tagline}
              </p>

              {/* Price - with both excl and incl VAT */}
              <div className="mb-4">
                <div className="flex items-baseline flex-wrap gap-1">
                  <span className="font-heading font-extrabold text-5xl">
                    €{pkg.priceExcl}
                  </span>
                  <span className={`text-sm ml-1 ${pkg.featured ? "text-white/80" : "text-[#525252]"}`}>
                    excl. btw
                  </span>
                </div>
                <div className={`text-xs mt-1 ${pkg.featured ? "text-white/60" : "text-[#525252]"}`}>
                  (€{pkg.priceIncl} incl. 21% btw)
                </div>
                {pkg.isCustom && (
                  <div className="mt-1">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium ${pkg.featured ? "text-white/80" : "text-[#FF4500]"}`}>
                      <Sparkles size={12} /> Vanaf prijs - maatwerk mogelijk
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className={`text-sm mb-5 ${pkg.featured ? "text-white/90" : "text-[#525252]"}`}>
                {pkg.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2 mb-6 flex-1">
                {pkg.features.map((feature: string) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check size={16} strokeWidth={3} className={pkg.featured ? "text-white shrink-0 mt-0.5" : "text-[#FF4500] shrink-0 mt-0.5"} />
                    <span className={pkg.featured ? "text-white/95" : "text-[#1a1a1a]"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/contact"
                className={`text-center font-heading font-bold uppercase text-sm tracking-widest border-2 px-4 py-3 transition-all ${
                  pkg.featured
                    ? "bg-white text-black border-white hover:bg-black hover:text-white hover:border-black"
                    : "bg-black text-white border-black hover:bg-[#FF4500] hover:border-[#FF4500]"
                }`}
                data-testid={`pricing-cta-${pkg.id}`}
              >
                Offerte aanvragen →
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-[#525252] max-w-2xl">
          Alle prijzen zijn exclusief 21% btw. Een offerte op maat is altijd mogelijk —
          stuur een berichtje en we kijken samen wat past.
        </p>
      </div>
    </section>
  );
}
