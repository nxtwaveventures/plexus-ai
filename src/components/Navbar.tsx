"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-background/80 backdrop-blur-lg shadow-lg' : 'py-4 bg-transparent'}`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Plexus AI</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/#about" className="text-white/80 hover:text-white transition-colors">About CoE</Link>
                        <a href="/research" target="_blank" className="text-white/80 hover:text-white transition-colors">Research</a>
                        <a href="/plexus-lifex" target="_blank" className="text-white/80 hover:text-white transition-colors">Plexus LifeX</a>
                        <a href="/innovation" target="_blank" className="text-white/80 hover:text-white transition-colors">Innovation</a>
                        <Link href="/#contact" className="glow-button ml-2">
                            Contact Us
                        </Link>
                    </div>

                    <button className="md:hidden text-white" onClick={toggleMenu}>
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg md:hidden"
                    >
                        <div className="flex justify-end p-4">
                            <button className="text-white" onClick={toggleMenu}>
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="flex flex-col items-center justify-center h-full space-y-8 -mt-16">
                            <Link href="/#about" className="text-xl text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>About CoE</Link>
                            <a href="/research" target="_blank" className="text-xl text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>Research</a>
                            <a href="/plexus-lifex" target="_blank" className="text-xl text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>Plexus LifeX</a>
                            <a href="/innovation" target="_blank" className="text-xl text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>Innovation</a>
                            <Link href="/#contact" className="glow-button mt-4" onClick={toggleMenu}>
                                Contact Us
                            </Link>
                            <div className="text-center mt-8 text-white/60 text-sm">
                                <p>Center of Excellence in AI</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar; 