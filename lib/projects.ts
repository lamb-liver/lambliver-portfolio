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
        "《控訴》卡很多，組牌時要一邊查效果、一邊對規則。社群裡一直缺少一個用手機就能順手組完的工具。",
      work: "做了查卡、篩選、組牌、離線使用、對局計時和匯出。玩家可以留言、投稿公開牌組，管理員再審核。每張卡也有獨立頁面，搜尋引擎找得到。",
      designFocus: [
        "手機單手就能滑、查、把卡加進牌組",
        "畫面怎麼排，跟「這張卡能不能進牌組」分開算，才不會組到違規",
        "沒網路也能查卡；題庫會定期從表格更新",
      ],
      outcome:
        "網站已上線，玩家真的拿來查卡、組牌和分享。每次改版都會先檢查內容、規則和搜尋還能不能用。",
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
      "給繪師用的作品集網站：平常在 Notion 改圖和文字，網站會自己更新。",
    platform: "網站",
    tags: ["Next.js", "Headless CMS", "Vercel", "SSG/SSR"],
    caseStudy: {
      background:
        "繪師需要一個對外的作品集，但不想每次上新圖、改介紹都找人改程式。",
      work: "網站內容接在 Notion：作品介紹、多圖、精選排序和委託資訊，改完就會出現在網站上。圖片會自動壓成適合網頁的格式。",
      designFocus: [
        "日常更新只在 Notion 完成，不必碰程式",
        "圖檔不會因為過期連結而打不開",
        "欄位填錯或設定有問題時，會在上線前被攔住",
      ],
      outcome:
        "公開範本在 artdemo.lambliver.dev。創作者自己改 Notion 就能更新網站。",
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
      work: "網站分成作品、主題逛逛、考試練習三種用法。每個實驗都能拉參數，圖形立刻跟著動。",
      designFocus: [
        "拉桿、公式和圖要一起動，手機也能操作",
        "看作品、按主題逛、準備考試，三種目的用三種排法",
        "新實驗上架前會檢查封面、說明和連結是不是齊的",
      ],
      outcome:
        "已上線 lab.lambliver.dev。打開瀏覽器就能調參數、看結果。",
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
      "看房時用手機一項一項打勾、寫備註，回家後能比較哪一間比較划算。不用註冊。",
    platform: "網站",
    tags: ["React", "TypeScript", "Vite", "Cloudflare Pages", "localStorage"],
    caseStudy: {
      background:
        "一天看好幾間房，價格、格局和當下感覺很容易混在一起。回家要比較時，需要一份看得懂的紀錄。",
      work: "手機上一題一題檢查，看完有摘要，最多可以並排五間。預設題目能關，也能自己加題。資料可以整份備份，或匯出成試算表。",
      designFocus: [
        "現場單手就能記，摘要再幫你看出哪幾項要再確認",
        "比較頁把補助、屋齡、電梯和整體印象放在一起看",
        "資料只存在你的手機裡；備份壞掉不會蓋掉原本的紀錄",
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
      "先排周邊、再看板子和包包裝不裝得下。專案存在你的電腦裡，可以帶走繼續改。",
    platform: "網站",
    tags: ["React", "TypeScript", "Vite", "Cloudflare Workers", "IndexedDB"],
    caseStudy: {
      background:
        "做痛包時，徽章排得下、板子夠不夠、包包裡真正能裝的面積，是三件不同的事。只看商品標的尺寸，很難在買之前心裡有數。",
      work: "分成三步：先排周邊，再看板子，最後套進包包。有快速排列、對齊、旋轉、量可見區，也可以存成圖。專案存在這台裝置，能匯出檔案換電腦繼續改。介面有繁中、日文和英文。",
      designFocus: [
        "先排好看，再判斷尺吋，順序跟實際準備痛包一樣",
        "裝得下、會不會超出、從外面看不看得到，分開顯示，不說成購買保證",
        "不用註冊；資料預設只留在你的裝置上",
      ],
      outcome:
        "已上線 itabag.lambliver.dev，電腦和手機都能規劃。舊專案會自動跟上新版。",
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
      "給市集攤位用的手機結帳：沒網路也能賣，回家再上傳；換手機也能把帳帶過去。",
    platform: "手機 App",
    tags: ["Kotlin", "Jetpack Compose", "Room", "Jetpack DataStore", "MVVM", "Cloudflare Workers"],
    caseStudy: {
      background:
        "戶外擺攤網路常不穩，客人結帳卻要快。紙筆不好算折扣，一般筆記 App 也不好看出今天賣了多少。",
      work: "做了商品、套組、活動庫存、結帳、作廢和當天紀錄。沒網路也能賣完；有網路再把帳傳上雲端。換新手機可以帶走資料，電腦也能開報表看今天的生意。",
      designFocus: [
        "先讓結帳過，網路回來再上傳，不會卡在現場",
        "手機、雲端和報表看到的數字要對得起來",
        "同一時間只有一台手機是結帳機，避免兩台一起賣把帳弄亂",
      ],
      outcome:
        "v2.1.3 已可下載安裝。沒網路也能結帳；報表要登入才看得到，別人看不到你的生意。",
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
