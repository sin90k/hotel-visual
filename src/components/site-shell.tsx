"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { localeNames, type Locale } from "@/lib/i18n";
import { useLocale } from "@/components/locale-provider";

const shellCopy = {
  en: { home: "Home", photo: "Photo Enhancement", feedback: "Guest Feedback QR", contact: "Free Assessment", descriptor: "Hospitality revenue optimization", copyright: "All rights reserved." },
  ja: { home: "ホーム", photo: "客室写真の見せ方改善", feedback: "ご意見受付QR", contact: "無料診断", descriptor: "宿泊施設の集客改善", copyright: "無断転載を禁じます。" },
  zh: { home: "首页", photo: "客房图片优化", feedback: "住客反馈二维码", contact: "免费评估", descriptor: "酒店获客与客诉改善", copyright: "版权所有。" },
} as const;

export function SiteHeader() {
  const { locale, setLocale } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const pathname = usePathname();
  const copy = shellCopy[locale];
  const links = [["/", copy.home], ["/products/photo-enhancement", copy.photo], ["/products/guest-feedback", copy.feedback]] as const;
  return <header className="unified-header">
    <Link href="/" className="brand"><strong>OTTER VISUAL</strong><span>{copy.descriptor}</span></Link>
    <nav className={menuOpen ? "open" : ""}>
      {links.map(([href, label]) => <Link key={href} className={pathname === href ? "active" : ""} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}
      <Link href="/#review">{copy.contact}</Link>
    </nav>
    <div className="unified-actions">
      <div className="language"><button onClick={() => setLanguageOpen(!languageOpen)}>{localeNames[locale]}<ChevronDown size={13} /></button>{languageOpen && <div className="language-menu">{(Object.keys(localeNames) as Locale[]).map((language) => <button key={language} onClick={() => { setLocale(language); setLanguageOpen(false); }}>{localeNames[language]}</button>)}</div>}</div>
      <button className="unified-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </div>
  </header>;
}

export function SiteFooter() {
  const { locale } = useLocale();
  const copy = shellCopy[locale];
  return <footer className="unified-footer">
    <div><strong>OTTER VISUAL</strong><span>{copy.descriptor}</span></div>
    <nav><Link href="/products/photo-enhancement">{copy.photo}</Link><Link href="/products/guest-feedback">{copy.feedback}</Link><a href="mailto:hello@ottervisual.com">hello@ottervisual.com</a></nav>
    <p>© {new Date().getFullYear()} Otter Visual. {copy.copyright}</p>
  </footer>;
}
