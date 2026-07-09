import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Specialist Nederland | Webbouwer voor moderne, snelle sites",
  description:
    "Op zoek naar een Next.js specialist in Nederland? WebBoost Partner bouwt razendsnelle, SEO-geoptimaliseerde Next.js websites voor MKB en groeiende bedrijven.",
  alternates: { canonical: "https://webboostpartner.nl/nextjs-specialist" },
};

export default function NextjsSpecialistPage() {
  return (
    <>
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Specialist</p>
          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            Next.js Specialist<br/><span className="text-[#FF4500]">Nederland</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Een Next.js specialist die spreekt in mensentaal en levert wat hij
            belooft. <strong>Razendsnelle, SEO-geoptimaliseerde websites</strong> voor
            ondernemers die snappen dat een mooie site niet genoeg is.
          </p>
        </div>
      </section>

      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">
          <h2>Waarom Next.js?</h2>
          <p>
            Next.js is geen hype — het is de stilstaande revolutie in webdevelopment.
            Wat ooit een React-framework was voor developers is uitgegroeid tot
            <strong> de keuze voor serieuze websites</strong> die zowel razendsnel
            als perfect vindbaar moeten zijn.
          </p>
          <p>
            Bedrijven die Next.js gebruiken: Nike, Netflix, TikTok, Twitch, NASA,
            Marvel, Notion, het Witte Huis, OpenAI. Niet omdat het hip is, maar
            omdat het werkt. Voor ondernemers in Rotterdam levert dezelfde
            technologie hetzelfde resultaat — schaalbaar van one-pager tot
            enterprise.
          </p>

          <h2>Mijn expertise</h2>
          <p>
            Mijn specialisaties binnen het Next.js-ecosysteem:
          </p>
          <ul>
            <li><strong>App Router & React Server Components</strong> — moderne architectuur, minder JavaScript naar de client.</li>
            <li><strong>Static Site Generation & ISR</strong> — pagina&apos;s die laden vanuit CDN edges.</li>
            <li><strong>Metadata API & Schema.org</strong> — perfecte SEO-fundamenten per pagina.</li>
            <li><strong>next/image, next/font, next/script</strong> — automatische asset-optimalisatie.</li>
            <li><strong>Server Actions & Route Handlers</strong> — formulieren, API&apos;s en business logic zonder aparte backend.</li>
            <li><strong>TypeScript / JavaScript</strong> — schone, onderhoudbare code.</li>
            <li><strong>Tailwind CSS</strong> — design systems die schaalbaar en consistent blijven.</li>
            <li><strong>Vercel deployment</strong> en alternatieven (Netlify, Cloudflare Pages, self-host).</li>
          </ul>

          <h2>Headless CMS mogelijkheden</h2>
          <p>
            Niet elke klant wil door code editen. Voor klanten die zelf content
            willen beheren koppel ik Next.js aan een headless CMS:
          </p>
          <ul>
            <li><strong>Sanity</strong> — krachtige editor, real-time previews, ideaal voor blogs en marketing-pagina&apos;s.</li>
            <li><strong>Contentful</strong> — robuuste enterprise-keuze met sterke API.</li>
            <li><strong>Strapi</strong> — open source, self-host mogelijk, ideaal voor data-privacy.</li>
            <li><strong>WordPress (headless)</strong> — voor klanten die de vertrouwde wp-admin willen behouden zonder de trage frontend.</li>
            <li><strong>MDX in git</strong> — voor wie graag schrijft in Markdown en versie-controle wil.</li>
          </ul>

          <h2>SEO voordelen</h2>
          <p>
            Next.js is uniek geschikt voor SEO omdat het de beste eigenschappen
            van statische sites en dynamische apps combineert. Pagina&apos;s worden
            volledig gerenderd voordat ze bij Google aankomen. Metadata, schema
            markup, sitemap en robots.txt zijn ingebouwd. Geen plugins, geen
            conflicten, geen verrassingen na een update.
          </p>
          <p>
            Lees meer over de aanpak op <a href="/seo-rotterdam">SEO Rotterdam</a>.
          </p>

          <h2>Performance voordelen</h2>
          <p>
            De performance-resultaten van Next.js liegen niet:
          </p>
          <ul>
            <li>LCP typisch onder 1.0 seconde.</li>
            <li>Pagina&apos;s geleverd vanuit CDN edge — fysiek dichtbij de bezoeker.</li>
            <li>Automatische code splitting en lazy loading.</li>
            <li>Image optimization out of the box.</li>
            <li>Edge runtime voor server logic — milliseconden response times.</li>
          </ul>

          <h2>Voor welke bedrijven?</h2>
          <p>
            Next.js is geschikt voor vrijwel elk type bedrijf, maar levert
            het meest op voor:
          </p>
          <ul>
            <li><strong>MKB-bedrijven</strong> die afhankelijk zijn van organische vindbaarheid.</li>
            <li><strong>ZZP&apos;ers</strong> die met een snelle, professionele site willen opvallen.</li>
            <li><strong>Lokale dienstverleners</strong> in Rotterdam en omgeving die strijden om &quot;[dienst] + stad&quot; zoekopdrachten.</li>
            <li><strong>Webshops</strong> waar elke 100ms laadtijd conversie kost.</li>
            <li><strong>Bedrijven met een verouderde WordPress site</strong> die toe zijn aan een modernisering.</li>
            <li><strong>Startups</strong> die schaalbaar willen beginnen.</li>
          </ul>
          <p>
            Twijfelt u of Next.js past bij uw situatie? Plan vrijblijvend een
            gesprek — geen verkooppraatje, wel een eerlijk advies.
          </p>
        </div>
      </article>

      <CTASection
        title="Bespreek uw project."
        subtitle="Vertel waar u staat en waar u heen wilt. Ik denk mee — vrijblijvend."
        button="Plan een gesprek"
      />
    </>
  );
}
