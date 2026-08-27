import { JsonLd } from "@/components/JsonLd";
import { getAllSkills, site } from "@/lib/site";

export function PersonJsonLd() {
  const sameAs = [site.social.github, site.social.linkedin].filter(
    (url): url is string => Boolean(url),
  );

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    alternateName: site.nameEn,
    url: site.url,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    knowsAbout: getAllSkills(),
  };

  return <JsonLd data={schema} />;
}
