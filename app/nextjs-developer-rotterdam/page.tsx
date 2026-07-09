import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Developer Rotterdam | Freelance Specialist | WebBoost Partner",
  description:
    "Op zoek naar een Next.js developer in Rotterdam? WebBoost Partner is freelance Next.js specialist voor snelle, SEO-geoptimaliseerde websites. Beschikbaar voor projecten in Rotterdam en omgeving.",
  alternates: { canonical: "https://webboostpartner.nl/nextjs-developer-rotterdam" },
};

const faqs = [
  {
    q: "Wat is het verschil tussen een Next.js developer en een WordPress developer?",
    a: "Een WordPress developer werkt met een CMS dat draait op PHP en een database. Een Next.js developer bouwt met moderne JavaScript — React — en produceert statische of server-side gerenderde pagina's. Het resultaat: 3-10x snellere laadtijden, betere SEO-scores en vrijwel geen onderhoud. Voor bedrijven in Rotterdam die afhankelijk zijn van organische vindbaarheid is Next.js de logische keuze.",
  },
  {
    q: "Werkt u als freelance Next.js developer of via een agency?",
    a: "Ik werk als freelance Next.js developer met een eigen eenmanszaak. Dat betekent: direct contact, geen accountmanagers, en de persoon die u spreekt is dezelfde die uw code schrijft. Voor grotere projecten werk ik samen met een netwerk van gespecialiseerde designers en copywriters uit Rotterdam.",
  },
  {
    q: "Wat kost een Next.js developer in Rotterdam?",
    a: "Mijn tarief is €95 per uur (excl. btw). Een gemiddelde website kost tussen €2.495 en €4.495 afhankelijk van het aantal pagina's en functionaliteiten. Ik werk ook met vaste prijzen zodat u nooit voor verrassingen komt te staan. Een vrijblijvende offerte is binnen 24 uur beschikbaar.",
  },
  {
    q: "Kunt u ook bestaande Next.js projecten overnemen?",
    a: "Ja, ik neem bestaande Next.js projecten over voor doorontwikkeling, refactoring of bugfixing. Veel bedrijven in Rotterdam starten met een interne developer of een goedkope freelancer en lopen dan vast. Ik doe eerst een technische audit en geef een eerlijk advies over de staat van het project.",
  },
  {
    q: "Bent u beschikbaar voor langdurige samenwerking?",
    a: "Absoluut. Naast projectmatig werk bied ik maandelijkse support-pakketten aan voor doorlopende ontwikkeling, onderhoud en optimalisatie. Dit is ideaal voor bedrijven die regelmatig nieuwe features willen toevoegen of hun Core Web Vitals willen monitoren.",
  },
];

export default function NextjsDeveloperPage() {
  return (
    <>
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">
            // Freelance Developer
          </p>
          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            Next.js Developer<br />
            in <span className="text-[#FF4500]">Rotterdam</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Op zoek naar een <strong>Next.js developer in Rotterdam</strong>? 
            Ik ben freelance specialist voor razendsnelle, SEO-geoptimaliseerde websites. 
            Beschikbaar voor nieuwe projecten, migraties en doorontwikkeling.
          </p>
        </div>
      </section>

      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">
          <h2>Waarom een Next.js developer inhuren?</h2>
          <p>
            Next.js is het framework waarmee de grootste techbedrijven ter wereld hun 
            websites bouwen — Nike, Netflix, TikTok, OpenAI. V Rotterdamse ondernemers 
            biedt het dezelfde voordelen: <strong>bliksemsnelle laadtijden</strong>, 
            perfecte SEO-scores en een technische stack die jaren meegaat zonder 
            onderhoudskosten.
          </p>
          <p>
            Als freelance Next.js developer in Rotterdam help ik bedrijven die:
          </p>
          <ul>
            <li>Een <strong>nieuwe website</strong> willen laten bouwen met moderne technologie.</li>
            <li>Van <strong>WordPress willen migreren</strong> naar een snellere, veiligere oplossing.</li>
            <li>Al een Next.js project hebben dat <strong>doorontwikkeling</strong> nodig heeft.</li>
            <li>Behoefte hebben aan <strong>technisch advies</strong> over hun huidige stack.</li>
          </ul>

          <h2>Technische stack</h2>
          <p>
            Ik werk uitsluitend met de nieuwste versies van het Next.js-ecosysteem:
          </p>
          <ul>
            <li><strong>Next.js 14/15</strong> met App Router en React Server Components.</li>
            <li><strong>TypeScript</strong> voor type-veilige, onderhoudbare code.</li>
            <li><strong>Tailwind CSS</strong> voor snel, consistent design.</li>
            <li><strong>next/image</strong> voor automatische image-optimalisatie.</li>
            <li><strong>next/font</strong> voor zero-layout-shift fonts.</li>
            <li><strong>Vercel</strong> voor edge-deployment en serverless functions.</li>
          </ul>

          <h2>SEO als standaard</h2>
          <p>
            Elke website die ik bouw wordt geleverd met technische SEO die de meeste 
            agencies als upsell verkopen. Dat betekent: semantische HTML, schema markup, 
            geoptimaliseerde meta tags, sitemap.xml, robots.txt, en Core Web Vitals die 
            <strong> consistent boven de 90 scoren</strong>.
          </p>
          <p>
            Voor lokale bedrijven in Rotterdam voeg ik daarnaast lokale SEO toe: 
            Google Business Profile koppeling, NAP-consistentie, LocalBusiness schema, 
            en content geoptimaliseerd voor "[dienst] Rotterdam" zoektermen.
          </p>

          <h2>Werkwijze</h2>
          <h3>1. Kennismaking (gratis)</h3>
          <p>
            We bespreken uw project, doelen en technische vereisten. Ik geef een eerlijk 
            advies over of Next.js past bij uw situatie. Geen verplichtingen.
          </p>
          <h3>2. Offerte op maat</h3>
          <p>
            Binnen 24 uur ontvangt u een gedetailleerde offerte met scope, timeline 
            en investering. Vaste prijs of uurtarief — wat u prefereert.
          </p>
          <h3>3. Development met preview</h3>
          <p>
            Tijdens de bouw krijgt u toegang tot een live preview-omgeving. Zo kunt 
            u meekijken en feedback geven terwijl de site ontstaat.
          </p>
          <h3>4. Lancering & nazorg</h3>
          <p>
            Na goedkeuring zetten we de site live op uw domein. Ik regel de DNS, 
            koppel Google Analytics en Search Console, en zorg dat alles technisch 
            honderd procent in orde is.
          </p>

          <h2>Projecten in Rotterdam en omgeving</h2>
          <p>
            Hoewel ik landelijk werk, is mijn focus op <strong>Rotterdam en de directe 
            omgeving</strong>: Capelle aan den IJssel, Krimpen aan den IJssel, Ridderkerk, 
            Barendrecht en Schiedam. Lokaal werken maakt persoonlijke kennismaking 
            mogelijk — bij u op kantoor of bij mij aan tafel.
          </p>

          <h2>Veelgestelde vragen</h2>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-8 mt-6">
          <FAQ items={faqs} schemaId="nextjs-developer" />
        </div>
      </article>

      <CTASection
        title="Bespreek uw Next.js project."
        subtitle="Vrijblijvend kennismaken? Ik denk mee over de beste aanpak voor uw situatie."
        button="Plan een gesprek"
      />
    </>
  );
}
