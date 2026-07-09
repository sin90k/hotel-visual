export type Locale = "en" | "ja" | "zh";

export const localeNames: Record<Locale, string> = { en: "EN", ja: "日本語", zh: "中文" };

const en = {
  nav: { services: "Services", examples: "Examples", process: "Process", cases: "Case Studies", contact: "Contact" },
  hero: {
    eyebrow: "Room Photo Enhancement",
    title: "Room Photos That Sell the Stay",
    body: "Refine existing photos for clearer OTA presentation.",
    primary: "Get Free Property Review",
    secondary: "View Examples",
    trust: "Free review. No commitment required.",
  },
  system: { review: "Property review", analysis: "Manual analysis", tags: ["Light", "Styling", "Value"], metrics: [["Listing clarity", "Review"], ["Room value", "Improve"], ["Visual confidence", "Checked"]] },
  proof: { label: "Presentation performance", one: "Manual property review", two: "Visual opportunities identified", three: "Business impact prioritized" },
  difference: { eyebrow: "Before and after", title: "See the Difference", body: "Drag the slider to compare the same room before and after our work.", before: "Before", after: "After", items: ["Room Photo Enhancement", "Suite Upgrade Preview", "Villa Presentation Enhancement"] },
  why: { eyebrow: "Booking performance", title: "Why photos affect bookings", body: "Guests make fast decisions on OTA listing pages. Stronger room photos make more people stop, click and feel confident about the price.", cards: [
    ["More Clicks", "Stand out in crowded OTA search results."],
    ["Higher Conversion", "Give guests more confidence to complete the booking."],
    ["Stronger Rate Acceptance", "Help the room feel worth the price being asked."],
  ] },
  optimize: { eyebrow: "What we improve", title: "What do we optimize?", items: ["Lighting", "Consistent color", "Sense of space", "Bedding texture", "OTA hero image"] },
  services: { eyebrow: "What we do", title: "Practical improvements that help rooms sell.", items: [
    ["01", "Room Photo Enhancement", "Transform existing room photos into more attractive booking assets without requiring a new photoshoot.", "From $15"],
    ["02", "Room Upgrade Preview", "Visualize room improvements and interior upgrades before renovation investment.", "From $29"],
  ] },
  process: { eyebrow: "Simple process", title: "Share a link. Get clear, useful recommendations.", support: "See where the opportunities are before deciding whether to proceed.", steps: [
    ["Submit Your Property", "Share your website, Booking.com or Airbnb URL."],
    ["Manual Review", "Our team evaluates visual improvement opportunities."],
    ["Receive Recommendations", "Get 3 suggestions and 1 complimentary visual sample."],
    ["Decide Next Steps", "Choose whether to proceed. No obligation."],
  ] },
  cases: { eyebrow: "OTA presentation criteria", title: "How we judge whether a photo is ready to sell the room", note: "We assess presentation quality rather than inventing performance claims.", outcomes: [["Thumbnail appeal", "Does the hero image still read clearly at OTA listing size?"], ["Room clarity", "Can guests understand the light, layout and usable space quickly?"], ["Material quality", "Do bedding, finishes and key details feel clean and credible?"], ["Stay imagination", "Does the photo sequence help guests picture the actual stay?"]], impact: "Expected business impact", mainLabel: "Room photo enhancement", mainTitle: "Make the value visible before the guest arrives.", main: "Stronger listing engagement and a clearer sense of room value.", secondaryLabel: "Upgrade preview", secondary: "More confident renovation decisions before capital is committed.", thirdLabel: "Villa presentation", thirdTitle: "Show the stay, not just the space.", third: "A warmer, clearer listing that helps guests picture the full experience.", privateWindow: "Presentation review" },
  trustSection: { eyebrow: "Visual trust", title: "Trust starts with what guests can see.", body: "Clear, honest photography helps guests understand the light, layout and details of a room before they book. We turn each genuine strength into one more reason to choose your property." },
  review: { eyebrow: "Free assessment", title: "Submit your hotel link for a free assessment", body: "See where stronger room photos and better OTA presentation could improve booking performance.", includes: ["3 photo optimization recommendations", "1 complimentary sample image", "OTA presentation analysis"], fields: ["Property Name", "Website URL", "Booking URL", "Airbnb URL", "Email", "WhatsApp", "Message"], messagePlaceholder: "Tell us about your property and what you would like to improve.", consent: "By submitting, you agree to be contacted about your assessment.", submit: "Get Free Assessment", sending: "Sending request…", success: "Request received", successBody: "Thank you. We’ll review your property and contact you when the assessment is ready.", again: "Submit another property", error: "Something went wrong. Please try again." },
  contact: { eyebrow: "Contact", title: "Let’s improve how your property sells.", location: "Serving hospitality properties worldwide", button: "Start a conversation" },
};

