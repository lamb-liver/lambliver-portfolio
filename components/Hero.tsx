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
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_11rem] lg:grid-cols-[minmax(0,1fr)_13rem]">
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
            內容更新與上線維護，可一併討論。
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <HashLink href="/#projects" className="btn-primary">
              查看案例
            </HashLink>
            <a href={site.inquiryMailto} className="btn-secondary">
              來信洽詢委託
            </a>
          </div>
        </div>

        <figure className="hero-portrait justify-self-center md:justify-self-end">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            unoptimized
            loading="eager"
            fetchPriority="high"
            className="h-auto w-36 sm:w-44 lg:w-52"
            sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 208px"
          />
        </figure>
      </div>
    </section>
  );
}
