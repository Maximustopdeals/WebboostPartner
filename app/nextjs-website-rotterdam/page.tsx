import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import PricingSection from "@/components/PricingSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Website Laten Maken Rotterdam | Snel & SEO-geoptimaliseerd",
  description:
    "Next.js website laten maken in Rotterdam? WebBoost Partner bouwt razendsnelle websites die scoren in Google. Beter dan WordPress. Vrijblijvende offerte binnen 24 uur.",
  alternates: { canonical: "https://webboostpartner.nl/nextjs-website-rotterdam" },
};

const faqs = [
  {
    q: "Wat kost een Next.js website laten maken in Rotterdam?",
    a: "De kosten hangen af van het aantal pagina's en functionaliteiten. Een professionele Next.js website start bij €2.495 voor een Essential pakket (5 pagina's). Het Professional pakket (onbeperkt pagina's + lokale SEO) is €4.495. Voor maatwerk met webshop of headless CMS begint het Enterprise pakket bij €6.995. Alle prijzen zijn excl. btw en inclusief technische SEO.",
  },
  {
    q: "Hoe lang duurt het om een Next.js website te laten maken?",
    a: "Een gemiddelde Next.js website is binnen 2 tot 4 weken live. Een simpele one-pager kan binnen een week, een uitgebreide site met blog en lokale SEO duurt 3 tot 4 weken. De doorlooptijd hangt af van hoe snel u content en feedback levert.",
  },
  {
    q: "Waarom Next.js in plaats van WordPress?",
    a: "Next.js is sneller, veiliger en beter voor SEO dan WordPress. Geen trage plugins, geen wekelijkse updates die uw site breken, geen database die gehackt kan worden. Pagina's laden in minder dan een seconde en scoren 95-100 op PageSpeed Insights. Voor bedrijven in Rotterdam die gevonden willen worden in Google is Next.js de slimme keuze.",
  },
  {
    q: "Kan ik mijn bestaande WordPress site vervangen door Next.js?",
    a: "Ja, dat is een van mijn specialiteiten. Ik bouw uw nieuwe Next.js website en zorg dat alle content overkomt. Door 301-redirects behoudt u uw SEO-rankings. De oude WordPress site kan blijven draaien als headless CMS als u zelf content wilt blijven beheren.",
  },
  {
    q: "Is een Next.js website geschikt voor lokale bedrijven in Rotterdam?",
    a: "Absoluut. Lokale bedrijven profiteren juist enorm van Next.js omdat snelheid en SEO direct bijdragen aan vindbaarheid in Google Maps en lokale zoekresultaten. Ik optimaliseer elke site voor Rotterdam en omgeving: lokale schema markup, Google Business Profile integratie, en content gericht op uw regio.",
  },
];

