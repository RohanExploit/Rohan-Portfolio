import { ROHAN_DATA } from "@/lib/portfolio-data";
import { Briefcase } from "lucide-react";

export const metadata = {
  title: "Experience - Rohan Gaikwad",
  description: "Professional experience and career journey.",
};

export default function Experience() {
  const { experience } = ROHAN_DATA;

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-github-green/10 text-github-green";
      case "Leadership":
        return "bg-github-green/10 text-github-green";
      case "Open Source":
        return "bg-info/10 text-info";
      case "Project-Based":
        return "bg-accent-secondary/10 text-accent-secondary";
      case "Mentorship":
        return "bg-github-green/10 text-github-green";
      default:
        return "bg-github-green/10 text-github-green";
    }
  };

  return (
    <div className="min-h-screen bg-obsidian">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-sm text-github-green">/experience</p>
          <h1 className="mt-2 font-mono text-4xl font-bold text-text-primary">
            Professional Journey
          </h1>
          <p className="mt-4 text-text-secondary">
            1.5+ years of diverse experience across internships, leadership
            roles, and open-source contributions.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={job.id} className="relative">
              {/* Timeline Line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-[2px] bg-gradient-to-b from-github-green to-transparent" />
              )}

              {/* Experience Card */}
              <div className="rounded-lg border border-slate-600 bg-steel p-6 ml-0 md:ml-0">
                {/* Header */}
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-github-green bg-github-green/10">
                        <Briefcase className="h-6 w-6 text-github-green" />
                      </div>
                    </div>

                    {/* Title and Company */}
                    <div>
                      <h3 className="font-mono text-lg font-bold text-text-primary">
                        {job.title}
                      </h3>
                      <p className="text-accent">{job.company}</p>
                      <p className="text-sm text-text-tertiary mt-1">
                        {job.period}
                      </p>
                    </div>
                  </div>

                  {/* Type Badge */}
                  <span
                    className={`inline-block px-3 py-1 rounded-full font-mono text-xs font-semibold whitespace-nowrap ${getTypeColor(job.type)}`}
                  >
                    {job.type}
                  </span>
                </div>

                {/* Description */}
                <div className="mt-6">
                  <ul className="space-y-2">
                    {job.description.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-sm text-text-secondary"
                      >
                        <span className="text-accent flex-shrink-0 mt-1">
                          ▪
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-block rounded-full border border-accent/20 px-2 py-1 font-mono text-xs text-text-secondary"
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
        <div className="mt-16 rounded-lg border border-slate-600 bg-steel p-8">
          <h2 className="font-mono text-2xl font-bold text-text-primary">
            Career Highlights
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              {
                label: "Total Experience",
                value: "1.5+ Years",
              },
              {
                label: "Roles Held",
                value: "Developer, Mentor, Analyst",
              },
              {
                label: "Focus Areas",
                value: "Full-Stack, AI/ML, Leadership",
              },
              {
                label: "Current Focus",
                value: "Open Source & Mentorship",
              },
            ].map((item, index) => (
              <div key={index}>
                <p className="font-mono text-xs uppercase text-accent">
                  {item.label}
                </p>
                <p className="mt-2 font-mono text-lg font-semibold text-text-primary">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
