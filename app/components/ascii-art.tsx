'use client'

import { useEffect, useState } from 'react'

export default function AsciiArt() {
    const [frame, setFrame] = useState(0)

    const frames = [
        `
    ██████╗  ██████╗ ██╗  ██╗ █████╗ ███╗   ██╗
    ██╔══██╗██╔═══██╗██║  ██║██╔══██╗████╗  ██║
    ██████╔╝██║   ██║███████║███████║██╔██╗ ██║
    ██╔══██╗██║   ██║██╔══██║██╔══██║██║╚██╗██║
    ██║  ██║╚██████╔╝██║  ██║██║  ██║██║ ╚████║
    ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
    `,
        `
    ██████╗  ██████╗ ██╗  ██╗ █████╗ ███╗   ██╗
    ██╔══██╗██╔═══██╗██║  ██║██╔══██╗████╗  ██║
    ██████╔╝██║   ██║███████║███████║██╔██╗ ██║
    ██╔══██╗██║   ██║██╔══██║██╔══██║██║╚██╗██║
    ██║  ██║╚██████╔╝██║  ██║██║  ██║██║ ╚████║
    ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
    `
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setFrame((prev) => (prev + 1) % frames.length)
        }, 500)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="glass-card p-6 overflow-hidden relative group hover-lift">
            <pre className="text-accent text-[8px] sm:text-xs leading-tight font-bold select-none transition-all duration-300 group-hover:scale-105">
                {frames[frame]}
            </pre>
            <div className="mt-4 text-center">
                <p className="text-text-secondary text-sm">Software Engineer • System Architect</p>
                <p className="text-accent text-xs mt-2 font-mono">[ BUILDING THE FUTURE ]</p>
            </div>

            {/* Animated border glow */}
            <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 transition-all duration-300 rounded-lg pointer-events-none" />
        </div>
    )
}
