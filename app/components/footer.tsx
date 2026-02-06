import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Phone } from "lucide-react";
import { ROHAN_DATA } from "@/lib/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-600 bg-steel py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="font-mono text-sm font-bold text-github-green">
              About
            </h3>
            <p className="mt-4 text-sm text-text-secondary">
              Full-stack developer passionate about building impactful software
              and contributing to open-source projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-sm font-bold text-github-green">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/projects"
                  className="text-text-secondary hover:text-github-green transition-colors"
                >
                  View Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/certifications"
                  className="text-text-secondary hover:text-github-green transition-colors"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  href="/open-source"
                  className="text-text-secondary hover:text-github-green transition-colors"
                >
                  Open Source
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-mono text-sm font-bold text-github-green">
              Connect
            </h3>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/RohanExploit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-github-green transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/rohanvijaygaikwad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-info transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/rohan_critic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${ROHAN_DATA.contact.email}`}
                className="text-text-secondary hover:text-github-green transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={`tel:${ROHAN_DATA.contact.phone}`}
                className="text-text-secondary hover:text-github-green transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-600 pt-8 text-center">
          <p className="text-sm text-text-tertiary">
            © {currentYear} Rohan Gaikwad. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
