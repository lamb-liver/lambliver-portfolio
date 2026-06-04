import type { Metadata } from "next";
import { HashLink } from "@/components/HashLinkSlot";
import { notFound } from "next/navigation";
import { ProjectImagePlaceholder } from "@/components/ProjectImagePlaceholder";
import { ProjectLinks } from "@/components/ProjectLinks";
import { ProjectScreenshotFigure } from "@/components/ProjectScreenshotFigure";
import { SkillChip } from "@/components/SkillChip";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const screenshots = project.screenshots ?? [];

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="rounded-sm border border-border bg-surface px-6 py-10 sm:px-10">
        <HashLink
          href="/#projects"
          className="rounded-sm px-1 font-mono text-sm text-muted link-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          ← 專案
        </HashLink>

        <article className="enter-fade-up mt-8">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {project.platform ? (
              <p className="font-mono text-xs text-muted">{project.platform}</p>
            ) : null}
            {project.status === "in-progress" ? (
              <span className="rounded-sm border border-border px-2 py-0.5 font-mono text-xs text-muted">
                開發中
              </span>
            ) : null}
          </div>

          {screenshots.length === 0 ? (
            <ProjectImagePlaceholder project={project} size="lg" />
          ) : null}

          <h1 className="mt-8 font-mono text-3xl font-medium text-foreground">
            {project.name}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            {project.description}
          </p>

          {project.content ? (
            <p className="mt-8 leading-relaxed text-muted">{project.content}</p>
          ) : null}

          <div className="mt-10">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
              技術
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <SkillChip label={tag} />
                </li>
              ))}
            </ul>
          </div>

          {project.highlights && project.highlights.length > 0 ? (
            <div className="mt-10">
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
                亮點
              </h2>
              <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed text-muted">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {screenshots.length > 0 ? (
            <section className="mt-10" aria-labelledby="project-screenshots">
              <h2
                id="project-screenshots"
                className="font-mono text-xs uppercase tracking-widest text-muted"
              >
                畫面
              </h2>
              <ul className="mt-3 grid grid-cols-2 items-start gap-4">
                {screenshots.map((screenshot) => (
                  <li
                    key={screenshot.src}
                    className={
                      screenshot.orientation === "desktop"
                        ? "col-span-2"
                        : undefined
                    }
                  >
                    <ProjectScreenshotFigure
                      project={project}
                      screenshot={screenshot}
                      variant="gallery"
                    />
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <ProjectLinks
            className="mt-10"
            github={project.links?.github}
            demo={project.links?.demo}
          />
        </article>
      </div>
    </div>
  );
}
