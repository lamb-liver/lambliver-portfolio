import type { SkillLevel } from "@/lib/site";

export function SkillChip({
  label,
  level,
}: {
  label: string;
  level?: SkillLevel;
}) {
  const isCore = level === "core";

  return (
    <span
      className={isCore ? "skill-chip skill-chip-core" : "skill-chip"}
      {...(isCore ? { "aria-label": `核心技能：${label}` } : {})}
    >
      {label}
    </span>
  );
}
