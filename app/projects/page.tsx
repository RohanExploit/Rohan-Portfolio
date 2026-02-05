'use client'

import { ROHAN_DATA } from '@/lib/portfolio-data'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function Projects() {
  const { projects } = ROHAN_DATA
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-obsidian">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-sm text-accent">/projects</p>
          <h1 className="mt-2 font-mono text-4xl font-bold text-text-primary">Featured Projects</h1>
          <p className="mt-4 text-text-secondary">A selection of projects spanning full-stack development, AI/ML, and open-source contributions.</p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg border border-slate-600 bg-steel p-6 transition-all duration-300 hover:border-accent"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-mono text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{project.subtitle}</p>
                </div>
                <button
                  onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                  className="ml-4 text-text-secondary hover:text-accent transition-colors"
                  aria-label="Toggle details"
                >
                  {expandedId === project.id ? '−' : '+'}
                </button>
              </div>

              {/* Main Description */}
              <p className="mt-4 text-text-secondary">{project.description}</p>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block rounded-full border border-accent/30 px-3 py-1 font-mono text-xs text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Expanded Content */}
              {expandedId === project.id && (
                <div className="mt-6 space-y-4 border-t border-slate-600 pt-6">
                  <div>
                    <h4 className="font-mono font-semibold text-accent mb-2">Full Description</h4>
                    <p className="text-sm text-text-secondary">{project.fullDescription}</p>
                  </div>

                  <div>
                    <h4 className="font-mono font-semibold text-accent mb-2">Key Features</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-accent">▪</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono font-semibold text-accent mb-2">Impact</h4>
                    <p className="text-sm text-text-secondary">{project.impact}</p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-6 border-t border-slate-600 pt-12 md:grid-cols-3">
          {[
            { label: 'Projects', value: '5+' },
            { label: 'Contributions', value: 'Open Source' },
            { label: 'Focus', value: 'AI & Full-Stack' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-mono text-sm text-accent">{stat.label}</p>
              <p className="mt-2 font-mono text-2xl font-bold text-text-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
