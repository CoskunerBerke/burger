import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-carnivoor-cream/70 hover:text-carnivoor-red uppercase tracking-wider transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Ana Sayfaya Dön</span>
        </Link>
      </div>

      <div className="premium-card p-8 sm:p-12 rounded-3xl border border-carnivoor-smoked prose prose-invert prose-sm max-w-none space-y-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wider font-display border-b border-carnivoor-smoked pb-4">
          Gizlilik Politikası
        </h1>

        <p className="text-xs text-carnivoor-cream/50">Son Güncelleme: 25 Temmuz 2026</p>

        <section className="space-y-3">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">1. Veri Güvenliği</h2>
          <p className="text-xs text-carnivoor-cream/70 leading-relaxed font-light">
            Carnivoor Türkiye olarak ziyaretçilerimizin gizliliğini korumak en temel önceliğimizdir. Web sitemiz, kullanıcı bilgilerinin güvenliği için güncel teknik standartlar çerçevesinde şifrelenmiştir ve güvenli sunucularda barındırılmaktadır.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">2. Toplanan Bilgiler</h2>
          <p className="text-xs text-carnivoor-cream/70 leading-relaxed font-light">
            Sadece bizimle gönüllü olarak iletişime geçmek amacıyla doldurduğunuz formlar ve site içi gezinme deneyimini iyileştirmek amacıyla kullanılan anonim çerez istatistikleri kaydedilmektedir.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">3. Üçüncü Taraf Bağlantıları</h2>
          <p className="text-xs text-carnivoor-cream/70 leading-relaxed font-light">
            Web sitemiz içerisinde Instagram, Google Haritalar gibi harici platformların bağlantıları bulunmaktadır. Bu sitelerin kendilerine özgü gizlilik politikalarından Carnivoor sorumlu değildir.
          </p>
        </section>
      </div>
    </div>
  );
}
