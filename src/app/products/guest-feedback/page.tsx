"use client";

import { ArrowRight, Building2, Check, ClipboardCheck, Clock3, FileBarChart, LayoutDashboard, MessageSquareWarning, QrCode, ShieldCheck, Smartphone, Star, Users } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const feedbackCopy = {
  en: {
    eyebrow: "In-stay service recovery", title: "Catch the issue while the guest is still on property.", body: "Guests scan a room QR and open a mobile web page—no app or account required. The system triages each report, creates a work order and keeps staff, managers and owners informed until the case is closed.", cta: "Request a demo", back: "All products",
    problemTitle: "Most public complaints started as solvable problems.", problemBody: "A missing towel, noisy air conditioner or slow response can become a one-star review when guests do not know who to tell.",
    benefits: [["Private first", "Feedback goes directly to your team—not to a public review site."], ["Act sooner", "Know what happened while there is still time to make it right."], ["Simple for guests", "No app, account or long form. Scan, select and send."]],
    system: { eyebrow: "Complete operating loop", title: "More than a feedback form", body: "Every valid report becomes a trackable service-recovery task.", capabilities: [["Room-level web entry", "The QR opens a room-aware mobile web page."], ["Multiple input formats", "Guests can submit selections, text, voice, images or video."], ["Risk triage", "Category, urgency, sentiment, repeats and timeout risk are assessed."], ["Automatic work orders", "Room, issue, evidence, priority and suggested department stay together."], ["Mobile staff handling", "Teams accept, update and complete assigned tasks from mobile."], ["Manager oversight", "Managers see high-risk, overdue and reopened cases."], ["Closure and reporting", "Guest confirmation, observation, reopening and trend reports complete the loop."]] },
    stepsTitle: "From guest report to a closed service-recovery case", steps: [["Open mobile web page", "The room QR opens a web page with room context already attached."], ["Submit report", "The guest selects a category and adds text, voice, image or video."], ["Assess risk", "The system identifies category, urgency and escalation signals."], ["Create work order", "The right department receives a structured task."], ["Staff handles it", "Employees accept, update and record the resolution."], ["Manager oversees", "High-risk or overdue cases are escalated for follow-up."], ["Confirm and close", "The guest confirms resolution or the case reopens for further action."]],
    roles: { eyebrow: "One system, four views", title: "Useful at every level of hotel operations", items: [["For guests", "A fast way to ask for help without finding a phone number or installing an app."], ["For frontline teams", "Every task has a room, category, owner, status and handling record."], ["For managers", "See high-risk rooms, overdue tasks, repeats and team workload in one place."], ["For owners", "Review response time, risk trends and whether service recovery is working."]] },
    example: { eyebrow: "Example scenario", title: "How one guest report reaches the right team", note: "Illustrative product scenario — not client performance data.", event: "Room 1208 · Air-conditioning noise", timeline: [["22:14", "Guest submits report", "The guest reports that AC noise is affecting sleep."], ["22:15", "Front desk receives alert", "Room number, category and message arrive together."], ["22:20", "Engineering follows up", "The team confirms a suitable time to inspect the room."], ["22:42", "Hotel closes the loop", "The guest is contacted again after the issue is handled."]], resultTitle: "What the hotel gains", results: ["A clear record of the complaint", "The right department is notified sooner", "A chance to respond before checkout"] },
    price: "Starting from $29 / room", final: "Give guests an easier way to speak up.", demo: "Get Guest Feedback QR", why: "Why it matters", how: "How it works", demoUi: { room: "Room 1208", question: "How can we help?", issue: "Room issue", housekeeping: "Housekeeping", other: "Something else", private: "Sent privately to the hotel team" },
  },
  ja: {
    eyebrow: "滞在中サービスリカバリー", title: "ゲストが館内にいるうちに、声を拾い、対応する。", body: "客室QRからスマートフォン用Webページを開き、アプリや会員登録なしで困りごとを送信できます。届いた内容は判定・担当部署への共有・対応記録・責任者の確認を経て、完了まで追跡されます。", cta: "導入について相談する", back: "サービス一覧",
    problemTitle: "低評価のきっかけは、滞在中の小さな行き違いかもしれません。", problemBody: "タオルが足りない、空調の音が気になる、スタッフに伝える方法が分からない。早く気づければ解決できたことも、声を拾えないままでは口コミに残ってしまいます。",
    benefits: [["施設へ直接届く", "投稿サイトを経由せず、内容と客室番号をスタッフが確認できます。"], ["チェックアウト前に対応", "滞在中に状況を把握できるため、その場での案内や対応が可能です。"], ["ゲストに負担をかけない", "アプリも会員登録も不要。読み取り、選択、送信だけで完了します。"]],
    system: { eyebrow: "対応を止めない仕組み", title: "ご意見フォームで終わらせない", body: "届いた声を、担当者と期限のある対応タスクへ変えます。", capabilities: [["客室別Webページ", "QRを読み取ると、客室情報を引き継いだページが開きます。"], ["複数の入力方法", "選択肢・文章・音声・画像・動画で状況を伝えられます。"], ["リスク判定", "内容、緊急度、感情、再送、対応遅れの兆候を確認します。"], ["タスクの自動作成", "客室、内容、証拠、優先度、担当候補をまとめて共有します。"], ["スタッフのモバイル対応", "担当者が受付、着手、対応内容、完了を記録します。"], ["責任者の督促", "高リスク、期限超過、再開した案件を一覧で確認できます。"], ["確認とレポート", "ゲスト確認、再開、観察期間、傾向レポートまで管理します。"]] },
    stepsTitle: "ゲストの声から、対応完了まで", steps: [["Webページを開く", "客室QRから、客室情報付きのスマートフォン用ページを開きます。"], ["内容を送信", "項目を選び、文章・音声・画像・動画を追加できます。"], ["リスクを判定", "内容、緊急度、再送、対応遅れの兆候を確認します。"], ["対応タスクを作成", "フロント、客室、設備など適切な担当へ共有します。"], ["スタッフが対応", "受付、着手、対応内容、完了をモバイルで記録します。"], ["責任者が確認", "高リスクや期限超過の案件を督促します。"], ["確認して完了", "ゲストが解決を確認。未解決なら再開して対応を続けます。"]],
    roles: { eyebrow: "立場に合わせた画面", title: "現場からオーナーまで、必要な情報だけを", items: [["ゲスト", "アプリ不要で、困りごとをすぐ施設へ伝えられます。"], ["現場スタッフ", "客室、内容、担当、状態、対応履歴を一つのタスクで管理します。"], ["支配人・責任者", "高リスク、期限超過、再発、部署別の対応状況を確認できます。"], ["オーナー", "対応時間やリスク傾向から、サービス改善が機能しているか把握できます。"]] },
    example: { eyebrow: "利用イメージ", title: "ゲストの声が、担当スタッフへ届くまで", note: "以下は製品の利用イメージです。実際の導入実績を示すものではありません。", event: "客室1208 · 空調の音", timeline: [["22:14", "ゲストが送信", "空調の音で眠りにくいことを、客室のQRから伝えます。"], ["22:15", "フロントへ通知", "客室番号・内容・送信時刻がまとめて届きます。"], ["22:20", "設備担当が連絡", "入室可能な時間を確認し、点検に向かいます。"], ["22:42", "対応後に確認", "対応内容を記録し、ゲストへ状況を確認します。"]], resultTitle: "施設側に残るもの", results: ["ご意見と対応内容の記録", "担当部署への早めの共有", "チェックアウト前に対応する機会"] },
    price: "1室 $29〜", final: "言いづらい不満を、早めに拾える施設へ。", demo: "導入について相談する", why: "滞在中に声を拾う理由", how: "ご利用の流れ", demoUi: { room: "客室 1208", question: "お困りのことをお知らせください", issue: "客室設備について", housekeeping: "清掃・備品について", other: "その他のご相談", private: "内容は施設スタッフだけに届きます" },
  },
  zh: {
    eyebrow: "酒店住中体验预警与服务恢复系统", title: "让住客的不满，在退房前被看见、被处理、被闭环", body: "住客扫描房间二维码进入微信小程序，可通过快捷选项、文字、语音、图片或视频提交客诉。系统识别风险后自动生成工单，让一线员工、经理和业主都能看到处理进展。", cta: "预约产品演示", back: "返回服务列表",
    problemTitle: "很多差评，本来可以在住客退房前解决", problemBody: "少一条毛巾、空调噪声太大、客房清洁不到位，往往都不难处理。真正麻烦的是酒店一直不知道，直到差评已经发到平台上。",
    benefits: [["客诉直达酒店", "住客提交的内容只发给酒店工作人员，不会公开发布。"], ["趁住客还在店及时处理", "及时知道房号和不满事项，前台、客房或工程人员才能尽快跟进。"], ["住客扫码就能反馈", "不用下载应用，也不用注册账号，几步即可提交。"]],
    system: { eyebrow: "完整服务闭环", title: "不只是一个投诉箱", body: "每一条有效客诉都会进入可执行、可追踪、可督办的服务恢复流程。", capabilities: [["房间级微信小程序入口", "扫码自动带入酒店、楼层和房间信息。"], ["多种反馈方式", "支持快捷选项、文字、语音、图片和视频。"], ["智能风险识别", "识别问题类型、情绪强度、重复反馈和超时风险。"], ["自动生成酒店工单", "整合房号、客诉内容、材料、风险等级和建议部门。"], ["一线员工移动处理", "员工接单、开始处理、填写结果或重开工单。"], ["经理看板与督办", "集中查看高风险、超时、重开和部门处理压力。"], ["闭环确认与业主报告", "完成住客确认、观察期、日报月报和服务复盘。"]] },
    stepsTitle: "从住客扫码，到服务恢复闭环", steps: [["进入微信小程序", "扫描房间二维码，自动识别酒店、楼层和房号。"], ["提交客诉", "选择类型，并添加文字、语音、图片或视频。"], ["识别风险", "判断问题类型、风险等级和建议处理部门。"], ["自动生成工单", "将客诉推送给前台、客房或工程等相关团队。"], ["员工接单处理", "一线员工记录接单、处理中和完成情况。"], ["经理督办", "高风险、超时或重复客诉自动进入管理视线。"], ["住客确认并闭环", "解决后关闭；仍需帮助则重开并继续跟进。"]],
    roles: { eyebrow: "一套系统，四种视角", title: "给一线任务，给经理过程，给业主结果", items: [["对住客", "不用寻找投诉渠道，扫码即可把不满直接告诉酒店。"], ["对一线团队", "每项任务都有房间、类型、负责人、状态和处理记录。"], ["对管理层", "集中查看高风险房间、超时工单、重复客诉和部门压力。"], ["对酒店业主", "通过响应时间、风险趋势和处理结果判断服务恢复是否有效。"]] },
    example: { eyebrow: "场景示例", title: "一条客诉，如何在退房前被接住", note: "以下为产品使用示例，用于说明处理流程，不代表真实客户数据。", event: "房间1208 · 空调噪声", timeline: [["22:14", "住客扫码提交", "住客反馈空调运行噪声较大，已经影响休息。"], ["22:15", "前台收到提醒", "房号、客诉类型和具体内容同时发送给酒店。"], ["22:20", "工程人员联系住客", "确认方便上门检查的时间，并开始跟进。"], ["22:42", "处理后再次回访", "工作人员记录处理结果，并向住客确认当前情况。"]], resultTitle: "酒店得到什么", results: ["客诉内容和处理记录更清楚", "前台与相关部门更早知道", "住客退房前仍有补救机会"] },
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
      <section className="feedback-system"><div className="feedback-system-intro"><p className="eyebrow light"><span />{copy.system.eyebrow}</p><h2>{copy.system.title}</h2><p>{copy.system.body}</p></div><div className="feedback-capabilities">{copy.system.capabilities.map(([title,body],index)=>{const Icon=[QrCode,Smartphone,ShieldCheck,ClipboardCheck,Users,LayoutDashboard,FileBarChart][index];return <article key={title}><span>0{index+1}</span><Icon/><h3>{title}</h3><p>{body}</p></article>})}</div></section>
      <section className="feedback-steps"><p className="eyebrow"><span />{copy.how}</p><h2>{copy.stepsTitle}</h2><div>{copy.steps.map(([title, body], index) => <article key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{body}</p></article>)}</div></section>
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
