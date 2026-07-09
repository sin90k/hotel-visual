"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, Check, QrCode } from "lucide-react";
import { FormEvent, useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const caseImages = [
  { before: "/images/photo-enhancement-before.png", after: "/images/photo-enhancement-v2.png" },
  { before: "/images/room-upgrade-preview-before.png", after: "/images/room-upgrade-preview-v2.png" },
  { before: "/images/villa-presentation-before.png", after: "/images/villa-presentation-v2.png" },
];

const copy = {
  zh: {
    hero: { eyebrow: "酒店房源视觉优化", title: "提升酒店房源的视觉呈现", body: "优化客房图片与OTA页面，让房源价值更清晰地传达给潜在住客。", primary: "获取初步评估", secondary: "查看案例" },
    why: { title: "预订决策，始于第一印象", body: "从主图到详情页，清晰呈现客房的空间、设施与质感。", cards: [["优化首图呈现", "突出房型特点，提升列表页辨识度。"], ["理清信息层级", "让客人更快理解客房空间与设施。"], ["强化价值表达", "使图片质感与房源定位保持一致。"]] },
    products: { title: "两项服务，完善展示与住客体验", photo: { label: "核心服务", title: "客房视觉优化", body: "在保持真实感的前提下，改善现有客房图片的呈现质量。", bullets: ["光线与色彩校正", "空间层次强化", "床品与材质优化", "整套图片风格统一", "OTA主图适配", "无需重新拍摄"], cta: "了解客房视觉优化" }, feedback: { label: "住客反馈与服务跟进系统", title: "吐槽码", body: "从住客扫码反馈到酒店派单处理，全程记录跟进状态。", bullets: ["客房二维码反馈入口", "风险识别与自动派单", "员工处理与经理督办", "住客确认与记录复盘"], cta: "了解吐槽码", example: { label: "场景示例", room: "房间 1208", title: "住客反馈：空调噪声", status: "工程工单已生成，正在跟进" } } },
    cases: { title: "视觉优化案例", body: "基于同一房间与拍摄角度，展示优化前后的呈现差异。", labels: ["标准客房视觉优化", "高端房型升级预览", "别墅场景视觉强化"], summaries: [["优化空间层次", "提高画面清晰度", "统一整体色调"], ["强化材质与床品质感", "明确升级后的空间定位", "辅助判断改造方向"], ["改善室内与景观衔接", "统一度假场景氛围", "强化主图信息表达"]], before: "优化前", after: "优化后", summary: "优化重点" },
    review: { title: "提交酒店链接，获取初步视觉评估", body: "我们将人工检查客房图片、主图排序与OTA页面呈现。", includes: ["3项优先优化建议", "1张示例参考图", "OTA页面展示检查", "客房图片调整方向"], fields: ["酒店或民宿名称", "酒店官网或房源链接", "联系邮箱", "WhatsApp", "想重点改善的内容"], button: "提交评估", sending: "正在提交…", success: "提交成功", successBody: "我们已收到房源信息。完成检查后，工作人员会与您联系。" },
    feedback: { title: "住客反馈，及时跟进", body: "让酒店及时收到问题，并在退房前完成处理与确认。", steps: ["住客提出反馈", "扫码提交内容", "系统通知酒店", "相关人员处理", "完成确认记录"] },
    final: { title: "改善房源的第一印象", body: "提交酒店或民宿链接，获取客房图片与OTA页面的初步评估。", button: "获取初步评估" },
  },
  en: {
    hero: { eyebrow: "Room presentation & guest recovery", title: "Make Every Room Easier to Book", body: "Stronger OTA presentation and faster in-stay service recovery.", primary: "Get Free Assessment", secondary: "View Cases" },
    why: { title: "Win the First Look", body: "The hero image earns the click. Clear details support the booking.", cards: [["More Clicks", "Stand out in crowded search results."], ["More Confidence", "Show the room clearly and credibly."], ["Stronger Value", "Make the rate easier to understand."]] },
    products: { title: "Our Products", photo: { label: "Primary product", title: "Room Photo Enhancement", body: "Help guests see the real value of a room at first glance on OTA platforms.", bullets: ["Lighting optimization", "Consistent color", "Enhanced sense of space", "Better bedding texture", "OTA hero image", "No reshoot required"], cta: "Explore Photo Enhancement" }, feedback: { label: "In-stay service recovery", title: "Guest Issue Management", body: "Guests scan a room QR and open a mobile web page. Reports are triaged, assigned, handled and tracked through to closure—no app required.", bullets: ["Room QR and mobile web entry", "Risk triage and automatic work orders", "Mobile staff handling and manager oversight", "Guest confirmation and reporting"], cta: "Explore Service Recovery", example: { label: "Example", room: "Room 1208", title: "Guest report: AC noise", status: "Engineering work order created · Follow-up in progress" } } },
    cases: { title: "Real Examples", body: "The same room and camera angle, shown before and after optimization.", labels: ["Room Photo Enhancement", "Suite Upgrade Preview", "Villa Presentation"], summaries: [["More natural light", "Clearer room depth", "Stronger OTA thumbnail"], ["Clearer materials and bedding", "Easier to understand room value", "More visible upgrade direction"], ["Clearer indoor–outdoor relationship", "Stronger holiday atmosphere", "More attractive hero image"]], before: "Before", after: "After", summary: "Improvements" },
    review: { title: "Submit your property for an initial assessment", body: "Our team will manually review the listing and room presentation.", includes: ["3 photo optimization recommendations", "1 complimentary sample image", "OTA presentation analysis", "Room presentation recommendations"], fields: ["Property Name", "Website or Listing URL", "Email", "WhatsApp", "Message"], button: "Request Assessment", sending: "Submitting…", success: "Thank you", successBody: "We have received your property information. Our team will review it manually and contact you when the assessment is ready." },
    feedback: { title: "Reduce avoidable negative reviews", body: "Give guests an easier way to speak up and your team time to make things right.", steps: ["Guest notices an issue", "Scan QR", "Hotel receives notification", "Issue resolved", "Avoid negative review"] },
    final: { title: "See how many bookings your photos may be wasting", body: "Submit your hotel link for a free room-presentation assessment.", button: "Get Free Assessment" },
  },
  ja: {
    hero: { eyebrow: "宿泊施設の販売支援", title: "客室の魅力を、予約につなげる。", body: "客室写真と予約サイトの見せ方を整え、滞在中の声にも早く対応します。", primary: "無料診断を申し込む", secondary: "改善事例を見る" },
    why: { title: "選ばれる客室の条件", body: "主写真で目に留まり、客室情報で納得してもらう。", cards: [["一覧で目に留まる", "主写真の印象を整えます。"], ["予約の迷いを減らす", "広さや設備を明確に伝えます。"], ["料金への納得感", "客室の質を正しく見せます。"]] },
    products: { title: "ご提供するサービス", photo: { label: "中心となるサービス", title: "客室写真の見せ方改善", body: "撮り直しをしなくても、今ある写真から客室本来の魅力を引き出せます。", bullets: ["自然な明るさに調整", "写真全体の色味を統一", "奥行きと広がりを表現", "寝具の清潔感と質感を強調", "予約サイトのメイン写真を最適化", "再撮影は不要"], cta: "写真改善について見る" }, feedback: { label: "滞在中サービスリカバリー", title: "ゲスト対応管理", body: "客室QRからスマートフォン用Webページを開き、届いた声を判定・担当部署へ共有。対応状況を記録し、完了まで追跡します。アプリは不要です。", bullets: ["客室QRとスマートフォン用Webページ", "リスク判定とタスクの自動作成", "スタッフのモバイル対応と責任者の督促", "ゲスト確認と対応レポート"], cta: "サービスリカバリーを見る", example: { label: "利用イメージ", room: "客室 1208", title: "ご意見：空調の音", status: "設備担当のタスクを作成・対応状況を確認中" } } },
    cases: { title: "写真改善の事例", body: "同じ客室・同じアングルで、見せ方を整える前後の違いをご覧いただけます。", labels: ["客室写真の見せ方改善", "スイート客室の改装イメージ", "ヴィラの魅力訴求"], summaries: [["暗さを抑え、自然な明るさに", "客室の奥行きを分かりやすく", "一覧画面でも目に留まる主写真へ"], ["素材や寝具の質感を明確に", "改装後の価値をイメージしやすく", "投資前に方向性を確認"], ["室内と眺望のつながりを明確に", "滞在シーンが伝わる見せ方に", "施設の魅力が一枚で伝わる主写真へ"]], before: "改善前", after: "改善後", summary: "改善したポイント" },
    review: { title: "施設ページの初期診断を承ります。", body: "客室写真と予約サイトでの見え方を、担当者が確認します。", includes: ["優先して直したいポイント3点", "改善イメージが分かるサンプル画像1点", "予約サイト上での見え方の診断", "客室の魅力を伝えるための改善案"], fields: ["施設名", "公式サイトまたは掲載ページ", "メールアドレス", "WhatsApp", "ご相談内容"], button: "無料診断を申し込む", sending: "送信中…", success: "お申し込みありがとうございます", successBody: "施設情報を受け付けました。内容を確認し、担当者よりご連絡します。" },
    feedback: { title: "低評価になる前に、ゲストの声を拾う。", body: "伝えにくい小さな不満を、滞在中に施設へ届けてもらうための仕組みです。", steps: ["ゲストが困りごとに気づく", "客室のQRを読み取る", "施設スタッフへ通知", "滞在中に対応", "低評価口コミを防ぐ"] },
    final: { title: "写真で機会を逃していないか、確かめてみませんか。", body: "施設ページをお送りいただければ、客室の見せ方を無料で診断します。", button: "無料診断を申し込む" },
  },
} as const;

function BeforeAfter({ before, after, beforeLabel, afterLabel }: { before: string; after: string; beforeLabel: string; afterLabel: string }) {
  const [position, setPosition] = useState(50);
  return <div className="home-compare"><div className="home-photo" style={{ backgroundImage: `url(${before})` }} /><div className="home-photo" style={{ backgroundImage: `url(${after})`, clipPath: `inset(0 0 0 ${position}%)` }} /><span className="home-before">{beforeLabel}</span><span className="home-after">{afterLabel}</span><i style={{ left: `${position}%` }} /><b style={{ left: `${Math.min(97, Math.max(3, position))}%` }}>‹ ›</b><input aria-label="Before after comparison" type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} /></div>;
}

