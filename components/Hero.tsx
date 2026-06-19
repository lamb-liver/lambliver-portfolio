import { HashLink } from "@/components/HashLink";
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
    <section className="py-8 sm:py-10" aria-labelledby="hero-heading">
      <div className="grid gap-8 sm:grid-cols-[minmax(0,1fr)_13rem] sm:items-center lg:grid-cols-[minmax(0,1fr)_15rem]">
        <div className="min-w-0 flex-1">
          <h1
            id="hero-heading"
            className="font-mono text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {site.name}
          </h1>
          <p className="mt-3 text-lg text-muted">{site.role}</p>
          <p className="mt-2 text-base text-foreground">
            {site.clientPitch}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <HashLink href="/#projects" className="btn-primary">
              查看專案
            </HashLink>
            <HashLink href="/#contact" className="btn-secondary">
              討論需求
            </HashLink>
          </div>
        </div>

        <figure className="hero-portrait">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            loading="eager"
            className="h-auto w-40 sm:w-44 lg:w-52"
            sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 208px"
          />
        </figure>
      </div>
    </section>
  );
}
