import Image from "next/image";
import type { Project, ProjectScreenshot } from "@/lib/projects";
import { cn } from "@/lib/utils";

type ProjectScreenshotFigureProps = {
  project: Project;
  screenshot: ProjectScreenshot;
  variant: "featured" | "gallery";
  priority?: boolean;
  sizes?: string;
};

export function ProjectScreenshotFigure({
  project,
  screenshot,
  variant,
  priority = false,
  sizes,
}: ProjectScreenshotFigureProps) {
  const isMobile = screenshot.orientation === "mobile";
  const isFeatured = variant === "featured";
  const width = isMobile ? 900 : 1600;
  const height = isMobile ? 1600 : 900;
  const imageSizes =
    sizes ??
    (isFeatured
      ? "(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 456px"
      : "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 672px");

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
        sizes={imageSizes}
        priority={priority}
        loading={priority ? "eager" : undefined}
        fetchPriority={priority ? "high" : undefined}
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
