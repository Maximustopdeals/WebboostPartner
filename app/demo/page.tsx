import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink, Monitor, Smartphone, Zap, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo's & Live Voorbeelden | WebBoost Partner Rotterdam",
  description:
    "Bekijk live voorbeelden van Next.js websites gebouwd door WebBoost Partner. Van lokale SEO-sites tot e-commerce demos. Vraag een gratis demo aan.",
  alternates: { canonical: "https://webboostpartner.nl/demo" },
};

export default function DemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">
            // Live Voorbeelden
          </p>
          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            Demo&apos;s &amp;<br />
            <span className="text-[#FF4500]">Voorbeelden</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Bekijk wat we bouwen. Elke demo is een volledig functionele Next.js website 
            die u live kunt ervaren op desktop én mobiel.
          </p>
        </div>
      </section>

      {/* Live Project: D.T.G. Cleaning */}
      <section className="bg-white py-16 sm:py-24 border-b-2 border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-green-600 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
            Live Website
          </p>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Website Preview */}
            <a
              href="https://dtgcleaning.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-2 border-black overflow-hidden hover:shadow-brutal-sm transition-all relative"
            >
              <div className="aspect-[16/10] bg-[#1a3a52] relative flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="font-heading font-black uppercase text-3xl tracking-tight">D.T.G. Cleaning</p>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mt-2">Glazenwasser Nijkerk</p>
                  <div className="mt-6 inline-flex items-center gap-2 bg-white/10 px-4 py-2">
                    <Zap size={14} className="text-yellow-400" />
                    <span className="text-xs tracking-wider">100/100 PageSpeed</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white font-mono text-xs uppercase tracking-widest px-2 py-1">
                  #1 Google
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center gap-2 bg-white text-black px-3 py-2 text-xs font-bold tracking-wider uppercase border-2 border-black">
                  <ExternalLink size={12} />
                  Open website
                </span>
              </div>
            </a>

            {/* Details */}
            <div>
              <h2 className="font-heading font-extrabold uppercase text-3xl tracking-tight mb-4">
                D.T.G. Cleaning
              </h2>
              <p className="text-[#525252] leading-relaxed mb-6">
                Complete Next.js website voor een glazenwasser in Nijkerk. 
                Gebouwd voor lokale SEO met meerdere landingspagina&apos;s per dienst. 
                Scoort op pagina 1 in Google voor &quot;glazenwasser Nijkerk&quot;.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border border-gray-200 p-4">
                  <Zap size={16} className="text-[#FF4500] mb-2" />
                  <p className="font-mono text-xs uppercase tracking-wider text-gray-400 mb-1">PageSpeed</p>
                  <p className="font-heading font-bold text-xl">100/100</p>
                </div>
                <div className="border border-gray-200 p-4">
                  <Clock size={16} className="text-[#FF4500] mb-2" />
                  <p className="font-mono text-xs uppercase tracking-wider text-gray-400 mb-1">LCP</p>
                  <p className="font-heading font-bold text-xl">&lt; 0.8s</p>
                </div>
                <div className="border border-gray-200 p-4">
                  <Monitor size={16} className="text-[#FF4500] mb-2" />
                  <p className="font-mono text-xs uppercase tracking-wider text-gray-400 mb-1">Desktop</p>
                  <p className="font-heading font-bold text-xl">95+</p>
                </div>
                <div className="border border-gray-200 p-4">
                  <Smartphone size={16} className="text-[#FF4500] mb-2" />
                  <p className="font-mono text-xs uppercase tracking-wider text-gray-400 mb-1">Mobiel</p>
                  <p className="font-heading font-bold text-xl">90+</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Next.js 16", "Lokale SEO", "FAQ Schema", "4 Pagina's", "Formspree"].map((tag) => (
                  <span key={tag} className="font-mono text-xs uppercase tracking-wider bg-[#FAFAFA] border border-black px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://dtgcleaning.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1a3a52] text-white px-6 py-3 font-heading font-bold uppercase text-xs tracking-widest hover:bg-[#2c4a66] transition-colors"
              >
                <ExternalLink size={14} />
                Bezoek dtgcleaning.nl
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Live: Fashion Webshop */}
      <section className="bg-[#FAFAFA] py-16 sm:py-24 border-b-2 border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-green-600 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
            Live Demo
          </p>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Preview */}
            <Link
              href="/demo/fashion"
              className="group block border-2 border-black overflow-hidden hover:shadow-brutal-sm transition-all relative"
            >
              <div className="aspect-[16/10] bg-stone-100 relative overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-1 p-2">
                  {[
                    "/images/fashion/blazer.jpg",
                    "/images/fashion/coat.jpg",
                    "/images/fashion/bag.jpg",
                    "/images/fashion/sweater.jpg",
                    "/images/fashion/trousers.jpg",
                    "/images/fashion/scarf.jpg",
                    "/images/fashion/dress.jpg",
                    "/images/fashion/shirt.jpg",
                  ].map((src, i) => (
                    <div key={i} className="relative overflow-hidden bg-gray-100">
                      <Image
                        src={src}
                        alt={`Product ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 1024px) 25vw, 12vw"
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-2 bg-white text-black px-3 py-2 text-xs font-bold tracking-wider uppercase border-2 border-black">
                    <ExternalLink size={12} />
                    Open webshop
                  </span>
                </div>
              </div>
            </Link>

            {/* Details */}
            <div>
              <h2 className="font-heading font-extrabold uppercase text-3xl tracking-tight mb-4">
                Luxe Fashion Webshop
              </h2>
              <p className="text-[#525252] leading-relaxed mb-6">
                Een volledig functionele e-commerce demo met 8 producten, 
                categorie-filters, en een werkende winkelwagen. Gebouwd om 
                te laten zien wat mogelijk is met Next.js en modern 
                webshop-technologie.
              </p>

              <div className="border border-gray-200 bg-white p-6 mb-6">
                <p className="font-heading font-bold text-sm uppercase tracking-wider mb-3">Wat u kunt doen:</p>
                <ul className="space-y-2 text-sm text-[#525252]">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                    Producten filteren op categorie (Dames, Heren, Accessoires)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                    Items toevoegen aan de winkelwagen
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                    Hoeveelheid aanpassen of verwijderen
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                    Responsive op desktop, tablet &amp; mobiel
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Next.js 16", "AI Productfoto's", "Winkelwagen", "Responsive"].map((tag) => (
                  <span key={tag} className="font-mono text-xs uppercase tracking-wider bg-white border border-black px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/demo/fashion"
                className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 font-heading font-bold uppercase text-xs tracking-widest hover:bg-[#333] transition-colors"
              >
                <ExternalLink size={14} />
                Bekijk live webshop
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="font-heading font-black uppercase text-4xl tracking-tighter leading-[0.95] mb-6">
            Ook een website die werkt?
          </h2>
          <p className="text-lg text-[#525252] leading-relaxed mb-8">
            Elke demo hierboven is gebouwd met dezelfde aanpak: snel, SEO-geoptimaliseerd, 
            en gericht op resultaat. Vraag een vrijblijvend gesprek aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#FF4500] text-white px-8 py-4 font-heading font-bold uppercase text-sm tracking-widest hover:bg-[#e63e00] transition-colors"
            >
              Gesprek aanvragen
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/pakketten"
              className="inline-flex items-center justify-center gap-2 border-2 border-black px-8 py-4 font-heading font-bold uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              Bekijk pakketten
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
