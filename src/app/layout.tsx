import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import { siteConfig } from "@/data/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  metadataBase: new URL(siteConfig.seo.canonicalUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
    url: siteConfig.seo.canonicalUrl,
    siteName: siteConfig.brandName,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Restaurant JSON-LD structured data
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Carnivoor Türkiye",
    "image": `${siteConfig.seo.canonicalUrl}/images/hero-carnivoor.jpg`,
    "priceRange": "$$",
    "telephone": "+903125141488",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.addressDetails,
      "addressLocality": "Çankaya",
      "addressRegion": "Ankara",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.8523",
      "longitude": "32.8465"
    },
    "url": siteConfig.seo.canonicalUrl,
    "menu": `${siteConfig.seo.canonicalUrl}/menu`,
    "sameAs": [
      siteConfig.instagram
    ]
  };

  return (
    <html
      lang="tr"
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <head>
        <link rel="icon" href="/brand/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-carnivoor-black text-carnivoor-cream font-sans rustic-grain">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
