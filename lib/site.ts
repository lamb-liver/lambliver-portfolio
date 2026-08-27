export type SkillLevel = "core";

export interface SkillEntry {
  name: string;
  level?: SkillLevel;
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: SkillEntry[];
}

export interface SiteConfig {
  name: string;
  nameEn: string;
  role: string;
  clientPitch: string;
  availability: string;
  about: string[];
  offerings: { title: string; description: string }[];
  offeringsNote: string;
  email: string;
  inquiryMailto: string;
  url: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  skillGroups: SkillGroup[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "網站",
    skills: [
      { name: "React", level: "core" },
      { name: "Next.js", level: "core" },
      { name: "Astro" },
      { name: "TypeScript", level: "core" },
      { name: "Vite" },
      { name: "p5.js" },
    ],
  },
  {
    id: "mobile",
    label: "手機 App",
    skills: [
      { name: "Kotlin", level: "core" },
      { name: "Jetpack Compose" },
      { name: "Room" },
      { name: "MVVM" },
      { name: "Jetpack DataStore" },
    ],
  },
  {
    id: "deploy",
    label: "上線",
    skills: ["Cloudflare Pages", "Cloudflare Workers", "Vercel", "SSG/SSR"].map(
      (name) => ({ name }),
    ),
  },
  {
    id: "product",
    label: "其他",
    skills: [
      "PWA",
      "全文搜尋",
      "Headless CMS",
      "IndexedDB",
      "JSON Export",
      "演算法視覺化",
    ].map((name) => ({ name })),
  },
];

export function getAllSkills(groups: SkillGroup[] = skillGroups): string[] {
  return groups.flatMap((group) => group.skills.map((skill) => skill.name));
}

export function getCoreSkillGroups(
  groups: SkillGroup[] = skillGroups,
): SkillGroup[] {
  return groups
    .map((group) => ({
      ...group,
      skills: group.skills.filter((skill) => skill.level === "core"),
    }))
    .filter((group) => group.skills.length > 0);
}

const email = "lambliver.dev@gmail.com";

export const site: SiteConfig = {
  name: "羊肝",
  nameEn: "lambliver",
  role: "做網站與手機 App",
  clientPitch: "作品集網站與小型工具。",
  availability:
    "目前可承接網站與小型工具開發。請來信說明需求與期望時程，我將回覆可行性、時程與報價。",
  about: [
    "承接網站、作品集站與小型工具開發。",
    "近期完成可供繪師自行更新內容的作品集網站；亦開發痛包規劃、攤位結帳等可直接使用的工具。",
    "內容更新可依需求接 Notion 或其他既有流程；上線與後續維護亦可一併討論。",
    "如有委託需求，請來信說明目標、使用對象與期望上線時間。",
  ],
  offerings: [
    {
      title: "作品集／形象網站",
      description:
        "面向繪師與創作者；內容更新可接 Notion 或其他既有方式。",
    },
    {
      title: "小型工具網站",
      description: "查卡、規劃、表單等可即用的網頁工具。",
    },
    {
      title: "手機 App",
      description: "以離線優先為主的實用應用（例如攤位結帳）。",
    },
  ],
  offeringsNote: "範圍與報價依需求評估，請來信說明即可。",
  email,
  inquiryMailto: `mailto:${email}?subject=${encodeURIComponent("委託洽詢")}&body=${encodeURIComponent(
    "目標：\n使用對象：\n期望上線時間：",
  )}`,
  url: "https://lambliver.dev",
  social: {
    github: "https://github.com/lamb-liver",
    linkedin: undefined,
  },
  skillGroups,
};