export type Copy = typeof en;

const ja: Copy = {
  ...en,
  nav: { services: "サービス内容", examples: "改善事例", process: "ご利用の流れ", cases: "活用イメージ", contact: "無料診断" },
  hero: { eyebrow: "客室写真の見せ方改善", title: "客室写真を、予約につながる見せ方へ。", body: "既存写真を整え、客室の魅力を予約サイトで伝わりやすくします。", primary: "無料診断を申し込む", secondary: "改善事例を見る", trust: "相談は無料です。依頼を前提としたものではありません。" },
  system: { review: "掲載ページ診断", analysis: "担当者が確認中", tags: ["明るさ", "構図", "伝わりやすさ"], metrics: [["主写真の見え方", "要改善"], ["客室の魅力", "改善余地"], ["情報の分かりやすさ", "確認済み"]] },
  proof: { label: "写真と掲載ページを確認", one: "担当者が一件ずつ診断", two: "優先すべき改善点を整理", three: "予約サイトでの見え方を重視" },
  difference: { eyebrow: "同じ客室で比較", title: "写真の見せ方で、印象はここまで変わります。", body: "同じ客室・同じアングルのまま、明るさや色、奥行きの伝わり方を整えています。", before: "改善前", after: "改善後", items: ["客室写真の見せ方改善", "スイート客室の改装イメージ", "ヴィラの魅力訴求"] },
  why: { ...en.why, eyebrow: "予約前の第一印象", title: "予約サイトでは、写真が最初の接客になります。", body: "一覧で目に留まり、詳細ページで客室の良さが伝わって初めて、ゲストは予約を具体的に検討できます。", cards: [["一覧で目に留まる", "数多く並ぶ施設の中で、続きを見たいと思える主写真へ整えます。"], ["予約前の迷いを減らす", "広さや設備、過ごし方が分かると、選ぶための不安が減ります。"], ["料金への納得感を高める", "客室の質が正しく伝わることで、価格だけの比較を避けやすくなります。"]] },
  optimize: { eyebrow: "改善するポイント", title: "写真の良さを残しながら、伝わり方を整えます。", items: ["自然な明るさ", "写真全体の色味", "広さと奥行き", "寝具の清潔感と質感", "予約サイトの主写真"] },
  services: { ...en.services, eyebrow: "サービス内容", title: "撮り直す前に、今ある写真でできることがあります。", items: [["01", "客室写真の見せ方改善", "過度な加工はせず、実際の客室らしさを保ったまま、明るさ・色・奥行きを整えます。", "¥2,000〜"], ["02", "改装後のイメージ作成", "工事を始める前に、家具や内装を変えた客室のイメージを確認できます。", "¥4,000〜"]] },
  process: { ...en.process, eyebrow: "ご利用の流れ", title: "施設ページを送るだけで、優先すべき改善点が分かります。", support: "まずは内容をご覧いただき、その後の依頼は必要に応じてお決めください。", steps: [["施設ページを送信", "公式サイトやBooking.com、Airbnbの掲載ページをお知らせください。"], ["担当者が確認", "写真の選び方や並び順、明るさ、予約サイト上での見え方を確認します。"], ["診断結果をお届け", "優先したい改善点3つと、サンプル画像1点をお送りします。"], ["必要に応じてご相談", "診断のみでも問題ありません。改善を進める場合は内容をご案内します。"]] },
  cases: { eyebrow: "予約サイトでの確認基準", title: "予約につながる写真か、4つの視点で確認します。", note: "見栄えだけでなく、予約サイト上で必要な情報が伝わるかを確認します。", outcomes: [["一覧での見え方", "小さな主写真でも、客室の特徴がひと目で伝わるか。"], ["客室の分かりやすさ", "明るさ・間取り・広さを、迷わず理解できるか。"], ["素材と清潔感", "寝具や内装の質感が、自然かつ丁寧に見えるか。"], ["滞在の想像しやすさ", "写真の並びから、実際に過ごす時間を思い描けるか。"]], impact: "期待できる変化", mainLabel: "客室写真の見せ方改善", mainTitle: "客室の良さを、予約前にきちんと伝える。", main: "明るさや奥行きを整え、ゲストが客室を具体的に想像できる写真にします。", secondaryLabel: "改装イメージ", secondary: "改装費をかける前に方向性を確認し、関係者との認識をそろえられます。", thirdLabel: "ヴィラの魅力訴求", thirdTitle: "部屋だけでなく、そこで過ごす時間まで見せる。", third: "眺望や屋外空間とのつながりを見せ、滞在そのものを想像しやすくします。", privateWindow: "掲載ページ診断" },
  trustSection: { eyebrow: "写真から生まれる安心感", title: "きれいに見せるだけでなく、正しく伝える。", body: "実際の明るさや間取り、設備が分かる写真は、予約前の不安と宿泊後の行き違いを減らします。客室の魅力を誇張せず、選ぶために必要な情報として整えます。" },
  review: { ...en.review, eyebrow: "無料診断", title: "施設ページを拝見し、改善点を無料でご提案します。", body: "客室写真と予約サイトでの見え方を、担当者が一件ずつ確認します。", includes: ["優先して直したいポイント3点", "改善イメージが分かるサンプル画像1点", "予約サイト上での見え方の診断"], fields: ["施設名", "公式サイト", "Booking.com掲載ページ", "Airbnb掲載ページ", "メールアドレス", "WhatsApp", "ご相談内容"], messagePlaceholder: "現在気になっていることや、改善したい客室についてお聞かせください。", consent: "送信いただいた情報は、今回の診断とご連絡にのみ使用します。", submit: "無料診断を申し込む", sending: "送信中…", success: "お申し込みありがとうございます", successBody: "施設情報を受け付けました。内容を確認し、担当者よりご連絡します。", again: "別の施設を診断する", error: "送信できませんでした。時間をおいて、もう一度お試しください。" },
  contact: { eyebrow: "ご相談", title: "客室の魅力が伝わる見せ方を、一緒に考えます。", location: "国内外のホテル・民泊に対応", button: "相談する" },
};

