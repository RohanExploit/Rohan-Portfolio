"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Sparkles,
  Trophy,
  ExternalLink,
  Award,
} from "lucide-react";
import { ROHAN_DATA } from "@/lib/portfolio-data";
import { Reveal, RevealStagger, RevealItem } from "./components/reveal";
import { LivePdfViewer } from "./components/live-pdf-viewer";

const ArchitectureLattice = dynamic(
  () => import("./components/architecture-lattice"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <span className="font-mono text-xs tracking-widest text-cyan-wire/50">
          initializing graph…
        </span>
      </div>
    ),
  }
);

export default function Home() {
  const featuredProjects = ROHAN_DATA.projects.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      {/* ---------------- Hero ---------------- */}
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1.15fr] lg:gap-14">
          {/* Left: identity */}
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="flex items-center gap-4">
              <Link href="/about" className="group relative block">
                <div className="relative h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-2xl border-2 border-cyan-wire/50 shadow-xl shadow-cyan-wire/10 transition-transform group-hover:scale-105">
                  <Image
                    src={ROHAN_DATA.profilePhoto}
                    alt="Rohan Gaikwad - Systems Architect & AI Engineer"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-background">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </span>
              </Link>
              <div>
                <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-wire">
                  Systems Architect · AI Engineer
                </p>
                <p className="font-mono text-xs text-text-tertiary mt-0.5">
                  Satara / Pune, India · Available for roles
                </p>
              </div>
            </div>

            <h1 className="mt-6 font-display text-6xl font-bold leading-[0.92] tracking-tight text-text-primary sm:text-7xl">
              Rohan
              <br />
              <span className="text-text-primary/40">Gaikwad</span>
            </h1>

            {/* Claude for Startups Live Preview Pill */}
            <div className="mt-6">
              <Link
                href="/claude-for-startups"
                className="group inline-flex items-center gap-2.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 backdrop-blur-md transition-all hover:border-amber-400 hover:bg-amber-500/20 shadow-lg shadow-amber-500/5"
              >
                <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-amber-300">
                  Anthropic Claude for Startups Cohort
                </span>
                <span className="font-mono text-xs text-amber-400/80 group-hover:translate-x-0.5 transition-transform">
                  Official Dossier →
                </span>
              </Link>
            </div>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-text-secondary">
              I design systems that hold up under load and the intelligence that
              runs on them — turning complex constraints into deterministic
              architecture. 1st Place Winner at Claude Impact Lab Mumbai 2026
              &amp; SIH 2026 Finalist.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-md bg-cyan-wire px-5 py-3 text-sm font-semibold text-blueprint transition-transform hover:-translate-y-0.5"
              >
                Explore All 9 Systems
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#live-pdf-section"
                className="inline-flex items-center gap-2 rounded-md border border-amber-500/40 px-5 py-3 text-sm font-semibold text-amber-300 transition-colors hover:border-amber-400 hover:bg-amber-500/10"
              >
                <Sparkles className="h-4 w-4 text-amber-400" />
                Live Selection PDF
              </Link>
              <a
                href={ROHAN_DATA.contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-cyan-wire hover:text-cyan-wire"
              >
                Résumé
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-9 flex items-center gap-5">
              {[
                {
                  href: "https://github.com/RohanExploit",
                  Icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://linkedin.com/in/rohanvijaygaikwad",
                  Icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://x.com/rohan_critic",
                  Icon: Twitter,
                  label: "X",
                },
                {
                  href: `mailto:${ROHAN_DATA.contact.email}`,
                  Icon: Mail,
                  label: "Email",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-text-tertiary transition-colors hover:text-cyan-wire"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: live system-architecture graph */}
          <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-cyan-wire/25 bg-blueprint">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.08) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-cyan-wire/40" />
              <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-cyan-wire/40" />
              <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-cyan-wire/40" />
              <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-cyan-wire/40" />

              <p className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-wire/70">
                sys.arch // rohan.graph
              </p>
              <p className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
                v3
              </p>
              <p className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
                nodes 140 · <span className="text-amber-signal">9 active</span>
              </p>
              <p className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
                move to orbit
              </p>

              <div className="absolute inset-0">
                <ArchitectureLattice />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Entrance Feature: Claude Impact Lab Mumbai 2026 Winner ---------------- */}
      <section className="border-t border-border bg-gradient-to-b from-surface/60 via-background to-surface/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-mono font-bold text-amber-400">
              <Trophy className="h-4 w-4 text-amber-400" />
              CLAUDE IMPACT LAB MUMBAI 2026 · 1ST PLACE WINNER
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
              KHOJ — Kumbh Mela 2027 Edge AI
            </h2>
            <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed">
              Awarded 1st place on stage at Somaiya Vidyavihar University,
              Mumbai for architecting{" "}
              <span className="font-semibold text-text-primary">KHOJ</span> — a
              non-biometric, edge-accelerated missing-person identification
              platform designed for 50-kiosk choke-point deployment at{" "}
              <span className="text-amber-400 font-semibold">
                Kumbh Mela 2027
              </span>{" "}
              under India&apos;s DPDP Act 2023.
            </p>
          </Reveal>

          <Reveal className="mx-auto max-w-6xl">
            <div className="group relative overflow-hidden rounded-2xl border-2 border-amber-500/40 bg-blueprint shadow-2xl shadow-amber-500/10">
              <span className="absolute left-3 top-3 z-10 h-4 w-4 border-l-2 border-t-2 border-amber-400/80" />
              <span className="absolute right-3 top-3 z-10 h-4 w-4 border-r-2 border-t-2 border-amber-400/80" />
              <span className="absolute bottom-3 left-3 z-10 h-4 w-4 border-b-2 border-l-2 border-amber-400/80" />
              <span className="absolute bottom-3 right-3 z-10 h-4 w-4 border-b-2 border-r-2 border-amber-400/80" />

              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/50">
                <Image
                  src={
                    ROHAN_DATA.winnerPhoto || "/claude-impact-lab-winner.jpg"
                  }
                  alt="Claude Impact Lab Mumbai 2026 Winner Ceremony Stage - Rohan Gaikwad and Team 2"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blueprint/95 via-transparent to-black/30" />

                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-2 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-black/80 px-3 py-1 font-mono text-xs font-bold text-amber-300 border border-amber-500/50 backdrop-blur-md">
                    <Trophy className="h-3.5 w-3.5 text-amber-400" />
                    TEAM 2 — 1ST PLACE WINNER
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1.5 rounded-md bg-black/80 px-3 py-1 font-mono text-xs text-cyan-wire border border-cyan-wire/40 backdrop-blur-md">
                    Anthropic PBC × Somaiya Vidyavihar
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10">
                  <div className="rounded-xl border border-white/10 bg-black/80 p-4 sm:p-6 backdrop-blur-md">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-amber-400 font-bold">
                          KHOJ / Kho-Ya-Paya · Kumbh Mela 2027
                        </p>
                        <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-white">
                          Privacy-Preserving Missing Pilgrim Resolution Engine
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-gray-300">
                          Zero facial recognition · MobileNetV3 edge
                          segmentation · Ephemeral TTL vector hashes
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <Link
                          href="/projects"
                          className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 font-mono text-xs font-bold text-blueprint hover:bg-amber-400 transition-colors"
                        >
                          System Architecture
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <Link
                          href="/claude-for-startups"
                          className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 font-mono text-xs font-semibold text-white hover:bg-white/20 transition-colors"
                        >
                          Startup Dossier
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border bg-surface/90 font-mono text-xs">
                <div className="p-4 sm:p-5">
                  <p className="text-text-tertiary uppercase tracking-wider">
                    DPDP Act 2023 Compliance
                  </p>
                  <p className="mt-1 font-bold text-text-primary">
                    Zero Biometric Storage
                  </p>
                  <p className="mt-1 text-text-secondary text-[11px] font-sans">
                    Garment &amp; appearance vector hashes with automatic TTL
                    memory expiration.
                  </p>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-text-tertiary uppercase tracking-wider">
                    Edge Execution
                  </p>
                  <p className="mt-1 font-bold text-text-primary">
                    Sub-45ms Inference Latency
                  </p>
                  <p className="mt-1 text-text-secondary text-[11px] font-sans">
                    MobileNetV3 + ResNet-50 pipeline optimized for offline kiosk
                    hardware.
                  </p>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-text-tertiary uppercase tracking-wider">
                    Deployment Topology
                  </p>
                  <p className="mt-1 font-bold text-text-primary">
                    50-Kiosk Distributed Mesh
                  </p>
                  <p className="mt-1 text-text-secondary text-[11px] font-sans">
                    3-tiered matching across choke-points architected for Kumbh
                    Mela 2027.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Featured Engineering Systems (with Project Images) ---------------- */}
      <section className="border-t border-border bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-wire font-bold">
                /production-systems // visual-index
              </p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
                Featured Engineering Systems
              </h2>
              <p className="mt-3 max-w-2xl text-base text-text-secondary">
                Live production deployments, hackathon-winning platforms, and
                empirical research manuscripts.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-wire/40 bg-cyan-wire/10 px-5 py-2.5 font-mono text-xs font-bold text-cyan-wire hover:bg-cyan-wire/20 transition-colors self-start sm:self-auto"
            >
              View All {ROHAN_DATA.projects.length} Systems
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface/40 transition-all hover:border-cyan-wire/50 hover:shadow-xl hover:shadow-cyan-wire/5"
              >
                {/* Project Screenshot */}
                <Link
                  href="/projects"
                  className="relative aspect-[16/10] w-full overflow-hidden bg-[#090d16] border-b border-border/60 block"
                >
                  <Image
                    src={project.image || "/projects/khoj.jpg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </Link>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    {project.badge && (
                      <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-amber-400">
                        <Award className="h-3 w-3" />
                        {project.badge}
                      </div>
                    )}
                    <h3 className="font-display text-lg font-bold text-text-primary group-hover:text-cyan-wire transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] text-cyan-wire/80 uppercase tracking-wider">
                      {project.subtitle}
                    </p>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-text-secondary">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-cyan-wire transition-colors"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live App
                        </a>
                      )}
                    </div>
                    <Link
                      href="/projects"
                      className="font-mono text-xs font-semibold text-cyan-wire hover:underline inline-flex items-center gap-1"
                    >
                      Specs <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Live PDF Preview on Scroll ---------------- */}
      <section
        id="live-pdf-section"
        className="border-t border-border bg-surface/30 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 text-center max-w-3xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber-400 font-bold">
              /selection-credential // live-document
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
              Claude for Startups Selection
            </h2>
            <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed">
              Live in-browser preview of the official onboarding correspondence
              from Anthropic PBC, including university departmental
              acknowledgment. Scroll through all pages in real-time.
            </p>
          </Reveal>

          <Reveal className="mx-auto max-w-5xl">
            <LivePdfViewer
              title="Anthropic Claude for Startups — Rohan Gaikwad"
              pdfUrl="/claude-for-startups.pdf"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------------- Featured areas ---------------- */}
      <section className="border-t border-border bg-surface/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-wire">
              Index
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-text-primary">
              Directory
            </h2>
          </Reveal>

          <RevealStagger className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Engineering Systems",
                description:
                  "KHOJ (Claude Impact Lab Winner), AdaptiveMarket (HackWithHyderabad 3.0), Q-DARPAN (SIH 2026), ComplianceMind (YC RFS #12), and CKD Digital Twin.",
                href: "/projects",
                marker: "01",
              },
              {
                title: "Claude for Startups",
                description:
                  "Anthropic founder cohort induction · Full selection dossier, program benefits, and department commendation.",
                href: "/claude-for-startups",
                marker: "02",
              },
              {
                title: "Honors & Credentials",
                description:
                  "Hackathon wins, Credly badges, Google Student Ambassador, and professional certifications.",
                href: "/certifications",
                marker: "03",
              },
            ].map((item) => (
              <RevealItem key={item.title} className="h-full">
                <Link
                  href={item.href}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-background p-8 transition-colors hover:border-cyan-wire/50"
                >
                  <div>
                    <span className="font-mono text-xs tracking-widest text-text-tertiary transition-colors group-hover:text-cyan-wire">
                      {item.marker}
                    </span>
                    <h3 className="mt-6 font-display text-xl font-bold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-cyan-wire opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Open <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>
    </div>
  );
}
