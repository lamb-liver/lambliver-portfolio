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

export const site: SiteConfig = {
  name: "羊肝",
  nameEn: "lambliver",
  role: "做網站與手機 App",
  clientPitch: "做能實際使用的網站和 App。",
  availability: "想做網站、工具或 App，簡單說一下就可以。",
  about: [
    "數學系大四，平常做網站、小工具，也做手機 App。",
    "做過查卡、看房紀錄、攤位結帳這類打開就能用的東西。",
    "有 side project 或想一起做，歡迎來信。",
  ],
  email: "lambliver.dev@gmail.com",
  url: "https://lambliver.dev",
  social: {
    github: "https://github.com/lamb-liver",
  },
  skillGroups,
};
