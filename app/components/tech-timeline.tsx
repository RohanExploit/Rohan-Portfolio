import { Code2, Zap, Brain, Package } from 'lucide-react'

export function TechTimeline() {
  const timeline = [
    {
      period: '2023-2024',
      icon: Code2,
      title: 'Foundation',
      techs: ['Python', 'JavaScript', 'React', 'SQL'],
      description: 'Started with web fundamentals and data analysis',
    },
    {
      period: '2024-2025',
      icon: Brain,
      title: 'AI & ML Specialization',
      techs: ['TensorFlow', 'Scikit-Learn', 'Pandas', 'Data Science'],
      description: 'Deep dive into machine learning and AI models',
    },
    {
      period: '2025-Present',
      icon: Zap,
      title: 'Full-Stack Mastery',
      techs: ['Next.js', 'TypeScript', 'Docker', 'System Design'],
      description: 'Building scalable systems and leading projects',
    },
    {
      period: 'Future',
      icon: Package,
      title: 'Advanced Architecture',
      techs: ['Distributed Systems', 'Cloud Native', 'LLMs'],
      description: 'Exploring cutting-edge technologies and patterns',
    },
  ]

  return (
    <div className="space-y-8">
      {timeline.map((item, index) => {
        const Icon = item.icon
        return (
          <div key={index} className="relative pl-6 md:pl-24">
            {/* Timeline dot and line */}
            <div className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-obsidian">
              <div className="h-2 w-2 rounded-full bg-accent" />
            </div>
            {index !== timeline.length - 1 && (
              <div className="absolute left-3 top-10 bottom-0 w-[2px] bg-gradient-to-b from-accent to-transparent md:left-11" />
            )}

            {/* Content */}
            <div className="rounded-lg border border-slate-600 bg-steel p-4">
              <div className="flex items-start gap-3">
                <Icon className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="font-mono text-xs uppercase text-accent">{item.period}</p>
                  <h3 className="mt-1 font-mono font-bold text-text-primary">{item.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.techs.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block rounded-full border border-accent/30 px-2 py-1 font-mono text-xs text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
