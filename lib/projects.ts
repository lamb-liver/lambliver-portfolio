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

export interface ProjectInstallGuide {
  lead: string;
  steps: string[];
  fileName?: string;
  sha256?: string;
  certSha256?: string;
  playTestingNote?: string;
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
  installGuide?: ProjectInstallGuide;
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
      "給《控訴》玩家用的組牌網站：手機就能查卡、組牌、看規則對不對，沒網路也能用。",
    platform: "網站",
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
        "《控訴》卡很多，組牌時要一邊查效果、一邊對規則。用手機組牌不太方便。",
      work: "做了查卡、篩選、組牌、離線使用、對局計時和匯出。玩家可以留言、投稿公開牌組，管理員再審核。每張卡也有獨立頁面。",
      designFocus: [
        "手機單手就能滑、查、把卡加進牌組",
        "畫面上看得到的卡，跟「能不能放進牌組」分開判斷",
        "沒網路也能查卡；卡片資料會定期更新",
      ],
      outcome:
        "網站已上線，有人拿來查卡、組牌和分享。",
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
      "協助繪師建置對外作品集網站；作品與介紹可自行更新，無需改動程式。",
    platform: "網站",
    tags: ["Next.js", "Headless CMS", "Vercel", "SSG/SSR"],
    caseStudy: {
      background:
        "繪師需要穩定的對外作品集，但不希望每次上新圖或調整介紹都必須修改程式碼。",
      work: "建置作品集網站，並接上可自行維護的內容流程：作品介紹、多圖展示、精選排序與委託資訊。內容更新後重新發布即可反映至網站；圖片會轉成適合網頁載入的格式。內容來源可依需求接 Notion，或其他既有更新方式。",
      designFocus: [
        "日常維護以內容更新為主，不必接觸程式",
        "圖片顯示穩定，降低外部連結失效造成的破圖",
        "發布前檢查必填欄位，減少上線後錯誤",
      ],
      outcome: "作品與介紹可自行更新，無需改程式。",
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
      "把數學和演算法變成可以動手調的圖：拉參數，圖就跟著變。",
    platform: "網站",
    tags: ["Astro", "React", "TypeScript", "p5.js", "演算法視覺化"],
    caseStudy: {
      background:
        "學數學或演算法時，只看公式很難想像「數字一改，圖會怎麼變」。我想做成打開就能試的實驗。",
      work: "網站分成作品、主題、練習三種入口。每個實驗都能調參數，圖會跟著變。",
      designFocus: [
        "拉桿、公式和圖一起動，手機也能用",
        "看作品、依主題瀏覽、做練習，分開排，比較好找",
        "新實驗上架前會檢查封面、說明和連結",
      ],
      outcome:
        "已上線 lab.lambliver.dev，瀏覽器裡就能調參數、看結果。",
    },
    screenshots: [
      {
        src: "/images/projects/lab-featured.webp",
        alt: "羊實驗首頁畫面",
        caption: "實驗站首頁",
        orientation: "desktop",
      },
      {
        src: "/images/projects/lab-spirograph.webp",
        alt: "繁花曲線互動畫面",
        caption: "可調參數的繁花曲線",
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
      "看房時用手機一項一項打勾、寫備註，回家後可以把幾間放在一起比較。不用註冊。",
    platform: "網站",
    tags: ["React", "TypeScript", "Vite", "Cloudflare Pages", "localStorage"],
    caseStudy: {
      background:
        "一天看好幾間房，價格、格局和當下感覺很容易混在一起。回家要比較時，需要一份看得懂的紀錄。",
      work: "手機上一題一題檢查，看完有摘要，最多可以並排五間。預設題目能關，也能自己加題。資料可以整份備份，或匯出成試算表。",
      designFocus: [
        "現場單手就能記；摘要會列出還要再確認的項目",
        "比較頁把補助、屋齡、電梯和整體印象放在一起看",
        "資料留在這台裝置上；匯入失敗時，原本的紀錄還在",
      ],
      outcome:
        "已上線 rent.lambliver.dev，打開就能用、不用登入。",
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
      demo: "https://rent.lambliver.dev",
    },
  },
  {
    slug: "itabag-planner",
    applicationKind: "web",
    monogram: "痛",
    name: "痛包規劃",
    description:
      "先排周邊，再看板子和包包裝不裝得下。檔案存在這台裝置，也可以帶走繼續改。",
    platform: "網站",
    tags: ["React", "TypeScript", "Vite", "Cloudflare Workers", "IndexedDB"],
    caseStudy: {
      background:
        "做痛包時，徽章排得下、板子夠不夠、包包裡真正能裝多少，是三件不同的事。只看商品上寫的尺寸，很難在買之前心裡有數。",
      work: "分成三步：先排周邊，再看板子，最後套進包包。可以快速排列、對齊、旋轉，也可以存成圖。專案存在這台裝置，能匯出檔案換電腦繼續改。介面有繁中、日文和英文。",
      designFocus: [
        "先排，再看尺寸，順序跟實際準備痛包一樣",
        "裝得下、會不會超出、從外面看不看得到，分開顯示；結果只供參考",
        "不用註冊；資料預設只留在你的裝置上",
      ],
      outcome: "買之前就能確認徽章、板子和包包裝不裝得下。",
    },
    screenshots: [
      {
        src: "/images/projects/itabag-arrange.jpg",
        alt: "痛包規劃的快速排列與板面編輯畫面",
        caption: "快速排列與板面編輯",
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
      "免費給攤友用的手機結帳：沒網路也能收錢，之後再上傳。點進去有安裝說明。",
    platform: "手機 App",
    tags: ["Kotlin", "Jetpack Compose", "Room", "Jetpack DataStore", "MVVM", "Cloudflare Workers"],
    caseStudy: {
      background:
        "戶外擺攤網路常不穩，客人結帳卻要快。紙筆不好算折扣，一般筆記 App 也不好看出今天賣了多少。",
      work: "做了商品、套組、活動庫存、結帳、作廢和當天紀錄。沒網路也能結帳；有網路再把帳傳上雲端。換新手機可以帶走資料，電腦也能開報表。",
      designFocus: [
        "現場先結完帳，網路回來再上傳",
        "手機和報表上的數字要對得上",
        "同一時間只有一台手機當結帳機，避免兩台一起賣把帳弄亂",
      ],
      outcome: "免費給攤友用。沒網路也能收錢；點進來有安裝說明。",
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
      demo: "https://github.com/lamb-liver/appforsale/releases/download/v2.1.3/StallPOS-2.1.3.apk",
    },
    installGuide: {
      lead: "免費給攤友用，不是 Play 商店 App。請只從本頁或 GitHub Release 下載 StallPOS 2.1.3。",
      steps: [
        "用手機瀏覽器點「下載 App」。",
        "若跳出「禁止安裝未知應用程式」：設定 → 應用程式 → 特殊應用程式存取 → 安裝未知的應用程式 → 只打開「Chrome」或「檔案」。不要開開發人員選項。",
        "若 Play 保護說沒看過：優先選「仍要安裝」或「送出掃描」。沒有該選項才暫時關掉 Play 商店 → 頭像 → Play 保護 →「使用 Play 保護機制掃描應用程式」，裝完立刻再打開。只關這一次、只為這一個檔。",
      ],
      fileName: "StallPOS-2.1.3.apk",
      sha256:
        "d43c730d3858eb0963d0e015cd19640cd37406a15b110dc6c094e386223fbe74",
      certSha256:
        "BBCBA8463E3CCAE537AF154D26A58317E47544811CEFA7AEA411355B8B219CD8",
      playTestingNote: "Play 內部測試尚未開放，有連結後會改在這裡。",
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
    projectSlug: "illustrator-portfolio",
    screenshot: {
      src: "/images/projects/illustrator-portfolio-featured.webp",
      desktopSrc: "/images/projects/illustrator-portfolio-featured-desktop.webp",
      alt: "作品集頁顯示分類篩選與作品卡片",
      caption: "公開作品集支援分類篩選與作品內頁",
      orientation: "desktop",
    } satisfies ProjectScreenshot,
  },
  {
    projectSlug: "itabag-planner",
    screenshot: {
      src: "/images/projects/itabag-featured.webp",
      desktopSrc: "/images/projects/itabag-featured-desktop.webp",
      alt: "痛包規劃的快速排列與板面編輯畫面",
      caption: "快速排列與板面編輯",
      orientation: "desktop",
    } satisfies ProjectScreenshot,
  },
  {
    projectSlug: "offline-pos-android",
    screenshot: {
      src: "/images/projects/offline-pos-featured-mobile.webp",
      desktopSrc: "/images/projects/offline-pos-featured-desktop.webp",
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
