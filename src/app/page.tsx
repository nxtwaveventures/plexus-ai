"use client";

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Heart, Shield, ChevronRight, PieChart, BarChart4, Wallet, Sparkles, AlertTriangle, Clock, Activity, LineChart, Trophy, ArrowUpRight, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

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
            <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background to-background/60 pointer-events-none"></div>

                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-full h-full bg-[url('/neural-network.svg')] opacity-15 bg-repeat"></div>
                    <motion.div
                        className="absolute -inset-[10%] bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/20 opacity-40 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.1, 1.2, 1.1, 1],
                            rotate: [0, 10, 0, -10, 0],
                            opacity: [0.3, 0.4, 0.3, 0.4, 0.3]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </div>

                <div className="container mx-auto px-4 py-20 pt-32 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                                Welcome to Plexus AI
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-xl md:text-2xl text-white/90 mb-4">
                                Reimagining Healthcare through Innovation
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <p className="text-lg md:text-xl font-light mb-8 text-accent/90">
                                Because Every Life Deserves More
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="max-w-2xl mx-auto"
                        >
                            <p className="text-white/70 mb-8">
                                Leveraging AI to enhance diagnosis, personalize treatment, and empower clinicians for better healthcare outcomes.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <Button
                                onClick={scrollToAbout}
                                variant="glow"
                                size="lg"
                                className="group"
                            >
                                Explore Innovation
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center cursor-pointer"
                        onClick={scrollToAbout}
                    >
                        <p className="text-white/60 text-sm mb-1">Learn More</p>
                        <ChevronRight className="h-6 w-6 text-white/60 rotate-90" />
                    </motion.div>
                </motion.div>
            </section>

            {/* About the CoE Section */}
            <section id="about" ref={aboutRef} className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/80 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                                About the Center of Excellence
                            </h2>
                        </ScrollReveal>

                        <div className="mb-16 text-center">
                            <ScrollReveal delay={0.1}>
                                <p className="text-lg text-white/90 mb-4">
                                    At Plexus AI, our mission is to transform healthcare by making it smarter, more personalized, and empowering for clinicians and patients alike.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <p className="text-lg text-accent/90 font-medium mb-8">
                                    Because Every Life Deserves More
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <p className="text-white/70">
                                    We focus on developing innovative AI-driven solutions that address critical healthcare challenges, enabling better diagnosis, personalized care plans, and improved patient outcomes.
                                </p>
                            </ScrollReveal>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ScrollReveal delay={0.4}>
                                <div className="card-glow text-center h-full">
                                    <div className="mb-6 flex justify-center">
                                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                                            <Brain className="w-8 h-8 text-primary" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4">Diagnostics</h3>
                                    <p className="text-white/70">Advanced AI algorithms that enhance diagnostic accuracy and speed, helping clinicians make better decisions.</p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.5}>
                                <div className="card-glow text-center h-full">
                                    <div className="mb-6 flex justify-center">
                                        <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                                            <Heart className="w-8 h-8 text-secondary" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4">AI for Clinicians</h3>
                                    <p className="text-white/70">Tools and platforms designed to enhance clinical workflows, reduce burnout, and improve patient care quality.</p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.6}>
                                <div className="card-glow text-center h-full">
                                    <div className="mb-6 flex justify-center">
                                        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                                            <Shield className="w-8 h-8 text-accent" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4">Personalized Care</h3>
                                    <p className="text-white/70">Customized treatment approaches based on individual patient data, genetics, and lifestyle factors.</p>
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="mt-16 text-center">
                            <ScrollReveal>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="group"
                                >
                                    <a href="/pitch-deck" target="_blank" rel="noopener noreferrer">
                                        Discover Plexus LifeX
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </Button>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introducing Plexus LifeX Section */}
            <section id="lifex" ref={lifexRef} className="py-20 relative overflow-hidden bg-gradient-to-b from-background/90 to-background/70">
                <div className="absolute inset-0 bg-grid-white/[0.05] mix-blend-plus-lighter"></div>
                <motion.div
                    className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-primary/30 via-secondary/40 to-transparent opacity-50 rounded-full blur-3xl"
                    animate={{
                        x: [0, 20, 0],
                        opacity: [0.4, 0.5, 0.4]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                            <div className="md:w-1/2">
                                <ScrollReveal direction="left">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                                        Introducing Plexus LifeX
                                    </h2>

                                    <p className="text-lg text-accent/90 font-medium mb-4">
                                        Empowering Healthcare Access Through FinTech Innovation
                                    </p>

                                    <p className="text-white/70 mb-8">
                                        Plexus LifeX bridges healthcare with financial empowerment, creating a revolutionary approach to wellness and longevity. Discover how our platform is changing lives across India.
                                    </p>

                                    <p className="text-white/70 italic mb-6">
                                        Because Every Life Deserves More
                                    </p>

                                    <Button
                                        asChild
                                        variant="glow"
                                        className="group"
                                    >
                                        <a href="/pitch-deck" target="_blank" rel="noopener noreferrer">
                                            Learn More About LifeX
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </Button>
                                </ScrollReveal>
                            </div>

                            <div className="md:w-1/2">
                                <ScrollReveal direction="right">
                                    <div className="relative p-4">
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl blur-md"></div>
                                        <div className="card-glow border border-white/10 relative">
                                            <div className="absolute -top-6 -left-6">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary">
                                                    <Sparkles className="w-6 h-6 text-white" />
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-semibold mb-4 pt-2">
                                                Key Highlights
                                            </h3>

                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                                                        <ChevronRight className="w-3 h-3 text-secondary" />
                                                    </div>
                                                    <p className="text-white/80">Health-Linked Financial Products</p>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                                                        <ChevronRight className="w-3 h-3 text-accent" />
                                                    </div>
                                                    <p className="text-white/80">AI-Powered Wellness Insights</p>
                                                </li>
                                            </ul>

                                            <div className="mt-6 text-center">
                                                <a href="/pitch-deck" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors text-sm italic">
                                                    View Full Presentation →
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" ref={contactRef} className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-slate-900/80"></div>
                <div className="absolute inset-0 bg-[url('/neural-network.svg')] opacity-8"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                                Get in Touch
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <p className="text-accent/90 text-center mb-16">
                                Join the waitlist for early access to Plexus LifeX
                            </p>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <ScrollReveal direction="left">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                                        <p className="text-white/70 mb-8">
                                            Reach out to our team to learn more about Plexus AI and our innovative solutions. We're happy to answer your questions.
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                                <Mail className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm text-white/50 mb-1">Email</h4>
                                                <p className="text-white/90">the.plexusai@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                                                <Phone className="w-5 h-5 text-secondary" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm text-white/50 mb-1">Phone</h4>
                                                <p className="text-white/90">+91 75758 85555</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-5 h-5 text-accent" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm text-white/50 mb-1">Location</h4>
                                                <p className="text-white/90">GIFT City, Gujarat, India</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-medium mb-4">Connect With Us</h4>
                                        <div className="flex gap-4">
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                                                <Linkedin className="w-5 h-5 text-white" />
                                            </a>
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary/20 transition-colors">
                                                <Twitter className="w-5 h-5 text-white" />
                                            </a>
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                                                <Facebook className="w-5 h-5 text-white" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="right">
                                <div className="card-glow">
                                    {submitted ? (
                                        <div className="py-12 text-center">
                                            <Sparkles className="w-12 h-12 mx-auto mb-4 text-accent" />
                                            <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                                            <p className="text-white/70">
                                                Your message has been received. We'll get back to you shortly.
                                            </p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit}>
                                            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>

                                            <div className="space-y-4">
                                                <div>
                                                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                                        placeholder="Your name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        required
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                                        placeholder="your@email.com"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
                                                        Message
                                                    </label>
                                                    <textarea
                                                        id="message"
                                                        rows={4}
                                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                                        placeholder="How can we help you?"
                                                        value={message}
                                                        onChange={(e) => setMessage(e.target.value)}
                                                        required
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className="mt-6">
                                                <Button type="submit" variant="glow" className="w-full">
                                                    Get Early Access
                                                </Button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </ScrollReveal>
                        </div>
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