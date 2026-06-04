import { site } from "@/lib/site";

export function resolvePublicUrl(pathOrUrl?: string): string | undefined {
  if (!pathOrUrl) return undefined;
  if (pathOrUrl.startsWith("http")) return pathOrUrl;
  if (pathOrUrl.startsWith("/")) return `${site.url}${pathOrUrl}`;
  return undefined;
}
