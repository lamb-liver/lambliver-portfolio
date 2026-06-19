# lambliver-portfolio

[lambliver.dev](https://lambliver.dev) 的個人作品集。Next.js App Router，靜態資料，首頁加專案詳情頁。

## 指令

```bash
npm run dev
npm run lint
npm run test
npm run build
```

本機路徑含中文時仍固定用 webpack；`package.json` 已處理。

## 結構

- `app/page.tsx`：首頁。
- `app/projects/[slug]/page.tsx`：專案詳情。
- `app/globals.css`：主題 token 與互動樣式。`:root` 是 dark fallback，`.light` 是白底覆蓋，`.dark` 保留給 next-themes。
- `lib/site.ts`：站點文字、技能、社群連結。
- `lib/projects.ts`：專案資料與精選截圖。
- `lib/validateSkills.ts`：專案 tags 與技能列表檢查，透過 Vitest 跑。

## 維護

新增專案時改 `lib/projects.ts`，tag 要存在於 `lib/site.ts` 的 `skillGroups`，或明確加入 `PROJECT_ONLY_TAGS`。

主題切換使用 `next-themes`：`attribute="class"`、`defaultTheme="dark"`、`enableSystem={false}`。不要新增第二套 localStorage script。
