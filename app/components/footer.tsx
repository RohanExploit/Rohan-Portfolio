import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter, Phone } from 'lucide-react'
import { ROHAN_DATA } from '@/lib/portfolio-data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface/50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4 lg:gap-16">
          {/* Logo & About */}
          <div className="col-span-2 space-y-6">
            <Link href="/" className="font-mono text-2xl font-bold tracking-tighter text-text-primary">
              ROHAN<span className="text-accent">.</span>
            </Link>
            <p className="max-w-md text-text-secondary leading-relaxed">
              Full-stack developer and AI enthusiast dedicated to building scalable solutions and contributing to the open-source community. Based in Satara, Maharashtra.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-mono text-sm font-bold text-accent uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-3">
              {[
                { name: 'Projects', href: '/projects' },
                { name: 'Experience', href: '/experience' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="font-mono text-sm font-bold text-accent uppercase tracking-widest">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Github className="h-5 w-5" />, href: "https://github.com/RohanExploit", label: "GitHub" },
                { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/rohanvijaygaikwad", label: "LinkedIn" },
                { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/rohan_critic", label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-secondary transition-all hover:border-accent hover:text-accent hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-tertiary font-mono">
            © {currentYear} Rohan Gaikwad. Built with Next.js & Tailwind.
          </p>
          <p className="text-xs text-text-tertiary uppercase tracking-widest font-bold">
            Stay Focused. Keep Coding.
          </p>
        </div>
      </div>
    </footer>
  )
}
