"use client"
import { createContext, useContext, useEffect, useState } from "react"

type languageContextType = {
  language: "en" | "pt"
  setChangeLanguage: () => void
}

const LanguageContext = createContext<languageContextType>({
  language: "en",
  setChangeLanguage: () => {},
})

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("lang")
    return value === "en" || value === "pt" ? value : "pt"
  }
  return "pt"
}

export const LanguageContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [language, setLanguage] = useState<"en" | "pt">(() => {
    return getFromLocalStorage()
  })

  const setChangeLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt")
  }

  useEffect(() => {
    localStorage.setItem("lang", language)
  }, [language])

  const contextValues: languageContextType = {
    language,
    setChangeLanguage,
  }

  return (
    <LanguageContext.Provider value={contextValues}>
      {children}
    </LanguageContext.Provider>
  )
}

const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageContextProvider")
  }
  return context
}

export default useLanguage
