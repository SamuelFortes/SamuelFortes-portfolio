"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { dictionaries } from "@/locales";
import type { Dictionary, Language } from "@/locales/types";

const STORAGE_KEY = "language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default "pt" no SSR e no primeiro render do cliente para evitar mismatch
  // de hidratação; a preferência salva é aplicada após o mount.
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "en") {
      setLanguageState("en");
      document.documentElement.lang = "en";
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: dictionaries[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
