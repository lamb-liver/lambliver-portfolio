import Image, { getImageProps } from "next/image";
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
  const desktopSrcSet = screenshot.desktopSrc
    ? getImageProps({
        src: screenshot.desktopSrc,
        alt: screenshot.alt,
        fill: true,
        sizes: imageSizes,
      }).props.srcSet
    : undefined;

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
        <div className="bg-media p-2.5 md:p-3">
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-video">
            <picture className="absolute inset-0">
              {desktopSrcSet ? (
                <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
              ) : null}
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                sizes={imageSizes}
                loading={priority ? "eager" : undefined}
                fetchPriority={priority ? "high" : undefined}
                className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.015]"
              />
            </picture>
          </div>
        </div>
      ) : (
        <picture className="block">
          {desktopSrcSet ? (
            <source media="(min-width: 1024px)" srcSet={desktopSrcSet} />
          ) : null}
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            width={width}
            height={height}
            sizes={imageSizes}
            loading={priority ? "eager" : undefined}
            fetchPriority={priority ? "high" : undefined}
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
              <p className="type-meta">{project.platform}</p>
            ) : null}
            <div className="mt-2 flex items-start justify-between gap-4">
              <h3 className="type-h3">{project.name}</h3>
              <span
                className="shrink-0 font-mono text-sm text-accent"
                aria-hidden="true"
              >
                →
              </span>
            </div>
            <p className="type-body mt-3 line-clamp-2">
              {project.caseStudy.outcome}
            </p>
          </>
        ) : (
          <p className="type-body text-sm">{screenshot.caption}</p>
        )}
      </figcaption>
    </figure>
  );
}
