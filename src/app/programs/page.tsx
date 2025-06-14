'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function Programs() {
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
                            Innovation Programs
                        </h1>
                        <p className="text-white/70 mb-8 text-lg">
                            Explore our comprehensive suite of programs designed to accelerate healthcare innovation and transform patient care.
                        </p>
                    </ScrollReveal>

                    <div className="space-y-12">
                        <ScrollReveal delay={0.1}>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                                <h2 className="text-2xl font-semibold mb-4 text-white">Coming Soon</h2>
                                <p className="text-white/70 mb-6">
                                    We're currently developing our innovation programs. Stay tuned for updates on our upcoming initiatives, including:
                                </p>
                                <ul className="space-y-3 text-white/70">
                                    <li>• MedTech & AI Sandbox</li>
                                    <li>• MedFinTech Innovation Hub</li>
                                    <li>• Startup Accelerator</li>
                                    <li>• Clinical Validation Unit</li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                                <h2 className="text-2xl font-semibold mb-4 text-white">Get Early Access</h2>
                                <p className="text-white/70 mb-6">
                                    Be among the first to know when our programs launch. Join our waitlist to receive updates and early access opportunities.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button variant="glow" className="w-full sm:w-auto">
                                        Join Waitlist
                                    </Button>
                                    <Button variant="outline" className="w-full sm:w-auto">
                                        Learn More
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