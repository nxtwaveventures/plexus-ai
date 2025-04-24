'use client';

import { motion } from 'framer-motion';
import { Brain, Microscope, BookOpen, GraduationCap, LineChart, Shield } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Research() {
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
                                Research at Plexus AI
                            </h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-xl text-white/90 mb-4">
                                Advancing AI Research for Healthcare Innovation
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Research Areas */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                                Research Focus Areas
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ScrollReveal delay={0.1}>
                                <div className="card-glow p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                            <Brain className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold">AI in Healthcare</h3>
                                    </div>
                                    <p className="text-white/70">
                                        Developing advanced AI models for disease prediction, diagnosis, and personalized treatment planning.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <div className="card-glow p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                                            <Microscope className="w-6 h-6 text-secondary" />
                                        </div>
                                        <h3 className="text-xl font-semibold">Clinical Research</h3>
                                    </div>
                                    <p className="text-white/70">
                                        Conducting clinical studies to validate AI solutions and improve healthcare outcomes.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <div className="card-glow p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                                            <LineChart className="w-6 h-6 text-accent" />
                                        </div>
                                        <h3 className="text-xl font-semibold">Health Analytics</h3>
                                    </div>
                                    <p className="text-white/70">
                                        Researching predictive analytics and population health management using AI.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.4}>
                                <div className="card-glow p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                            <Shield className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold">Ethical AI</h3>
                                    </div>
                                    <p className="text-white/70">
                                        Ensuring responsible AI development with focus on privacy, fairness, and transparency.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Collaborations */}
            <section className="py-20 relative bg-gradient-to-b from-background/90 to-background/70">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                                Academic Collaborations
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ScrollReveal delay={0.1}>
                                <div className="card-glow text-center p-6">
                                    <div className="mb-4 flex justify-center">
                                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                                            <BookOpen className="w-8 h-8 text-primary" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Research Partnerships</h3>
                                    <p className="text-white/70">
                                        Collaborating with leading academic institutions on cutting-edge AI research.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <div className="card-glow text-center p-6">
                                    <div className="mb-4 flex justify-center">
                                        <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                                            <GraduationCap className="w-8 h-8 text-secondary" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Student Programs</h3>
                                    <p className="text-white/70">
                                        Supporting student research and providing mentorship in AI and healthcare.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <div className="card-glow text-center p-6">
                                    <div className="mb-4 flex justify-center">
                                        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                                            <Brain className="w-8 h-8 text-accent" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Knowledge Exchange</h3>
                                    <p className="text-white/70">
                                        Sharing research findings and best practices with the academic community.
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