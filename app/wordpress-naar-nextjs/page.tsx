import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress naar Next.js migratie | SEO behouden, snelheid verbeteren",
  description:
    "WordPress migreren naar Next.js: waarom, hoe en wat het oplevert. SEO-rankings behouden, snelheid verdrievoudigen, onderhoud minimaliseren.",
  alternates: { canonical: "https://webboostpartner.nl/wordpress-naar-nextjs" },
};

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Verlies ik mijn Google rankings tijdens een migratie?",
    a: "Niet als de migratie zorgvuldig wordt uitgevoerd. Cruciaal zijn: identieke URL-structuur (of complete 301-redirect mapping), behoud van titles en meta descriptions, en het direct indienen van de nieuwe sitemap bij Search Console. In de praktijk zien sites na een correcte migratie binnen 2-4 weken een stijging in rankings door betere Core Web Vitals.",
  },
  {
    q: "Wat gebeurt er met mijn content?",
    a: "Alle content (teksten, afbeeldingen, blogartikelen, formulieren) wordt overgezet. Optioneel kunnen we WordPress behouden als headless CMS, zodat u in dezelfde vertrouwde backend blijft schrijven terwijl Next.js de razendsnelle frontend levert.",
  },
  {
    q: "Hoe lang duurt een migratie?",
    a: "Voor een gemiddelde MKB-site (10-30 pagina's) reken ik 2 tot 4 weken. Webshops en grote content-sites duren langer, afhankelijk van complexiteit en aantal producten.",
  },
  {
    q: "Wat kost een migratie?",
    a: "Een migratie wordt geprijsd op basis van scope. Een eenvoudige bedrijfssite migreren start vanaf €1.495 (Starter pakket). Een uitgebreide site met blog, lokale SEO en custom functionaliteit valt vaak binnen het Premium (€2.495) of Pro (€3.495) pakket. Vraag een vrijblijvende analyse aan voor een exacte offerte.",
  },
  {
    q: "Behoud ik mijn admin-omgeving?",
    a: "Dat kan op twee manieren. Optie 1: WordPress blijft draaien als headless CMS — u schrijft in WordPress, Next.js publiceert. Optie 2: u stapt over naar een modern headless CMS (Sanity, Contentful, Strapi) met een betere editor-ervaring. We bespreken samen wat past.",
  },
];

