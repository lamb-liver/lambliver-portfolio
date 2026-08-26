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
    <section
      className="hero-panel overflow-hidden px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
      aria-labelledby="hero-heading"
    >
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_18rem] lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {site.name} / {site.nameEn}
          </p>
          <h1
            id="hero-heading"
            className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.12] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl"
          >
            {site.clientPitch}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.role}。畫面好用、資料穩、做完就能上線。
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <HashLink href="/#projects" className="btn-primary">
              查看專案
            </HashLink>
            <HashLink href="/#contact" className="btn-secondary">
              找我聊聊
            </HashLink>
          </div>
        </div>

        <figure className="hero-portrait justify-self-center md:justify-self-end">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            loading="eager"
            fetchPriority="high"
            className="h-auto w-56 sm:w-64 lg:w-72"
            sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
          />
        </figure>
      </div>
    </section>
  );
}
