"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, AlertTriangle, RefreshCw } from "lucide-react";
import { menuItems } from "@/data/menu";

function MenuPageContent() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat");

  // Category listing
  const categories = [
    { id: "all", name: "Tümü" },
    { id: "burger", name: "Burgerler" },
    { id: "wing", name: "Kanatlar" },
    { id: "meatball", name: "Köfteler" },
    { id: "side", name: "Yan Ürünler & Tatlılar" },
    { id: "drink", name: "İçecekler" },
    { id: "milkshake", name: "Milkshakeler" },
  ];

  // Initialize selectedCategory directly from the search parameter if found
  const initialCategory = catParam && categories.some(c => c.id === catParam) ? catParam : "all";
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Calculate filteredItems on rendering (derived state)
  let filteredItems = menuItems.filter((item) => item.verified);

  if (selectedCategory !== "all") {
    filteredItems = filteredItems.filter((item) => item.category === selectedCategory);
  }

  if (searchQuery.trim() !== "") {
    const query = searchQuery.toLowerCase();
    filteredItems = filteredItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query))
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Intro header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <h1 className="text-xs font-bold tracking-widest text-carnivoor-red uppercase mb-3">
          Sokak Lezzetleri
        </h1>
        <p className="text-3xl sm:text-5xl font-extrabold uppercase text-white font-display">
          Ateş Üstü Menümüz
        </p>
        <p className="text-xs text-carnivoor-cream/50 mt-3 font-light">
          Tüm hamburger köftelerimiz günlük olarak hazırlanır ve yüksek dereceli döküm ızgarada pişirilir.
        </p>
      </div>

      {/* Search & Categories Bar */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
        {/* Horizontal Category Scroller */}
        <div className="w-full lg:w-auto overflow-x-auto no-scrollbar flex items-center gap-2 pb-2 lg:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 ${
                selectedCategory === cat.id
                  ? "bg-carnivoor-red text-white shadow-lg shadow-carnivoor-red/20 scale-105"
                  : "bg-carnivoor-smoked text-carnivoor-cream/70 hover:bg-carnivoor-smoked/80 hover:text-white border border-carnivoor-cream/5"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search input field */}
        <div className="relative w-full lg:max-w-xs shrink-0">
          <input
            type="text"
            placeholder="Lezzet ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-carnivoor-smoked border border-carnivoor-cream/10 rounded-full px-5 py-3 pl-12 text-sm text-carnivoor-cream placeholder-carnivoor-cream/40 focus:outline-none focus:border-carnivoor-red focus:ring-1 focus:ring-carnivoor-red transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-carnivoor-cream/40" size={18} />
        </div>
      </div>

      {/* Menu list grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="premium-card rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-carnivoor-smoked">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {!item.available && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                      <span className="text-white text-xs font-bold uppercase tracking-widest border border-white/20 px-4 py-2 rounded-lg">
                        Tükendi
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-carnivoor-yellow font-bold uppercase tracking-widest">
                      {item.category === "burger"
                        ? "Smash Burger"
                        : item.category === "wing"
                        ? "Tavuk Kanat"
                        : item.category === "meatball"
                        ? "Köfte"
                        : item.category === "side"
                        ? "Yan Ürün"
                        : item.category === "drink"
                        ? "İçecek"
                        : "Milkshake"}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-carnivoor-cream/65 leading-relaxed font-light line-clamp-2">
                    {item.description || "En taze ve kaliteli malzemelerle hazırlanan lezzetlerimiz."}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href={`/menu/${item.slug}`}
                  className="w-full text-center block bg-carnivoor-smoked hover:bg-carnivoor-red text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300"
                >
                  İncele / Detaylar
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-carnivoor-smoked/20 rounded-2xl border border-carnivoor-smoked max-w-md mx-auto">
          <p className="text-carnivoor-cream/60 text-sm font-light">
            Aradığınız kriterlere uygun lezzet bulunamadı.
          </p>
        </div>
      )}

      {/* Allergen Warning Box */}
      <div className="mt-16 bg-carnivoor-smoked/30 border border-carnivoor-yellow/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto">
        <AlertTriangle className="text-carnivoor-yellow shrink-0" size={28} />
        <p className="text-xs text-carnivoor-cream/60 leading-relaxed font-light text-center sm:text-left">
          <strong>Alerjen Uyarısı:</strong> Alerjenler ve ürün içerikleri hakkında güncel bilgi almak için lütfen sipariş vermeden önce işletmemizle iletişime geçiniz.
        </p>
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <Suspense fallback={
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin text-carnivoor-red">
          <RefreshCw size={32} />
        </div>
      </div>
    }>
      <MenuPageContent />
    </Suspense>
  );
}
