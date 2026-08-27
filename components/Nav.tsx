import { HashLink } from "@/components/HashLink";
import Link from "next/link";
import { site } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/#services", label: "項目" },
  { href: "/#projects", label: "案例" },
  { href: "/#about", label: "關於" },
  { href: "/#contact", label: "聯絡" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-sm px-1 font-mono text-lg font-semibold text-foreground link-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          {site.name}
        </Link>
        <nav
          className="flex items-center gap-2 text-sm sm:gap-4"
          aria-label="主要導覽"
        >
          {navLinks.map((link) => (
            <HashLink
              key={link.href}
              href={link.href}
              className="rounded-sm px-2 py-1 text-muted link-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              {link.label}
            </HashLink>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
