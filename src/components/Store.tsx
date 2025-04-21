'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Star, Clock, Shield, CreditCard } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Health Credit Score',
        description: 'AI-powered health risk assessment and credit scoring',
        price: '$99/month',
        features: ['Real-time health monitoring', 'Credit score updates', 'Risk assessment reports']
    },
    {
        id: 2,
        name: 'Smart Insurance',
        description: 'Dynamic insurance policies based on health metrics',
        price: '$199/month',
        features: ['Personalized coverage', 'Health-linked premiums', 'Instant claims processing']
    },
    {
        id: 3,
        name: 'Longevity Investments',
        description: 'Health-optimized investment portfolios',
        price: '$299/month',
        features: ['AI portfolio management', 'Health-risk balancing', 'Automated rebalancing']
    }
];

const benefits = [
    {
        icon: <Star className="w-6 h-6" />,
        title: 'Premium Features',
        description: 'Access to advanced AI-powered health and wealth tools'
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: '24/7 Support',
        description: 'Round-the-clock customer service and technical assistance'
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: 'Secure Platform',
        description: 'Enterprise-grade security for your sensitive data'
    },
    {
        icon: <CreditCard className="w-6 h-6" />,
        title: 'Flexible Payments',
        description: 'Multiple payment options and subscription plans'
    }
];

export default function Store() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Our Products
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Transform your health and wealth journey with our innovative solutions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-blue-500/20 shadow-lg backdrop-blur-sm"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    {product.name}
                                </h3>
                                <ShoppingBag className="w-6 h-6 text-purple-500" />
                            </div>
                            <p className="text-gray-400 mb-4">{product.description}</p>
                            <div className="text-3xl font-bold text-white mb-6">{product.price}</div>
                            <ul className="space-y-3">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-gray-300">
                                        <Star className="w-4 h-4 text-purple-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get Started
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-xl p-6 border border-blue-500/10 backdrop-blur-sm"
                        >
                            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 inline-block mb-4">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                            <p className="text-gray-400">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
} 