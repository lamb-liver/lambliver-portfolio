import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { isApkDemoUrl } from "@/lib/utils";
import { DemoLink } from "./DemoLink";
import { ProjectImagePlaceholder } from "./ProjectImagePlaceholder";

export function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const screenshot = project.screenshots?.[0];
  const demo = project.links?.demo;
  const liveHref = demo && !isApkDemoUrl(demo) ? demo : undefined;

  return (
    <article className="group project-card project-card-open h-full">
      <Link
        href={`/projects/${project.slug}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
      >
        {screenshot ? (
          <div className="bg-media p-2.5 md:p-3">
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-video">
              <Image
                src={screenshot.src}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 536px"
                className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.015]"
              />
            </div>
          </div>
        ) : (
          <ProjectImagePlaceholder project={project} size="sm" />
        )}
        <div className="p-4 sm:p-5">
          {project.platform ? (
            <p className="type-meta">{project.platform}</p>
          ) : null}
          <h3 className="type-h3 mt-2">{project.name}</h3>
          <p className="type-body mt-2 line-clamp-2">{project.description}</p>
        </div>
      </Link>
      {liveHref ? (
        <div className="border-t border-border px-4 py-3 sm:px-5">
          <DemoLink href={liveHref} className="demo-link text-sm" />
        </div>
      ) : null}
    </article>
  );
}
