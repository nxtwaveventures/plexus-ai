'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { label: 'Features', href: '#features' },
        { label: 'Solutions', href: '#solutions' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Enterprise', href: '#enterprise' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex-shrink-0"
                    >
                        <span className="text-2xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                            PDF Pro
                        </span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {menuItems.map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-gray-200 hover:text-white transition-colors"
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 rounded-full bg-accent hover:bg-accent-dark text-white transition-colors"
                            >
                                Get Started
                            </motion.button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-200 hover:text-white"
                        >
                            {isOpen ? <X /> : <Menu />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                className={`md:hidden overflow-hidden ${isOpen ? 'border-t border-white/10' : ''}`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {menuItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                    <button className="w-full mt-4 px-4 py-2 rounded-full bg-accent hover:bg-accent-dark text-white transition-colors">
                        Get Started
                    </button>
                </div>
            </motion.div>
        </nav>
    );
} 