import { MapPin } from "lucide-react";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

function NextjsLogoCard() {
  return (
    <div className="bg-[#0A0A0A] border-2 border-black p-8 flex items-center justify-center relative z-10 min-h-[300px]">
      {/* Next.js Logo SVG */}
      <svg
        viewBox="0 0 180 180"
        className="w-48 h-48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="m" maskUnits="userSpaceOnUse">
          <circle cx="90" cy="90" r="90" fill="white"/>
        </mask>
        <g mask="url(#m)">
          <circle cx="90" cy="90" r="90" fill="black"/>
          <path
            d="M149.5 157.5L69.5 60H60v60h8.5V72.5l72.5 93.5c3-1.8 5.8-3.9 8.5-6.3z"
            fill="white"
          />
          <path d="M146 60h-8v60h8V60z" fill="white"/>
        </g>
      </svg>
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-white/40">
          Powered by
        </p>
        <p className="font-heading font-extrabold uppercase text-lg text-white tracking-tight">
          Next.js
        </p>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Over mij | Ron — Next.js webbouwer Rotterdam",
  description:
    "Voormalig WordPress-webbouwer, nu Next.js specialist. Ron uit Rotterdam vertelt waarom hij stopte met WordPress en hoe hij websites bouwt die wel werken.",
  alternates: { canonical: "https://webboostpartner.nl/over-mij" },
};

export default function OverMijPage() {
  return (
    <>
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Over mij</p>
            <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
              Over mij — <span className="text-[#FF4500]">Next.js</span> webbouwer Rotterdam
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Ik bouw razendsnelle Next.js websites die <strong>beter scoren in Google
              dan 98% van alle websites</strong>. Geen marketing-praat, gewoon meetbaar
              feit.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative max-w-sm ml-auto">
              <div className="bg-white border-2 border-black p-2 relative z-10">
                <NextjsLogoCard />
                <div className="px-3 py-3 border-t-2 border-black mt-2">
                  <p className="font-heading font-bold uppercase text-sm">Ron · Founder</p>
                  <p className="font-mono text-xs text-[#525252] flex items-center gap-1 mt-1">
                    <MapPin size={12} /> Rotterdam, NL
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#FF4500] border-2 border-black -z-0" />
            </div>
          </div>
        </div>
      </section>

      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">
          <p>
            Ik heb jarenlang gewerkt met WordPress. <strong>Divi-thema&apos;s, plugins,
            updates, onderhoud</strong>. Het was wat ik deed. En ik deed het goed.
            Maar ergens, tussen het oplossen van een kapotte plugin en het uitleggen
            aan een klant waarom hun website weer traag was, begon er iets te knagen.
          </p>
          <p>
            Dit is niet hoe het hoort.
          </p>

          <h2>Het moment van inzicht</h2>
          <p>
            Ik keek naar mijn klanten. Naar de rekeningen die ze betaalden voor
            onderhoud aan systemen die ze niet begrepen. Naar de uren die ik stopte
            in het repareren van iets dat eigenlijk al kapot was voordat het begon.
          </p>
          <p>
            Dus ik stopte. Niet omdat ik niet meer wilde bouwen. Integendeel. Ik
            wilde alleen bouwen wat <em>echt</em> werkt.
          </p>

          <h2>Wat ik nu doe</h2>
          <p>
            Tegenwoordig werk ik met <strong>Next.js</strong>. Hetzelfde framework
            dat Netflix, Uber en Nike gebruiken. Geen plugins die stukgaan. Geen
            updates die mislukken. Geen trage laadtijden.
          </p>

          <h2>Mijn belofte</h2>
          <p>
            Ik praat geen technisch jargon. Ik leg uit wat je moet weten, in gewoon
            Nederlands.
          </p>
          <p>
            Ik ben direct — als iets niet kan, zeg ik dat. Als er een betere manier
            is, vertel ik die.
          </p>
          <p>
            Ik bouw alsof het voor mezelf is. Want dat is het enige wat ik weet.
          </p>

          <h2>Waarom ik overstapte naar Next.js</h2>
          <p>
            De laatste twee jaar dat ik WordPress bouwde, voelde ik dat de
            technologie steeds verder achterop raakte. Klanten betaalden meer voor
            minder. Updates braken sites. Snelheid bleef het probleem dat nooit
            écht opgelost werd.
          </p>
          <p>
            Toen ik mijn eerste Next.js site bouwde en zag dat <strong>Core Web Vitals
            standaard groen waren zonder een enkele optimalisatie</strong>, wist ik het.
            Dit is geen trend. Dit is de toekomst. En ik wilde niet de webbouwer zijn
            die over vijf jaar nog steeds plugins draait te repareren.
          </p>

          <h2>Mijn visie op moderne websites</h2>
          <p>
            Een website is <strong>geen visitekaartje meer</strong>. Het is uw
            beste verkoper, uw 24/7 receptie, uw eerste indruk. Als hij langzaam
            is, voelt dat als een verkoper die in de hoek zit te slapen. Als hij
            niet vindbaar is, bestaat hij niet voor de mensen die u zoeken.
          </p>
          <p>
            Een goede website moet drie dingen tegelijk doen: <strong>snel laden,
            duidelijk overtuigen en gevonden worden</strong>. Daar bouw ik op.
            Niet op kleurtjes, niet op trucs, niet op &quot;ik bouw wat de klant
            zegt zonder mee te denken&quot;.
          </p>

          <h2>Mijn werkwijze</h2>
          <p>
            Ik werk met een vast team van één — mijzelf. U heeft één
            aanspreekpunt, één eindverantwoordelijke, één persoon die uw site
            écht kent. Geen accountmanager die niet weet wat een meta description
            is, geen projectleider die alleen doorgeeft.
          </p>
          <p>
            Een typisch traject ziet eruit als:
          </p>
          <ul>
            <li><strong>Kennismaking</strong> — bij u, bij mij in Rotterdam, of via videocall.</li>
            <li><strong>Strategie</strong> — wat moet de site doen, voor wie, en hoe meten we succes?</li>
            <li><strong>Design & content</strong> — wireframes, moodboard, content-structuur.</li>
            <li><strong>Bouw</strong> — Next.js development met tussentijdse preview-link.</li>
            <li><strong>Lancering</strong> — live, met SEO setup en analytics.</li>
            <li><strong>Nazorg</strong> — ik blijf bereikbaar voor doorontwikkeling.</li>
          </ul>

          <h2>Expertise</h2>
          <ul>
            <li><strong>Next.js</strong> — App Router, RSC, SSG, ISR, Edge runtime.</li>
            <li><strong>SEO</strong> — technische SEO, lokale SEO, schema markup, content strategie.</li>
            <li><strong>Core Web Vitals</strong> — LCP, INP, CLS optimalisatie tot in de details.</li>
            <li><strong>Conversieoptimalisatie</strong> — heuristische UX review, A/B test setup, micro-copy.</li>
            <li><strong>Headless CMS</strong> — Sanity, Contentful, Strapi, WordPress headless.</li>
            <li><strong>Tailwind CSS</strong> — moderne, schaalbare design systems.</li>
          </ul>

          <h2>Werkgebied</h2>
          <p>
            Ik werk vanuit Rotterdam, met focus op de regio. Dat betekent dat ik
            ook fysiek langs kan komen voor een kennismaking — iets dat in deze
            tijd van anonieme webbouw verrassend zeldzaam is geworden.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-8 mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {["Rotterdam","Capelle aan den IJssel","Krimpen aan den IJssel","Ridderkerk","Barendrecht","Schiedam"].map((c: string, index: number) => (
              <div key={index} className="border-2 border-black bg-[#FAFAFA] p-4 text-center hover:bg-[#FF4500] hover:text-white transition-colors">
                <p className="font-heading font-bold uppercase text-sm tracking-tight">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      <CTASection
        title="Laten we kennismaken."
        subtitle="Vrijblijvend, een uurtje, op locatie of online. Vertel waar u staat — ik luister."
        button="Plan kennismaking"
      />
    </>
  );
}
