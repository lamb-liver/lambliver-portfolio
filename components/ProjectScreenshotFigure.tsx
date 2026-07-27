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
        "overflow-hidden bg-surface",
        isFeatured && "project-card",
        !isFeatured && "border border-border",
        !isFeatured && isMobile && "mx-auto max-w-sm",
      )}
    >
      {isFeatured ? (
        <div
          className={cn(
            "relative overflow-hidden bg-media",
            isMobile ? "aspect-[4/5]" : "aspect-video",
          )}
        >
          <picture className="absolute inset-0">
            {screenshot.desktopSrc ? (
              <source
                media="(min-width: 768px)"
                srcSet={screenshot.desktopSrc}
              />
            ) : null}
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              sizes={imageSizes}
              priority={priority}
              loading={priority ? "eager" : undefined}
              fetchPriority={priority ? "high" : undefined}
              unoptimized
              className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.015]"
            />
          </picture>
        </div>
      ) : (
        <picture className="block">
          {screenshot.desktopSrc ? (
            <source
              media="(min-width: 1024px)"
              srcSet={screenshot.desktopSrc}
            />
          ) : null}
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            width={width}
            height={height}
            sizes={imageSizes}
            priority={priority}
            loading={priority ? "eager" : undefined}
            fetchPriority={priority ? "high" : undefined}
            unoptimized
            className="block h-auto w-full object-contain"
          />
        </picture>
      )}
      <figcaption
        className={cn(
          "border-t border-border leading-snug",
          isFeatured ? "px-5 py-5 sm:px-6 sm:py-6" : "px-4 py-3",
        )}
      >
        {isFeatured ? (
          <>
            {project.platform ? (
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
                {project.platform}
              </p>
            ) : null}
            <div className="mt-2 flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {project.name}
              </h3>
              <span
                className="shrink-0 font-mono text-sm text-accent"
                aria-hidden="true"
              >
                →
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {project.description}
            </p>
          </>
        ) : (
          <p className="text-sm text-muted">{screenshot.caption}</p>
        )}
      </figcaption>
    </figure>
  );
}
