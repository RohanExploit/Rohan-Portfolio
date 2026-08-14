"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { ROHAN_DATA } from "@/lib/portfolio-data";
import { Reveal, RevealStagger, RevealItem } from "./components/reveal";

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
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1.15fr] lg:gap-14">
          {/* Left: identity */}
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <p className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.25em] text-cyan-wire">
              <span className="h-px w-8 bg-cyan-wire" />
              Systems Architect · AI Engineer
            </p>

            <h1 className="mt-6 font-display text-6xl font-bold leading-[0.92] tracking-tight text-text-primary sm:text-7xl">
              Rohan
              <br />
              <span className="text-text-primary/40">Gaikwad</span>
            </h1>

            <p className="mt-7 max-w-md text-lg leading-relaxed text-text-secondary">
              I design systems that hold up under load and the intelligence that
              runs on them — turning tangled problems into architecture you can
              reason about.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-md bg-cyan-wire px-5 py-3 text-sm font-semibold text-blueprint transition-transform hover:-translate-y-0.5"
              >
                View the work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
                title: "Projects",
                description:
                  "Full-stack systems, ML models, and open-source — from deepfake detection to civic platforms.",
                href: "/projects",
                marker: "01",
              },
              {
                title: "Experience",
                description:
                  "Internships, mentorship, and the professional path that shaped how I build.",
                href: "/experience",
                marker: "02",
              },
              {
                title: "Certifications",
                description:
                  "Credentials and programs that mark continuous, deliberate learning.",
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
