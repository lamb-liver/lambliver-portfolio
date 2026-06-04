# lambliver-portfolio — Agent 交接文件

> 羊肝（lambliver）個人作品集。部署目標：`https://lambliver.dev`  
> 專案路徑：`/Users/chenhongpu/Desktop/個人網頁/lambliver-portfolio`（上層資料夾名含中文）

---

## 1. 技術棧

| 項目 | 版本 / 選型 |
|------|-------------|
| 框架 | Next.js **16**（App Router，非 Pages Router） |
| 語言 | TypeScript `strict: true` |
| 樣式 | Tailwind CSS **v4**（`@import "tailwindcss"` + `@theme`） |
| 主題 | `next-themes`，`class="dark"` 掛在 `<html>` |
| 捲軸 | 原生 CSS（`globals.css`） |
| 資料 | 靜態 TS：`lib/site.ts`、`lib/projects.ts`（無 CMS / DB） |

**禁止**：`tailwind.config.ts`、UI library（shadcn/MUI）、`shadow-*`、gradient、硬編碼 hex（元件內；OG 圖 `lib/og.tsx` 除外）。

完整規範見專案根目錄 **`.cursorrules`**，修改前請先讀。

---

## 2. 指令

```bash
cd "/Users/chenhongpu/Desktop/個人網頁/lambliver-portfolio"

npm run dev      # 開發（必須 --webpack，見下方「陷阱」）
npm run build    # 生產建置
npm run lint     # ESLint
```

---

## 3. 目錄結構

```
app/
  layout.tsx              # metadata、字體、Nav + main + Footer、ThemeProvider
  page.tsx                # 首頁：Hero / About / Skills / Projects / Contact（單頁錨點）
  globals.css             # 所有 @theme token、互動樣式（Light/Dark 分離）
  opengraph-image.tsx     # 首頁 OG（edge）
  sitemap.ts / robots.ts
  icon.svg
  projects/[slug]/
    page.tsx              # 專案詳情（SSG）
    opengraph-image.tsx   # 專案 OG（edge，不可與 generateStaticParams 並用）

components/               # PascalCase 檔名
  Nav.tsx                 # RSC
  Hero.tsx                # RSC，含 next/image 人設圖
  Footer.tsx              # RSC
  ProjectCard.tsx         # RSC
  ProjectImagePlaceholder.tsx
  ProjectLinks.tsx
  SkillChip.tsx
  OpenIcon.tsx
  ThemeToggle.tsx         # client（export ThemeProvider + ThemeToggle）
  ThemeToggleSlot.tsx     # dynamic 載入主題切換
  HashLink.tsx / HashLinkSlot.tsx
  CrittersSafelist.tsx    # Critters 保留 dark 樣式

lib/
  site.ts                 # SiteConfig
  projects.ts             # Project[] + getProjectBySlug
  og.tsx                  # createOgImage() 共用 OG 模板
  utils.ts                # cn()

public/images/lambliver-hero.webp   # Hero 人設圖
```

---

## 4. 路由

| 路徑 | 說明 |
|------|------|
| `/` | 首頁單頁：`#about` `#skills` `#projects` `#contact` |
| `/projects/[slug]` | 專案詳情（`generateStaticParams` 預生成 3 頁） |
| `/contact` | **301 導向** `/#contact`（`next.config.ts`） |

**沒有** `/projects` 列表頁。

### 三個 slug

- `card-deck-builder` — 卡；GitHub + Demo 已上線
- `illustrator-portfolio` — 繪；GitHub 即將公開
- `offline-pos-android` — 攤；`status: in-progress`；GitHub 即將公開

---

## 5. 設計系統（摘要）

### 色票（`globals.css` @theme）

| Token | Light | Dark |
|-------|-------|------|
| canvas / surface | `#ffffff` | `#000` / `#0a0a0a` |
| foreground | `#000000` | `#d5d5d5` |
| muted | `#656565` | 同左 |
| accent | `#c0ff6b` | 同左 |

### Accent 使用原則（重要）

- **Light**：accent 主要用於 **hover 色塊底** 或 **Primary 按鈕淡底**（40–60%）；靜態文字/邊框不用 accent
- **Dark**：互動 hover 用 **accent 8–15% 淡底**；**Primary 按鈕**維持 **實心 accent + 黑字**
- **Demo 連結**：預設 `text-foreground`；hover 才 accent 字色（非色塊）

### 字體

- **系統中文字體棧**（`font-sans`）：正文、About、標語
- **Fira Code**（`font-mono`，`next/font`）：Logo、標題、技術 chip、按鈕

---

## 6. Light / Dark 互動樣式（必讀）

**不要用** `hover:bg-accent` + `dark:hover:bg-accent/15` 混寫在同一 class 字串——會互相污染。

已改為在 `globals.css` 用選擇器分離：

```css
html:not(.dark) .skill-chip:hover { ... }  /* Light */
.dark .skill-chip:hover { ... }            /* Dark */
```

### 已分離的 utility / class

