'use client'

import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const roles = ['Developer', 'AI Enthusiast', 'Open Source Contributor']
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [mounted])

  return (
    <div className="min-h-screen bg-obsidian">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <p className="font-mono text-sm text-accent">Welcome to my portfolio</p>
                <h1 className="mt-4 font-mono text-4xl font-bold text-text-primary sm:text-5xl">
                  Rohan
                  <span className="block text-accent">Gaikwad</span>
                </h1>
              </div>

              <div className="h-12">
                {mounted && (
                  <p className="font-mono text-lg text-text-secondary transition-opacity duration-500">
                    {roles[currentRole]}
                  </p>
                )}
              </div>

              <p className="max-w-lg text-text-secondary">
                Building scalable software solutions with a focus on AI, full-stack development, and open-source impact.
                Currently interning at Destiny Solutions and mentoring at Elite Coders.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent px-6 py-3 font-mono text-sm font-semibold text-obsidian transition-all duration-300 hover:bg-accent-dark hover:border-accent-dark"
                >
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 font-mono text-sm font-semibold text-accent transition-all duration-300 hover:border-accent hover:bg-accent/10"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/RohanExploit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/rohanvijaygaikwad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:rohan@example.com"
                  className="text-text-secondary hover:text-accent transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Stats/Highlights */}
          <div className="flex flex-col justify-center gap-6">
            <div className="rounded-lg border border-slate-600 bg-steel p-6">
              <p className="font-mono text-xs uppercase text-accent">Experience</p>
              <h3 className="mt-2 font-mono text-2xl font-bold text-text-primary">1.5+ Years</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Across internships, open-source contributions, and leadership roles
              </p>
            </div>

            <div className="rounded-lg border border-slate-600 bg-steel p-6">
              <p className="font-mono text-xs uppercase text-accent">Projects</p>
              <h3 className="mt-2 font-mono text-2xl font-bold text-text-primary">15+</h3>
              <p className="mt-2 text-sm text-text-secondary">
                From AI models to full-stack web applications
              </p>
            </div>

            <div className="rounded-lg border border-slate-600 bg-steel p-6">
              <p className="font-mono text-xs uppercase text-accent">Tech Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Python', 'React', 'TypeScript', 'Docker', 'ML'].map((tech) => (
                  <span
                    key={tech}
                    className="inline-block rounded-full border border-accent/30 px-3 py-1 font-mono text-xs text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="border-t border-slate-600 bg-steel py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-mono text-3xl font-bold text-text-primary">Featured Areas</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Projects',
                description: 'Explore my portfolio of full-stack applications, AI models, and open-source contributions.',
                href: '/projects',
                icon: '◊',
              },
              {
                title: 'Experience',
                description: 'My journey through internships, mentorship, and professional development.',
                href: '/experience',
                icon: '▪',
              },
              {
                title: 'Skills',
                description: 'Technical expertise across full-stack development, AI/ML, and DevOps.',
                href: '/skills',
                icon: '■',
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group rounded-lg border border-slate-600 bg-obsidian p-6 transition-all duration-300 hover:border-accent hover:bg-steel"
              >
                <div className="text-2xl text-accent">{item.icon}</div>
                <h3 className="mt-4 font-mono text-lg font-bold text-text-primary group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Explore <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
