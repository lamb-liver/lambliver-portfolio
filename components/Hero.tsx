import { HashLink } from "@/components/HashLinkSlot";
import Image from "next/image";
import { site } from "@/lib/site";

const heroImage = {
  src: "/images/lambliver-hero.webp",
  alt: "羊肝的角色插畫：粉色捲髮、羊角、眼鏡，白色實驗袍與粉色帽T",
  width: 176,
  height: 176,
} as const;

export function Hero() {
  return (
    <section className="py-16" aria-labelledby="hero-heading">
      <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          <h1
            id="hero-heading"
            className="font-mono text-4xl font-medium tracking-tight text-foreground sm:text-5xl"
          >
            {site.name}
          </h1>
          <p className="enter-fade-up-delay-75 mt-3 text-lg text-muted">
            {site.role}
          </p>
          <p className="enter-fade-up-delay-150 mt-4 max-w-xl leading-relaxed text-muted">
            {site.bio}
          </p>
          <div className="enter-fade-up-delay-200 mt-8 flex flex-wrap gap-4">
            <HashLink href="/#projects" className="btn-primary">
              查看專案
            </HashLink>
            <HashLink href="/#contact" className="btn-secondary">
              聯絡
            </HashLink>
          </div>
        </div>

        <figure className="mx-auto shrink-0 border border-border bg-surface sm:mx-0">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            priority
            fetchPriority="high"
            className="h-auto w-44 sm:w-52"
            sizes="(max-width: 640px) 176px, 208px"
          />
        </figure>
      </div>
    </section>
  );
}
