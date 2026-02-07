'use client'

import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail, Twitter, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ROHAN_DATA } from '@/lib/portfolio-data'

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div>
                <p className="font-mono text-sm text-github-green font-semibold tracking-wider uppercase">Welcome to my portfolio</p>
                <h1 className="mt-4 font-mono text-5xl font-bold text-text-primary sm:text-7xl tracking-tighter">
                  Rohan
                  <span className="block text-accent text-glow">Gaikwad</span>
                </h1>
              </div>

              <div className="h-8">
                {mounted && (
                  <p className="font-mono text-xl text-text-secondary transition-all duration-500 border-l-2 border-accent pl-4">
                    {roles[currentRole]}
                  </p>
                )}
              </div>

              <p className="max-w-lg text-lg text-text-secondary leading-relaxed">
                Building scalable software solutions with a focus on <span className="text-text-primary font-medium">AI, full-stack development</span>, and open-source impact.
                Currently interning at Destiny Solutions and mentoring at Elite Coders.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/projects"
                  className="btn-primary"
                >
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={ROHAN_DATA.contact.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Download Resume
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 pt-6 items-center">
                <a href="https://github.com/RohanExploit" target="_blank" className="text-text-tertiary hover:text-accent transition-all hover:scale-110"><Github className="h-6 w-6" /></a>
                <a href="https://linkedin.com/in/rohanvijaygaikwad" target="_blank" className="text-text-tertiary hover:text-info transition-all hover:scale-110"><Linkedin className="h-6 w-6" /></a>
                <a href="https://x.com/rohan_critic" target="_blank" className="text-text-tertiary hover:text-accent-secondary transition-all hover:scale-110"><Twitter className="h-6 w-6" /></a>
                <a href={`mailto:${ROHAN_DATA.contact.email}`} className="text-text-tertiary hover:text-error transition-all hover:scale-110"><Mail className="h-6 w-6" /></a>
              </div>
            </div>
          </div>

          {/* Right Side - Stats/Highlights */}
          <div className="flex flex-col justify-center gap-6 animate-in fade-in slide-in-from-right duration-700">
            <div className="glass-card hover-lift p-8 group">
              <p className="font-mono text-xs uppercase text-accent font-bold tracking-widest">Experience</p>
              <h3 className="mt-2 font-mono text-3xl font-bold text-text-primary group-hover:text-accent transition-colors">1.5+ Years</h3>
              <p className="mt-2 text-text-secondary leading-relaxed">
                Across internships, open-source contributions, and leadership roles
              </p>
            </div>

            <div className="glass-card hover-lift p-8 group">
              <p className="font-mono text-xs uppercase text-info font-bold tracking-widest">Projects</p>
              <h3 className="mt-2 font-mono text-3xl font-bold text-text-primary group-hover:text-info transition-colors">15+</h3>
              <p className="mt-2 text-text-secondary leading-relaxed">
                From AI models to full-stack web applications
              </p>
            </div>

            <div className="glass-card hover-lift p-8 group">
              <p className="font-mono text-xs uppercase text-accent font-bold tracking-widest">Tech Stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Python', 'React', 'TypeScript', 'Docker', 'ML'].map((tech) => (
                  <span
                    key={tech}
                    className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 font-mono text-xs text-accent font-semibold transition-all hover:bg-accent/10"
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
      <div className="border-y border-border bg-surface/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-mono text-4xl font-bold text-text-primary tracking-tight">Featured Areas</h2>
            <div className="mt-4 h-1 w-20 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Projects',
                description: 'Explore my portfolio of full-stack applications, AI models, and open-source contributions.',
                href: '/projects',
                icon: '◊',
                color: 'text-accent',
                borderColor: 'group-hover:border-accent',
              },
              {
                title: 'Experience',
                description: 'My journey through internships, mentorship, and professional development.',
                href: '/experience',
                icon: '▪',
                color: 'text-info',
                borderColor: 'group-hover:border-info',
              },
              {
                title: 'Certifications',
                description: 'Professional credentials and program participation demonstrating continuous learning.',
                href: '/certifications',
                icon: '★',
                color: 'text-accent-secondary',
                borderColor: 'group-hover:border-accent-secondary',
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`group glass-card p-8 flex flex-col justify-between hover-lift border-transparent ${item.borderColor}`}
              >
                <div>
                  <div className={`text-3xl ${item.color} mb-6`}>{item.icon}</div>
                  <h3 className={`font-mono text-xl font-bold text-text-primary group-hover:${item.color} transition-colors`}>
                    {item.title}
                  </h3>
                  <p className="mt-4 text-text-secondary leading-relaxed">{item.description}</p>
                </div>
                <div className={`mt-8 flex items-center gap-2 text-sm font-bold ${item.color} opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0`}>
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
