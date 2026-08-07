# lambliver-portfolio 開發歷程回顧與後續工作準則

> 目的：記住哪些改動真正提升作品集、哪些只是增加維護成本，讓之後每次更新更快、更準。
>
> 證據截止：2026-08-08。主要依據為本機完整 Git objects、[GitHub main 歷史](https://github.com/lamb-liver/lambliver-portfolio/commits/main/)、目前程式、正式站與當日驗證結果。

## 一句話總結

這個專案真正的進步，是從「列出技術的個人頁」變成「用案例、成果與真實畫面證明能力的作品集」；主要彎路則是太早為小型靜態網站建立大量規則、文件與自製 runner，之後又花時間刪掉。

## 證據快照

- 主線：`main` 共 19 個 commit，從 `447766e`（2026-05-18）到 `88b7007`（2026-08-08）。
- 遠端：本機 `main`、`origin/main` 與 GitHub 均為 `88b7007`。
- 額外分支：`cursor/frontend-validation-dev-runner` 停在 `c18f965`，從未合併，並於 2026-08-08 刪除本機與遠端 branch；需要時仍可用該 SHA 重建。
- Git tag：沒有；雖有 `v1.0.0`、`v1.1.0` commit 訊息，但並非正式 tag，`package.json` 仍是 `0.1.0`。
- 目前 gates：`npm run lint`、8 個 Vitest 測試、`npm run build` 均通過；建置產生首頁與 5 個專案 SSG 頁。
- 正式站：Vercel 已於 2026-08-08 成功部署 `88b7007`；首頁與專案頁實際載入新的 optimized image URL。
- Lighthouse 結果會受測試條件影響：正式站以 Lighthouse 13.4.1 連跑三次 mobile，Performance 為 97／97／99，中位數 97；Accessibility／Best Practices／SEO 三次皆 100。99 是有效單次結果，不再當成固定基準。
- 優化前的 99 分報告列出 Image Delivery 估計可省 270.3 KiB；部署後三次為 46／46／0 KiB。改善已成立，但 insight 仍會受 CDN cache 與單次載入內容影響。

## 從一開始到現在

| 時間與 commit | 做了什麼 | 現在回看 |
| --- | --- | --- |
| 2026-05-18 `447766e` | 建立 Next.js App Router 作品集、三個專案、Light/Dark、動態 OG、sitemap、robots、靜態資料模型。 | 基礎方向正確，但首版同時帶入 366 行 `.cursorrules`、244 行 `AGENTS.md`、209 行 README 與 Critical CSS 後處理，治理規模早於實際需求。 |
| 2026-05-18 `a0a91c6` | 修正文案、補小攤位 GitHub。 | 正常的小幅校正；也顯示首版發布前缺少一次完整內容校對。 |
| 2026-05-20 `9afb7f9` | 加入 APK 下載，抽出 `DemoLink` 與 APK URL 判斷。 | 讓作品可直接試用是有效提升；但把大型 APK 直接提交進 repo，埋下容量與舊檔清理問題。 |
| 2026-05-28 `ca5cf64` | 新增「羊・實驗」、GitHub icon，Footer 改為固定 `© 2026`。 | 擴充代表作品正確；固定年份會自然過期，屬於用短期避險換來日後維護。 |
| 2026-06-04 `a46d2cd`、`17f1622` | Markdown 移入 `docs/`，先保留根目錄 symlink，四分鐘後又移除。 | 這是明確往返：先整理位置、再撤掉相容入口，沒有增加使用者價值。GitHub 仍會顯示 `docs/README.md`，但部分 agent 不會自動發現 `docs/AGENTS.md`。 |
| 2026-06-04 `c8be099` | 新增「租屋筆記」。 | 正確：作品範圍開始呈現實際問題解決能力。 |
| 2026-06-05 `62f9848` | 首頁加入作品實作畫面，專案頁加入 screenshot gallery。 | 高價值改動：從文字宣稱轉向視覺證據。 |
| 2026-06-05 `f50c681` | 補 canonical、OG/Twitter、Person/SoftwareApplication JSON-LD；技能分組；新增 tag 一致性驗證與 Vitest。 | SEO、安全序列化、資料一致性值得保留。獨立 `validate` script 與 `tsx` 則和測試重複，後來刪除是正確收斂。 |
| 2026-06-05 `b351b7c` | 把專案詳情從功能清單改成「背景／我做了什麼／設計重點／成果」，補租屋畫面並重寫接案定位。 | 全歷史中最重要的產品判斷：作品集開始回答「你解決了什麼」，不只回答「你用了什麼」。 |
| 2026-06-05 `c18f965`（未合併） | 建立 291 行 `run.mjs`、157 行 shell gate、70 行驗證文件，代理所有 npm 指令並管理 port。 | 解法遠大於問題；未合併是正確止損。原生 npm scripts、`lsof` 與按改動類型做人工瀏覽器驗證已足夠。 |
| 2026-06-06～07 `08886cd`、`d6e649c`、`9d2e76a` | 換成「羊」favicon、更新 APK、補繪師作品畫面與公開 demo。 | 都直接提升識別或可驗證性；但 APK 更新只改引用、未刪舊檔。 |
| 2026-06-19 `337f9b8` | 大幅簡化 build 與文件：28 個檔案共新增 374 行、刪除 2,106 行；移除 Critters、自製 Critical CSS、bundle analyzer、`tsx`、重複 validation script、過長規則與 wrapper 元件。 | 正確修正。保留真正有用的 Vitest 資料驗證，同時回到框架原生能力。 |
| 2026-07-26 `66a1f1e` | 重做首頁與專案頁呈現：更寬版面、強化層級、精選案例、卡片加入真實截圖。 | 產品方向正確，作品辨識度更高；但圖片裁切、來源選擇與載入策略沒有在合併前完整驗證。 |
| 2026-07-26～28 `be20c8f`、`edae606`、`e0c5787` | 連續換圖、補 desktop source、調 breakpoint、修清晰度、置中、技能 chip 與 gallery priority。 | 視覺品質最後有改善，但三次 follow-up 證明發布前缺少固定的 390px／桌面真實畫面檢查；圖片大小與 priority 仍留下可量測的改善空間。 |

## 真正有效的優化

### 1. 從「技術清單」改成「案例證據」

- 專案資料最後收斂成 `background`、`work`、`designFocus`、`outcome`。
- 首頁與詳情頁使用真實截圖、公開 demo、GitHub 與 APK，降低只有文字自述的可信度問題。
- 精選順序改成先展示最能代表目前能力的作品，而不是只照加入時間排列。

這類改動直接影響訪客能不能理解能力，優先級應永遠高於動畫、額外元件或工具鏈。

### 2. SEO 與資料正確性放在共用層

- canonical、Open Graph、Twitter metadata 與 JSON-LD 補完整。
- JSON-LD 對 `<` 做安全序列化，避免 `</script>` 破壞 HTML。
- 專案 tag 與技能目錄由一個小型 Vitest gate 檢查；新增專案時不必靠人工記憶所有關聯。

這些都屬於「一次修正在共用入口，所有頁面受益」，值得保留。

### 3. 刪除不必要的自製基礎設施

- `337f9b8` 移除大量規則、wrapper、Critical CSS 後處理與只為一次需求存在的依賴。
- 現在的核心指令只剩 `dev`、`lint`、`test`、`build`，新人或 agent 很快就能理解。
- `build` 已先跑測試，不需要另外維護一份同功能的 validation CLI。

### 4. 對真實 responsive 問題持續修正

- 為同一功能準備 mobile 與較寬版 screenshot source。
- 修正圖片裁切、清晰度、gallery breakpoint 與 chip 換行。

方向值得保留，但驗證時點應提前到 commit 前，而不是發布後連續補丁。

## 走過的彎路與判斷錯誤

### 已確認的錯誤

1. **規則與文件先於需求膨脹。** 首版規則甚至寫 Next.js 15，但實際依賴是 Next.js 16；文件越長，漂移面越大。
2. **同一份資料驗證做了兩條路。** `scripts/validate-skills.ts`、`tsx` 與 Vitest 都在驗同一件事；保留測試即可。
3. **把本機環境問題產品化。** 未合併 runner 為 port、PATH、build、DOM、screenshot 建立 448 行腳本，卻沒有持續發生的 repo 級需求支撐。
4. **資產更新沒有清退舊檔。** `d6e649c` 改用 `app-debug.apk` 後，約 20 MB 的 `stallpos.apk` 仍在正式 tree；兩個 APK 合計約 38 MB，Git objects 約 40 MB。
5. **視覺驗證晚於合併。** presentation refresh 後兩天內又有三個 screenshot／responsive commit，表示圖片規格與 breakpoint 沒在第一個 commit 前驗完。
6. **載入 priority 缺少首屏證據。** 一輪 mobile 診斷的 LCP 是 Hero 人像，但 Hero 只有 eager、沒有 high priority；首頁首兩張折線下作品圖與詳情頁較後方 gallery 圖反而被設為 priority。即使另一輪總分為 99，priority 仍應由實際 LCP 與首屏位置決定。
7. **精確分數沒有留下測試條件。** GitHub About 寫「Desktop 100, Mobile 99」；使用者在 2026-08-08 已重現 99，但同日另一輪 mobile 診斷為 88。問題不是 99 錯誤，而是缺少日期、Lighthouse 版本、strategy 與多次結果，導致日後無法公平比較。
8. **release 名稱沒有 release 證據。** `v1.0.0`、`v1.1.0` 只是 commit subject，沒有 tag，且套件版本仍是 `0.1.0`；日後很難判斷真正可回退版本。

### 不算錯、但要保留邊界的選擇

- 靜態 TS 資料對目前 5 個專案完全足夠，不需要 CMS 或資料庫。
- 8 個測試不算多，但剛好守住 JSON-LD 與內容關聯；不需要替純展示元件追求覆蓋率。
- 固定 webpack 是已知中文路徑相容措施；除非專案移到純 ASCII 路徑並實測 Turbopack，否則不用為追新而改。
- `docs/README.md` 目前會被 GitHub 正常顯示，不必只為 GitHub 再搬一次；是否補根目錄 `AGENTS.md` 應取決於實際 agent discovery 需求。
- 動態 OG route 的 edge/static generation build warning 不是本次 build 失敗，沒有證據前不必為了清掉 warning 重寫。

## 修正清單（含執行狀態）

### P0：下一次網站改動前先處理

1. **已完成：先修圖片輸送根因，不先建立圖片架構。**
   - `card-deck-builder-featured-desktop.webp` 原本占 Image Delivery 潛在節省的 240.1／270.3 KiB，根因是 `<picture>` 直接傳送完整原檔。
   - 改用 Next.js 內建 optimizer 與 responsive `srcset` 後，本機三次 mobile Lighthouse 都只剩約 6 KiB 圖片潛在節省，因此不再額外做有損重編碼或自製 pipeline。

2. **已完成：用量測校正載入策略。**
   - Hero 人像改成唯一明確的首頁 LCP priority。
   - 移除首頁折線下作品圖的 `index < 2` priority。
   - 移除專案頁下方 gallery 第一張的 priority，除非實測它真的在首屏。
   - 不要讓所有 featured 圖都 `unoptimized`；只有 `<picture>` 多來源確實需要時才繞過 Next image optimizer，或直接產出合適尺寸的靜態變體。
   - 修後跑 3 次 mobile Lighthouse，記錄中位數，不以最好的一次對外宣稱。

3. **部分完成：補齊 Lighthouse 公開描述的證據。**
   - 目前 99 已重現，不需要因另一輪 88 就撤掉。
   - 若要長期保留精確分數，應在 README 或量測紀錄補上日期、URL、Lighthouse 版本、strategy 與三次中位數。

4. **已完成：移除未引用的 `public/downloads/stallpos.apk`。**
   - 目前正式程式只引用 `app-debug.apk`。
   - 後續 APK 優先放 GitHub Release 或其他版本化下載位置；若仍放 repo，使用可辨識版本檔名，不要長期用 `app-debug.apk`。
   - 暫時不重寫 Git 歷史；只有 clone／push 容量真的造成問題時才評估 `git filter-repo`。

### P1：整理一次即可

5. 已刪除不再需要的本機與遠端 `cursor/frontend-validation-dev-runner`，並保留原 commit SHA `c18f965` 供必要時重建。
6. 下一個真正 release 才建立 tag；不要為了補齊外觀，倒推不存在的 release 語意。
7. 已新增短的根目錄 `AGENTS.md`，只放語言、驗證指令與不可破壞的專案邊界。
8. Footer 年份在跨到 2027 前處理；不要為它新增 client component。可接受每年改一行，或確認目前 Next build 對 build-time 年份的行為後使用最小方案。

### 2026-08-08 執行結果

- 圖片改回 Next.js 內建最佳化；desktop art direction 使用 `getImageProps()` 產生 responsive `srcset`，不再直接傳完整原檔，也沒有新增圖片 pipeline。
- Hero 與專案詳情首屏主圖使用 eager／high priority；首頁精選圖、其他專案圖與詳情 gallery 恢復預設 lazy。
- 修正 desktop 專案主圖與 mobile gallery 的 `sizes`，並補足 1200px device size，避免清晰度不足。
- 已移除未引用的 `stallpos.apk`；檔案仍可從 Git 歷史取回，未重寫歷史。
- 已新增短版根目錄 `AGENTS.md`，只保留語言、架構邊界與驗證指令。
- `npm run lint`、8 項 Vitest、production build 與 `git diff --check` 全部通過。
- 首頁與 `card-deck-builder` 詳情頁已檢查 390px／1440px、Light／Dark；沒有 error overlay 或 console error，主圖實際由 `/_next/image` 提供 responsive 版本。
- axe WCAG 2 A／AA 為 0 violations；移除技能區無效的泛用元素 ARIA 命名，剩餘人工確認項只有 `aria-hidden` 裝飾箭頭的色彩對比。
- 本機 production build 的三次 mobile Lighthouse Performance 為 96／98／98，中位數 98；Accessibility／Best Practices／SEO 三次皆 100，Image Delivery 潛在節省約 6 KiB。
- PR [#1](https://github.com/lamb-liver/lambliver-portfolio/pull/1) 已 squash 合併為 `88b7007` 並成功部署。正式站三次 mobile Performance 為 97／97／99，中位數 97；其他三項皆 100，Image Delivery 潛在節省為 46／46／0 KiB。
- 已刪除本機與遠端 runner branch，並將 GitHub About 改成不依賴單次分數的定性描述；未建立沒有 release 語意的 tag。

## 以後照這個流程工作

### A. 開始前：先定義要改善的使用者結果

每次只先回答三題：

1. 這次要改善哪個訪客判斷或操作？
2. 哪個現有檔案已經是這件事的資料來源或共用入口？
3. 最小的完成證據是什麼？

如果答案只是「看起來更專業」或「以後可能需要」，先不做。

### B. 修改：依現有架構走最短路徑

- 個人定位、技能：改 `lib/site.ts`。
- 專案內容、案例、連結、截圖：改 `lib/projects.ts` 與對應資產。
- 共用視覺：先改 `app/globals.css` token／既有 utility。
- 不為單一頁建立新 abstraction，不為單次本機問題建立 runner。
- 大型二進位檔先決定發布位置，再提交引用；替換資產時同時找出並刪除舊檔。

### C. 驗證：按風險，不按儀式

所有改動最低限度：

```bash
npm run lint
npm run build
git diff --check
```

`build` 已包含 Vitest，不必再重跑一次 `npm test`。

再依改動類型加驗證：

- 文案／資料：確認首頁、對應專案頁、metadata 與連結。
- 視覺／圖片：至少看 390px 與 1440px；同時切 Light/Dark。
- 圖片載入／效能：看 Network/Lighthouse，確認誰是 LCP、誰真的需要 priority。
- 新增專案：確認首頁排序、詳情五段、截圖 alt/caption、demo/GitHub、sitemap 與 JSON-LD。
- APK／下載：實際下載一次，確認檔名、大小、版本與舊檔已清。

### D. Commit：讓未來能看懂，不再靠猜

- 使用 Conventional Commits，例如 `feat(portfolio): add project case study`。
- 一個 commit 對應一個可說明的結果；圖片與使用它的程式放同一 commit。
- 不用 `v1.2.0` 當普通 subject；要稱 release 就建立 annotated tag。
- 提交前看一次 `git diff --stat`：若工具／文件行數遠大於功能本身，先停下重想。

### E. 發布後：核對正式環境，不用本機成功代替

1. 確認部署對應的 commit SHA。
2. 打開正式站，檢查這次變動的真實 route 與 breakpoint。
3. 有精確效能宣稱時才跑 3 次 Lighthouse 並留紀錄。
4. 確認後再更新 GitHub About、README 或作品成果文字。

## 防止再次繞路的決策規則

- 新工具超過約 100 行前，先證明同一問題至少重複發生兩次。
- 能放進既有 test 的一致性規則，不另寫 CLI。
- 能用 npm／Next／CSS／瀏覽器原生能力解決，不包一層 runner。
- 視覺問題一定看真實頁面；DOM、build、型別都不能證明裁切好看。
- 精確數字都有日期與重測方法；沒有證據就改成定性描述。
- 刪除要和替換一起完成；尤其是 APK、截圖與舊 branch。
- 「不合併」也是有效決策。`c18f965` 的價值是證明有能力及時停止錯誤規模。

## 每次工作的最短檢查表

- [ ] 這次改善的是訪客結果，不是工具外觀。
- [ ] 已搜尋既有入口與所有引用。
- [ ] 沒有多餘 dependency、wrapper、設定或重複文件。
- [ ] 舊資產與舊 branch 已明確處置。
- [ ] `npm run lint`、`npm run build`、`git diff --check` 通過。
- [ ] 視覺改動已看 390px／1440px 與 Light／Dark。
- [ ] 正式部署 SHA 與實際頁面已核對。
- [ ] 對外數字是本次可重現的結果。
