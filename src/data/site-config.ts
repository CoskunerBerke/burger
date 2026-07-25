export interface SiteConfig {
  brandName: string;
  slogan: string;
  phone: string;
  phoneLink: string;
  instagram: string;
  address: string;
  addressDetails: string;
  mapsLink: string;
  workingHours: {
    weekdays: string;
    weekends: string;
    verified: boolean;
  };
  deliveryPlatforms: {
    yemeksepeti: string;
    getir: string;
    migros: string;
  };
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    description: string;
    canonicalUrl: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: "Carnivoor",
  slogan: "ATEŞİ YÜKSEK. LEZZETİ DAHA YÜKSEK.",
  phone: "0312 514 14 88",
  phoneLink: "tel:+903125141488",
  instagram: "https://www.instagram.com/carnivoorturkiye/",
  address: "Sinpaş Ege Vadisi Alaçatı Çarşısı, Çankaya / Ankara",
  addressDetails: "Sinpaş Ege Vadisi Alaçatı Çarşısı No: 8, Ankara, Turkey",
  mapsLink: "https://www.google.com/maps/place/Carnivoor+Burger+-+Sinpa%C5%9F+Ege+Vadisi/@39.8553293,32.8443775,19.33z/data=!4m6!3m5!1s0x14d349cccbd5bf17:0x33150e28cd73b66f!8m2!3d39.8553256!4d32.8442752!16s%2Fg%2F11k4xtsyw7?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D",
  workingHours: {
    weekdays: "Çalışma saatleri için iletişime geçiniz",
    weekends: "Çalışma saatleri için iletişime geçiniz",
    verified: false,
  },
  deliveryPlatforms: {
    yemeksepeti: "", // Boş bırakıldı: Doğrulanmış platform bağlantısı bulunmuyor
    getir: "",        // Boş bırakıldı
    migros: "",       // Boş bırakıldı
  },
  seo: {
    defaultTitle: "Carnivoor Burger | Sinpaş Ege Vadisi Ankara",
    titleTemplate: "%s | Carnivoor Burger Ankara",
    description: "Sinpaş Ege Vadisi Alaçatı Çarşısı'nda burger, kanat, köfte ve milkshake lezzetleri. Carnivoor menüsünü keşfedin, yol tarifi alın veya iletişime geçin.",
    canonicalUrl: "https://carnivoor.com.tr", // Vercel veya nihai alan adı buraya yazılacaktır
  }
};
