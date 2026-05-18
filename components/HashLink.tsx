"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

function parseHashHref(href: ComponentProps<typeof Link>["href"]) {
  if (typeof href !== "string") return null;
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  const hash = href.slice(hashIndex + 1);
  if (!hash) return null;
  const path = href.slice(0, hashIndex) || "/";
  return { path, hash };
}

function normalizePath(path: string) {
  if (!path || path === "/") return "/";
  return path.replace(/\/$/, "");
}

export function HashLink({
  href,
  onClick,
  ...props
}: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const parsed = parseHashHref(href);
    if (!parsed) return;

    if (normalizePath(pathname) !== normalizePath(parsed.path)) return;

    const target = document.getElementById(parsed.hash);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
    const hashUrl =
      parsed.path === "/"
        ? `/#${parsed.hash}`
        : `${parsed.path}#${parsed.hash}`;
    window.history.replaceState(null, "", hashUrl);
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
