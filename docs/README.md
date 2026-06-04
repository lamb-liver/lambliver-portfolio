# lambliver-portfolio

[羊肝 · lambliver](https://lambliver.dev) 的個人作品集網站。單頁首頁搭配專案詳情頁，支援 Light / Dark 主題，並針對 Lighthouse 效能與 SEO 做過優化。

| | |
|---|---|
| **線上網站** | [lambliver.dev](https://lambliver.dev) |
| **GitHub** | [lamb-liver/lambliver-portfolio](https://github.com/lamb-liver/lambliver-portfolio) |

---

## 功能特色

- 單頁首頁：`#about`、`#skills`、`#projects`、`#contact` 錨點導覽
- 專案詳情：`/projects/[slug]`（SSG 預生成）
- Light / Dark 主題（`next-themes`，無閃爍）
- 動態 OG 圖（首頁與各專案頁）
- `sitemap.xml`、`robots.txt`、`/contact` → `/#contact` 301 導向
- 效能：Critical CSS 內聯、字體與圖片優化、現代瀏覽器目標

---

## 技術棧

| 項目 | 選型 |
|------|------|
| 框架 | [Next.js 16](https://nextjs.org/)（App Router） |
| 語言 | TypeScript |
| 樣式 | Tailwind CSS v4（`@theme` + `@source`） |
| 主題 | [next-themes](https://github.com/pacocoursey/next-themes) |
| 資料 | 靜態 TS（`lib/site.ts`、`lib/projects.ts`） |

---

## 快速開始

### 環境需求

- Node.js 20+
- npm

### 安裝與開發

```bash
git clone https://github.com/lamb-liver/lambliver-portfolio.git
cd lambliver-portfolio
npm install
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)。

> **注意：** 本專案建置使用 `--webpack`（非 Turbopack）。若專案路徑含非 ASCII 字元（例如中文資料夾名），Turbopack 可能在建置時失敗。

### 常用指令

| 指令 | 說明 |
|------|------|
| `npm run dev` | 開發伺服器（webpack） |
| `npm run build` | 生產建置 + Critical CSS 內聯 |
| `npm run start` | 啟動生產伺服器（需先 `build`） |
| `npm run lint` | ESLint |
| `npm run analyze` | Bundle 分析（`ANALYZE=true`） |

效能量測請使用 **`npm run build && npm run start`**，不要用 `dev` 模式跑 Lighthouse。

### 環境變數

本專案**幾乎不需要**環境變數；站點網址等寫在 `lib/site.ts`。

| 變數 | 用途 | 必填 |
|------|------|------|
| `ANALYZE` | `npm run analyze` 時啟用 bundle 分析 | 否 |

```bash
cp .env.example .env.local   # 可選；多數情況不必建立
```

勿將 `.env.local` 提交到 Git（已在 `.gitignore` 排除）。

---

## 日常更新（已接 Vercel）

```bash
# 1. 改檔案（例如 lib/projects.ts、lib/site.ts）
git add .
git status                    # 確認 staged 清單
git commit -m "說明這次改了什麼"
git push
```

Push 到 `main` 後，Vercel 會自動建置並部署到自訂網域。可在 [Vercel Dashboard](https://vercel.com/dashboard) → **Deployments** 查看建置 log。

---

## 專案結構

```
app/                      # Next.js App Router
  layout.tsx              # 全域 layout、字體、Nav / Footer
  page.tsx                # 首頁（Hero、About、Skills、Projects、Contact）
  globals.css             # 設計 token、Light/Dark 互動樣式
  opengraph-image.tsx     # 首頁 OG 圖
  sitemap.ts / robots.ts
  projects/[slug]/        # 專案詳情 + OG

components/               # UI（多為 Server Component）
  ThemeToggle*.tsx        # 主題（client）
  HashLink*.tsx           # 錨點重複點擊捲動（client）
  CrittersSafelist.tsx    # 建置用 dark 樣式保留
  Hero.tsx, Nav.tsx, …

lib/
  site.ts                 # 站點設定（姓名、簡介、技能、網域）
  projects.ts             # 專案列表與內容
  og.tsx                  # OG 圖共用模板
  utils.ts                # cn()

public/images/            # 靜態圖片（Hero 等）
scripts/
  inline-critical-css.mjs # 建置後內聯關鍵 CSS

docs/                     # Markdown 文件（本檔、AGENTS、CLAUDE）
.cursorrules              # 設計與協作規範（根目錄，給 Cursor）
```

### 相依套件說明

| 套件 | 用途 |
|------|------|
| `next` / `react` | 框架 |
| `next-themes` | Light / Dark |
| `critters` | 建置後 Critical CSS 內聯（`scripts/inline-critical-css.mjs`） |
| `tailwindcss` | 樣式（dev） |
| `@next/bundle-analyzer` | 選用分析（dev） |

---

## 內容維護

### 修改站點資訊

編輯 [`lib/site.ts`](../lib/site.ts)：`name`、`bio`、`about`、`skillGroups`、`social`、`url` 等。技能扁平列表用 `getAllSkills()`。

### 新增或編輯專案

1. 在 [`lib/projects.ts`](../lib/projects.ts) 的 `projects` 陣列新增一筆 `Project`
2. 必填：`slug`、`name`、`description`、`tags`、`monogram`、`applicationKind`（`web` | `android`）
3. `tags` 須對應 `skillGroups`（執行 `npm run validate` 檢查）
4. 可選：`links.github`、`links.demo`、`highlights`、`content`、`status: "in-progress"`
5. 建置後會透過 `generateStaticParams` 自動生成 `/projects/[slug]` 與 sitemap 條目

目前專案 slug：

- `card-deck-builder`
- `illustrator-portfolio`
- `offline-pos-android`

### 修改樣式與主題

- 色票與字體變數：[`app/globals.css`](../app/globals.css) 的 `@theme`
- Light / Dark 互動樣式：同檔案內 `html:not(.dark)` / `.dark` 選擇器（勿混用會互相污染的 `dark:` hover class）

---

## 部署（Vercel）

本專案已部署於 [Vercel](https://vercel.com)，網域 `lambliver.dev`。

| 設定項 | 值 |
|--------|-----|
| Build Command | `npm run build` |
| Output | Next.js 預設 |
| Node.js | 20+ |
| Production Branch | `main` |

首次 fork / 自建時：連接 GitHub repo → 設定自訂網域 → 確認 [`lib/site.ts`](../lib/site.ts) 的 `url` 與實際網域一致（影響 `metadataBase`、sitemap、OG）。

---

## 效能相關

- **字體：** 標題使用 [Fira Code](https://fonts.google.com/specimen/Fira+Code)（`next/font`）；正文使用系統中文字體棧，避免載入大型 webfont CSS
- **圖片：** Hero 使用 `next/image` + WebP；`next.config.ts` 已調整 `imageSizes`
- **CSS：** `experimental.optimizeCss` + 建置後 `scripts/inline-critical-css.mjs` 內聯關鍵樣式
- **Client JS：** 僅主題切換、錨點捲動等必要互動為 client 元件

---

## 開發規範

協作或 AI 輔助開發時，可參考：

- [`AGENTS.md`](AGENTS.md) — 專案現況與操作手冊
- [`.cursorrules`](../.cursorrules) — 設計與架構規範

---

## 授權

本專案為個人作品集，原始碼僅供參考與學習。若需轉載或商用，請先聯絡作者。

---

## 聯絡

- 網站：[lambliver.dev](https://lambliver.dev)
- 專案 Repo：[github.com/lamb-liver/lambliver-portfolio](https://github.com/lamb-liver/lambliver-portfolio)
- GitHub：[@lamb-liver](https://github.com/lamb-liver)
- Email：lambliver.dev@gmail.com
