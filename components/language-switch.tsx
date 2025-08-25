"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

interface LanguageSwitchProps {
  textColor: string
}

export function LanguageSwitch({ textColor }: LanguageSwitchProps) {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("pl")}
        className={`px-2 py-1 text-xs font-medium transition-colors duration-300 ${
          language === "pl" ? "bg-primary text-black" : `${textColor} hover:bg-white/10`
        }`}
      >
        PL
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("de")}
        className={`px-2 py-1 text-xs font-medium transition-colors duration-300 ${
          language === "de" ? "bg-primary text-black" : `${textColor} hover:bg-white/10`
        }`}
      >
        DE
      </Button>
    </div>
  )
}
