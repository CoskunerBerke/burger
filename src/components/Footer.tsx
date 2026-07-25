import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site-config";

function InstagramIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-instagram ${className || ""}`}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-carnivoor-black border-t border-carnivoor-smoked text-carnivoor-cream/80 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block relative w-48 h-12">
              <Image
                src="/brand/logo-light.svg"
                alt="Carnivoor Logo"
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-carnivoor-cream/60 leading-relaxed font-light">
              {"Sinpaş Ege Vadisi Alaçatı Çarşısı'nda yüksek ateşte ızgaralanmış premium burgerler, çıtır kanatlar, geleneksel köfteler ve serinletici milkshake lezzetleri."}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-widest uppercase border-l-2 border-carnivoor-red pl-3">
              Keşfet
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-carnivoor-red transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-carnivoor-red transition-colors">
                  Menümüz
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-carnivoor-red transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-carnivoor-red transition-colors">
                  Hakkımızda
                </Link>
              </li>
            </ul>
          </div>

          {/* Communication Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-widest uppercase border-l-2 border-carnivoor-red pl-3">
              İletişim
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-carnivoor-red shrink-0 mt-0.5" />
                <a href={siteConfig.phoneLink} className="hover:text-carnivoor-red transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-carnivoor-red shrink-0 mt-0.5" />
                <span className="text-carnivoor-cream/60 leading-relaxed">
                  {siteConfig.address}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <InstagramIcon size={16} className="text-carnivoor-red shrink-0 mt-0.5" />
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-carnivoor-red transition-colors"
                >
                  @carnivoorturkiye
                </a>
              </li>
            </ul>
          </div>

          {/* Location / Operating Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-widest uppercase border-l-2 border-carnivoor-red pl-3">
              Çalışma Saatleri
            </h3>
            <p className="text-sm text-carnivoor-cream/60 leading-relaxed font-light">
              Çalışma saatleri ve güncel şube bilgisi doğrulaması için lütfen bizimle iletişime geçiniz.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-carnivoor-yellow/30 hover:border-carnivoor-yellow hover:text-carnivoor-yellow text-carnivoor-cream/80 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300"
              >
                <MapPin size={12} />
                <span>Yol Tarifi Al</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-carnivoor-smoked my-10"></div>

        {/* Bottom Area */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-carnivoor-cream/50">
          <p>© {currentYear} {siteConfig.brandName} Türkiye. Tüm Hakları Saklıdır.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/kvkk" className="hover:text-carnivoor-red transition-colors">
              KVKK Metni
            </Link>
            <Link href="/gizlilik-politikasi" className="hover:text-carnivoor-red transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/cerez-politikasi" className="hover:text-carnivoor-red transition-colors">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
