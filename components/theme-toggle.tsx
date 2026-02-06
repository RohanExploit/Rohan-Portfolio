"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="rounded-full p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 text-zinc-900 dark:text-zinc-100 opacity-0" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
      ) : (
        <Sun className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
      )}
    </button>
  );
}
