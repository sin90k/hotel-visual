"use client";

import Image from "next/image";
import { AlertTriangle, ArrowRight, BadgeCheck, BellRing, Building2, Check, ClipboardCheck, ClipboardPlus, Clock3, FileBarChart, LayoutDashboard, MessageSquareText, MessageSquareWarning, QrCode, ScanSearch, ShieldCheck, Smartphone, Star, Users, Wrench } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const feedbackCopy = {
  en: {
    eyebrow: "In-stay service recovery", title: "Resolve Issues Before Checkout", body: "Guests report by QR. Teams receive, assign and close each case.", cta: "Request a demo", back: "All products",
    problemTitle: "Solve It Before It Becomes a Review", problemBody: "Early visibility gives the hotel time to respond.",
    benefits: [["Private first", "Feedback goes directly to your team—not to a public review site."], ["Act sooner", "Know what happened while there is still time to make it right."], ["Simple for guests", "No app, account or long form. Scan, select and send."]],
    story: { eyebrow: "A visible service loop", title: "From a quiet guest signal to an accountable response", items: [["Guest reports the issue", "A room-level QR gives the guest a discreet way to ask for help."], ["The right team is alerted", "Room, issue and urgency arrive together so staff can act without chasing context."], ["The hotel resolves and records it", "The response stays visible through completion and follow-up."]] },
    system: { eyebrow: "Complete operating loop", title: "More than a feedback form", body: "Every valid report becomes a trackable service-recovery task.", capabilities: [["Room-level web entry", "The QR opens a room-aware mobile web page."], ["Multiple input formats", "Guests can submit selections, text, voice, images or video."], ["Risk triage", "Category, urgency, sentiment, repeats and timeout risk are assessed."], ["Automatic work orders", "Room, issue, evidence, priority and suggested department stay together."], ["Mobile staff handling", "Teams accept, update and complete assigned tasks from mobile."], ["Manager oversight", "Managers see high-risk, overdue and reopened cases."], ["Closure and reporting", "Guest confirmation, observation, reopening and trend reports complete the loop."]] },
    stepsTitle: "From guest report to a closed service‑recovery case", steps: [["Open mobile web page", "The room QR opens a web page with room context already attached."], ["Submit report", "The guest selects a category and adds text, voice, image or video."], ["Assess risk", "The system identifies category, urgency and escalation signals."], ["Create work order", "The right department receives a structured task."], ["Staff handles it", "Employees accept, update and record the resolution."], ["Manager oversees", "High-risk or overdue cases are escalated for follow-up."], ["Confirm and close", "The guest confirms resolution or the case reopens for further action."]],
    roles: { eyebrow: "One system, four views", title: "Useful at every level of hotel operations", items: [["For guests", "A fast way to ask for help without finding a phone number or installing an app."], ["For frontline teams", "Every task has a room, category, owner, status and handling record."], ["For managers", "See high-risk rooms, overdue tasks, repeats and team workload in one place."], ["For owners", "Review response time, risk trends and whether service recovery is working."]] },
    example: { eyebrow: "Example scenario", title: "How one guest report reaches the right team", note: "Illustrative product scenario — not client performance data.", event: "Room 1208 · Air-conditioning noise", timeline: [["22:14", "Guest submits report", "The guest reports that AC noise is affecting sleep."], ["22:15", "Front desk receives alert", "Room number, category and message arrive together."], ["22:20", "Engineering follows up", "The team confirms a suitable time to inspect the room."], ["22:42", "Hotel closes the loop", "The guest is contacted again after the issue is handled."]], resultTitle: "What the hotel gains", results: ["A clear record of the complaint", "The right department is notified sooner", "A chance to respond before checkout"] },
    price: "Starting from $29 / room", final: "Give guests an easier way to speak up.", demo: "Get Guest Feedback QR", why: "Why it matters", how: "How it works", demoUi: { room: "Room 1208", question: "How can we help?", issue: "Room issue", housekeeping: "Housekeeping", other: "Something else", private: "Sent privately to the hotel team" },
  },
  ja: {
    eyebrow: "滞在中サービスリカバリー", title: "困りごとを、滞在中に解決。", body: "客室QRから届いた内容を担当部署へ共有し、完了まで管理します。", cta: "導入について相談する", back: "サービス一覧",
    problemTitle: "口コミになる前に、館内で対応。", problemBody: "滞在中に把握できれば、その場で案内や対応ができます。",
    benefits: [["施設へ直接届く", "投稿サイトを経由せず、内容と客室番号をスタッフが確認できます。"], ["チェックアウト前に対応", "滞在中に状況を把握できるため、その場での案内や対応が可能です。"], ["ゲストに負担をかけない", "アプリも会員登録も不要。読み取り、選択、送信だけで完了します。"]],
    story: { eyebrow: "対応の流れ", title: "小さな気づきを、確実な対応へ", items: [["ゲストが知らせる", "客室QRから、周囲を気にせず困りごとを送れます。"], ["担当スタッフへ届く", "客室・内容・緊急度がまとまり、必要な部署へ共有されます。"], ["対応して記録する", "対応状況と結果を残し、確認まで追跡します。"]] },
    system: { eyebrow: "対応を止めない仕組み", title: "ご意見を、対応につなげる", body: "届いた声を、担当者と期限のある対応タスクへ変えます。", capabilities: [["客室別Webページ", "QRを読み取ると、客室情報を引き継いだページが開きます。"], ["複数の入力方法", "選択肢・文章・音声・画像・動画で状況を伝えられます。"], ["リスク判定", "内容、緊急度、感情、再送、対応遅れの兆候を確認します。"], ["タスクの自動作成", "客室、内容、証拠、優先度、担当候補をまとめて共有します。"], ["スタッフのモバイル対応", "担当者が受付、着手、対応内容、完了を記録します。"], ["責任者の督促", "高リスク、期限超過、再開した案件を一覧で確認できます。"], ["確認とレポート", "ゲスト確認、再開、観察期間、傾向レポートまで管理します。"]] },
    stepsTitle: "受付から対応完了まで", steps: [["Webページを開く", "客室QRから、客室情報付きのスマートフォン用ページを開きます。"], ["内容を送信", "項目を選び、文章・音声・画像・動画を追加できます。"], ["リスクを判定", "内容、緊急度、再送、対応遅れの兆候を確認します。"], ["対応タスクを作成", "フロント、客室、設備など適切な担当へ共有します。"], ["スタッフが対応", "受付、着手、対応内容、完了をモバイルで記録します。"], ["責任者が確認", "高リスクや期限超過の案件を督促します。"], ["確認して完了", "ゲストが解決を確認。未解決なら再開して対応を続けます。"]],
    roles: { eyebrow: "立場に合わせた画面", title: "必要な人に、必要な情報を", items: [["ゲスト", "アプリ不要で、困りごとをすぐ施設へ伝えられます。"], ["現場スタッフ", "客室、内容、担当、状態、対応履歴を一つのタスクで管理します。"], ["支配人・責任者", "高リスク、期限超過、再発、部署別の対応状況を確認できます。"], ["オーナー", "対応時間やリスク傾向から、サービス改善が機能しているか把握できます。"]] },
    example: { eyebrow: "利用イメージ", title: "ゲストの声が、担当スタッフへ届くまで", note: "以下は製品の利用イメージです。実際の導入実績を示すものではありません。", event: "客室1208 · 空調の音", timeline: [["22:14", "ゲストが送信", "空調の音で眠りにくいことを、客室のQRから伝えます。"], ["22:15", "フロントへ通知", "客室番号・内容・送信時刻がまとめて届きます。"], ["22:20", "設備担当が連絡", "入室可能な時間を確認し、点検に向かいます。"], ["22:42", "対応後に確認", "対応内容を記録し、ゲストへ状況を確認します。"]], resultTitle: "施設側に残るもの", results: ["ご意見と対応内容の記録", "担当部署への早めの共有", "チェックアウト前に対応する機会"] },
    price: "1室 $29〜", final: "不満の声を、早めに拾える施設へ。", demo: "導入について相談する", why: "滞在中に声を拾う理由", how: "ご利用の流れ", demoUi: { room: "客室 1208", question: "お困りのことをお知らせください", issue: "客室設備について", housekeeping: "清掃・備品について", other: "その他のご相談", private: "内容は施設スタッフだけに届きます" },
  },
  zh: {
    eyebrow: "住客反馈与服务跟进系统", title: "吐槽码", body: "住客扫码反馈，酒店接收、派单并跟进处理。", cta: "预约产品演示", back: "返回服务列表",
    problemTitle: "能在店内解决，就别留到差评里", problemBody: "尽早知道房号和客诉内容，酒店才有时间补救。",
    benefits: [["客诉直达酒店", "住客提交的内容只发给酒店工作人员，不会公开发布。"], ["趁住客还在店及时处理", "及时知道房号和不满事项，前台、客房或工程人员才能尽快跟进。"], ["住客扫码就能反馈", "不用下载应用，也不用注册账号，几步即可提交。"]],
    story: { eyebrow: "看得见的处理过程", title: "从住客反馈，到酒店解决", items: [["住客扫码反馈", "不用打电话或下楼寻找前台，在房间里就能说明情况。"], ["客诉送达相关团队", "房号、问题和紧急程度一起送达，减少来回确认。"], ["现场处理并留下记录", "处理进度和结果全程可查，完成后继续回访住客。"]] },
    system: { eyebrow: "完整服务闭环", title: "不止是投\u2060诉\u2060箱", body: "每一条有效客诉都会进入可执行、可追踪、可督办的服务恢复流程。", capabilities: [["房间级微信小程序入口", "扫码自动带入酒店、楼层和房间信息。"], ["多种反馈方式", "支持快捷选项、文字、语音、图片和视频。"], ["智能风险识别", "识别问题类型、情绪强度、重复反馈和超时风险。"], ["自动生成酒店工单", "整合房号、客诉内容、材料、风险等级和建议部门。"], ["一线员工移动处理", "员工接单、开始处理、填写结果或重开工单。"], ["经理看板与督办", "集中查看高风险、超时、重开和部门处理压力。"], ["闭环确认与业主报告", "完成住客确认、观察期、日报月报和服务复盘。"]] },
    stepsTitle: "从住客扫码，到服务恢复闭环", steps: [["进入微信小程序", "扫描房间二维码，自动识别酒店、楼层和房号。"], ["提交客诉", "选择类型，并添加文字、语音、图片或视频。"], ["识别风险", "判断问题类型、风险等级和建议处理部门。"], ["自动生成工单", "将客诉推送给前台、客房或工程等相关团队。"], ["员工接单处理", "一线员工记录接单、处理中和完成情况。"], ["经理督办", "高风险、超时或重复客诉自动进入管理视线。"], ["住客确认并闭环", "解决后关闭；仍需帮助则重开并继续跟进。"]],
    roles: { eyebrow: "一套系统，四种视角", title: "一条客诉，各司其职", items: [["对住客", "不用寻找投诉渠道，扫码即可把不满直接告诉酒店。"], ["对一线团队", "每项任务都有房间、类型、负责人、状态和处理记录。"], ["对管理层", "集中查看高风险房间、超时工单、重复客诉和部门压力。"], ["对酒店业主", "通过响应时间、风险趋势和处理结果判断服务恢复是否有效。"]] },
    example: { eyebrow: "场景示例", title: "一条客诉，退\u2060房\u2060前完成处理", note: "以下为产品使用示例，用于说明处理流程，不代表真实客户数据。", event: "房间1208 · 空调噪声", timeline: [["22:14", "住客扫码提交", "住客反馈空调运行噪声较大，已经影响休息。"], ["22:15", "前台收到提醒", "房号、客诉类型和具体内容同时发送给酒店。"], ["22:20", "工程人员联系住客", "确认方便上门检查的时间，并开始跟进。"], ["22:42", "处理后再次回访", "工作人员记录处理结果，并向住客确认当前情况。"]], resultTitle: "酒店得到什么", results: ["客诉内容和处理记录更清楚", "前台与相关部门更早知道", "住客退房前仍有补救机会"] },
    price: "$29 / 间起", final: "让每条反馈得到及时跟进", demo: "申请产品演示", why: "为什么要及时接收反馈", how: "反馈处理流程", demoUi: { room: "房间 1208", question: "本次入住有哪些需要协助？", issue: "客房设施", housekeeping: "卫生与清洁", other: "其他反馈", private: "仅酒店工作人员可见" },
  },
} as const;

