import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Rotterdam | Lokale SEO, Technische SEO & Core Web Vitals",
  description:
    "SEO Rotterdam: meer klanten via Google met technische SEO, lokale vindbaarheid en Core Web Vitals. WebBoost Partner optimaliseert uw Next.js website voor topposities.",
  alternates: { canonical: "https://webboostpartner.nl/seo-rotterdam" },
};

interface MetricItem {
  k: string;
  v: string;
  num: string;
}

export default function SEORotterdamPage() {
  return (
    <>
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">
            // SEO Rotterdam
          </p>
          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            SEO <span className="text-[#FF4500]">Rotterdam</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Meer klanten via Google? Als <strong>SEO specialist in Rotterdam</strong> help ik
            ondernemers om hun online zichtbaarheid te vergroten. Met technische SEO, lokale
            SEO-optimalisatie en een focus op Core Web Vitals til ik uw website naar een
            hoger niveau.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-white py-16 sm:py-24 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-3 gap-5">
          {[
            { k: "Technische SEO", v: "Schema, sitemap, semantische HTML", num: "100%" },
            { k: "Lokale SEO", v: "Rotterdam + regio focus", num: "Top 3" },
            { k: "Core Web Vitals", v: "LCP, INP, CLS optimalisatie", num: "95+" },
          ].map((m: MetricItem, index: number) => (
            <div key={index} className="border-2 border-black bg-[#FAFAFA] p-8 hover:bg-black hover:text-white transition-colors group">
              <p className="font-mono uppercase text-xs tracking-widest text-[#FF4500] mb-2">{m.k}</p>
              <p className="font-heading font-extrabold text-5xl mb-2 text-[#FF4500] group-hover:text-white">{m.num}</p>
              <p className="text-sm">{m.v}</p>
            </div>
          ))}
        </div>
      </section>

      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">
          <h2>Meer klanten via Google</h2>
          <p>
            SEO is geen tovertruc. Het is een combinatie van technische excellentie,
            relevante content en autoriteit. Als uw website in Rotterdam beter moet
            scoren in Google, begin ik altijd met de technische basis. Want zonder een
            solide fundament bouwt u op zand.
          </p>
          <p>
            Mijn SEO-aanpak voor Rotterdamse ondernemers richt zich op drie pijlers:
            <strong> technische SEO</strong> (hoe begrijpt Google uw site?),{' '}
            <strong>lokale SEO</strong> (hoe vindbaar bent u in uw regio?), en{' '}
            <strong>contentstructuur</strong> (wat vertelt u aan uw bezoekers en zoekmachines?).
          </p>

          <h2>Technische SEO</h2>
          <p>
            Technische SEO is het fundament. Het zorgt ervoor dat zoekmachines uw website
            correct kunnen crawlen, indexeren en begrijpen. Dit is wat ik standaard
            implementeer:
          </p>
          <ul>
            <li><strong>Schema.org markup</strong> — gestructureerde data die Google helpt om uw content te begrijpen en rich snippets te tonen.</li>
            <li><strong>Semantische HTML</strong> — correcte heading-hiërarchie (H1→H6), alt-teksten voor afbeeldingen, en toegankelijke markup.</li>
            <li><strong>Sitemap.xml</strong> — een volledige kaart van uw site die ik direct indien bij Google Search Console.</li>
            <li><strong>Robots.txt</strong> — instructies voor zoekmachines over welke pagina&apos;s wel en niet geïndexeerd moeten worden.</li>
            <li><strong>Open Graph tags</strong> — zodat uw pagina&apos;s er professioneel uitzien wanneer ze gedeeld worden op social media.</li>
            <li><strong>Canonical URLs</strong> — voorkomen van duplicate content problemen.</li>
            <li><strong>SSL/HTTPS</strong> — beveiligde verbinding als rankingfactor.</li>
          </ul>

          <h2>Lokale SEO Rotterdam</h2>
          <p>
            Voor lokale bedrijven in Rotterdam is lokale SEO cruciaal. Wanneer iemand zoekt
            op "[dienst] Rotterdam" of "[beroep] in mijn buurt", wilt u bovenaan staan.
            Dit is hoe ik dat bereik:
          </p>
          <ul>
            <li><strong>Google Business Profile</strong> optimalisatie — volledig ingevuld profiel met correcte NAP-gegevens (Naam, Adres, Telefoon).</li>
            <li><strong>Lokale schema markup</strong> — LocalBusiness gestructureerde data die uw vestigingsplaats verduidelijkt.</li>
            <li><strong>NAP-consistentie</strong> — uw bedrijfsgegevens zijn identiek op elke platform waar u vermeld staat.</li>
            <li><strong>Rotterdam-specifieke content</strong> — pagina&apos;s en secties die uw verbinding met de stad en regio benadrukken.</li>
            <li><strong>Lokale linkbuilding</strong> — vermeldingen op regionale directories en samenwerkingspartners.</li>
          </ul>
          <p>
            Ik werk voor klanten in heel Rotterdam en omgeving: van Centrum tot Kralingen,
            van Hillegersberg tot Feijenoord. Elke wijk heeft zijn eigen zoekpatronen en
            concurrentie — ik houd daar rekening mee.
          </p>

          <h2>Core Web Vitals optimalisatie</h2>
          <p>
            Sinds 2021 zijn Core Web Vitals een officiële Google rankingfactor. Deze drie
            metrics meten de daadwerkelijke gebruikerservaring op uw website:
          </p>
          <ul>
            <li><strong>LCP (Largest Contentful Paint)</strong> — hoe snel laadt het grootste element? Doel: onder 2.5s, idealiter onder 1.0s.</li>
            <li><strong>INP (Interaction to Next Paint)</strong> — hoe snel reageert de site op interacties? Doel: onder 200ms.</li>
            <li><strong>CLS (Cumulative Layout Shift)</strong> — hoeveel verschuift de layout tijdens laden? Doel: onder 0.1.</li>
          </ul>
          <p>
            Door te bouwen in <strong>Next.js</strong> behaal ik standaard scores van 95-100
            op PageSpeed Insights. Dat is geen toeval — het framework is ontworpen voor
            performance. Static Site Generation, automatische code splitting, geoptimaliseerde
            afbeeldingen en edge delivery zorgen ervoor dat uw site sneller is dan 95%
            van de concurrentie.
          </p>

          <h2>SEO voor Next.js websites</h2>
          <p>
            Next.js biedt unieke SEO-voordelen die andere frameworks niet hebben:
          </p>
          <ul>
            <li><strong>Server-Side Rendering (SSR)</strong> — Google ziet de volledige pagina direct, zonder JavaScript rendering.</li>
            <li><strong>Static Site Generation (SSG)</strong> — pagina&apos;s worden vooraf gerenderd en vanuit een CDN geserveerd.</li>
            <li><strong>Metadata API</strong> — per pagina specifieke titles, descriptions en OG-tags via code.</li>
            <li><strong>next/image</strong> — automatische afbeeldingoptimalisatie in moderne formaten (WebP, AVIF).</li>
            <li><strong>next/font</strong> — lokale font hosting zonder externe requests die laadtijd vertragen.</li>
          </ul>
          <p>
            Dit betekent dat uw website niet alleen snel is, maar ook perfect geïndexeerd
            wordt door Google. De combinatie van technische SEO en Next.js performance is
            wat mijn klanten naar de top van de zoekresultaten brengt.
          </p>

          <h2>SEO traject en werkwijze</h2>
          <p>
            Elk SEO-traject begint met een <strong>gratis analyse</strong>. Ik bekijk uw
            huidige website, analyseer de concurrentie in Rotterdam, en identificeer
            quick wins en lange-termijn kansen. Daarna stel ik een concrete strategie op:
          </p>
          <ul>
            <li><strong>Maand 1</strong> — Technische audit, keyword research, concurrentieanalyse.</li>
            <li><strong>Maand 2</strong> — Technische optimalisaties, contentstructuur, lokale SEO setup.</li>
            <li><strong>Maand 3</strong> — Content creatie, linkbuilding, monitoring.</li>
            <li><strong>Doorlopend</strong> — Rapportage, bijsturing, uitbreiding.</li>
          </ul>
          <p>
            Transparantie staat voorop. U krijgt maandelijks een helder rapport met
            posities, verkeer en conversies — geen vage metrics, wel concrete resultaten.
          </p>
        </div>
      </article>

      <CTASection
        title="Gratis SEO analyse aanvragen"
        subtitle="Stuur uw website URL en ik geef binnen 48 uur een vrijblijvend advies met concrete actiepunten."
        button="Analyse aanvragen"
      />
    </>
  );
}
