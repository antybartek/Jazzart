"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl mb-6">{t("about.title")}</h2>

            <div className="space-y-6 font-open-sans text-lg leading-relaxed">
              <p>{t("about.description")}</p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="font-montserrat font-black text-3xl text-primary mb-2">500+</div>
                <div className="font-open-sans text-sm text-muted-foreground">{t("about.feature1")}</div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-black text-3xl text-primary mb-2">5+</div>
                <div className="font-open-sans text-sm text-muted-foreground">{t("about.feature2")}</div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-black text-3xl text-primary mb-2">100%</div>
                <div className="font-open-sans text-sm text-muted-foreground">{t("about.feature3")}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Card className="glass border-0 overflow-hidden">
              <div className="relative aspect-[4/5]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/506802570_122210164874128457_7158537398880371786_n.jpg-S4a8QbuQjeHwNplx2qGd015P0qD3E3.jpeg"
                  alt="Jazz Art Studio - Professional Tattoo Artists"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>

            {/* Floating Logo */}
            <div className="absolute -top-6 -right-6 glass rounded-full p-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/405086137_122099148050128457_3601196204204324105_n.jpg-0n27bubjDmlcav18gA2O5mBtlLQZ0l.jpeg"
                alt="Jazz Art Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
