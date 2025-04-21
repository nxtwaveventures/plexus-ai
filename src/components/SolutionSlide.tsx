'use client';

import { motion } from 'framer-motion';
import { Brain, Shield, Zap, ArrowRight } from 'lucide-react';

const solutions = [
    {
        icon: <Brain className="w-8 h-8" />,
        title: "AI-Powered Risk Assessment",
        description: "Advanced algorithms analyze health and financial data for accurate risk profiling"
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Secure Data Integration",
        description: "Blockchain-based platform ensuring privacy and security of sensitive data"
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Real-Time Processing",
        description: "Instant credit decisions based on up-to-date health and financial metrics"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

export default function SolutionSlide() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Our Solution
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Revolutionizing senior finance with AI and blockchain technology
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-blue-500/20 shadow-lg backdrop-blur-sm"
                            variants={itemVariants}
                            custom={index}
                            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 mb-4">
                                    {solution.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    {solution.title}
                                </h3>
                                <p className="text-gray-300">{solution.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center"
                    variants={itemVariants}
                    custom={solutions.length}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
                    >
                        Learn More About Our Technology
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
} 