export default function WordPressNaarNextjsPage() {
  return (
    <>
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Migratie</p>
          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            WordPress naar <span className="text-[#FF4500]">Next.js</span> migratie
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed">
            De website werkt nog, maar is traag, kwetsbaar of duur in onderhoud?
            Een doordachte overstap naar Next.js geeft uw site een nieuw leven —
            <strong> sneller, veiliger en beter vindbaar</strong>, zonder dat u
            rankings verliest.
          </p>
        </div>
      </section>

      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">
          <h2>Waarom overstappen?</h2>
          <p>
            Veel ondernemers in Rotterdam hebben jaren geleden een WordPress site
            laten maken. Toen werkte het. Een mooi Divi-thema, een paar plugins
            voor SEO en formulieren, en de site stond live. Maar nu, drie tot
            zeven jaar later, lopen ze tegen dezelfde problemen aan:
          </p>
          <ul>
            <li>De site is <strong>traag geworden</strong> — wat begon als snel is overgroeid met plugins.</li>
            <li><strong>Updates breken</strong> regelmatig functionaliteit, en oplossen kost tijd én geld.</li>
            <li><strong>Onderhoudskosten lopen op</strong> — €100 per maand is niet ongewoon.</li>
            <li><strong>Google rankings dalen</strong> doordat Core Web Vitals niet meer voldoen.</li>
            <li><strong>De look voelt gedateerd</strong>, maar een redesign in WordPress voelt als geld in een lekkende emmer gooien.</li>
          </ul>
          <p>
            Op dat punt is een <strong>migratie naar Next.js</strong> vaak goedkoper
            én slimmer dan opnieuw bouwen op WordPress. U investeert eenmalig,
            en bespaart jaren onderhoudskosten en frustratie.
          </p>

          <h2>Veelvoorkomende WordPress problemen</h2>
          <h3>Plugin-conflicten</h3>
          <p>
            Hoe meer plugins, hoe groter de kans dat één plugin breekt na een
            update — en de hele site meeneemt. Plugins voor SEO, security, cache,
            backups, formulieren en page builders vechten allemaal om dezelfde
            resources.
          </p>
          <h3>Trage Time To First Byte</h3>
          <p>
            Elke pagina-aanvraag start een PHP-proces, doet meerdere database
            queries, en bouwt de HTML on-the-fly. Op shared hosting met veel
            plugins zien we TTFB's van 1-3 seconden — nog voor de eerste pixel
            verschijnt.
          </p>
          <h3>Beveiligingsincidenten</h3>
          <p>
            WordPress is verantwoordelijk voor ongeveer 90% van alle gehackte CMS-sites
            (volgens Sucuri). Dat komt niet door WordPress zelf, maar door verouderde
            plugins en zwakke wachtwoorden — beide nauwelijks te elimineren in
            een typische WordPress installatie.
          </p>
          <h3>Onderhoudslast</h3>
          <p>
            Een serieuze WordPress site vereist wekelijks aandacht: core updates,
            plugin updates, theme updates, backup checks, security scans. Dat
            werk verdwijnt grotendeels bij Next.js.
          </p>

          <h2>SEO behouden tijdens migratie</h2>
          <p>
            Dit is meestal het grootste zorgpunt: "Ga ik mijn Google posities
            verliezen?" Nee — niet als de migratie zorgvuldig gebeurt. De vier
            cruciale stappen:
          </p>
          <ul>
            <li><strong>URL-mapping</strong> — alle bestaande URL's krijgen óf dezelfde structuur in Next.js, óf een 1-op-1 301-redirect naar de nieuwe URL.</li>
            <li><strong>Behoud van metadata</strong> — titles, meta descriptions, alt-teksten en headings worden meegenomen of verbeterd.</li>
            <li><strong>Schema markup uitbreiden</strong> — vaak is dit waar Next.js juist beter scoort dan de oude WordPress versie.</li>
            <li><strong>Sitemap en Search Console</strong> — direct na lancering wordt de nieuwe sitemap ingediend en monitoring opgezet.</li>
          </ul>
          <p>
            In de meeste migraties zien we binnen 2-4 weken een <strong>stijging</strong> in
            rankings, vooral door verbeterde Core Web Vitals en betere structuur.
          </p>

          <h2>Verbetering van snelheid</h2>
          <p>
            De meest meetbare winst zit in snelheid. Een paar voorbeelden uit
            recente migraties:
          </p>
          <ul>
            <li>WordPress LCP <strong>3.4s</strong> → Next.js LCP <strong>0.8s</strong></li>
            <li>WordPress PageSpeed <strong>52</strong> → Next.js PageSpeed <strong>98</strong></li>
            <li>WordPress TTFB <strong>1.8s</strong> → Next.js TTFB <strong>0.1s</strong> (CDN edge)</li>
          </ul>
          <p>
            Voor bezoekers betekent dit: minder bounce, meer pagina's per sessie,
            hogere conversie. Voor Google betekent het: hogere posities en meer
            organische impressies.
          </p>

          <h2>Het migratieproces</h2>
          <h3>Stap 1 — Audit</h3>
          <p>
            Ik analyseer uw huidige WordPress site: structuur, content, plugins,
            performance, SEO-status, formulieren en integraties. U krijgt een
            helder migratieplan met te behouden, te verbeteren en te schrappen
            elementen.
          </p>
          <h3>Stap 2 — Architectuur</h3>
          <p>
            We bepalen of WordPress behouden blijft als headless CMS, of dat we
            overstappen naar een ander systeem. Voor veel sites is het simpelste:
            content overzetten naar Next.js zelf (MDX of een lichte CMS).
          </p>
          <h3>Stap 3 — Herbouw</h3>
          <p>
            De site wordt opnieuw opgebouwd in Next.js. Dit is geen kopieer-actie,
            maar een herbouw — wat is meteen de kans om verouderde structuur,
            slechte UX en SEO-problemen op te lossen.
          </p>
          <h3>Stap 4 — Redirect map & launch</h3>
          <p>
            Volledige 301-redirect map wordt geconfigureerd. We testen alle URL's,
            controleren broken links, en gaan live. Direct daarna sitemap
            indienen bij Google Search Console.
          </p>
          <h3>Stap 5 — Monitoring</h3>
          <p>
            De eerste weken na launch monitoren we rankings, crawl errors en
            performance. Eventuele issues lossen we direct op. Na 4 weken doen
            we een eindrapportage.
          </p>

          <h2>Veelgestelde vragen</h2>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-8 mt-6">
          <FAQ items={faqs} schemaId="migratie" />
        </div>
      </article>

      <CTASection
        title="Vraag een migratie-analyse aan."
        subtitle="Stuur de URL van uw huidige WordPress site en u krijgt binnen 48 uur een gratis migratie-advies."
        button="Migratie analyse"
      />
    </>
  );
}
