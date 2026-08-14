import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "../components/reveal";

export const metadata = {
  title: "Bulk Ops for Confluence — Documentation",
  description:
    "Four bulk operations Confluence never shipped: copy a space with internal links rewritten, copy a page with attachments, reorder pages alphabetically, and copy templates. Runs entirely on Atlassian, zero external data egress.",
};

const operations: { name: string; detail: string }[] = [
  {
    name: "Copy an entire space",
    detail:
      "Copies the full page tree, folders, attachments, and space description into another space. Internal links are rewritten to point inside the copy, not back at the original — the part every other copy tool gets wrong. Tiny links are resolved too, and attachments are re-uploaded so images still render.",
  },
  {
    name: "Copy a page with its attachments",
    detail:
      "Duplicates a single page into another space, bringing its images and files with it. Media references are rewritten so nothing renders broken.",
  },
  {
    name: "Reorder pages alphabetically",
    detail:
      'Sorts a space\'s pages by title, A–Z or Z–A, at one level or every subtree. Natural, locale-aware order, so "Page 2" comes before "Page 10". A preview shows the new order before anything moves.',
  },
  {
    name: "Copy templates between spaces",
    detail:
      "Copies page templates from one space to another. A template whose name already exists in the target is skipped, so re-running never overwrites anything.",
  },
];

const guarantees: { label: string; value: string }[] = [
  {
    label: "Preview first",
    value: "Every operation shows exactly what will happen before it commits.",
  },
  {
    label: "Resumes on failure",
    value:
      "A job interrupted at page 340 continues from 341 without duplicating anything.",
  },
  {
    label: "Per-item report",
    value: "See precisely which items succeeded, failed, or were skipped.",
  },
  {
    label: "Runs on Atlassian",
    value:
      "Zero external egress. No third-party services, no AI processing on your data.",
  },
];

export default function BulkOps() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-sm text-accent uppercase tracking-widest font-bold">
            /bulk-ops
          </p>
          <h1 className="mt-2 font-mono text-5xl font-bold text-text-primary underline decoration-accent/30 underline-offset-8">
            Bulk Ops for Confluence
          </h1>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed font-medium">
            Four bulk operations Confluence administrators have asked for since
            2005, and Atlassian has not shipped. Built as an Atlassian Forge app
            for Confluence Cloud.
          </p>
        </div>

        {/* Operations */}
        <RevealStagger className="mb-16 grid gap-6 md:grid-cols-2">
          {operations.map((op, index) => (
            <RevealItem
              key={index}
              className="glass-card p-8 hover-lift border-transparent hover:border-accent group"
            >
              <p className="font-mono text-xs uppercase text-accent tracking-widest font-bold mb-3">
                0{index + 1}
              </p>
              <h2 className="font-mono text-xl font-bold text-text-primary mb-3 group-hover:text-glow transition-all">
                {op.name}
              </h2>
              <p className="text-text-secondary leading-relaxed">{op.detail}</p>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Guarantees */}
        <Reveal className="mb-16 glass-card p-10 border-accent/20">
          <h2 className="font-mono text-2xl font-bold text-text-primary mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-accent"></span>
            How it behaves
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {guarantees.map((g, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-mono text-sm uppercase tracking-widest font-bold text-accent">
                  {g.label}
                </h3>
                <p className="text-text-secondary leading-relaxed">{g.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Support & links */}
        <Reveal className="glass-card p-8 border-accent/20">
          <h2 className="font-mono text-xl font-bold text-accent mb-4">
            Support &amp; privacy
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Questions or issues? Email{" "}
            <a
              href="mailto:support@rohangaikwad.in"
              className="text-accent hover:underline"
            >
              support@rohangaikwad.in
            </a>{" "}
            — answered within one business day (Mon–Fri, 10:00–19:00 IST).
          </p>
          <p className="mt-3 text-text-secondary leading-relaxed">
            The app runs entirely on Atlassian infrastructure with no external
            data egress. See the{" "}
            <Link href="/privacy" className="text-accent hover:underline">
              privacy policy
            </Link>{" "}
            for exactly what it accesses and stores.
          </p>
        </Reveal>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/"
            className="font-mono text-sm font-bold text-text-secondary hover:text-accent transition-colors flex items-center gap-2 group w-fit"
          >
            Back to home
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
