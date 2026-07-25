import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone, ShieldAlert, Check } from "lucide-react";
import { menuItems } from "@/data/menu";
import { siteConfig } from "@/data/site-config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const item = menuItems.find((m) => m.slug === resolvedParams.slug && m.verified);

  if (!item) {
    return {
      title: "Ürün Bulunamadı",
    };
  }

  return {
    title: item.name,
    description: item.description || `${item.name} lezzeti Carnivoor Türkiye'de.`,
    openGraph: {
      title: `${item.name} | Carnivoor Burger Ankara`,
      description: item.description || `${item.name} lezzeti.`,
      images: [
        {
          url: item.image,
          alt: item.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const item = menuItems.find((m) => m.slug === resolvedParams.slug && m.verified);

  if (!item) {
    notFound();
  }

  // Schema Markup
  const menuItemSchema = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    "name": item.name,
    "description": item.description,
    "image": `${siteConfig.seo.canonicalUrl}${item.image}`,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "TRY",
      "price": item.price || "0.00",
      "availability": item.available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Restaurant",
        "name": siteConfig.brandName,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.addressDetails
        }
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": siteConfig.seo.canonicalUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Menü",
        "item": `${siteConfig.seo.canonicalUrl}/menu`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": item.name,
        "item": `${siteConfig.seo.canonicalUrl}/menu/${item.slug}`
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-xs font-bold text-carnivoor-cream/70 hover:text-carnivoor-red uppercase tracking-wider transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Menüye Dön</span>
        </Link>
      </div>

      {/* Main product view */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Col: Image */}
        <div className="lg:col-span-6 relative h-96 sm:h-[450px] rounded-3xl overflow-hidden premium-card border border-carnivoor-smoked">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {!item.available && (
            <div className="absolute inset-0 bg-black/75 flex items-center justify-center">
              <span className="text-white text-sm font-bold uppercase tracking-widest border border-white/20 px-6 py-3 rounded-lg">
                Tükendi
              </span>
            </div>
          )}
        </div>

        {/* Right Col: Info details */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-bold text-carnivoor-yellow uppercase tracking-widest">
              {item.category === "burger"
                ? "Smash Burger"
                : item.category === "wing"
                ? "Tavuk Kanat"
                : item.category === "meatball"
                ? "Köfte"
                : item.category === "side"
                ? "Yan Ürün & Tatlı"
                : item.category === "drink"
                ? "Soğuk İçecek"
                : "Premium Milkshake"}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold uppercase text-white font-display mt-2">
              {item.name}
            </h1>
            
            {/* Price section - only render if verified (we set price: undefined by default in config) */}
            {item.price && (
              <p className="text-2xl font-extrabold text-carnivoor-red mt-4 font-display">
                ₺{item.price.toFixed(2)}
              </p>
            )}
          </div>

          <p className="text-sm text-carnivoor-cream/80 leading-relaxed font-light">
            {item.description}
          </p>

          {/* Ingredients list */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div className="space-y-3 border-t border-carnivoor-smoked pt-6">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                İçindekiler
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-carnivoor-smoked text-carnivoor-cream/90 text-xs px-3.5 py-2 rounded-xl border border-carnivoor-cream/5"
                  >
                    <Check size={12} className="text-carnivoor-red" />
                    <span>{ing}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Order Section CTA */}
          <div className="border-t border-carnivoor-smoked pt-6 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest">
              Sipariş Hattı
            </h3>
            <p className="text-xs text-carnivoor-cream/50 leading-relaxed font-light">
              Tüm lezzetlerimiz sıcak sıcak pişirilip servis edilir. Telefonla sipariş vermek için hemen şubemizi arayın.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href={siteConfig.phoneLink}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 bg-carnivoor-red hover:bg-carnivoor-red/80 text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-xl shadow-carnivoor-red/20"
              >
                <Phone size={16} className="animate-pulse" />
                <span>{siteConfig.phone}</span>
              </a>
              <Link
                href="/iletisim"
                className="w-full sm:w-auto inline-flex items-center justify-center border border-carnivoor-cream/20 hover:border-carnivoor-yellow hover:text-carnivoor-yellow text-carnivoor-cream px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300"
              >
                Şubeyi Haritada Gör
              </Link>
            </div>
          </div>

          {/* Warning box */}
          <div className="bg-carnivoor-smoked/20 border border-carnivoor-yellow/10 rounded-2xl p-4 flex items-start gap-3">
            <ShieldAlert className="text-carnivoor-yellow shrink-0 mt-0.5" size={18} />
            <p className="text-[11px] text-carnivoor-cream/50 leading-relaxed font-light">
              İşletmemiz gıda hassasiyetlerine saygı göstermektedir. Alerjen hassasiyetleriniz veya ürün bileşenleri hakkında detaylı bilgi edinmek için siparişiniz öncesinde lütfen ekibimizi bilgilendirin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for build time optimization (SSG)
export async function generateStaticParams() {
  // Only generate paths for verified menu items
  return menuItems
    .filter((item) => item.verified)
    .map((item) => ({
      slug: item.slug,
    }));
}
