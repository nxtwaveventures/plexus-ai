"use client";

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Brain, Heart, Wallet, BarChart, Shield, Database } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ProblemSlide from '@/components/ProblemSlide';
import SolutionSlide from '@/components/SolutionSlide';
import MarketSlide from '@/components/MarketSlide';

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
        }
    ];

    return (
        <main className="relative">
            {slides[currentSlide].content}
            <Navigation
                currentSlide={currentSlide}
                totalSlides={slides.length}
                onNext={nextSlide}
                onPrevious={previousSlide}
            />
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-accent w-6' : 'bg-white/30 hover:bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </main>
    );
} 