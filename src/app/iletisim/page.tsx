"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Mail, Compass, HelpCircle, AlertCircle, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    message: "",
    kvkkChecked: false,
  });

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | "info" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset status
    setFormStatus({ type: null, message: "" });

    // Validation
    if (!formData.name.trim() || !formData.contactInfo.trim() || !formData.message.trim()) {
      setFormStatus({
        type: "error",
        message: "Lütfen tüm zorunlu alanları doldurunuz.",
      });
      return;
    }

    if (!formData.kvkkChecked) {
      setFormStatus({
        type: "error",
        message: "Devam etmek için KVKK metnini onaylamanız gerekmektedir.",
      });
      return;
    }

    // Since this is a static frontend with no backend, we MUST explicitly state it's a demo
    setFormStatus({
      type: "info",
      message: "Bu form bir demonstrasyondur ve mesajlar iletilmemektedir. Bizimle hızlıca iletişime geçmek için lütfen telefon numaralarımızı kullanın.",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Intro header */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <h1 className="text-xs font-bold tracking-widest text-carnivoor-red uppercase mb-3">
          Bize Ulaşın
        </h1>
        <p className="text-3xl sm:text-5xl font-extrabold uppercase text-white font-display">
          İletişim & Konum
        </p>
        <p className="text-xs text-carnivoor-cream/50 mt-3 font-light">
          Sorularınız, görüşleriniz veya sipariş detayları için şubemizle iletişime geçin.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Contact details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="premium-card p-8 rounded-2xl border border-carnivoor-smoked space-y-6">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider font-display border-b border-carnivoor-smoked pb-4">
              Şube Bilgileri
            </h2>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-carnivoor-smoked border border-carnivoor-cream/5 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-carnivoor-red" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">
                    Telefonla Sipariş
                  </h3>
                  <a
                    href={siteConfig.phoneLink}
                    className="text-base font-bold text-carnivoor-cream hover:text-carnivoor-red transition-colors block mt-1"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-carnivoor-smoked border border-carnivoor-cream/5 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-carnivoor-red" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">
                    Şube Adresi
                  </h3>
                  <p className="text-sm text-carnivoor-cream mt-1 leading-relaxed font-light">
                    {siteConfig.addressDetails}
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-carnivoor-smoked border border-carnivoor-cream/5 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-carnivoor-red" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">
                    Sosyal Medya
                  </h3>
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-carnivoor-cream hover:text-carnivoor-red transition-colors block mt-1"
                  >
                    @carnivoorturkiye
                  </a>
                </div>
              </li>
            </ul>

            <div className="pt-4">
              <a
                href={siteConfig.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center inline-flex items-center justify-center gap-2 bg-carnivoor-yellow hover:bg-carnivoor-yellow/80 text-carnivoor-black py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300"
              >
                <Compass size={14} />
                <span>Google Haritada Yol Tarifi Al</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="premium-card p-8 rounded-2xl border border-carnivoor-smoked space-y-6"
          >
            <h2 className="text-lg font-bold text-white uppercase tracking-wider font-display border-b border-carnivoor-smoked pb-4">
              İletişim Formu (Demo)
            </h2>

            {/* Input name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-bold text-carnivoor-cream/70 uppercase tracking-widest">
                Ad Soyad <span className="text-carnivoor-red">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Örn. Ahmet Yılmaz"
                className="w-full bg-carnivoor-smoked border border-carnivoor-cream/10 rounded-xl px-4 py-3 text-sm text-carnivoor-cream placeholder-carnivoor-cream/35 focus:outline-none focus:border-carnivoor-red focus:ring-1 focus:ring-carnivoor-red transition-all"
              />
            </div>

            {/* Input Contact Info */}
            <div className="space-y-2">
              <label htmlFor="contactInfo" className="block text-xs font-bold text-carnivoor-cream/70 uppercase tracking-widest">
                Telefon veya E-posta <span className="text-carnivoor-red">*</span>
              </label>
              <input
                type="text"
                id="contactInfo"
                name="contactInfo"
                required
                value={formData.contactInfo}
                onChange={handleInputChange}
                placeholder="Örn. 0555 123 4567 veya ahmet@mail.com"
                className="w-full bg-carnivoor-smoked border border-carnivoor-cream/10 rounded-xl px-4 py-3 text-sm text-carnivoor-cream placeholder-carnivoor-cream/35 focus:outline-none focus:border-carnivoor-red focus:ring-1 focus:ring-carnivoor-red transition-all"
              />
            </div>

            {/* Input Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-bold text-carnivoor-cream/70 uppercase tracking-widest">
                Mesajınız <span className="text-carnivoor-red">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Mesajınızı buraya yazınız..."
                className="w-full bg-carnivoor-smoked border border-carnivoor-cream/10 rounded-xl px-4 py-3 text-sm text-carnivoor-cream placeholder-carnivoor-cream/35 focus:outline-none focus:border-carnivoor-red focus:ring-1 focus:ring-carnivoor-red transition-all resize-none"
              ></textarea>
            </div>

            {/* Checkbox KVKK */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="kvkkChecked"
                name="kvkkChecked"
                checked={formData.kvkkChecked}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 rounded border-carnivoor-cream/10 bg-carnivoor-smoked text-carnivoor-red focus:ring-carnivoor-red"
              />
              <label htmlFor="kvkkChecked" className="text-xs text-carnivoor-cream/55 leading-relaxed font-light">
                <Link href="/kvkk" target="_blank" className="text-carnivoor-yellow hover:underline">
                  KVKK Aydınlatma Metni
                </Link>
                {"'ni okudum ve kabul ediyorum."}
              </label>
            </div>

            {/* Status alerts */}
            {formStatus.type && (
              <div
                className={`p-4 rounded-xl flex items-start gap-3 text-xs leading-relaxed ${
                  formStatus.type === "error"
                    ? "bg-carnivoor-red/10 border border-carnivoor-red/20 text-carnivoor-red"
                    : formStatus.type === "info"
                    ? "bg-carnivoor-yellow/10 border border-carnivoor-yellow/20 text-carnivoor-yellow"
                    : "bg-green-500/10 border border-green-500/20 text-green-400"
                }`}
              >
                {formStatus.type === "error" ? (
                  <AlertCircle className="shrink-0 mt-0.5" size={16} />
                ) : formStatus.type === "info" ? (
                  <HelpCircle className="shrink-0 mt-0.5" size={16} />
                ) : (
                  <CheckCircle className="shrink-0 mt-0.5" size={16} />
                )}
                <div>
                  <p className="font-bold">
                    {formStatus.type === "error"
                      ? "Hata!"
                      : formStatus.type === "info"
                      ? "Bilgilendirme"
                      : "Başarılı"}
                  </p>
                  <p className="mt-0.5 font-light">{formStatus.message}</p>
                </div>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-carnivoor-red hover:bg-carnivoor-red/80 text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>

      {/* Map Segment */}
      <div className="mt-16 rounded-3xl overflow-hidden h-96 border border-carnivoor-smoked relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.2965415715206!2d32.846500!3d39.852300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDUxJTA4LjMiTiAzMsKwNTAnNDcuNCJF!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
          className="absolute inset-0 w-full h-full border-0 grayscale invert opacity-50 contrast-125"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Carnivoor Google Map embed contact page"
        ></iframe>
      </div>
    </div>
  );
}
