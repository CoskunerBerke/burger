"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryItems } from "@/data/gallery";
import { siteConfig } from "@/data/site-config";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-instagram"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function GalleryPage() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % galleryItems.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Intro header */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <h1 className="text-xs font-bold tracking-widest text-carnivoor-red uppercase mb-3">
          Görsel Lezzetler
        </h1>
        <p className="text-3xl sm:text-5xl font-extrabold uppercase text-white font-display">
          Carnivoor Galeri
        </p>
        <p className="text-xs text-carnivoor-cream/50 mt-3 font-light">
          Ateşin üzerinde pişen enfes ürünlerimizin ve sıcak sokak lezzeti atmosferimizin en özel kareleri.
        </p>
      </div>

      {/* Masonry Columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            onClick={() => openLightbox(index)}
            className="break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer border border-carnivoor-smoked bg-carnivoor-smoked"
          >
            <div className="relative w-full h-auto">
              <Image
                src={item.image}
                alt={item.alt}
                width={500}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-50"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Zoom overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <div className="p-3 rounded-full bg-carnivoor-red text-white">
                  <ZoomIn size={20} />
                </div>
              </div>
            </div>
            
            {/* Short Caption bar */}
            {item.caption && (
              <div className="p-4 bg-gradient-to-t from-carnivoor-black/95 to-carnivoor-black/80 border-t border-carnivoor-smoked/40">
                <p className="text-xs text-carnivoor-cream/80 font-light leading-relaxed">
                  {item.caption}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Instagram Button CTA */}
      <div className="text-center mt-20">
        <p className="text-sm text-carnivoor-cream/60 mb-4 font-light">
          Tüm güncel paylaşımlarımız ve alevli hikayelerimiz için Instagram profilimizi takip edebilirsiniz.
        </p>
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-carnivoor-red hover:bg-carnivoor-red/80 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-xl shadow-carnivoor-red/20"
        >
          <InstagramIcon size={18} />
          <span>{"Instagram'da Takip Et"}</span>
        </a>
      </div>

      {/* Custom Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 text-white hover:text-carnivoor-red p-2 bg-carnivoor-smoked/40 rounded-full backdrop-blur-sm"
              aria-label="Kapat"
            >
              <X size={24} />
            </button>

            {/* Left Prev Arrow */}
            <button
              onClick={showPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 text-white hover:text-carnivoor-red p-3 bg-carnivoor-smoked/40 rounded-full backdrop-blur-sm transition-colors"
              aria-label="Önceki"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Next Arrow */}
            <button
              onClick={showNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 text-white hover:text-carnivoor-red p-3 bg-carnivoor-smoked/40 rounded-full backdrop-blur-sm transition-colors"
              aria-label="Sonraki"
            >
              <ChevronRight size={24} />
            </button>

            {/* Content box */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[75vh] flex items-center justify-center"
            >
              <Image
                src={galleryItems[activePhotoIndex].image}
                alt={galleryItems[activePhotoIndex].alt}
                width={1200}
                height={900}
                className="max-w-full max-h-[75vh] object-contain rounded-lg border border-carnivoor-smoked/50"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-6 text-center max-w-xl px-4">
              <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed">
                {galleryItems[activePhotoIndex].caption}
              </p>
              <a
                href={galleryItems[activePhotoIndex].instagramUrl || siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-carnivoor-yellow hover:text-carnivoor-red mt-3 transition-colors uppercase tracking-wider font-bold"
              >
                <InstagramIcon size={12} />
                <span>Instagram Paylaşımına Git</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
