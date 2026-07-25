export type MenuItem = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  category: "burger" | "wing" | "meatball" | "side" | "milkshake" | "drink";
  price?: number;
  image: string;
  ingredients?: string[];
  allergens?: string[];
  available: boolean;
  featured: boolean;
  verified: boolean;
};

export const menuItems: MenuItem[] = [
  {
    id: "smash-burger",
    slug: "smash-burger",
    name: "Carnivoor Smash Burger",
    description: "Özel harçla smashlenmiş köfte, erimiş cheddar peyniri, karamelize soğan, çıtır turşu ve özel ev yapımı burger sosumuz eşliğinde premium hamburger ekmeği arasında.",
    category: "burger",
    price: undefined, // Fiyat doğrulanmadığı için boş bırakılmıştır
    image: "/menu/smash-burger.jpg",
    ingredients: ["120g Smash Köfte", "Cheddar Peyniri", "Karamelize Soğan", "Ev Yapımı Turşu", "Özel Burger Sosu", "Hamburger Ekmeği"],
    allergens: undefined, // Alerjen bilgisi doğrulanmadığı için tahmin edilmeyip boş bırakılmıştır
    available: true,
    featured: true,
    verified: true,
  },
  {
    id: "ekmek-arasi-kofte",
    slug: "ekmek-arasi-kofte",
    name: "Ekmek Arası Geleneksel Köfte",
    description: "Izgara ateşinde pişirilmiş sulu köfteler, közlenmiş taze biber, domates dilimleri ve ince kıyılmış yeşillikler ile taze çıtır ekmek arasında.",
    category: "meatball",
    price: undefined,
    image: "/menu/ekmek-arasi-kofte.jpg",
    ingredients: ["Izgara Köfte", "Közlenmiş Biber", "Domates Dilimleri", "Maydanoz & Yeşillik", "Taze Ekmek"],
    allergens: undefined,
    available: true,
    featured: true,
    verified: true,
  },
  {
    id: "imza-kofte",
    slug: "imza-kofte",
    name: "Carnivoor İmza Porsiyon Köfte",
    description: "Özel baharatlarla marine edilmiş ızgara köfteler, yanında közlenmiş domates, biber ve sıcak lavaş ile servis edilir.",
    category: "meatball",
    price: undefined,
    image: "/menu/imza-kofte.jpg",
    ingredients: ["İmza Izgara Köfteleri", "Köz Biber", "Köz Domates", "Lavaş"],
    allergens: undefined,
    available: true,
    featured: false,
    verified: true,
  },
  {
    id: "citir-tavuk-kanat",
    slug: "citir-tavuk-kanat",
    name: "Alevde Çıtır Tavuk Kanat",
    description: "Izgara ateşinde nar gibi kızarmış, dışı çıtır, içi sulu marine tavuk kanatları.",
    category: "wing",
    price: undefined,
    image: "/menu/citir-tavuk-kanat.jpg",
    ingredients: ["Marine Edilmiş Tavuk Kanatları", "Baharat Karışımı"],
    allergens: undefined,
    available: true,
    featured: true,
    verified: true,
  },
  {
    id: "premium-milkshake",
    slug: "premium-milkshake",
    name: "Premium Çikolatalı Milkshake",
    description: "Yoğun ev yapımı çikolatalı dondurma, soğuk süt ve tatlı kremanın buz gibi karışımı.",
    category: "milkshake",
    price: undefined,
    image: "/menu/milkshake-chocolate.jpg",
    ingredients: ["Çikolatalı Dondurma", "Soğuk Süt", "Krema", "Çikolata Sosu"],
    allergens: undefined,
    available: true,
    featured: true,
    verified: true,
  },
  {
    id: "findikli-sutlac",
    slug: "findikli-sutlac",
    name: "Tarçınlı ve Kavrulmuş Fındıklı Sütlaç",
    description: "Fırınlanmış geleneksel sütlaç, üzerinde bol miktarda kıtır kavrulmuş fındık parçaları ve mis kokulu tarçın ile.",
    category: "side",
    price: undefined,
    image: "/menu/sutlac.jpg",
    ingredients: ["Süt", "Pirinç", "Şeker", "Kavrulmuş Karadeniz Fındığı", "Tarçın"],
    allergens: undefined,
    available: true,
    featured: false,
    verified: true,
  },
  {
    id: "baharatli-patates",
    slug: "baharatli-patates",
    name: "Baharatlı Patates Kızartması",
    description: "Altın sarısı çıtır patates kızartması, özel Carnivoor baharat harcı ile harmanlanmış.",
    category: "side",
    price: undefined,
    image: "/menu/patates-kizartmasi.jpg",
    ingredients: ["Dilim Patates", "Carnivoor Baharat Karışımı"],
    allergens: undefined,
    available: true,
    featured: false,
    verified: true,
  },
  {
    id: "kutu-icecekler",
    slug: "kutu-icecekler",
    name: "Soğuk Kutu İçecekler",
    description: "Kutu kola, fanta, gazoz veya soğuk çay çeşitleri.",
    category: "drink",
    price: undefined,
    image: "/menu/drinks.jpg",
    available: true,
    featured: false,
    verified: true,
  }
];
