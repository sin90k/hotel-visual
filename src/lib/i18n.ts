export type Locale = "en" | "ja" | "zh";

export const localeNames: Record<Locale, string> = { en: "EN", ja: "日本語", zh: "中文" };

const en = {
  nav: { services: "Services", examples: "Examples", process: "Process", cases: "Case Studies", contact: "Contact" },
  hero: {
    eyebrow: "Room Photo Enhancement",
    title: "Turn Better Room Photos Into More Bookings",
    body: "We help hotels and vacation rentals improve booking performance through stronger room photography and better OTA presentation.",
    primary: "Get Free Property Review",
    secondary: "View Examples",
    trust: "Free review. No commitment required.",
  },
  system: { review: "Property review", analysis: "Manual analysis", tags: ["Light", "Styling", "Value"], metrics: [["Listing clarity", "Review"], ["Room value", "Improve"], ["Visual confidence", "Checked"]] },
  proof: { label: "Presentation performance", one: "Manual property review", two: "Visual opportunities identified", three: "Business impact prioritized" },
  difference: { eyebrow: "Before and after", title: "See the Difference", body: "Drag the slider to compare the same room before and after our work.", before: "Before", after: "After", items: ["Room Photo Enhancement", "Soft Furnishing Upgrade Plan", "Villa Presentation Enhancement"] },
  why: { eyebrow: "Booking performance", title: "Why photos affect bookings", body: "Guests make fast decisions on OTA listing pages. Stronger room photos make more people stop, click and feel confident about the price.", cards: [
    ["More Clicks", "Stand out in crowded OTA search results."],
    ["Higher Conversion", "Give guests more confidence to complete the booking."],
    ["Stronger Rate Acceptance", "Help the room feel worth the price being asked."],
  ] },
  optimize: { eyebrow: "What we improve", title: "What do we optimize?", items: ["Lighting", "Consistent color", "Sense of space", "Bedding texture", "OTA hero image"] },
  services: { eyebrow: "What we do", title: "Practical improvements that help rooms sell.", items: [
    ["01", "Room Photo Enhancement", "Transform existing room photos into more attractive booking assets without requiring a new photoshoot.", "From $2/photo"],
    ["02", "Soft Furnishing Upgrade Plan", "Preview furniture, materials and room styling directions before committing renovation budget.", "From $29"],
  ] },
  costBenefit: { eyebrow: "Lower-cost first step", title: "Improve room photos without booking a new photographer first", body: "A new photoshoot can be valuable, but it also requires budget, scheduling, room preparation and on-site coordination. We turn existing room photos into stronger booking assets first.", cards: [
    ["New photoshoot", "Higher upfront cost, photographer scheduling, room preparation and on-site coordination."],
    ["From $2/photo", "Improve brightness, color, clarity and OTA usability from existing room photos."],
    ["Upgrade preview included", "Preview soft furnishing, material and presentation directions before renovation or a new shoot."],
  ], note: "We keep the room realistic. The goal is clearer presentation, not misleading retouching." },
  process: { eyebrow: "Simple process", title: "Share a link. Get clear, useful recommendations.", support: "See where the opportunities are before deciding whether to proceed.", steps: [
    ["Submit Your Property", "Share one website, Booking.com, Airbnb or OTA URL."],
    ["Manual Review", "Our team evaluates visual improvement opportunities."],
    ["Receive Recommendations", "Get 3 suggestions and 1 complimentary visual sample."],
    ["Decide Next Steps", "Choose whether to proceed. No obligation."],
  ] },
  cases: { eyebrow: "OTA presentation criteria", title: "How we judge whether a photo is ready to sell the room", note: "We assess presentation quality rather than inventing performance claims.", outcomes: [["Thumbnail appeal", "Does the hero image still read clearly at OTA listing size?"], ["Room clarity", "Can guests understand the light, layout and usable space quickly?"], ["Material quality", "Do bedding, finishes and key details feel clean and credible?"], ["Stay imagination", "Does the photo sequence help guests picture the actual stay?"]], impact: "Expected business impact", mainLabel: "Room photo enhancement", mainTitle: "Make the value visible before the guest arrives.", main: "Stronger listing engagement and a clearer sense of room value.", secondaryLabel: "Upgrade preview", secondary: "More confident renovation decisions before capital is committed.", thirdLabel: "Villa presentation", thirdTitle: "Show the stay, not just the space.", third: "A warmer, clearer listing that helps guests picture the full experience.", privateWindow: "Presentation review" },
  trustSection: { eyebrow: "Visual trust", title: "Trust starts with what guests can see.", body: "Clear, honest photography helps guests understand the light, layout and details of a room before they book. We turn each genuine strength into one more reason to choose your property." },
  review: { eyebrow: "Free assessment", title: "Tell us what you want to improve", body: "You do not need to share the property name or URL first. Leave your email and a short message; room photos are optional but helpful for a faster review.", includes: ["3 photo optimization recommendations", "1 complimentary sample image", "OTA presentation analysis"], fields: ["Property Name", "Property or OTA URL", "Email", "WhatsApp / Phone", "Message"], messagePlaceholder: "Tell us what you would like to improve, if anything specific comes to mind.", consent: "By submitting, you agree to be contacted about your assessment.", submit: "Get Free Assessment", sending: "Sending request…", success: "Request received", successBody: "Thank you. We have received your request and will contact you after review.", again: "Submit another request", error: "Something went wrong. Please try again." },
  contact: { eyebrow: "Contact", title: "Let’s improve how your property sells.", location: "Serving hospitality properties worldwide", button: "Start a conversation" },
};

