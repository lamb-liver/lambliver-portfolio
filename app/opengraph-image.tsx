import { createOgImage } from "@/lib/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} · ${site.nameEn}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return createOgImage({
    title: `${site.name} · ${site.nameEn}`,
    subtitle: `${site.role} — ${site.clientPitch}`,
  });
}
