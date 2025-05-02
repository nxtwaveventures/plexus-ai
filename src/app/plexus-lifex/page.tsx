'use client';

import { HeartPulse, Wallet, Users, ArrowRight, Brain, FileText, BookOpen, Lightbulb } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PlexusLifeX() {
    const pathname = usePathname();

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="min-h-[60vh] flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background to-background/60 pointer-events-none"></div>
                <div className="container mx-auto px-4 py-20 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="animate-fade-in">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                                Plexus LifeX
                            </h1>
                        </div>
                        <div className="animate-fade-in-delayed">
                            <p className="text-xl text-white/90 mb-8">
                                Transforming Healthcare Access Through AI-Powered Financial Solutions
                            </p>
                            <Link
                                href="/pitch-deck"
                                target="_blank"
                                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                View Pitch Deck
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 relative bg-gradient-to-b from-background via-background/95 to-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                                Key Features
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ScrollReveal delay={0.1}>
                                <div className="card-glow p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                            <HeartPulse className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold">Healthcare Access</h3>
                                    </div>
                                    <p className="text-white/70">
                                        AI-powered platform connecting patients with affordable healthcare solutions.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <div className="card-glow p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                                            <Wallet className="w-6 h-6 text-secondary" />
                                        </div>
                                        <h3 className="text-xl font-semibold">Financial Solutions</h3>
                                    </div>
                                    <p className="text-white/70">
                                        Innovative financing options and insurance products powered by AI.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <div className="card-glow p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                                            <Users className="w-6 h-6 text-accent" />
                                        </div>
                                        <h3 className="text-xl font-semibold">Community Support</h3>
                                    </div>
                                    <p className="text-white/70">
                                        Building a supportive ecosystem for healthcare access and financial wellness.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 