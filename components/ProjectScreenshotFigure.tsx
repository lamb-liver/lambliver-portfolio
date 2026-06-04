import Image from "next/image";
import type { Project, ProjectScreenshot } from "@/lib/projects";
import { cn } from "@/lib/utils";

type ProjectScreenshotFigureProps = {
  project: Project;
  screenshot: ProjectScreenshot;
  variant: "featured" | "gallery";
};

export function ProjectScreenshotFigure({
  project,
  screenshot,
  variant,
}: ProjectScreenshotFigureProps) {
  const isMobile = screenshot.orientation === "mobile";
  const isFeatured = variant === "featured";
  const width = isMobile ? 900 : 1600;
  const height = isMobile ? 1600 : 900;

  return (
    <figure
      className={cn(
        "overflow-hidden border border-border bg-surface",
        isFeatured && "project-card",
        !isFeatured && isMobile && "mx-auto max-w-xs",
      )}
    >
      <Image
        src={screenshot.src}
        alt={screenshot.alt}
        width={width}
        height={height}
        sizes={
          isFeatured
            ? "(max-width: 640px) 100vw, 224px"
            : "(max-width: 640px) 100vw, 672px"
        }
        className="block h-auto w-full object-contain"
      />
      <figcaption className="border-t border-muted/25 px-4 py-3 leading-relaxed">
        {isFeatured ? (
          <>
            <p className="font-mono text-sm text-foreground">{project.name}</p>
            <p className="mt-1 text-sm text-muted">{screenshot.caption}</p>
          </>
        ) : (
          <p className="text-sm text-muted">{screenshot.caption}</p>
        )}
      </figcaption>
    </figure>
  );
}
