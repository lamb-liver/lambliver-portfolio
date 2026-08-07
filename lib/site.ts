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
  email: string;
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
    label: "前端框架",
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
    label: "行動開發",
    skills: [
      { name: "Kotlin", level: "core" },
      { name: "Jetpack Compose" },
      { name: "MVVM" },
      { name: "Jetpack DataStore" },
    ],
  },
  {
    id: "deploy",
    label: "部署與建置",
    skills: ["Cloudflare Pages", "Vercel", "SSG/SSR"].map((name) => ({ name })),
  },
  {
    id: "product",
    label: "產品與領域",
    skills: [
      "PWA",
      "全文搜尋",
      "Headless CMS",
      "JSON Export",
      "演算法視覺化",
    ].map((name) => ({ name })),
  },
];

export function getAllSkills(groups: SkillGroup[] = skillGroups): string[] {
  return groups.flatMap((group) => group.skills.map((skill) => skill.name));
}

export const site: SiteConfig = {
  name: "羊肝",
  nameEn: "lambliver",
  role: "前端與 Android 開發",
  clientPitch: "把想法做成真的能用的網站或 App。",
  availability: "有想做的網站、工具或 App，可以先簡單說明你的想法。",
  about: [
    "目前就讀數學系大四，主要做前端網站、互動工具與 Android App。",
    "常用 React / Next.js / TypeScript 開發網站與互動介面，也使用 Kotlin / Jetpack Compose 製作 Android App。",
    "歡迎 side project 或技術交流。",
  ],
  email: "lambliver.dev@gmail.com",
  url: "https://lambliver.dev",
  social: {
    github: "https://github.com/lamb-liver",
  },
  skillGroups,
};
