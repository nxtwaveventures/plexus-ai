'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Building2, Globe2, Target, Clock, ArrowRight } from 'lucide-react';

const metrics = [
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        value: "250M+",
        label: "Target Users by 2050",
        subtext: "Indian seniors aged 60+"
    },
    {
        icon: <Building2 className="w-8 h-8 text-accent" />,
        value: "5000+",
        label: "Partner Institutions",
        subtext: "Hospitals & Financial"
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-secondary" />,
        value: "$30B+",
        label: "Market Size by 2030",
        subtext: "Global Longevity Finance"
    }
];

const timeline = [
    {
        phase: "Phase 1 (0-6 Months)",
        title: "Market Entry & MVP",
        items: [
            "Launch LifeX Score Beta",
            "Partner with 2 Major Hospitals",
            "Secure IFSCA Sandbox Approval"
        ]
    },
    {
        phase: "Phase 2 (6-12 Months)",
        title: "Product Expansion",
        items: [
            "Roll out Health Credits System",
            "Launch Insurance Integration",
            "Expand to 10 Cities"
        ]
    },
    {
        phase: "Phase 3 (12-24 Months)",
        title: "Scale & Innovate",
        items: [
            "Launch Longevity Investment Products",
            "International Market Entry",
            "AI/ML Platform Enhancement"
        ]
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

export default function MarketSlide() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Market Strategy & Roadmap
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Capturing the $30B+ Longevity Finance opportunity
                    </p>
                </motion.div>

                <motion.div
                    className="h-full w-full p-8 flex flex-col gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Metrics Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-blue-500/20 shadow-lg backdrop-blur-sm"
                                variants={itemVariants}
                                custom={index}
                                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                                        {metric.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                            {metric.value}
                                        </h3>
                                        <p className="text-sm text-gray-400">{metric.label}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-300">{metric.subtext}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Timeline Section */}
                    <div className="flex-1 flex flex-col md:flex-row gap-8">
                        {timeline.map((phase, index) => (
                            <motion.div
                                key={phase.title}
                                className="flex-1 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-blue-500/20 shadow-lg backdrop-blur-sm"
                                variants={itemVariants}
                                custom={index + metrics.length}
                                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                            >
                                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    {phase.title}
                                </h3>
                                <ul className="space-y-3">
                                    {phase.items.map((item, itemIndex) => (
                                        <motion.li
                                            key={itemIndex}
                                            className="flex items-start gap-2 text-sm text-gray-300"
                                            variants={itemVariants}
                                            custom={itemIndex}
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-1.5" />
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        className="mt-8 text-center"
                        variants={itemVariants}
                        custom={metrics.length + timeline.length}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
                        >
                            Join the Longevity Revolution
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                        <p className="mt-4 text-gray-400 text-sm">
                            Be part of the future of longevity finance
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
} 