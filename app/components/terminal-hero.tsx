"use client";

import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

export default function GlitchTerminal() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono relative">
      {/* CRT Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-transparent via-black/5 to-transparent bg-repeat-y animate-pulse"
        style={{ backgroundSize: "100% 4px" }}
      />

      {/* Terminal Window */}
      <div
        className={`relative rounded-lg border-2 border-accent bg-black/90 backdrop-blur-sm shadow-[0_0_30px_rgba(57,255,20,0.3)] ${glitch ? "animate-pulse" : ""}`}
      >
        {/* Terminal Header */}
        <div className="border-b-2 border-accent/30 bg-black/50 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-error animate-pulse"></div>
            <div className="h-3 w-3 rounded-full bg-warning"></div>
            <div className="h-3 w-3 rounded-full bg-success"></div>
          </div>
          <span className="text-xs text-accent font-bold tracking-widest">
            root@ROHAN:~
          </span>
          <div className="w-16"></div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 min-h-[300px] relative">
          {/* Glitch overlay */}
          {glitch && (
            <div className="absolute inset-0 bg-accent/20 mix-blend-screen pointer-events-none animate-ping" />
          )}

          <div className="space-y-3 text-sm sm:text-base">
            <div className="flex items-start gap-2">
              <span className="text-accent select-none">❯</span>
              <TypeAnimation
                sequence={[
                  "neofetch",
                  800,
                  `neofetch\n\n┌─────────────────────────────────────┐
│  🚀 ROHAN GAIKWAD                  │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  💼 Software Engineer              │
│  🎯 System Architect               │
│  🌐 https://rohangaikwad.in        │
└─────────────────────────────────────┘`,
                  2000,
                  `neofetch\n\n┌─────────────────────────────────────┐
│  🚀 ROHAN GAIKWAD                  │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  💼 Software Engineer              │
│  🎯 System Architect               │
│  🌐 https://rohangaikwad.in        │
└─────────────────────────────────────┘\n\n❯ cat ./expertise.json`,
                  1000,
                  `neofetch\n\n┌─────────────────────────────────────┐
│  🚀 ROHAN GAIKWAD                  │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  💼 Software Engineer              │
│  🎯 System Architect               │
│  🌐 https://rohangaikwad.in        │
└─────────────────────────────────────┘\n\n❯ cat ./expertise.json
{
  "languages": ["Python", "TypeScript", "JavaScript"],
  "frameworks": ["React", "Next.js", "Docker"],
  "specialties": ["AI/ML", "Cloud", "DevOps"],
  "status": "✓ READY_FOR_HIRE"
}`,
                  2500,
                  `neofetch\n\n┌─────────────────────────────────────┐
│  🚀 ROHAN GAIKWAD                  │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  💼 Software Engineer              │
│  🎯 System Architect               │
│  🌐 https://rohangaikwad.in        │
└─────────────────────────────────────┘\n\n❯ cat ./expertise.json
{
  "languages": ["Python", "TypeScript", "JavaScript"],
  "frameworks": ["React", "Next.js", "Docker"],
  "specialties": ["AI/ML", "Cloud", "DevOps"],
  "status": "✓ READY_FOR_HIRE"
}\n\n❯ ./deploy.sh --production`,
                  1000,
                  `neofetch\n\n┌─────────────────────────────────────┐
│  🚀 ROHAN GAIKWAD                  │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  💼 Software Engineer              │
│  🎯 System Architect               │
│  🌐 https://rohangaikwad.in        │
└─────────────────────────────────────┘\n\n❯ cat ./expertise.json
{
  "languages": ["Python", "TypeScript", "JavaScript"],
  "frameworks": ["React", "Next.js", "Docker"],
  "specialties": ["AI/ML", "Cloud", "DevOps"],
  "status": "✓ READY_FOR_HIRE"
}\n\n❯ ./deploy.sh --production
✓ Deploying to production...
✓ 15+ projects • 10+ certifications
✓ System ready. Let's build.`,
                  3000,
                ]}
                speed={80}
                className="whitespace-pre-wrap text-accent leading-relaxed"
                repeat={Infinity}
              />
            </div>
          </div>

          {/* Blinking cursor */}
          <div className="inline-block w-2 h-5 bg-accent ml-1 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
