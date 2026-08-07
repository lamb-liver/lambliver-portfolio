import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { DemoLink } from "./DemoLink";
import { ProjectImagePlaceholder } from "./ProjectImagePlaceholder";

export function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const screenshot = project.screenshots?.[0];

  return (
    <article className="group project-card h-full">
      <Link
        href={`/projects/${project.slug}`}
        className="grid gap-4 p-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:grid-cols-[7.5rem_minmax(0,1fr)]"
      >
        {screenshot ? (
          <div className="relative aspect-[4/3] overflow-hidden bg-media sm:aspect-auto sm:min-h-28">
            <Image
              src={screenshot.src}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 120px"
              className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.025]"
            />
          </div>
        ) : (
          <ProjectImagePlaceholder project={project} size="sm" />
        )}
        <div className="min-w-0 py-1">
          {project.platform ? (
            <p className="font-mono text-xs leading-tight uppercase tracking-[0.1em] text-muted">
              {project.platform}
            </p>
          ) : null}
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
            {project.name}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
        </div>
      </Link>
      {project.links?.demo ? (
        <div className="border-t border-border px-4 py-3">
          <DemoLink href={project.links.demo} className="demo-link text-xs" />
        </div>
      ) : null}
    </article>
  );
}
