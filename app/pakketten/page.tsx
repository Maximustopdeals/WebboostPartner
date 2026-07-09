import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Pakketten | Essential €2.495 · Professional €4.495 · Enterprise €6.995",
  description:
    "Heldere pakketten voor uw nieuwe Next.js website. Van Essential voor ZZP'ers tot Enterprise voor maatwerk. Geen verborgen kosten — wel SEO, snelheid en transparantie.",
  alternates: { canonical: "https://webboostpartner.nl/pakketten" },
};

export default function PakkettenPage() {
  return (
    <>
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Pakketten</p>
          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            Website <span className="text-[#FF4500]">pakketten</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Drie helder geprijsde pakketten — van Essential voor ZZP&apos;ers
            tot Enterprise voor ondernemers met groeiambitie. <strong>Geen
            verborgen kosten</strong>, wel maatwerk.
          </p>
        </div>
      </section>

      <PricingSection compact />

      <section className="bg-white py-16 sm:py-24 border-y-2 border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 prose-brutal">
          <h2>Wat zit standaard in elk pakket?</h2>
          <p>
            Ongeacht welk pakket u kiest, krijgt u dezelfde fundamenten:
          </p>
          <ul>
            <li><strong>Maatwerk Next.js website</strong> — geen sjablonen, wel een design dat bij uw merk past.</li>
            <li><strong>Responsive ontwerp</strong> — perfect op mobiel, tablet en desktop.</li>
            <li><strong>Technische SEO</strong> — schema, sitemap, robots, OG-tags.</li>
            <li><strong>Core Web Vitals optimalisatie</strong> — sneller dan 90% van de concurrentie.</li>
            <li><strong>Contactformulier</strong> — werkend, met e-mailnotificatie.</li>
            <li><strong>Google Analytics 4</strong> — correct geconfigureerd.</li>
            <li><strong>Search Console setup</strong> — sitemap ingediend, eigendom geverifieerd.</li>
            <li><strong>SSL & hosting</strong> setup eerste jaar inbegrepen.</li>
          </ul>

          <h2>Hoe kies ik het juiste pakket?</h2>
          
          <h3>Essential (€2.495 excl. btw / €3.019 incl.)</h3>
          <p>
            Ideaal voor ZZP&apos;ers en starters die snel een professionele
            online aanwezigheid nodig hebben. 5 pagina&apos;s, kern-SEO, en een
            uitstraling die direct vertrouwen wekt. Jij levert de input, ik bouw de website.
          </p>
          
          <h3>Professional (€4.495 excl. btw / €5.439 incl.)</h3>
          <p>
            Voor ondernemers met ambitie die meer content nodig hebben én lokaal goed
            gevonden willen worden. Inclusief lokale SEO Rotterdam, onbeperkt pagina&apos;s,
            blog/nieuws module, Schema markup en 1 uur strategiegesprek.
          </p>
          
          <h3>Enterprise (vanaf €6.995 excl. btw / €8.464 incl.)</h3>
          <p>
            Voor groeiende en gevestigde bedrijven die maximaal online rendement willen.
            Volledige SEO-strategie, conversieoptimalisatie, headless CMS koppeling,
            webshop functionaliteit, custom dashboards en 6 maanden support.
            <strong className="block mt-2 text-[#FF4500]">
              Vanaf prijs — maatwerk mogelijk. Vraag een offerte op maat aan.
            </strong>
          </p>

          <div className="bg-[#FAFAFA] border-2 border-black p-6 my-8">
            <h3 className="mt-0 mb-2">💡 Webshop functionaliteit?</h3>
            <p className="mb-0">
              De Enterprise pakket is de juiste keuze voor webshops. Denk aan productpagina&apos;s, 
              iDEAL / Mollie / Stripe integratie, voorraadbeheer, ordersysteem en een admin dashboard.
              Vanaf 10 producten — maatwerk mogelijk tot honderden producten.
            </p>
          </div>

          <h2>Wat zit er níet in?</h2>
          <p>
            Eerlijk is eerlijk. Niet alles past in een pakket. Buiten scope (maar
            altijd bespreekbaar als losse optie):
          </p>
          <ul>
            <li>Content schrijven voor alle pagina&apos;s (tot een bepaalde scope is dit wel inbegrepen).</li>
            <li>Logo en huisstijl ontwerpen (kan via een gespecialiseerd designer).</li>
            <li>Maandelijks SEO-onderhoud (separate maandfactuur mogelijk).</li>
            <li>Doorlopende reclame-campagnes (Google Ads, Meta).</li>
            <li>Custom backend functionaliteit buiten de standaard.</li>
          </ul>
          <p>
            Voor alles wat buiten scope valt, geldt: ik denk graag mee. Soms is een
            ander pakket beter, soms een vaste prijsafspraak voor extra werk.
          </p>

          <h2>Hoe verloopt de betaling?</h2>
          <p>
            Standaard werk ik met twee termijnen: 50% bij start, 50% bij oplevering.
            Voor grotere projecten (Enterprise) is een derde termijn bij
            milestone bespreekbaar.
          </p>
        </div>
      </section>

      <CTASection
        title="Vraag een offerte aan."
        subtitle="Niet zeker welk pakket bij u past? Stuur een berichtje, we bespreken het samen."
        button="Offerte aanvragen"
      />
    </>
  );
}
