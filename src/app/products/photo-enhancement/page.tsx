"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  Check,
  Eye,
  Gauge,
  Mail,
  MapPin,
  MessageCircle,
  MousePointer2,
  Sparkles,
} from "lucide-react";
import { dictionaries } from "@/lib/i18n";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { useLocale } from "@/components/locale-provider";

const comparisonImages = [
  { before: "/images/photo-enhancement-before.png", after: "/images/photo-enhancement-v2.png", beforeFilter: "brightness(1.08) saturate(1.14) contrast(1.02) sepia(.035)" },
  { before: "/images/room-upgrade-preview-before.png", after: "/images/room-upgrade-preview-v2.png", beforeFilter: "brightness(1.03) saturate(1.04) contrast(1.01)" },
  { before: "/images/villa-presentation-before.png", after: "/images/villa-presentation-v2.png", beforeFilter: "brightness(1.09) saturate(1.12) contrast(1.01) sepia(.025)" },
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && node.classList.add("is-visible"), { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function Comparison({ title, beforeImage, afterImage, beforeFilter, before, after, featured = false }: { title: string; beforeImage: string; afterImage: string; beforeFilter: string; before: string; after: string; featured?: boolean }) {
  const [position, setPosition] = useState(50);
  const handlePosition = Math.min(97.5, Math.max(2.5, position));
  return (
    <article className={`comparison ${featured ? "comparison-featured" : ""}`}>
      <div className="comparison-heading">
        <h3>{title}</h3>
        <span>{String(position).padStart(2, "0")} / 100</span>
      </div>
      <div className="comparison-image">
        <div className="comparison-photo comparison-before" role="img" aria-label={`${title} before enhancement`} style={{ backgroundImage: `url(${beforeImage})`, filter: beforeFilter }} />
        <div className="comparison-photo comparison-after" role="img" aria-label={`${title} after enhancement`} style={{ backgroundImage: `url(${afterImage})`, clipPath: `inset(0 0 0 ${position}%)` }} />
        <span className="compare-label before-label">{before}</span>
        <span className="compare-label after-label">{after}</span>
        <div className="compare-line" style={{ left: `${position}%` }} />
        <span className="compare-handle" style={{ left: `${handlePosition}%` }}>‹ ›</span>
        <input aria-label={`Compare ${title}`} type="range" min="0" max="100" value={position} onChange={(e) => setPosition(Number(e.target.value))} />
      </div>
    </article>
  );
}

function ReviewForm({ copy, locale }: { copy: (typeof dictionaries)["en"]["review"]; locale: "en" | "ja" | "zh" }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const uploadCopy = {
    en: { label: "Room photos", choose: "Select photos", help: "Optional. Upload 1–5 existing room photos if available. JPG, PNG or WebP are fine." },
    ja: { label: "客室写真", choose: "写真を選択", help: "任意。写真があれば1〜5枚アップロードできます。JPG、PNG、WebPに対応しています。" },
    zh: { label: "客房照片", choose: "选择照片", help: "选填。如方便，可上传1–5张现有客房照片，支持 JPG、PNG 或 WebP。" },
  }[locale];
  const contactQr = {
    en: { title: "Prefer chat?", body: "Scan the QR code to add us on WhatsApp.", image: "/contact/whatsapp-qr.jpg", alt: "WhatsApp QR code", href: "https://wa.me/8618905957718", button: "Chat on WhatsApp" },
    ja: { title: "LINEでも相談できます", body: "お急ぎの場合や、写真をそのまま送りたい場合はこちらからご連絡ください。", image: "/contact/line-qr.jpg", alt: "LINE QRコード", href: "mailto:sohoumin@gmail.com", button: "メールで相談する" },
    zh: { title: "扫码添加微信", body: "也可以直接扫码添加微信沟通。", image: "/contact/wechat-qr.jpg", alt: "微信二维码", href: "mailto:sohoumin@gmail.com", button: "发送邮件咨询" },
  }[locale];
  const validationCopy = {
    en: { required: (field: string) => `Please enter ${field}.`, url: "Please enter a valid property or OTA URL.", email: "Please enter a valid email address." },
    ja: { required: (field: string) => `${field}を入力してください。`, url: "施設またはOTAページのURLを正しく入力してください。", email: "メールアドレスを正しく入力してください。" },
    zh: { required: (field: string) => `请填写${field}。`, url: "请填写有效的房源或OTA链接。", email: "请填写有效的邮箱地址。" },
  }[locale];

  function validate(form: HTMLFormElement) {
    const nextErrors: Record<string, string> = {};
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    if (!email) nextErrors.email = validationCopy.required(copy.fields[2]);
    if (!message) nextErrors.message = validationCopy.required(copy.fields[4]);
    const url = String(formData.get("websiteUrl") || "").trim();
    if (url && !/^https?:\/\/.+\..+/.test(url)) nextErrors.websiteUrl = validationCopy.url;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = validationCopy.email;
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate(event.currentTarget)) return;
    setStatus("sending");
    const form = event.currentTarget;
    const response = await fetch("/api/review", { method: "POST", body: new FormData(form) });
    setStatus(response.ok ? "success" : "error");
    if (response.ok) form.reset();
  }
  if (status === "success") return (
    <div className="success-state" role="status">
      <span><Check size={30} /></span>
      <h3>{copy.success}</h3>
      <p>{copy.successBody}</p>
      <button onClick={() => setStatus("idle")}>{copy.again}</button>
    </div>
  );
  return (
    <form className="review-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>
          <span>{copy.fields[2]} *</span>
          <input name="email" type="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} placeholder="name@example.com" onChange={() => errors.email && setErrors((current) => ({ ...current, email: "" }))} />
          {errors.email && <small id="email-error" className="field-error">{errors.email}</small>}
        </label>
        <label className="file-field">
          <span>{uploadCopy.label}</span>
          <input name="photos" type="file" accept="image/png,image/jpeg,image/webp" multiple />
          <div className="file-upload-box" aria-hidden="true"><b>{uploadCopy.choose}</b></div>
          <em>{uploadCopy.help}</em>
        </label>
      </div>
      <label className="message-field"><span>{copy.fields[4]} *</span><textarea name="message" rows={4} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} placeholder={copy.messagePlaceholder} onChange={() => errors.message && setErrors((current) => ({ ...current, message: "" }))} />{errors.message && <small id="message-error" className="field-error">{errors.message}</small>}</label>
      <div className="form-grid">
        <label>
          <span>{copy.fields[0]}</span>
          <input name="propertyName" type="text" placeholder={locale === "ja" ? "例：ホテル青葉" : locale === "zh" ? "例如：青岚酒店" : "The Willow House"} />
        </label>
        <label>
          <span>{copy.fields[1]}</span>
          <input name="websiteUrl" type="url" aria-invalid={Boolean(errors.websiteUrl)} aria-describedby={errors.websiteUrl ? "websiteUrl-error" : undefined} placeholder="https://example.com" onChange={() => errors.websiteUrl && setErrors((current) => ({ ...current, websiteUrl: "" }))} />
          {errors.websiteUrl && <small id="websiteUrl-error" className="field-error">{errors.websiteUrl}</small>}
        </label>
      </div>
      <div className="contact-qr-card"><Image className="contact-qr-image" src={contactQr.image} alt={contactQr.alt} width={108} height={108} /><div><strong>{contactQr.title}</strong><p>{contactQr.body}</p><a className="contact-qr-link" href={contactQr.href}>{contactQr.button}</a></div></div>
      <div className="form-footer">
        <p>{copy.consent}</p>
        <button disabled={status === "sending"} className="button button-gold" type="submit">{status === "sending" ? copy.sending : copy.submit}<ArrowRight size={17} /></button>
      </div>
      {status === "error" && <p className="form-error">{copy.error}</p>}
    </form>
  );
}

