"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Language, Translations } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("scholar4ethio-language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "am")) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Save language to localStorage
    localStorage.setItem("scholar4ethio-language", language)

    // Update document direction for RTL languages
    document.documentElement.dir = language === "am" ? "ltr" : "ltr" // Amharic uses LTR
    document.documentElement.lang = language
  }, [language])

  const t = getTranslation(language)
  const isRTL = false // Amharic uses LTR direction

  return <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
