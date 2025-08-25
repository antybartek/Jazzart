"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitch } from "@/components/language-switch"

export function Header() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isOverWhiteBackground, setIsOverWhiteBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["hero", "portfolio", "about", "services", "contact"]
      const whiteSections = ["portfolio", "about", "services", "contact"] // sections with white backgrounds

      let currentSection = "hero"
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId
            break
          }
        }
      }

      setIsOverWhiteBackground(whiteSections.includes(currentSection))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const textColor = isOverWhiteBackground ? "text-black" : "text-white"
  const hoverColor = isOverWhiteBackground ? "hover:text-primary" : "hover:text-primary"

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div
        className={`mx-auto px-6 py-3 transition-all duration-300 ${
          isScrolled ? "glass shadow-lg" : "glass"
        } ${isMobileMenuOpen ? "rounded-3xl" : "rounded-full"}`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/405086137_122099148050128457_3601196204204324105_n.jpg-0n27bubjDmlcav18gA2O5mBtlLQZ0l.jpeg"
              alt="Jazz Art Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className={`font-montserrat font-black text-lg ${textColor} transition-colors duration-300`}>
              JAZZ ART
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("portfolio")}
              className={`font-open-sans font-medium ${textColor} ${hoverColor} transition-colors duration-300`}
            >
              {t("nav.portfolio")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`font-open-sans font-medium ${textColor} ${hoverColor} transition-colors duration-300`}
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`font-open-sans font-medium ${textColor} ${hoverColor} transition-colors duration-300`}
            >
              {t("nav.services")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`font-open-sans font-medium ${textColor} ${hoverColor} transition-colors duration-300`}
            >
              {t("nav.contact")}
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitch textColor={textColor} />
            <Button
              onClick={() => scrollToSection("contact")}
              className="font-open-sans font-semibold bg-primary text-black hover:bg-primary/90"
            >
              {t("nav.bookAppointment")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${textColor} hover:bg-white/10 transition-colors duration-300`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 bg-black/80 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("portfolio")}
                className={`font-open-sans font-medium text-left ${textColor} ${hoverColor} transition-colors duration-300`}
              >
                {t("nav.portfolio")}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`font-open-sans font-medium text-left ${textColor} ${hoverColor} transition-colors duration-300`}
              >
                {t("nav.about")}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`font-open-sans font-medium text-left ${textColor} ${hoverColor} transition-colors duration-300`}
              >
                {t("nav.services")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`font-open-sans font-medium text-left ${textColor} ${hoverColor} transition-colors duration-300`}
              >
                {t("nav.contact")}
              </button>
              <div className="pt-2 border-t border-white/20">
                <LanguageSwitch textColor={textColor} />
              </div>
              <Button
                onClick={() => scrollToSection("contact")}
                className="font-open-sans font-semibold w-full bg-primary text-black hover:bg-primary/90"
              >
                {t("nav.bookAppointment")}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
