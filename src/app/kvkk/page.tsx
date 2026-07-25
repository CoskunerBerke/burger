import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function KvkkPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link
          href="/iletisim"
          className="inline-flex items-center gap-2 text-xs font-bold text-carnivoor-cream/70 hover:text-carnivoor-red uppercase tracking-wider transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Geri Dön</span>
        </Link>
      </div>

      <div className="premium-card p-8 sm:p-12 rounded-3xl border border-carnivoor-smoked prose prose-invert prose-sm max-w-none space-y-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wider font-display border-b border-carnivoor-smoked pb-4">
          KVKK Aydınlatma Metni
        </h1>

        <p className="text-xs text-carnivoor-cream/50">Son Güncelleme: 25 Temmuz 2026</p>

        <section className="space-y-3">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">1. Veri Sorumlusu</h2>
          <p className="text-xs text-carnivoor-cream/70 leading-relaxed font-light">
            6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, kişisel verileriniz; veri sorumlusu olarak Carnivoor Gıda Turizm Organizasyon Ticaret Limited Şirketi (“Carnivoor”) tarafından aşağıda açıklanan kapsamda işlenebilecektir.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">2. Kişisel Verilerin İşlenme Amacı</h2>
          <p className="text-xs text-carnivoor-cream/70 leading-relaxed font-light">
            Toplanan kişisel verileriniz, Carnivoor tarafından sunulan sokak lezzetleri ve restoran hizmetlerinden faydalanabilmeniz, rezervasyon veya telefonla sipariş süreçlerinin yönetimi, memnuniyet analizleri ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">3. İşlenen Kişisel Veriler</h2>
          <p className="text-xs text-carnivoor-cream/70 leading-relaxed font-light">
            Bizimle iletişime geçtiğinizde veya sipariş verdiğinizde işlenen verileriniz; ad soyad, iletişim bilgileri (telefon numarası, e-posta adresi), adres bilgisi ve talep ettiğiniz sipariş detaylarından ibarettir.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">4. Veri Aktarımı</h2>
          <p className="text-xs text-carnivoor-cream/70 leading-relaxed font-light">
            Kişisel verileriniz üçüncü şahıslara veya şirket dışı yapılara ticari amaçlarla satılmamaktadır. Veriler yalnızca yasal zorunluluklar halinde adli mercilerle paylaşılabilecektir.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">5. Kanuni Haklarınız</h2>
          <p className="text-xs text-carnivoor-cream/70 leading-relaxed font-light">
            {"KVKK'nın 11. maddesi kapsamında, veri sorumlusuna başvurarak kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, silinmesini veya düzeltilmesini talep etme haklarına sahipsiniz."}
          </p>
        </section>
      </div>
    </div>
  );
}
