export type ProjectApplicationKind = "web" | "android";

export interface ProjectScreenshot {
  src: string;
  desktopSrc?: string;
  alt: string;
  caption: string;
  orientation: "mobile" | "desktop";
}

export interface ProjectCaseStudy {
  background: string;
  work: string;
  designFocus: string[];
  outcome: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  screenshots?: ProjectScreenshot[];
  links?: {
    github?: string;
    demo?: string;
  };
  platform?: string;
  caseStudy: ProjectCaseStudy;
  status?: "in-progress";
  monogram: string;
  applicationKind: ProjectApplicationKind;
}

export const projects: Project[] = [
  {
    slug: "card-deck-builder",
    applicationKind: "web",
    monogram: "卡",
    name: "控訴-查卡＆組牌＆QA",
    description:
      "《控訴》玩家用的 PWA：離線查卡、驗證構築規則、組牌分享，並提供社群投稿與審核。",
    platform: "Web／React／Cloudflare Pages + D1",
    tags: [
      "React",
      "Vite",
      "Cloudflare Pages",
      "PWA",
      "全文搜尋",
      "JSON Export",
    ],
    caseStudy: {
      background:
        "《控訴》卡牌數量多，玩家需要一邊查效果一邊組牌，還得符合構築規則；社群裡缺少順手的手機組牌工具。",
      work: "以 React／Vite 完成查卡、同步多條件篩選、組牌規則、離線 PWA、對局時鐘與多種匯出；交流區以 Cloudflare Pages Functions、D1 與 Turnstile 完成留言、公開牌組投稿及管理員審核，卡牌另有可被搜尋引擎索引的獨立頁面。",
      designFocus: [
        "手機單手操作優先，卡池與整頁各自維持清楚的捲動邊界",
        "分開處理卡池顯示規則與加入牌組的合法性，避免介面條件污染領域規則",
        "以 Workbox、響應式圖片與單一卡牌目錄支援離線使用及穩定載入，QA 則由 Google Sheets 定期同步",
      ],
      outcome:
        "已部署至 accusation-card-tool.pages.dev，社群玩家實際用來查卡、組牌與分享；內容、構築規則、搜尋、PWA、API 與 production build 都納入 pull request 驗證。",
    },
    screenshots: [
      {
        src: "/images/projects/card-deck-builder-featured.webp",
        desktopSrc: "/images/projects/card-deck-builder-featured-desktop.webp",
        alt: "查卡模式與卡片列表畫面",
        caption: "查卡、搜尋與多條件篩選",
        orientation: "mobile",
      },
      {
        src: "/images/projects/card-deck-builder-filter.webp",
        alt: "篩選條件畫面",
        caption: "多條件篩選卡池",
        orientation: "mobile",
      },
      {
        src: "/images/projects/card-deck-builder-deck.png",
        alt: "組牌模式顯示卡池、牌組進度與構築規則",
        caption: "選擇教團、套用構築規則並管理牌組進度",
        orientation: "mobile",
      },
    ],
    links: {
      github: "https://github.com/lamb-liver/accusation-card-tool",
      demo: "https://accusation-card-tool.pages.dev/",
    },
  },
  {
    slug: "illustrator-portfolio",
    applicationKind: "web",
    monogram: "繪",
    name: "繪師個人作品集網站",
    description:
      "讓繪師以 Notion 維護作品、委託資訊與網站文案，並自動處理圖片、SEO 與部署更新。",
    platform: "Web／Next.js／Vercel",
    tags: ["Next.js", "Headless CMS", "Vercel", "SSG/SSR"],
    caseStudy: {
      background:
        "繪師需要對外展示作品，也希望之後能自己上架新圖、改介紹文字，而不是每次改版都找人改程式。",
      work: "以 Next.js 16 串接 Notion 的作品與站台設定資料，完成作品內文、多圖、精選排序與委託頁；Notion 上傳圖片會在建置時轉成 WebP，失敗時再由限制來源與安全格式的站內代理提供。",
      designFocus: [
        "日常更新集中在 Notion，讓非技術使用者不必碰程式或部署設定",
        "用建置期圖片烘焙避開 Notion 簽名網址過期，同時保留失敗時的 fallback",
        "以 CMS validation、全環境 Bearer 驗證、安全標頭、token leak 檢查與 production smoke 提前攔截交付錯誤",
      ],
      outcome:
        "已部署 artdemo.lambliver.dev 作為公開展示範本；創作者可在 Notion 完成日常更新，欄位錯誤能由驗證 API 定位，圖片更新則可透過不在請求網址暴露密鑰的一鍵重建流程發布。",
    },
    screenshots: [
      {
        src: "/images/projects/illustrator-portfolio-works.png",
        alt: "作品集頁顯示分類篩選與作品卡片",
        caption: "公開作品集支援分類篩選與作品內頁",
        orientation: "desktop",
      },
      {
        src: "/images/projects/illustrator-portfolio-cms.webp",
        alt: "Notion CMS 後台畫面",
        caption: "Notion 後台管理作品與分類",
        orientation: "desktop",
      },
    ],
    links: {
      demo: "https://artdemo.lambliver.dev/",
    },
  },
  {
    slug: "lab",
    applicationKind: "web",
    monogram: "羊",
    name: "羊·實驗",
    description:
      "數學視覺化與生成藝術作品集：從單一作品、主題導覽到試題互動，把抽象概念變成能操作的圖形。",
    platform: "Web／Astro／React／p5.js",
    tags: ["Astro", "React", "TypeScript", "p5.js", "演算法視覺化"],
    caseStudy: {
      background:
        "學數學或演算法時，光看公式不容易理解參數改變後圖形怎麼變；我想用網頁把這些關係做成可以試的實驗。",
      work: "以 Astro 建立靜態內容站，並以 React 與 p5.js 驅動互動畫布；依 Works、Explore、Exam 三種使用情境拆分內容、registry、互動 root 與 renderer，同時建立內容產生器、結構化資料及發布稽核。",
      designFocus: [
        "控制項、公式與圖形即時連動，同時維持鍵盤操作與手機版可用性",
        "依作品、主題探索與考試準備分開資訊架構，避免所有內容套用同一種頁面",
        "新增內容時同步驗證 frontmatter、registry、互動接線、封面、SEO metadata 與公開路由",
      ],
      outcome:
        "已上線 lab.lambliver.dev，公開作品集、主題導覽、試題視覺化與概念路徑；每個互動頁都能直接在瀏覽器調整參數並觀察結果。",
    },
    screenshots: [
      {
        src: "/images/projects/lab-featured.webp",
        alt: "羊實驗首頁畫面",
        caption: "互動視覺化實驗站首頁",
        orientation: "desktop",
      },
      {
        src: "/images/projects/lab-spirograph.webp",
        alt: "繁花曲線互動畫面",
        caption: "可調參數的繁花曲線視覺化",
        orientation: "desktop",
      },
    ],
    links: {
      github: "https://github.com/lamb-liver/lab",
      demo: "https://lab.lambliver.dev/",
    },
  },
  {
    slug: "renthouse",
    applicationKind: "web",
    monogram: "租",
    name: "租屋筆記",
    description:
      "看房現場用的紀錄工具：自訂檢查項目、整理摘要、比較房源，並以 JSON／CSV 備份，不需登入。",
    platform: "Web／React／Cloudflare",
    tags: ["React", "TypeScript", "Vite", "Cloudflare Pages", "localStorage"],
    caseStudy: {
      background:
        "一天看多間房時，價格、格局與備註容易混在一起；事後要比較哪一間比較划算，需要結構化紀錄。",
      work: "製作手機優先的一題一頁檢查流程、Summary 整理頁與最多五間房的比較檢視；可停用預設題目、新增自訂題目，並以 JSON 完整備份或 CSV 匯出摘要。",
      designFocus: [
        "現場單手記錄狀況與筆記，摘要再集中呈現完成度、分類分數與需留意項目",
        "比較頁並排顯示關鍵欄位，保留租屋補助、屋齡、電梯與最終印象",
        "資料只留在 localStorage；匯入失敗不覆蓋正常資料，舊版備份可逐版遷移",
      ],
      outcome:
        "已部署 rent.lambliver.dev，看房時可直接開啟使用，無需註冊帳號；JSON 可完整還原紀錄，CSV 可快速帶入試算表比較。",
    },
    screenshots: [
      {
        src: "/images/projects/renthouse-inspection.png",
        alt: "看房檢查流程顯示完成度、狀況評級與現場筆記",
        caption: "逐項記錄房屋狀況、評級與現場備註",
        orientation: "mobile",
      },
      {
        src: "/images/projects/renthouse-checklist.webp",
        alt: "檢查項目管理畫面",
        caption: "預設懶人包檢查項目列表",
        orientation: "mobile",
      },
    ],
    links: {
      github: "https://github.com/lamb-liver/renthouse",
      demo: "https://rent.lambliver.dev",
    },
  },
  {
    slug: "itabag-planner",
    applicationKind: "web",
    monogram: "痛",
    name: "痛包規劃",
    description:
      "從周邊尺寸與數量出發，試算排列、板面占用與包包可裝區，並保存、移轉可繼續編輯的本機專案。",
    platform: "Web／React／Cloudflare Workers",
    tags: ["React", "TypeScript", "Vite", "Cloudflare Workers", "IndexedDB"],
    caseStudy: {
      background:
        "準備痛包時，周邊數量、插板尺寸、包包外尺寸與真正可裝板區是不同問題；只看商品尺寸，很難在購買或固定周邊前確認排列是否合適。",
      work: "以 React、TypeScript 與原生 SVG 製作三階段規劃流程，支援四種快速排列、多選／吸附／對齊、單件外觀、自由旋轉、可見區量測與 PNG 匯出；多個專案與圖片存在 IndexedDB，並可用 .itabag 檔跨裝置移轉。介面提供繁中、日文與英文。",
      designFocus: [
        "依周邊、板子、包包的實際決策順序拆成三步，先排列再判斷尺寸",
        "分開呈現排列占用、板內／越界、可裝板與周邊可見性，不把試算誤寫成購買保證",
        "專案與圖片預設只留在裝置；無需帳號或雲端，也能匯出單一可編輯專案",
      ],
      outcome:
        "已上線 itabag.lambliver.dev，可在桌機與手機完成從周邊規格、板面排列到包包尺寸檢查的流程；舊專案可自動升級，匯入的 .itabag 檔會建立新的可編輯本機專案。",
    },
    screenshots: [
      {
        src: "/images/projects/itabag-arrange.jpg",
        alt: "痛包規劃的蜂巢交錯快速排列與 SVG 板面編輯畫面",
        caption: "蜂巢交錯快速排列與 SVG 板面編輯",
        orientation: "desktop",
      },
      {
        src: "/images/projects/itabag-bag-fit.jpg",
        alt: "痛包規劃顯示包包外尺寸、可裝板區與尺寸判斷結果",
        caption: "分開比較包包外尺寸、可裝板區與購買摘要",
        orientation: "desktop",
      },
    ],
    links: {
      demo: "https://itabag.lambliver.dev/",
    },
  },
  {
    slug: "offline-pos-android",
    applicationKind: "android",
    monogram: "攤",
    name: "小攤位離線結帳 App",
    description:
      "給市集攤位使用的離線優先 Android POS：快速結帳、活動庫存、雲端備份／換機恢復與唯讀分析。",
    platform: "Android／Kotlin／Jetpack Compose／Cloudflare Workers",
    tags: ["Kotlin", "Jetpack Compose", "Room", "Jetpack DataStore", "MVVM", "Cloudflare Workers"],
    caseStudy: {
      background:
        "戶外攤位網路常不穩，結帳要快，還得記住今天賣了什麼；紙筆或一般筆記 App 不好算折扣與統計。",
      work: "以 Jetpack Compose、加密 Room／SQLCipher 完成商品、套組、活動庫存、結帳、VOID 與本機交易查詢；Outbox 經 Cloudflare Worker／雙 D1 同步，並提供換機還原與唯讀 Web Dashboard。",
      designFocus: [
        "離線 SALE／VOID 與 Outbox 在同一 Room transaction 完成，網路恢復後再依序重試",
        "以 append-only snapshot 與冪等同步維持裝置庫存、雲端資料及報表一致",
        "單一 ACTIVE Device、跨 D1 刪除 tombstone 與去識別診斷，縮小換機及 restore 風險",
      ],
      outcome:
        "v2.1.1 已完成 production-signed Android 發布與 Cloudflare production 部署；Android／Worker／雙 D1／Dashboard browser／signed upgrade gates 通過，官方 APK 由 immutable GitHub Release 提供。",
    },
    screenshots: [
      {
        src: "/images/projects/offline-pos-dashboard.webp",
        alt: "今日儀表板畫面",
        caption: "結帳後即時顯示今日營業額",
        orientation: "mobile",
      },
      {
        src: "/images/projects/offline-pos-checkout.webp",
        alt: "結帳找零畫面",
        caption: "現金與行動支付結帳找零",
        orientation: "mobile",
      },
      {
        src: "/images/projects/offline-pos-add-product.webp",
        alt: "新增商品畫面",
        caption: "設定商品名稱、價格與庫存",
        orientation: "mobile",
      },
    ],
    links: {
      github: "https://github.com/lamb-liver/appforsale",
      demo: "https://github.com/lamb-liver/appforsale/releases/download/v2.1.1/StallPOS-2.1.1.apk",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getProjectSummaryForJsonLd(project: Project): string {
  const { background, outcome } = project.caseStudy;
  return `${background} ${outcome}`;
}

export const featuredProjectScreenshots = [
  {
    projectSlug: "itabag-planner",
    screenshot: {
      src: "/images/projects/itabag-arrange.jpg",
      alt: "痛包規劃的蜂巢交錯快速排列與 SVG 板面編輯畫面",
      caption: "蜂巢交錯快速排列與 SVG 板面編輯",
      orientation: "desktop",
    } satisfies ProjectScreenshot,
  },
  {
    projectSlug: "lab",
    screenshot: {
      src: "/images/projects/lab-featured.webp",
      alt: "羊實驗首頁畫面",
      caption: "數學與演算法實驗首頁",
      orientation: "desktop",
    } satisfies ProjectScreenshot,
  },
  {
    projectSlug: "card-deck-builder",
    screenshot: {
      src: "/images/projects/card-deck-builder-featured.webp",
      desktopSrc: "/images/projects/card-deck-builder-featured-desktop.webp",
      alt: "查卡模式與卡片列表畫面",
      caption: "查卡、搜尋與多條件篩選",
      orientation: "mobile",
    } satisfies ProjectScreenshot,
  },
  {
    projectSlug: "offline-pos-android",
    screenshot: {
      src: "/images/projects/offline-pos-featured.webp",
      alt: "今日儀表板畫面",
      caption: "結帳後即時顯示今日營業額",
      orientation: "mobile",
    } satisfies ProjectScreenshot,
  },
].map(({ projectSlug, screenshot }) => {
  const project = getProjectBySlug(projectSlug);
  if (!project) {
    throw new Error(`Missing featured project: ${projectSlug}`);
  }
  return { project, screenshot };
});
