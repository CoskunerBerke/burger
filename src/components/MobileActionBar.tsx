"use client";

import Link from "next/link";
import { Search, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-carnivoor-black/90 backdrop-blur-md border-t border-carnivoor-smoked py-3 px-4 md:hidden flex items-center justify-between gap-4 safe-bottom-padding shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
      {/* Search Menu */}
      <Link
        href="/menu"
        className="flex-1 flex flex-col items-center justify-center text-carnivoor-cream/70 hover:text-carnivoor-yellow transition-colors py-1"
      >
        <Search size={20} />
        <span className="text-[10px] font-bold tracking-wider uppercase mt-1">Ara</span>
      </Link>

      {/* Yol Tarifi */}
      <a
        href={siteConfig.mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center text-carnivoor-cream/70 hover:text-carnivoor-yellow transition-colors py-1"
      >
        <MapPin size={20} />
        <span className="text-[10px] font-bold tracking-wider uppercase mt-1">Yol Tarifi</span>
      </a>

      {/* Sipariş Ver (Call) */}
      <a
        href={siteConfig.phoneLink}
        className="flex-1 flex flex-col items-center justify-center bg-carnivoor-red text-white py-2 rounded-xl transition-all duration-300 active:scale-95 shadow-md shadow-carnivoor-red/20 font-bold"
      >
        <Phone size={18} className="animate-pulse" />
        <span className="text-[10px] tracking-wider uppercase mt-1 font-extrabold">Ara & Sipariş</span>
      </a>
    </div>
  );
}
