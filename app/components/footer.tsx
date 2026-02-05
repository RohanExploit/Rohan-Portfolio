import Link from 'next/link'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-600 bg-steel py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="font-mono text-sm font-bold text-accent">About</h3>
            <p className="mt-4 text-sm text-text-secondary">
              Full-stack developer passionate about building impactful software and contributing to open-source projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-sm font-bold text-accent">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/projects" className="text-text-secondary hover:text-accent transition-colors">
                  View Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-text-secondary hover:text-accent transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-text-secondary hover:text-accent transition-colors">
                  Tech Stack
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-mono text-sm font-bold text-accent">Connect</h3>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/RohanExploit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/rohanvijaygaikwad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:rohan@example.com"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-600 pt-8 text-center">
          <p className="text-sm text-text-tertiary">
            © {currentYear} Rohan Gaikwad. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
