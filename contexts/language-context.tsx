"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "pl" | "de"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pl: {
    // Navigation
    nav: {
      portfolio: "Portfolio",
      about: "O Nas",
      services: "Usługi",
      contact: "Kontakt",
      bookAppointment: "Umów Wizytę",
    },

    // Hero
    hero: {
      title: "JAZZ ART",
      subtitle: "Studio urody i tatuażu • Pracownia artystyczna",
      description:
        "Tworzymy wyjątkowe dzieła sztuki na Twojej skórze. Profesjonalne tatuaże, piercing i usługi kosmetyczne w sercu Krefeld.",
      viewPortfolio: "Zobacz Portfolio",
      bookAppointment: "Umów Wizytę",
    },

    // About
    about: {
      title: "O JAZZ ART",
      description:
        "Jazz Art to salon tatuażu, gdzie artystyczna wizja spotyka się z technicznym mistrzostwem. Założony z pasją do przekształcania skóry w żywe płótna, specjalizujemy się w tworzeniu niestandardowych tatuaży, które opowiadają Twoją unikalną historię.",
      feature1: "Zadowolonych Klientów",
      feature2: "Lat Doświadczenia",
      feature3: "Satysfakcji",
    },

    // Services
    services: {
      title: "NASZE USŁUGI",
      description: "Profesjonalne usługi tatuażu z naciskiem na artyzm, bezpieczeństwo i satysfakcję klienta.",
      service1: {
        title: "Niestandardowe Projekty Tatuaży",
        description:
          "Unikalne, spersonalizowane projekty stworzone specjalnie dla Ciebie. Od koncepcji do realizacji, ożywiamy Twoją wizję.",
        feature1: "Oryginalne dzieła sztuki",
        feature2: "Wielokrotne poprawki",
        feature3: "Konsultacja stylistyczna",
      },
      service2: {
        title: "Przekrycia i Odświeżenia",
        description:
          "Przekształcamy stare tatuaże w oszałamiające nowe dzieła sztuki lub odświeżamy istniejące, przywracając ich pierwotne piękno.",
        feature1: "Eksperckie projekty przekryć",
        feature2: "Przywracanie kolorów",
        feature3: "Pokrywanie blizn",
      },
      service3: {
        title: "Sterylne i Bezpieczne Środowisko",
        description:
          "Twoje bezpieczeństwo to nasz priorytet. Utrzymujemy najwyższe standardy czystości i używamy tylko najlepszego sprzętu.",
        feature1: "Jednorazowe igły",
        feature2: "Sterylizacja w autoklawie",
        feature3: "Licencjonowani profesjonaliści",
      },
      service4: {
        title: "Konsultacje i Pielęgnacja",
        description:
          "Kompleksowy proces konsultacji i szczegółowe wskazówki dotyczące pielęgnacji, aby zapewnić idealne gojenie tatuażu.",
        feature1: "Darmowe konsultacje",
        feature2: "Zestaw do pielęgnacji w cenie",
        feature3: "Wsparcie po zabiegu",
      },
      readyToStart: "Gotowy na Start?",
      readyToStartDescription:
        "Umów darmową konsultację, aby omówić swoje pomysły na tatuaż i otrzymać spersonalizowaną wycenę.",
      bookFreeConsultation: "Umów Darmową Konsultację",
    },

    // Contact
    contact: {
      title: "SKONTAKTUJ SIĘ",
      titleHighlight: "Z NAMI",
      description:
        "Gotowy na rozpoczęcie swojej tatuażowej podróży? Skontaktuj się z nami w celu konsultacji lub umówienia wizyty.",
      form: {
        title: "Umów Konsultację",
        name: "Imię i nazwisko",
        namePlaceholder: "Twoje imię i nazwisko",
        phone: "Telefon",
        phonePlaceholder: "Twój numer telefonu",
        email: "Email",
        emailPlaceholder: "twoj.email@example.com",
        message: "Opowiedz nam o swoim pomyśle na tatuaż",
        messagePlaceholder:
          "Opisz swój pomysł na tatuaż, preferowany styl, rozmiar, umiejscowienie i inne szczegóły...",
        submit: "Wyślij Wiadomość",
      },
      info: {
        visitTitle: "Odwiedź Nasze Studio",
        callTitle: "Zadzwoń do Nas",
        emailTitle: "Napisz do Nas",
        hoursTitle: "Godziny Otwarcia",
        weekdays: "Poniedziałek - Piątek: 10:00 - 20:00",
        saturday: "Sobota: 10:00 - 18:00",
        sunday: "Niedziela: 12:00 - 17:00",
        country: "Niemcy",
      },
      social: {
        title: "Śledź Nasze Prace",
      },
    },

    // Footer
    footer: {
      description:
        "Profesjonalna sztuka tatuażu, gdzie kreatywność spotyka się z rzemiosłem. Przekształcamy Twoją wizję w oszałamiającą sztukę na ciele, która opowiada Twoją unikalną historię.",
      quickLinks: "Szybkie Linki",
      contactTitle: "Kontakt",
      copyright:
        "© 2024 Jazz Art Studio Tatuażu. Wszystkie prawa zastrzeżone. | Profesjonalne usługi tatuażu z najwyższymi standardami bezpieczeństwa i artyzmu.",
    },

    // Portfolio
    portfolio: {
      title: "NASZE",
      titleHighlight: "PORTFOLIO",
      description:
        "Poznaj naszą kolekcję niestandardowej sztuki tatuażu. Każde dzieło opowiada unikalną historię stworzoną z precyzją i pasją.",
      categories: {
        all: "Wszystkie",
        geometric: "Geometryczne",
        realistic: "Realistyczne",
        traditional: "Tradycyjne",
        biomechanical: "Biomechaniczne",
        watercolor: "Akwarelowe",
        minimalist: "Minimalistyczne",
        japanese: "Japońskie",
        dotwork: "Dotwork",
      },
      readyText: "Gotowy stworzyć swoje własne arcydzieło?",
      startJourney: "Rozpocznij Swoją Podróż",
    },
  },
  de: {
    // Navigation
    nav: {
      portfolio: "Portfolio",
      about: "Über Uns",
      services: "Leistungen",
      contact: "Kontakt",
      bookAppointment: "Termin Buchen",
    },

    // Hero
    hero: {
      title: "JAZZ ART",
      subtitle: "Schönheitsstudio und Tattoo • Künstlerische Werkstatt",
      description:
        "Wir schaffen einzigartige Kunstwerke auf Ihrer Haut. Professionelle Tattoos, Piercing und Kosmetikdienstleistungen im Herzen von Krefeld.",
      viewPortfolio: "Portfolio Ansehen",
      bookAppointment: "Termin Buchen",
    },

    // About
    about: {
      title: "ÜBER JAZZ ART",
      description:
        "Jazz Art ist ein Tattoo-Studio, wo künstlerische Vision auf technische Meisterschaft trifft. Gegründet mit der Leidenschaft, Haut in lebendige Leinwände zu verwandeln, spezialisieren wir uns auf die Erstellung maßgeschneiderter Tattoos, die Ihre einzigartige Geschichte erzählen.",
      feature1: "Zufriedene Kunden",
      feature2: "Jahre Erfahrung",
      feature3: "Zufriedenheit",
    },

    // Services
    services: {
      title: "UNSERE LEISTUNGEN",
      description: "Professionelle Tattoo-Dienstleistungen mit Fokus auf Kunst, Sicherheit und Kundenzufriedenheit.",
      service1: {
        title: "Individuelle Tattoo-Designs",
        description:
          "Einzigartige, personalisierte Designs, die speziell für Sie erstellt werden. Von der Konzeption bis zur Umsetzung erwecken wir Ihre Vision zum Leben.",
        feature1: "Originale Kunstwerke",
        feature2: "Mehrfache Überarbeitungen",
        feature3: "Stilistische Beratung",
      },
      service2: {
        title: "Cover-ups und Auffrischungen",
        description:
          "Wir verwandeln alte Tattoos in atemberaubende neue Kunstwerke oder frischen bestehende auf und stellen ihre ursprüngliche Schönheit wieder her.",
        feature1: "Expertise Cover-up Designs",
        feature2: "Farbwiederherstellung",
        feature3: "Narbenabdeckung",
      },
      service3: {
        title: "Sterile und Sichere Umgebung",
        description:
          "Ihre Sicherheit ist unsere Priorität. Wir halten die höchsten Sauberkeitsstandards ein und verwenden nur die beste Ausrüstung.",
        feature1: "Einwegnadeln",
        feature2: "Autoklav-Sterilisation",
        feature3: "Lizenzierte Fachkräfte",
      },
      service4: {
        title: "Beratung und Nachsorge",
        description: "Umfassender Beratungsprozess und detaillierte Pflegehinweise für eine perfekte Tattoo-Heilung.",
        feature1: "Kostenlose Beratungen",
        feature2: "Pflegeset inklusive",
        feature3: "Nachbetreuung",
      },
      readyToStart: "Bereit Anzufangen?",
      readyToStartDescription:
        "Buchen Sie eine kostenlose Beratung, um Ihre Tattoo-Ideen zu besprechen und ein personalisiertes Angebot zu erhalten.",
      bookFreeConsultation: "Kostenlose Beratung Buchen",
    },

    // Contact
    contact: {
      title: "KONTAKTIEREN SIE",
      titleHighlight: "UNS",
      description:
        "Bereit, Ihre Tattoo-Reise zu beginnen? Kontaktieren Sie uns für eine Beratung oder um einen Termin zu vereinbaren.",
      form: {
        title: "Beratung Buchen",
        name: "Vor- und Nachname",
        namePlaceholder: "Ihr Vor- und Nachname",
        phone: "Telefon",
        phonePlaceholder: "Ihre Telefonnummer",
        email: "E-Mail",
        emailPlaceholder: "ihre.email@beispiel.com",
        message: "Erzählen Sie uns von Ihrer Tattoo-Idee",
        messagePlaceholder:
          "Beschreiben Sie Ihre Tattoo-Idee, bevorzugten Stil, Größe, Platzierung und andere Details...",
        submit: "Nachricht Senden",
      },
      info: {
        visitTitle: "Besuchen Sie Unser Studio",
        callTitle: "Rufen Sie Uns An",
        emailTitle: "Schreiben Sie Uns",
        hoursTitle: "Öffnungszeiten",
        weekdays: "Montag - Freitag: 10:00 - 20:00",
        saturday: "Samstag: 10:00 - 18:00",
        sunday: "Sonntag: 12:00 - 17:00",
        country: "Deutschland",
      },
      social: {
        title: "Folgen Sie Unserer Arbeit",
      },
    },

    // Footer
    footer: {
      description:
        "Professionelle Tattoo-Kunst, wo Kreativität auf Handwerk trifft. Wir verwandeln Ihre Vision in atemberaubende Körperkunst, die Ihre einzigartige Geschichte erzählt.",
      quickLinks: "Schnelle Links",
      contactTitle: "Kontakt",
      copyright:
        "© 2024 Jazz Art Tattoo Studio. Alle Rechte vorbehalten. | Professionelle Tattoo-Dienstleistungen mit höchsten Standards für Sicherheit und Kunst.",
    },

    // Portfolio
    portfolio: {
      title: "UNSER",
      titleHighlight: "PORTFOLIO",
      description:
        "Entdecken Sie unsere Sammlung maßgeschneiderter Tattoo-Kunst. Jedes Stück erzählt eine einzigartige Geschichte, die mit Präzision und Leidenschaft geschaffen wurde.",
      categories: {
        all: "Alle",
        geometric: "Geometrisch",
        realistic: "Realistisch",
        traditional: "Traditionell",
        biomechanical: "Biomechanisch",
        watercolor: "Aquarell",
        minimalist: "Minimalistisch",
        japanese: "Japanisch",
        dotwork: "Dotwork",
      },
      readyText: "Bereit, Ihr eigenes Meisterwerk zu schaffen?",
      startJourney: "Beginnen Sie Ihre Reise",
    },
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pl")

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        return key // Return the key if translation not found
      }
    }

    return typeof value === "string" ? value : key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
