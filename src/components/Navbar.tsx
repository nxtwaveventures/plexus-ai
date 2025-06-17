"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Route } from 'next';

type NavLink = {
    href: Route;
    label: string;
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks: NavLink[] = [
        { href: '/' as Route, label: 'Home' },
        { href: '/programs' as Route, label: 'Programs' },
        { href: '/use-cases' as Route, label: 'Use Cases' },
        { href: '/blogs' as Route, label: 'Blogs' },
        { href: '/plexusverse' as Route, label: 'PlexusVerse' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-white">
                        Plexus AI
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-white/70 hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="outline" asChild>
                            <Link href="/apply-startup">Apply as Startup</Link>
                        </Button>
                        <Button variant="glow" asChild>
                            <Link href="/partner">Partner with Us</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-white/70 hover:text-white transition-colors px-4 py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="px-4 py-2 space-y-2">
                                <Button variant="outline" className="w-full" asChild>
                                    <Link href="/apply-startup" onClick={() => setIsOpen(false)}>
                                        Apply as Startup
                                    </Link>
                                </Button>
                                <Button variant="glow" className="w-full" asChild>
                                    <Link href="/partner" onClick={() => setIsOpen(false)}>
                                        Partner with Us
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar; 