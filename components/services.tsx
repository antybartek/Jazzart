"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Users, Shield, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Palette,
      title: t("services.service1.title"),
      description: t("services.service1.description"),
      features: [t("services.service1.feature1"), t("services.service1.feature2"), t("services.service1.feature3")],
    },
    {
      icon: Users,
      title: t("services.service2.title"),
      description: t("services.service2.description"),
      features: [t("services.service2.feature1"), t("services.service2.feature2"), t("services.service2.feature3")],
    },
    {
      icon: Shield,
      title: t("services.service3.title"),
      description: t("services.service3.description"),
      features: [t("services.service3.feature1"), t("services.service3.feature2"), t("services.service3.feature3")],
    },
    {
      icon: Clock,
      title: t("services.service4.title"),
      description: t("services.service4.description"),
      features: [t("services.service4.feature1"), t("services.service4.feature2"), t("services.service4.feature3")],
    },
  ]

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-4xl md:text-6xl mb-6">
            {t("services.title").split(" ")[0]}{" "}
            <span className="text-primary">{t("services.title").split(" ")[1]}</span>
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass border-0 group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-montserrat font-bold text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="font-open-sans text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 font-open-sans text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-montserrat font-bold text-2xl mb-4">{t("services.readyToStart")}</h3>
            <p className="font-open-sans text-muted-foreground mb-6">{t("services.readyToStartDescription")}</p>
            <button
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="font-open-sans font-semibold bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t("services.bookFreeConsultation")}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
