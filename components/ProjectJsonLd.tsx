import { JsonLd } from "@/components/JsonLd";
import type { Project } from "@/lib/projects";
import { site } from "@/lib/site";
import { resolvePublicUrl } from "@/lib/urls";

export function ProjectJsonLd({
  project,
  slug,
}: {
  project: Project;
  slug: string;
}) {
  const pageUrl = `${site.url}/projects/${slug}`;
  const demoUrl = resolvePublicUrl(project.links?.demo);
  const appUrl = demoUrl ?? pageUrl;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.content ?? project.description,
    url: appUrl,
    mainEntityOfPage: pageUrl,
    applicationCategory:
      project.applicationKind === "android"
        ? "MobileApplication"
        : "WebApplication",
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    keywords: project.tags.join(", "),
  };

  if (project.links?.github) {
    schema.codeRepository = project.links.github;
  }

  if (demoUrl?.endsWith(".apk")) {
    schema.downloadUrl = demoUrl;
  }

  return <JsonLd data={schema} />;
}
