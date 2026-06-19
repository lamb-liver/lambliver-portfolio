import Link from "next/link";
import type { Project } from "@/lib/projects";
import { DemoLink } from "./DemoLink";
import { ProjectImagePlaceholder } from "./ProjectImagePlaceholder";

export function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className="group project-card">
      <Link
        href={`/projects/${project.slug}`}
        className="block p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
      >
        <div className="flex gap-4">
          <ProjectImagePlaceholder project={project} size="sm" />
          <div className="min-w-0 flex-1">
            {project.platform ? (
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                {project.platform}
              </p>
            ) : null}
            <h3 className="mt-1 font-mono text-base font-medium text-foreground">
              {project.name}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
          </div>
        </div>
      </Link>
      {project.links?.demo ? (
        <div className="border-t border-muted/25 px-5 py-3">
          <DemoLink href={project.links.demo} className="demo-link text-xs" />
        </div>
      ) : null}
    </article>
  );
}
