'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Clock, DollarSign, Heart } from 'lucide-react';

const problems = [
    {
        icon: <AlertTriangle className="w-8 h-8" />,
        title: "Limited Access to Credit",
        description: "Seniors face difficulties in accessing financial services due to outdated risk assessment models"
    },
    {
        icon: <Clock className="w-8 h-8" />,
        title: "Time-Consuming Processes",
        description: "Traditional credit assessment methods are slow and inefficient"
    },
    {
        icon: <DollarSign className="w-8 h-8" />,
        title: "High Costs",
        description: "Expensive and complex financial products not tailored for seniors"
    },
    {
        icon: <Heart className="w-8 h-8" />,
        title: "Health Data Silos",
        description: "Valuable health data remains unused in financial decision-making"
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

export default function ProblemSlide() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        The Problem We're Solving
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Seniors face significant challenges in accessing financial services
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {problems.map((problem, index) => (
                        <motion.div
                            key={problem.title}
                            className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-blue-500/20 shadow-lg backdrop-blur-sm"
                            variants={itemVariants}
                            custom={index}
                            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                                    {problem.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                        {problem.title}
                                    </h3>
                                    <p className="text-gray-300">{problem.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
} 