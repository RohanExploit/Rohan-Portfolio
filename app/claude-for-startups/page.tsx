"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  ExternalLink,
  ArrowLeft,
  Sparkles,
  Building,
  User,
  Calendar,
  Award,
  Layers,
  Zap,
} from "lucide-react";
import { LivePdfViewer } from "../components/live-pdf-viewer";

export default function ClaudeForStartupsPage() {
  const [activeTab, setActiveTab] = useState<"preview" | "details">("preview");

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold px-3 py-1 rounded-full border border-accent/30 bg-accent/10">
            Official Cohort Credential
          </span>
        </div>

        {/* Hero Section */}
        <div className="mb-12 animate-in fade-in slide-in-from-top duration-700">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-500/10 border border-amber-500/30 px-3 py-1 text-xs font-mono font-bold text-amber-400">
              <Sparkles className="h-3.5 w-3.5" /> Anthropic PBC Selection
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 text-xs font-mono font-bold text-cyan-400">
              <Building className="h-3.5 w-3.5" /> Rohan&apos;s Individual Org
            </span>
          </div>

          <h1 className="font-mono text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
            Welcome to <span className="text-accent">Claude for Startups</span>
          </h1>

          <p className="mt-4 text-lg text-text-secondary max-w-3xl leading-relaxed">
            Official selection and onboarding into Anthropic&apos;s flagship
            founder program, recognizing pioneering systems architecture and AI
            engineering on the Claude platform.
          </p>
        </div>

        {/* Quick Metadata Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl border border-border bg-surface/60 backdrop-blur-md mb-8">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 font-mono text-xs text-text-tertiary">
              <User className="h-3.5 w-3.5" /> Founder
            </div>
            <p className="font-mono text-sm font-semibold text-text-primary">
              Rohan Gaikwad
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 font-mono text-xs text-text-tertiary">
              <Building className="h-3.5 w-3.5" /> Program
            </div>
            <p className="font-mono text-sm font-semibold text-text-primary">
              Claude for Startups
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 font-mono text-xs text-text-tertiary">
              <Calendar className="h-3.5 w-3.5" /> Issued
            </div>
            <p className="font-mono text-sm font-semibold text-text-primary">
              Mon, Jun 22, 2026
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 font-mono text-xs text-text-tertiary">
              <Award className="h-3.5 w-3.5" /> Host
            </div>
            <p className="font-mono text-sm font-semibold text-text-primary">
              Anthropic PBC, San Francisco
            </p>
          </div>
        </div>

        {/* Tab & Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4 mb-8">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("preview")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm font-semibold transition-all ${
                activeTab === "preview"
                  ? "bg-accent text-white shadow-lg shadow-accent/20"
                  : "bg-surface border border-border text-text-secondary hover:text-text-primary"
              }`}
            >
              <FileText className="h-4 w-4" /> Live Document Stream
            </button>
            <button
              onClick={() => setActiveTab("details")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm font-semibold transition-all ${
                activeTab === "details"
                  ? "bg-accent text-white shadow-lg shadow-accent/20"
                  : "bg-surface border border-border text-text-secondary hover:text-text-primary"
              }`}
            >
              <Layers className="h-4 w-4" /> Selection Details &amp; Letter
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/claude-for-startups.pdf"
              download="Claude_for_Startups_Rohan_Gaikwad.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-surface border border-border px-4 py-2 font-mono text-xs font-semibold text-text-primary hover:border-accent hover:text-accent transition-all"
            >
              <Download className="h-3.5 w-3.5" /> Download PDF
            </a>
            <a
              href="/claude-for-startups.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-surface border border-border px-4 py-2 font-mono text-xs font-semibold text-text-primary hover:border-accent hover:text-accent transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Open in New Tab
            </a>
          </div>
        </div>

        {/* Live Preview Tab */}
        {activeTab === "preview" && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <LivePdfViewer
              title="Anthropic Claude for Startups Selection Dossier"
              pdfUrl="/claude-for-startups.pdf"
            />
          </div>
        )}

        {/* Details Tab */}
        {activeTab === "details" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* The Letter Card */}
            <div className="rounded-2xl border border-border bg-surface/50 p-8 sm:p-10 backdrop-blur-md">
              <div className="border-b border-border pb-6 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-mono text-xl font-bold text-text-primary">
                      Anthropic Onboarding Dispatch
                    </h3>
                    <p className="font-mono text-xs text-text-tertiary mt-1">
                      From: Claude for Startups
                      &lt;startups@mail.anthropic.com&gt;
                    </p>
                    <p className="font-mono text-xs text-text-tertiary">
                      To: Rohan Gaikwad &lt;212_2023_cse@yes.edu.in&gt;
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Sparkles className="h-6 w-6" />
                  </div>
                </div>
              </div>

              <div className="prose prose-invert max-w-none space-y-4 font-sans text-text-secondary leading-relaxed">
                <p className="text-text-primary font-medium text-lg">
                  &ldquo;Hi Rohan,
                </p>
                <p>
                  We&apos;re glad to welcome Rohan&apos;s Individual Org to
                  Claude for Startups. We built this program because some of the
                  most ambitious work on Claude is coming from founders like
                  you, and we want to support it early.
                </p>
                <p>
                  Claude for Startups gives you a direct line to the people who
                  build Claude, early access to what we ship, and a community of
                  founders working on similar problems. With Claude for
                  Startups, you&apos;ll always build in good company.&rdquo;
                </p>
                <p className="font-mono text-xs text-text-tertiary pt-2">
                  — The Claude for Startups Team, Anthropic PBC
                </p>
              </div>

              {/* Department Commendation */}
              <div className="mt-8 rounded-xl border border-accent/20 bg-accent/5 p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-accent font-bold mb-2">
                  Institutional Department Commendation
                </p>
                <p className="font-mono text-base italic text-text-primary">
                  &ldquo;Namaskar!!! Good, Keep it up rohan. Dhanyawad&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-accent/10 flex flex-col sm:flex-row justify-between text-xs font-mono text-text-secondary">
                  <span>
                    Dr. (Sou.) S V Balshetwar · Associate Professor &amp; HOD,
                    CSE Department
                  </span>
                  <span>Yashoda Technical Campus, Satara</span>
                </div>
              </div>
            </div>

            {/* Program Pillars */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-border bg-surface/30 p-6">
                <div className="h-10 w-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                  <Zap className="h-5 w-5" />
                </div>
                <h4 className="font-mono font-bold text-text-primary text-base mb-2">
                  Live Working Sessions
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Technical deep dives and collaborative working sessions led by
                  the engineering team that builds Claude.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/30 p-6">
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="font-mono font-bold text-text-primary text-base mb-2">
                  Founder Events &amp; Summits
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Priority invitations to Anthropic Hackathons, Builder Days,
                  Founder Days, and community-run builder collectives.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/30 p-6">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <Layers className="h-5 w-5" />
                </div>
                <h4 className="font-mono font-bold text-text-primary text-base mb-2">
                  Early Model Access &amp; Perks
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Practical, build-focused materials from Anthropic, platform
                  credits, and earliest deployment of new foundation models.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
