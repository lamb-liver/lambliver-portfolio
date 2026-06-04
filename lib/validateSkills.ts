import type { Project } from "@/lib/projects";
import { getAllSkills, skillGroups, type SkillGroup } from "@/lib/site";

/** 僅出現在專案 tags、不列入首頁技能目錄的標籤 */
export const PROJECT_ONLY_TAGS = new Set(["localStorage"]);

export function validateSkillGroups(groups: SkillGroup[] = skillGroups): void {
  const seen = new Set<string>();
  const duplicates: string[] = [];

  for (const group of groups) {
    for (const skill of group.skills) {
      const name = skill.name.trim();
      if (!name) {
        throw new Error(
          `[validateSkills] skillGroups「${group.id}」含空技能名稱`,
        );
      }
      if (seen.has(name)) {
        duplicates.push(name);
      }
      seen.add(name);
    }
  }

  if (duplicates.length > 0) {
    throw new Error(
      `[validateSkills] skillGroups 含重複技能：${duplicates.join(", ")}`,
    );
  }
}

export function validateProjectTags(projectList: Project[]): void {
  validateSkillGroups();

  const catalog = new Set(getAllSkills());
  const missing: string[] = [];

  for (const project of projectList) {
    const tagSeen = new Set<string>();

    for (const rawTag of project.tags) {
      const tag = rawTag.trim();
      if (!tag) {
        missing.push(`${project.slug}: (empty tag)`);
        continue;
      }
      if (tagSeen.has(tag)) {
        throw new Error(
          `[validateSkills] 專案 ${project.slug} 含重複 tag：${tag}`,
        );
      }
      tagSeen.add(tag);

      if (catalog.has(tag) || PROJECT_ONLY_TAGS.has(tag)) continue;
      missing.push(`${project.slug}: ${tag}`);
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `[validateSkills] 專案 tags 未在 skillGroups 中（且非 PROJECT_ONLY_TAGS）：\n${missing.join("\n")}`,
    );
  }
}
