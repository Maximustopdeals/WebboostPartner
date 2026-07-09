import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import USPGrid from "@/components/USPGrid";
import Marquee from "@/components/Marquee";
import PageSpeedTool from "@/components/PageSpeedTool";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Next.js website laten maken Rotterdam | WebBoost Partner",
  description:
    "Next.js website laten maken in Rotterdam? WebBoost Partner is uw specialist voor razendsnelle, SEO-geoptimaliseerde websites die scoren in Google.",
};

// Interface voor Bar component props
interface BarProps {
  label: string;
  value: string;
}

function Bar({ label, value }: BarProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[#525252]">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#FAFAFA] border-b-2 border-black overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
          <div className="absolute top-10 right-10 w-[500px] h-[500px] border-[20px] border-black rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32 grid lg:grid-cols-12 gap-10 items-center relative">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 border-2 border-black bg-white px-3 py-1 mb-6">
              <span className="w-2 h-2 bg-[#FF4500] rounded-full animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest">Next.js webbouwer · Rotterdam</span>
            </div>
            <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl lg:text-[5.5rem]" data-testid="hero-h1">
              Next.js website<br />
              laten maken in<br />
              <span className="text-[#FF4500]">Rotterdam</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl max-w-2xl text-[#1a1a1a] leading-relaxed">
              WebBoost Partner ontwikkelt razendsnelle <strong>Next.js websites</strong> voor
              ondernemers in Rotterdam en omgeving. Met jarenlange ervaring in webdevelopment,
              nu volledig gespecialiseerd in het framework waarmee Nike, Netflix en TikTok werken.
              <em>Geen plugins. Geen poespas. Wel resultaat.</em>
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FF4500] text-white font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
                data-testid="hero-cta-primary"
              >
                Plan een gesprek <ArrowRight size={18} />
              </Link>
              <Link
                href="/pakketten"
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
                data-testid="hero-cta-secondary"
              >
                Bekijk pakketten
              </Link>
            </div>
          </div>

          {/* PageSpeed floating card */}
          <div className="lg:col-span-4">
            <div className="relative max-w-sm ml-auto">
              <div className="bg-white border-2 border-black shadow-brutal p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-2">
                  PageSpeed Insights
                </p>
                <div className="flex items-end gap-3 mb-3">
                  <span className="font-heading font-black text-7xl leading-none">100</span>
                  <span className="text-[#525252] font-mono text-sm mb-2">/100</span>
                </div>
                <div className="space-y-1 text-xs font-mono">
                  <Bar label="LCP" value="0.6s" />
                  <Bar label="CLS" value="0.00" />
                  <Bar label="FID" value="0ms" />
                </div>
                <div className="mt-4 pt-4 border-t-2 border-black">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#00B050]">
                    ● Sneller dan 98%
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full bg-[#FF4500] border-2 border-black" />
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      <PageSpeedTool />

      <USPGrid />

      {/* Portfolio / Cases */}
      <section className="bg-[#FAFAFA] py-20 sm:py-28 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">
            // Gerealiseerde Projecten
          </p>
          <h2 className="font-heading font-extrabold uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95] mb-12">
            Websites die<br />presteren.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* D.T.G. Cleaning Case */}
            <div className="border-2 border-black bg-white group hover:shadow-brutal-sm transition-all flex flex-col">
              <a 
                href="https://dtgcleaning.nl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block aspect-[16/10] bg-[#1a3a52] relative overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="font-heading font-black uppercase text-2xl tracking-tight">D.T.G. Cleaning</p>
                    <p className="font-mono text-xs uppercase tracking-widest opacity-60 mt-1">Glazenwasser Nijkerk</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white font-mono text-xs uppercase tracking-widest px-2 py-1 border border-white/20">
                  #1 Google
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white text-sm font-semibold tracking-wider flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Klik om de snelheid te ervaren
                  </p>
                </div>
              </a>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider bg-[#FAFAFA] border border-black px-2 py-1">Next.js 16</span>
                  <span className="font-mono text-xs uppercase tracking-wider bg-[#FAFAFA] border border-black px-2 py-1">SEO</span>
                  <span className="font-mono text-xs uppercase tracking-wider bg-[#FAFAFA] border border-black px-2 py-1">Lokale SEO</span>
                </div>
                <h3 className="font-heading font-extrabold uppercase text-xl tracking-tight mb-2">
                  D.T.G. Cleaning — Glazenwasser Nijkerk
                </h3>
                <p className="text-sm text-[#525252] leading-relaxed mb-4 flex-1">
                  Complete Next.js website voor een glazenwasser in Nijkerk. Gebouwd voor 
                  lokale SEO met meerdere landingspagina's per dienst. Scoort op pagina 1 in Google 
                  voor "glazenwasser Nijkerk" en gerelateerde zoektermen.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-[#525252]">
                    <span>100/100 PageSpeed</span>
                    <span>•</span>
                    <span>4 pagina's</span>
                  </div>
                  <a 
                    href="https://dtgcleaning.nl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-heading font-bold uppercase text-xs tracking-widest text-[#FF4500] hover:underline"
                  >
                    Bezoek website <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Luxe Fashion Webshop - LIVE */}
            <Link 
              href="/demo/fashion" 
              className="border-2 border-black bg-white group hover:shadow-brutal-sm transition-all block"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-stone-100">
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-0.5">
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
                    <div key={i} className="relative overflow-hidden">
                      <Image
                        src={src}
                        alt={`Product ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 1024px) 25vw, 12vw"
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-4 right-4 bg-white text-black font-mono text-xs uppercase tracking-widest px-2 py-1 border border-black">
                  Live Demo
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider bg-[#FAFAFA] border border-black px-2 py-1">Next.js 16</span>
                  <span className="font-mono text-xs uppercase tracking-wider bg-[#FAFAFA] border border-black px-2 py-1">E-commerce</span>
                  <span className="font-mono text-xs uppercase tracking-wider bg-[#FAFAFA] border border-black px-2 py-1">AI Foto's</span>
                </div>
                <h3 className="font-heading font-extrabold uppercase text-xl tracking-tight mb-2">
                  Luxe Fashion Webshop
                </h3>
                <p className="text-sm text-[#525252] leading-relaxed mb-4">
                  Volledig functionele fashion webshop met 8 producten, werkende 
                  winkelwagen en categorie-filters. Gebouwd als e-commerce showcase.
                </p>
                <span className="inline-flex items-center gap-2 font-heading font-bold uppercase text-xs tracking-widest text-[#FF4500]">
                  Bekijk webshop <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Website Rotterdam intro */}
      <section className="bg-white py-20 sm:py-28 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
              // Website laten maken Rotterdam
            </p>
            <h2 className="font-heading font-extrabold uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95]">
              Een mooie website<br />is niet genoeg.
            </h2>
          </div>
          <div className="lg:col-span-7 prose-brutal">
            <p>
              Een professionele website is meer dan alleen een mooi ontwerp. Hij moet
              bezoekers overtuigen, snel laden en goed gevonden worden in Google.
              Veel websites in Rotterdam zien er prima uit, maar leveren bedroevend
              weinig klanten op. Vaak komt dat door een verouderde technische basis:
              trage laadtijden, overbodige code, en een SEO die nooit is ingericht.
            </p>
            <p>
              Mijn aanpak: een complete website, gebouwd in Next.js, met technische
              SEO én lokale SEO ingebakken vanaf de eerste regel code. Resultaat?
              Een site die laadt in een halve seconde en in Google omhoog beweegt
              in plaats van weg te zakken.
            </p>
            <Link href="/website-laten-maken-rotterdam" className="inline-flex items-center gap-2 mt-2 font-heading font-bold uppercase text-sm tracking-widest text-[#FF4500] hover:underline">
              Lees meer over de aanpak <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Technische Vergelijking */}
      <section className="bg-[#FAFAFA] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
            // Technische Vergelijking
          </p>
          <h2 className="font-heading font-extrabold uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95] max-w-3xl">
            Waarom Next.js<br />beter presteert.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="border-2 border-black bg-white p-8" data-testid="compare-traditional">
              <p className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-2">Traditioneel CMS</p>
              <h3 className="font-heading font-extrabold uppercase text-3xl mb-5">Meer<br/>& Complexer</h3>
              <ul className="space-y-3 text-sm">
                {[
                  ["LCP", "2.8s — 6s+"],
                  ["Plugins", "12+ nodig voor SEO/speed"],
                  ["Updates", "Wekelijks, risico op storing"],
                  ["Beveiliging", "Meer aanvalsvectoren"],
                  ["Onderhoud", "€80-€150 per maand"],
                ].map(([k, v]) => (
                  <li key={k} className="flex justify-between border-b border-black/10 pb-2">
                    <span className="font-mono uppercase text-xs text-[#525252]">{k}</span>
                    <span className="font-semibold">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-2 border-black bg-black text-white p-8 shadow-brutal-orange" data-testid="compare-nextjs">
              <p className="font-mono text-xs uppercase tracking-widest text-[#FF4500] mb-2">Next.js</p>
              <h3 className="font-heading font-extrabold uppercase text-3xl mb-5">Snel<br/>& Solide</h3>
              <ul className="space-y-3 text-sm">
                {[
                  ["LCP", "< 0.8s"],
                  ["Plugins", "Geen — alles ingebouwd"],
                  ["Updates", "Minimaal onderhoud"],
                  ["Beveiliging", "Statische output = veilig"],
                  ["Onderhoud", "Minimaal"],
                ].map(([k, v]) => (
                  <li key={k} className="flex justify-between border-b border-white/10 pb-2">
                    <span className="font-mono uppercase text-xs text-white/60">{k}</span>
                    <span className="font-semibold">{v}</span>
                  </li>
                ))}
              </ul>
              <Link href="/nextjs-vs-wordpress" className="mt-6 inline-flex items-center gap-2 font-heading font-bold uppercase text-sm tracking-widest text-[#FF4500] hover:underline">
                Volledige vergelijking <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Rotterdam preview */}
      <section className="bg-white py-20 sm:py-28 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
              // SEO Rotterdam
            </p>
            <h2 className="font-heading font-extrabold uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95]">
              SEO die werkt.<br/>Vanaf dag één.
            </h2>
            <p className="mt-5 text-lg text-[#1a1a1a] leading-relaxed max-w-prose">
              Iedere website wordt gebouwd met technische SEO, lokale SEO en een
              sterke contentstructuur. Niet als losse dienst achteraf, maar als
              fundament onder elk project.
            </p>
            <Link href="/seo-rotterdam" className="inline-flex items-center gap-2 mt-6 font-heading font-bold uppercase text-sm tracking-widest bg-[#FF4500] text-white border-2 border-black px-5 py-3 hover:bg-black hover:-translate-y-1 hover:shadow-brutal-sm transition-all">
              Lees over SEO Rotterdam <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "Technische SEO", v: "Schema, sitemap, robots" },
              { k: "Lokale SEO", v: "Rotterdam & omgeving" },
              { k: "Core Web Vitals", v: "95+ scores" },
              { k: "Content strategie", v: "Per doelgroep" },
            ].map((c) => (
              <div key={c.k} className="border-2 border-black p-5 hover:bg-[#FF4500] hover:text-white transition-colors">
                <p className="font-heading font-extrabold uppercase text-lg mb-1">{c.k}</p>
                <p className="text-sm">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="bg-[#FAFAFA] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
            // Voor wie
          </p>
          <h2 className="font-heading font-extrabold uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95] mb-12">
            Voor ondernemers<br />die verder willen.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {["ZZP'ers","MKB-bedrijven","Lokale bedrijven","Coaches","Dienstverleners","Bouwbedrijven","Zorgverleners","Webshops"].map((g, i) => (
              <div key={g} className="border-2 border-black bg-white p-6 text-center hover:bg-black hover:text-white transition-colors" data-testid={`audience-${i}`}>
                <p className="font-heading font-extrabold uppercase text-lg tracking-tight">{g}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      <CTASection />
    </>
  );
}
