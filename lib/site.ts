export interface SiteConfig {
  name: string;
  nameEn: string;
  role: string;
  bio: string;
  about: string[];
  email: string;
  domain: string;
  url: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  skills: string[];
}

export const site: SiteConfig = {
  name: "羊肝",
  nameEn: "lambliver",
  role: "Frontend & Android Engineer",
  bio: "習慣從需求出發，把東西做出來。",
  about: [
    "數學系背景，前端 / Android 工程師。",
    "主要技術棧為 React/Next.js 與 Kotlin。",
    "習慣在動手前先把問題想清楚——將複雜需求拆解為可交付的核心功能，再逐步迭代。",
  ],
  email: "lambliver.dev@gmail.com",
  domain: "lambliver.dev",
  url: "https://lambliver.dev",
  social: {
    github: "https://github.com/lamb-liver",
  },
  skills: [
    "Cloudflare Pages",
    "Headless CMS",
    "Jetpack Compose",
    "JSON Export",
    "Kotlin",
    "MVVM",
    "Next.js",
    "React",
    "Room Database",
    "SSG/SSR",
    "TypeScript",
    "Vercel",
    "全文搜尋",
  ],
};
