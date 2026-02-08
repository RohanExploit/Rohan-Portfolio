import React from "react";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d0d",
  colorScheme: "dark",
  interactiveWidget: "resizes-content",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rohangaikwad.in/"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Rohan Gaikwad - Full-Stack Developer & AI Enthusiast",
    template: "%s | Rohan Gaikwad",
  },
  description:
    "Full-stack developer and AI enthusiast with 1.5+ years of experience. Specializing in scalable applications, machine learning, and open-source contributions.",
  keywords: [
    "developer",
    "full-stack",
    "AI",
    "machine learning",
    "open source",
    "Python",
    "React",
    "TypeScript",
    "Node.js",
    "Docker",
  ],
  creator: "Rohan Gaikwad",
  authors: [{ name: "Rohan Gaikwad", url: "https://rohangaikwad.in" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rohangaikwad.in",
    siteName: "Rohan Gaikwad",
    title: "Rohan Gaikwad - Full-Stack Developer & AI Enthusiast",
    description:
      "Full-stack developer and AI enthusiast with 1.5+ years of experience.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile%20photo-IUkJLFFn1HXs8tLuGH52CML8IR36Pu.jpg",
        width: 512,
        height: 512,
        alt: "Rohan Gaikwad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rohan_critic",
    creator: "@rohan_critic",
    title: "Rohan Gaikwad - Full-Stack Developer & AI Enthusiast",
    description:
      "Full-stack developer and AI enthusiast with 1.5+ years of experience.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile%20photo-IUkJLFFn1HXs8tLuGH52CML8IR36Pu.jpg",
    ],
  },
  manifest: "/manifest.json",
};

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} bg-obsidian text-text-primary tracking-tight antialiased`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="light"
        >
          <div className="flex min-h-screen w-full flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
