import Link from "next/link";
import { site } from "@/lib/site";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.98c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.14 10.14 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="flex flex-col gap-2 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>羊肝 · lambliver.dev © 2026</p>
          {site.social.github ? (
            <Link
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="前往 GitHub"
              className="inline-flex h-8 w-8 items-center justify-center rounded-sm text-muted link-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              <GitHubIcon className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
