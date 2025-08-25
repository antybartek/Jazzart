"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-4xl md:text-6xl mb-6">
            {t("contact.title")} <span className="text-primary">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="hidden md:flex flex-col gap-8">
            <Image
              src="/images/witryna.jpeg"
              alt="Witryna salonu Jazz Art"
              width={800}
              height={1200}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
            {/* Social Media Card moved here */}
            <Card className="glass border-0">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-bold text-lg mb-4 text-center sm:text-left">{t("contact.social.title")}</h3>
                <div className="flex space-x-4 justify-center sm:justify-start">
                  <a
                    href="https://www.instagram.com/jazzart77/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-primary" />
                  </a>
                  <a
                    href="https://web.facebook.com/profile.php?id=61553853721853"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-primary" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@jazz.art25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <TikTokIcon />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-8">
              {/* Address Card */}
              <Card className="glass border-0">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-lg mb-2">{t("contact.info.visitTitle")}</h3>
                      <p className="font-open-sans text-muted-foreground">
                        Marktstraße 138
                        <br />
                        47798 Krefeld
                        <br />
                        {t("contact.info.country")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card className="glass border-0">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-lg mb-2">{t("contact.info.callTitle")}</h3>
                      <p className="font-open-sans text-muted-foreground">01774128558</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="glass border-0">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-lg mb-2">{t("contact.info.emailTitle")}</h3>
                      <p className="font-open-sans text-muted-foreground">monidob@gmx.de</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Opening Hours Card */}
              <Card className="glass border-0">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-lg mb-2">{t("contact.info.hoursTitle")}</h3>
                      <div className="font-open-sans text-muted-foreground space-y-1">
                        <p>{t("contact.info.weekdays")}</p>
                        <p>{t("contact.info.saturday")}</p>
                        <p>{t("contact.info.sunday")}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
        </div>
      </div>
    </section>
  )
}
