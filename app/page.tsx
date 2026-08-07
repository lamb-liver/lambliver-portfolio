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
  index,
  children,
}: {
  id: string;
  index: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="mb-8 flex items-baseline gap-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
    >
      <span
        className="font-mono text-xs font-medium tracking-[0.18em] text-accent"
        aria-hidden="true"
      >
        {index}
      </span>
      {children}
    </h2>
  );
}

export default function HomePage() {
  const otherProjects = projects.filter(
    (project) =>
      !featuredProjectScreenshots.some(
        ({ project: featuredProject }) => featuredProject.slug === project.slug,
      ),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <PersonJsonLd />
      <Hero />

      <section
        id="projects"
        className="anchor-target py-16 sm:py-20"
        aria-labelledby="projects-heading"
      >
        <SectionHeading id="projects-heading" index="01">
          精選專案
        </SectionHeading>
        <ul className="grid items-start gap-4 md:grid-cols-2 lg:gap-6">
          {featuredProjectScreenshots.map(({ project, screenshot }) => (
            <li
              key={`${project.slug}-${screenshot.src}`}
              className={
                screenshot.orientation === "desktop" ? "md:col-span-2" : undefined
              }
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                <ProjectScreenshotFigure
                  project={project}
                  screenshot={screenshot}
                  variant="featured"
                  sizes={
                    screenshot.orientation === "desktop"
                      ? "(max-width: 768px) 100vw, 1088px"
                      : "(max-width: 768px) 100vw, 536px"
                  }
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="grid gap-14 border-y border-border py-16 sm:py-20 lg:grid-cols-2 lg:gap-20">
        <section
          id="about"
          className="anchor-target"
          aria-labelledby="about-heading"
        >
          <SectionHeading id="about-heading" index="02">
            關於
          </SectionHeading>
          <div className="max-w-xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="anchor-target"
          aria-labelledby="skills-heading"
        >
          <SectionHeading id="skills-heading" index="03">
            技能
          </SectionHeading>
          <div className="space-y-6">
            {site.skillGroups.map((group) => (
              <div key={group.id}>
                <h3
                  id={`skills-${group.id}`}
                  className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-muted"
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
        </section>
      </div>

      {otherProjects.length > 0 ? (
        <section className="py-16 sm:py-20" aria-labelledby="other-projects-heading">
          <SectionHeading id="other-projects-heading" index="04">
            其他專案
          </SectionHeading>
          <ul className="grid gap-4 md:grid-cols-2">
            {otherProjects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section
        id="contact"
        className="contact-panel anchor-target mb-8 px-6 py-10 sm:px-10 sm:py-12 lg:px-14"
        aria-labelledby="contact-heading"
      >
        <p className="font-mono text-xs tracking-[0.18em] text-accent">05 / 聯絡</p>
        <h2
          id="contact-heading"
          className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          一起把想法做成能用的東西。
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          {site.availability}
        </p>
        <p className="mt-3 break-all font-mono text-sm text-foreground">
          {site.email}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="btn-primary break-all"
          >
            寫信給我
          </a>
          {site.social.github ? (
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-link rounded-sm px-1 py-1 text-sm"
            >
              GitHub ↗
            </a>
          ) : null}
        </div>
      </section>
    </div>
  );
}