export type Copy = typeof en;

const ja: Copy = {
  ...en,
  nav: { services: "サービス内容", examples: "改善事例", process: "ご利用の流れ", cases: "活用イメージ", contact: "無料診断" },
  hero: { eyebrow: "客室写真・予約ページ改善", title: "撮り直しに頼らず、予約ページの見え方を整えます", body: "今ある写真をもとに、主写真・掲載順・明るさ・色味を見直します。予約前のゲストが客室の広さ、清潔感、過ごし方をイメージしやすい状態へ整えます。", primary: "無料診断を申し込む", secondary: "改善事例を見る", trust: "相談は無料です。依頼を前提としたものではありません。" },
  system: { review: "掲載ページ診断", analysis: "確認中", tags: ["明るさ", "構図", "伝わりやすさ"], metrics: [["主写真の見え方", "要改善"], ["客室の魅力", "改善余地"], ["情報の分かりやすさ", "確認済み"]] },
  proof: { label: "既存写真から診断", one: "ページ上の課題を整理", two: "主写真と掲載順を見直し", three: "必要な追加撮影も整理" },
  difference: { eyebrow: "同じ客室で比較", title: "写真の見せ方で、予約前の印象は変わります", body: "同じ客室でも、明るさ・色味・奥行き・主写真としての見え方を整えるだけで、予約サイト上で伝わる情報が変わります。", before: "改善前", after: "改善後", items: ["客室写真・予約ページ改善", "内装アップグレード案", "ヴィラの魅力訴求"] },
  why: { ...en.why, eyebrow: "予約サイト上の課題", title: "写真が予約につながりにくい理由", body: "写真の枚数や画質だけではなく、一覧画面で目に留まるか、詳細ページで客室の広さ・清潔感・過ごし方が自然に伝わるかが重要です。", cards: [["主写真で魅力が伝わらない", "小さく表示されても、客室の特徴がひと目で伝わる写真へ見直します。"], ["写真の並びが分かりにくい", "ベッド、窓、浴室、設備、滞在シーンが自然につながる順番へ整理します。"], ["撮り直しの判断が難しい", "今ある写真で整えられる点と、本当に撮り足すべきカットを先に整理します。"]] },
  optimize: { eyebrow: "見直すポイント", title: "見た目を整えるだけでなく、予約判断に必要な情報をそろえます", items: ["主写真の見直し", "写真掲載順の整理", "明るさ・色味の調整", "広さ・清潔感の表現", "不足カットの整理"] },
  services: { ...en.services, eyebrow: "サービス内容", title: "撮影を手配せずに、まず既存写真を予約向けに整えます", items: [["01", "客室写真・予約ページ改善", "既存写真をもとに、主写真、掲載順、明るさ、色味、客室の伝わり方を整えます。新たに撮影を手配しなくても、予約ページで使いやすい見え方へ近づけます。", "1枚 ¥200〜"], ["02", "内装アップグレード案", "家具・素材・見せ方の方向性を画像で確認できます。改装や撮影の前に、関係者の認識をそろえたい場合に有効です。", "¥4,000〜"]] },
  costBenefit: { eyebrow: "低コストで始める", title: "カメラマンを手配せずに、1枚 ¥200〜で客室写真を整えます", body: "新しく撮影すること自体は有効です。ただし、カメラマンの手配、日程調整、客室準備、当日の立ち会いには費用と時間がかかります。まず既存写真を低コストで予約ページ向けの見え方へ整えます。", cards: [
    ["撮影を手配する場合", "カメラマン選定、日程調整、客室準備、当日の立ち会いが必要です。費用だけでなく、準備時間も先にかかります。"],
    ["1枚 ¥200〜の写真改善", "今ある写真から明るさ・色味・見え方を整え、予約ページでそのまま使いやすい状態へ近づけます。"],
    ["内装アップグレード案にも対応", "家具・素材・見せ方を変えた場合の方向性を画像で確認できます。撮影や改装の前に、見せ方の判断材料を作れます。"],
  ], note: "過度な加工ではなく、実際の客室らしさを保ったまま整えます。" },
  process: { ...en.process, eyebrow: "ご利用の流れ", title: "施設ページを1つ送るだけで、改善の優先順位が分かります", support: "カメラマンの手配、日程調整、客室準備に時間をかける前に、まず既存写真で直せる点と、本当に撮り足すべきものを整理します。", steps: [["施設ページを送信", "公式サイト、Booking.com、Airbnbなど、確認したいページを1つお知らせください。"], ["すぐ確認できる点を整理", "主写真、写真の並び、不足している情報など、ページ上で判断できる点を先に整理します。"], ["担当者が詳しく確認", "必要に応じて、改善優先度、サンプル画像、追加撮影の方向性を確認します。"], ["改善案をお届け", "診断のみでも問題ありません。内容をご覧いただいたうえで、次に進むかをご判断ください。"]] },
  cases: { eyebrow: "予約サイトでの確認基準", title: "写真が予約判断に役立っているかを確認します", note: "見栄えだけでなく、予約サイト上で必要な情報が伝わっているかを確認します。撮影を依頼する場合も、何を撮るべきかの判断材料になります。", outcomes: [["主写真の強さ", "小さな一覧画面でも、客室の特徴がひと目で伝わるか。"], ["掲載順の分かりやすさ", "ベッド、窓、浴室、設備、滞在シーンが自然な順番で伝わるか。"], ["素材と清潔感", "寝具や内装の質感が、自然かつ丁寧に見えるか。"], ["不足している写真", "今ある写真では伝わらない情報と、補うべきカットが明確か。"]], impact: "確認するポイント", mainLabel: "客室写真・予約ページ改善", mainTitle: "撮り直す前に、今ある写真の価値を見直します", main: "明るさや奥行き、主写真と掲載順を整え、ゲストが客室を具体的に想像できる状態にします。", secondaryLabel: "内装アップグレード案", secondary: "改装費をかける前に方向性を確認し、関係者との認識をそろえられます。", thirdLabel: "ヴィラの魅力訴求", thirdTitle: "部屋だけでなく、そこで過ごす時間まで見せます", third: "眺望や屋外空間とのつながりを見せ、滞在そのものを想像しやすくします。", privateWindow: "掲載ページ診断" },
  trustSection: { eyebrow: "撮影の前に整理する", title: "費用だけでなく、準備と調整にかかる時間も減らします", body: "撮影には、カメラマンの手配、日程調整、客室準備、当日の立ち会いが必要です。まず1枚 ¥200〜で既存写真を整え、予約ページで使える状態に近づけます。必要な場合だけ、撮り直すべきカットや内装アップグレード案を整理します。" },
  review: { ...en.review, eyebrow: "無料診断", title: "気になる点をお知らせください", body: "施設名やURLは必須ではありません。メールアドレスとご相談内容だけで送信できます。写真があれば、より具体的に確認できます。", includes: ["優先して直したいポイント3点", "改善イメージが分かるサンプル画像1点", "必要に応じた追加撮影の方向性"], fields: ["施設名", "施設またはOTAページURL", "メールアドレス", "LINE ID / 電話番号", "ご相談内容"], messagePlaceholder: "現在の写真で気になる点、撮り直しを検討している客室などがあればお聞かせください。", consent: "送信いただいた情報は、今回の診断とご連絡にのみ使用します。", submit: "無料診断を申し込む", sending: "送信中…", success: "お申し込みありがとうございます", successBody: "ご相談内容を受け付けました。確認後、担当者よりご連絡します。", again: "別の内容で相談する", error: "送信できませんでした。時間をおいて、もう一度お試しください。" },
  contact: { eyebrow: "ご相談", title: "撮影の前に、まず掲載ページを見直しませんか", location: "ホテル・旅館・民泊に対応", button: "相談する" },
};

