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
    const videoRef = useRef<HTMLVideoElement>(null);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [videoPlayed, setVideoPlayed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        // Auto-play video with sound on first user interaction
        const handleFirstInteraction = () => {
            if (!videoPlayed && videoRef.current) {
                videoRef.current.muted = false;
                videoRef.current.play().catch(console.error);
                setVideoPlayed(true);
                // Remove listeners after first interaction
                document.removeEventListener('click', handleFirstInteraction);
                document.removeEventListener('scroll', handleFirstInteraction);
                document.removeEventListener('keydown', handleFirstInteraction);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Add listeners for first user interaction
        document.addEventListener('click', handleFirstInteraction);
        document.addEventListener('scroll', handleFirstInteraction);
        document.addEventListener('keydown', handleFirstInteraction);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('scroll', handleFirstInteraction);
            document.removeEventListener('keydown', handleFirstInteraction);
        };
    }, [videoPlayed]);

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
                                    Driving Patient Outcomes with Innovation & Purpose
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
                                    preload="metadata"
                                    ref={videoRef}
                                >
                                    <source src="/plexusai.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Audio indicator */}
                                {!videoPlayed && (
                                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-2 flex items-center space-x-2 text-white text-sm">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.816L4.846 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.846l3.537-3.816a1 1 0 011.617.816zM16 8a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>🔊 Audio</span>
                                    </div>
                                )}
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
            <footer className="bg-black border-t border-white/10">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Plexus AI</h3>
                            <div className="flex space-x-4 mb-4">
                                {/* Instagram */}
                                <a
                                    href="https://instagram.com/aiplexus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/70 hover:text-pink-400 transition-colors duration-300"
                                    aria-label="Follow us on Instagram"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>

                                {/* Twitter */}
                                <a
                                    href="https://twitter.com/plexusai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/70 hover:text-blue-400 transition-colors duration-300"
                                    aria-label="Follow us on Twitter"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://linkedin.com/company/plexusai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/70 hover:text-blue-500 transition-colors duration-300"
                                    aria-label="Follow us on LinkedIn"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link href="/#about" className="text-white/70 hover:text-white transition-colors">About</Link></li>
                                <li><Link href="/plexus-lifex" className="text-white/70 hover:text-white transition-colors">Plexus LifeX</Link></li>
                                <li><Link href="/#contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
                            <div className="text-white/70 space-y-2">
                                <p>📧 info@plexusai.in</p>
                                <p>📱 +91 12345 67890</p>
                                <p>📍 Mumbai, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10 mt-8 pt-8 text-center">
                        <p className="text-white/70">
                            © 2025 Plexus AI. All rights reserved.
                        </p>
                        <div className="flex justify-center space-x-6 mt-4">
                            <a href="/privacy-policy" className="text-white/70 hover:text-white transition-colors text-sm">
                                Privacy Policy
                            </a>
                            <a href="/terms-of-service" className="text-white/70 hover:text-white transition-colors text-sm">
                                Terms of Service
                            </a>
                        </div>
                        <p className="text-white/50 text-sm mt-4">
                            Powered by Plexus AI – Center of Excellence
                        </p>
                        <p className="text-white/50 text-sm">
                            Because Every Life Deserves More
                        </p>
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