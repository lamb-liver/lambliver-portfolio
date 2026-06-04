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
  bio: string;
  availability: string;
  about: string[];
  email: string;
  domain: string;
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
      { name: "Room Database" },
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
    skills: ["全文搜尋", "Headless CMS", "JSON Export", "演算法視覺化"].map(
      (name) => ({ name }),
    ),
  },
];

export function getAllSkills(groups: SkillGroup[] = skillGroups): string[] {
  return groups.flatMap((group) => group.skills.map((skill) => skill.name));
}

export const site: SiteConfig = {
  name: "羊肝",
  nameEn: "lambliver",
  role: "Frontend & Android Engineer",
  clientPitch: "幫你把想法做成網站或 App。",
  bio: "從需求出發，把東西做出來。",
  availability: "歡迎透過以下方式聯繫，討論需求或技術交流。",
  about: [
    "數學系背景，前端 / Android 工程師。",
    "目前就讀數學系大四，尋找接案與 side project 合作機會。",
    "主要技術棧為 React/Next.js 與 Kotlin。",
    "在動手前先把問題想清楚——將複雜需求拆解為可交付的核心功能，再逐步迭代。",
  ],
  email: "lambliver.dev@gmail.com",
  domain: "lambliver.dev",
  url: "https://lambliver.dev",
  social: {
    github: "https://github.com/lamb-liver",
  },
  skillGroups,
};
