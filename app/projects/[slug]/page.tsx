import type { Metadata } from "next";
import { HashLink } from "@/components/HashLink";
import { notFound } from "next/navigation";
import { ProjectImagePlaceholder } from "@/components/ProjectImagePlaceholder";
import { ProjectJsonLd } from "@/components/ProjectJsonLd";
import { ProjectLinks } from "@/components/ProjectLinks";
import { ProjectScreenshotFigure } from "@/components/ProjectScreenshotFigure";
import { SkillChip } from "@/components/SkillChip";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function CaseSection({
  title,
  id,
  children,
}: {
  title: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10" aria-labelledby={id}>
      <h2
        id={id}
        className="font-mono text-xs uppercase tracking-widest text-muted"
      >
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const url = `${site.url}/projects/${slug}`;

  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: project.name,
      description: project.description,
      locale: "zh_TW",
      url,
      type: "website",
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const { caseStudy } = project;
  const screenshots = project.screenshots ?? [];
  const [heroScreenshot, ...galleryScreenshots] = screenshots;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <ProjectJsonLd project={project} slug={slug} />
      <div className="rounded-sm border border-border bg-surface px-6 py-8 sm:px-10">
        <HashLink
          href="/#projects"
          className="rounded-sm px-1 font-mono text-sm text-muted link-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          ← 專案
        </HashLink>

        <article className="mt-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:items-start">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                {project.platform ? (
                  <p className="font-mono text-xs text-muted">
                    {project.platform}
                  </p>
                ) : null}
                {project.status === "in-progress" ? (
                  <span className="rounded-sm border border-border px-2 py-0.5 font-mono text-xs text-muted">
                    開發中
                  </span>
                ) : null}
              </div>

              <h1 className="font-mono text-3xl font-medium text-foreground sm:text-4xl">
                {project.name}
              </h1>
              <p className="mt-3 text-lg leading-relaxed text-muted">
                {project.description}
              </p>
            </div>

            <div className="lg:pt-1">
              {heroScreenshot ? (
                <ProjectScreenshotFigure
                  project={project}
                  screenshot={heroScreenshot}
                  variant="gallery"
                  priority
                  sizes="(max-width: 1024px) 100vw, 384px"
                />
              ) : (
                <ProjectImagePlaceholder project={project} size="lg" />
              )}
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
            <div>
              <CaseSection title="背景" id="project-background">
                <p className="leading-relaxed text-muted">
                  {caseStudy.background}
                </p>
              </CaseSection>

              <CaseSection title="我做了什麼" id="project-work">
                <p className="leading-relaxed text-muted">{caseStudy.work}</p>
              </CaseSection>

              <CaseSection title="設計重點" id="project-design">
                <ul className="list-inside list-disc space-y-2 leading-relaxed text-muted">
                  {caseStudy.designFocus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CaseSection>

              <CaseSection title="成果" id="project-outcome">
                <p className="leading-relaxed text-muted">
                  {caseStudy.outcome}
                </p>
              </CaseSection>
            </div>

            <aside className="border-t border-muted/25 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <section aria-labelledby="project-tech">
                <h2
                  id="project-tech"
                  className="font-mono text-xs uppercase tracking-widest text-muted"
                >
                  技術
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <SkillChip label={tag} />
                    </li>
                  ))}
                </ul>
              </section>

              <ProjectLinks
                className="mt-8"
                github={project.links?.github}
                demo={project.links?.demo}
              />
            </aside>
          </div>

          {galleryScreenshots.length > 0 ? (
            <CaseSection title="畫面" id="project-screenshots">
              <ul className="grid grid-cols-2 items-start gap-4">
                {galleryScreenshots.map((screenshot) => (
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
                      sizes={
                        screenshot.orientation === "desktop"
                          ? "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 960px"
                          : "(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 384px"
                      }
                    />
                  </li>
                ))}
              </ul>
            </CaseSection>
          ) : null}
        </article>
      </div>
    </div>
  );
}
