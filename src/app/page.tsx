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
    hero: { eyebrow: "酒店客房图片与OTA展示优化", title: "把房间的价值展示出来", body: "优化客房图片和OTA页面，让酒店与民宿更容易获得预订；再通过住客反馈二维码提前接住客诉，减少原本可以避免的差评。", primary: "免费评估房源", secondary: "查看优化案例" },
    why: { title: "客人为什么会点开这间房？", body: "客人刷到房源后的前几秒，就会决定要不要继续看。主图是否吸引人、房间优势是否清楚，直接影响下一步。", cards: [["房源更容易被点开", "主图更醒目，客人才愿意进入详情页继续了解。"], ["客人更容易下单", "采光、空间和床品展示清楚，客人做决定时更有底。"], ["房价更有说服力", "照片把房间的档次和细节拍明白，客人更容易认可当前价格。"]] },
    products: { title: "两项服务，一个目标：多接订单，少留客诉", photo: { label: "核心服务", title: "客房图片优化", body: "不用重新拍摄，也能把现有照片里的采光、空间和床品质感更好地展示出来。", bullets: ["调整明暗与光线", "统一整套图片色调", "突出空间纵深", "提升床品与材质质感", "优化OTA主图", "无需重新拍摄"], cta: "查看图片优化服务" }, feedback: { label: "住中服务恢复系统", title: "住中客诉预警与处理", body: "住客扫码进入微信小程序提交客诉，系统完成风险识别、自动派单、员工处理和经理督办，让每条客诉都能跟进到闭环。", bullets: ["房间二维码与微信小程序", "风险识别与自动生成工单", "员工移动处理与经理督办", "住客确认与数据复盘"], cta: "查看住中客诉系统", example: { label: "场景示例", room: "房间 1208", title: "住客反馈：空调噪声", status: "已生成工程工单，工作人员正在跟进" } } },
    cases: { title: "图片优化案例", body: "同一间房、同一个拍摄角度，直接比较优化前后的区别。", labels: ["客房图片优化", "套房升级预览", "别墅主图优化"], summaries: [["光线更自然", "房间纵深更清楚", "OTA列表页主图更醒目"], ["材质与床品质感更清楚", "升级后的档次一眼可见", "装修方向更容易判断"], ["室内与景观衔接更自然", "度假氛围更完整", "主图更能吸引客人点开"]], before: "优化前", after: "优化后", summary: "主要调整" },
    review: { title: "发来酒店链接，免费帮您看一遍", body: "我们会由人工检查客房图片、主图排序和OTA页面里的实际展示效果。", includes: ["3项优先优化建议", "1张免费优化样图", "OTA页面展示检查", "客房图片调整建议"], fields: ["酒店或民宿名称", "官方网站", "Booking.com链接", "Airbnb链接", "联系邮箱", "WhatsApp", "想重点改善的内容"], button: "提交免费评估", sending: "正在提交…", success: "提交成功", successBody: "我们已收到房源信息。完成检查后，工作人员会与您联系。" },
    feedback: { title: "客诉别等到退房后才看见", body: "让住客在店期间就能把不满告诉酒店，工作人员才有机会及时处理。", steps: ["入住期间产生不满", "扫码提交客诉", "酒店及时收到", "退房前跟进处理", "减少公开差评"] },
    final: { title: "别让好房间输在照片上", body: "发来酒店或民宿链接，免费看看哪些图片最值得先调整。", button: "免费评估房源" },
  },
  en: {
    hero: { eyebrow: "Hospitality revenue optimization", title: "Show the real value of every room", body: "We help hotels and vacation rentals win more bookings through stronger room photography, better OTA presentation and a simple guest feedback system.", primary: "Get Free Assessment", secondary: "View Cases" },
    why: { title: "Why do some rooms sell better?", body: "Guests often decide within seconds whether a property is worth exploring.", cards: [["More Clicks", "A stronger first impression earns more listing clicks."], ["Higher Conversion", "Help guests understand room value more quickly."], ["Better Rate Acceptance", "Professional presentation supports perceived room value."]] },
    products: { title: "Our Products", photo: { label: "Primary product", title: "Room Photo Enhancement", body: "Help guests see the real value of a room at first glance on OTA platforms.", bullets: ["Lighting optimization", "Consistent color", "Enhanced sense of space", "Better bedding texture", "OTA hero image", "No reshoot required"], cta: "Explore Photo Enhancement" }, feedback: { label: "In-stay service recovery", title: "Guest Issue Management", body: "Guests scan a room QR and open a mobile web page. Reports are triaged, assigned, handled and tracked through to closure—no app required.", bullets: ["Room QR and mobile web entry", "Risk triage and automatic work orders", "Mobile staff handling and manager oversight", "Guest confirmation and reporting"], cta: "Explore Service Recovery", example: { label: "Example", room: "Room 1208", title: "Guest report: AC noise", status: "Engineering work order created · Follow-up in progress" } } },
    cases: { title: "Real Examples", body: "The same room and camera angle, shown before and after optimization.", labels: ["Room Photo Enhancement", "Suite Upgrade Preview", "Villa Presentation"], summaries: [["More natural light", "Clearer room depth", "Stronger OTA thumbnail"], ["Clearer materials and bedding", "Easier to understand room value", "More visible upgrade direction"], ["Clearer indoor–outdoor relationship", "Stronger holiday atmosphere", "More attractive hero image"]], before: "Before", after: "After", summary: "Improvements" },
    review: { title: "Submit your hotel link for a free assessment", body: "Our team will manually review your property.", includes: ["3 photo optimization recommendations", "1 complimentary sample image", "OTA presentation analysis", "Room presentation recommendations"], fields: ["Property Name", "Hotel Website", "Booking URL", "Airbnb URL", "Email", "WhatsApp", "Message"], button: "Get Free Assessment", sending: "Submitting…", success: "Thank you", successBody: "We have received your property information. Our team will review it manually and contact you when the assessment is ready." },
    feedback: { title: "Reduce avoidable negative reviews", body: "Give guests an easier way to speak up and your team time to make things right.", steps: ["Guest notices an issue", "Scan QR", "Hotel receives notification", "Issue resolved", "Avoid negative review"] },
    final: { title: "See how many bookings your photos may be wasting", body: "Submit your hotel link for a free room-presentation assessment.", button: "Get Free Assessment" },
  },
  ja: {
    hero: { eyebrow: "宿泊施設の集客を、写真から改善", title: "写真で、選ばれる客室へ。", body: "客室写真と予約サイトでの見せ方を整え、ホテルや民泊の魅力が、予約前のゲストにきちんと伝わる状態をつくります。滞在中の小さな不満を早めに拾う仕組みもご用意しています。", primary: "無料診断を申し込む", secondary: "改善事例を見る" },
    why: { title: "予約される客室は、写真の見せ方が違います。", body: "予約サイトでは、最初の数枚で「もっと見たい」と思ってもらえるかが決まります。", cards: [["一覧で目に留まる", "数ある施設の中から、まず選択肢に入る写真へ整えます。"], ["魅力が伝わり、予約につながる", "広さや明るさ、過ごし方が伝わると、予約前の迷いが減ります。"], ["料金への納得感が高まる", "客室の良さが正しく伝わることで、価格だけで比較されにくくなります。"]] },
    products: { title: "ご提供するサービス", photo: { label: "中心となるサービス", title: "客室写真の見せ方改善", body: "撮り直しをしなくても、今ある写真から客室本来の魅力を引き出せます。", bullets: ["自然な明るさに調整", "写真全体の色味を統一", "奥行きと広がりを表現", "寝具の清潔感と質感を強調", "予約サイトのメイン写真を最適化", "再撮影は不要"], cta: "写真改善について見る" }, feedback: { label: "滞在中サービスリカバリー", title: "ゲスト対応管理", body: "客室QRからスマートフォン用Webページを開き、届いた声を判定・担当部署へ共有。対応状況を記録し、完了まで追跡します。アプリは不要です。", bullets: ["客室QRとスマートフォン用Webページ", "リスク判定とタスクの自動作成", "スタッフのモバイル対応と責任者の督促", "ゲスト確認と対応レポート"], cta: "サービスリカバリーを見る", example: { label: "利用イメージ", room: "客室 1208", title: "ご意見：空調の音", status: "設備担当のタスクを作成・対応状況を確認中" } } },
    cases: { title: "写真改善の事例", body: "同じ客室・同じアングルで、見せ方を整える前後の違いをご覧いただけます。", labels: ["客室写真の見せ方改善", "スイート客室の改装イメージ", "ヴィラの魅力訴求"], summaries: [["暗さを抑え、自然な明るさに", "客室の奥行きを分かりやすく", "一覧画面でも目に留まる主写真へ"], ["素材や寝具の質感を明確に", "改装後の価値をイメージしやすく", "投資前に方向性を確認"], ["室内と眺望のつながりを明確に", "滞在シーンが伝わる見せ方に", "施設の魅力が一枚で伝わる主写真へ"]], before: "改善前", after: "改善後", summary: "改善したポイント" },
    review: { title: "施設ページを拝見し、改善点を無料でご提案します。", body: "写真と予約サイトでの見え方を、担当者が一件ずつ確認します。", includes: ["優先して直したいポイント3点", "改善イメージが分かるサンプル画像1点", "予約サイト上での見え方の診断", "客室の魅力を伝えるための改善案"], fields: ["施設名", "公式サイト", "Booking.com掲載ページ", "Airbnb掲載ページ", "メールアドレス", "WhatsApp", "ご相談内容"], button: "無料診断を申し込む", sending: "送信中…", success: "お申し込みありがとうございます", successBody: "施設情報を受け付けました。内容を確認し、担当者よりご連絡します。" },
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
    <section className="home-review" id="review"><div><h2>{c.review.title}</h2><p>{c.review.body}</p><ul>{c.review.includes.map(item => <li key={item}><Check />{item}</li>)}</ul></div>{formStatus === "success" ? <div className="home-success"><Check /><h3>{c.review.success}</h3><p>{c.review.successBody}</p></div> : <form onSubmit={submit}>{c.review.fields.slice(0,6).map((field,index)=><label key={field}><span>{field}</span><input name={["propertyName","websiteUrl","bookingUrl","airbnbUrl","email","whatsapp"][index]} type={index===4?"email":index>0&&index<4?"url":"text"} required={index===0||index===4} /></label>)}<label className="wide"><span>{c.review.fields[6]}</span><textarea name="message" rows={3} /></label><button className="button button-gold" type="submit">{formStatus === "sending" ? c.review.sending : c.review.button}<ArrowRight /></button></form>}</section>
    <section className="home-feedback"><div><p className="eyebrow"><span />{c.products.feedback.title}</p><h2>{c.feedback.title}</h2><p>{c.feedback.body}</p></div><div>{c.feedback.steps.map((step,index)=><div key={step}><span>0{index+1}</span><strong>{step}</strong>{index<c.feedback.steps.length-1&&<ArrowDown />}</div>)}</div></section>
    <section className="home-final"><h2>{c.final.title}</h2><p>{c.final.body}</p><a className="button button-gold" href="#review">{c.final.button}<ArrowRight /></a></section>
    <SiteFooter />
  </main>;
}