| Class | 用途 |
|-------|------|
| `btn-primary` | Hero「查看專案」 |
| `btn-secondary` | Hero「聯絡」 |
| `link-interactive` | Nav、Footer、聯絡 Email/GitHub |
| `skill-chip` | 技能標籤 |
| `theme-toggle-btn` | 主題切換鈕 |
| `project-card` | 專案卡片外層 hover 底 |
| `demo-link` | Demo 連結（字色 hover） |
| `project-placeholder` | 專案方塊字標 + 左豎線 |

新增互動樣式時，**沿用此模式**，不要只在元件加 `dark:` variant。

---

## 7. 資料模型

### `lib/site.ts` — `SiteConfig`

```ts
name, nameEn, role, bio, about[], email, domain, url, social{}, skillGroups[]
// skillGroups: { id, label, skills: { name, level?: "core" }[] }
// 扁平技能列表：getAllSkills()
```

### `lib/projects.ts` — `Project`

```ts
slug, name, description, tags[], monogram, applicationKind, caseStudy: { background, work, designFocus[], outcome }, platform?, status?, links?: { github?, demo? }
```

- 新增專案 tag 須在 `skillGroups` 內，或加入 `PROJECT_ONLY_TAGS`（`lib/validateSkills.ts`）
- 建置前執行 `npm run validate`；單元測試 `npm run test`

- `monogram`：卡片/詳情 placeholder 顯示字（卡 / 繪 / 攤），非專案名首字
- GitHub 無 URL → UI 顯示「GitHub（即將公開）」`<span>`，不可 `<a>`
- 無 `demo` → 不渲染 Demo 列

---

## 8. Client vs Server

| 類型 | 元件 |
|------|------|
| **Client**（`'use client'`） | `ThemeToggle.tsx`、`ThemeToggleSlot.tsx`、`HashLink.tsx`、`HashLinkSlot.tsx`、`CrittersSafelist.tsx` |
| **RSC**（預設） | 其餘全部 |

`layout.tsx` 從 `ThemeToggle.tsx` import `ThemeProvider`。

---

## 9. 動效

- 使用 Tailwind v4 `starting:` + `@utility enter-fade-up*`
- 禁止 framer-motion、JS 動畫
- Hero 分層 enter；專案卡片 `enter-fade-up-card-0/1/2` stagger

---

## 10. SEO

- `metadataBase`: `https://lambliver.dev`
- `title`: 預設 `羊肝 · lambliver`，template `%s · lambliver`
- 專案頁 `generateMetadata` 須覆寫 `openGraph` 與 `twitter`（含 `locale`、`url`、`twitter.title`）
- `PersonJsonLd` 僅首頁（`app/page.tsx`）；專案頁用 `ProjectJsonLd`（`applicationKind` 決定 Web/Mobile）
- JSON-LD 序列化：`lib/jsonLd.ts` → `serializeJsonLd()`（`components/JsonLd.tsx`）
- `app/sitemap.ts`、`app/robots.ts` 必須保留
- OG：`lib/og.tsx` → `createOgImage()`，黑底 + accent 左豎條

---

## 11. 圖片

- Hero：`next/image` + `priority`，路徑 `/images/lambliver-hero.webp`
- 專案封面：尚未實作；用 `ProjectImagePlaceholder`（`size="lg"` 有 `placeholder-grid` 淡網格）

---

## 12. 已知陷阱

1. **路徑含中文**：Turbopack 建置會 panic → `package.json` 已固定 `--webpack`
2. **OG + edge**：`opengraph-image.tsx` 不可同時 `export const runtime = 'edge'` 與 `generateStaticParams`
3. **macOS 大小寫**：`Hero.tsx` 與 `hero.tsx` 視為同一檔，刪除時小心
4. **勿用 `<motion>` 標籤**：歷史上曾誤寫，應為 `<div>`
5. **scrollbar**：class 掛在 `<html>`，Dark hover 用 `scrollbar-hover:scrollbar-thumb-accent`

---

## 13. 常見修改入口

| 要做的事 | 檔案 |
|----------|------|
| 改文案 / About | `lib/site.ts` |
| 新增/編輯專案 | `lib/projects.ts` + 確認 sitemap 自動含 slug |
| 改配色 token | `app/globals.css` `@theme` |
| 改互動 hover | `app/globals.css` 對應 `html:not(.dark)` / `.dark` 區塊 |
| 改 Primary 按鈕 | `globals.css` → `.btn-primary` |
| 部署網域 | Vercel → `lambliver.dev` |

---

## 14. 建置檢查清單

- [ ] `npm run build` 通過
- [ ] `npm run lint` 無錯
- [ ] Light / Dark 各抽查：Primary 按鈕、skill hover、Demo、專案卡片
- [ ] `/contact` 導向 `/#contact`
- [ ] 三個 `/projects/[slug]` 可開

---

## 15. 與 `.cursorrules` 的關係

- `.cursorrules` = 設計與架構的**規範來源**
- 本文件 = **實際程式現況**與**操作手冊**
- 若兩者衝突，以**程式碼現況**為準，並應同步更新 `.cursorrules` 或程式

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
