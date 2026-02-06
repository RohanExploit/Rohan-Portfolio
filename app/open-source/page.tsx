"use client";

import { ROHAN_DATA } from "@/lib/portfolio-data";
import { Github, ExternalLink, GitBranch, Users } from "lucide-react";

export default function OpenSource() {
  const { openSourceContributions } = ROHAN_DATA;

  return (
    <div className="min-h-screen bg-obsidian">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-github-green">/open-source</p>
          <h1 className="mt-2 font-mono text-4xl font-bold text-text-primary">
            Open Source Contributions
          </h1>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Active participation in global open-source initiatives with focus on
            system architecture, code quality, and developer mentorship.
          </p>
        </div>

        {/* Contributions Grid */}
        <div className="space-y-8">
          {openSourceContributions.map((contrib) => (
            <div
              key={contrib.id}
              className="group rounded-lg border border-slate-600 bg-steel transition-all duration-300 hover:border-github-green overflow-hidden"
            >
              {/* Header */}
              <div className="border-b border-slate-600 bg-gradient-to-r from-github-green/10 to-transparent p-8">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Github className="h-6 w-6 text-github-green" />
                      <h3 className="font-mono text-2xl font-bold text-text-primary group-hover:text-github-green transition-colors">
                        {contrib.name}
                      </h3>
                    </div>
                    <p className="mt-3 text-text-secondary">
                      {contrib.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Contributions */}
                <div className="mb-8">
                  <h4 className="mb-4 flex items-center gap-2 font-mono text-lg font-semibold text-github-green">
                    <GitBranch className="h-5 w-5" />
                    Key Contributions
                  </h4>
                  <ul className="space-y-3">
                    {contrib.contributions.map((contribution, idx) => (
                      <li key={idx} className="flex gap-3 text-text-secondary">
                        <span className="text-github-green flex-shrink-0">
                          →
                        </span>
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="mb-4 font-mono text-sm font-semibold text-github-green uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {contrib.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block rounded-full border border-github-green/40 bg-github-green/10 px-3 py-1 font-mono text-xs text-github-green font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <a
                  href={contrib.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-github-green bg-github-green/10 px-4 py-2 font-mono text-sm font-semibold text-github-green transition-all duration-300 hover:bg-github-green/20"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="mt-16 rounded-lg border border-slate-600 bg-steel p-12">
          <div className="mb-8 flex items-center gap-3">
            <Users className="h-6 w-6 text-github-green" />
            <h2 className="font-mono text-2xl font-bold text-text-primary">
              Community Impact
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                metric: "20+",
                label: "Junior Developers Mentored",
                description:
                  "Guided junior developers through implementation strategies and code reviews",
              },
              {
                metric: "50+",
                label: "Pull Requests Reviewed",
                description:
                  "Ensured code quality and architectural consistency across projects",
              },
              {
                metric: "100%",
                label: "Merged Contribution Rate",
                description:
                  "All contributed code merged successfully with positive community feedback",
              },
            ].map((impact, index) => (
              <div key={index} className="space-y-2">
                <p className="font-mono text-3xl font-bold text-github-green">
                  {impact.metric}
                </p>
                <h4 className="font-mono font-semibold text-text-primary">
                  {impact.label}
                </h4>
                <p className="text-sm text-text-secondary">
                  {impact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
