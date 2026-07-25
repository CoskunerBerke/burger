import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookiePolicyPage() {
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
          Çerez Politikası
        </h1>

        <p className="text-xs text-carnivoor-cream/50">Son Güncelleme: 25 Temmuz 2026</p>

        <section className="space-y-3">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">1. Çerez Nedir?</h2>
          <p className="text-xs text-carnivoor-cream/70 leading-relaxed font-light">
            Çerezler, bir web sitesini ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır. Sitenin düzgün çalışması ve tercihlerinize uygun şekilde kişiselleştirilmiş bir gezinti sunması için kullanılır.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">2. Kullandığımız Çerez Türleri</h2>
          <p className="text-xs text-carnivoor-cream/70 leading-relaxed font-light">
            Sitemizde yalnızca işlevsel çerezler (örn. gezinme tercihlerinizi ve oturum bilgilerini tutan) ile performans analiz çerezleri (ziyaret sayısını ölçen anonim veriler) kullanılmaktadır. Reklam veya izleme amaçlı üçüncü taraf hedefleme çerezleri barındırılmamaktadır.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">3. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
          <p className="text-xs text-carnivoor-cream/70 leading-relaxed font-light">
            Tarayıcınızın ayarlar bölümüne giderek çerezleri tamamen engelleyebilir, sınırlandırabilir ya da kaydedilmiş mevcut çerezleri temizleyebilirsiniz. Çerezlerin engellenmesi web sitemizin bazı fonksiyonlarının düzgün çalışmasını engelleyebilir.
          </p>
        </section>
      </div>
    </div>
  );
}
