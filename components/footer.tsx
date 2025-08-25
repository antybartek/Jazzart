"use client"

import Image from "next/image"
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/405086137_122099148050128457_3601196204204324105_n.jpg-0n27bubjDmlcav18gA2O5mBtlLQZ0l.jpeg"
                alt="Jazz Art Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="font-montserrat font-black text-2xl">JAZZ ART</div>
            </div>
            <p className="font-open-sans text-gray-300 leading-relaxed max-w-md">{t("footer.description")}</p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/jazzart77/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61553853721853"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@jazz.art25"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-primary/20 transition-colors"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3 font-open-sans">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("portfolio")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.portfolio")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("about")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.about")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("services")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.services")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.contact")}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3 font-open-sans text-gray-300">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Marktstraße 138, 47798 Krefeld</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">01774128558</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">monidob@gmx.de</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="font-open-sans text-gray-400 text-sm">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
