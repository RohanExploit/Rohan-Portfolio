'use client'

import { ROHAN_DATA } from '@/lib/portfolio-data'
import { Award, Calendar, Building2, ExternalLink } from 'lucide-react'
import Script from 'next/script'

export default function Certifications() {
  const { achievements } = ROHAN_DATA

  const certifications = achievements.filter(a => a.type === 'Certification')
  const programs = achievements.filter(a => a.type === 'Program')

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-accent uppercase tracking-widest font-bold">/certifications-awards</p>
          <h1 className="mt-2 font-mono text-5xl font-bold text-text-primary">Certifications & Programs</h1>
          <p className="mt-6 max-w-2xl text-lg text-text-secondary leading-relaxed">
            Professional credentials and continuous learning milestones validating technical expertise.
          </p>
        </div>

        {/* Verified Credentials (Credly) */}
        <div className="mb-20">
          <h2 className="mb-8 font-mono text-2xl font-bold text-text-primary flex items-center gap-4">
            <span className="h-px w-8 bg-accent"></span>
            Verified Credentials
          </h2>
          <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
            <div className="glass-card p-6 flex items-center justify-center bg-white/5">
              <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id="8c81a506-7025-49ba-90a4-f76c51c46962"
                data-share-badge-host="https://www.credly.com">
              </div>
            </div>
            <div className="glass-card p-6 flex items-center justify-center bg-white/5">
              <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id="5b571c09-e5a0-481f-8693-d428d1c0a4e7"
                data-share-badge-host="https://www.credly.com">
              </div>
            </div>
            <div className="glass-card p-6 flex items-center justify-center bg-white/5">
              <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id="0b56ed2a-f7e5-4b5b-989b-7b28d0a68732"
                data-share-badge-host="https://www.credly.com">
              </div>
            </div>
          </div>
          <Script
            type="text/javascript"
            async
            src="//cdn.credly.com/assets/utilities/embed.js"
            strategy="lazyOnload"
          />
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <h2 className="mb-8 font-mono text-2xl font-bold text-text-primary flex items-center gap-4">
            <span className="h-px w-8 bg-accent"></span>
            Professional Certifications
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group glass-card p-8 hover-lift flex flex-col h-full border-accent/20 hover:border-accent"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Award className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Building2 className="h-4 w-4 text-accent" />
                        <span className="font-semibold">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-text-secondary leading-relaxed text-sm">
                      {cert.description}
                    </p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                      >
                        Verify Credential <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Programs Section */}
        <div>
          <h2 className="mb-8 font-mono text-2xl font-bold text-text-primary flex items-center gap-4">
            <span className="h-px w-8 bg-accent"></span>
            Programs & Recognition
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group glass-card p-8 hover-lift flex flex-col h-full border-info/20 hover:border-info"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-info/10 text-info group-hover:bg-info group-hover:text-white transition-all duration-300">
                    <Award className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-xl font-bold text-text-primary group-hover:text-info transition-colors">
                      {program.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Building2 className="h-4 w-4 text-info" />
                        <span className="font-semibold">{program.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Calendar className="h-4 w-4 text-info" />
                        <span>{program.date}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-text-secondary leading-relaxed text-sm">
                      {program.description}
                    </p>
                    {program.link && (
                      <a
                        href={program.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-info hover:underline"
                      >
                        View Program <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20 grid gap-6 border-t border-border pt-12 md:grid-cols-4">
          {[
            { label: 'Total Certifications', value: certifications.length, icon: '★' },
            { label: 'Programs', value: programs.length, icon: '◆' },
            { label: 'Issuers', value: '8+', icon: '◈' },
            { label: 'Year Range', value: '2024-2025', icon: '📅' },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center hover-lift border-transparent hover:border-accent group"
            >
              <div className="mb-3 text-2xl text-accent opacity-50 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
              <p className="font-mono text-xs text-text-secondary uppercase tracking-widest font-bold">{stat.label}</p>
              <p className="mt-2 font-mono text-3xl font-bold text-text-primary group-hover:text-glow transition-all">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
