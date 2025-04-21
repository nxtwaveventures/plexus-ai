'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { Home, AlertCircle, Lightbulb, TrendingUp, ShoppingBag, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
    { id: 'home', icon: <Home className="w-5 h-5" />, label: 'Home' },
    { id: 'problem', icon: <AlertCircle className="w-5 h-5" />, label: 'Problem' },
    { id: 'solution', icon: <Lightbulb className="w-5 h-5" />, label: 'Solution' },
    { id: 'market', icon: <TrendingUp className="w-5 h-5" />, label: 'Market' },
    { id: 'store', icon: <ShoppingBag className="w-5 h-5" />, label: 'Store' },
    { id: 'contact', icon: <Mail className="w-5 h-5" />, label: 'Contact' }
];

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('home');
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform origin-left z-50"
                style={{ scaleX }}
            />
            <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
                <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-full p-2 border border-gray-700/50">
                    <ul className="space-y-2">
                        {navItems.map((item) => (
                            <motion.li
                                key={item.id}
                                className="relative group"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <button
                                    onClick={() => handleClick(item.id)}
                                    className={`p-3 rounded-full transition-colors duration-200 relative ${activeSection === item.id
                                            ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white'
                                            : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {item.icon}
                                    <span className="absolute left-0 transform -translate-x-full -translate-y-1/2 top-1/2 bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm whitespace-nowrap mr-2">
                                        {item.label}
                                    </span>
                                </button>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
} 