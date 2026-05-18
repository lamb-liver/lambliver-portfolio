import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectImagePlaceholder({
  project,
  size = "md",
}: {
  project: Project;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <div
      className={cn(
        "project-placeholder",
        size === "sm" && "h-16 w-16 shrink-0 text-xl",
        size === "md" && "h-24 w-full text-3xl",
        size === "lg" && "placeholder-grid h-40 w-full text-5xl",
      )}
      aria-hidden
    >
      <span className="font-sans leading-none">{project.monogram}</span>
    </div>
  );
}
