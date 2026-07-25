# Carnivoor Türkiye - Mobil Öncelikli Restoran Web Sitesi

Bu proje, Ankara Sinpaş Ege Vadisi Alaçatı Çarşısı'nda hizmet veren **Carnivoor Türkiye** için özel olarak geliştirilmiş; modern, iştah açıcı, mobil öncelikli ve satış odaklı profesyonel bir restoran web sitesidir.

---

## 🚀 Teknolojik Altyapı

*   **Next.js 16** (App Router, Server & Client Components)
*   **React 19**
*   **TypeScript** (Sıkı tip güvenliği)
*   **Tailwind CSS v4** (Modern ve performanslı stil altyapısı)
*   **Framer Motion** (Akıcı mikro etkileşimler ve animasyonlar)
*   **Lucide Icons** (Vektörel ikon kütüphanesi)

---

## 🛠️ Kurulum ve Çalıştırma

### 1. Bağımlılıkları Yükleyin:
Proje klasöründe aşağıdaki komutla gerekli tüm paketleri yükleyin:
```bash
npm install
```

### 2. Geliştirme Sunucusunu Çalıştırın (Local):
Yerel test sunucusunu başlatmak için:
```bash
npm run dev
```
Tarayıcınızda `http://localhost:3000` adresini açarak projeyi görüntüleyebilirsiniz.

### 3. Production Derleme (Build):
Canlıya çıkış öncesinde statik sayfaları optimize etmek ve hatasız derlendiğini doğrulamak için:
```bash
npm run build
```

### 4. Production Sunucusunu Başlatma:
Derleme sonrasında derlenen paketi yerelde çalıştırmak için:
```bash
npm run start
```

---

## 📂 İçerik Güncelleme ve Yönetim

Web sitesindeki tüm metinler, menü içerikleri ve galeri görselleri merkezi veri dosyaları üzerinden yönetilmektedir. Veritabanı kurmaya gerek olmadan bu dosyalardaki alanları düzenleyerek siteyi anında güncelleyebilirsiniz.

### 1. Genel İşletme ve SEO Ayarları
Adres, telefon, Instagram hesabı, sitemap URL'si veya SEO açıklamalarını [site-config.ts](file:///c:/Users/berke/OneDrive/Masaüstü/burger/src/data/site-config.ts) dosyasından güncelleyebilirsiniz:
*   `phone`: Müşterilere gösterilen telefon formatı.
*   `phoneLink`: Tıklandığında aramayı başlatan `tel:+903125141488` bağlantısı.
*   `addressDetails`: Tam adres metni.
*   `mapsLink`: "Yol Tarifi Al" butonunun yönlendiği Google Maps URL'si.
*   `deliveryPlatforms`: Online sipariş kanalları (boş bırakıldığında butonlar otomatik olarak gizlenir).

### 2. Menü Veri Yönetimi
Yeni bir yemek eklemek, fiyat güncellemek veya içerik değiştirmek için [menu.ts](file:///c:/Users/berke/OneDrive/Masaüstü/burger/src/data/menu.ts) dosyasını kullanın:
```ts
{
  id: "smash-burger",
  slug: "smash-burger",
  name: "Carnivoor Smash Burger",
  description: "Özel sosu ve cheddar peyniri eşliğinde...",
  category: "burger", // burger, wing, meatball, side, milkshake, drink
  price: undefined,   // Fiyat doğrulanmadıysa undefined bırakın (otomatik gizlenir)
  image: "/menu/smash-burger.jpg",
  ingredients: ["120g Smash Köfte", "Cheddar"],
  available: true,    // false ise 'Tükendi' etiketi alır
  featured: true,     // true ise ana sayfadaki 'Öne Çıkanlar' listesine girer
  verified: true      // false ise production menüde kesinlikle listelenmez
}
```
> [!IMPORTANT]
> **Doğruluk Kuralı:** Fiyatı veya içerik/alerjen detayları kesinleşmemiş ürünlerin ilgili alanlarını boş bırakınız. `verified: false` işaretli ürünler production listesinde gizlenir.

### 3. Galeri ve Medya Yönetimi
Masonry galeride yer alan fotoğrafları ve alt yazılarını [gallery.ts](file:///c:/Users/berke/OneDrive/Masaüstü/burger/src/data/gallery.ts) dosyasından düzenleyebilirsiniz.
*   Görseller `public/gallery/` klasörü içerisine eklenmelidir.
*   `aspectRatio` alanını `portrait`, `square` veya `landscape` girerek masonry düzenin dengeli durmasını sağlayabilirsiniz.

---

## ⚡ Vercel Deployment (Dağıtım)

Proje Next.js standartlarına %100 uyumludur ve Vercel platformu ile tek tıkla entegre edilebilir:
1. GitHub deponuzu Vercel hesabınıza bağlayın.
2. Build command olarak `npm run build`, Output directory olarak `.next` seçin.
3. Projeyi yayınlayın.
