"use client";

import Link from "next/link";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ROHAN_DATA } from "@/lib/portfolio-data";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const roles = ["Developer", "AI Enthusiast", "Open Source Contributor"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <div className="min-h-screen bg-obsidian">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <p className="font-mono text-sm text-github-green">
                  Welcome to my portfolio
                </p>
                <h1 className="mt-4 font-mono text-4xl font-bold text-text-primary sm:text-5xl">
                  Rohan
                  <span className="block text-github-green">Gaikwad</span>
                </h1>
              </div>

              <div className="h-12">
                {mounted && (
                  <p className="font-mono text-lg text-text-secondary transition-opacity duration-500">
                    {roles[currentRole]}
                  </p>
                )}
              </div>

              <p className="max-w-lg text-text-secondary">
                Building scalable software solutions with a focus on AI,
                full-stack development, and open-source impact. Currently
                interning at Destiny Solutions and mentoring at Elite Coders.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-lg border border-github-green bg-github-green px-6 py-3 font-mono text-sm font-semibold text-obsidian transition-all duration-300 hover:bg-github-green-dark hover:border-github-green-dark"
                >
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={ROHAN_DATA.contact.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-info bg-info/10 px-6 py-3 font-mono text-sm font-semibold text-info transition-all duration-300 hover:bg-info/20"
                >
                  Download Resume
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/RohanExploit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-github-green transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/rohanvijaygaikwad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-info transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://x.com/rohan_critic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-secondary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href={`mailto:${ROHAN_DATA.contact.email}`}
                  className="text-text-secondary hover:text-accent-secondary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href={`tel:${ROHAN_DATA.contact.phone}`}
                  className="text-text-secondary hover:text-github-green transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Stats/Highlights */}
          <div className="flex flex-col justify-center gap-6">
            <div className="group rounded-lg border border-slate-600 bg-steel p-6 transition-all duration-300 hover:border-github-green hover:bg-steel">
              <p className="font-mono text-xs uppercase text-github-green">
                Experience
              </p>
              <h3 className="mt-2 font-mono text-2xl font-bold text-text-primary">
                1.5+ Years
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                Across internships, open-source contributions, and leadership
                roles
              </p>
            </div>

            <div className="group rounded-lg border border-slate-600 bg-steel p-6 transition-all duration-300 hover:border-github-green hover:bg-steel">
              <p className="font-mono text-xs uppercase text-info">Projects</p>
              <h3 className="mt-2 font-mono text-2xl font-bold text-text-primary">
                15+
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                From AI models to full-stack web applications
              </p>
            </div>

            <div className="group rounded-lg border border-slate-600 bg-steel p-6 transition-all duration-300 hover:border-github-green hover:bg-steel">
              <p className="font-mono text-xs uppercase text-github-green">
                Tech Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Python", "React", "TypeScript", "Docker", "ML"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="inline-block rounded-full border border-github-green/30 bg-github-green/10 px-3 py-1 font-mono text-xs text-github-green font-medium"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="border-t border-slate-600 bg-steel py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-mono text-3xl font-bold text-text-primary">
              Featured Areas
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Projects",
                description:
                  "Explore my portfolio of full-stack applications, AI models, and open-source contributions.",
                href: "/projects",
                icon: "◊",
                color: "text-github-green",
                hoverColor: "hover:border-github-green",
              },
              {
                title: "Experience",
                description:
                  "My journey through internships, mentorship, and professional development.",
                href: "/experience",
                icon: "▪",
                color: "text-info",
                hoverColor: "hover:border-info",
              },
              {
                title: "Certifications",
                description:
                  "Professional credentials and program participation demonstrating continuous learning.",
                href: "/certifications",
                icon: "★",
                color: "text-accent-secondary",
                hoverColor: "hover:border-accent-secondary",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`group rounded-lg border border-slate-600 bg-obsidian p-6 transition-all duration-300 ${item.hoverColor} hover:bg-steel`}
              >
                <div className={`text-2xl ${item.color}`}>{item.icon}</div>
                <h3
                  className={`mt-4 font-mono text-lg font-bold text-text-primary group-hover:${item.color}`}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {item.description}
                </p>
                <div
                  className={`mt-4 flex items-center gap-2 text-sm ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                >
                  Explore <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
