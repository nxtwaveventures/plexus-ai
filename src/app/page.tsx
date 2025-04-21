"use client";

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Brain, Heart, Wallet, BarChart, Shield, Database } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ProblemSlide from '@/components/ProblemSlide';
import SolutionSlide from '@/components/SolutionSlide';
import MarketSlide from '@/components/MarketSlide';
import Store from '@/components/Store';
import Email from '@/components/Email';
import Header from '@/components/Header';

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const previousSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') previousSlide();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide]);

    const slides = [
        {
            id: 'cover',
            content: (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mb-6"
                        >
                            <img src="/logo.svg" alt="Plexus LifeX" className="h-20 mx-auto mb-6" />
                            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                                Plexus LifeX
                            </h1>
                            <p className="text-2xl md:text-3xl text-accent-foreground mb-8">Live Longer. Live Smarter.</p>
                        </motion.div>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <p className="text-xl text-gray-300 mb-2">Presented by: Plexus.ai | PlexusLife</p>
                            <p className="text-lg text-gray-400">Sandbox Proposal for: International Financial Services Centre Authority (IFSCA), GIFT City</p>
                        </motion.div>
                    </div>
                </motion.div>
            )
        },
        {
            id: 'opportunity',
            content: (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="min-h-screen flex items-center justify-center bg-background text-white py-20"
                >
                    <div className="max-w-6xl mx-auto px-4">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                The Big Opportunity
                            </h2>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="space-y-6"
                            >
                                <div className="flex items-start gap-4 bg-white/5 p-6 rounded-xl">
                                    <BarChart className="w-8 h-8 text-primary" />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">250M+ Above Age 60 by 2050</h3>
                                        <p className="text-gray-400">India's aging population presents a massive opportunity</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 bg-white/5 p-6 rounded-xl">
                                    <Heart className="w-8 h-8 text-accent" />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Rising Chronic Diseases</h3>
                                        <p className="text-gray-400">Healthcare costs are skyrocketing</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="space-y-6"
                            >
                                <div className="flex items-start gap-4 bg-white/5 p-6 rounded-xl">
                                    <Wallet className="w-8 h-8 text-secondary" />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">$30B+ Market by 2030</h3>
                                        <p className="text-gray-400">Global Longevity Finance market potential</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 bg-white/5 p-6 rounded-xl">
                                    <Brain className="w-8 h-8 text-primary" />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">GIFT City Innovation</h3>
                                        <p className="text-gray-400">Becoming the epicenter of Longevity Finance</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )
        },
        {
            id: 'problem',
            content: <ProblemSlide />
        },
        {
            id: 'solution',
            content: <SolutionSlide />
        },
        {
            id: 'market',
            content: <MarketSlide />
        },
        {
            id: 'store',
            content: <Store />
        },
        {
            id: 'contact',
            content: <Email />
        }
    ];

    return (
        <main className="min-h-screen bg-background">
            <Header />
            <Navigation />

            <section id="home" className="min-h-screen flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
                <div className="absolute inset-0 bg-grid-white/[0.02]" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Welcome to Plexus AI
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
                        Revolutionizing healthcare and finance with AI-powered solutions
                    </p>
                    <button
                        onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Learn More
                    </button>
                </div>
            </section>

            <section id="problem" className="min-h-screen">
                <ProblemSlide />
            </section>

            <section id="solution" className="min-h-screen">
                <SolutionSlide />
            </section>

            <section id="market" className="min-h-screen">
                <MarketSlide />
            </section>

            <section id="store" className="min-h-screen">
                <Store />
            </section>

            <section id="contact" className="min-h-screen">
                <Email />
            </section>
        </main>
    );
} 