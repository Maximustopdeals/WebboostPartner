import type { Metadata } from "next";
import { Outfit, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webboostpartner.nl"),
  
  title: {
    default: "WebBoost Partner | Next.js Websites Rotterdam die scoren in Google",
    template: "%s | WebBoost Partner",
  },
  description:
    "Website laten maken in Rotterdam? WebBoost Partner bouwt razendsnelle Next.js websites die beter scoren in Google dan WordPress. Lokaal, eerlijk, no-nonsense.",
  keywords: [
    "website laten maken Rotterdam",
    "Next.js webbouwer",
    "SEO Rotterdam",
    "WordPress alternatief",
    "Core Web Vitals",
    "snelle website Rotterdam",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://webboostpartner.nl",
    siteName: "WebBoost Partner",
    title: "WebBoost Partner | Next.js Websites Rotterdam",
    description:
      "Razendsnelle Next.js websites voor ondernemers in Rotterdam en omgeving.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://webboostpartner.nl" },
  verification: {
    google: "OjFfp_u3mWFOSFreofiGa1Pz4fgKv1h8X_xHCbr1l7Y",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WebBoost Partner",
    image: "https://webboostpartner.nl/og.jpg",
    "@id": "https://webboostpartner.nl",
    url: "https://webboostpartner.nl",
    telephone: "+31642628242",
    email: "info@webboostpartner.nl",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rotterdam",
      addressCountry: "NL",
    },
    areaServed: [
      "Rotterdam",
      "Capelle aan den IJssel",
      "Krimpen aan den IJssel",
      "Ridderkerk",
      "Barendrecht",
      "Schiedam",
    ],
  };

  return (
    <html lang="nl" className={`${outfit.variable} ${ibmPlex.variable} ${ibmMono.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23FF4500'/%3E%3Cpath d='M55 20L35 55H50L45 80L70 45H55L60 20H55Z' fill='white'/%3E%3C/svg%3E" type="image/svg+xml" />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PSM987PS');`}
        </Script>
      </head>
      <body>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSM987PS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L8ZWH28FVR"
          strategy="afterInteractive"
        />
        <Script id="ga4-script" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-L8ZWH28FVR');`}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
