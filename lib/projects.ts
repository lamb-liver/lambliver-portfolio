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
      work: "以 React／Vite 完成查卡、同步多條件篩選、組牌規則、離線 PWA 與多種匯出；交流區則以 Cloudflare Pages Functions、D1 與 Turnstile 完成留言、公開牌組投稿及管理員審核。",
      designFocus: [
        "手機單手操作優先，卡池與整頁各自維持清楚的捲動邊界",
        "分開處理卡池顯示規則與加入牌組的合法性，避免介面條件污染領域規則",
        "以 Workbox、響應式圖片與單一卡牌目錄支援離線使用及穩定載入",
      ],
      outcome:
        "已部署至 accusation-card-tool.pages.dev，社群玩家實際用來查卡、組牌與分享；內容、構築規則、PWA、API 與部署設定都有可執行的專案驗證。",
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
      work: "以 Next.js 16 串接 Notion 的作品與站台設定資料，完成作品內文、多圖、精選排序與委託頁；Notion 上傳圖片會在建置時轉成 WebP，失敗時再由受保護的站內代理提供。",
      designFocus: [
        "日常更新集中在 Notion，讓非技術使用者不必碰程式或部署設定",
        "用建置期圖片烘焙避開 Notion 簽名網址過期，同時保留失敗時的 fallback",
        "以 CMS validation、token leak 檢查與 production smoke 提前攔截交付錯誤",
      ],
      outcome:
        "已部署 artdemo.lambliver.dev 作為公開展示範本；創作者可在 Notion 完成日常更新，欄位錯誤能由驗證 API 定位，圖片更新則可透過受保護的一鍵重建流程發布。",
    },
    screenshots: [
      {
        src: "/images/projects/illustrator-portfolio-home.webp",
        alt: "作品集網站關於模板畫面",
        caption: "關於頁與可替換內容區塊",
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
      work: "以 Astro 建立靜態內容站，並以 React 與 p5.js 驅動互動畫布；依 Works、Explore、Exam 三種使用情境拆分內容、registry、互動 root 與 renderer，同時建立內容產生器及發布稽核。",
      designFocus: [
        "控制項、公式與圖形即時連動，同時維持鍵盤操作與手機版可用性",
        "依作品、主題探索與考試準備分開資訊架構，避免所有內容套用同一種頁面",
        "新增內容時同步驗證 frontmatter、registry、互動接線、封面與公開路由",
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
      "看房現場用的紀錄工具：快速記下每間房，之後比較差異並以 JSON 備份，不需登入。",
    platform: "Web／React／Cloudflare",
    tags: ["React", "TypeScript", "Vite", "Cloudflare Pages", "localStorage"],
    caseStudy: {
      background:
        "一天看多間房時，價格、格局與備註容易混在一起；事後要比較哪一間比較划算，需要結構化紀錄。",
      work: "製作手機優先的看房表單、Summary 整理頁與多房比較檢視；資料存在瀏覽器 localStorage，並支援 JSON 匯出與匯入還原。",
      designFocus: [
        "現場單手就能填完一筆紀錄",
        "比較頁並排顯示關鍵欄位",
        "備份檔可帶著走，換裝置也能還原",
      ],
      outcome:
        "已部署 rent.lambliver.dev，看房時可直接開啟使用，無需註冊帳號。",
    },
    screenshots: [
      {
        src: "/images/projects/renthouse-home.webp",
        alt: "租屋筆記首頁畫面",
        caption: "首頁新增看房紀錄與最近紀錄",
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
    slug: "offline-pos-android",
    applicationKind: "android",
    monogram: "攤",
    name: "小攤位離線結帳 App",
    description:
      "給市集攤位使用的離線 Android POS：快速結帳、管理商品與庫存，並匯出銷售 CSV 或完整備份。",
    platform: "Android／Kotlin／Jetpack Compose",
    tags: ["Kotlin", "Jetpack Compose", "Jetpack DataStore", "MVVM"],
    caseStudy: {
      background:
        "戶外攤位網路常不穩，結帳要快，還得記住今天賣了什麼；紙筆或一般筆記 App 不好算折扣與統計。",
      work: "以 Jetpack Compose 實作商品、套組、購物車、折扣、庫存與結帳流程；交易狀態由 DataStore + JSON 持久化，並透過 Android SAF 完成 CSV 匯出及 JSON 備份還原。",
      designFocus: [
        "離線優先，沒有網路仍能完成整段結帳與查閱今日營收",
        "在確認結帳時重新對帳金額與庫存，避免畫面快照過期造成錯帳",
        "提供上一筆復原與版本化備份遷移，降低現場誤操作及資料遺失風險",
      ],
      outcome:
        "目前已提供 v1.2.0 APK，完整支援商品與套組、庫存、現金與行動支付、今日儀表、CSV 匯出及 JSON 備份還原，並以單元測試覆蓋金額、對帳、復原與備份遷移。",
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
      demo: "/downloads/app-debug.apk",
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
