import { cn } from "@/lib/utils";
import { DemoLink } from "./DemoLink";

type ProjectLinksProps = {
  github?: string;
  demo?: string;
  className?: string;
};

export function ProjectLinks({ github, demo, className }: ProjectLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-4", className)}>
      {github ? (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm px-1 py-0.5 font-mono text-sm text-foreground link-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          GitHub ↗
        </a>
      ) : (
        <span className="cursor-not-allowed font-mono text-sm text-muted opacity-60">
          GitHub（即將公開）
        </span>
      )}
      {demo ? <DemoLink href={demo} className="demo-link text-sm" /> : null}
    </div>
  );
}
