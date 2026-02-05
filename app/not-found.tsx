import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center">
      <div className="max-w-md text-center px-4">
        <div className="mb-8">
          <p className="font-mono text-6xl font-bold text-github-green mb-4">404</p>
          <h1 className="font-mono text-3xl font-bold text-text-primary mb-2">Page Not Found</h1>
          <p className="text-text-secondary">
            The page you're looking for doesn't exist or has been moved. Let me help you get back on track.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-github-green bg-github-green px-6 py-3 font-mono text-sm font-semibold text-obsidian transition-all duration-300 hover:bg-github-green-dark"
          >
            Return to Home
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="mt-8 space-y-2">
            <p className="text-sm text-text-secondary mb-4">Quick Links:</p>
            <div className="flex flex-col gap-2">
              {[
                { href: '/projects', label: 'Projects' },
                { href: '/experience', label: 'Experience' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-github-green hover:text-github-green-dark transition-colors text-sm font-mono"
                >
                  ↳ {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
