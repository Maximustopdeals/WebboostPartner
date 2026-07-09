import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Core Web Vitals verbeteren | LCP, INP, CLS optimalisatie",
  description:
    "Core Web Vitals zijn een rankingfactor. Leer wat LCP, INP en CLS zijn, waarom WordPress vaak faalt en hoe Next.js standaard 95+ scoort op PageSpeed.",
  alternates: { canonical: "https://webboostpartner.nl/core-web-vitals" },
};

export default function CoreWebVitalsPage() {
  return (
    <>
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Performance</p>
          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            Core Web Vitals<br/><span className="text-[#FF4500]">verbeteren</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Een snelle website is geen luxe meer — het is een rankingfactor.
            Google gebruikt Core Web Vitals om te bepalen welke pagina&apos;s
            bezoekers een goede ervaring geven en welke niet.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-3 gap-5">
          {[
            { k: "LCP", n: "< 2.5s", v: "Largest Contentful Paint — hoe snel verschijnt het grootste element op uw pagina." },
            { k: "INP", n: "< 200ms", v: "Interaction to Next Paint — hoe snel reageert uw site op klikken en typen." },
            { k: "CLS", n: "< 0.1", v: "Cumulative Layout Shift — hoeveel springt de pagina-indeling tijdens het laden." },
          ].map((m) => (
            <div key={m.k} className="border-2 border-black bg-[#FAFAFA] p-8 hover:bg-black hover:text-white transition-colors group">
              <p className="font-mono uppercase text-xs tracking-widest text-[#FF4500] mb-2">Goede score</p>
              <p className="font-heading font-extrabold text-5xl mb-1">{m.k}</p>
              <p className="font-heading font-bold text-2xl mb-4 text-[#FF4500]">{m.n}</p>
              <p className="text-sm">{m.v}</p>
            </div>
          ))}
        </div>
      </section>

      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">
          <h2>Wat zijn Core Web Vitals?</h2>
          <p>
            <strong>Core Web Vitals</strong> zijn drie meetbare prestatie-indicatoren
            van Google die samen aangeven hoe goed of slecht een pagina voelt
            voor de bezoeker. Ze meten geen technische rariteiten — ze meten
            <strong> de daadwerkelijke ervaring</strong> van échte gebruikers.
          </p>
          <p>
            De drie metrics zijn:
          </p>
          <ul>
            <li><strong>LCP — Largest Contentful Paint</strong>: hoe snel verschijnt het grootste zichtbare element (vaak een hero-afbeelding of grote koptekst)? Onder 2.5 seconden is goed, onder 1.0 seconden is uitstekend.</li>
            <li><strong>INP — Interaction to Next Paint</strong>: hoe snel reageert de site nadat een gebruiker klikt, scrollt of typt? Onder 200ms is goed. (INP heeft FID vervangen in maart 2024.)</li>
            <li><strong>CLS — Cumulative Layout Shift</strong>: hoeveel "springt" de pagina-indeling tijdens het laden? Onder 0.1 is goed — boven 0.25 is irritant.</li>
          </ul>

          <h2>Waarom belangrijk voor SEO?</h2>
          <p>
            Sinds Google&apos;s <strong>Page Experience update</strong> (2021, verder
            uitgebouwd in 2024) zijn Core Web Vitals een officiële rankingfactor.
            Twee pagina&apos;s met vergelijkbare content en autoriteit krijgen niet
            dezelfde positie als de ene snel is en de andere traag — Google
            geeft voorrang aan de snelle.
          </p>
          <p>
            Daarnaast hebben slechte Core Web Vitals een dubbel effect: meer
            bezoekers haken af voordat de pagina is geladen, wat de bounce rate
            verhoogt en het gemiddelde sessieduur verlaagt. Dat zijn óók
            signalen die Google meeweegt.
          </p>

          <h2>Waarom WordPress vaak problemen geeft</h2>
          <p>
            Een doorsnee WordPress site scoort op mobiel tussen de 40 en 65 in
            PageSpeed Insights. Dat komt zelden door één probleem — het komt
            door een opeenstapeling:
          </p>
          <ul>
            <li><strong>Render-blocking CSS en JavaScript</strong> van thema&apos;s en plugins.</li>
            <li><strong>Niet-geoptimaliseerde afbeeldingen</strong> in te grote formaten zonder lazy loading.</li>
            <li><strong>Te veel HTTP-requests</strong> door losse plugin-assets.</li>
            <li><strong>Trage server response</strong> (TTFB) door PHP en MySQL queries.</li>
            <li><strong>Layout shifts</strong> door advertenties, embeds en lazy-loaded content zonder placeholder.</li>
          </ul>
          <p>
            Plugins zoals WP Rocket of Autoptimize kunnen veel verbeteren, maar
            ze zijn pleisters op een fundamentele architectuur. Een echt snelle
            WordPress site vereist veel kennis en vaak ook duurdere hosting.
          </p>

          <h2>Hoe Next.js betere scores behaalt</h2>
          <p>
            Next.js is vanaf de grond af gebouwd met performance als prioriteit.
            Een paar mechanismen die standaard meekomen:
          </p>
          <ul>
            <li><strong>Static Site Generation (SSG)</strong> en <strong>Server-Side Rendering (SSR)</strong> leveren kant-en-klare HTML aan de browser — geen PHP, geen database query op het pad.</li>
            <li><strong>Automatische code splitting</strong>: alleen de JavaScript voor de huidige pagina wordt geladen.</li>
            <li><strong>next/image</strong> levert afbeeldingen in moderne formaten (AVIF, WebP), met juiste afmetingen, lazy loading en placeholder.</li>
            <li><strong>next/font</strong> host fonts lokaal met preload — geen externe Google Fonts roundtrip die CLS veroorzaakt.</li>
            <li><strong>CDN edge delivery</strong>: statische assets en zelfs HTML worden vanuit de CDN dichtbij de bezoeker geserveerd.</li>
            <li><strong>React Server Components</strong>: minder JavaScript naar de client, snellere interactiviteit.</li>
          </ul>
          <p>
            Het resultaat: pagina&apos;s die standaard rond de <strong>95-100</strong>
            scoren in PageSpeed Insights, zelfs op mobiel 3G/4G.
          </p>

          <h2>Praktische optimalisaties</h2>
          <p>
            Naast de framework-voordelen pas ik per project nog een aantal
            specifieke optimalisaties toe:
          </p>
          <h3>Hero LCP optimalisatie</h3>
          <p>
            Het grootste zichtbare element krijgt een <code>priority</code> flag,
            wordt preloaded, en gebruikt fetchpriority=&quot;high&quot;. Hierdoor verschijnt
            de hero vaak binnen 0.5-0.8 seconde, ook op mobiel.
          </p>
          <h3>Font display swap + preload</h3>
          <p>
            Custom fonts worden preloaded met <code>font-display: swap</code> zodat
            tekst direct zichtbaar is, ook als de font nog laadt.
          </p>
          <h3>Layout reservation</h3>
          <p>
            Voor elke afbeelding en embed reserveer ik in CSS de hoogte en breedte,
            zodat tekst nooit verschuift tijdens het laden. CLS blijft daardoor
            standaard 0.00.
          </p>
          <h3>Third-party scripts isoleren</h3>
          <p>
            Google Analytics, chatbots en pixels worden via <code>next/script</code>
            met strategie &quot;afterInteractive&quot; of &quot;lazyOnload&quot; geladen, zodat ze
            de Core Web Vitals niet beïnvloeden.
          </p>

          <h2>Resultaten voor bedrijven</h2>
          <p>
            Wat levert het concreet op? Een paar concrete gevolgen die we keer
            op keer zien bij overgangen van WordPress naar Next.js:
          </p>
          <ul>
            <li>Bounce rate daalt met 15-40% — bezoekers blijven hangen omdat de site direct verschijnt.</li>
            <li>Pagina&apos;s per sessie stijgen — gebruikers klikken makkelijker door als alles snel is.</li>
            <li>Organische posities in Google stijgen voor de meeste keywords binnen 4-8 weken.</li>
            <li>Mobiele conversie verbetert, vooral op trage netwerken.</li>
            <li>Adverteren wordt goedkoper — Google Ads beloont snelle landing pages met lagere CPC&apos;s.</li>
          </ul>
          <p>
            Core Web Vitals zijn niet alles. Goede content, sterke autoriteit en
            duidelijke conversiestructuur blijven minstens zo belangrijk. Maar
            zonder snelheid valt al die andere moeite in een lekkende emmer.
          </p>
        </div>
      </article>

      <CTASection
        title="Laat uw website testen."
        subtitle="Stuur de URL en u krijgt een gratis Core Web Vitals analyse met concrete actiepunten."
        button="Test mijn site"
      />
    </>
  );
}
