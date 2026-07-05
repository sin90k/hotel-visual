"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

const LocaleContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void } | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");
  useEffect(() => {
    const saved = window.localStorage.getItem("otter-locale");
    if (saved === "en" || saved === "ja" || saved === "zh") setLocale(saved);
  }, []);
  useEffect(() => {
    window.localStorage.setItem("otter-locale", locale);
    document.documentElement.lang = locale === "zh" ? "zh-CN" : locale;
  }, [locale]);
  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside LocaleProvider");
  return context;
}
