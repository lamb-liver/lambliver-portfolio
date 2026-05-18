"use client";

import dynamic from "next/dynamic";

const ThemeToggle = dynamic(
  () => import("./ThemeToggle").then((mod) => mod.ThemeToggle),
  {
    ssr: false,
    loading: () => (
      <button
        type="button"
        className="theme-toggle-btn"
        aria-label="切換主題"
        disabled
      />
    ),
  },
);

export function ThemeToggleSlot() {
  return <ThemeToggle />;
}
