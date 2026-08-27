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
    <h2 id={id} className="type-h2 mb-8 flex items-baseline gap-3">
      <span className="type-meta text-accent" aria-hidden="true">
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
        id="services"
        className="anchor-target py-16 sm:py-20"
        aria-labelledby="services-heading"
      >
        <SectionHeading id="services-heading" index="01">
          可承接項目
        </SectionHeading>
        <ul className="grid gap-4 md:grid-cols-3">
          {site.offerings.map((offering) => (
            <li key={offering.title}>
              <article className="project-card h-full p-5 sm:p-6">
                <h3 className="type-h3">{offering.title}</h3>
                <p className="type-body mt-2">{offering.description}</p>
              </article>
            </li>
          ))}
        </ul>
        <p className="type-body mt-8 max-w-xl">{site.offeringsNote}</p>
        <a href={site.inquiryMailto} className="btn-primary mt-6">
          來信洽詢委託
        </a>
      </section>

      <section
        id="projects"
        className="anchor-target py-16 sm:py-20"
        aria-labelledby="projects-heading"
      >
        <SectionHeading id="projects-heading" index="02">
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
        <p className="mt-8">
          <a href={site.inquiryMailto} className="demo-link text-sm">
            來信洽詢委託
          </a>
        </p>
      </section>

      <section
        id="about"
        className="anchor-target border-y border-border py-16 sm:py-20"
        aria-labelledby="about-heading"
      >
        <SectionHeading id="about-heading" index="03">
          關於
        </SectionHeading>
        <div className="type-body max-w-2xl space-y-4">
          {site.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div
          id="skills"
          className="mt-12 max-w-2xl"
          aria-labelledby="skills-heading"
        >
          <h3 id="skills-heading" className="type-h3 mb-6">
            技能
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {site.skillGroups.map((group) => (
              <div key={group.id}>
                <p id={`skills-${group.id}`} className="type-meta mb-2">
                  {group.label}
                </p>
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
        <SectionHeading id="contact-heading" index="05">
          聯絡
        </SectionHeading>
        <p className="type-body max-w-xl">{site.availability}</p>
        <p className="mt-3 break-all font-mono text-sm text-foreground">
          {site.email}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href={site.inquiryMailto} className="btn-primary">
            來信洽詢委託
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
          {site.social.linkedin ? (
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-link rounded-sm px-1 py-1 text-sm"
            >
              LinkedIn ↗
            </a>
          ) : null}
        </div>
      </section>
    </div>
  );
}
