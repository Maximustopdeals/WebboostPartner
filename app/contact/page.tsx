import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, LucideIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Plan een vrijblijvend gesprek over je website",
  description:
    "Neem vrijblijvend contact op met WebBoost Partner in Rotterdam. Een nieuwe website laten maken, WordPress migreren, of advies? Stuur een berichtje.",
  alternates: { canonical: "https://webboostpartner.nl/contact" },
};

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}

function ContactCard({ icon: Icon, label, children }: ContactCardProps) {
  return (
    <div className="border-2 border-black bg-white p-5 hover:shadow-brutal-sm hover:-translate-y-1 transition-all">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 grid place-items-center bg-[#FF4500] text-white border-2 border-black shrink-0">
          <Icon size={20} strokeWidth={2.5} />
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-1">{label}</p>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Contact</p>
          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            Laten we <span className="text-[#FF4500]">praten</span>.
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Wilt u een website laten maken of uw huidige website verbeteren?
            Neem vrijblijvend contact op. <strong>Binnen 24 uur</strong> krijgt u
            een persoonlijke reactie — geen autoresponder, geen verkoopfunnel.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-heading font-extrabold uppercase text-2xl mb-2">
                Bereik mij direct
              </h2>
              <p className="text-[#525252]">
                Liever bellen of mailen? Geen enkel probleem.
              </p>
            </div>

            <div className="space-y-4">
              <ContactCard icon={Phone} label="Telefoon">
                <a href="tel:+31642628242" className="hover:text-[#FF4500] font-semibold" data-testid="contact-phone">06-42628242</a>
              </ContactCard>
              <ContactCard icon={Mail} label="E-mail">
                <a href="mailto:info@webboostpartner.nl" className="hover:text-[#FF4500] font-semibold break-all" data-testid="contact-email">
                  info@webboostpartner.nl
                </a>
              </ContactCard>
              <ContactCard icon={MapPin} label="Vestiging">
                <span className="font-semibold">Rotterdam, NL</span>
                <p className="text-sm text-[#525252] mt-1">
                  Werkgebied: Rotterdam, Capelle aan den IJssel, Krimpen aan den IJssel,
                  Ridderkerk, Barendrecht, Schiedam.
                </p>
              </ContactCard>
              <ContactCard icon={Clock} label="Reactie">
                <span className="font-semibold">Binnen 24 uur</span>
                <p className="text-sm text-[#525252] mt-1">Op werkdagen.</p>
              </ContactCard>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
