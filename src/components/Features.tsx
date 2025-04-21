'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Zap, BarChart3, Code2, Cloud, Lock } from 'lucide-react';

const features = [
    {
        icon: <Zap className="w-8 h-8 text-accent" />,
        title: "Lightning-Fast Performance",
        description: "Convert complex HTML documents to PDF in milliseconds. Our optimized engine handles high-volume conversions with unmatched speed.",
        metrics: "500% faster than competitors"
    },
    {
        icon: <Shield className="w-8 h-8 text-success" />,
        title: "Enterprise-Grade Security",
        description: "Bank-level encryption, SOC 2 compliance, and GDPR-ready infrastructure ensure your data remains protected at all times.",
        metrics: "99.99% uptime guarantee"
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-secondary-light" />,
        title: "Infinite Scalability",
        description: "Cloud infrastructure that grows with your business. Handle millions of conversions without breaking a sweat.",
        metrics: "50M+ monthly conversions"
    },
    {
        icon: <Code2 className="w-8 h-8 text-primary-light" />,
        title: "Developer-First API",
        description: "RESTful API with comprehensive documentation, SDKs for all major languages, and seamless integration capabilities.",
        metrics: "10 min average integration time"
    },
    {
        icon: <Cloud className="w-8 h-8 text-secondary" />,
        title: "Global CDN",
        description: "Lightning-fast content delivery through our worldwide network of edge servers. Your PDFs, delivered instantly anywhere.",
        metrics: "50+ global edge locations"
    },
    {
        icon: <Lock className="w-8 h-8 text-success-light" />,
        title: "Compliance Ready",
        description: "Built-in compliance with HIPAA, GDPR, and other major regulations. Perfect for healthcare, finance, and enterprise.",
        metrics: "100% compliance rate"
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

export default function Features() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="features" className="py-24 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    >
                        Enterprise-Ready Features
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Built for scale, security, and performance. Everything you need to transform your document workflow.
                    </motion.p>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                                    {feature.icon}
                                </div>
                                <span className="text-accent-light font-semibold">{feature.metrics}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <button className="px-8 py-4 text-lg font-semibold bg-accent hover:bg-accent-dark text-white rounded-full transition-colors inline-flex items-center gap-2 group">
                        Schedule Enterprise Demo
                        <Zap className="w-5 h-5 transition-transform group-hover:rotate-12" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
} 