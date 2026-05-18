"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  queueMicrotask(onStoreChange);
  return () => {};
}

const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (!mounted) {
    return (
      <button
        type="button"
        className="theme-toggle-btn"
        aria-label="切換主題"
        disabled
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="theme-toggle-btn"
      aria-label={isDark ? "切換至淺色模式" : "切換至深色模式"}
    >
      {isDark ? "☀" : "☾"}
    </button>
  );
}