const zh: Copy = {
  ...en,
  nav: { services: "服务内容", examples: "优化案例", process: "合作流程", cases: "能改善什么", contact: "免费评估" },
  hero: { eyebrow: "酒店客房图片优化", title: "让客房照片更有说服力", body: "优化现有照片与OTA主图，让客房优势更清楚。", primary: "获取免费评估", secondary: "查看优化案例", trust: "免费评估，不要求后续合作。" },
  system: { review: "房源展示检查", analysis: "人工审核中", tags: ["光线", "构图", "价值呈现"], metrics: [["OTA主图", "建议优化"], ["客房质感", "有提升空间"], ["信息清晰度", "已检查"]] },
  proof: { label: "照片与OTA页面诊断", one: "由团队人工审核", two: "找出优先改善项", three: "重点检查实际展示效果" },
  difference: { eyebrow: "优化前后", title: "前后效果，一目了然", body: "拖动滑块，比较同一个房间优化前后的实际变化。", before: "优化前", after: "优化后", items: ["客房照片优化", "套房升级预览", "别墅视觉呈现优化"] },
  why: { ...en.why, eyebrow: "影响客人下单的第一印象", title: "客人先看照片，再\u2060决\u2060定\u2060要\u2060不\u2060要\u2060订", body: "在OTA列表页里，客人通常只会用几秒钟筛选房源。主图能不能抓住注意力，客房优势能不能一眼看懂，都会影响后续下单。", cards: [["房源更容易被点开", "主图在同类房源里更醒目，客人才愿意继续看详情。"], ["客人下单更有底", "采光、空间和设施展示清楚，可以减少预订前的犹豫。"], ["房价更有说服力", "照片把客房档次和细节展示到位，价格也更容易被认可。"]] },
  optimize: { eyebrow: "优化内容", title: "我们优化什么？", items: ["光线优化", "色彩统一", "空间感增强", "床品质感提升", "OTA主图优化"] },
  services: { ...en.services, eyebrow: "核心服务", title: "先把现\u2060有\u2060照\u2060片的价值发\u2060挥\u2060出\u2060来", items: [["01", "客房照片优化", "无需重新拍摄。我们会适度调整光线、色彩和空间层次，在保持真实感的前提下，让照片更适合携程、Airbnb、Booking.com等平台展示。", "¥100 起"], ["02", "客房升级预览", "投入装修预算前，先直观看到家具、材质和空间调整后的呈现效果。", "¥200 起"]] },
  process: { ...en.process, eyebrow: "合作流程", title: "提交房源链接，先看看哪里最值得改善", support: "看完具体建议后，再决定是否需要继续合作。", steps: [["提交房源", "提供酒店官网或Booking.com、Airbnb房源链接。"], ["人工审核", "团队逐项检查照片、排序和OTA页面中的实际展示效\u2060果。"], ["收到建议", "获得3项优先优化建议和1张免费样图。"], ["决定是否继续", "评估本身不绑定后续服务。"]] },
  cases: { eyebrow: "OTA展示评估标准", title: "一张图片是否适合卖房，我们看这四点", note: "不重复展示案例，也不虚构点击率或订单增长数据。这里说明我们实际检查什么。", outcomes: [["列表页是否醒目", "缩成OTA主图尺寸后，客房特点还能不能一眼看清。"], ["空间是否好理解", "采光、布局和实际可用空间是否表达清楚。"], ["质感是否真实", "床品、材质与装修细节是否自然、干净、有说服力。"], ["能否想象入住", "整组照片是否能让客人理解住进去是什么感觉。"]], impact: "主要改善", mainLabel: "客房照片优化", mainTitle: "让客人在预订前，就看清房间的优势", main: "把采光、空间和细节展示清楚，让客人不用猜照片里到底是什么样。", secondaryLabel: "升级预览", secondary: "装修投入前，先确认家具、材质和布局调整是否合适。", thirdLabel: "别墅主图优化", thirdTitle: "不只拍房间，也要拍出住进去的感觉", third: "把室内、景观和生活场景串起来，让客人更容易想象完整的入住体验。", privateWindow: "房源页面检查" },
  trustSection: { eyebrow: "先把房间讲清楚", title: "照片越真实清楚，客人下单越\u2060放\u2060心", body: "采光、布局、床品和设施都展示到位，客人才知道自己订的是什么。我们不会用过度滤镜把房间修得失真，而是把原本就有的优势拍明白、讲清楚。" },
  review: { ...en.review, eyebrow: "免费评估", title: "发来酒店链接，免\u2060费\u2060帮\u2060您\u2060看\u2060一\u2060遍", body: "我们会人工检查客房图片、主图排序和OTA页面里的实际展示效\u2060果。", includes: ["3项优先优化建议", "1张免费优化样图", "OTA页面展示检查"], fields: ["酒店或民宿名称", "官方网站", "Booking.com链接", "Airbnb链接", "联系邮箱", "WhatsApp", "想重点改善的内容"], messagePlaceholder: "可以告诉我们目前最想改善哪类客房或哪组图片。", consent: "提交后，我们只会就本次免费评估与您联系。", submit: "提交免费评估", sending: "正在提交…", success: "提交成功", successBody: "我们已收到房源信息。完成检查后，工作人员会与您联系。", again: "评估另一家房源", error: "暂时没有提交成功，请稍后再试。" },
  contact: { eyebrow: "联系我们", title: "别让好房间输在照片上", location: "服务酒店、民宿与度假租赁房源", button: "聊聊您的房源" },
};

export const dictionaries: Record<Locale, Copy> = { en, ja, zh };
