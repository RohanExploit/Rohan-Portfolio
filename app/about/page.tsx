import { ROHAN_DATA } from "@/lib/portfolio-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import GitHubShowcase from "../components/github-showcase";

export const metadata = {
  title: "About - Rohan Gaikwad",
  description:
    "Learn more about Rohan Gaikwad, a full-stack developer and AI enthusiast.",
};

export default function About() {
  const { about } = ROHAN_DATA;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-accent uppercase tracking-widest font-bold">
            /about
          </p>
          <h1 className="mt-2 font-mono text-5xl font-bold text-text-primary transition-all underline decoration-accent/30 underline-offset-8">
            {about.title}
          </h1>
        </div>

        {/* Profile & Intro Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-20">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border border-border glass-card shadow-2xl">
              <Image
                src={ROHAN_DATA.profilePhoto}
                alt="Rohan Gaikwad"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">Background</h2>
            <p className="text-lg text-text-secondary leading-relaxed font-medium">
              {about.intro}
            </p>
            {about.bio.map((paragraph, index) => (
              <p key={index} className="text-text-secondary leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="mb-20 grid gap-6 md:grid-cols-2">
          {about.highlights.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 hover-lift border-transparent hover:border-accent group"
            >
              <p className="font-mono text-xs uppercase text-accent tracking-widest font-bold mb-4">
                {item.label}
              </p>
              <p className="font-mono text-2xl font-bold text-text-primary group-hover:text-glow transition-all">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-20 glass-card p-10 border-accent/20">
          <h2 className="font-mono text-3xl font-bold text-text-primary mb-10 flex items-center gap-4">
            <span className="h-px w-12 bg-accent"></span>
            Core Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Impact-Driven",
                description:
                  "Building technology that solves real-world problems and creates meaningful change.",
              },
              {
                title: "Continuous Learning",
                description:
                  "Always expanding expertise through challenging projects and emerging technologies.",
              },
              {
                title: "Community First",
                description:
                  "Contributing to open-source and mentoring the next generation of developers.",
              },
            ].map((value, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-mono text-xl font-bold text-accent">
                  {value.title}
                </h3>
                <p className="text-md text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Showcase */}
        <div className="mb-20">
          <GitHubShowcase />
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-6 items-center justify-center pt-10 border-t border-border">
          <Link href="/projects" className="btn-primary">
            Explore My Work
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="font-mono text-sm font-bold text-text-secondary hover:text-accent transition-colors flex items-center gap-2 group"
          >
            Let&apos;s Collaborate
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
