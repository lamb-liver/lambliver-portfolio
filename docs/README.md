# lambliver-portfolio

[lambliver.dev](https://lambliver.dev) 的個人作品集。使用 Next.js 16 App Router、React 19 與 Tailwind CSS 4；內容維持在 TypeScript 靜態資料，不使用 CMS 或資料庫。

目前展示《控訴》查卡組牌、創作者作品網站、羊・實驗、租屋筆記與離線 Android POS。首頁提供精選案例與聯絡入口，每個 `/projects/[slug]` 詳情頁包含背景、實作、設計重點、成果、技術標籤、真實畫面與可用連結。

## 本機開發

需求：Node.js 20 以上與 npm。

```bash
npm ci
npm run dev
```

提交前執行：

```bash
npm run lint
npm run build
git diff --check
```

`npm run build` 會先執行 Vitest；`dev`／`build` 固定使用 webpack，以避開本機中文路徑的相容性問題。

## 結構

- `app/page.tsx`：首頁、精選案例、關於、技能與聯絡入口。
- `app/projects/[slug]/page.tsx`：專案詳情與 screenshot gallery。
- `app/globals.css`：主題 token 與互動樣式。`:root` 是 dark fallback，`.light` 是白底覆蓋，`.dark` 保留給 next-themes。
- `lib/site.ts`：站點文字、技能、社群連結。
- `lib/projects.ts`：專案案例、公開連結、截圖與精選順序的唯一來源。
- `lib/validateSkills.ts`：專案 tags 與技能列表檢查，透過 Vitest 跑。
- `public/images/projects/`：案例畫面；Android 安裝檔僅透過對應專案的 GitHub Release 發布，不直接納入網站。

## 維護

新增專案時改 `lib/projects.ts`，tag 要存在於 `lib/site.ts` 的 `skillGroups`，或明確加入 `PROJECT_ONLY_TAGS`。

主題切換使用 `next-themes`：`attribute="class"`、`defaultTheme="dark"`、`enableSystem={false}`。不要新增第二套 localStorage script。

Vercel 由 `main` 建置；production 是否為最新版本仍須另外核對 deployment 對應的 commit，不能只用網站 HTTP 200 或本機 build 代替。

歷史決策、已知彎路與日常檢查表見 [`development-retrospective.md`](development-retrospective.md)。
