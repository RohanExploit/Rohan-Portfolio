'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home', icon: '◆' },
    { href: '/about', label: 'About', icon: '◈' },
    { href: '/projects', label: 'Projects', icon: '◊' },
    { href: '/experience', label: 'Experience', icon: '▪' },
    { href: '/skills', label: 'Skills', icon: '■' },
    { href: '/achievements', label: 'Achievements', icon: '★' },
    { href: '/contact', label: 'Contact', icon: '✉' },
  ]

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-600 bg-obsidian/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-mono text-xl font-bold">
            <span className="text-accent">&lt;RG</span>
            <span className="text-text-primary">/&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 font-mono text-sm transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-accent" />
            ) : (
              <Menu className="h-6 w-6 text-accent" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="flex flex-col gap-2 border-t border-slate-600 py-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 font-mono text-sm transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
