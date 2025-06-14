'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function Partner() {
    const [formData, setFormData] = useState({
        organizationName: '',
        contactName: '',
        email: '',
        phone: '',
        website: '',
        type: '',
        description: '',
        interests: '',
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
                            Partner with Plexus AI
                        </h1>
                        <p className="text-white/70 mb-8">
                            Join forces with India's leading healthcare innovation hub. Together, we can transform healthcare delivery and create lasting impact.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">
                                        Organization Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                        value={formData.organizationName}
                                        onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">
                                        Contact Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                        value={formData.contactName}
                                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
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
                                        Organization Type *
                                    </label>
                                    <select
                                        required
                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    >
                                        <option value="">Select Type</option>
                                        <option value="hospital">Hospital/Healthcare Provider</option>
                                        <option value="insurance">Insurance Company</option>
                                        <option value="pharma">Pharmaceutical Company</option>
                                        <option value="tech">Technology Company</option>
                                        <option value="academic">Academic Institution</option>
                                        <option value="government">Government Organization</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-1">
                                    Organization Description *
                                </label>
                                <textarea
                                    required
                                    rows={3}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-1">
                                    Areas of Interest *
                                </label>
                                <textarea
                                    required
                                    rows={3}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                    value={formData.interests}
                                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                                    placeholder="Please describe your areas of interest and potential collaboration opportunities"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-1">
                                    Expected Timeline for Partnership
                                </label>
                                <select
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
                                    value={formData.timeline}
                                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                                >
                                    <option value="">Select Timeline</option>
                                    <option value="immediate">Immediate (0-3 months)</option>
                                    <option value="short">Short-term (3-6 months)</option>
                                    <option value="medium">Medium-term (6-12 months)</option>
                                    <option value="long">Long-term (12+ months)</option>
                                </select>
                            </div>

                            <div className="pt-4">
                                <Button type="submit" variant="glow" className="w-full">
                                    Submit Partnership Request
                                </Button>
                            </div>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </main>
    );
} 