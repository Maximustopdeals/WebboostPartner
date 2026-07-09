import { Gauge, Search, MapPin, Handshake, Zap, Target, Code, ShieldCheck, LucideIcon } from "lucide-react";

interface USPItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  metric?: string;
  big?: boolean;
}

const items: USPItem[] = [
  {
    icon: Gauge,
    title: "Snelle Next.js websites",
    desc: "Pagina's die laden voor je het scrollwiel hebt aangeraakt.",
    metric: "< 0.8s LCP",
    big: true,
  },
  {
    icon: Search,
    title: "SEO vanaf de basis",
    desc: "Schema markup, semantische HTML, sitemap — ingebouwd.",
    metric: "100/100",
  },
  {
    icon: MapPin,
    title: "Lokaal Rotterdam",
    desc: "Persoonlijk contact, geen anoniem bureau aan de andere kant van het land.",
  },
  {
    icon: Handshake,
    title: "Eerlijke samenwerking",
    desc: "Geen jargon, geen onnodige meerkosten. Wat je vraagt, krijg je.",
  },
  {
    icon: Zap,
    title: "Bliksemsnel",
    desc: "Pagina's laden in minder dan een seconde. Geen trage plugins, geen wachttijden.",
  },
  {
    icon: Target,
    title: "Focus op Google rankings",
    desc: "Elke pagina is een hefboom voor je vindbaarheid.",
  },
  {
    icon: Code,
    title: "Moderne stack",
    desc: "Next.js — hetzelfde framework als Nike, Netflix en TikTok.",
    big: true,
  },
  {
    icon: ShieldCheck,
    title: "Veilig & stabiel",
    desc: "Geen kwetsbare plugins of onverwachte crashes. Uw site blijft altijd online.",
  },
];

export default function USPGrid() {
  return (
    <section className="bg-[#FAFAFA] py-20 sm:py-28" data-testid="usp-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
            // Waarom WebBoost Partner
          </p>
          <h2 className="font-heading font-extrabold uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95]">
            Snelheid. SEO. Eerlijkheid.<br />
            <span className="text-[#FF4500]">Geen poespas.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it: USPItem, i: number) => {
            const Icon = it.icon;
            return (
              <div
                key={i}
                className={`border-2 border-black p-6 hover:-translate-y-1 hover:shadow-brutal-sm transition-all ${
                  it.big ? "sm:col-span-2 lg:col-span-2 bg-black text-white" : "bg-white"
                }`}
                data-testid={`usp-card-${i}`}
              >
                <div className={`w-12 h-12 grid place-items-center border-2 ${it.big ? "border-[#FF4500] bg-[#FF4500]" : "border-black bg-[#FF4500]"} text-white mb-5`}>
                  <Icon size={22} strokeWidth={2.5} />
                </div>
                {it.metric && (
                  <p className={`font-mono text-xs uppercase tracking-widest mb-2 ${it.big ? "text-[#FF4500]" : "text-[#525252]"}`}>
                    {it.metric}
                  </p>
                )}
                <h3 className={`font-heading font-extrabold uppercase ${it.big ? "text-2xl" : "text-xl"} tracking-tight mb-2`}>
                  {it.title}
                </h3>
                <p className={`text-sm ${it.big ? "text-white/80" : "text-[#525252]"}`}>{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
