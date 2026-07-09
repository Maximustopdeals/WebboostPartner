import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import PricingSection from "@/components/PricingSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website laten maken Rotterdam | Professionele Next.js Websites",
  description:
    "Wilt u een professionele website laten maken in Rotterdam? WebBoost Partner bouwt Next.js websites die mooi, snel én vindbaar zijn. Maatwerk vanaf €1.495.",
  alternates: { canonical: "https://webboostpartner.nl/website-laten-maken-rotterdam" },
};

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Wat kost een Next.js website?",
    a: "Bij WebBoost Partner werk ik met drie heldere pakketten. Het Essential pakket voor ZZP'ers en starters is €2.495 (excl. btw) / €3.019 (incl. btw). Het Professional pakket voor ondernemers met ambitie is €4.495 (excl. btw) / €5.439 (incl. btw). Het Enterprise pakket voor groeiende bedrijven is vanaf €6.995 (excl. btw) / €8.464 (incl. btw) — maatwerk mogelijk. Alle pakketten zijn volledig transparant geprijsd, er zitten geen verborgen kosten in. Een persoonlijke offerte voor maatwerk is altijd mogelijk.",
  },
  {
    q: "Hoe lang duurt het traject?",
    a: "Een gemiddelde Next.js website is binnen 2 tot 4 weken live. De doorlooptijd hangt af van de hoeveelheid pagina's, of je content kant-en-klaar aanlevert, en hoe snel feedback rondkomt. Een one-pager kan binnen één week staan, een uitgebreide site met blog en lokale SEO duurt doorgaans 3 tot 4 weken. Bij webshops reken ik 4 tot 8 weken afhankelijk van het aantal producten en integraties.",
  },
  {
    q: "Kan mijn bestaande WordPress website worden overgezet naar Next.js?",
    a: "Ja, een bestaande WordPress-website kan worden overgezet naar Next.js — maar het is geen automatische migratie. Het is een herbouw waarbij content, structuur en functionaliteit opnieuw worden opgezet in een modern JavaScript-framework. De kern: WordPress is een CMS + thema, terwijl Next.js een framework is. Je vervangt het thema dus volledig, maar je kunt WordPress eventueel blijven gebruiken als headless CMS. SEO-rankings blijven behouden door zorgvuldige URL-mapping, 301-redirects en het behouden van metadata.",
  },
  {
    q: "Is SEO inbegrepen?",
    a: "Ja. Technische SEO is bij élke pagina inbegrepen: schema markup, semantische HTML, geoptimaliseerde meta tags, sitemap.xml, robots.txt, Open Graph en correcte heading-structuur. Lokale SEO voor Rotterdam (Google Business Profile koppeling, NAP-consistentie, lokale schema) zit standaard in het Professional pakket en hoger.",
  },
  {
    q: "Werk je alleen voor bedrijven in Rotterdam?",
    a: "Mijn focus ligt op Rotterdam en de directe omgeving — Capelle aan den IJssel, Krimpen aan den IJssel, Ridderkerk, Barendrecht en Schiedam — omdat ik geloof in persoonlijk contact en lokale expertise. Maar ik werk ook landelijk wanneer een project klikt. Een kennismakingsgesprek kan altijd op locatie of via een videocall.",
  },
  {
    q: "Wat als ik later iets wil aanpassen?",
    a: "Kleine aanpassingen (tekst, foto's) doe ik tegen een vast uurtarief óf je krijgt toegang tot een headless CMS waarin je zelf content beheert — zonder dat je code aanraakt. Bij het Enterprise pakket zit 6 maanden support inbegrepen voor doorontwikkeling.",
  },
];

