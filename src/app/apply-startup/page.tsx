'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function ApplyStartup() {
    const [formData, setFormData] = useState({
        startupName: '',
        founderName: '',
        email: '',
        phone: '',
        website: '',
        stage: '',
        problem: '',
        solution: '',
        teamSize: '',
        funding: '',
        timeline: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <main className="min-h-screen pt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <ScrollReveal>
                        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                            Apply as a Startup
                        </h1>
                        <p className="text-white/70 mb-8">
                            Join India's premier healthcare innovation ecosystem. Tell us about your startup and how we can help you transform healthcare.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">
                                        Startup Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                        value={formData.startupName}
                                        onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">
                                        Founder Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                        value={formData.founderName}
                                        onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">
                                        Website
                                    </label>
                                    <input
                                        type="url"
                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                        value={formData.website}
                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">
                                        Development Stage *
                                    </label>
                                    <select
                                        required
                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                        value={formData.stage}
                                        onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                                    >
                                        <option value="">Select Stage</option>
                                        <option value="idea">Idea Stage</option>
                                        <option value="mvp">MVP</option>
                                        <option value="early">Early Traction</option>
                                        <option value="growth">Growth Stage</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-1">
                                    Problem Statement *
                                </label>
                                <textarea
                                    required
                                    rows={3}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                    value={formData.problem}
                                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-1">
                                    Your Solution *
                                </label>
                                <textarea
                                    required
                                    rows={3}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                    value={formData.solution}
                                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">
                                        Team Size
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                        value={formData.teamSize}
                                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">
                                        Funding Stage
                                    </label>
                                    <select
                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                        value={formData.funding}
                                        onChange={(e) => setFormData({ ...formData, funding: e.target.value })}
                                    >
                                        <option value="">Select Stage</option>
                                        <option value="bootstrapped">Bootstrapped</option>
                                        <option value="seed">Seed</option>
                                        <option value="series-a">Series A</option>
                                        <option value="series-b">Series B+</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">
                                        Timeline to Launch
                                    </label>
                                    <select
                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                        value={formData.timeline}
                                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                                    >
                                        <option value="">Select Timeline</option>
                                        <option value="1-3">1-3 months</option>
                                        <option value="3-6">3-6 months</option>
                                        <option value="6-12">6-12 months</option>
                                        <option value="12+">12+ months</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pt-4">
                                <Button type="submit" variant="glow" className="w-full">
                                    Submit Application
                                </Button>
                            </div>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </main>
    );
} 