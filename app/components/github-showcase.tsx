'use client'

import Image from 'next/image'

export default function GitHubShowcase() {
    const username = 'RohanExploit'

    return (
        <div className="w-full space-y-12">
            {/* Banner */}
            <div className="glass-card p-6 overflow-hidden hover-lift">
                <Image
                    src="https://github.com/RohanExploit/RohanExploit/blob/main/banner.png?raw=true"
                    alt="Rohan Exploit Banner"
                    width={1200}
                    height={300}
                    className="w-full h-auto rounded-lg"
                    unoptimized
                />
            </div>

            {/* Typing Animation */}
            <div className="glass-card p-6 flex justify-center items-center hover-lift">
                <Image
                    src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&size=32&duration=3000&pause=1000&color=39FF14&center=true&vCenter=true&width=700&lines=System.out.println(%22Rohan+Gaikwad%22)%3B;Security+Enthusiast;Full+Stack+Developer;DevSecOps+Learner"
                    alt="Typing Animation"
                    width={700}
                    height={60}
                    className="w-full h-auto"
                    unoptimized
                />
            </div>

            {/* Social Badges */}
            <div className="glass-card p-8 hover-lift">
                <h3 className="font-mono text-xl font-bold text-accent mb-6 flex items-center gap-2">
                    <span className="h-px w-8 bg-accent"></span>
                    Connect With Me
                </h3>
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                    <a href="https://discord.gg/Rohan_exploit" target="_blank" rel="noopener noreferrer">
                        <Image src="https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white" alt="Discord" width={100} height={28} unoptimized />
                    </a>
                    <a href="https://facebook.com/Rohan.opts" target="_blank" rel="noopener noreferrer">
                        <Image src="https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white" alt="Facebook" width={120} height={28} unoptimized />
                    </a>
                    <a href="https://instagram.com/Rohan.opts" target="_blank" rel="noopener noreferrer">
                        <Image src="https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white" alt="Instagram" width={120} height={28} unoptimized />
                    </a>
                    <a href="https://linkedin.com/in/rohanvijaygaikwad" target="_blank" rel="noopener noreferrer">
                        <Image src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white" alt="LinkedIn" width={110} height={28} unoptimized />
                    </a>
                    <a href="https://medium.com/@RohanExploit" target="_blank" rel="noopener noreferrer">
                        <Image src="https://img.shields.io/badge/Medium-12100E?logo=medium&logoColor=white" alt="Medium" width={100} height={28} unoptimized />
                    </a>
                    <a href="https://reddit.com/user/Charming_Wolf_2759" target="_blank" rel="noopener noreferrer">
                        <Image src="https://img.shields.io/badge/Reddit-%23FF4500.svg?logo=Reddit&logoColor=white" alt="Reddit" width={90} height={28} unoptimized />
                    </a>
                    <a href="https://x.com/rohan_critic" target="_blank" rel="noopener noreferrer">
                        <Image src="https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white" alt="X" width={50} height={28} unoptimized />
                    </a>
                    <a href="https://youtube.com/@GreatestManOfWorld" target="_blank" rel="noopener noreferrer">
                        <Image src="https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white" alt="YouTube" width={110} height={28} unoptimized />
                    </a>
                    <a href="mailto:itzrohan007@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Image src="https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white" alt="Email" width={80} height={28} unoptimized />
                    </a>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="glass-card p-8 hover-lift">
                <h3 className="font-mono text-xl font-bold text-accent mb-6 flex items-center gap-2">
                    <span className="h-px w-8 bg-accent"></span>
                    Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                    <Image src="https://img.shields.io/badge/C-%2300599C.svg?style=plastic&logo=c&logoColor=white" alt="C" width={60} height={28} unoptimized />
                    <Image src="https://img.shields.io/badge/C++-%2300599C.svg?style=plastic&logo=c%2B%2B&logoColor=white" alt="C++" width={75} height={28} unoptimized />
                    <Image src="https://img.shields.io/badge/Java-%23ED8B00.svg?style=plastic&logo=openjdk&logoColor=white" alt="Java" width={80} height={28} unoptimized />
                    <Image src="https://img.shields.io/badge/Python-3670A0?style=plastic&logo=python&logoColor=ffdd54" alt="Python" width={100} height={28} unoptimized />
                    <Image src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" width={120} height={28} unoptimized />
                    <Image src="https://img.shields.io/badge/React-%2320232a.svg?style=plastic&logo=react" alt="React" width={90} height={28} unoptimized />
                    <Image src="https://img.shields.io/badge/Node.js-43853D?style=plastic&logo=node.js&logoColor=white" alt="Node.js" width={100} height={28} unoptimized />
                    <Image src="https://img.shields.io/badge/Docker-%230db7ed.svg?style=plastic&logo=docker&logoColor=white" alt="Docker" width={95} height={28} unoptimized />
                    <Image src="https://img.shields.io/badge/AWS-232F3E?style=plastic&logo=amazonaws" alt="AWS" width={75} height={28} unoptimized />
                    <Image src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=plastic&logo=mongodb&logoColor=white" alt="MongoDB" width={120} height={28} unoptimized />
                    <Image src="https://img.shields.io/badge/MySQL-4479A1.svg?style=plastic&logo=mysql&logoColor=white" alt="MySQL" width={95} height={28} unoptimized />
                </div>
            </div>

            {/* GitHub Activity */}
            <div className="space-y-6">
                <h3 className="font-mono text-2xl font-bold text-accent text-center flex items-center justify-center gap-4">
                    <span className="h-px w-12 bg-accent"></span>
                    GitHub Activity
                    <span className="h-px w-12 bg-accent"></span>
                </h3>

                {/* Streak */}
                <div className="glass-card p-6 hover-lift overflow-hidden">
                    <Image
                        src={`https://streak-stats.demolab.com?user=${username}&theme=dark&hide_border=true&background=00000000&stroke=39FF14&ring=39FF14&fire=39FF14&currStreakLabel=39FF14&sideLabels=ffffff&currStreakNum=ffffff&sideNums=ffffff&dates=888888`}
                        alt="GitHub Streak"
                        width={600}
                        height={200}
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

                {/* Contribution Graph */}
                <div className="glass-card p-6 hover-lift overflow-hidden">
                    <Image
                        src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&custom_title=My%20GitHub%20Activity&bg_color=00000000&color=39FF14&line=39FF14&point=FFFFFF&area=true&hide_border=true&title_color=39FF14`}
                        alt="Contribution Graph"
                        width={1000}
                        height={300}
                        className="w-full h-auto"
                        unoptimized
                    />
                </div>
            </div>

            {/* Support */}
            <div className="glass-card p-8 text-center hover-lift border-2 border-accent/30">
                <h3 className="font-mono text-xl font-bold text-accent mb-4">
                    💰 Support Social-Welfare Open Source
                </h3>
                <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                    All donations directly support development, hosting, and scaling of social-impact software projects,
                    especially Vishwaguru, which focuses on public grievance reporting and civic transparency.
                </p>
                <a href="https://buymeacoffee.com/rohanexploit" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"
                        alt="Buy Me A Coffee"
                        width={200}
                        height={40}
                        className="inline-block hover:scale-105 transition-transform"
                        unoptimized
                    />
                </a>
            </div>
        </div>
    )
}
