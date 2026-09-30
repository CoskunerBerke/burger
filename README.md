# Carnivoor Burger — Website

**Mobile-first restaurant website and digital menu for Carnivoor, a burger restaurant in Sinpaş Ege Vadisi Alaçatı Çarşısı, Ankara.**

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)

> Client project — designed and developed by Berke Coşkuner for **Carnivoor Türkiye**.

![Carnivoor hero image](public/images/hero-carnivoor.jpg)

---

## Overview

A Turkish-language, dark "fire and grill" themed website for Carnivoor's Sinpaş Ege Vadisi branch in Çankaya, Ankara. It is built for guests on their phones: browse the menu, open a product page, get directions, call the restaurant or follow it on Instagram. All content comes from typed data files, and details the business has not confirmed yet (prices, working hours, delivery links) are left out instead of guessed.

## Features

- **Home page**: full-screen hero, menu categories ("Lezzet Grupları"), chef's picks ("Şefin Tercihleri"), brand story, wings highlight, Instagram section, call-to-action and location block
- **Menu** (`/menu`) with category filter (burger, wing, meatball, side, milkshake, drink) and text search; the category can be opened directly with `?cat=`
- **Product pages** (`/menu/[slug]`) with ingredients, "Tükendi" (sold out) label, and `MenuItem` / `Offer` JSON-LD
- **Accuracy rules in data**: `verified: false` items are hidden and prices left `undefined` are not shown; working hours and delivery-platform links (Yemeksepeti, Getir, Migros) stay unset in config until confirmed
- **Gallery** (`/galeri`) in a responsive masonry layout
- **Contact** (`/iletisim`) with embedded Google Map, phone link and directions
- **Mobile action bar** with Menu, Directions and Call shortcuts
- **SEO**: `Restaurant` and `BreadcrumbList` JSON-LD, `metadataBase`, dynamic `sitemap.xml` and `robots.txt`
- **Legal pages**: KVKK, privacy policy, cookie policy

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router, Server & Client Components), React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | lucide-react |

## Project structure

```text
src/
├── app/
│   ├── page.tsx              # Home
│   ├── menu/                 # Menu list + [slug] product page
│   ├── galeri/, hakkimizda/, iletisim/
│   ├── kvkk/, gizlilik-politikasi/, cerez-politikasi/
│   ├── robots.ts, sitemap.ts
├── components/               # Header, Footer, MobileActionBar
└── data/
    ├── site-config.ts        # Brand, phone, address, maps link, hours, delivery links, SEO
    ├── menu.ts               # Menu items with verified / available / featured flags
    └── gallery.ts            # Gallery images, captions, aspect ratios
public/
├── images/                   # Hero and background images
├── menu/                     # Product photos
└── gallery/                  # Gallery photos
```

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
npm run start
```

No environment variables are required.

## Updating content

- **Business info & SEO** → `src/data/site-config.ts`: `phone`, `phoneLink`, `addressDetails`, `mapsLink`, `workingHours`, `deliveryPlatforms`, `seo.canonicalUrl`.
- **Menu** → `src/data/menu.ts`. Example item:

```ts
{
  id: "smash-burger",
  slug: "smash-burger",
  name: "Carnivoor Smash Burger",
  category: "burger",   // burger | wing | meatball | side | milkshake | drink
  price: undefined,     // leave undefined until confirmed (hidden automatically)
  image: "/menu/smash-burger.jpg",
  available: true,      // false → "Tükendi" label
  featured: true,       // true → shown in "Şefin Tercihleri" on the home page
  verified: true        // false → never listed in production
}
```

- **Gallery** → `src/data/gallery.ts` + images in `public/gallery/` (`aspectRatio`: `portrait`, `square` or `landscape`).

## Deployment

Standard Next.js project, ready for Vercel: connect the repository, keep `npm run build` as the build command and deploy.

---

## Türkçe

**Carnivoor için mobil öncelikli restoran web sitesi ve dijital menü — Sinpaş Ege Vadisi Alaçatı Çarşısı, Ankara.**

> Müşteri projesi — **Carnivoor Türkiye** için Berke Coşkuner tarafından tasarlandı ve geliştirildi.

### Genel bakış

Carnivoor'un Çankaya, Sinpaş Ege Vadisi şubesi için koyu "ateş ve ızgara" temalı Türkçe web sitesi. Misafirler telefondan menüye göz atabilir, ürün sayfalarını açabilir, yol tarifi alabilir, restoranı arayabilir veya Instagram'dan takip edebilir. Tüm içerik tipli veri dosyalarından gelir; işletmenin henüz doğrulamadığı bilgiler (fiyatlar, çalışma saatleri, sipariş platformları) tahmin edilmek yerine boş bırakılır.

### Özellikler

- Hero, lezzet grupları, şefin tercihleri, marka hikâyesi, Instagram ve konum bölümlerinden oluşan ana sayfa
- Kategori filtresi ve arama içeren **menü** sayfası (`/menu`, `?cat=` ile doğrudan kategori)
- İçerik, "Tükendi" etiketi ve `MenuItem` JSON-LD içeren **ürün sayfaları**
- Doğruluk kuralları: `verified: false` ürünler gizlenir, girilmemiş fiyatlar gösterilmez; çalışma saatleri ve sipariş platformu bağlantıları doğrulanana kadar boş bırakılır
- Masonry düzenli **galeri**, Google Haritalı **iletişim** sayfası
- Menü, Yol Tarifi ve Ara kısayollarını içeren mobil aksiyon çubuğu
- `Restaurant` JSON-LD, dinamik sitemap ve robots; KVKK, gizlilik ve çerez sayfaları

### Teknolojiler

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion, lucide-react.

### Kurulum

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

Ortam değişkeni gerekmez.

### İçerik güncelleme

- İşletme bilgileri ve SEO → `src/data/site-config.ts`
- Menü → `src/data/menu.ts` (fiyatı kesinleşmeyen ürünlerde `price` alanını boş bırakın)
- Galeri → `src/data/gallery.ts` ve `public/gallery/`

### Yayınlama

Standart bir Next.js projesidir; depoyu Vercel'e bağlayıp `npm run build` komutuyla yayınlayabilirsiniz.

---

Built by [Berke Coşkuner](https://github.com/CoskunerBerke)
