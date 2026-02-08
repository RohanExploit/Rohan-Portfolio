"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { ROHAN_DATA } from "@/lib/portfolio-data";
import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: "◆" },
    { href: "/about", label: "About", icon: "◈" },
    { href: "/projects", label: "Projects", icon: "◊" },
    { href: "/experience", label: "Experience", icon: "▪" },
    { href: "/skills", label: "Skills", icon: "■" },
    { href: "/certifications", label: "Certifications", icon: "★" },
    { href: "/open-source", label: "Open Source", icon: "◈" },
    { href: "/contact", label: "Contact", icon: "✉" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-xl font-bold hover:opacity-80 transition-opacity"
          >
            <span className="text-accent">&lt;RG</span>
            <span className="text-text-primary">/&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-accent"
                    : "text-text-secondary hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={ROHAN_DATA.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-mono text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-dark"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <div className="pl-4 border-l border-border">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 rounded-md hover:bg-surface-alt transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-accent" />
              ) : (
                <Menu className="h-6 w-6 text-accent" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="flex flex-col gap-2 border-t border-border py-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 font-mono text-sm transition-all duration-300 ${
                  isActive(item.href)
                    ? "text-accent"
                    : "text-text-secondary hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={ROHAN_DATA.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-mono text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-dark"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
