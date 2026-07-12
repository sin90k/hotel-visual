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
    hero: { eyebrow: "酒店客房图片与OTA展示优化", title: "展示房源的魅力与价值", body: "优化客房图片和OTA页面，让酒店与民宿的真实优势更容易被潜在住客看见；通过吐槽码提前接住客诉，减少本可避免的差评。", primary: "免费评估房源", secondary: "查看优化案例" },
    why: { title: "预订决策，始于第一印象", body: "客人刷到房源后的前几秒，就会决定是否继续查看。主图是否吸引人、房间优势是否清楚，都会影响后续下单。", cards: [["优化首图呈现", "突出房型特点，提升列表页辨识度。"], ["理清信息层级", "让客人更快理解客房空间、设施与价值。"], ["强化价值表达", "使图片质感与房源定位保持一致。"]] },
    products: { title: "两项服务，围绕同一件事：提升预订与入住服务", photo: { label: "核心服务", title: "客房图片优化", body: "不用重新拍摄，也能把现有照片里的采光、空间和床品质感更好地展示出来。", bullets: ["光线与色彩校正", "空间层次强化", "床品与材质优化", "整套图片风格统一", "OTA主图适配", "无需重新拍摄"], cta: "了解客房图片优化" }, feedback: { label: "住客反馈与服务跟进系统", title: "吐槽码", body: "从住客扫码反馈到酒店派单处理，全程记录跟进状态，让每条客诉都能在退房前被看见、被处理。", bullets: ["客房二维码反馈入口", "风险识别与自动派单", "员工处理与经理督办", "住客确认与记录复盘"], cta: "了解吐槽码", example: { label: "场景示例", room: "房间 1208", title: "住客反馈：空调噪声", status: "工程工单已生成，正在跟进" } } },
    cases: { title: "视觉优化案例", body: "基于同一房间与拍摄角度，展示优化前后的呈现差异。", labels: ["标准客房视觉优化", "软装升级方案", "别墅场景视觉强化"], summaries: [["优化空间层次", "提高画面清晰度", "统一整体色调"], ["强化材质与床品质感", "明确升级后的空间定位", "辅助判断改造方向"], ["改善室内与景观衔接", "统一度假场景氛围", "强化主图信息表达"]], before: "优化前", after: "优化后", summary: "优化重点" },
    review: { title: "上传一张照片，获取初步视觉评估", body: "不一定需要先填写酒店名或网址。先上传客房照片并留下邮箱，我们会确认图片可改善的方向。", includes: ["3项优先优化建议", "1张示例参考图", "OTA页面展示检查", "客房图片调整方向"], fields: ["酒店或民宿名称", "房源或OTA链接", "联系邮箱", "WhatsApp", "想重点改善的内容"], button: "提交评估", sending: "正在提交…", success: "提交成功", successBody: "我们已收到照片和联系信息。确认后，工作人员会与您联系。" },
    feedback: { title: "吐槽码：把客诉留在退房前处理", body: "让酒店及时收到问题，并在住客离店前完成处理与确认。", steps: ["住客提出反馈", "扫码提交内容", "系统通知酒店", "相关人员处理", "完成确认记录"] },
    final: { title: "改善房源的第一印象", body: "提交酒店或民宿链接，获取客房图片与OTA页面的初步评估。", button: "免费评估房源" },
  },
  en: {
    hero: { eyebrow: "Room presentation & guest recovery", title: "Show the real value of every room", body: "We help hotels and vacation rentals improve OTA presentation through stronger room photography, and use Guest Feedback QR to catch avoidable complaints earlier.", primary: "Get Free Assessment", secondary: "View Cases" },
    why: { title: "Win the First Look", body: "Guests often decide within seconds whether a property is worth exploring.", cards: [["More Clicks", "Stand out in crowded search results."], ["More Confidence", "Show the room clearly and credibly."], ["Stronger Value", "Make the rate easier to understand."]] },
    products: { title: "Our Products", photo: { label: "Primary product", title: "Room Photo Enhancement", body: "Help guests see the real value of a room at first glance on OTA platforms.", bullets: ["Lighting optimization", "Consistent color", "Enhanced sense of space", "Better bedding texture", "OTA hero image", "No reshoot required"], cta: "Explore Photo Enhancement" }, feedback: { label: "In-stay service recovery", title: "Guest Issue Management", body: "Guests scan a room QR and open a mobile web page. Reports are triaged, assigned, handled and tracked through to closure—no app required.", bullets: ["Room QR and mobile web entry", "Risk triage and automatic work orders", "Mobile staff handling and manager oversight", "Guest confirmation and reporting"], cta: "Explore Service Recovery", example: { label: "Example", room: "Room 1208", title: "Guest report: AC noise", status: "Engineering work order created · Follow-up in progress" } } },
    cases: { title: "Real Examples", body: "The same room and camera angle, shown before and after optimization.", labels: ["Room Photo Enhancement", "Soft Furnishing Upgrade Plan", "Villa Presentation"], summaries: [["More natural light", "Clearer room depth", "Stronger OTA thumbnail"], ["Clearer materials and bedding", "Easier to understand room value", "More visible upgrade direction"], ["Clearer indoor–outdoor relationship", "Stronger holiday atmosphere", "More attractive hero image"]], before: "Before", after: "After", summary: "Improvements" },
    review: { title: "Upload a room photo for an initial assessment", body: "You do not need to share the property name or URL first. Upload a room photo, leave your email and we’ll review what can be improved.", includes: ["3 photo optimization recommendations", "1 complimentary sample image", "OTA presentation analysis", "Room presentation recommendations"], fields: ["Property Name", "Property or OTA URL", "Email", "WhatsApp", "Message"], button: "Request Assessment", sending: "Submitting…", success: "Thank you", successBody: "We have received your photo and contact information. After confirmation, our team will contact you with the assessment." },
    feedback: { title: "Reduce avoidable negative reviews", body: "Give guests an easier way to speak up and your team time to make things right.", steps: ["Guest notices an issue", "Scan QR", "Hotel receives notification", "Issue resolved", "Avoid negative review"] },
    final: { title: "See how many bookings your photos may be wasting", body: "Submit your hotel link for a free room-presentation assessment.", button: "Get Free Assessment" },
  },
  ja: {
    hero: { eyebrow: "客室写真・予約ページ改善", title: "客室の魅力が伝わる予約ページへ", body: "主写真や写真の並び、明るさ・色味を見直し、予約前のゲストが客室を選びやすい状態に整えます。撮影を手配する前に、今ある写真で改善できる点を整理します。", primary: "無料診断を申し込む", secondary: "改善事例を見る" },
    why: { title: "予約サイトで伝わりにくい理由", body: "写真の枚数や画質だけでなく、主写真・掲載順・客室情報の伝わり方が予約判断に影響します。", cards: [["主写真が選ばれにくい", "一覧画面で小さく表示されても、客室の特徴が伝わる写真へ整えます。"], ["写真の順番が分かりにくい", "ベッド、窓、浴室、設備が自然に伝わる流れへ整理します。"], ["撮影前の判断が難しい", "撮り直す前に、今ある写真で直せる点を確認します。"]] },
    products: { title: "ご提供するサービス", photo: { label: "中心となるサービス", title: "客室写真・予約ページ改善", body: "1枚 ¥200〜。新たにカメラマンを手配しなくても、既存写真を予約ページで使いやすい見え方へ整えます。必要に応じて、内装アップグレード案も画像で確認できます。", bullets: ["主写真の見直し", "写真掲載順の整理", "明るさと色味の調整", "広さと清潔感の表現", "OTA一覧画面での確認", "不足カットの整理"], cta: "写真改善について見る" }, feedback: { label: "滞在中サービスリカバリー", title: "ゲスト対応管理", body: "客室QRからスマートフォン用Webページを開き、届いた声を判定・担当部署へ共有。対応状況を記録し、完了まで追跡します。アプリは不要です。", bullets: ["客室QRとスマートフォン用Webページ", "リスク判定とタスク作成", "スタッフ対応と責任者の確認", "ゲスト確認と対応レポート"], cta: "サービスリカバリーを見る", example: { label: "利用イメージ", room: "客室 1208", title: "ご意見：空調の音", status: "設備担当のタスクを作成・対応状況を確認中" } } },
    cases: { title: "予約ページでの見え方改善", body: "同じ客室でも、主写真・明るさ・掲載順を整えることで、予約前に伝わる情報は変わります。", labels: ["客室写真・予約ページ改善", "内装アップグレード案", "ヴィラの魅力訴求"], summaries: [["主写真として伝わる明るさに", "客室の奥行きを分かりやすく", "一覧画面でも目に留まる写真へ"], ["素材や寝具の質感を明確に", "改装後の価値をイメージしやすく", "投資前に方向性を確認"], ["室内と眺望のつながりを明確に", "滞在シーンが伝わる見せ方に", "施設の魅力が一枚で伝わる主写真へ"]], before: "改善前", after: "改善後", summary: "改善したポイント" },
    review: { title: "写真を送って、改善点を確認", body: "施設名やURLは必須ではありません。まず客室写真とメールアドレスだけで、改善できる方向を確認できます。", includes: ["優先して直したいポイント3点", "改善イメージが分かるサンプル画像1点", "必要に応じた追加撮影の方向性", "予約サイト上での見え方の診断"], fields: ["施設名", "施設またはOTAページURL", "メールアドレス", "WhatsApp", "ご相談内容"], button: "無料診断を申し込む", sending: "送信中…", success: "お申し込みありがとうございます", successBody: "写真とご連絡先を受け付けました。確認後、担当者よりご連絡します。" },
    feedback: { title: "低評価になる前に、ゲストの声を拾う", body: "伝えにくい小さな不満を、滞在中に施設へ届けてもらうための仕組みです。", steps: ["ゲストが困りごとに気づく", "客室のQRを読み取る", "施設スタッフへ通知", "滞在中に対応", "低評価口コミを防ぐ"] },
    final: { title: "撮影の前に、まず掲載ページを見直しませんか", body: "施設ページをお送りいただければ、客室写真と予約サイトでの見え方を確認します。", button: "無料診断を申し込む" },
  },
} as const;

