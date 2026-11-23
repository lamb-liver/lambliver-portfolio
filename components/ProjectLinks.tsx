import { cn } from "@/lib/utils";
import { DemoLink } from "./DemoLink";

type ProjectLinksProps = {
  github?: string;
  demo?: string;
  example?: string;
  className?: string;
};

export function ExampleLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="demo-link text-sm"
    >
      完成範例
    </a>
  );
}

export function ProjectLinks({ github, demo, example, className }: ProjectLinksProps) {
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
      ) : null}
      {demo ? <DemoLink href={demo} className="demo-link text-sm" /> : null}
      {example ? <ExampleLink href={example} /> : null}
    </div>
  );
}