const dashboardCopy = {
  en: { title: "Manager dashboard", sample: "Sample interface", stats: [["Open", "12"], ["High risk", "3"], ["Overdue", "2"], ["In progress", "7"]], queue: "Live work orders", tickets: [["1208", "AC noise affecting sleep", "High risk", "Engineering"], ["0816", "Extra towels requested", "Assigned", "Housekeeping"], ["1512", "Hot water temperature", "In progress", "Engineering"]], updated: "Updated just now" },
  ja: { title: "責任者ダッシュボード", sample: "画面イメージ", stats: [["未対応", "12"], ["高リスク", "3"], ["期限超過", "2"], ["対応中", "7"]], queue: "対応タスク", tickets: [["1208", "空調の音で眠れない", "高リスク", "設備"], ["0816", "タオルの追加希望", "担当済み", "客室"], ["1512", "お湯の温度が低い", "対応中", "設備"]], updated: "たった今更新" },
  zh: { title: "经理看板", sample: "界面示意", stats: [["待处理", "12"], ["高风险", "3"], ["已超时", "2"], ["处理中", "7"]], queue: "实时工单", tickets: [["1208", "空调噪声影响休息", "高风险", "工程部"], ["0816", "需要补送两条毛巾", "已派单", "客房部"], ["1512", "热水温度偏低", "处理中", "工程部"]], updated: "刚刚更新" },
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
      <section className="feedback-story"><div className="feedback-story-heading"><p className="eyebrow"><span />{copy.story.eyebrow}</p><h2>{copy.story.title}</h2></div><div className="feedback-story-grid">{copy.story.items.map(([title, body], index) => { const images = ["/images/guest-feedback/guest-scan-qr.jpg", "/images/guest-feedback/front-desk-alert.jpg", "/images/guest-feedback/issue-resolution.jpg"]; return <figure key={title} className={index === 0 ? "story-primary" : ""}><div><Image src={images[index]} alt={title} fill sizes={index === 0 ? "(max-width: 860px) 100vw, 58vw" : "(max-width: 860px) 100vw, 29vw"} /></div><figcaption><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></figcaption></figure>; })}</div></section>
      <section className="feedback-system"><div className="feedback-system-intro"><p className="eyebrow light"><span />{copy.system.eyebrow}</p><h2>{copy.system.title}</h2><p>{copy.system.body}</p></div><OperationsBoard locale={locale} capabilities={copy.system.capabilities}/></section>
      <section className="feedback-steps"><p className="eyebrow"><span />{copy.how}</p><h2>{copy.stepsTitle}</h2><div>{copy.steps.map(([title, body], index) => {const Icon=[QrCode,MessageSquareText,ScanSearch,ClipboardPlus,Wrench,BellRing,BadgeCheck][index];return <article key={title}><b>0{index + 1}</b><Icon/><h3>{title}</h3><p>{body}</p></article>})}</div></section>
      <section className="feedback-example"><div className="feedback-example-heading"><div><p className="eyebrow"><span />{copy.example.eyebrow}</p><h2>{copy.example.title}</h2></div><p>{copy.example.note}</p></div><div className="feedback-example-board"><div className="feedback-event"><QrCode /><span>{copy.example.event}</span></div><div className="feedback-timeline">{copy.example.timeline.map(([time,title,body],index)=>{const Icon=[MessageSquareWarning,Clock3,ShieldCheck,Check][index];return <article key={time}><span>{time}</span><Icon/><div><h3>{title}</h3><p>{body}</p></div></article>})}</div><aside><strong>{copy.example.resultTitle}</strong>{copy.example.results.map(item=><p key={item}><Check/>{item}</p>)}</aside></div></section>
      <section className="feedback-roles"><div><p className="eyebrow light"><span />{copy.roles.eyebrow}</p><h2>{copy.roles.title}</h2></div><div>{copy.roles.items.map(([title,body],index)=>{const Icon=[Smartphone,Users,LayoutDashboard,Building2][index];return <article key={title}><Icon/><h3>{title}</h3><p>{body}</p></article>})}</div></section>
      <section className="feedback-final"><div><p>{copy.price}</p><h2>{copy.final}</h2></div><a className="button button-gold" href="mailto:hello@ottervisual.com">{copy.demo}<ArrowRight /></a></section>
      <SiteFooter />
    </main>
  );
}

