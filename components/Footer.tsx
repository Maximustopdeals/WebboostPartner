import Link from "next/link";
import { Mail, Phone, MapPin, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-[#FAFAFA] border-t-4 border-[#FF4500]" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-heading font-extrabold uppercase text-xl mb-4">
            <span className="bg-[#FF4500] text-black w-9 h-9 grid place-items-center border-2 border-white">
              <Zap size={20} strokeWidth={3} />
            </span>
            WebBoost Partner
          </div>
          <p className="text-sm text-white/70 max-w-md leading-relaxed">
            Razendsnelle Next.js websites voor ondernemers in Rotterdam en omgeving.
            Gebouwd voor snelheid, SEO en conversie. Zonder WordPress-gedoe.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold uppercase text-sm tracking-widest mb-4 text-[#FF4500]">
            Diensten
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/website-laten-maken-rotterdam" className="hover:text-[#FF4500]">Website laten maken</Link></li>
            <li><Link href="/seo-rotterdam" className="hover:text-[#FF4500]">SEO Rotterdam</Link></li>
            <li><Link href="/wordpress-naar-nextjs" className="hover:text-[#FF4500]">WordPress migratie</Link></li>
            <li><Link href="/core-web-vitals" className="hover:text-[#FF4500]">Core Web Vitals</Link></li>
            <li><Link href="/pakketten" className="hover:text-[#FF4500]">Pakketten</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold uppercase text-sm tracking-widest mb-4 text-[#FF4500]">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-[#FF4500] shrink-0" />
              Rotterdam, Nederland
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 text-[#FF4500] shrink-0" />
              <a href="tel:+31642628242" className="hover:text-[#FF4500]" data-testid="footer-phone">06-42628242</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 text-[#FF4500] shrink-0" />
              <a href="mailto:info@webboostpartner.nl" className="hover:text-[#FF4500] break-all" data-testid="footer-email">info@webboostpartner.nl</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} WebBoost Partner. Alle rechten voorbehouden.</p>
          <p>Gebouwd met Next.js — uiteraard.</p>
        </div>
      </div>
    </footer>
  );
}