export default function WebsiteRotterdamPage() {
  return (
    <>
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">
            // Website laten maken Rotterdam
          </p>
          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            Website laten<br/>maken in <span className="text-[#FF4500]">Rotterdam</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Wilt u een <strong>professionele website laten maken in Rotterdam</strong> die
            niet alleen mooi oogt, maar ook klanten oplevert? WebBoost Partner ontwikkelt
            moderne Next.js websites die zijn gebouwd voor snelheid, SEO en conversie.
            Geen sjabloon-werk. Geen WordPress-trage plugins. Wel meetbare resultaten.
          </p>
        </div>
      </section>

      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">
          <h2>Waarom een professionele website belangrijk is</h2>
          <p>
            Voor de meeste ondernemers in Rotterdam is de website het <strong>eerste contactmoment</strong> met
            potentiële klanten. Voordat iemand belt, een offerte aanvraagt of langs komt, heeft hij of zij
            al rondgesnuffeld op uw site. Wat ze daar tegenkomen bepaalt — vaak in de eerste vijf seconden —
            of u serieus wordt genomen of dat de tab gesloten wordt.
          </p>
          <p>
            Een professionele website doet vier dingen tegelijk:
          </p>
          <ul>
            <li><strong>Vertrouwen opbouwen</strong> door een verzorgde uitstraling en duidelijke informatie.</li>
            <li><strong>Aanvragen genereren</strong> via heldere call-to-actions en strategisch geplaatste formulieren.</li>
            <li><strong>Uw merk versterken</strong> met consistente visuele identiteit en tone of voice.</li>
            <li><strong>Online zichtbaarheid verbeteren</strong> doordat zoekmachines de site begrijpen en goed ranken.</li>
          </ul>
          <p>
            Veel websites in Rotterdam falen op minstens twee van deze punten. Vaak ligt de oorzaak in
            verouderde technologie (lees: WordPress met te veel plugins) of in een ontwerp dat is gekozen
            op basis van "wat mooi staat" in plaats van "wat werkt voor de bezoeker".
          </p>

          <h2>Wat krijgt u bij een website van WebBoost Partner</h2>
          <p>
            Een website bouwen is meer dan code schrijven. Het is een traject waarin we samen bepalen wat
            uw bezoekers nodig hebben, hoe Google uw bedrijf moet begrijpen, en hoe we dat vertalen naar
            een snelle, mooie en vindbare site. Concreet krijgt u:
          </p>
          <ul>
            <li><strong>Maatwerk design</strong> — geen sjablonen, wel een look die past bij uw bedrijf en doelgroep.</li>
            <li><strong>Responsive ontwerp</strong> dat scherp werkt op telefoon, tablet en desktop.</li>
            <li><strong>Technische SEO</strong> als fundament: semantische HTML, schema markup, sitemap, robots.txt, Open Graph.</li>
            <li><strong>Supersnelle laadtijden</strong> — Core Web Vitals onder de groene grens (LCP &lt; 1.0s waar mogelijk).</li>
            <li><strong>Conversiegerichte structuur</strong> met CTA&apos;s, vertrouwenssignalen en heldere navigatie.</li>
            <li><strong>Google Analytics 4</strong> en Search Console correct ingericht.</li>
            <li><strong>Contactformulieren</strong> die werken en notificeren — gekoppeld aan e-mail of CRM.</li>
          </ul>

          <h2>Website laten maken voor ZZP en MKB</h2>
          <p>
            De meeste van mijn opdrachtgevers zijn <strong>ZZP'ers en MKB-bedrijven</strong> in Rotterdam en
            omgeving. Aannemers in Capelle, coaches in Hillegersberg, fysiotherapeuten in Kralingen,
            consultants in het centrum — allemaal mensen die hun vak verstaan, maar niet de tijd hebben
            om uit te zoeken waarom hun WordPress site zo traag is.
          </p>
          <p>
            Ik help die ondernemers met websites die <strong>meegroeien met hun bedrijf</strong>. Dat
            betekent: een site die vandaag op orde is, maar morgen ook nog uitbreidbaar. Een blog kunnen
            toevoegen, een nieuwe dienst lanceren, een tweede vestiging documenteren — zonder dat je
            elke keer terug moet naar nul.
          </p>

          <h2>Waarom bouwen met Next.js</h2>
          <p>
            <strong>Next.js</strong> is een modern JavaScript-framework dat door bedrijven als Nike,
            Netflix, TikTok en het Witte Huis wordt gebruikt. Dat is geen toeval. Het framework is
            ontworpen voor websites die zowel razendsnel moeten zijn als perfect vindbaar.
          </p>
          <ul>
            <li><strong>Snellere prestaties</strong> — pagina&apos;s worden statisch gegenereerd of server-side gerenderd, waardoor laadtijden onder een seconde realistisch zijn.</li>
            <li><strong>Betere SEO</strong> — Google indexeert Next.js-pagina&apos;s net zo eenvoudig als een statische site, met volledige metadata en schema.</li>
            <li><strong>Meer veiligheid</strong> — er is geen database aan de voorkant, dus geen kwetsbare plugins die gehackt kunnen worden.</li>
            <li><strong>Toekomstbestendig</strong> — de stack groeit mee met de webstandaarden, niet erachteraan.</li>
          </ul>
          <p>
            Voor de meeste lokale ondernemers in Rotterdam betekent dit één ding: <strong>uw site
            verslaat de concurrentie op snelheid en vindbaarheid</strong>, vrijwel zonder onderhoud.
          </p>

          <h2>Het traject in vier stappen</h2>
          <h3>1. Kennismaking & strategie</h3>
          <p>
            We beginnen met een vrijblijvend gesprek — bij u op locatie, bij mij in Rotterdam, of via
            videocall. Daarin bespreken we uw bedrijf, uw doelgroep, en wat de website voor u moet doen.
            Hieruit volgt een concreet voorstel met scope, doorlooptijd en investering.
          </p>
          <h3>2. Design & content</h3>
          <p>
            Op basis van uw merk en doelgroep ontwerp ik een look die werkt. Geen sjablonen, geen
            "templates met logo erin", maar een ontwerp dat is gebouwd rond uw doelen. Tegelijk denken
            we mee over content en SEO-structuur.
          </p>
          <h3>3. Development</h3>
          <p>
            Ik bouw uw site in Next.js, met technische SEO ingebakken en aandacht voor elke pixel.
            Tussentijds krijgt u een preview-link waarop u live mee kunt kijken.
          </p>
          <h3>4. Lancering & nazorg</h3>
          <p>
            We zetten de site live, koppelen Google Analytics en Search Console, en voeren een finale
            check op Core Web Vitals. Daarna ben ik beschikbaar voor doorontwikkeling.
          </p>

          <h2>Werkgebied</h2>
          <p>
            Hoewel ik landelijk werk, zit het zwaartepunt van mijn klanten in Rotterdam en de directe omgeving:
            Capelle aan den IJssel, Krimpen aan den IJssel, Ridderkerk, Barendrecht en Schiedam. Lokaal
            werken heeft één groot voordeel: ik begrijp uw markt, uw doelgroep en uw concurrentie.
          </p>

          <h2>Veelgestelde vragen</h2>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-8 mt-6">
          <FAQ items={faqs} schemaId="website-rotterdam" />
        </div>
      </article>

      <PricingSection compact />
      <CTASection
        title="Vraag een vrijblijvende offerte aan."
        subtitle="Vertel kort over uw bedrijf en wensen. U krijgt binnen 24 uur een reactie."
        button="Offerte aanvragen"
      />
    </>
  );
}
