"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { localeNames, type Locale } from "@/lib/i18n";
import { useLocale } from "@/components/locale-provider";

const shellCopy = {
  en: { brand: "Rakko Stay", home: "Home", photo: "Photo Enhancement", feedback: "Service Recovery", contact: "Free Assessment", descriptor: "Together through every stay", copyright: "All rights reserved." },
  ja: { brand: "ラッコステイ", home: "ホーム", photo: "写真改善", feedback: "ゲスト対応QR", contact: "無料相談", descriptor: "すべての滞在に、寄り添う。", copyright: "無断転載を禁じます。" },
  zh: { brand: "海獭住伴", home: "首页", photo: "客房图片优化", feedback: "吐槽码", contact: "免费评估", descriptor: "一起守住每一次入住体验", copyright: "版权所有。" },
} as const;

export function SiteHeader() {
  const { locale, setLocale } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const pathname = usePathname();
  const copy = shellCopy[locale];
  const links = [["/", copy.home], ["/products/photo-enhancement", copy.photo], ["/products/guest-feedback", copy.feedback]] as const;
  return <header className="unified-header">
    <Link href="/" className="brand brand-with-mark">
      <Image src="/brand/otter-stay/otter-stay-selected-icon.png" alt="" aria-hidden="true" width={46} height={46} priority />
      <span className="brand-text"><strong>{copy.brand}</strong><span>{copy.descriptor}</span></span>
    </Link>
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
    <div className="footer-brand-lockup">
      <Image src="/brand/otter-stay/otter-stay-selected-icon.png" alt="" aria-hidden="true" width={58} height={58} />
      <span><strong>{copy.brand}</strong><span>{copy.descriptor}</span></span>
    </div>
    <nav><Link href="/products/photo-enhancement">{copy.photo}</Link><Link href="/products/guest-feedback">{copy.feedback}</Link><a href="mailto:sohoumin@gmail.com">sohoumin@gmail.com</a></nav>
    <p>© {new Date().getFullYear()} {copy.brand}. {copy.copyright}</p>
  </footer>;
}
