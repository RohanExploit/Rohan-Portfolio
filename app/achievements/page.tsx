import { ROHAN_DATA } from '@/lib/portfolio-data'
import { Award, Trophy, Star, Zap } from 'lucide-react'

export const metadata = {
  title: 'Achievements - Rohan Gaikwad',
  description: 'Certifications, awards, and recognitions.',
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'Certification':
      return <Award className="h-6 w-6" />
    case 'Award':
      return <Trophy className="h-6 w-6" />
    case 'Program':
      return <Star className="h-6 w-6" />
    default:
      return <Zap className="h-6 w-6" />
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Certification':
      return 'border-accent bg-accent/10'
    case 'Award':
      return 'border-yellow-500 bg-yellow-500/10'
    case 'Program':
      return 'border-purple-400 bg-purple-500/10'
    default:
      return 'border-accent bg-accent/10'
  }
}

export default function Achievements() {
  const { achievements } = ROHAN_DATA

  const certifications = achievements.filter((a) => a.type === 'Certification')
  const programs = achievements.filter((a) => a.type === 'Program')
  const awards = achievements.filter((a) => a.type === 'Award')

  return (
    <div className="min-h-screen bg-obsidian">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-sm text-accent">/achievements</p>
          <h1 className="mt-2 font-mono text-4xl font-bold text-text-primary">Certifications & Recognition</h1>
          <p className="mt-4 text-text-secondary">
            Professional certifications, program achievements, and industry recognition.
          </p>
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="mb-16">
            <h2 className="mb-6 font-mono text-2xl font-bold text-text-primary">Professional Certifications</h2>
            <div className="space-y-4">
              {certifications.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`flex gap-4 rounded-lg border p-6 transition-all duration-300 ${getTypeColor(achievement.type)} hover:scale-105`}
                >
                  <div className="flex-shrink-0 text-accent">{getTypeIcon(achievement.type)}</div>
                  <div className="flex-1">
                    <h3 className="font-mono font-bold text-text-primary">{achievement.title}</h3>
                    <p className="mt-1 text-sm text-text-secondary">{achievement.issuer}</p>
                    <p className="mt-2 font-mono text-xs text-text-tertiary">{achievement.date}</p>
                    <p className="mt-2 text-sm text-text-secondary">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Programs & Leadership */}
        {programs.length > 0 && (
          <div className="mb-16">
            <h2 className="mb-6 font-mono text-2xl font-bold text-text-primary">Programs & Leadership</h2>
            <div className="space-y-4">
              {programs.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`flex gap-4 rounded-lg border p-6 transition-all duration-300 ${getTypeColor(achievement.type)} hover:scale-105`}
                >
                  <div className="flex-shrink-0 text-accent">{getTypeIcon(achievement.type)}</div>
                  <div className="flex-1">
                    <h3 className="font-mono font-bold text-text-primary">{achievement.title}</h3>
                    <p className="mt-1 text-sm text-text-secondary">{achievement.issuer}</p>
                    <p className="mt-2 font-mono text-xs text-text-tertiary">{achievement.date}</p>
                    <p className="mt-2 text-sm text-text-secondary">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="rounded-lg border border-slate-600 bg-steel p-8">
          <h2 className="mb-6 font-mono text-2xl font-bold text-text-primary">Recognition Summary</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: 'Certifications', count: certifications.length },
              { label: 'Programs', count: programs.length },
              { label: 'Total Achievements', count: achievements.length },
            ].map((stat, index) => (
              <div key={index} className="rounded-lg border border-accent/20 bg-accent/5 p-6 text-center">
                <p className="font-mono text-3xl font-bold text-accent">{stat.count}</p>
                <p className="mt-2 font-mono text-sm text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        {ROHAN_DATA.testimonials.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 font-mono text-2xl font-bold text-text-primary">Recognition</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {ROHAN_DATA.testimonials.map((testimonial) => (
                <div key={testimonial.id} className="rounded-lg border border-slate-600 bg-steel p-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="italic text-text-secondary">{`"${testimonial.quote}"`}</p>
                  <p className="mt-4 font-mono text-sm text-accent">{testimonial.author}</p>
                  <p className="text-xs text-text-tertiary">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
