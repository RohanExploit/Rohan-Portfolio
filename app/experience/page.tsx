import { ROHAN_DATA } from '@/lib/portfolio-data'
import { Briefcase } from 'lucide-react'

export const metadata = {
  title: 'Experience - Rohan Gaikwad',
  description: 'Professional experience and career journey.',
}

export default function Experience() {
  const { experience } = ROHAN_DATA

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-github-green/10 text-github-green'
      case 'Leadership':
        return 'bg-github-green/10 text-github-green'
      case 'Open Source':
        return 'bg-info/10 text-info'
      case 'Project-Based':
        return 'bg-accent-secondary/10 text-accent-secondary'
      case 'Mentorship':
        return 'bg-github-green/10 text-github-green'
      default:
        return 'bg-github-green/10 text-github-green'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-accent uppercase tracking-widest font-bold">/experience</p>
          <h1 className="mt-2 font-mono text-5xl font-bold text-text-primary">Work & Leadership</h1>
          <p className="mt-6 text-xl text-text-secondary leading-relaxed max-w-2xl">
            1.5+ years of diverse experience building software, leading communities, and contributing to open-source ecosystems.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={job.id} className="relative group">
              {/* Timeline Line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-8 top-20 bottom-[-48px] w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent z-0" />
              )}

              {/* Experience Card */}
              <div className="glass-card p-8 ml-0 relative z-10 transition-all duration-500 hover:border-accent">
                {/* Header */}
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                        <Briefcase className="h-8 w-8" />
                      </div>
                    </div>

                    {/* Title and Company */}
                    <div>
                      <h3 className="font-mono text-2xl font-bold text-text-primary group-hover:text-glow transition-all">
                        {job.title}
                      </h3>
                      <p className="text-accent text-lg font-bold">{job.company}</p>
                      <p className="font-mono text-sm text-text-tertiary mt-2 flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-accent"></span>
                        {job.period}
                      </p>
                    </div>
                  </div>

                  {/* Type Badge */}
                  <span className={`inline-block px-4 py-1.5 rounded-full font-mono text-xs font-bold uppercase tracking-widest ${getTypeColor(job.type)} border border-current opacity-80`}>
                    {job.type}
                  </span>
                </div>

                {/* Description */}
                <div className="mt-8">
                  <ul className="space-y-4">
                    {job.description.map((point, idx) => (
                      <li key={idx} className="flex gap-4 text-md text-text-secondary leading-relaxed">
                        <span className="text-accent font-bold mt-1 text-lg">›</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {job.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-block rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs font-bold text-text-secondary transition-colors hover:border-accent hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-20 glass-card p-10 border-accent/20">
          <h2 className="font-mono text-3xl font-bold text-text-primary mb-10">Career Highlights</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Total XP', value: '1.5+ Years' },
              { label: 'Roles', value: 'Dev & Mentor' },
              { label: 'Focus', value: 'AI & Fullstack' },
              { label: 'Current', value: 'Open Source' },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <p className="font-mono text-xs uppercase text-accent tracking-widest font-bold">{item.label}</p>
                <p className="font-mono text-xl font-bold text-text-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
