"use client";

import Image from "next/image";

export default function GitHubStats() {
  const username = "RohanExploit";

  return (
    <div className="w-full space-y-8">
      <div className="text-center">
        <h2 className="font-mono text-3xl font-bold text-text-primary mb-4">
          📊 GitHub Analytics
        </h2>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-card p-6 hover-lift overflow-hidden">
          <Image
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=39FF14&text_color=ffffff&icon_color=39FF14&bg_color=00000000`}
            alt="GitHub Stats"
            width={500}
            height={200}
            className="w-full h-auto"
            unoptimized
          />
        </div>

        <div className="glass-card p-6 hover-lift overflow-hidden">
          <Image
            src={`https://streak-stats.demolab.com?user=${username}&theme=dark&hide_border=true&background=00000000&stroke=39FF14&ring=39FF14&fire=39FF14&currStreakLabel=39FF14&sideLabels=ffffff&currStreakNum=ffffff&sideNums=ffffff&dates=888888`}
            alt="GitHub Streak"
            width={500}
            height={200}
            className="w-full h-auto"
            unoptimized
          />
        </div>
      </div>

      {/* Contribution Graph */}
      <div className="glass-card p-6 hover-lift overflow-hidden">
        <Image
          src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&custom_title=Contribution%20Graph&bg_color=00000000&color=39FF14&line=39FF14&point=FFFFFF&area=true&hide_border=true&title_color=39FF14`}
          alt="Contribution Graph"
          width={1000}
          height={300}
          className="w-full h-auto"
          unoptimized
        />
      </div>

      {/* Trophies */}
      <div className="glass-card p-6 hover-lift overflow-hidden flex justify-center">
        <Image
          src={`https://github-trophies.vercel.app/?username=${username}&theme=matrix&margin-w=10&row=1&column=6&no-frame=true&no-bg=true`}
          alt="GitHub Trophies"
          width={900}
          height={150}
          className="w-full h-auto max-w-4xl"
          unoptimized
        />
      </div>
    </div>
  );
}
