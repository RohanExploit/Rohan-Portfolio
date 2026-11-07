"use client";

import { ROHAN_DATA } from "@/lib/portfolio-data";
import Image from "next/image";
import { Github, ExternalLink, Award, Maximize2, X } from "lucide-react";
import { useState } from "react";

interface ProjectItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  github: string;
  link?: string;
  image?: string;
  badge?: string;
  features: string[];
  impact: string;
}

const projectImages: { [key: number]: string } = {
  1: "/projects/khoj.jpg",
  2: "/projects/adaptive-market.jpg",
  3: "/projects/qdarpan.jpg",
  4: "/projects/compliancemind.jpg",
  5: "/projects/ckd-digital-twin.jpg",
  6: "/projects/campus-brain.jpg",
  7: "/projects/vishwaguru.jpg",
  8: "/projects/kaggle-s6e10.jpg",
  9: "/projects/quantensor.jpg",
};

export default function Projects() {
  const projects = ROHAN_DATA.projects as ProjectItem[];
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [previewProject, setPreviewProject] = useState<ProjectItem | null>(
    null
  );

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 animate-in fade-in slide-in-from-top duration-700">
          <p className="font-mono text-sm text-accent uppercase tracking-widest font-bold">
            /systems-and-research
          </p>
          <h1 className="mt-4 font-mono text-5xl font-bold text-text-primary tracking-tighter">
            Engineering Systems &amp; Research
          </h1>
          <p className="mt-6 text-xl text-text-secondary max-w-3xl leading-relaxed">
            Production deployments, hackathon-winning architectures, and
            empirical machine learning pipelines — spanning non-biometric edge
            inference, post-quantum cryptography discovery, biomimetic memory
            agents, and quantitative market microstructure.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project: ProjectItem, idx: number) => {
            const imgSrc =
              project.image ||
              projectImages[project.id] ||
              "/projects/khoj.jpg";
            return (
              <div
                key={project.id}
                className="group overflow-hidden glass-card hover-lift animate-in fade-in slide-in-from-bottom duration-700 border-border hover:border-accent/50"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section — Full 16:10 Dashboard Viewport */}
                  <div
                    onClick={() => setPreviewProject(project)}
                    className="relative aspect-[16/10] w-full lg:w-[46%] lg:self-stretch overflow-hidden bg-[#090d16] cursor-pointer border-b lg:border-b-0 lg:border-r border-border/60 flex items-center justify-center"
                  >
                    <Image
                      src={imgSrc}
                      alt={project.title}
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 540px"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute bottom-3 right-3 rounded-md bg-black/80 border border-white/15 px-2.5 py-1 font-mono text-[11px] text-white/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 backdrop-blur-sm">
                      <Maximize2 className="h-3 w-3 text-accent" />
                      Inspect Full Screen
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8 lg:p-10">
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
                        className="h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent transition-all font-mono text-lg"
                        aria-label="Toggle details"
                      >
                        {expandedId === project.id ? "−" : "+"}
                      </button>
                    </div>

                    <p className="mt-5 text-text-secondary leading-relaxed text-base">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map(
                        (tech: string, index: number) => (
                          <span
                            key={index}
                            className="inline-block rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1 font-mono text-xs text-accent font-semibold transition-all hover:bg-accent/10"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>

                    {/* Actions Bar */}
                    <div className="mt-8 flex flex-wrap items-center gap-4 pt-4 border-t border-border/50">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-surface border border-border px-4 py-2 font-mono text-xs font-semibold text-text-primary hover:border-accent hover:text-accent transition-all"
                      >
                        <Github className="h-4 w-4" />
                        Source Code
                      </a>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-mono text-xs font-semibold text-white hover:bg-accent-dark transition-all shadow-md shadow-accent/20"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Deployment
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
                        {expandedId === project.id
                          ? "Hide specifications"
                          : "Architecture & specifications →"}
                      </button>
                    </div>

                    {/* Expanded Content */}
                    {expandedId === project.id && (
                      <div className="space-y-8 border-t border-border pt-8 mt-8 animate-in fade-in slide-in-from-top duration-500">
                        <div>
                          <h4 className="font-mono font-bold text-accent mb-3 text-xs uppercase tracking-widest">
                            System Architecture &amp; Engineering Details
                          </h4>
                          <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                            {project.fullDescription}
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-mono font-bold text-accent mb-3 text-xs uppercase tracking-widest">
                              Technical Specifications
                            </h4>
                            <ul className="space-y-2.5 text-text-secondary">
                              {project.features.map(
                                (feature: string, fIdx: number) => (
                                  <li
                                    key={fIdx}
                                    className="flex gap-2.5 items-start"
                                  >
                                    <span className="text-accent text-sm">
                                      ▪
                                    </span>
                                    <span className="text-xs sm:text-sm">
                                      {feature}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-mono font-bold text-accent mb-3 text-xs uppercase tracking-widest">
                              Verification &amp; Outcome
                            </h4>
                            <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
                              <p className="text-text-primary leading-relaxed text-xs sm:text-sm">
                                {project.impact}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Metrics */}
        <div className="mt-24 grid gap-8 border-t border-border pt-16 md:grid-cols-3">
          {[
            { label: "Production & Research Systems", value: "9", icon: "◊" },
            {
              label: "Claude Impact Lab Mumbai 2026",
              value: "1st Place",
              icon: "★",
            },
            {
              label: "Kaggle S6E10 5-Fold CV ROC-AUC",
              value: "0.96225",
              icon: "▪",
            },
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

      {/* Lightbox Modal for Full-Resolution Screenshot Inspection */}
      {previewProject && (
        <div
          onClick={() => setPreviewProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full overflow-hidden rounded-xl border border-border bg-[#090d16] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-3.5 bg-surface">
              <div>
                <h4 className="font-mono text-sm font-bold text-text-primary">
                  {previewProject.title}
                </h4>
                <p className="font-mono text-xs text-text-tertiary">
                  {previewProject.subtitle}
                </p>
              </div>
              <button
                onClick={() => setPreviewProject(null)}
                className="rounded-lg border border-border p-1.5 text-text-secondary hover:border-accent hover:text-accent transition-colors"
                aria-label="Close preview"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="relative aspect-[16/10] w-full bg-[#090d16]">
              <Image
                src={
                  previewProject.image ||
                  projectImages[previewProject.id] ||
                  "/projects/khoj.jpg"
                }
                alt={previewProject.title}
                fill
                unoptimized
                sizes="100vw"
                className="object-contain p-2"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
