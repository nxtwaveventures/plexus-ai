'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function PlexusVerse() {
    return (
        <main className="min-h-screen pt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <ScrollReveal>
                        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                            Welcome to PlexusVerse
                        </h1>
                        <p className="text-white/70 mb-8 text-lg">
                            A revolutionary healthcare innovation ecosystem that brings together startups, healthcare providers, and technology partners to transform the future of healthcare delivery.
                        </p>
                    </ScrollReveal>

                    <div className="space-y-12">
                        <ScrollReveal delay={0.1}>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                                <h2 className="text-2xl font-semibold mb-4 text-white">Our Vision</h2>
                                <p className="text-white/70">
                                    PlexusVerse is more than just a platform – it's a comprehensive ecosystem designed to accelerate healthcare innovation. We provide the infrastructure, resources, and connections needed to bring groundbreaking healthcare solutions to life.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                                    <h3 className="text-xl font-semibold mb-4 text-white">For Startups</h3>
                                    <ul className="space-y-3 text-white/70">
                                        <li>• Access to cutting-edge technology and infrastructure</li>
                                        <li>• Mentorship from industry experts</li>
                                        <li>• Clinical validation opportunities</li>
                                        <li>• Funding and investment connections</li>
                                        <li>• Market access and scaling support</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                                    <h3 className="text-xl font-semibold mb-4 text-white">For Healthcare Providers</h3>
                                    <ul className="space-y-3 text-white/70">
                                        <li>• Early access to innovative solutions</li>
                                        <li>• Custom technology integration</li>
                                        <li>• Research collaboration opportunities</li>
                                        <li>• Digital transformation support</li>
                                        <li>• Quality improvement initiatives</li>
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                                <h2 className="text-2xl font-semibold mb-4 text-white">Key Features</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <h4 className="text-lg font-medium mb-2 text-white">Innovation Hub</h4>
                                        <p className="text-white/70">State-of-the-art facilities for research, development, and testing of healthcare solutions.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium mb-2 text-white">Clinical Validation</h4>
                                        <p className="text-white/70">Access to real-world clinical environments for testing and validation of healthcare innovations.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium mb-2 text-white">Market Access</h4>
                                        <p className="text-white/70">Direct connections to healthcare providers and payers for rapid market entry.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                                <h2 className="text-2xl font-semibold mb-4 text-white">Join the Ecosystem</h2>
                                <p className="text-white/70 mb-6">
                                    Be part of the future of healthcare innovation. Whether you're a startup, healthcare provider, or technology partner, PlexusVerse offers the resources and connections you need to succeed.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button variant="glow" className="w-full sm:w-auto">
                                        Apply as a Startup
                                    </Button>
                                    <Button variant="outline" className="w-full sm:w-auto">
                                        Partner with Us
                                    </Button>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </main>
    );
} 