"use client";

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Heart, Shield, ChevronRight, PieChart, BarChart4, Wallet, Sparkles, AlertTriangle, Clock, Activity, LineChart, Trophy, ArrowUpRight, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const lifexRef = useRef<HTMLDivElement>(null);
    const problemRef = useRef<HTMLDivElement>(null);
    const advantageRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const topRef = useRef<HTMLDivElement>(null);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically integrate with a form submission service
        console.log({ name, email, message });
        setSubmitted(true);

        // Reset form
        setTimeout(() => {
            setName('');
            setEmail('');
            setMessage('');
            setSubmitted(false);
        }, 5000);
    };

    return (
        <main className="min-h-screen" ref={topRef}>
            {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 overflow-hidden">
                {/* Hero Content */}
                <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                        {/* Content Section - Left Side */}
                        <div className="text-left max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-4"
                            >
                                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient leading-tight">
                                    Saving Lives Through Innovation
                                </h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mb-8"
                            >
                                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                                    Accelerating MedTech, AI, and FinTech Innovation in Healthcare
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Button
                                    variant="glow"
                                    size="lg"
                                    className="group text-lg px-8 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                                    asChild
                                >
                                    <Link href="/apply-startup" className="flex items-center">
                                        Apply to Plexus AI
                                        <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>

                        {/* Video Section - Right Side */}
                        <ScrollReveal>
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/20 backdrop-blur-sm hover:shadow-purple-500/20 transition-all duration-300">
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    controls
                                >
                                    <source src="/plexusai.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-black/30 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <ScrollReveal>
                            <div className="card-glow p-8 text-center rounded-xl">
                                <h3 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                                    3+
                                </h3>
                                <p className="text-white/80 text-lg md:text-xl font-medium">
                                    Healthcare Startups
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="card-glow p-8 text-center rounded-xl">
                                <h3 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                    ₹1Cr+
                                </h3>
                                <p className="text-white/80 text-lg md:text-xl font-medium">
                                    Combined Valuation
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="card-glow p-8 text-center rounded-xl">
                                <h3 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
                                    100+
                                </h3>
                                <p className="text-white/80 text-lg md:text-xl font-medium">
                                    Healthcare Network
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Top Companies Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="text-2xl font-semibold mb-12 text-center">
                            Top Plexus Companies
                        </h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-70">
                        {/* Placeholder for company logos */}
                        {Array.from({ length: 12 }).map((_, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="aspect-video rounded-lg bg-white/5 flex items-center justify-center">
                                    <p className="text-white/50 text-sm">Coming Soon</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Props Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-3xl font-bold mb-16 text-center">
                                We help founders build life-saving healthcare solutions.
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ScrollReveal delay={0.1}>
                                <div className="card-glow p-6 relative overflow-hidden group">
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 mb-4">
                                            <Image
                                                src="/images/icons/early-stage.svg"
                                                alt="Early Stage"
                                                width={48}
                                                height={48}
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-4">We help founders at their earliest stages</h3>
                                        <p className="text-white/70">Supporting healthcare innovators from concept to clinical validation.</p>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <div className="card-glow p-6 relative overflow-hidden group">
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 mb-4">
                                            <Image
                                                src="/images/icons/success-rate.svg"
                                                alt="Success Rate"
                                                width={48}
                                                height={48}
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-4">We improve success rates</h3>
                                        <p className="text-white/70">Through mentorship, clinical validation, and market access support.</p>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <div className="card-glow p-6 relative overflow-hidden group">
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 mb-4">
                                            <Image
                                                src="/images/icons/funding.svg"
                                                alt="Funding"
                                                width={48}
                                                height={48}
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-4">We provide fundraising advantage</h3>
                                        <p className="text-white/70">Access to healthcare-focused investors and funding opportunities.</p>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.4}>
                                <div className="card-glow p-6 relative overflow-hidden group">
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 mb-4">
                                            <Image
                                                src="/images/icons/track-record.svg"
                                                alt="Track Record"
                                                width={48}
                                                height={48}
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-4">Track record of success</h3>
                                        <p className="text-white/70">Our startups are transforming healthcare delivery across India.</p>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formula for Success */}
            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-3xl font-bold mb-12 text-center">
                                Our Formula for Success
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ScrollReveal delay={0.1}>
                                <div className="card-glow p-6">
                                    <h3 className="text-xl font-semibold mb-4">Expert Healthcare Partners</h3>
                                    <p className="text-white/70">Each startup is assigned dedicated healthcare mentors who have built and scaled successful healthcare solutions.</p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <div className="card-glow p-6">
                                    <h3 className="text-xl font-semibold mb-4">Clinical Network</h3>
                                    <p className="text-white/70">Access to leading hospitals and healthcare facilities for validation and pilot programs.</p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <div className="card-glow p-6">
                                    <h3 className="text-xl font-semibold mb-4">Founder Community</h3>
                                    <p className="text-white/70">Join a network of healthcare innovators sharing insights and opportunities.</p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-3xl font-bold mb-12 text-center">
                                Hear from the Community
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ScrollReveal delay={0.1}>
                                <div className="card-glow p-6">
                                    <p className="text-lg mb-6 text-white/90">"Plexus AI's clinical validation support was crucial for our product development. Their network opened doors we couldn't have accessed otherwise."</p>
                                    <div className="flex items-center">
                                        <div className="relative w-12 h-12">
                                            <Image
                                                src="/images/testimonials/founder1.svg"
                                                alt="Dr. Sharma"
                                                fill
                                                className="rounded-full object-cover"
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-semibold">Dr. Sharma</p>
                                            <p className="text-sm text-white/70">Founder, HealthTech Startup</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <div className="card-glow p-6">
                                    <p className="text-lg mb-6 text-white/90">"The mentorship and healthcare expertise at Plexus AI helped us refine our solution and find product-market fit faster than we could have on our own."</p>
                                    <div className="flex items-center">
                                        <div className="relative w-12 h-12">
                                            <Image
                                                src="/images/testimonials/founder2.svg"
                                                alt="Priya Patel"
                                                fill
                                                className="rounded-full object-cover"
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-semibold">Priya Patel</p>
                                            <p className="text-sm text-white/70">CEO, MedTech Innovation</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/cta-bg.svg')] opacity-5"></div>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollReveal>
                            <h2 className="text-3xl font-bold mb-8">
                                Ready to transform healthcare?
                            </h2>
                            <Button variant="glow" size="lg" className="group" asChild>
                                <Link href="/apply-startup">
                                    Apply Now
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-white/10 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                            <div className="mb-6 md:mb-0">
                                <Link href="/" className="flex items-center space-x-2">
                                    <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Plexus AI</span>
                                </Link>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6">
                                <Link href="/#about" className="text-white/70 hover:text-white transition-colors">About</Link>
                                <Link href="/#lifex" className="text-white/70 hover:text-white transition-colors">Plexus LifeX</Link>
                                <Link href="/#contact" className="text-white/70 hover:text-white transition-colors">Contact</Link>
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                            <p className="text-white/50 text-sm mb-4 md:mb-0">
                                &copy; {new Date().getFullYear()} Plexus AI. All rights reserved.
                            </p>

                            <div className="flex items-center space-x-6">
                                <a href="#" className="text-white/50 hover:text-white text-sm">Privacy Policy</a>
                                <a href="#" className="text-white/50 hover:text-white text-sm">Terms of Service</a>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-accent/80 italic">
                                Powered by Plexus AI – Center of Excellence
                            </p>
                            <p className="text-accent/90 font-medium mt-2">
                                Because Every Life Deserves More
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll to top button */}
            <button
                className={`scroll-top-button ${showScrollTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </main>
    );
} 