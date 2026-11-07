"use client";

import Link from "next/link";
import Image from "next/image";
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

export default function Home() {
  const featuredProjects = ROHAN_DATA.projects.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      {/* ---------------- Hero ---------------- */}
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.25fr] lg:gap-12">
          {/* Left: identity */}
          <div className="animate-in fade-in slide-in-from-left-4 duration-700 lg:sticky lg:top-24">
            <div className="flex items-center gap-4">
              <Link href="/about" className="group relative block">
                <div className="relative h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-2xl border-2 border-cyan-wire/50 shadow-xl shadow-cyan-wire/10 transition-transform group-hover:scale-105">
                  <Image
                    src={ROHAN_DATA.profilePhoto}
                    alt="Rohan Gaikwad - Systems Architect & AI Engineer"
                    fill
                    priority
                    unoptimized
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
              architecture. 1st Place Winner at Claude Impact Lab Mumbai 2026,
              Runner-Up at Y Combinator Fall 2026 × Moss Sprint Bangalore &amp;
              SIH 2026 Finalist.
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

          {/* Right: Y Combinator Fall 2026 × Moss Zero Latency Builder Sprint Bangalore */}
          <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="overflow-hidden rounded-2xl border border-cyan-wire/35 bg-surface/60 shadow-2xl">
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-background/90 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-amber-400" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
                    Runner-Up · Best Demo &amp; Presentation
                  </span>
                </div>
                <span className="font-mono text-[11px] text-cyan-wire">
                  Bangalore · Grand Finale
                </span>
              </div>

              {/* Uncompressed Stage Photo */}
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-black">
                <Image
                  src="/yc-moss-sprint-winner.jpg"
                  alt="Y Combinator Fall 2026 x Moss Zero Latency Builder Sprint Bangalore - Runner Up Best Demo & Presentation"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center"
                />
              </div>

              {/* Story & 4-Agent Breakdown */}
              <div className="space-y-4 p-5 sm:p-6 bg-background/95">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="font-display text-lg sm:text-xl font-bold text-text-primary">
                    <a
                      href="https://www.linkedin.com/school/y-combinator/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:underline"
                    >
                      Y Combinator
                    </a>{" "}
                    Fall 2026 ×{" "}
                    <a
                      href="https://www.linkedin.com/company/moss-finance/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-wire hover:underline"
                    >
                      Moss
                    </a>{" "}
                    Zero Latency Builder Sprint
                  </h2>
                  <a
                    href="https://compliance-mind.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-cyan-wire/15 border border-cyan-wire/40 px-3 py-1 font-mono text-xs font-semibold text-cyan-wire hover:bg-cyan-wire/25 transition-colors"
                  >
                    Live App <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <p className="text-sm leading-relaxed text-text-secondary">
                  I went to the{" "}
                  <a
                    href="https://www.linkedin.com/school/y-combinator/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-text-primary underline decoration-amber-400/60 underline-offset-2 hover:text-amber-300"
                  >
                    Y Combinator
                  </a>{" "}
                  Fall 2026 ×{" "}
                  <a
                    href="https://www.linkedin.com/company/moss-finance/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-text-primary underline decoration-cyan-wire/60 underline-offset-2 hover:text-cyan-wire"
                  >
                    Moss
                  </a>{" "}
                  Zero Latency Builder Sprint Bangalore with one thing in mind:{" "}
                  <span className="font-semibold text-text-primary">
                    Build something real.
                  </span>
                </p>

                <p className="text-sm leading-relaxed text-text-secondary">
                  We built{" "}
                  <span className="font-semibold text-text-primary">
                    ComplianceMind
                  </span>
                  , a 4-agent system for financial compliance:
                </p>

                <ul className="grid gap-2 sm:grid-cols-2 text-xs sm:text-sm text-text-secondary">
                  <li className="rounded-lg border border-border bg-surface/50 p-2.5">
                    <span className="font-mono text-[11px] font-bold text-cyan-wire block">
                      AGENT 01 // REGULATIONS
                    </span>
                    One agent handles regulations.
                  </li>
                  <li className="rounded-lg border border-border bg-surface/50 p-2.5">
                    <span className="font-mono text-[11px] font-bold text-cyan-wire block">
                      AGENT 02 // MARKET &amp; TX DATA
                    </span>
                    One works with market and transaction data.
                  </li>
                  <li className="rounded-lg border border-border bg-surface/50 p-2.5">
                    <span className="font-mono text-[11px] font-bold text-cyan-wire block">
                      AGENT 03 // FRAUD &amp; SHORT SELLING
                    </span>
                    One looks for suspicious activity like short selling and
                    financial fraud.
                  </li>
                  <li className="rounded-lg border border-border bg-surface/50 p-2.5">
                    <span className="font-mono text-[11px] font-bold text-cyan-wire block">
                      AGENT 04 // STAKEHOLDER REASONING
                    </span>
                    The last one puts everything together and gives the
                    stakeholder the reasoning behind the finding.
                  </li>
                </ul>

                <p className="text-sm leading-relaxed text-text-secondary">
                  The agents talk to each other instead of just throwing four
                  separate AI responses at the user. That was the part we spent
                  most of our time getting right. A lot of building. A lot of
                  breaking things. A lot of{" "}
                  <span className="italic text-text-primary">
                    &ldquo;why the hell did it do that?&rdquo;
                  </span>
                </p>

                <p className="text-sm font-semibold text-amber-300 border-t border-border/60 pt-3">
                  Then we got on stage and we slayed. Runner up for Best Demo
                  &amp; Presentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Claude Impact Lab Mumbai 2026 Winner Banner (Full 2390x1576 Lossless PNG) ---------------- */}
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
            <div className="overflow-hidden rounded-2xl border-2 border-amber-500/40 bg-blueprint shadow-2xl shadow-amber-500/10">
              {/* Unobstructed, Uncompressed 2390x1576 Lossless PNG */}
              <div className="relative aspect-[2390/1576] w-full overflow-hidden bg-black">
                <Image
                  src="/claude-impact-lab-winner.png"
                  alt="Claude Impact Lab Mumbai 2026 Winner Ceremony Stage - Rohan Gaikwad and Team 2"
                  fill
                  priority
                  unoptimized
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Clean Footer Strip Below Photo (No Blur Overlay Over Faces) */}
              <div className="border-t border-border bg-black/90 p-5 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="inline-flex items-center gap-1.5 rounded bg-amber-500/15 px-2.5 py-0.5 font-mono text-xs font-bold text-amber-300 border border-amber-500/40">
                        <Trophy className="h-3.5 w-3.5 text-amber-400" />
                        TEAM 2 — 1ST PLACE WINNER
                      </span>
                      <span className="font-mono text-xs text-cyan-wire">
                        Anthropic PBC × Somaiya Vidyavihar Mumbai
                      </span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      KHOJ (Kho-Ya-Paya) — Privacy-Preserving Missing Pilgrim
                      Resolution Engine
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-300">
                      Zero facial recognition · MobileNetV3 edge segmentation ·
                      Ephemeral TTL vector hashes
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 font-mono text-xs font-bold text-blueprint hover:bg-amber-400 transition-colors"
                    >
                      System Architecture
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href="/claude-for-startups"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 font-mono text-xs font-semibold text-white hover:bg-white/20 transition-colors"
                    >
                      Startup Dossier
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border bg-surface/90 font-mono text-xs border-t border-border">
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
                <Link
                  href="/projects"
                  className="relative aspect-[16/10] w-full overflow-hidden bg-[#090d16] border-b border-border/60 block"
                >
                  <Image
                    src={project.image || "/projects/khoj.jpg"}
                    alt={project.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </Link>

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

      {/* ---------------- Directory ---------------- */}
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
                  "KHOJ (Claude Impact Lab Winner), AdaptiveMarket (HackWithHyderabad 3.0), Q-DARPAN (SIH 2026), ComplianceMind (YC Fall 2026 × Moss Runner-Up), and CKD Digital Twin.",
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
