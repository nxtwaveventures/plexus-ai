'use client';

import { motion } from 'framer-motion';
import { Database, Shield, Brain, Network, Cloud, Lock, Workflow, Layers } from 'lucide-react';

const layers = [
    {
        title: "Health Data Layer",
        icon: <Brain className="w-8 h-8 text-accent" />,
        features: [
            "Real-time ECG & Vitals Processing",
            "Lifestyle Data Analytics",
            "Predictive Health Modeling",
            "Wearable Device Integration"
        ],
        color: "from-accent/20 to-accent/10"
    },
    {
        title: "AI & Analytics Core",
        icon: <Network className="w-8 h-8 text-primary" />,
        features: [
            "Neural Network Health Predictions",
            "Financial Risk Assessment",
            "Behavioral Pattern Analysis",
            "Longevity Score Calculation"
        ],
        color: "from-primary/20 to-primary/10"
    },
    {
        title: "Financial Services Layer",
        icon: <Workflow className="w-8 h-8 text-secondary" />,
        features: [
            "Dynamic Insurance Pricing",
            "Health-linked Investment Products",
            "Automated Underwriting",
            "Smart Contract Integration"
        ],
        color: "from-secondary/20 to-secondary/10"
    }
];

const security = [
    {
        icon: <Shield className="w-6 h-6 text-primary" />,
        title: "Enterprise Security",
        description: "Bank-grade encryption & compliance"
    },
    {
        icon: <Lock className="w-6 h-6 text-accent" />,
        title: "Data Privacy",
        description: "HIPAA & GDPR compliant"
    },
    {
        icon: <Cloud className="w-6 h-6 text-secondary" />,
        title: "Cloud Infrastructure",
        description: "99.99% uptime guarantee"
    }
];

export default function ArchitectureSlide() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background py-20">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Platform Architecture
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Enterprise-grade infrastructure built for scale and security
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 mb-12">
                    {layers.map((layer, index) => (
                        <motion.div
                            key={layer.title}
                            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className={`bg-gradient-to-r ${layer.color} p-6 rounded-xl backdrop-blur-sm border border-white/10`}
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-3 rounded-lg bg-white/10">
                                    {layer.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-white mb-4">{layer.title}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {layer.features.map((feature, featureIndex) => (
                                            <motion.div
                                                key={featureIndex}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                                                className="flex items-center gap-2"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-white/50" />
                                                <span className="text-gray-300">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {security.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/5 p-4 rounded-lg backdrop-blur-sm flex items-center gap-4"
                        >
                            <div className="p-2 rounded-lg bg-white/10">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">{item.title}</h4>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
} 