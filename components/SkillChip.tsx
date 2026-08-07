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
    <span className={isCore ? "skill-chip skill-chip-core" : "skill-chip"}>
      {label}
      {isCore ? <span className="sr-only">（核心技能）</span> : null}
    </span>
  );
}
