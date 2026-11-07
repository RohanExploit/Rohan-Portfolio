"use client";

import { ROHAN_DATA } from "@/lib/portfolio-data";
import { Award, Calendar, Building2, ExternalLink, Sparkles, Trophy, FileText } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export default function Certifications() {
  const { achievements } = ROHAN_DATA;

  const awards = achievements.filter((a: any) => a.type === "Award" || a.featured);
  const certifications = achievements.filter((a: any) => a.type === "Certification");
  const programs = achievements.filter((a: any) => a.type === "Program" && !a.featured);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-accent uppercase tracking-widest font-bold">
            /certifications-awards
          </p>
          <h1 className="mt-2 font-mono text-5xl font-bold text-text-primary">
            Honors, Awards & Credentials
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-text-secondary leading-relaxed">
            International recognitions, hackathon podiums, startup selections,
            and continuous learning milestones validating deep technical expertise.
          </p>
        </div>

        {/* Featured Honors & Awards */}
        <div className="mb-20">
          <h2 className="mb-8 font-mono text-2xl font-bold text-text-primary flex items-center gap-4">
            <span className="h-px w-8 bg-amber-400"></span>
            Featured Honors & Hackathon Podiums
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {awards.map((award: any, index: number) => (
              <div
                key={index}
                className="group glass-card p-8 hover-lift flex flex-col h-full border-amber-500/30 hover:border-amber-400 bg-surface/50"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                    <Trophy className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">
                        {award.type === "Program" ? "Selection" : "Award"}
                      </span>
                    </div>
                    <h3 className="font-mono text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                      {award.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Building2 className="h-4 w-4 text-accent" />
                        <span className="font-semibold">{award.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>{award.date}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-text-secondary leading-relaxed text-sm">
                      {award.description}
                    </p>
                    {award.link && (
                      <div className="mt-5">
                        {award.link.startsWith("/") ? (
                          <Link
                            href={award.link}
                            className="inline-flex items-center gap-2 rounded-lg bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 font-mono text-xs font-semibold text-amber-400 hover:bg-amber-500/20 transition-all"
                          >
                            <FileText className="h-3.5 w-3.5" />
                            Live Document & Verification →
                          </Link>
                        ) : (
                          <a
                            href={award.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                          >
                            Verify Credential <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Credentials (Credly) */}
        <div className="mb-20">
          <h2 className="mb-8 font-mono text-2xl font-bold text-text-primary flex items-center gap-4">
            <span className="h-px w-8 bg-accent"></span>
            Verified Credentials
          </h2>
          <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
            <div className="glass-card p-6 flex items-center justify-center bg-white/5">
              <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id="8c81a506-7025-49ba-90a4-f76c51c46962"
                data-share-badge-host="https://www.credly.com"
              ></div>
            </div>
            <div className="glass-card p-6 flex items-center justify-center bg-white/5">
              <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id="5b571c09-e5a0-481f-8693-d428d1c0a4e7"
                data-share-badge-host="https://www.credly.com"
              ></div>
            </div>
            <div className="glass-card p-6 flex items-center justify-center bg-white/5">
              <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id="0b56ed2a-f7e5-4b5b-989b-7b28d0a68732"
                data-share-badge-host="https://www.credly.com"
              ></div>
            </div>
          </div>
          <Script
            type="text/javascript"
            async
            src="//cdn.credly.com/assets/utilities/embed.js"
            strategy="lazyOnload"
          />
        </div>

        {/* Professional Certifications Section */}
        <div className="mb-20">
          <h2 className="mb-8 font-mono text-2xl font-bold text-text-primary flex items-center gap-4">
            <span className="h-px w-8 bg-accent"></span>
            Professional Certifications
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert: any, index: number) => (
              <div
                key={index}
                className="group glass-card p-8 hover-lift flex flex-col h-full border-accent/20 hover:border-accent"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Award className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Building2 className="h-4 w-4 text-accent" />
                        <span className="font-semibold">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-text-secondary leading-relaxed text-sm">
                      {cert.description}
                    </p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                      >
                        Verify Credential <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Programs Section */}
        <div>
          <h2 className="mb-8 font-mono text-2xl font-bold text-text-primary flex items-center gap-4">
            <span className="h-px w-8 bg-accent"></span>
            Programs & Recognition
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {programs.map((program: any, index: number) => (
              <div
                key={index}
                className="group glass-card p-8 hover-lift flex flex-col h-full border-info/20 hover:border-info"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-info/10 text-info group-hover:bg-info group-hover:text-white transition-all duration-300">
                    <Sparkles className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                      {program.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Building2 className="h-4 w-4 text-accent" />
                        <span className="font-semibold">{program.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>{program.date}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-text-secondary leading-relaxed text-sm">
                      {program.description}
                    </p>
                    {program.link && (
                      <a
                        href={program.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                      >
                        Program Details <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
