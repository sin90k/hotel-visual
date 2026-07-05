"use client";

import { ArrowRight, Check, Clock3, MessageSquareWarning, QrCode, ShieldCheck, Star } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const feedbackCopy = {
  en: {
    eyebrow: "Guest experience product", title: "Resolve the issue before it becomes the review.", body: "A private feedback QR for hotel rooms. Guests can report a problem in seconds, giving your team a chance to act while they are still on the property.", cta: "Request a demo", back: "All products",
    problemTitle: "Most public complaints started as solvable problems.", problemBody: "A missing towel, noisy air conditioner or slow response can become a one-star review when guests do not know who to tell.",
    benefits: [["Private first", "Feedback goes directly to your team—not to a public review site."], ["Act sooner", "Know what happened while there is still time to make it right."], ["Simple for guests", "No app, account or long form. Scan, select and send."]],
    stepsTitle: "From guest issue to a resolved stay.", steps: [["Guest notices an issue", "A room or service problem affects the stay."], ["Scan QR", "The guest scans the room-specific Guest Feedback QR."], ["Hotel receives an alert", "The team receives the room number and issue details."], ["Issue resolved", "Staff follow up while the guest is still on the property."], ["Avoid a negative review", "A resolved issue is less likely to become a public complaint."]],
    price: "Starting from $29 / room", final: "Give guests an easier way to speak up.", demo: "Get Guest Feedback QR", why: "Why it matters", how: "How it works", demoUi: { room: "Room 1208", question: "How can we help?", issue: "Room issue", housekeeping: "Housekeeping", other: "Something else", private: "Sent privately to the hotel team" },
  },
  ja: {
    eyebrow: "滞在中のご意見受付QR", title: "口コミになる前に、声を拾う。", body: "ゲストが滞在中の困りごとを、施設へ直接伝えられる客室用QRです。小さな不満をその場で把握し、チェックアウト前の対応につなげます。", cta: "導入について相談する", back: "サービス一覧",
    problemTitle: "低評価のきっかけは、滞在中の小さな行き違いかもしれません。", problemBody: "タオルが足りない、空調の音が気になる、スタッフに伝える方法が分からない。早く気づければ解決できたことも、声を拾えないままでは口コミに残ってしまいます。",
    benefits: [["施設へ直接届く", "投稿サイトを経由せず、内容と客室番号をスタッフが確認できます。"], ["チェックアウト前に対応", "滞在中に状況を把握できるため、その場での案内や対応が可能です。"], ["ゲストに負担をかけない", "アプリも会員登録も不要。読み取り、選択、送信だけで完了します。"]],
    stepsTitle: "ゲストの声を、滞在中の対応につなげます。", steps: [["困りごとが発生", "客室やサービスについて、ゲストが不便を感じます。"], ["客室のQRを読み取る", "スマートフォンから、該当する内容を選んで送信します。"], ["スタッフへ通知", "客室番号と内容が、施設の担当者へ届きます。"], ["その場で対応", "チェックアウト前に状況を確認し、必要な対応を行います。"], ["低評価口コミを防ぐ", "解決できる不満を、未対応のまま残しません。"]],
    price: "1室 $29〜", final: "言いづらい不満を、早めに拾える施設へ。", demo: "導入について相談する", why: "滞在中に声を拾う理由", how: "ご利用の流れ", demoUi: { room: "客室 1208", question: "お困りのことをお知らせください", issue: "客室設備について", housekeeping: "清掃・備品について", other: "その他のご相談", private: "内容は施設スタッフだけに届きます" },
  },
  zh: {
    eyebrow: "住客反馈二维码", title: "把客诉留在店内解决", body: "住客在入住期间遇到不满，可以直接扫码联系酒店。前台或运营人员第一时间收到客诉，尽量赶在住客退房前处理。", cta: "申请产品演示", back: "返回服务列表",
    problemTitle: "很多差评，本来可以在住客退房前解决", problemBody: "少一条毛巾、空调噪声太大、客房清洁不到位，往往都不难处理。真正麻烦的是酒店一直不知道，直到差评已经发到平台上。",
    benefits: [["客诉直达酒店", "住客提交的内容只发给酒店工作人员，不会公开发布。"], ["趁住客还在店及时处理", "及时知道房号和不满事项，前台、客房或工程人员才能尽快跟进。"], ["住客扫码就能反馈", "不用下载应用，也不用注册账号，几步即可提交。"]],
    stepsTitle: "从住客提出不满，到酒店及时处理", steps: [["入住期间产生不满", "住客对客房设施、卫生或服务感到不满意。"], ["扫描房间二维码", "住客选择客诉类型，并填写需要酒店处理的事项。"], ["酒店收到客诉提醒", "工作人员看到房号、客诉内容和提交时间。"], ["退房前跟进处理", "相关部门及时联系住客并安排处理。"], ["减少公开差评", "能在店内解决的客诉，不再拖到住客离店以后。"]],
    price: "$29 / 间起", final: "别等差评发出来，才知道住客哪里不满意", demo: "申请产品演示", why: "为什么要提前接住客诉", how: "客诉处理流程", demoUi: { room: "房间 1208", question: "您对本次入住哪里不满意？", issue: "客房设施", housekeeping: "卫生与清洁", other: "其他客诉", private: "仅酒店工作人员可见" },
  },
} as const;

export default function GuestFeedbackPage() {
  const { locale } = useLocale();
  const copy = feedbackCopy[locale];
  return (
    <main className="feedback-page">
      <SiteHeader />
      <section className="feedback-hero"><div><p className="eyebrow light"><span />{copy.eyebrow}</p><h1>{copy.title}</h1><p>{copy.body}</p><a className="button button-gold" href="mailto:hello@ottervisual.com">{copy.cta}<ArrowRight /></a></div><FeedbackDemo copy={copy.demoUi} /></section>
      <section className="feedback-problem"><div><p className="eyebrow"><span />{copy.why}</p><h2>{copy.problemTitle}</h2></div><p>{copy.problemBody}</p></section>
      <section className="feedback-benefits">{copy.benefits.map(([title, body], index) => { const Icon = [ShieldCheck, Clock3, QrCode][index]; return <article key={title}><Icon /><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>; })}</section>
      <section className="feedback-steps"><p className="eyebrow"><span />{copy.how}</p><h2>{copy.stepsTitle}</h2><div>{copy.steps.map(([title, body], index) => <article key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section className="feedback-final"><div><p>{copy.price}</p><h2>{copy.final}</h2></div><a className="button button-gold" href="mailto:hello@ottervisual.com">{copy.demo}<ArrowRight /></a></section>
      <SiteFooter />
    </main>
  );
}

function FeedbackDemo({ copy }: { copy: { readonly room: string; readonly question: string; readonly issue: string; readonly housekeeping: string; readonly other: string; readonly private: string } }) {
  return <div className="feedback-demo"><div className="demo-top"><QrCode /><span>{copy.room}</span></div><div className="demo-card"><p>{copy.question}</p>{[[copy.issue, MessageSquareWarning], [copy.housekeeping, Check], [copy.other, Star]].map(([label, Icon]) => { const C = Icon as typeof Check; return <div key={label as string}><C /><span>{label as string}</span><ArrowRight /></div>; })}</div><div className="demo-status"><ShieldCheck /><span>{copy.private}</span></div></div>;
}
