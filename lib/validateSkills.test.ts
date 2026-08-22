import { describe, expect, it } from "vitest";
import { getProjectBySlug, projects, type Project } from "@/lib/projects";
import {
  PROJECT_ONLY_TAGS,
  validateProjectTags,
  validateSkillGroups,
} from "@/lib/validateSkills";
import type { SkillGroup } from "@/lib/site";

const baseProject: Project = {
  slug: "sample",
  name: "Sample",
  description: "desc",
  tags: ["React"],
  monogram: "範",
  applicationKind: "web",
  caseStudy: {
    background: "bg",
    work: "work",
    designFocus: ["focus"],
    outcome: "outcome",
  },
};

describe("validateSkillGroups", () => {
  it("通過合法 skillGroups", () => {
    expect(() =>
      validateSkillGroups([
        {
          id: "frontend",
          label: "前端",
          skills: [{ name: "React" }],
        },
      ]),
    ).not.toThrow();
  });

  it("重複技能名稱時拋錯", () => {
    const groups: SkillGroup[] = [
      {
        id: "a",
        label: "A",
        skills: [{ name: "React" }],
      },
      {
        id: "b",
        label: "B",
        skills: [{ name: "React" }],
      },
    ];
    expect(() => validateSkillGroups(groups)).toThrow(/重複技能/);
  });
});

describe("validateProjectTags", () => {
  it("通過目前專案資料", () => {
    expect(() => validateProjectTags(projects)).not.toThrow();
  });

  it("通過 catalog 內 tag", () => {
    expect(() => validateProjectTags([baseProject])).not.toThrow();
  });

  it("允許 PROJECT_ONLY_TAGS", () => {
    expect(PROJECT_ONLY_TAGS.has("localStorage")).toBe(true);
    expect(() =>
      validateProjectTags([
        { ...baseProject, tags: ["React", "localStorage"] },
      ]),
    ).not.toThrow();
  });

  it("未知 tag 時拋錯", () => {
    expect(() =>
      validateProjectTags([{ ...baseProject, tags: ["UnknownStack"] }]),
    ).toThrow(/未在 skillGroups/);
  });

  it("專案內重複 tag 時拋錯", () => {
    expect(() =>
      validateProjectTags([{ ...baseProject, tags: ["React", "React"] }]),
    ).toThrow(/重複 tag/);
  });
});

describe("公開專案事實", () => {
  it.each(projects)("$name 至少提供兩張清楚的功能畫面", (project) => {
    expect(project.screenshots?.length ?? 0).toBeGreaterThanOrEqual(2);

    for (const screenshot of project.screenshots ?? []) {
      expect(screenshot.alt.trim()).not.toBe("");
      expect(screenshot.caption.trim()).not.toBe("");
    }
  });

  it("POS 以 Room 保存業務資料並提供正式 APK", () => {
    const project = getProjectBySlug("offline-pos-android");

    expect(project).toBeDefined();
    expect(project?.status).toBeUndefined();
    expect(project?.platform).not.toContain("持續開發中");
    expect(project?.tags).toContain("Room");
    expect(project?.tags).toContain("Jetpack DataStore");
    expect(project?.caseStudy.work).toContain("Room／SQLite");
    expect(project?.caseStudy.work).toContain("DataStore 僅保留 UI 偏好");
    expect(project?.links?.demo).toBe(
      "https://github.com/lamb-liver/appforsale/releases/download/v1.5.0/StallPOS-1.5.0.apk",
    );
  });

  it("卡牌工具標示實際的 Vite 與 PWA 技術", () => {
    const project = getProjectBySlug("card-deck-builder");

    expect(project).toBeDefined();
    expect(project?.tags).toContain("Vite");
    expect(project?.tags).toContain("PWA");
    expect(project?.tags).not.toContain("TypeScript");
  });
});
