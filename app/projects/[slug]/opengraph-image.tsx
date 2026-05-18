import { createOgImage } from "@/lib/og";
import { getProjectBySlug } from "@/lib/projects";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createOgImage({ title: "專案", subtitle: "lambliver.dev" });
  }

  const subtitle =
    project.description.length > 60
      ? `${project.description.slice(0, 57)}…`
      : project.description;

  return createOgImage({
    title: project.name,
    subtitle,
    badge: project.status === "in-progress" ? "開發中" : undefined,
  });
}
