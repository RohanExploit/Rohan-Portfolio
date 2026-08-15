import Link from "next/link";
import { ArrowRight, Mail, Clock, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Support — Bulk Ops for Confluence",
  description:
    "Get support for Bulk Ops for Confluence. Direct email support from the developer, with a response within two business days.",
};

const channels: {
  icon: typeof Mail;
  heading: string;
  body: string;
  action?: { label: string; href: string };
}[] = [
  {
    icon: Mail,
    heading: "Email support",
    body: "Reach the developer directly. This mailbox is monitored for every support request — there is no bot in between and no queue you get lost in.",
    action: {
      label: "support@rohangaikwad.in",
      href: "mailto:support@rohangaikwad.in?subject=Bulk%20Ops%20for%20Confluence%20%E2%80%94%20support%20request",
    },
  },
  {
    icon: Clock,
    heading: "Response time",
    body: "You will get a reply within two business days, usually much sooner. If a request needs a code fix, the fix ships in the next app version and you are told when it is live.",
  },
  {
    icon: FileText,
    heading: "Documentation",
    body: "Setup, what each of the four operations does, the platform limits they respect, and how resume-after-failure works — all documented before you contact support.",
    action: { label: "Read the docs", href: "/bulk-ops" },
  },
];

const includeList = [
  "Your Confluence site URL (the *.atlassian.net address).",
  "Which operation you were running — copy space, copy page, reorder, or copy templates.",
  "What you expected to happen, and what happened instead.",
  "The per-item report the app shows after a job, if you have it — it names exactly which items failed.",
];

export default function Support() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-sm text-accent uppercase tracking-widest font-bold">
            /support
          </p>
          <h1 className="mt-2 font-mono text-5xl font-bold text-text-primary underline decoration-accent/30 underline-offset-8">
            Support
          </h1>
          <p className="mt-4 font-mono text-sm text-text-secondary">
            Bulk Ops for Confluence
          </p>
        </div>

        {/* Short version */}
        <div className="mb-12 glass-card p-8 border-accent/20">
          <p className="text-lg text-text-secondary leading-relaxed font-medium">
            <span className="text-text-primary font-bold">
              Support comes straight from the person who built the app.{" "}
            </span>
            Bulk Ops for Confluence is made and maintained by one developer.
            Email a real human, get a real answer, within two business days.
          </p>
        </div>

        {/* Channels */}
        <div className="space-y-6">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 border-accent/20 flex gap-5"
              >
                <div className="shrink-0">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </span>
                </div>
                <div>
                  <h2 className="font-mono text-xl font-bold text-text-primary mb-2">
                    {channel.heading}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {channel.body}
                  </p>
                  {channel.action && (
                    <a
                      href={channel.action.href}
                      className="mt-3 inline-flex items-center gap-2 font-mono text-sm font-bold text-accent hover:underline"
                    >
                      {channel.action.label}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* What to include */}
        <section className="mt-14">
          <h2 className="font-mono text-2xl font-bold text-text-primary mb-4 flex items-center gap-4">
            <span className="h-px w-8 bg-accent"></span>
            What to include in a support request
          </h2>
          <p className="text-text-secondary leading-relaxed mb-5">
            The more of this you send up front, the faster you get a fix:
          </p>
          <ul className="space-y-3">
            {includeList.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-text-secondary leading-relaxed"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact CTA */}
        <div className="mt-14 glass-card p-8 border-accent/20">
          <h2 className="font-mono text-xl font-bold text-accent mb-3">
            Contact
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Rohan Gaikwad · Maharashtra, India
            <br />
            <a
              href="mailto:support@rohangaikwad.in?subject=Bulk%20Ops%20for%20Confluence%20%E2%80%94%20support%20request"
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
