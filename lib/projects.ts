export type ProjectApplicationKind = "web" | "android";

export interface ProjectScreenshot {
  src: string;
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
  coverImage?: string;
  screenshots?: ProjectScreenshot[];
  links?: {
    github?: string;
    demo?: string;
  };
  featured?: boolean;
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
      "《控訴》玩家用的組牌工具：搜卡、篩選、驗構築規則，並匯出牌組與圖片分享。",
    platform: "Web／React／Cloudflare Pages",
    tags: [
      "React",
      "TypeScript",
      "Cloudflare Pages",
      "全文搜尋",
      "JSON Export",
    ],
    caseStudy: {
      background:
        "《控訴》卡牌數量多，玩家需要一邊查效果一邊組牌，還得符合構築規則；社群裡缺少順手的手機組牌工具。",
      work: "獨立完成查卡與全文搜尋、多條件篩選、組牌介面與構築規則檢查，並支援牌組儲存、JSON 備份與牌組圖片輸出。",
      designFocus: [
        "版面以單手操作為優先",
        "搜尋輸入加上防抖，減少卡頓",
        "規則不符時即時標示，組牌時能馬上修正",
      ],
      outcome:
        "已部署至 accusation-card-tool.pages.dev，社群玩家實際用來查卡、組牌與分享牌組。",
    },
    screenshots: [
      {
        src: "/images/projects/card-deck-builder-featured.webp",
        alt: "組牌模式畫面",
        caption: "手機單手操作的組牌模式",
        orientation: "mobile",
      },
      {
        src: "/images/projects/card-deck-builder-filter.webp",
        alt: "篩選條件畫面",
        caption: "多條件篩選卡池",
        orientation: "mobile",
      },
    ],
    featured: true,
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
      "繪師客戶的作品集網站：前台展示作品，後台可自行新增與更新內容。",
    platform: "Web／Next.js／Vercel",
    tags: ["Next.js", "Headless CMS", "Vercel", "SSG/SSR"],
    caseStudy: {
      background:
        "繪師需要對外展示作品，也希望之後能自己上架新圖、改介紹文字，而不是每次改版都找人改程式。",
      work: "以 Next.js 建置前台頁面，串接 Headless CMS，讓客戶在後台管理作品與文案；並處理 SEO 與靜態產出設定。",
      designFocus: [
        "作品列表與詳情頁載入順暢",
        "後台欄位對應前台區塊，減少客戶學習成本",
        "Lighthouse 四項指標維持 90 分以上",
      ],
      outcome:
        "已部署 artdemo.lambliver.dev 作為公開展示範本，客戶可透過 Notion CMS 新增作品與更新內容。",
    },
    screenshots: [
      {
        src: "/images/projects/illustrator-portfolio-home.webp",
        alt: "作品集網站首頁畫面",
        caption: "作品展示首頁與導覽結構",
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
      "數學與演算法的互動實驗站：用可調參數的圖形，把抽象概念變成能操作的頁面。",
    platform: "Web／React／p5.js",
    tags: ["React", "TypeScript", "p5.js", "演算法視覺化"],
    caseStudy: {
      background:
        "學數學或演算法時，光看公式不容易理解參數改變後圖形怎麼變；我想用網頁把這些關係做成可以試的實驗。",
      work: "建立實驗站架構與共用版面，將各主題做成獨立互動頁，以 p5.js 繪製圖形並綁定參數控制。",
      designFocus: [
        "滑桿、輸入與圖形即時連動",
        "動畫節制，避免干擾閱讀與操作",
        "新主題可以照同一套模式擴充",
      ],
      outcome:
        "已上線 lab.lambliver.dev，目前包含繁花曲線等實驗，可直接在瀏覽器調參數觀察變化。",
    },
    screenshots: [
      {
        src: "/images/projects/lab-home.webp",
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
      "給攤位與活動販售的 Android 結帳 App：離線可記帳、管理商品並匯出銷售 CSV。",
    platform: "Android／Jetpack Compose／持續開發中",
    status: "in-progress",
    tags: ["Kotlin", "Jetpack Compose", "Room Database", "MVVM"],
    caseStudy: {
      background:
        "戶外攤位網路常不穩，結帳要快，還得記住今天賣了什麼；紙筆或一般筆記 App 不好算折扣與統計。",
      work: "以 Jetpack Compose 實作結帳流程、商品與庫存管理、折扣規則，以及 Room 儲存銷售紀錄；CSV 報表在背景執行緒產生。",
      designFocus: [
        "離線優先，沒網路也能完成結帳",
        "結帳步驟壓在最少畫面",
        "報表生成不阻塞結帳畫面",
      ],
      outcome:
        "MVP 已提供 APK 安裝測試，結帳與商品管理可實際操作；銷售統計與報表細節持續補強中。",
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
    projectSlug: "card-deck-builder",
    screenshot: {
      src: "/images/projects/card-deck-builder-featured.webp",
      alt: "組牌模式畫面",
      caption: "手機單手操作的組牌模式",
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
  {
    projectSlug: "lab",
    screenshot: {
      src: "/images/projects/lab-featured.webp",
      alt: "羊實驗首頁畫面",
      caption: "互動視覺化實驗站首頁",
      orientation: "desktop",
    } satisfies ProjectScreenshot,
  },
].map(({ projectSlug, screenshot }) => {
  const project = getProjectBySlug(projectSlug);
  if (!project) {
    throw new Error(`Missing featured project: ${projectSlug}`);
  }
  return { project, screenshot };
});
