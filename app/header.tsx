"use client";
import { TextEffect } from "@/components/ui/text-effect";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Rohan Gaikwad
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Software Engineering Intern
        </TextEffect>
      </div>
      <ThemeToggle />
    </header>
  );
}
