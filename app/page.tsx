import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillChip } from "@/components/SkillChip";
import { projects } from "@/lib/projects";
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

function ContentShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl rounded-sm border border-border bg-surface px-6 py-10 sm:px-10">
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <ContentShell>
        <Hero />

        <section
          id="about"
          className="anchor-target py-16"
          aria-labelledby="about-heading"
        >
          <SectionHeading id="about-heading">關於</SectionHeading>
          <div className="space-y-3 leading-relaxed text-muted">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="py-16"
          aria-labelledby="skills-heading"
        >
          <SectionHeading id="skills-heading">技能</SectionHeading>
          <ul className="flex flex-wrap gap-2">
            {site.skills.map((skill) => (
              <li key={skill}>
                <SkillChip label={skill} />
              </li>
            ))}
          </ul>
        </section>

        <section
          id="projects"
          className="anchor-target py-16"
          aria-labelledby="projects-heading"
        >
          <SectionHeading id="projects-heading">專案</SectionHeading>
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <li key={project.slug}>
                <ProjectCard project={project} index={index} />
              </li>
            ))}
          </ul>
        </section>

        <section
          id="contact"
          className="anchor-target py-16"
          aria-labelledby="contact-heading"
        >
          <SectionHeading id="contact-heading">聯絡</SectionHeading>
          <p className="leading-relaxed text-muted">
            歡迎合作、side project 或技術交流，透過以下方式聯繫我。
          </p>
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
      </ContentShell>
    </div>
  );
}
