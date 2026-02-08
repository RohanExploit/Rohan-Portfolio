'use client'

import { TypeAnimation } from 'react-type-animation';

export default function TerminalHero() {
    return (
        <div className="font-mono">
            <div className="mb-8 rounded-lg border border-accent/30 bg-black/40 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-error"></div>
                    <div className="h-3 w-3 rounded-full bg-warning"></div>
                    <div className="h-3 w-3 rounded-full bg-success"></div>
                    <span className="ml-4 text-sm text-text-tertiary">terminal@rohan</span>
                </div>

                <div className="space-y-2 text-sm sm:text-base">
                    <div className="flex items-start gap-2">
                        <span className="text-accent">$</span>
                        <TypeAnimation
                            sequence={[
                                'whoami',
                                1000,
                                'whoami\n> Rohan Gaikwad',
                                2000,
                                'whoami\n> Rohan Gaikwad\n\n$ cat role.txt',
                                1000,
                                'whoami\n> Rohan Gaikwad\n\n$ cat role.txt\n> Software Engineer & System Architect',
                                2000,
                                'whoami\n> Rohan Gaikwad\n\n$ cat role.txt\n> Software Engineer & System Architect\n\n$ ls skills/',
                                1000,
                                'whoami\n> Rohan Gaikwad\n\n$ cat role.txt\n> Software Engineer & System Architect\n\n$ ls skills/\n> Python  React  TypeScript  Docker  AI/ML',
                                2000,
                                'whoami\n> Rohan Gaikwad\n\n$ cat role.txt\n> Software Engineer & System Architect\n\n$ ls skills/\n> Python  React  TypeScript  Docker  AI/ML\n\n$ status',
                                1000,
                                'whoami\n> Rohan Gaikwad\n\n$ cat role.txt\n> Software Engineer & System Architect\n\n$ ls skills/\n> Python  React  TypeScript  Docker  AI/ML\n\n$ status\n> ✓ Open for Engineering Roles',
                                3000,
                            ]}
                            speed={75}
                            className="whitespace-pre-wrap text-text-primary"
                            repeat={Infinity}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
