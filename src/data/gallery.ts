export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  aspectRatio: "square" | "portrait" | "landscape";
  caption?: string;
  instagramUrl?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    image: "/gallery/gallery-1.jpg",
    alt: "Izgara üzerinde pişen sulu burger köfteleri",
    aspectRatio: "portrait",
    caption: "Ateşin üzerinde kömür kokusuyla demlenen smash köfteler. 🔥",
    instagramUrl: "https://www.instagram.com/carnivoorturkiye/"
  },
  {
    id: "gal-2",
    image: "/gallery/gallery-2.jpg",
    alt: "Carnivoor Smash Burger yakın plan sunum",
    aspectRatio: "square",
    caption: "Bol cheddar ve karamelize soğan uyumu. Isırmaya hazır mısın?",
    instagramUrl: "https://www.instagram.com/carnivoorturkiye/"
  },
  {
    id: "gal-3",
    image: "/gallery/gallery-3.jpg",
    alt: "Fırın sütlaç tatlısı fındık parçalarıyla",
    aspectRatio: "landscape",
    caption: "Günün tatlı kapanışı: Fırınlanmış fındıklı sütlaç. 🌰",
    instagramUrl: "https://www.instagram.com/carnivoorturkiye/"
  },
  {
    id: "gal-4",
    image: "/gallery/gallery-4.jpg",
    alt: "Taptaze patates kızartması ve soslar",
    aspectRatio: "square",
    caption: "Çıtır patateslerin Carnivoor baharatıyla buluşması.",
    instagramUrl: "https://www.instagram.com/carnivoorturkiye/"
  },
  {
    id: "gal-5",
    image: "/gallery/gallery-5.jpg",
    alt: "Geleneksel ekmek arası köfte ve ızgara biber",
    aspectRatio: "portrait",
    caption: "Sokak lezzetlerinin vazgeçilmezi; Ekmek Arası Geleneksel Köfte.",
    instagramUrl: "https://www.instagram.com/carnivoorturkiye/"
  },
  {
    id: "gal-6",
    image: "/gallery/gallery-6.jpg",
    alt: "Renkli soğuk milkshake sunumu",
    aspectRatio: "landscape",
    caption: "Yoğun kıvamlı çikolatalı milkshake ile serinle. 🥤",
    instagramUrl: "https://www.instagram.com/carnivoorturkiye/"
  }
];
