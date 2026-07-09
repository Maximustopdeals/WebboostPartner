import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js vs WordPress | Welke is beter voor jouw website in 2026?",
  description:
    "Next.js vs WordPress: een eerlijke vergelijking op snelheid, SEO, veiligheid en onderhoud. Welke past bij jouw bedrijf? Lees de uitgebreide analyse.",
  alternates: { canonical: "https://webboostpartner.nl/nextjs-vs-wordpress" },
};

export default function NextjsVsWordpressPage() {
  return (
    <>
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Vergelijking</p>
          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            Next.js <span className="text-[#FF4500]">vs</span> WordPress
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Twee populaire platforms, twee compleet verschillende filosofieën.
            Welke past bij uw bedrijf? Hieronder een eerlijke vergelijking — geen
            religieuze oorlog, wel feiten.
          </p>
        </div>
      </section>

      {/* Side by side */}
      <section className="bg-white py-16 sm:py-24 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-6">
          <div className="border-2 border-black p-8 bg-[#FAFAFA]">
            <p className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-2">WordPress</p>
            <h2 className="font-heading font-extrabold uppercase text-4xl mb-4">CMS<br/>+ Thema&apos;s</h2>
            <p className="text-[#1a1a1a]">
              De grootste website-builder ter wereld. Eenvoudig, breed, plug-and-play.
              Maar ook: traag, kwetsbaar en duur in onderhoud zodra je iets
              maatwerk wilt.
            </p>
          </div>
          <div className="border-2 border-black p-8 bg-black text-white shadow-brutal-orange">
            <p className="font-mono text-xs uppercase tracking-widest text-[#FF4500] mb-2">Next.js</p>
            <h2 className="font-heading font-extrabold uppercase text-4xl mb-4">Framework<br/>+ Code</h2>
            <p>
              Een React-gebaseerd framework van Vercel. Gebouwd voor performance,
              SEO en moderne user experience. Vereist een ontwikkelaar, maar
              levert een site die jaren meegaat.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">
          <h2>Wat is WordPress?</h2>
          <p>
            WordPress is een <strong>open-source contentmanagementsysteem (CMS)</strong> dat ooit
            begon als blogplatform en is uitgegroeid tot de motor achter ongeveer 43% van alle
            websites wereldwijd. Het werkt met een PHP-backend, een MySQL-database en een
            ecosysteem van duizenden thema&apos;s en plugins.
          </p>
          <p>
            De kracht van WordPress is de toegankelijkheid: iedereen kan ermee aan de slag,
            en voor bijna elk wensje is er wel een plugin. De keerzijde: die plugins zijn
            ook de grootste oorzaak van trage sites, lekken en breekbare updates.
          </p>

          <h2>Wat is Next.js?</h2>
          <p>
            Next.js is een <strong>React-framework</strong> ontwikkeld door Vercel. In
            plaats van een CMS met een database, genereert Next.js statische of
            server-side gerenderde pagina&apos;s die direct vanuit een CDN aan de bezoeker
            worden geleverd. Het wordt gebruikt door bedrijven als Nike, Netflix,
            TikTok, Twitch en het Witte Huis.
          </p>
          <p>
            Voor de bezoeker betekent dit: pagina&apos;s die in minder dan een seconde
            laden, ongeacht hoe ver weg de gebruiker is. Voor de eigenaar betekent
            het: geen plugin-onderhoud, geen kwetsbare login-pagina&apos;s, geen
            database die kan crashen.
          </p>

          <h2>Vergelijking snelheid</h2>
          <p>
            Snelheid is dé reden waarom veel ondernemers overstappen. Een doorsnee
            WordPress site met Divi-thema en de gangbare SEO/cache/security plugins
            scoort op een mobiel ergens tussen de <strong>40 en 65</strong> in PageSpeed
            Insights. Een goed gebouwde Next.js site zit standaard op <strong>95-100</strong>.
          </p>
          <p>
            Het verschil zit niet in marketing-trucs. Het zit in de architectuur:
          </p>
          <ul>
            <li><strong>WordPress</strong> rendert elke pagina dynamisch — PHP haalt content uit MySQL, plugins voegen extra queries toe, het thema bouwt de HTML, en pas dan gaat alles naar de bezoeker.</li>
            <li><strong>Next.js</strong> rendert pagina&apos;s vooraf (build time) of cached server-side, en serveert kant-en-klare HTML vanuit een CDN dichtbij de bezoeker.</li>
          </ul>

          <h2>Vergelijking SEO</h2>
          <p>
            WordPress heeft een plugin nodig (Yoast, RankMath) om SEO basics goed te
            krijgen. Zelfs dán moet je oppassen voor conflicten met thema&apos;s,
            duplicate canonicals en trage server response times — die laatste is
            een ranking factor.
          </p>
          <p>
            Next.js heeft de <strong>Metadata API</strong> ingebouwd. Per pagina
            schrijf je in code de title, description, OG-tags en JSON-LD schema.
            Geen plugin, geen conflict, geen verrassingen. Pagina&apos;s komen volledig
            gerenderd aan bij Googlebot.
          </p>

          <h2>Vergelijking veiligheid</h2>
          <p>
            <strong>WordPress is een bekend doelwit</strong>. Brute-force aanvallen
            op wp-login, plugin-exploits, theme-vulnerabilities — wekelijks komen
            er nieuwe issues bij. Een WordPress site zonder actieve security-strategie
            wordt vroeg of laat geraakt. Daarom adviseert iedereen plugins zoals
            Wordfence, en daarom wordt onderhoud zo duur.
          </p>
          <p>
            Een Next.js site die statisch is gegenereerd, heeft <strong>geen
            aanvalsoppervlak</strong>. Er is geen admin-login die te kraken valt
            aan de voorkant, geen database die SQL-injecties kan ondergaan, geen
            plugins die kwetsbaar zijn. De content komt uit een CMS (eventueel
            headless) of git, en de output is HTML.
          </p>

          <h2>Vergelijking onderhoud</h2>
          <p>
            Een gemiddeld WordPress onderhoudscontract kost <strong>€80-€150 per
            maand</strong>. Daarvoor krijgt u updates van core, thema en plugins,
            backups, en monitoring. Het is niet voor niets dat veel webbouwers
            graag WordPress aanbieden: het is een terugkerende inkomstenbron.
          </p>
          <p>
            Een Next.js site heeft <strong>nauwelijks onderhoud</strong>. Geen
            wekelijkse plugin updates, geen breekbare PHP-versies, geen database
            die crasht. U betaalt voor hosting (vaak gratis bij Vercel of een paar
            euro per maand) en eventueel een keer per jaar een framework-update.
          </p>

          <h2>Wanneer kiezen voor WordPress?</h2>
          <p>
            Eerlijk is eerlijk: WordPress is niet altijd verkeerd. Kies WordPress als:
          </p>
          <ul>
            <li>U zelf, dagelijks, talloze posts wilt publiceren via een vertrouwd CMS.</li>
            <li>U een nichefunctionaliteit nodig heeft die exact in een populaire plugin zit (WooCommerce, BuddyPress, LearnDash).</li>
            <li>Het budget extreem beperkt is en performance geen prioriteit heeft.</li>
            <li>U toegang wilt geven aan meerdere medewerkers met verschillende rechten in een out-of-the-box backend.</li>
          </ul>

          <h2>Wanneer kiezen voor Next.js?</h2>
          <p>
            Kies Next.js als:
          </p>
          <ul>
            <li>Snelheid en SEO ranking belangrijk zijn voor uw business.</li>
            <li>U lokale of nationale concurrentie wilt verslaan op vindbaarheid.</li>
            <li>U een schaalbare site wilt die jaren meegaat zonder dure onderhoudscontracten.</li>
            <li>U een professionele, moderne uitstraling wilt zonder dat de site stuk gaat bij elke update.</li>
            <li>U eventueel later een headless CMS wilt koppelen voor zelfstandig content beheer.</li>
          </ul>
          <p>
            Voor de meeste ondernemers in Rotterdam — ZZP, MKB, dienstverleners,
            coaches, bouwbedrijven — is Next.js de betere keuze. De investering
            is vergelijkbaar of lager dan een serieus WordPress traject, maar het
            resultaat presteert jaren beter.
          </p>
        </div>
      </article>

      <CTASection
        title="Ontdek welke oplossing bij uw bedrijf past."
        subtitle="Tijdens een vrijblijvend kennismakingsgesprek bespreken we wat het beste past bij uw situatie."
        button="Plan een gesprek"
      />
    </>
  );
}
