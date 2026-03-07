import { createContext, useContext, useState, useEffect } from "react";
import en from "./en";
import ar from "./ar";

const translations = { en, ar };

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  t: () => "",
  isRtl: false,
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolio-lang") || "en";
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (newLang) => {
    setLangState(newLang === "en" || newLang === "ar" ? newLang : "en");
  };

  const t = (path) => {
    const keys = path.split(".");
    let value = translations[lang];
    for (const key of keys) {
      value = value?.[key];
    }
    return value ?? path;
  };

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t, isRtl: lang === "ar" }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
