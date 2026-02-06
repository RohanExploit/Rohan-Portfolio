"use client";

import { ROHAN_DATA } from "@/lib/portfolio-data";
import Image from "next/image";
import { Github } from "lucide-react";
import { useState } from "react";

const projectImages: { [key: number]: string } = {
  1: "/projects/vishwaguru.jpg",
  2: "/projects/baliraj.jpg",
  3: "/projects/heart-disease.jpg",
  4: "/projects/mushroom-classification.jpg",
  5: "/projects/amazon-analytics.jpg",
};

export default function Projects() {
  const { projects } = ROHAN_DATA;
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-obsidian">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-sm text-github-green">/projects</p>
          <h1 className="mt-2 font-mono text-4xl font-bold text-text-primary">
            Featured Projects
          </h1>
          <p className="mt-4 text-text-secondary">
            A selection of projects spanning full-stack development, AI/ML, and
            open-source contributions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg border border-slate-600 bg-steel transition-all duration-300 hover:border-accent-secondary"
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
                <Image
                  src={projectImages[project.id]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-mono text-2xl font-bold text-text-primary group-hover:text-accent-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-github-green font-semibold">
                      {project.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setExpandedId(
                        expandedId === project.id ? null : project.id,
                      )
                    }
                    className="ml-4 h-8 w-8 flex items-center justify-center text-text-secondary hover:text-accent-secondary transition-colors"
                    aria-label="Toggle details"
                  >
                    {expandedId === project.id ? "−" : "+"}
                  </button>
                </div>

                {/* Main Description */}
                <p className="mt-4 text-text-secondary leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block rounded-full border border-github-green/40 bg-github-green/10 px-3 py-1 font-mono text-xs text-github-green font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expanded Content */}
                {expandedId === project.id && (
                  <div className="space-y-6 border-t border-slate-600 pt-6 mt-6">
                    <div>
                      <h4 className="font-mono font-semibold text-github-green mb-3 text-lg">
                        Full Description
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        {project.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono font-semibold text-github-green mb-3 text-lg">
                        Key Features
                      </h4>
                      <ul className="space-y-2 text-text-secondary">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="text-github-green flex-shrink-0">
                              ✓
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-mono font-semibold text-github-green mb-3 text-lg">
                        Impact
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        {project.impact}
                      </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-github-green bg-github-green/10 px-4 py-2 font-mono text-sm font-semibold text-github-green transition-all duration-300 hover:bg-github-green/20"
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-6 border-t border-slate-600 pt-12 md:grid-cols-3">
          {[
            { label: "Projects", value: "5+", color: "text-github-green" },
            {
              label: "Contributions",
              value: "Open Source",
              color: "text-info",
            },
            {
              label: "Focus",
              value: "AI & Full-Stack",
              color: "text-github-green",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-600 bg-steel p-6 text-center transition-all duration-300 hover:border-github-green"
            >
              <p className="font-mono text-sm text-github-green">
                {stat.label}
              </p>
              <p className={`mt-2 font-mono text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
