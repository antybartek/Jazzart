"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const portfolioItems = [
  {
    id: 1,
    title: "Geometric Mandala",
    artist: "Jazz Art",
    image: "/geometric-mandala-tattoo-black-and-white-intricate.png",
    category: "geometric",
  },
  {
    id: 2,
    title: "Realistic Portrait",
    artist: "Jazz Art",
    image: "/realistic-portrait-tattoo-black-and-grey-photoreal.png",
    category: "realistic",
  },
  {
    id: 3,
    title: "Traditional Rose",
    artist: "Jazz Art",
    image: "/traditional-rose-tattoo-bold-lines-classic-style.png",
    category: "traditional",
  },
  {
    id: 4,
    title: "Biomechanical Arm",
    artist: "Jazz Art",
    image: "/biomechanical-tattoo-arm-sleeve-futuristic-mechani.png",
    category: "biomechanical",
  },
  {
    id: 5,
    title: "Watercolor Phoenix",
    artist: "Jazz Art",
    image: "/watercolor-phoenix-tattoo-vibrant-colors-artistic-.png",
    category: "watercolor",
  },
  {
    id: 6,
    title: "Minimalist Line Art",
    artist: "Jazz Art",
    image: "/minimalist-line-art-tattoo-simple-elegant-design.png",
    category: "minimalist",
  },
  {
    id: 7,
    title: "Japanese Dragon",
    artist: "Jazz Art",
    image: "/japanese-dragon-tattoo-traditional-irezumi-style.png",
    category: "japanese",
  },
  {
    id: 8,
    title: "Dotwork Skull",
    artist: "Jazz Art",
    image: "/dotwork-skull-tattoo-stippling-technique-detailed.png",
    category: "dotwork",
  },
]

const categories = [
  "all",
  "geometric",
  "realistic",
  "traditional",
  "biomechanical",
  "watercolor",
  "minimalist",
  "japanese",
  "dotwork",
]

export function Portfolio() {
  const { t } = useLanguage()
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = portfolioItems.map((item) => ({
    src: item.image,
    width: 1000, // Example width, lightbox will adjust
    height: 1500, // Example height, lightbox will adjust
  }))

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-4xl md:text-6xl mb-6">
            {t("portfolio.title")} <span className="text-primary">{t("portfolio.titleHighlight")}</span>
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">{t("portfolio.description")}</p>
        </div>

        {/* Portfolio Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {portfolioItems.map((item, i) => (
            <Card
              key={item.id}
              className="group relative overflow-hidden glass border-0 cursor-pointer transition-all duration-500 hover:scale-105 break-inside-avoid"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => {
                setIndex(i)
                setOpen(true)
              }}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={500} // Przykładowa szerokość, next/image zoptymalizuje
                height={750} // Przykładowa wysokość, zachowuje proporcje
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black/70 flex items-end p-6 transition-opacity duration-300 ${
                  hoveredItem === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-white">
                  <h3 className="font-montserrat font-bold text-xl mb-2">{item.title}</h3>
                  <p className="font-open-sans text-sm text-gray-300">by {item.artist}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={index}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        />

        <div className="text-center mt-12">
          <p className="font-open-sans text-muted-foreground mb-6">{t("portfolio.readyText")}</p>
          <button
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="font-open-sans font-semibold bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            {t("portfolio.startJourney")}
          </button>
        </div>
      </div>
    </section>
  )
}
