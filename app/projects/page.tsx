"use client";

import { ROHAN_DATA } from "@/lib/portfolio-data";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

const projectImages: { [key: number]: string } = {
  1: "/projects/vishwaguru.jpg",
  2: "/projects/baliraj.jpg",
  3: "/projects/heart-disease.png",
  4: "/projects/mushroom-classification.jpg",
  5: "/projects/amazon-analytics.jpg",
  6: "/projects/anti-gravity.jpg",
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
            /projects
          </p>
          <h1 className="mt-4 font-mono text-5xl font-bold text-text-primary tracking-tighter">
            Featured Projects
          </h1>
          <p className="mt-6 text-xl text-text-secondary max-w-2xl leading-relaxed">
            A selection of projects spanning full-stack development, AI/ML, and
            open-source contributions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group overflow-hidden glass-card hover-lift animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="relative h-72 lg:h-auto lg:w-2/5 overflow-hidden">
                  <Image
                    src={projectImages[project.id]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8 lg:p-12">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-mono text-3xl font-bold text-text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm font-bold text-accent tracking-wider uppercase">
                        {project.subtitle}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setExpandedId(
                          expandedId === project.id ? null : project.id
                        )
                      }
                      className="h-10 w-10 flex items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent transition-all transform hover:rotate-90"
                    >
                      {expandedId === project.id ? "−" : "+"}
                    </button>
                  </div>

                  <p className="mt-6 text-text-secondary leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 font-mono text-xs text-accent font-semibold transition-all hover:bg-accent/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  {expandedId === project.id && (
                    <div className="space-y-8 border-t border-border pt-8 mt-8 animate-in fade-in slide-in-from-top duration-500">
                      <div>
                        <h4 className="font-mono font-bold text-accent mb-4 text-sm uppercase tracking-widest">
                          Full Description
                        </h4>
                        <p className="text-text-secondary leading-relaxed">
                          {project.fullDescription}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-mono font-bold text-accent mb-4 text-sm uppercase tracking-widest">
                            Key Features
                          </h4>
                          <ul className="space-y-3 text-text-secondary">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex gap-3 items-start">
                                <span className="text-accent text-lg">✦</span>
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-mono font-bold text-accent mb-4 text-sm uppercase tracking-widest">
                            Impact
                          </h4>
                          <p className="text-text-secondary leading-relaxed text-sm italic">
                            &quot;{project.impact}&quot;
                          </p>
                          <div className="mt-8 flex gap-4">
                            <a
                              href={project.github}
                              target="_blank"
                              className="btn-primary"
                            >
                              <Github className="h-4 w-4" />
                              Source Code
                            </a>
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline"
                              >
                                <ExternalLink className="h-4 w-4" />
                                Live Demo
                              </a>
                            )}
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

        {/* Bottom Stats */}
        <div className="mt-24 grid gap-8 border-t border-border pt-16 md:grid-cols-3">
          {[
            { label: "Projects Completed", value: "15+", icon: "◊" },
            { label: "Lines of Code", value: "100K+", icon: "▪" },
            { label: "Success Rate", value: "100%", icon: "★" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-card p-10 text-center hover-lift group border-transparent hover:border-accent"
            >
              <div className="text-accent text-2xl mb-4 opacity-50">
                {stat.icon}
              </div>
              <p className="font-mono text-sm text-text-secondary uppercase tracking-widest font-bold">
                {stat.label}
              </p>
              <p className="mt-4 font-mono text-4xl font-bold text-text-primary group-hover:text-glow transition-all">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
