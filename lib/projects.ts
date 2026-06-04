export interface Project {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  coverImage?: string;
  links?: {
    github?: string;
    demo?: string;
  };
  featured?: boolean;
  platform?: string;
  highlights?: string[];
  content?: string;
  status?: "in-progress";
  monogram: string;
}

export const projects: Project[] = [
  {
    slug: "card-deck-builder",
    monogram: "卡",
    name: "控訴-查卡＆組牌＆QA",
    description: "給真實玩家使用的組牌器，社群已有活躍用戶",
    platform: "Web／React／Cloudflare Pages",
    tags: ["React", "TypeScript", "全文搜尋", "JSON Export"],
    highlights: [
      "針對手機單手操作設計 UI",
      "防抖搜尋優化",
      "構築規則驗證邏輯",
    ],
    content:
      "控訴卡牌查詢組牌工具。為桌遊《控訴》社群打造的查詢與組牌工具。支援卡名／效果全文搜尋、多條件篩選、構築規則驗證、牌組儲存與載入、匯出 JSON 備份及牌組圖片，針對手機單手操作情境設計 UI。已有社群玩家實際使用。",
    featured: true,
    links: {
      github: "https://github.com/lamb-liver/accusation-card-tool",
      demo: "https://accusation-card-tool.pages.dev/",
    },
  },
  {
    slug: "illustrator-portfolio",
    monogram: "繪",
    name: "繪師個人作品集網站",
    description: "為客戶打造可自主更新的 SEO 友好展示站",
    platform: "Web／Next.js／Vercel",
    tags: ["Next.js", "Headless CMS", "Vercel", "SSG/SSR"],
    highlights: [
      "Lighthouse 4 項 90+",
      "客戶可零技術自行更新作品",
    ],
    content:
      "為繪師打造的作品集網站，整合 CMS 後台讓客戶自主管理內容，以 Next.js 建置兼顧 SEO。",
    links: {},
  },
  {
    slug: "lab",
    monogram: "羊",
    name: "羊·實驗",
    description: "數學與演算法的互動式視覺化實驗站",
    platform: "Web／React／p5.js",
    tags: ["React", "TypeScript", "p5.js", "演算法視覺化"],
    highlights: [
      "以互動視覺化拆解抽象概念",
      "沉穩的動態呈現，避免持續干擾閱讀",
      "實驗內容可持續擴充",
    ],
    content:
      "羊·實驗是一個數學與演算法的互動式視覺化實驗站，將抽象概念整理成可觀察、可操作的頁面，讓讀者透過圖形變化理解背後規則。",
    links: {
      github: "https://github.com/lamb-liver/lab",
      demo: "https://lab.lambliver.dev/",
    },
  },
  {
    slug: "renthouse",
    monogram: "租",
    name: "租屋筆記",
    description: "手機優先的看房紀錄工具，用來快速記錄並比較多間房源差異",
    platform: "Web／React／Cloudflare",
    tags: ["React", "TypeScript", "Vite", "localStorage"],
    highlights: [
      "手機優先的看房流程",
      "Summary 與多間房源比較",
      "JSON 備份匯入匯出",
    ],
    content:
      "租屋筆記是不需要登入的看房紀錄工具，資料只存在使用者自己的瀏覽器。它針對看房現場快速填寫、事後整理 Summary、比較多間房源差異與本地備份還原設計，讓租屋決策資訊保持清楚可追溯。",
    links: {
      github: "https://github.com/lamb-liver/renthouse",
      demo: "https://rent.lambliver.dev",
    },
  },
  {
    slug: "offline-pos-android",
    monogram: "攤",
    name: "小攤位離線結帳 App",
    description: "攤主的隨身收銀機，無網路照常運作",
    platform: "Android／Jetpack Compose／持續開發中",
    status: "in-progress",
    tags: ["Kotlin", "Jetpack Compose", "Room Database", "MVVM"],
    highlights: [
      "離線優先架構",
      "CSV 報表背景執行緒生成",
      "MVP 持續開發中",
    ],
    content:
      "擺攤／活動販售用的 Android 結帳工具，Jetpack Compose 建置 UI，支援商品管理、折扣規則、銷售統計與 CSV 匯出。",
    links: {
      github: "https://github.com/lamb-liver/appforsale",
      demo: "/downloads/stallpos.apk",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
