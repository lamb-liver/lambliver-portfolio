import { Hero } from "@/components/Hero";
import { PersonJsonLd } from "@/components/PersonJsonLd";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectScreenshotFigure } from "@/components/ProjectScreenshotFigure";
import { SkillChip } from "@/components/SkillChip";
import Link from "next/link";
import { featuredProjectScreenshots, projects } from "@/lib/projects";
import { site } from "@/lib/site";

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="mb-6 font-mono text-sm font-medium uppercase tracking-widest text-muted"
    >
      {children}
    </h2>
  );
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <PersonJsonLd />
      <section className="rounded-sm border border-border bg-surface px-5 py-6 sm:px-8 lg:px-10">
        <Hero />

        <section
          className="border-t border-muted/25 pt-8 sm:pt-10"
          aria-labelledby="screenshots-heading"
        >
          <SectionHeading id="screenshots-heading">實作畫面</SectionHeading>
          <ul className="grid grid-cols-2 items-start gap-3 sm:gap-4 lg:gap-5">
            {featuredProjectScreenshots.map(({ project, screenshot }, index) => (
              <li
                key={`${project.slug}-${screenshot.src}`}
                className={
                  screenshot.orientation === "desktop" ? "col-span-2" : undefined
                }
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                >
                  <ProjectScreenshotFigure
                    project={project}
                    screenshot={screenshot}
                    variant="featured"
                    priority={index === 0}
                    sizes={
                      screenshot.orientation === "desktop"
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 928px"
                        : "(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 456px"
                    }
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </section>

      <section
        id="about"
        className="anchor-target mx-auto max-w-3xl px-1 py-14 sm:py-16"
        aria-labelledby="about-heading"
      >
        <SectionHeading id="about-heading">關於</SectionHeading>
        <div className="space-y-3 leading-relaxed text-muted">
          {site.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="border-y border-muted/25 py-14 sm:py-16">
        <div
          id="skills"
          className="mx-auto max-w-3xl"
          aria-labelledby="skills-heading"
        >
          <SectionHeading id="skills-heading">技能</SectionHeading>
          <p className="mb-6 text-sm text-muted">
            較深邊框為核心技能（React、Next.js、TypeScript、Kotlin）。
          </p>
          <div className="space-y-8">
            {site.skillGroups.map((group) => (
              <div key={group.id} aria-labelledby={`skills-${group.id}`}>
                <h3
                  id={`skills-${group.id}`}
                  className="mb-3 font-mono text-xs uppercase tracking-widest text-muted"
                >
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <SkillChip label={skill.name} level={skill.level} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="anchor-target mx-auto max-w-3xl py-14 sm:py-16"
        aria-labelledby="projects-heading"
      >
        <SectionHeading id="projects-heading">專案</SectionHeading>
        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <section
        id="contact"
        className="anchor-target mx-auto max-w-3xl py-14 sm:py-16"
        aria-labelledby="contact-heading"
      >
        <SectionHeading id="contact-heading">聯絡</SectionHeading>
        <p className="leading-relaxed text-muted">{site.availability}</p>
        <ul className="mt-10 space-y-6">
          <li>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Email
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 inline-block rounded-sm px-1 text-foreground link-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              {site.email}
            </a>
          </li>
          {site.social.github ? (
            <li>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                GitHub
              </p>
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block rounded-sm px-1 text-foreground link-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                {site.social.github}
              </a>
            </li>
          ) : null}
        </ul>
      </section>
    </div>
  );
}
