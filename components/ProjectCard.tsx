import Link from "next/link";
import type { Project } from "@/lib/projects";
import { OpenIcon } from "./OpenIcon";
import { ProjectImagePlaceholder } from "./ProjectImagePlaceholder";

const enterClasses = [
  "enter-fade-up-card-0",
  "enter-fade-up-card-1",
  "enter-fade-up-card-2",
] as const;

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const enterClass = enterClasses[index] ?? enterClasses[0];

  return (
    <article className={`group project-card ${enterClass}`}>
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
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-link text-xs"
          >
            Demo
            <OpenIcon className="transition-transform duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </a>
        </div>
      ) : null}
    </article>
  );
}
