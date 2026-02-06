import { ROHAN_DATA } from "@/lib/portfolio-data";
import { Code2 } from "lucide-react";
import { TechTimeline } from "@/app/components/tech-timeline";

export const metadata = {
  title: "Skills - Rohan Gaikwad",
  description: "Technical skills and expertise.",
};

export default function Skills() {
  const { skills } = ROHAN_DATA;

  return (
    <div className="min-h-screen bg-obsidian">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-sm text-github-green">/skills</p>
          <h1 className="mt-2 font-mono text-4xl font-bold text-text-primary">
            Tech Stack & Expertise
          </h1>
          <p className="mt-4 text-text-secondary">
            Proficient across full-stack development, AI/ML, and DevOps with a
            focus on scalable architecture and best practices.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h2 className="mb-8 font-mono text-2xl font-bold text-text-primary">
            Technical Skills
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.technical.map((skillGroup, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-600 bg-steel p-6 transition-all duration-300 hover:border-github-green"
              >
                <div className="mb-4 flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-github-green" />
                  <h3 className="font-mono font-bold text-github-green">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-block rounded-full border border-github-green/30 bg-github-green/5 px-3 py-1 font-mono text-sm text-github-green transition-all duration-300 hover:border-github-green hover:bg-github-green/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proficiency Levels */}
        <div className="mb-16 rounded-lg border border-slate-600 bg-steel p-8">
          <h2 className="mb-6 font-mono text-2xl font-bold text-text-primary">
            Proficiency Overview
          </h2>
          <div className="space-y-4">
            {[
              {
                skill: "Full-Stack Development",
                level: "Advanced",
                percentage: 85,
              },
              {
                skill: "Machine Learning & AI",
                level: "Intermediate",
                percentage: 75,
              },
              { skill: "System Design", level: "Intermediate", percentage: 70 },
              {
                skill: "DevOps & Deployment",
                level: "Intermediate",
                percentage: 65,
              },
              {
                skill: "Team Leadership",
                level: "Intermediate",
                percentage: 70,
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="mb-2 flex justify-between">
                  <span className="font-mono text-sm text-text-primary">
                    {item.skill}
                  </span>
                  <span className="text-xs text-text-tertiary">
                    {item.level}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-600">
                  <div
                    className="h-full bg-gradient-to-r from-github-green to-github-green-dark transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="rounded-lg border border-slate-600 bg-steel p-8">
          <h2 className="mb-6 font-mono text-2xl font-bold text-text-primary">
            Soft Skills
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {skills.soft.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border border-github-green/20 bg-github-green/5 p-4 transition-all duration-300 hover:border-github-green/40 hover:bg-github-green/10"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-github-green text-github-green">
                  ✓
                </div>
                <span className="font-mono text-sm text-text-primary">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="mt-16 rounded-lg border border-github-green/30 bg-github-green/5 p-8">
          <h2 className="mb-4 font-mono text-2xl font-bold text-github-green">
            Currently Exploring
          </h2>
          <div className="space-y-3">
            {[
              "Advanced AI/ML Architectures",
              "Distributed Systems",
              "Cloud-Native Development",
              "System Design at Scale",
            ].map((item, index) => (
              <p
                key={index}
                className="flex items-center gap-3 text-text-secondary"
              >
                <span className="text-github-green">→</span>
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Tech Timeline */}
        <div className="mt-16">
          <h2 className="mb-8 font-mono text-2xl font-bold text-text-primary">
            Learning Journey
          </h2>
          <TechTimeline />
        </div>
      </div>
    </div>
  );
}
