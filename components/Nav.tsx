import { HashLink } from "@/components/HashLinkSlot";
import Link from "next/link";
import { site } from "@/lib/site";
import { ThemeToggleSlot } from "./ThemeToggleSlot";

const navLinks = [
  { href: "/#about", label: "關於" },
  { href: "/#projects", label: "專案" },
  { href: "/#contact", label: "聯絡" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="rounded-sm px-1 font-mono text-lg font-medium text-foreground link-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
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
          <ThemeToggleSlot />
        </nav>
      </div>
    </header>
  );
}
