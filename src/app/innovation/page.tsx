'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Zap, Cpu, Network, Code2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Innovation() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="min-h-[60vh] flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background to-background/60 pointer-events-none"></div>
                <div className="container mx-auto px-4 py-20 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                                Innovation at Plexus AI
                            </h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-xl text-white/90 mb-4">
                                Pioneering AI Solutions for Healthcare Transformation
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Innovation Projects */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                                Our Innovation Projects
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ScrollReveal delay={0.2}>
                                <div className="card-glow p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                                            <Cpu className="w-6 h-6 text-secondary" />
                                        </div>
                                        <h3 className="text-xl font-semibold">AI Diagnostics</h3>
                                    </div>
                                    <p className="text-white/70">
                                        Advanced AI systems for early disease detection and accurate diagnosis.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <div className="card-glow p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                                            <Network className="w-6 h-6 text-accent" />
                                        </div>
                                        <h3 className="text-xl font-semibold">Healthcare Analytics</h3>
                                    </div>
                                    <p className="text-white/70">
                                        Predictive analytics platform for population health management and resource optimization.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.4}>
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold">Clinical Validation Platform</h3>
                                    <p className="text-gray-300 mt-4">
                                        Accelerate your healthcare innovation with our comprehensive clinical validation platform and regulatory support.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Innovation Approach */}
            <section className="py-20 relative bg-gradient-to-b from-background/90 to-background/70">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                                Our Innovation Approach
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ScrollReveal delay={0.1}>
                                <div className="card-glow text-center p-6">
                                    <div className="mb-4 flex justify-center">
                                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                                            <Lightbulb className="w-8 h-8 text-primary" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Research-Driven</h3>
                                    <p className="text-white/70">
                                        Grounding innovation in cutting-edge research and scientific validation.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <div className="card-glow text-center p-6">
                                    <div className="mb-4 flex justify-center">
                                        <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                                            <Zap className="w-8 h-8 text-secondary" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Rapid Prototyping</h3>
                                    <p className="text-white/70">
                                        Fast-tracking ideas from concept to implementation through agile development.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <div className="card-glow text-center p-6">
                                    <div className="mb-4 flex justify-center">
                                        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                                            <Network className="w-8 h-8 text-accent" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Ecosystem Building</h3>
                                    <p className="text-white/70">
                                        Creating collaborative networks to accelerate healthcare innovation.
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