function FeedbackDemo({ copy }: { copy: { readonly room: string; readonly question: string; readonly issue: string; readonly housekeeping: string; readonly other: string; readonly private: string } }) {
  return <div className="feedback-demo"><div className="demo-top"><QrCode /><span>{copy.room}</span></div><div className="demo-card"><p>{copy.question}</p>{[[copy.issue, MessageSquareWarning], [copy.housekeeping, Check], [copy.other, Star]].map(([label, Icon]) => { const C = Icon as typeof Check; return <div key={label as string}><C /><span>{label as string}</span><ArrowRight /></div>; })}</div><div className="demo-status"><ShieldCheck /><span>{copy.private}</span></div></div>;
}

function OperationsBoard({ locale, capabilities }: { locale: "en" | "ja" | "zh"; capabilities: readonly (readonly [string, string])[] }) {
  const copy = dashboardCopy[locale];
  const icons = [QrCode, Smartphone, ShieldCheck, ClipboardCheck, Users, LayoutDashboard, FileBarChart];
  return <div className="operations-showcase"><div className="operations-board"><header><div><LayoutDashboard/><strong>{copy.title}</strong></div><span>{copy.sample}</span></header><div className="operations-stats">{copy.stats.map(([label,value],index)=><div key={label}><span>{label}</span><b>{value}</b>{[ClipboardCheck,AlertTriangle,Clock3,Users].map((Icon)=><Icon key={Icon.displayName}/>) [index]}</div>)}</div><div className="operations-queue"><div><strong>{copy.queue}</strong><span><BellRing/>{copy.updated}</span></div>{copy.tickets.map(([room,issue,status,team],index)=><article key={room}><b>{room}</b><div><strong>{issue}</strong><span>{team}</span></div><em className={index===0?"risk":index===2?"progress":"assigned"}>{status}</em>{index===0?<Wrench/>:<ArrowRight/>}</article>)}</div></div><div className="capability-rail">{capabilities.map(([title,body],index)=>{const Icon=icons[index];return <div key={title} title={body}><Icon/><span>{title}</span></div>})}</div></div>;
}
