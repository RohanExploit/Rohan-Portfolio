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
} from "lucide-react";
import { ROHAN_DATA } from "@/lib/portfolio-data";
import { Reveal, RevealStagger, RevealItem } from "./components/reveal";
import { LivePdfViewer } from "./components/live-pdf-viewer";

// The 3D signature is client + WebGL only. Lazy so it never blocks first paint,
// and a quiet blueprint placeholder holds the frame while three.js loads.
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
  return (
    <div className="min-h-screen bg-background">
      {/* ---------------- Hero ---------------- */}
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1.15fr] lg:gap-14">
          {/* Left: identity */}
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            {/* Identity & Profile Photo */}
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
                  Live PDF Preview →
                </span>
              </Link>
            </div>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-text-secondary">
              I design systems that hold up under load and the intelligence that
              runs on them — turning tangled problems into architecture you can
              reason about. Winner at Claude Impact Lab Mumbai 2026 &amp; SIH
              2026 Finalist.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-md bg-cyan-wire px-5 py-3 text-sm font-semibold text-blueprint transition-transform hover:-translate-y-0.5"
              >
                View Top Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#live-pdf-section"
                className="inline-flex items-center gap-2 rounded-md border border-amber-500/40 px-5 py-3 text-sm font-semibold text-amber-300 transition-colors hover:border-amber-400 hover:bg-amber-500/10"
              >
                <Sparkles className="h-4 w-4 text-amber-400" />
                Live PDF on Scroll
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

          {/* Right: the signature — a live system-architecture graph */}
          <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-cyan-wire/25 bg-blueprint">
              {/* blueprint grid */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.08) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              {/* corner registration marks */}
              <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-cyan-wire/40" />
              <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-cyan-wire/40" />
              <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-cyan-wire/40" />
              <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-cyan-wire/40" />

              {/* labels */}
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

              {/* the 3D artifact */}
              <div className="absolute inset-0">
                <ArchitectureLattice />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Grand Entrance: Winner Ceremony Showcase ---------------- */}
      <section className="border-t border-border bg-gradient-to-b from-surface/60 via-background to-surface/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-mono font-bold text-amber-400">
              <Trophy className="h-4 w-4 text-amber-400" />
              GRAND ENTRANCE // 1ST PLACE CHAMPIONSHIP
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
              Winner · Claude Impact Lab Mumbai 2026
            </h2>
            <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed">
              Awarded 1st place on stage at Somaiya Vidyavihar University for
              architecting{" "}
              <span className="font-semibold text-text-primary">KHOJ</span> —
              the non-biometric, edge-accelerated missing-person identification
              platform designed for 50-kiosk deployment at{" "}
              <span className="text-amber-400 font-semibold">
                Kumbh Mela 2027
              </span>{" "}
              under India&apos;s DPDP Act 2023.
            </p>
          </Reveal>

          {/* Grand Entrance Visual Stage Showcase */}
          <Reveal className="mx-auto max-w-6xl">
            <div className="group relative overflow-hidden rounded-2xl border-2 border-amber-500/40 bg-blueprint shadow-2xl shadow-amber-500/10">
              {/* Corner blueprint marks */}
              <span className="absolute left-3 top-3 z-10 h-4 w-4 border-l-2 border-t-2 border-amber-400/80" />
              <span className="absolute right-3 top-3 z-10 h-4 w-4 border-r-2 border-t-2 border-amber-400/80" />
              <span className="absolute bottom-3 left-3 z-10 h-4 w-4 border-b-2 border-l-2 border-amber-400/80" />
              <span className="absolute bottom-3 right-3 z-10 h-4 w-4 border-b-2 border-r-2 border-amber-400/80" />

              {/* Ceremony Stage Image */}
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
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-blueprint/95 via-transparent to-black/30" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-2 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-black/80 px-3 py-1 font-mono text-xs font-bold text-amber-300 border border-amber-500/50 backdrop-blur-md">
                    <Trophy className="h-3.5 w-3.5 text-amber-400" />
                    TEAM 2 — WINNER
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1.5 rounded-md bg-black/80 px-3 py-1 font-mono text-xs text-cyan-wire border border-cyan-wire/40 backdrop-blur-md">
                    Anthropic PBC × Somaiya Vidyavihar
                  </span>
                </div>

                {/* Bottom Overlay Info */}
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
                          Project Architecture
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

              {/* Architectural Highlights Strip */}
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border bg-surface/90 font-mono text-xs">
                <div className="p-4 sm:p-5">
                  <p className="text-text-tertiary uppercase tracking-wider">
                    Breakthrough 01
                  </p>
                  <p className="mt-1 font-bold text-text-primary">
                    100% DPDP Act 2023 Compliant
                  </p>
                  <p className="mt-1 text-text-secondary text-[11px] font-sans">
                    Non-biometric feature extraction eliminating surveillance
                    liabilities.
                  </p>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-text-tertiary uppercase tracking-wider">
                    Breakthrough 02
                  </p>
                  <p className="mt-1 font-bold text-text-primary">
                    Sub-45ms Edge Inference
                  </p>
                  <p className="mt-1 text-text-secondary text-[11px] font-sans">
                    Runs on low-power kiosk hardware with automated memory
                    purging.
                  </p>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-text-tertiary uppercase tracking-wider">
                    Breakthrough 03
                  </p>
                  <p className="mt-1 font-bold text-text-primary">
                    50-Kiosk Distributed Mesh
                  </p>
                  <p className="mt-1 text-text-secondary text-[11px] font-sans">
                    Scalable choke-point topology architected for 50M+ religious
                    gatherings.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
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
              Explore
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-text-primary">
              Where the work lives
            </h2>
          </Reveal>

          <RevealStagger className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Top Tier Projects",
                description:
                  "KHOJ (Claude Impact Lab Winner), Q-DARPAN (SIH 2026), ComplianceMind (YC RFS #12), CKD Digital Twin, and competitive ML.",
                href: "/projects",
                marker: "01",
              },
              {
                title: "Claude for Startups",
                description:
                  "Anthropic founder cohort induction · Full selection dossier, engineering deep-dives, and department commendation.",
                href: "/claude-for-startups",
                marker: "02",
              },
              {
                title: "Honors & Credentials",
                description:
                  "Hackathon wins, Credly badges, Google Student Ambassador, and professional certifications validating deep expertise.",
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
