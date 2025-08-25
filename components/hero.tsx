"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/dark-moody-tattoo-salon-interior-with-tattoo-equip.png"
          alt="Jazz Art Tattoo Salon Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/405086137_122099148050128457_3601196204204324105_n.jpg-0n27bubjDmlcav18gA2O5mBtlLQZ0l.jpeg"
            alt="Jazz Art Logo"
            width={120}
            height={120}
            className="mx-auto rounded-full mb-6"
          />
        </div>

        <h1 className="font-montserrat font-black text-5xl md:text-7xl mb-6 leading-tight">
          {t("hero.title")}
          <span className="block text-primary text-2xl md:text-3xl font-normal mt-2">{t("hero.subtitle")}</span>
        </h1>

        <p className="font-open-sans text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          {t("hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="font-open-sans font-semibold text-lg px-8 py-4"
            onClick={() => scrollToSection("portfolio")}
          >
            {t("hero.viewPortfolio")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-open-sans font-semibold text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
            onClick={() => scrollToSection("contact")}
          >
            {t("hero.bookAppointment")}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
