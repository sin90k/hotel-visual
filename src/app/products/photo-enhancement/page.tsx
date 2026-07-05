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
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
    <form className="review-form" onSubmit={submit}>
      <div className="form-grid">
        {copy.fields.slice(0, 6).map((field, index) => (
          <label key={field}>
            <span>{field}{[0, 4].includes(index) ? " *" : ""}</span>
            <input name={["propertyName", "websiteUrl", "bookingUrl", "airbnbUrl", "email", "whatsapp"][index]} type={index === 4 ? "email" : index > 0 && index < 4 ? "url" : "text"} required={[0, 4].includes(index)} placeholder={index === 0 ? (locale === "ja" ? "例：ホテル青葉" : locale === "zh" ? "例如：青岚酒店" : "The Willow House") : index === 4 ? "name@example.com" : index === 5 ? "+81 90 0000 0000" : "https://"} />
          </label>
        ))}
      </div>
      <label className="message-field"><span>{copy.fields[6]}</span><textarea name="message" rows={4} placeholder={copy.messagePlaceholder} /></label>
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

      <section className="section process-section" id="process">
        <Reveal className="section-intro split-intro"><div><p className="eyebrow"><span />{copy.process.eyebrow}</p><h2>{copy.process.title}</h2></div><p>{copy.process.support}</p></Reveal>
        <div className="process-track">{copy.process.steps.map(([title, body], i) => <Reveal className="process-step" key={title}><span>{String(i + 1).padStart(2, "0")}</span><div className="step-icon">{[<MousePointer2 key="a" />, <Gauge key="b" />, <Sparkles key="c" />, <Check key="d" />][i]}</div><h3>{title}</h3><p>{body}</p></Reveal>)}</div>
      </section>

      <section className="section case-section" id="cases">
        <Reveal className="section-intro split-intro"><div><p className="eyebrow"><span />{copy.cases.eyebrow}</p><h2>{copy.cases.title}</h2></div><p>{copy.cases.note}</p></Reveal>
        <div className="outcome-grid">{copy.cases.outcomes.map((item, index) => <Reveal className="outcome-item" key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></Reveal>)}</div>
        <div className="case-layout">
          <Reveal className="case-main"><div className="case-image"><Image src="/images/photo-enhancement-v2.png" alt={copy.cases.mainLabel} fill sizes="(max-width: 900px) 100vw, 65vw" /></div><div className="case-copy"><span>01 / {copy.cases.mainLabel.toUpperCase()}</span><h3>{copy.cases.mainTitle}</h3><div><p>{copy.cases.impact}</p><strong>{copy.cases.main}</strong></div></div></Reveal>
          <div className="case-side"><Reveal className="mini-case"><Image src="/images/room-upgrade-preview-v2.png" alt={copy.cases.secondaryLabel} fill sizes="35vw" /><div><span>02 / {copy.cases.secondaryLabel.toUpperCase()}</span><p>{copy.cases.secondary}</p></div></Reveal><Reveal className="mini-case"><Image src="/images/villa-presentation-v2.png" alt={copy.cases.thirdLabel} fill sizes="35vw" /><div><span>03 / {copy.cases.thirdLabel.toUpperCase()}</span><h3>{copy.cases.thirdTitle}</h3><p>{copy.cases.third}</p></div></Reveal></div>
        </div>
      </section>

      <section className="review-section" id="review">
        <Reveal className="review-copy"><p className="eyebrow light"><span />{copy.review.eyebrow}</p><h2>{copy.review.title}</h2><p>{copy.review.body}</p><ul>{copy.review.includes.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></Reveal>
        <Reveal><ReviewForm copy={copy.review} locale={locale} /></Reveal>
      </section>

      <section className="contact-section" id="contact">
        <div><p className="eyebrow"><span />{copy.contact.eyebrow}</p><h2>{copy.contact.title}</h2></div>
        <div className="contact-list"><a href="mailto:hello@ottervisual.com"><Mail />hello@ottervisual.com</a><a href="https://wa.me/0000000000"><MessageCircle />WhatsApp</a><span><MapPin />{copy.contact.location}</span></div>
      </section>

      <SiteFooter />
    </main>
  );
}
