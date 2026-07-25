"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MapPin, ChevronRight, Flame, Compass } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { menuItems } from "@/data/menu";
import { galleryItems } from "@/data/gallery";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, duration: 0.8 } },
};

export default function Home() {
  // Filter featured menu items (verified only)
  const featuredItems = menuItems.filter((item) => item.featured && item.verified);

  const categories = [
    { name: "Burgerler", slug: "burger", desc: "Smash köfte ve bol cheddar", image: "/menu/smash-burger.jpg" },
    { name: "Kanatlar", slug: "wing", desc: "Alevde pişen çıtır kanatlar", image: "/menu/citir-tavuk-kanat.jpg" },
    { name: "Köfteler", slug: "meatball", desc: "Geleneksel ve imza köfteler", image: "/menu/ekmek-arasi-kofte.jpg" },
    { name: "Milkshake & Tatlı", slug: "milkshake", desc: "Yoğun kıvamlı serin lezzetler", image: "/menu/milkshake-chocolate.jpg" },
  ];

  return (
    <div className="relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-carnivoor-red/10 rounded-full blur-[100px] ambient-ember pointer-events-none z-0"></div>
      <div className="absolute top-[60%] right-[-10%] w-[35vw] h-[35vw] bg-carnivoor-yellow/5 rounded-full blur-[120px] ambient-ember pointer-events-none z-0"></div>

      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12">
        {/* Cinematic Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-carnivoor.jpg"
            alt="Carnivoor Burger Izgara Ateşi"
            fill
            className="object-cover object-center brightness-[0.25]"
            priority
          />
          {/* Gradients to blend image */}
          <div className="absolute inset-0 bg-gradient-to-t from-carnivoor-black via-transparent to-carnivoor-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-carnivoor-black/90 via-transparent to-carnivoor-black/90"></div>
        </div>

        {/* Smoke overlay effect */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(11,11,11,0)_0%,rgba(11,11,11,0.8)_85%)] pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-carnivoor-smoked border border-carnivoor-red/20 mb-6"
          >
            <Flame size={14} className="text-carnivoor-red animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-carnivoor-cream uppercase">
              BURGER • KANAT • KÖFTE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase font-display"
          >
            ATEŞİ YÜKSEK.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-carnivoor-red via-carnivoor-yellow to-carnivoor-red">
              LEZZETİ DAHA YÜKSEK.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-carnivoor-cream/70 font-light leading-relaxed mb-10"
          >
            {"Sinpaş Ege Vadisi Alaçatı Çarşısı'nda yüksek ateşte pişen bol malzemeli burgerler, çıtır tavuk kanatları, köfteler ve serinletici milkshake lezzetleri."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/menu"
              className="w-full sm:w-auto bg-carnivoor-red hover:bg-carnivoor-red/80 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-xl shadow-carnivoor-red/20"
            >
              Menüyü Keşfet
            </Link>
            <a
              href={siteConfig.phoneLink}
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-carnivoor-cream/20 hover:border-carnivoor-red hover:text-carnivoor-red bg-carnivoor-smoked/40 text-carnivoor-cream px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300"
            >
              <Phone size={16} />
              <span>Bizi Ara</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Menu Categories */}
      <section className="py-20 bg-carnivoor-black relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-carnivoor-red uppercase mb-3">
              Lezzet Grupları
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold uppercase text-white font-display">
              Menü Kategorileri
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <Link key={cat.slug} href={`/menu?cat=${cat.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer premium-card border border-carnivoor-smoked"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 brightness-[0.4] group-hover:brightness-[0.3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-carnivoor-black via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white uppercase group-hover:text-carnivoor-yellow transition-colors font-display">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-carnivoor-cream/50 mt-1 font-light flex items-center gap-1 group-hover:text-carnivoor-cream transition-colors">
                      <span>{cat.desc}</span>
                      <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Eats */}
      <section className="py-20 bg-carnivoor-smoked/30 border-y border-carnivoor-smoked relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-carnivoor-red uppercase mb-3">
                Şefin Tercihleri
              </h2>
              <p className="text-3xl sm:text-4xl font-extrabold uppercase text-white font-display">
                Öne Çıkan Lezzetler
              </p>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center gap-1 text-sm font-bold text-carnivoor-yellow hover:text-carnivoor-red tracking-wider uppercase transition-colors"
            >
              <span>Tümünü Gör</span>
              <ChevronRight size={16} />
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="premium-card rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-carnivoor-red text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                      Popüler
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] text-carnivoor-yellow font-bold uppercase tracking-widest">
                      {item.category === "burger" ? "Smash Burger" : item.category === "wing" ? "Tavuk Kanat" : item.category === "meatball" ? "Köfte" : "Milkshake"}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 mb-2 font-display line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-carnivoor-cream/65 leading-relaxed font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={`/menu/${item.slug}`}
                    className="w-full text-center block bg-carnivoor-smoked hover:bg-carnivoor-red text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300"
                  >
                    İncele
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Grill & Flame Story */}
      <section className="py-24 bg-carnivoor-black relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Box */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative h-96 sm:h-[450px] rounded-2xl overflow-hidden premium-card border border-carnivoor-smoked"
            >
              <Image
                src="/images/grill-flame.jpg"
                alt="Grill Flame Embers"
                fill
                className="object-cover brightness-[0.4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carnivoor-black/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-carnivoor-red/20 border border-carnivoor-red/40 flex items-center justify-center mb-4">
                  <Flame className="text-carnivoor-red animate-pulse" size={28} />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-wide text-white font-display">
                  Sıcak Kömür Ateşi
                </h4>
                <p className="text-xs text-carnivoor-cream/55 mt-2 max-w-xs font-light">
                  Alev ve dumanın buluştuğu noktada etlerin özsuyunu koruyan mühürleme tekniği.
                </p>
              </div>
            </motion.div>

            {/* Text Box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs font-bold text-carnivoor-red uppercase tracking-widest border-b border-carnivoor-red/30 pb-1">
                Biz Kimiz?
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white font-display leading-tight">
                ATEŞLE YAZILAN<br />
                LEZZET HİKAYESİ
              </h2>
              <p className="text-sm text-carnivoor-cream/70 leading-relaxed font-light">
                Carnivoor Türkiye, sokak lezzetlerini premium bir vizyonla yeniden tasarlamak için yola çıktı. Kömür ateşinin o eşsiz kokusunu, sulu ve kıvamında pişmiş smash köftelerle, taptaze baharatlı tavuk kanatlarıyla ve geleneksel imza köftelerimizle buluşturuyoruz.
              </p>
              <p className="text-sm text-carnivoor-cream/70 leading-relaxed font-light">
                Dondurulmuş hiçbir ürüne yer vermediğimiz mutfağımızda, malzemelerin tazeliğine ve sosların özgünlüğüne özen gösteriyoruz. Izgaradaki her dokunuş, iştahınızı zirveye taşımak için özenle planlanır.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/hakkimizda"
                  className="bg-carnivoor-yellow hover:bg-carnivoor-yellow/80 text-carnivoor-black px-6 py-3 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300"
                >
                  Hikayemizi Oku
                </Link>
                <Link
                  href="/menu"
                  className="border border-carnivoor-cream/20 hover:border-carnivoor-yellow hover:text-carnivoor-yellow text-carnivoor-cream px-6 py-3 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300"
                >
                  Ürünleri Keşfet
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Wings Highlight Section */}
      <section className="relative py-24 bg-gradient-to-b from-carnivoor-smoked/20 to-carnivoor-black overflow-hidden z-10">
        <div className="absolute inset-0 bg-carnivoor-red/5 mix-blend-color pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-1 bg-carnivoor-red text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Alevli Lezzetler
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white font-display">
                ÇITIRIN EN ATEŞLİ HALİ
              </h2>
              <p className="text-sm text-carnivoor-cream/70 leading-relaxed font-light">
                {"Carnivoor'un tavuk kanatları, özel ızgara ateşinde dışı nar gibi kızarana kadar pişirilir. Sulu iç dokusu ve alevle tütsülenmiş çıtır lezzetiyle ızgara severlerin favorisi."}
              </p>
              <div className="flex items-center gap-4 text-xs font-bold text-carnivoor-cream">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-carnivoor-red"></span>
                  <span>Taze Marine</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-carnivoor-red"></span>
                  <span>Kömür Ateşinde</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-carnivoor-red"></span>
                  <span>Bol Malzeme</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/menu?cat=wing"
                  className="inline-flex items-center gap-2 bg-carnivoor-red hover:bg-carnivoor-red/80 text-white px-6 py-3 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300"
                >
                  Kanatları Gör
                  <ChevronRight size={14} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-80 sm:h-96 rounded-2xl overflow-hidden premium-card"
            >
              <Image
                src="/menu/citir-tavuk-kanat.jpg"
                alt="Alevde Çıtır Tavuk Kanat"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carnivoor-black/40 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Instagram Masonry Gallery Preview */}
      <section className="py-20 bg-carnivoor-black relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-16 gap-4">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-carnivoor-red uppercase mb-3">
                Bizi Takip Edin
              </h2>
              <p className="text-3xl sm:text-4xl font-extrabold uppercase text-white font-display">
                {"Instagram'da Carnivoor"}
              </p>
            </div>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-carnivoor-smoked border border-carnivoor-cream/10 hover:border-carnivoor-red hover:text-carnivoor-red text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              <span>@carnivoorturkiye</span>
            </a>
          </div>

          {/* Masonry Preview Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="group relative rounded-xl overflow-hidden aspect-square border border-carnivoor-smoked/40 bg-carnivoor-smoked"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-50"
                />
                <a
                  href={item.instagramUrl || siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40"
                >
                  <p className="text-xs text-white text-center px-4 font-light leading-relaxed">
                    {item.caption || "Instagram'da Görüntüle"}
                  </p>
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/galeri"
              className="inline-flex items-center gap-1 text-sm font-bold text-carnivoor-yellow hover:text-carnivoor-red tracking-wider uppercase transition-colors"
            >
              <span>Galeri Sayfasına Git</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Call To Action & Delivery Platform */}
      <section className="py-20 bg-gradient-to-r from-carnivoor-smoked via-carnivoor-black to-carnivoor-smoked border-t border-carnivoor-smoked relative z-10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white font-display">
            İştahını Ateşlemeye Hazır mısın?
          </h2>
          <p className="text-sm text-carnivoor-cream/70 max-w-xl mx-auto font-light leading-relaxed">
            Paket servis veya masaya sipariş vermek için hemen şubemizi arayabilir, en sevdiğin lezzetleri sıcak sıcak teslim alabilirsin.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={siteConfig.phoneLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-carnivoor-red hover:bg-carnivoor-red/80 text-white px-8 py-4 rounded-full font-bold text-lg tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-xl shadow-carnivoor-red/20"
            >
              <Phone size={20} className="animate-pulse" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={siteConfig.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-carnivoor-cream/20 hover:border-carnivoor-yellow hover:text-carnivoor-yellow text-carnivoor-cream px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300"
            >
              <MapPin size={16} />
              <span>Yol Tarifi Al</span>
            </a>
          </div>
          
          <p className="text-[10px] text-carnivoor-cream/40 uppercase tracking-widest pt-2">
            *Online sipariş platformlarımız henüz aktif değildir. Lütfen doğrudan şubemizi arayınız.
          </p>
        </div>
      </section>

      {/* 8. Map and location section */}
      <section className="relative h-96 bg-carnivoor-smoked/40 relative z-10 border-t border-carnivoor-smoked">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.2965415715206!2d32.846500!3d39.852300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDUxJTA4LjMiTiAzMsKwNTAnNDcuNCJF!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
          className="absolute inset-0 w-full h-full border-0 grayscale invert opacity-50 contrast-125 pointer-events-auto"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Carnivoor Google Map"
        ></iframe>
        
        {/* Floating location card */}
        <div className="absolute bottom-6 left-6 right-6 md:left-12 md:right-auto md:w-96 z-20 bg-carnivoor-black/90 backdrop-blur-md p-6 rounded-2xl border border-carnivoor-smoked shadow-2xl">
          <span className="text-[10px] text-carnivoor-red font-bold uppercase tracking-widest">
            Nasıl Gidilir?
          </span>
          <h3 className="text-xl font-bold text-white mt-1 mb-2 font-display uppercase">
            {"Carnivoor'a Gel"}
          </h3>
          <p className="text-xs text-carnivoor-cream/70 font-light leading-relaxed mb-4">
            {siteConfig.addressDetails}
          </p>
          <a
            href={siteConfig.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center inline-flex items-center justify-center gap-2 bg-carnivoor-yellow hover:bg-carnivoor-yellow/80 text-carnivoor-black py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300"
          >
            <Compass size={14} />
            <span>Google Haritalarda Aç</span>
          </a>
        </div>
      </section>
    </div>
  );
}
