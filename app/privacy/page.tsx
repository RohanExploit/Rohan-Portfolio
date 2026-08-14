import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Bulk Ops for Confluence",
  description:
    "Privacy policy for Bulk Ops for Confluence. Runs entirely on Atlassian Forge with zero external data egress.",
};

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "How the app runs",
    body: [
      "The app is built on Atlassian Forge and runs on Atlassian's own hosted platform. It makes no network calls to any external service — no analytics, no logging services, no AI or language model APIs, no third-party processors of any kind. This is enforced by the platform itself: the app declares no external egress permissions, and Atlassian blocks any attempt to make one.",
    ],
  },
  {
    heading: "What the app accesses",
    body: [
      "To perform an operation you explicitly start, the app reads and writes Confluence data on your behalf, using permissions you approve at install time:",
      "Pages, their content, and their position in the page tree; attachments on the pages being copied; folders and space details; page templates, when copying templates; and a content property used to mark items the app has already created, so an interrupted job can resume without duplicating work.",
      "This access happens only while an operation you started is running, and only within the spaces you select.",
    ],
  },
  {
    heading: "What the app stores",
    body: [
      "The app stores operational state in Atlassian Forge storage, which resides within Atlassian's infrastructure and is scoped to your site. This is limited to: job records (what operation was requested, its status, progress and timestamps); a cursor marking how far a job has progressed, so it can resume after an interruption; a map of source item identifiers to the identifiers of their copies, used to rewrite internal links correctly; and per-item reports listing what succeeded, failed, or was skipped, including page titles.",
      "The app does not store the body content of your pages, your attachments, or any file data. It does not build a copy of your Confluence content anywhere.",
    ],
  },
  {
    heading: "Data retention and deletion",
    body: [
      "Job records and reports remain in Forge storage so you can review what an operation did. Uninstalling the app removes its Forge storage, and with it all job records, cursors, identifier maps and reports. Pages, attachments and other content the app created in your Confluence site are yours and are not affected by uninstalling.",
    ],
  },
  {
    heading: "Personal data",
    body: [
      "The app does not collect, request or store personal data about you or your users. It does not use cookies, tracking pixels, or analytics. Job records may incidentally contain page titles that you or your colleagues have written; the app has no other exposure to personal information.",
      "If you email us for support, we will hold that correspondence in our email account in order to answer you. We do not add support contacts to marketing lists.",
    ],
  },
  {
    heading: "Third parties and sub-processors",
    body: [
      "We use no sub-processors for the app. Atlassian hosts the app, processes payment for it, and stores its data — their handling of that data is governed by the Atlassian Privacy Policy. Email support is handled through our own email provider.",
    ],
  },
  {
    heading: "Security",
    body: [
      "The app inherits Atlassian Forge's security model. It holds no credentials of its own, operates only under the scopes you approve at install, and has no infrastructure of ours for an attacker to reach — because there is none. The list of permissions the app requests is shown to you before installation and on the Marketplace listing.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "If this policy changes materially — for example if a future version of the app needed to call an external service — we will update this page and the date above, and note it in the app's release notes.",
    ],
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-sm text-accent uppercase tracking-widest font-bold">
            /privacy
          </p>
          <h1 className="mt-2 font-mono text-5xl font-bold text-text-primary underline decoration-accent/30 underline-offset-8">
            Privacy Policy
          </h1>
          <p className="mt-4 font-mono text-sm text-text-secondary">
            Bulk Ops for Confluence · Last updated 14 August 2026
          </p>
        </div>

        {/* Short version */}
        <div className="mb-12 glass-card p-8 border-accent/20">
          <p className="text-lg text-text-secondary leading-relaxed font-medium">
            <span className="text-text-primary font-bold">
              The short version.{" "}
            </span>
            The app runs entirely inside Atlassian&apos;s infrastructure. Your
            Confluence content is never sent to us, to any third party, or to
            any AI service. We cannot read your content, and we do not want to.
          </p>
          <p className="mt-4 text-sm text-text-secondary leading-relaxed">
            This policy covers Bulk Ops for Confluence (&quot;the app&quot;),
            published on the Atlassian Marketplace by Rohan Gaikwad
            (&quot;we&quot;, &quot;us&quot;), an individual developer based in
            Maharashtra, India.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="font-mono text-2xl font-bold text-text-primary mb-4 flex items-center gap-4">
                <span className="h-px w-8 bg-accent"></span>
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-14 glass-card p-8 border-accent/20">
          <h2 className="font-mono text-xl font-bold text-accent mb-3">
            Contact
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Rohan Gaikwad · Maharashtra, India
            <br />
            <a
              href="mailto:support@rohangaikwad.in"
              className="text-accent hover:underline"
            >
              support@rohangaikwad.in
            </a>
          </p>
        </div>

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
