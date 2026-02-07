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
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-accent uppercase tracking-widest font-bold">/achievements</p>
          <h1 className="mt-2 font-mono text-5xl font-bold text-text-primary">Certifications & Trophies</h1>
          <p className="mt-6 text-xl text-text-secondary leading-relaxed max-w-2xl">
            A testament to continuous learning, community participation, and technical excellence.
          </p>
        </div>

        {/* Certifications Grid */}
        {certifications.length > 0 && (
          <div className="mb-20">
            <h2 className="mb-10 font-mono text-2xl font-bold text-text-primary flex items-center gap-4">
              <span className="h-px w-8 bg-accent"></span>
              Professional Certifications
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {certifications.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`flex gap-6 glass-card p-8 transition-all duration-500 hover-lift border-accent/30 hover:border-accent`}
                >
                  <div className="flex-shrink-0 text-accent bg-accent/10 h-14 w-14 rounded-2xl flex items-center justify-center">
                    {getTypeIcon(achievement.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-xl font-bold text-text-primary leading-tight group-hover:text-glow transition-all">
                      {achievement.title}
                    </h3>
                    <p className="mt-2 text-accent font-bold text-sm tracking-wide uppercase">{achievement.issuer}</p>
                    <p className="mt-1 font-mono text-xs text-text-tertiary flex items-center gap-2">
                      <Zap className="h-3 w-3" /> {achievement.date}
                    </p>
                    <p className="mt-4 text-sm text-text-secondary leading-relaxed line-clamp-3">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Programs & Leadership */}
        {programs.length > 0 && (
          <div className="mb-20">
            <h2 className="mb-10 font-mono text-2xl font-bold text-text-primary flex items-center gap-4">
              <span className="h-px w-8 bg-accent"></span>
              Programs & Leadership
            </h2>
            <div className="grid gap-6">
              {programs.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`flex flex-col md:flex-row gap-8 glass-card p-8 transition-all duration-500 hover:border-accent group`}
                >
                  <div className="flex-shrink-0 text-accent h-20 w-20 rounded-3xl bg-accent/5 flex items-center justify-center border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    {getTypeIcon(achievement.type)}
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <h3 className="font-mono text-2xl font-bold text-text-primary">{achievement.title}</h3>
                      <span className="font-mono text-xs text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/30 uppercase tracking-widest font-bold">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-accent font-bold text-lg">{achievement.issuer}</p>
                    <p className="text-text-secondary leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recognition Stats */}
        <div className="grid gap-6 md:grid-cols-3 mb-20">
          {[
            { label: 'Verified Certs', count: certifications.length },
            { label: 'Global Programs', count: programs.length },
            { label: 'Total Honors', count: achievements.length },
          ].map((stat, index) => (
            <div key={index} className="glass-card p-10 text-center hover-lift border-accent/10 hover:border-accent">
              <p className="font-mono text-5xl font-bold text-accent mb-2">{stat.count}</p>
              <p className="font-mono text-sm text-text-secondary uppercase tracking-widest font-bold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        {ROHAN_DATA.testimonials.length > 0 && (
          <div className="mt-20">
            <h2 className="mb-10 font-mono text-3xl font-bold text-text-primary text-center">Global Recognition</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {ROHAN_DATA.testimonials.map((testimonial) => (
                <div key={testimonial.id} className="glass-card p-10 relative overflow-hidden group">
                  <div className="absolute top-4 right-8 text-8xl text-accent/5 font-serif select-none">"</div>
                  <div className="relative z-10">
                    <div className="mb-6 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                      ))}
                    </div>
                    <p className="text-lg italic text-text-secondary leading-relaxed mb-8">{`"${testimonial.quote}"`}</p>
                    <div className="border-l-4 border-accent pl-6">
                      <p className="font-mono text-lg font-bold text-text-primary group-hover:text-glow transition-all">{testimonial.author}</p>
                      <p className="text-sm text-accent font-bold uppercase tracking-widest mt-1">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
