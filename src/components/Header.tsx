"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Menü", href: "/menu" },
    { name: "Galeri", href: "/galeri" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "İletişim", href: "/iletisim" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-carnivoor-black/90 backdrop-blur-md border-b border-carnivoor-smoked py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <div className="relative w-44 h-12">
                <Image
                  src="/brand/logo-light.svg"
                  alt="Carnivoor Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 hover:text-carnivoor-red ${
                    isActive(link.href)
                      ? "text-carnivoor-red"
                      : "text-carnivoor-cream/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={siteConfig.phoneLink}
                className="flex items-center gap-2 bg-carnivoor-red hover:bg-carnivoor-red/80 text-white px-5 py-2.5 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-lg shadow-carnivoor-red/20"
              >
                <Phone size={14} className="animate-pulse" />
                <span>Sipariş Ver</span>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-carnivoor-cream hover:text-carnivoor-red focus:outline-none p-2"
                aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-carnivoor-black/95 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center p-6">
          <nav className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl font-bold tracking-wider uppercase transition-colors duration-200 hover:text-carnivoor-red ${
                  isActive(link.href) ? "text-carnivoor-red" : "text-carnivoor-cream"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-12 text-center">
            <p className="text-carnivoor-cream/50 text-xs tracking-widest uppercase mb-4">
              Hızlı Sipariş Hattı
            </p>
            <a
              href={siteConfig.phoneLink}
              className="inline-flex items-center gap-3 bg-carnivoor-red hover:bg-carnivoor-red/80 text-white px-8 py-4 rounded-full font-bold text-lg tracking-wider uppercase transition-all duration-300 shadow-xl shadow-carnivoor-red/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={20} className="animate-pulse" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
