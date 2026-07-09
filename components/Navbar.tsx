"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Menu, X, FileText, ChevronDown } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

interface NavDropdown {
  label: string;
  items: NavLink[];
}

// Hoofdnavigatie: max 5 items + CTA
const mainLinks: (NavLink | NavDropdown)[] = [
  { href: "/", label: "HOME" },
  {
    label: "NEXT.JS",
    items: [
      { href: "/nextjs-specialist", label: "Next.js Specialist" },
      { href: "/nextjs-website-rotterdam", label: "Next.js Websites" },
      { href: "/nextjs-developer-rotterdam", label: "Next.js Developer" },
    ],
  },
  { href: "/website-laten-maken-rotterdam", label: "WEBSITES" },
  { href: "/seo-rotterdam", label: "SEO" },
  { href: "/pakketten", label: "PAKKETTEN" },
  { href: "/contact", label: "CONTACT" },
];

// Mobiel: alle links plat, plus footer-links onderaan
const allMobileLinks: NavLink[] = [
  { href: "/", label: "HOME" },
  { href: "/nextjs-specialist", label: "NEXT.JS SPECIALIST" },
  { href: "/nextjs-website-rotterdam", label: "NEXT.JS WEBSITES" },
  { href: "/nextjs-developer-rotterdam", label: "NEXT.JS DEVELOPER" },
  { href: "/website-laten-maken-rotterdam", label: "WEBSITES ROTTERDAM" },
  { href: "/seo-rotterdam", label: "SEO" },
  { href: "/pakketten", label: "PAKKETTEN" },
  { href: "/demo", label: "DEMO'S" },
  { href: "/over-mij", label: "OVER MIJ" },
  { href: "/contact", label: "CONTACT" },
];

function isDropdown(item: NavLink | NavDropdown): item is NavDropdown {
  return "items" in item;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAFA] border-b-2 border-black" data-testid="site-navbar">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-heading font-extrabold uppercase text-base tracking-tight shrink-0">
            <span className="bg-[#FF4500] text-white w-8 h-8 grid place-items-center border-2 border-black">
              <Zap size={18} strokeWidth={3} />
            </span>
            WEBBOOSTPARTNER
          </Link>

          {/* Desktop nav + CTA */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center">
              {mainLinks.map((item, idx) => {
                if (isDropdown(item)) {
                  return (
                    <div
                      key={idx}
                      className="relative"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <button className="flex items-center gap-1 px-3 py-2 font-heading font-bold uppercase text-xs tracking-wider hover:bg-black hover:text-white transition-colors whitespace-nowrap">
                        {item.label}
                        <ChevronDown
                          size={12}
                          className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {dropdownOpen && (
                        <div className="absolute top-full left-0 bg-[#FAFAFA] border-2 border-black border-t-0 min-w-[220px] shadow-brutal-sm">
                          {item.items.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-4 py-3 font-heading font-bold uppercase text-xs tracking-wider hover:bg-[#FF4500] hover:text-white transition-colors border-b border-black/10 last:border-b-0"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3 py-2 font-heading font-bold uppercase text-xs tracking-wider hover:bg-black hover:text-white transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center gap-1.5 bg-[#FF4500] text-white font-heading font-bold uppercase text-xs tracking-wider border-2 border-black px-3 py-2 hover:bg-black hover:-translate-y-0.5 hover:shadow-brutal-sm transition-all whitespace-nowrap"
            >
              <FileText size={13} strokeWidth={2.5} /> OFFERTE
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 grid place-items-center border-2 border-black bg-black text-white"
            aria-label={open ? "Sluit menu" : "Open menu"}
            data-testid="mobile-menu-btn"
          >
            {open ? <X size={18} strokeWidth={3} /> : <Menu size={18} strokeWidth={3} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="lg:hidden border-t-2 border-black py-4 space-y-1">
            {allMobileLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 font-heading font-bold uppercase text-sm tracking-wider hover:bg-[#FF4500] hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 font-heading font-bold uppercase text-sm tracking-wider bg-[#FF4500] text-white border-2 border-black mt-2 text-center"
            >
              OFFERTE AANVRAGEN
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