export default function Home() {
  const { locale } = useLocale();
  const copy = dictionaries[locale];
  const contactMethod = locale === "zh"
    ? { href: "#review", label: "微信二维码 / 邮件咨询" }
    : locale === "ja"
      ? { href: "#review", label: "LINE・メールで相談" }
      : { href: "#review", label: "WhatsApp / Email" };
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span />{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p className="hero-body">{copy.hero.body}</p>
          <div className="hero-actions"><button className="button button-dark" onClick={() => go("review")}>{copy.hero.primary}<ArrowRight size={17} /></button><button className="text-button" onClick={() => go("examples")}>{copy.hero.secondary}<ArrowDownRight size={17} /></button></div>
          <p className="trust"><Check size={14} />{copy.hero.trust}</p>
        </div>
        <div className="hero-system" aria-label="Property presentation review overview">
          <div className="system-top"><span>{copy.system.review.toUpperCase()} / 001</span><span className="live-dot">{copy.system.analysis.toUpperCase()}</span></div>
          <div className="system-visual">
            <Image src="/images/photo-enhancement-v2.png" alt="Room presentation analysis" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
            <span className="visual-tag tag-one">01 · {copy.system.tags[0]}</span><span className="visual-tag tag-two">02 · {copy.system.tags[1]}</span><span className="visual-tag tag-three">03 · {copy.system.tags[2]}</span>
          </div>
          <div className="system-bottom">
            {copy.system.metrics.map(([label, value], index) => <div key={label}><span>{label}</span><strong>{value}</strong><i><b style={{ width: ["78%", "66%", "88%"][index] }} /></i></div>)}
          </div>
        </div>
      </section>

      <section className="section comparisons" id="examples">
        <Reveal className="section-intro split-intro"><div><p className="eyebrow"><span />{copy.difference.eyebrow}</p><h2>{copy.difference.title}</h2></div><p>{copy.difference.body}</p></Reveal>
        <Reveal><Comparison title={copy.difference.items[0]} beforeImage={comparisonImages[0].before} afterImage={comparisonImages[0].after} beforeFilter={comparisonImages[0].beforeFilter} before={copy.difference.before} after={copy.difference.after} featured /></Reveal>
        <div className="comparison-grid">{comparisonImages.slice(1).map((images, index) => <Reveal key={images.after}><Comparison title={copy.difference.items[index + 1]} beforeImage={images.before} afterImage={images.after} beforeFilter={images.beforeFilter} before={copy.difference.before} after={copy.difference.after} /></Reveal>)}</div>
      </section>

      <section className="section why-section">
        <Reveal className="section-intro centered"><p className="eyebrow"><span />{copy.why.eyebrow}</p><h2>{copy.why.title}</h2><p>{copy.why.body}</p></Reveal>
        <div className="why-grid">{copy.why.cards.map(([title, body], i) => { const Icon = [MousePointer2, BarChart3, Eye][i]; return <Reveal key={title} className="why-card"><span><Icon size={25} /></span><b>0{i + 1}</b><h3>{title}</h3><p>{body}</p></Reveal>; })}</div>
      </section>

      <section className="optimize-section">
        <Reveal><p className="eyebrow light"><span />{copy.optimize.eyebrow}</p><h2>{copy.optimize.title}</h2></Reveal>
        <div>{copy.optimize.items.map((item, index) => <Reveal className="optimize-item" key={item}><span>{String(index + 1).padStart(2, "0")}</span><Check /><strong>{item}</strong></Reveal>)}</div>
      </section>

      <section className="section services-section" id="services">
        <Reveal className="services-title"><p className="eyebrow light"><span />{copy.services.eyebrow}</p><h2>{copy.services.title}</h2></Reveal>
        <div className="service-list">{copy.services.items.map(([num, title, body, price], i) => <Reveal key={title} className={`service-row ${i === 0 ? "primary-service" : ""}`}><span className="service-num">{num}</span><div><h3>{title}</h3><p>{body}</p></div><strong>{price}</strong><ArrowDownRight /></Reveal>)}</div>
      </section>

      <section className="section cost-section">
        <Reveal className="section-intro split-intro">
          <div><p className="eyebrow"><span />{copy.costBenefit.eyebrow}</p><h2>{copy.costBenefit.title}</h2></div>
          <p>{copy.costBenefit.body}</p>
        </Reveal>
        <div className="cost-grid">
          {copy.costBenefit.cards.map(([title, body], index) => {
            const Icon = [Gauge, Sparkles, Check][index];
            return <Reveal className={`cost-card ${index === 1 ? "cost-card-featured" : ""}`} key={title}><span>0{index + 1}</span><Icon /><h3>{title}</h3><p>{body}</p></Reveal>;
          })}
        </div>
        <Reveal className="cost-note"><Check size={16} />{copy.costBenefit.note}</Reveal>
      </section>

      <section className="section process-section" id="process">
        <Reveal className="section-intro split-intro"><div><p className="eyebrow"><span />{copy.process.eyebrow}</p><h2>{copy.process.title}</h2></div><p>{copy.process.support}</p></Reveal>
        <div className="process-track">{copy.process.steps.map(([title, body], i) => <Reveal className="process-step" key={title}><span>{String(i + 1).padStart(2, "0")}</span><div className="step-icon">{[<MousePointer2 key="a" />, <Gauge key="b" />, <Sparkles key="c" />, <Check key="d" />][i]}</div><h3>{title}</h3><p>{body}</p></Reveal>)}</div>
      </section>

      <section className="section case-section" id="cases">
        <Reveal className="section-intro split-intro"><div><p className="eyebrow"><span />{copy.cases.eyebrow}</p><h2>{copy.cases.title}</h2></div><p>{copy.cases.note}</p></Reveal>
        <div className="outcome-grid">{copy.cases.outcomes.map(([title, body], index) => { const Icon = [Eye, Gauge, Sparkles, MousePointer2][index]; return <Reveal className="outcome-item" key={title}><span>{String(index + 1).padStart(2, "0")}</span><Icon /><h3>{title}</h3><p>{body}</p></Reveal>; })}</div>
      </section>

      <section className="review-section" id="review">
        <Reveal className="review-copy"><p className="eyebrow light"><span />{copy.review.eyebrow}</p><h2>{copy.review.title}</h2><p>{copy.review.body}</p><ul>{copy.review.includes.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></Reveal>
        <Reveal><ReviewForm copy={copy.review} locale={locale} /></Reveal>
      </section>

      <section className="contact-section" id="contact">
        <div><p className="eyebrow"><span />{copy.contact.eyebrow}</p><h2>{copy.contact.title}</h2></div>
        <div className="contact-list"><a href="mailto:sohoumin@gmail.com"><Mail />sohoumin@gmail.com</a><a href={contactMethod.href}><MessageCircle />{contactMethod.label}</a><span><MapPin />{copy.contact.location}</span></div>
      </section>

      <SiteFooter />
    </main>
  );
}