const zh: Copy = {
  ...en,
  nav: { services: "服务内容", examples: "优化案例", process: "合作流程", cases: "能改善什么", contact: "免费评估" },
  hero: { eyebrow: "酒店客房图片优化", title: "让客人第一眼看\u2060见房\u2060间\u2060的\u2060价\u2060值", body: "优化现有客房照片与OTA页面的展示方式，让酒店和民宿的真实优势更容易被潜在客人看见。", primary: "获取免费评估", secondary: "查看优化案例", trust: "免费评估，无需后续合作。" },
  system: { review: "房源展示检查", analysis: "正在确认", tags: ["光线", "构图", "价值呈现"], metrics: [["OTA主图", "建议优化"], ["客房质感", "有提升空间"], ["信息清晰度", "已检查"]] },
  proof: { label: "照片与OTA页面诊断", one: "先整理页面问题", two: "找出优先改善项", three: "重点检查实际展示效果" },
  difference: { eyebrow: "优化前后", title: "前后效果，一目了然", body: "拖动滑块，比较同一个房间优化前后的实际变化。", before: "优化前", after: "优化后", items: ["客房照片优化", "软装升级方案", "别墅视觉呈现优化"] },
  why: { ...en.why, eyebrow: "影响转化率的第一印象", title: "照片抓住眼球，才\u2060有\u2060订\u2060单\u2060产\u2060生", body: "在OTA列表页里，客人通常只会用几秒钟筛选图片。主图能不能抓住注意力，客房优势能不能一眼看懂，都会影响后续下单。", cards: [["提高房源点击率", "主图在同类房源里更醒目，客人才愿意继续点击详情。"], ["客人下单更有底", "采光、空间和设施展示清楚，减少预订前的犹豫。"], ["房价更有说服力", "照片把客房档次和细节展示到位，价格也更容易被认可。"]] },
  optimize: { eyebrow: "优化内容", title: "我们优化什么？", items: ["光线优化", "色彩统一", "空间感增强", "床品质感提升", "OTA主图优化"] },
  services: { ...en.services, eyebrow: "核心服务", title: "先把现\u2060有\u2060照\u2060片的价值发\u2060挥\u2060出\u2060来", items: [["01", "客房照片优化", "无需重新拍摄。我们会适度调整光线、色彩和空间层次，在保持真实感的前提下，让照片更适合携程、Airbnb、Booking.com等平台展示。", "约200日元/张起"], ["02", "软装升级方案", "投入装修预算前，先直观看到家具、材质和空间调整后的呈现方向。", "¥200 起"]] },
  costBenefit: { eyebrow: "低成本先试", title: "不先找摄影师，也能把现有客房照片做得更适合卖房", body: "重新拍摄当然有价值，但也意味着摄影师选择、排期、房间准备和现场配合。我们先把现有照片优化成更适合OTA展示和预订决策的素材。", cards: [
    ["直接重新拍摄", "需要找摄影师、协调时间、准备房间和现场配合，成本和时间都先投入。"],
    ["现有照片优化", "约200日元/张起。改善光线、色彩、清晰度和OTA展示可用性。"],
    ["软装升级方案", "家具、材质和陈设方向可以先用图片确认，减少拍摄或装修前的判断成本。"],
  ], note: "我们不做失真的过度修图，重点是让真实房间更清楚、更适合展示。" },
  process: { ...en.process, eyebrow: "合作流程", title: "提交房源链接，免费获取优化方案", support: "先根据页面整理能判断的问题，看完具体建议后，再决定是否需要合作。", steps: [["提交房源", "提供酒店官网、Booking.com、Airbnb或其他OTA页面中的任意一个链接。"], ["快速初筛", "先看主图、图片排序和页面展示中明显影响判断的地方。"], ["团队确认", "确认优先改善项、样图方向，以及是否真的需要补拍。"], ["决定是否继续", "评估本身不绑定后续服务。"]] },
  cases: { eyebrow: "OTA展示评估标准", title: "一张图片是否适合卖房，我们看这四点", note: "不重复展示案例，也不虚构点击率或订单增长数据。这里说明我们实际检查什么。", outcomes: [["列表页是否醒目", "缩成OTA主图尺寸后，客房特点还能不能一眼看清。"], ["空间是否好理解", "采光、布局和实际可用空间是否表达清楚。"], ["质感是否真实", "床品、材质与装修细节是否自然、干净、有说服力。"], ["能否想象入住体验", "整组照片是否能让客人理解住进去是什么感觉。"]], impact: "主要改善", mainLabel: "客房照片优化", mainTitle: "让客人在预订前，就看清房间的优势", main: "把采光、空间和细节展示清楚，让客人不用猜照片里到底是什么样。", secondaryLabel: "升级预览", secondary: "装修投入前，先确认家具、材质和布局调整是否合适。", thirdLabel: "别墅主图优化", thirdTitle: "不只拍房间，也要拍出住进去的感觉", third: "把室内、景观和生活场景串起来，让客人更容易想象完整的入住体验。", privateWindow: "房源页面检查" },
  trustSection: { eyebrow: "先把房间讲清楚", title: "照片越真实清楚，客人下单越\u2060放\u2060心", body: "采光、布局、床品和设施都展示到位，客人才知道自己订的是什么。我们不会用过度滤镜把房间修得失真，而是把原本就有的优势拍明白、讲清楚。" },
  review: { ...en.review, eyebrow: "免费评估", title: "告诉我们想改善什么", body: "不一定需要先填写酒店名或网址。留下邮箱和想咨询的内容即可；如果方便，也可以上传几张客房照片帮助我们判断。", includes: ["3项优先优化建议", "1张免费优化样图", "OTA页面展示检查"], fields: ["酒店或民宿名称", "房源或OTA链接", "联系邮箱", "微信或手机号", "想重点改善的内容"], messagePlaceholder: "可以告诉我们目前最想改善哪类客房或哪组图片。", consent: "提交后，我们只会就本次免费评估与您联系。", submit: "提交免费评估", sending: "正在提交…", success: "提交成功", successBody: "我们已收到您的咨询内容。确认后，工作人员会与您联系。", again: "再提交一条咨询", error: "暂时没有提交成功，请稍后再试。" },
  contact: { eyebrow: "联系我们", title: "别让好房间输在照片上", location: "服务酒店、民宿与度假租赁房源", button: "聊聊您的房源" },
};

export const dictionaries: Record<Locale, Copy> = { en, ja, zh };