export default function HomePage() {
  const { locale } = useLocale();
  const c = copy[locale];
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setFormStatus("sending"); const response = await fetch("/api/review", { method: "POST", body: new FormData(event.currentTarget) }); if (response.ok) setFormStatus("success"); else setFormStatus("idle"); }
  return <main className="marketing-home">
    <SiteHeader />
    <section className="home-hero"><div><p className="eyebrow"><span />{c.hero.eyebrow}</p><h1>{c.hero.title}</h1><p>{c.hero.body}</p><div><a className="button button-dark" href="#review">{c.hero.primary}<ArrowRight /></a><a className="text-button" href="#cases">{c.hero.secondary}</a></div></div><BeforeAfter before={caseImages[0].before} after={caseImages[0].after} beforeLabel={c.cases.before} afterLabel={c.cases.after} /></section>
    <section className="home-why"><div className="home-section-heading"><h2>{c.why.title}</h2><p>{c.why.body}</p></div><div>{c.why.cards.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="home-products"><h2>{c.products.title}</h2><div className="home-product-grid"><article className="home-photo-product"><div className="home-product-copy"><span>{c.products.photo.label}</span><h3>{c.products.photo.title}</h3><p>{c.products.photo.body}</p><ul>{c.products.photo.bullets.map(item => <li key={item}><Check />{item}</li>)}</ul><Link href="/products/photo-enhancement">{c.products.photo.cta}<ArrowRight /></Link></div><div className="product-photo-preview"><div style={{backgroundImage:`url(${caseImages[0].before})`}}><span>{c.cases.before}</span></div><div style={{backgroundImage:`url(${caseImages[0].after})`}}><span>{c.cases.after}</span></div><i /></div></article><article className="home-feedback-product"><QrCode /><span>{c.products.feedback.label}</span><h3>{c.products.feedback.title}</h3><p>{c.products.feedback.body}</p><ul>{c.products.feedback.bullets.map(item => <li key={item}><Check />{item}</li>)}</ul><div className="feedback-mini-case"><small>{c.products.feedback.example.label}</small><div><b>{c.products.feedback.example.room}</b><span>{c.products.feedback.example.title}</span></div><p><Check />{c.products.feedback.example.status}</p></div><Link href="/products/guest-feedback">{c.products.feedback.cta}<ArrowRight /></Link></article></div></section>
    <section className="home-cases" id="cases"><div className="home-section-heading"><h2>{c.cases.title}</h2><p>{c.cases.body}</p></div>{caseImages.map((images, index) => <article className="home-case" key={images.after}><div><span>0{index + 1}</span><h3>{c.cases.labels[index]}</h3></div><BeforeAfter before={images.before} after={images.after} beforeLabel={c.cases.before} afterLabel={c.cases.after} /><aside><strong>{c.cases.summary}</strong>{c.cases.summaries[index].map(item => <p key={item}><Check />{item}</p>)}</aside></article>)}</section>
    <section className="home-review" id="review"><div><h2>{c.review.title}</h2><p>{c.review.body}</p><ul>{c.review.includes.map(item => <li key={item}><Check />{item}</li>)}</ul></div>{formStatus === "success" ? <div className="home-success"><Check /><h3>{c.review.success}</h3><p>{c.review.successBody}</p></div> : <form onSubmit={submit}>{c.review.fields.slice(0,4).map((field,index)=><label key={field}><span>{field}</span><input name={["propertyName","websiteUrl","email","whatsapp"][index]} type={index===1?"url":index===2?"email":"text"} required={index===0||index===2} /></label>)}<label className="wide"><span>{c.review.fields[4]}</span><textarea name="message" rows={3} /></label><button className="button button-gold" type="submit">{formStatus === "sending" ? c.review.sending : c.review.button}<ArrowRight /></button></form>}</section>
    <section className="home-feedback"><div><p className="eyebrow"><span />{c.products.feedback.title}</p><h2>{c.feedback.title}</h2><p>{c.feedback.body}</p></div><div>{c.feedback.steps.map((step,index)=><div key={step}><span>0{index+1}</span><strong>{step}</strong>{index<c.feedback.steps.length-1&&<ArrowDown />}</div>)}</div></section>
    <section className="home-final"><h2>{c.final.title}</h2><p>{c.final.body}</p><a className="button button-gold" href="#review">{c.final.button}<ArrowRight /></a></section>
    <SiteFooter />
  </main>;
}
