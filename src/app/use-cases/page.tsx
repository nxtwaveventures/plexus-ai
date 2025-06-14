'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function UseCases() {
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
                            Use Cases & Success Stories
                        </h1>
                        <p className="text-white/70 mb-8 text-lg">
                            Discover how our innovative solutions are transforming healthcare delivery and improving patient outcomes.
                        </p>
                    </ScrollReveal>

                    <div className="space-y-12">
                        <ScrollReveal delay={0.1}>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-8 relative">
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">
                                        Coming Soon
                                    </span>
                                </div>
                                <h2 className="text-2xl font-semibold mb-4 text-white">Plexus Dhadkan 360</h2>
                                <p className="text-white/70 mb-6">
                                    A comprehensive cardiac health monitoring and management platform that leverages AI to provide real-time insights and personalized care recommendations.
                                </p>
                                <ul className="space-y-3 text-white/70">
                                    <li>• Advanced cardiac monitoring</li>
                                    <li>• AI-powered risk assessment</li>
                                    <li>• Personalized care plans</li>
                                    <li>• Real-time alerts and notifications</li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                                <h2 className="text-2xl font-semibold mb-4 text-white">More Success Stories Coming Soon</h2>
                                <p className="text-white/70 mb-6">
                                    We're working with healthcare providers and innovators to develop and implement cutting-edge solutions. Stay tuned for more success stories and use cases.
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

                        <ScrollReveal delay={0.3}>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                                <h2 className="text-2xl font-semibold mb-4 text-white">Partner with Us</h2>
                                <p className="text-white/70 mb-6">
                                    Are you a healthcare provider or innovator looking to transform patient care? Partner with us to develop and implement cutting-edge solutions.
                                </p>
                                <Button variant="glow" className="w-full sm:w-auto" asChild>
                                    <Link href="/partner">Become a Partner</Link>
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </main>
    );
} 