import { cn } from "@/lib/utils";
import { OpenIcon } from "./OpenIcon";

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
      {demo ? (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="demo-link text-sm"
        >
          Demo
          <OpenIcon className="transition-transform duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
        </a>
      ) : null}
    </div>
  );
}
