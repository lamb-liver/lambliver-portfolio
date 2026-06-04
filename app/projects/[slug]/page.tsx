import type { Metadata } from "next";
import { HashLink } from "@/components/HashLinkSlot";
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

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <ProjectJsonLd project={project} slug={slug} />
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

          <CaseSection title="背景" id="project-background">
            <p className="leading-relaxed text-muted">{caseStudy.background}</p>
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

          <CaseSection title="技術" id="project-tech">
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <SkillChip label={tag} />
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection title="成果" id="project-outcome">
            <p className="leading-relaxed text-muted">{caseStudy.outcome}</p>
          </CaseSection>

          {screenshots.length > 0 ? (
            <CaseSection title="畫面" id="project-screenshots">
              <ul className="grid grid-cols-2 items-start gap-4">
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
            </CaseSection>
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