export default function NextjsWebsiteRotterdamPage() {
  return (
    <>
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">
            // Next.js Websites
          </p>
          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            Next.js Website<br />
            Laten Maken in<br />
            <span className="text-[#FF4500]">Rotterdam</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Laat een <strong>Next.js website bouwen in Rotterdam</strong> die sneller laadt, 
            beter scoort in Google en minder onderhoud nodig heeft dan WordPress. 
            Maatwerk voor ZZP, MKB en groeiende bedrijven.
          </p>
        </div>
      </section>

      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">
          <h2>Waarom een Next.js website laten maken?</h2>
          <p>
            De meeste websites in Rotterdam draaien op WordPress. Dat werkt, tot uw 
            concurrent met een <strong>Next.js site</strong> u inhaalt op snelheid en 
            vindbaarheid. Google beloont snelle websites met hogere rankings. Bezoekers 
            verlaten trage sites binnen 3 seconden. Een Next.js website is geen luxe — 
            het is een concurrentievoordeel.
          </p>
          <p>
            Bedrijven als Nike, Netflix en OpenAI kozen voor Next.js omdat het het beste 
            van twee werelden combineert: de snelheid van een statische site met de 
            dynamiek van een moderne webapplicatie. Voor uw bedrijf in Rotterdam 
            betekent dat: een site die laadt voordat de bezoeker zijn scrollwiel 
            aanraakt.
          </p>

          <h2>De voordelen op een rij</h2>
          <h3>Bliksemsnelle laadtijden</h3>
          <p>
            Next.js genereert pagina's vooraf — niet pas wanneer iemand ze bezoekt. 
            Het resultaat: een <strong>LCP (Largest Contentful Paint) onder 1 seconde</strong>. 
            Dat is 3 tot 6 keer sneller dan een gemiddelde WordPress site. Google meet 
            deze snelheid en gebruikt hem als ranking factor.
          </p>
          <h3>SEO als fundament</h3>
          <p>
            Waar WordPress 12+ plugins nodig heeft voor basis SEO, zit dat bij Next.js 
            ingebouwd. Semantische HTML, schema markup, sitemap.xml, robots.txt, 
            Open Graph — het is allemaal standaard. Geen conflicterende plugins, 
            geen gebroken updates.
          </p>
          <h3>Veiligheid zonder zorgen</h3>
          <p>
            Next.js produceert statische HTML. Er is geen database aan de voorkant, 
            geen PHP, geen kwetsbare plugins. Dat maakt brute-force aanvallen en 
            SQL-injecties onmogelijk. Uw site is veilig zonder dat u er naar om hoeft 
            te kijken.
          </p>
          <h3>Minimaal onderhoud</h3>
          <p>
            Geen wekelijkse plugin-updates die uw site breken. Geen noodzaak voor een 
            €80-€150 per maand onderhoudscontract. Een Next.js site draait jarenlang 
            zonder tussenkomst. Wanneer u wel iets wilt wijzigen, kan dat via een 
            headless CMS of direct in de code.
          </p>

          <h2>Next.js vs WordPress — objectieve vergelijking</h2>
          <table className="w-full border-2 border-black text-sm">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-3 text-left">Kenmerk</th>
                <th className="p-3 text-left">WordPress</th>
                <th className="p-3 text-left">Next.js</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black/10">
                <td className="p-3 font-semibold">Laadtijd (LCP)</td>
                <td className="p-3">2.8s — 6s+</td>
                <td className="p-3 text-[#FF4500] font-bold">&lt; 0.8s</td>
              </tr>
              <tr className="border-b border-black/10">
                <td className="p-3 font-semibold">Plugins nodig</td>
                <td className="p-3">12+ (SEO, speed, security)</td>
                <td className="p-3 text-[#FF4500] font-bold">0</td>
              </tr>
              <tr className="border-b border-black/10">
                <td className="p-3 font-semibold">PageSpeed score</td>
                <td className="p-3">40-70/100</td>
                <td className="p-3 text-[#FF4500] font-bold">95-100/100</td>
              </tr>
              <tr className="border-b border-black/10">
                <td className="p-3 font-semibold">Onderhoud per maand</td>
                <td className="p-3">€80 — €150</td>
                <td className="p-3 text-[#FF4500] font-bold">€0 — €50</td>
              </tr>
              <tr className="border-b border-black/10">
                <td className="p-3 font-semibold">Beveiligingsrisico</td>
                <td className="p-3">Hoog (plugins, database)</td>
                <td className="p-3 text-[#FF4500] font-bold">Minimaal</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">SEO-fundament</td>
                <td className="p-3">Via plugins (Yoast, RankMath)</td>
                <td className="p-3 text-[#FF4500] font-bold">Ingebouwd</td>
              </tr>
            </tbody>
          </table>

          <h2>Wie ik help</h2>
          <p>
            De meeste van mijn opdrachtgevers zijn <strong>ZZP'ers en MKB-bedrijven</strong> 
            in Rotterdam en omgeving. Ondernemers die snappen dat hun website een 
            investering is, geen kostenpost. Die willen dat hun site werkt — niet 
            volgende week, maar nu.
          </p>
          <ul>
            <li>Lokale dienstverleners (aannemers, coaches, zorgverleners)</li>
            <li>B2B-bedrijven die afhankelijk zijn van organische leads</li>
            <li>Webshops die conversie verliezen aan trage laadtijden</li>
            <li>Bedrijven met een verouderde WordPress site die willen moderniseren</li>
          </ul>

          <h2>Het traject in vier stappen</h2>
          <h3>1. Strategie & scope</h3>
          <p>
            We bepalen samen wat de website moet doen: leads genereren, vertrouwen 
            opbouwen, producten verkopen? Op basis daarvan stel ik een concreet 
            voorstel op met scope, timeline en investering.
          </p>
          <h3>2. Design op maat</h3>
          <p>
            Geen sjablonen. Een design dat werkt voor uw doelgroep, met aandacht 
            voor conversiepaden, call-to-actions en mobiele gebruikerservaring.
          </p>
          <h3>3. Development</h3>
          <p>
            Ik bouw uw site in Next.js met technische SEO ingebakken. Tussentijds 
            krijgt u een preview-link om live mee te kijken en feedback te geven.
          </p>
          <h3>4. Livegang & optimalisatie</h3>
          <p>
            Na lancering monitor ik de Core Web Vitals en Search Console prestaties. 
            Zo weet u zeker dat uw site niet alleen snel is, maar ook blijft scoren.
          </p>

          <h2>Rotterdam en omgeving</h2>
          <p>
            Hoewel ik landelijk werk, ligt mijn focus op <strong>Rotterdam en de 
            omliggende gemeenten</strong>: Capelle aan den IJssel, Krimpen aan den 
            IJssel, Ridderkerk, Barendrecht en Schiedam. Lokaal werken betekent 
            persoonlijk contact, korte lijnen en het begrijpen van uw markt.
          </p>

          <h2>Veelgestelde vragen</h2>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-8 mt-6">
          <FAQ items={faqs} schemaId="nextjs-website-rotterdam" />
        </div>
      </article>

      <PricingSection compact />

      <CTASection
        title="Start uw Next.js project."
        subtitle="Vraag een vrijblijvende offerte aan. Reactie binnen 24 uur."
        button="Offerte aanvragen"
      />
    </>
  );
}
