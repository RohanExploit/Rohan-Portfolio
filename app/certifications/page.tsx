'use client'

import { ROHAN_DATA } from '@/lib/portfolio-data'
import { Award, Calendar, Building2 } from 'lucide-react'

export default function Certifications() {
  const { achievements } = ROHAN_DATA

  const certifications = achievements.filter(a => a.type === 'Certification')
  const programs = achievements.filter(a => a.type === 'Program')

  return (
    <div className="min-h-screen bg-obsidian">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-github-green">/certifications-awards</p>
          <h1 className="mt-2 font-mono text-4xl font-bold text-text-primary">Certifications & Programs</h1>
          <p className="mt-4 max-w-2xl text-text-secondary">Professional credentials and program participation demonstrating continuous learning and expertise development.</p>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h2 className="mb-8 font-mono text-2xl font-bold text-text-primary">Professional Certifications</h2>
          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group rounded-lg border border-slate-600 bg-steel p-8 transition-all duration-300 hover:border-github-green hover:bg-steel"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-github-green/20">
                    <Award className="h-6 w-6 text-github-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-xl font-bold text-text-primary group-hover:text-github-green transition-colors">
                      {cert.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <Building2 className="h-4 w-4 text-github-green" />
                        <span className="font-semibold text-github-green">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <Calendar className="h-4 w-4 text-github-green" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-text-secondary">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Programs Section */}
        <div>
          <h2 className="mb-8 font-mono text-2xl font-bold text-text-primary">Programs & Recognition</h2>
          <div className="grid gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group rounded-lg border border-slate-600 bg-steel p-8 transition-all duration-300 hover:border-info hover:bg-steel"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-info/20">
                    <Award className="h-6 w-6 text-info" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-xl font-bold text-text-primary group-hover:text-info transition-colors">
                      {program.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <Building2 className="h-4 w-4 text-info" />
                        <span className="font-semibold text-info">{program.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <Calendar className="h-4 w-4 text-info" />
                        <span>{program.date}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-text-secondary">{program.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid gap-6 border-t border-slate-600 pt-12 md:grid-cols-4">
          {[
            { label: 'Total Certifications', value: certifications.length },
            { label: 'Programs', value: programs.length },
            { label: 'Issuers', value: '8+' },
            { label: 'Year Range', value: '2024-2025' },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-600 bg-steel p-6 text-center transition-all duration-300 hover:border-github-green"
            >
              <p className="font-mono text-sm text-github-green">{stat.label}</p>
              <p className="mt-2 font-mono text-2xl font-bold text-text-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