function BeforeAfter({ before, after, beforeLabel, afterLabel }: { before: string; after: string; beforeLabel: string; afterLabel: string }) {
  const [position, setPosition] = useState(50);
  return <div className="home-compare"><div className="home-photo" style={{ backgroundImage: `url(${before})` }} /><div className="home-photo" style={{ backgroundImage: `url(${after})`, clipPath: `inset(0 0 0 ${position}%)` }} /><span className="home-before">{beforeLabel}</span><span className="home-after">{afterLabel}</span><i style={{ left: `${position}%` }} /><b style={{ left: `${Math.min(97, Math.max(3, position))}%` }}>‹ ›</b><input aria-label="Before after comparison" type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} /></div>;
}

const formFieldNames = ["propertyName", "websiteUrl", "email", "whatsapp"] as const;

export default function HomePage() {
  const { locale } = useLocale();
  const c = copy[locale];
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const validationCopy = {
    en: { required: (field: string) => `Please enter ${field}.`, url: "Please enter a valid property or OTA URL.", email: "Please enter a valid email address." },
    ja: { required: (field: string) => `${field}を入力してください。`, url: "施設またはOTAページのURLを正しく入力してください。", email: "メールアドレスを正しく入力してください。" },
    zh: { required: (field: string) => `请填写${field}。`, url: "请填写有效的房源或OTA链接。", email: "请填写有效的邮箱地址。" },
  }[locale];
  const uploadCopy = {
    en: { label: "Upload room photos", help: "Upload 1–5 room photos.", required: "Please upload at least one room photo." },
    ja: { label: "写真をアップロード", help: "客室写真を1〜5枚アップロードしてください。", required: "写真を1枚以上アップロードしてください。" },
    zh: { label: "上传客房照片", help: "上传1–5张客房照片。", required: "请至少上传一张客房照片。" },
  }[locale];
  function validate(form: HTMLFormElement) {
    const nextErrors: Record<string, string> = {};
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();
    const photos = formData.getAll("photos").filter((item) => item instanceof File && item.size > 0);
    if (!email) nextErrors.email = validationCopy.required(c.review.fields[2]);
    if (photos.length === 0) nextErrors.photos = uploadCopy.required;
    const url = String(formData.get("websiteUrl") || "").trim();
    if (url && !/^https?:\/\/.+\..+/.test(url)) nextErrors.websiteUrl = validationCopy.url;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = validationCopy.email;
    setFormErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (!validate(event.currentTarget)) return; setFormStatus("sending"); const response = await fetch("/api/review", { method: "POST", body: new FormData(event.currentTarget) }); if (response.ok) setFormStatus("success"); else setFormStatus("idle"); }
  return <main className="marketing-home">
    <SiteHeader />
    <section className="home-hero"><div><p className="eyebrow"><span />{c.hero.eyebrow}</p><h1>{c.hero.title}</h1><p>{c.hero.body}</p><div><a className="button button-dark" href="#review">{c.hero.primary}<ArrowRight /></a><a className="text-button" href="#cases">{c.hero.secondary}</a></div></div><BeforeAfter before={caseImages[0].before} after={caseImages[0].after} beforeLabel={c.cases.before} afterLabel={c.cases.after} /></section>
    <section className="home-why"><div className="home-section-heading"><h2>{c.why.title}</h2><p>{c.why.body}</p></div><div>{c.why.cards.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="home-products"><h2>{c.products.title}</h2><div className="home-product-grid"><article className="home-photo-product"><div className="home-product-copy"><span>{c.products.photo.label}</span><h3>{c.products.photo.title}</h3><p>{c.products.photo.body}</p><ul>{c.products.photo.bullets.map(item => <li key={item}><Check />{item}</li>)}</ul><Link href="/products/photo-enhancement">{c.products.photo.cta}<ArrowRight /></Link></div><div className="product-photo-preview"><div style={{backgroundImage:`url(${caseImages[0].before})`}}><span>{c.cases.before}</span></div><div style={{backgroundImage:`url(${caseImages[0].after})`}}><span>{c.cases.after}</span></div><i /></div></article><article className="home-feedback-product"><QrCode /><span>{c.products.feedback.label}</span><h3>{c.products.feedback.title}</h3><p>{c.products.feedback.body}</p><ul>{c.products.feedback.bullets.map(item => <li key={item}><Check />{item}</li>)}</ul><div className="feedback-mini-case"><small>{c.products.feedback.example.label}</small><div><b>{c.products.feedback.example.room}</b><span>{c.products.feedback.example.title}</span></div><p><Check />{c.products.feedback.example.status}</p></div><Link href="/products/guest-feedback">{c.products.feedback.cta}<ArrowRight /></Link></article></div></section>
    <section className="home-cases" id="cases"><div className="home-section-heading"><h2>{c.cases.title}</h2><p>{c.cases.body}</p></div>{caseImages.map((images, index) => <article className="home-case" key={images.after}><div><span>0{index + 1}</span><h3>{c.cases.labels[index]}</h3></div><BeforeAfter before={images.before} after={images.after} beforeLabel={c.cases.before} afterLabel={c.cases.after} /><aside><strong>{c.cases.summary}</strong>{c.cases.summaries[index].map(item => <p key={item}><Check />{item}</p>)}</aside></article>)}</section>
    <section className="home-review" id="review"><div><h2>{c.review.title}</h2><p>{c.review.body}</p><ul>{c.review.includes.map(item => <li key={item}><Check />{item}</li>)}</ul></div>{formStatus === "success" ? <div className="home-success"><Check /><h3>{c.review.success}</h3><p>{c.review.successBody}</p></div> : <form onSubmit={submit} noValidate><label><span>{c.review.fields[2]} *</span><input name="email" type="email" aria-invalid={Boolean(formErrors.email)} placeholder="name@example.com" onChange={() => formErrors.email && setFormErrors((current) => ({ ...current, email: "" }))} />{formErrors.email && <small className="field-error">{formErrors.email}</small>}</label><label className="file-field"><span>{uploadCopy.label} *</span><input name="photos" type="file" accept="image/png,image/jpeg,image/webp" multiple aria-invalid={Boolean(formErrors.photos)} onChange={() => formErrors.photos && setFormErrors((current) => ({ ...current, photos: "" }))} /><em>{uploadCopy.help}</em>{formErrors.photos && <small className="field-error">{formErrors.photos}</small>}</label><label><span>{c.review.fields[0]}</span><input name={formFieldNames[0]} type="text" placeholder={locale==="ja" ? "例：ホテル青葉" : locale==="zh" ? "例如：青岚酒店" : "The Willow House"} /></label><label><span>{c.review.fields[1]}</span><input name={formFieldNames[1]} type="url" aria-invalid={Boolean(formErrors.websiteUrl)} placeholder="https://example.com" onChange={() => formErrors.websiteUrl && setFormErrors((current) => ({ ...current, websiteUrl: "" }))} />{formErrors.websiteUrl && <small className="field-error">{formErrors.websiteUrl}</small>}</label><label><span>{c.review.fields[3]}</span><input name={formFieldNames[3]} type="text" placeholder="+81 90 0000 0000" /></label><label className="wide"><span>{c.review.fields[4]}</span><textarea name="message" rows={3} placeholder={locale==="ja" ? "気になっている写真や客室があればお聞かせください。" : locale==="zh" ? "可以告诉我们目前最想改善哪类客房或哪组图片。" : "Tell us what you would like to improve."} /></label><button className="button button-gold" type="submit">{formStatus === "sending" ? c.review.sending : c.review.button}<ArrowRight /></button></form>}</section>
    <section className="home-feedback"><div><p className="eyebrow"><span />{c.products.feedback.title}</p><h2>{c.feedback.title}</h2><p>{c.feedback.body}</p></div><div>{c.feedback.steps.map((step,index)=><div key={step}><span>0{index+1}</span><strong>{step}</strong>{index<c.feedback.steps.length-1&&<ArrowDown />}</div>)}</div></section>
    <section className="home-final"><h2>{c.final.title}</h2><p>{c.final.body}</p><a className="button button-gold" href="#review">{c.final.button}<ArrowRight /></a></section>
    <SiteFooter />
  </main>;
}
