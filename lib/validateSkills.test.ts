import { describe, expect, it } from "vitest";
import { projects, type Project } from "@/lib/projects";
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
