'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'market', label: 'Market' },
    { id: 'store', label: 'Store' },
    { id: 'contact', label: 'Contact' }
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900/90 to-gray-900/50 backdrop-blur-sm border-b border-gray-700/50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center"
                    >
                        <Image
                            src="/logo.svg"
                            alt="Plexus AI"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                        />
                        <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Plexus AI
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <motion.button
                                key={item.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleClick(item.id)}
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-300 hover:text-white"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{
                    height: isMenuOpen ? 'auto' : 0,
                    opacity: isMenuOpen ? 1 : 0
                }}
                className="md:hidden overflow-hidden bg-gray-900/90 backdrop-blur-sm"
            >
                <div className="px-4 py-2 space-y-2">
                    {menuItems.map((item) => (
                        <motion.button
                            key={item.id}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleClick(item.id)}
                            className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors"
                        >
                            {item.label}
                        </motion.button>
                    ))}
                </div>
            </motion.div>
        </header>
    );
} 