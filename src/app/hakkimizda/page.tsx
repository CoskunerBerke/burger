"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, ShieldAlert, Award, Heart } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function AboutUsPage() {
  const values = [
    {
      icon: <Flame className="text-carnivoor-red" size={24} />,
      title: "Yüksek Ateş Kültürü",
      desc: "Smash köftelerimizi döküm ızgara üzerinde çok yüksek derecede mühürleyerek pişiriyoruz. Bu sayede etin tüm lezzetli suları içeride kalıyor."
    },
    {
      icon: <ShieldAlert className="text-carnivoor-yellow" size={24} />,
      title: "Sıfır Dondurulmuş Et",
      desc: "Mutfağımıza giren her kıyma günlük olarak yerli üreticilerden taze temin edilir. Asla dondurulmuş veya fabrikasyon köfte kullanmıyoruz."
    },
    {
      icon: <Award className="text-carnivoor-red" size={24} />,
      title: "Seçkin Baharat Harcı",
      desc: "Köftelerimiz ve patateslerimiz için kullandığımız baharat harçları, Londra'nın sokak lezzetlerinden ilham alınarak Carnivoor'a özel harmanlanmıştır."
    },
    {
      icon: <Heart className="text-carnivoor-yellow" size={24} />,
      title: "Katkısız Ekmekler",
      desc: "Burgerlerimizde kullanılan brioche ekmeklerimiz, katkı maddesi içermeyen özel fırın reçetemizle günlük olarak pişirilir."
    }
  ];

  return (
    <div className="py-12 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-[30%] left-[-15%] w-[45vw] h-[45vw] bg-carnivoor-red/10 rounded-full blur-[110px] ambient-ember pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intro header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h1 className="text-xs font-bold tracking-widest text-carnivoor-red uppercase mb-3">
            Hikayemiz
          </h1>
          <p className="text-3xl sm:text-5xl font-extrabold uppercase text-white font-display">
            Biz Kimiz?
          </p>
          <p className="text-xs text-carnivoor-cream/50 mt-3 font-light">
            {"Ankara'nın yeni nesil sokak lezzetleri temsilcisi Carnivoor'un kuruluş felsefesi."}
          </p>
        </div>

        {/* Text and visual grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-white font-display">
              {"Londra Sokaklarından Ankara Alaçatı Çarşısı'na"}
            </h2>
            <p className="text-sm text-carnivoor-cream/70 leading-relaxed font-light">
              Carnivoor Türkiye, global sokak lezzetleri kültürünü ülkemizin kaliteli ve taze yerel malzemeleriyle bir araya getirmek amacıyla kuruldu. İsmini etobur kültürün lezzet tutkusundan alan markamız, ilk günden itibaren ızgara ateşinin doğallığına sadık kalmıştır.
            </p>
            <p className="text-sm text-carnivoor-cream/70 leading-relaxed font-light">
              {"Ankara Çankaya'da Sinpaş Ege Vadisi Alaçatı Çarşısı bünyesinde kapılarını açan restoranımızda, fast-food kalıplarını yıkarak \"fast-casual\" yani hızlı ama üst düzey kalitede yemek deneyimi sunuyoruz. Dondurucuların bulunmadığı mutfağımızda her şey günlük, anlık ve sipariş üzerine sıcacık pişer."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative h-96 rounded-3xl overflow-hidden premium-card"
          >
            <Image
              src="/images/hero-carnivoor.jpg"
              alt="Carnivoor Mutfak Aşkı"
              fill
              className="object-cover brightness-[0.4]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carnivoor-black/80 via-transparent to-transparent"></div>
          </motion.div>
        </div>

        {/* Brand Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-xs font-bold tracking-widest text-carnivoor-yellow uppercase mb-2">
              Bizi Farklı Kılan Nedir?
            </h3>
            <p className="text-2xl sm:text-3xl font-extrabold uppercase text-white font-display">
              Temel Değerlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="premium-card p-8 rounded-2xl border border-carnivoor-smoked"
              >
                <div className="w-12 h-12 rounded-xl bg-carnivoor-smoked border border-carnivoor-cream/5 flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-3 font-display uppercase">
                  {v.title}
                </h4>
                <p className="text-xs text-carnivoor-cream/60 leading-relaxed font-light">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom banner block */}
        <div className="premium-card p-8 sm:p-12 rounded-3xl text-center space-y-6 max-w-4xl mx-auto border border-carnivoor-red/10 bg-gradient-to-r from-carnivoor-black to-carnivoor-smoked relative overflow-hidden">
          <div className="absolute inset-0 bg-carnivoor-red/5 pointer-events-none"></div>
          <Flame className="text-carnivoor-red mx-auto animate-bounce" size={32} />
          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white font-display">
            Ateş Üstündeki Lezzetleri Keşfet
          </h3>
          <p className="text-xs text-carnivoor-cream/70 max-w-xl mx-auto font-light leading-relaxed">
            Menümüzü inceleyip size en yakın sokak lezzeti deneyimini keşfedebilir, telefonla siparişinizi hemen iletebilirsiniz.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="w-full sm:w-auto bg-carnivoor-red hover:bg-carnivoor-red/80 text-white px-8 py-3.5 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300"
            >
              Menüyü Gör
            </Link>
            <a
              href={siteConfig.phoneLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-carnivoor-cream/20 hover:border-carnivoor-yellow hover:text-carnivoor-yellow text-carnivoor-cream px-8 py-3.5 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300"
            >
              Şubeyi Ara
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
