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
    <section className="mt-12 first:mt-0" aria-labelledby={id}>
      <h2
        id={id}
        className="flex items-center gap-3 text-lg font-semibold tracking-tight text-foreground"
      >
        <span className="h-px w-6 bg-accent" aria-hidden="true" />
        {title}
      </h2>
      <div className="mt-4">{children}</div>
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
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <ProjectJsonLd project={project} slug={slug} />
      <div className="border border-border bg-surface px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
        <HashLink
          href="/#projects"
          className="rounded-sm px-1 font-mono text-sm text-muted link-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          ← 專案
        </HashLink>

        <article className="mt-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(28rem,1.2fr)] lg:items-start">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                {project.platform ? (
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
                    {project.platform}
                  </p>
                ) : null}
                {project.status === "in-progress" ? (
                  <span className="rounded-sm border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-xs text-foreground">
                    開發中
                  </span>
                ) : null}
              </div>

              <h1 className="text-4xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-5xl">
                {project.name}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                {project.description}
              </p>
            </div>

            <div>
              {heroScreenshot ? (
                <ProjectScreenshotFigure
                  project={project}
                  screenshot={heroScreenshot}
                  variant="gallery"
                  priority
                  sizes={
                    heroScreenshot.orientation === "desktop"
                      ? "(max-width: 1024px) 100vw, 624px"
                      : "384px"
                  }
                />
              ) : (
                <ProjectImagePlaceholder project={project} size="lg" />
              )}
            </div>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start">
            <div>
              <CaseSection title="背景" id="project-background">
                <p className="leading-relaxed text-foreground/80">
                  {caseStudy.background}
                </p>
              </CaseSection>

              <CaseSection title="我做了什麼" id="project-work">
                <p className="leading-relaxed text-foreground/80">
                  {caseStudy.work}
                </p>
              </CaseSection>

              <CaseSection title="特別在意" id="project-design">
                <ul className="list-inside list-disc space-y-2 leading-relaxed text-foreground/80 marker:text-accent">
                  {caseStudy.designFocus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CaseSection>

              <CaseSection title="成果" id="project-outcome">
                <p className="leading-relaxed text-foreground/80">
                  {caseStudy.outcome}
                </p>
              </CaseSection>
            </div>

            <aside className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <section aria-labelledby="project-tech">
                <h2
                  id="project-tech"
                  className="font-mono text-xs uppercase tracking-widest text-muted"
                >
                  用到什麼
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
            <CaseSection title="功能畫面" id="project-screenshots">
              <ul className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
                {galleryScreenshots.map((screenshot) => (
                  <li
                    key={screenshot.src}
                    className={
                      screenshot.orientation === "desktop"
                        ? "sm:col-span-2"
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
                          : "(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 384px"
                      }
                    />
                  </li>
                ))}
              </ul>
            </CaseSection>
          ) : null}

          <div className="mt-14 border-t border-border pt-8">
            <a href={site.inquiryMailto} className="btn-primary">
              來信洽詢委託
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
