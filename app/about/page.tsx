import { ROHAN_DATA } from '@/lib/portfolio-data'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'About - Rohan Gaikwad',
  description: 'Learn more about Rohan Gaikwad, a full-stack developer and AI enthusiast.',
}

export default function About() {
  const { about } = ROHAN_DATA

  return (
    <div className="min-h-screen bg-obsidian">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-sm text-github-green">/about</p>
          <h1 className="mt-2 font-mono text-4xl font-bold text-text-primary">{about.title}</h1>
        </div>

        {/* Introduction */}
        <div className="mb-16 space-y-6">
          <p className="text-lg text-text-secondary">{about.intro}</p>

          {about.bio.map((paragraph, index) => (
            <p key={index} className="text-text-secondary">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {about.highlights.map((item, index) => (
            <div key={index} className="rounded-lg border border-slate-600 bg-steel p-6 transition-all duration-300 hover:border-github-green">
              <p className="font-mono text-xs uppercase text-github-green">{item.label}</p>
              <p className="mt-3 font-mono text-lg font-semibold text-text-primary">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-16 rounded-lg border border-slate-600 bg-steel p-8">
          <h2 className="font-mono text-2xl font-bold text-text-primary">Core Values</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Impact-Driven',
                description: 'Building technology that solves real-world problems and creates meaningful change.',
              },
              {
                title: 'Continuous Learning',
                description: 'Always expanding expertise through challenging projects and emerging technologies.',
              },
              {
                title: 'Community First',
                description: 'Contributing to open-source and mentoring the next generation of developers.',
              },
            ].map((value, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-mono font-semibold text-github-green">{value.title}</h3>
                <p className="text-sm text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-github-green bg-github-green px-6 py-3 font-mono text-sm font-semibold text-obsidian transition-all duration-300 hover:bg-github-green-dark hover:border-github-green-dark"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 font-mono text-sm font-semibold text-github-green transition-all duration-300 hover:border-github-green hover:bg-github-green/10"
          >
            Connect
          </Link>
        </div>
      </div>
    </div>
  )
}
