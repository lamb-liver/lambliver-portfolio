import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="flex flex-col gap-2 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>
            © {year} {site.name} · {site.domain}
          </p>
          {site.social.github ? (
            <Link
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm px-1 link-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              GitHub
            </Link>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
