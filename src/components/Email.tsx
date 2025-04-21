'use client';

import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare, Phone } from 'lucide-react';

export default function Email() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Get in Touch
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Stay updated with our latest innovations in health and wealth technology
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-blue-500/20 shadow-lg backdrop-blur-sm"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2">Message</label>
                                <textarea
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500 h-32"
                                    placeholder="Your message"
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Newsletter & Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        {/* Newsletter Signup */}
                        <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-blue-500/20 shadow-lg backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-6">Subscribe to Newsletter</h3>
                            <form className="space-y-4">
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500"
                                    placeholder="Enter your email"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <Mail className="w-5 h-5" />
                                    Subscribe
                                </motion.button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-blue-500/20 shadow-lg backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <Mail className="w-6 h-6 text-purple-500" />
                                    <span>contact@plexusai.in</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <Phone className="w-6 h-6 text-purple-500" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <MessageSquare className="w-6 h-6 text-purple-500" />
                                    <span>Live Chat Support</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
} 