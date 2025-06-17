'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const blogPosts = [
    {
        id: 1,
        title: "China's Medtech Revolution: Lessons for Global Healthcare Innovation",
        excerpt: "Exploring how China's strategic investments in medical technology are reshaping the global healthcare landscape and what other nations can learn.",
        author: "Dr. Sarah Chen",
        date: "December 15, 2024",
        readTime: "8 min read",
        category: "Global Health",
        image: "/api/placeholder/400/250",
        featured: true
    },
    {
        id: 2,
        title: "AI-Powered Diagnostics: The Future of Early Disease Detection",
        excerpt: "How artificial intelligence is revolutionizing medical diagnostics, enabling earlier detection and more personalized treatment approaches.",
        author: "Dr. Rajesh Kumar",
        date: "December 12, 2024",
        readTime: "6 min read",
        category: "AI & Healthcare",
        image: "/api/placeholder/400/250"
    },
    {
        id: 3,
        title: "India's Healthcare Startup Ecosystem: Opportunities and Challenges",
        excerpt: "An in-depth analysis of India's growing healthcare startup landscape, key success factors, and emerging opportunities for innovators.",
        author: "Priya Sharma",
        date: "December 10, 2024",
        readTime: "7 min read",
        category: "Startup Insights",
        image: "/api/placeholder/400/250"
    },
    {
        id: 4,
        title: "Digital Health Infrastructure: Building for Scale in Emerging Markets",
        excerpt: "Strategies for developing robust digital health infrastructure that can serve millions while maintaining quality and accessibility.",
        author: "Dr. Michael Wong",
        date: "December 8, 2024",
        readTime: "9 min read",
        category: "Digital Health",
        image: "/api/placeholder/400/250"
    },
    {
        id: 5,
        title: "Telemedicine Beyond COVID: Sustainable Models for Rural Healthcare",
        excerpt: "How telemedicine innovations developed during the pandemic are being adapted for long-term rural healthcare delivery.",
        author: "Dr. Anita Patel",
        date: "December 5, 2024",
        readTime: "5 min read",
        category: "Telemedicine",
        image: "/api/placeholder/400/250"
    },
    {
        id: 6,
        title: "Regulatory Frameworks for Medical AI: Balancing Innovation and Safety",
        excerpt: "Understanding the evolving regulatory landscape for AI-powered medical devices and how to navigate compliance requirements.",
        author: "Legal Team",
        date: "December 3, 2024",
        readTime: "10 min read",
        category: "Regulatory",
        image: "/api/placeholder/400/250"
    }
];

const categories = ["All", "Global Health", "AI & Healthcare", "Startup Insights", "Digital Health", "Telemedicine", "Regulatory"];

export default function Blogs() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts = selectedCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Header */}
            <div className="pt-20 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
                    >
                        ← Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                            Healthcare Innovation Insights
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Exploring the latest trends, innovations, and insights shaping the future of healthcare technology and patient outcomes.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Category Filter */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Featured Post */}
            {featuredPost && selectedCategory === "All" && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all group"
                    >
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <div className="h-64 md:h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                                    <span className="text-white text-lg font-semibold">Featured Article</span>
                                </div>
                            </div>
                            <div className="md:w-1/2 p-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                                        FEATURED
                                    </span>
                                    <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-full">
                                        {featuredPost.category}
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-sm text-gray-400">
                                        <span>{featuredPost.author}</span>
                                        <span>•</span>
                                        <span>{featuredPost.date}</span>
                                        <span>•</span>
                                        <span>{featuredPost.readTime}</span>
                                    </div>
                                    <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(selectedCategory === "All" ? regularPosts : filteredPosts).map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all group hover:scale-105"
                        >
                            <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                                <span className="text-white text-sm font-medium">Healthcare Innovation</span>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded">
                                        {post.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-xs text-gray-400">
                                    <span>{post.author}</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-700">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-400">{post.date}</span>
                                        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                                            Read More →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Stay Updated with Healthcare Innovation
                    </h3>
                    <p className="text-gray-300 mb-6">
                        Get the latest insights on healthcare technology, startup trends, and innovation delivered to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        />
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all font-medium">
                            Subscribe
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
} 