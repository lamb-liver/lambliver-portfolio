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
    label: "也會做",
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
  clientPitch: "把想法做成你真的能拿去用的東西。",
  availability: "有想做的網站、工具或 App，寫幾句你的想法就好。",
  about: [
    "數學系大四，平常做網站、小工具，也做給手機用的 App。",
    "喜歡把複雜的事情收成幾個清楚的按鈕：查卡、看房、結帳，打開就能用。",
    "有 side project 或想一起做東西，歡迎來信。",
  ],
  email: "lambliver.dev@gmail.com",
  url: "https://lambliver.dev",
  social: {
    github: "https://github.com/lamb-liver",
  },
  skillGroups,
};
