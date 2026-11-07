"use client";

import { ROHAN_DATA } from "@/lib/portfolio-data";
import Image from "next/image";
import { Github, ExternalLink, Sparkles, Award } from "lucide-react";
import { useState } from "react";

const projectImages: { [key: number]: string } = {
  1: "/projects/khoj.jpg",
  2: "/projects/qdarpan.jpg",
  3: "/projects/compliancemind.jpg",
  4: "/projects/ckd-digital-twin.jpg",
  5: "/projects/campus-brain.jpg",
  6: "/projects/vishwaguru.jpg",
  7: "/projects/kaggle-s6e10.jpg",
  8: "/projects/quantensor.jpg",
};

export default function Projects() {
  const { projects } = ROHAN_DATA;
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 animate-in fade-in slide-in-from-top duration-700">
          <p className="font-mono text-sm text-accent uppercase tracking-widest font-bold">
            /engineering-showcase
          </p>
          <h1 className="mt-4 font-mono text-5xl font-bold text-text-primary tracking-tighter">
            Top Tier & Award-Winning Projects
          </h1>
          <p className="mt-6 text-xl text-text-secondary max-w-3xl leading-relaxed">
            Production systems, hackathon-winning architectures, and competitive
            ML pipelines — from privacy-first edge AI to enterprise post-quantum
            discovery and autonomous multi-agent workspaces.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project: any, idx) => (
            <div
              key={project.id}
              className="group overflow-hidden glass-card hover-lift animate-in fade-in slide-in-from-bottom duration-700 border-border hover:border-accent/50"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="relative h-72 lg:h-auto lg:w-2/5 overflow-hidden bg-surface-alt">
                  <Image
                    src={project.image || projectImages[project.id] || "/projects/khoj.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8 lg:p-12">
                  {/* Badge */}
                  {project.badge && (
                    <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-mono font-bold text-amber-400">
                      <Award className="h-3.5 w-3.5" />
                      {project.badge}
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-mono text-2xl sm:text-3xl font-bold text-text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm font-bold text-accent tracking-wider uppercase font-mono">
                        {project.subtitle}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setExpandedId(
                          expandedId === project.id ? null : project.id
                        )
                      }
                      className="h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent transition-all transform hover:rotate-90 font-mono text-lg"
                      aria-label="Toggle details"
                    >
                      {expandedId === project.id ? "−" : "+"}
                    </button>
                  </div>

                  <p className="mt-6 text-text-secondary leading-relaxed text-base sm:text-lg">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="inline-block rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1 font-mono text-xs text-accent font-semibold transition-all hover:bg-accent/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-border/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-surface border border-border px-4 py-2 font-mono text-xs font-semibold text-text-primary hover:border-accent hover:text-accent transition-all"
                    >
                      <Github className="h-4 w-4" />
                      Repository
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-mono text-xs font-semibold text-white hover:bg-accent-dark transition-all shadow-md shadow-accent/20"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Production App
                      </a>
                    )}
                    <button
                      onClick={() =>
                        setExpandedId(
                          expandedId === project.id ? null : project.id
                        )
                      }
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-text-tertiary hover:text-accent transition-colors ml-auto"
                    >
                      {expandedId === project.id ? "Show less" : "Full architecture & features →"}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {expandedId === project.id && (
                    <div className="space-y-8 border-t border-border pt-8 mt-8 animate-in fade-in slide-in-from-top duration-500">
                      <div>
                        <h4 className="font-mono font-bold text-accent mb-3 text-xs uppercase tracking-widest">
                          Full Architecture & Specifications
                        </h4>
                        <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                          {project.fullDescription}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-mono font-bold text-accent mb-3 text-xs uppercase tracking-widest">
                            Key Architectural Highlights
                          </h4>
                          <ul className="space-y-2.5 text-text-secondary">
                            {project.features.map((feature: string, fIdx: number) => (
                              <li key={fIdx} className="flex gap-2.5 items-start">
                                <span className="text-accent text-sm">✦</span>
                                <span className="text-xs sm:text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-mono font-bold text-accent mb-3 text-xs uppercase tracking-widest">
                            Real-World Impact
                          </h4>
                          <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
                            <p className="text-text-primary leading-relaxed text-xs sm:text-sm italic">
                              &ldquo;{project.impact}&rdquo;
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Metrics */}
        <div className="mt-24 grid gap-8 border-t border-border pt-16 md:grid-cols-3">
          {[
            { label: "Top-Tier Production Projects", value: "8+", icon: "◊" },
            { label: "Hackathon & Benchmark Wins", value: "1st Place", icon: "★" },
            { label: "Kaggle Global Ranking Score", value: "0.96225", icon: "▪" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center hover-lift group border-border hover:border-accent"
            >
              <div className="text-accent text-2xl mb-3 opacity-60">
                {stat.icon}
              </div>
              <p className="font-mono text-xs text-text-secondary uppercase tracking-widest font-bold">
                {stat.label}
              </p>
              <p className="mt-3 font-mono text-3xl font-bold text-text-primary group-hover:text-accent transition-all">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
