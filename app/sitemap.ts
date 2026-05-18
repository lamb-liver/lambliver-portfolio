import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const projectUrls = getAllProjectSlugs().map((slug) => ({
    url: `${base}/projects/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
