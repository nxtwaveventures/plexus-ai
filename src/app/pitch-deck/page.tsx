'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Download, Share2, Save, Image as ImageIcon, Maximize2, Minimize2 } from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

interface Slide {
    title: string;
    content: string;
    image: string;
    notes: string;
}

export default function PitchDeck() {
    const [companyName, setCompanyName] = useState('Plexus AI');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPresenting, setIsPresenting] = useState(false);
    const [slides, setSlides] = useState<Slide[]>([
        {
            title: 'AI-Powered Longevity Finance for a Healthier, Wealthier India',
            content: 'Empowering 1.4 billion Indians with personalized financial solutions for longer, healthier lives',
            image: '/slide1.jpg',
            notes: 'Key points to cover: Market size, target audience, value proposition'
        },
        {
            title: 'The Problem',
            content: 'India faces a dual crisis: healthcare access challenges and financial insecurity for aging populations',
            image: '/slide2.jpg',
            notes: 'Focus on: Current challenges, pain points, market gaps'
        },
        {
            title: 'Our Solution',
            content: 'Plexus AI combines healthcare innovation with AI-powered solutions to accelerate MedTech development',
            image: '/slide3.jpg',
            notes: 'Highlight: Technology, unique features, competitive advantage'
        },
        {
            title: 'Technology',
            content: 'Our proprietary AI algorithms analyze health, financial, and demographic data to create holistic life improvement plans',
            image: '/slide4.jpg',
            notes: 'Discuss: AI capabilities, data security, scalability'
        },
        {
            title: 'Market Opportunity',
            content: 'India\'s longevity finance market is projected to reach $500B by 2030, with 200M+ middle-class Indians seeking integrated solutions',
            image: '/slide5.jpg',
            notes: 'Present: Market size, growth projections, target segments'
        },
        {
            title: 'Business Model',
            content: 'Subscription model with tiered service levels and partnerships with insurance providers, healthcare systems, and financial institutions',
            image: '/slide6.jpg',
            notes: 'Explain: Revenue streams, pricing strategy, partnerships'
        },
        {
            title: 'Call to Action',
            content: 'Join us in revolutionizing India\'s approach to longevity and financial wellness',
            image: '/slide7.jpg',
            notes: 'End with: Next steps, investment opportunity, contact information'
        }
    ]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft' && currentSlide > 0) {
                setCurrentSlide(currentSlide - 1);
            } else if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
                setCurrentSlide(currentSlide + 1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide, slides.length]);

    const handleSlideChange = (index: number, field: keyof Slide, value: string) => {
        const newSlides = [...slides];
        newSlides[index] = { ...newSlides[index], [field]: value };
        setSlides(newSlides);
    };

    const generatePDF = async () => {
        try {
            const pdf = new jsPDF('landscape', 'mm', 'a4');

            for (let i = 0; i < slides.length; i++) {
                const slideElement = document.getElementById(`slide-${i}`);

                if (slideElement) {
                    const canvas = await html2canvas(slideElement, {
                        scale: 2,
                        logging: false,
                        useCORS: true
                    });

                    const imgData = canvas.toDataURL('image/jpeg', 1.0);

                    if (i > 0) pdf.addPage();
                    pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210);
                }
            }

            pdf.save(`${companyName.replace(/\s+/g, '-').toLowerCase()}-pitch-deck.pdf`);
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Error generating PDF. Please try again.');
        }
    };

    const shareDeck = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: `${companyName} Pitch Deck`,
                    text: 'Check out our pitch deck!',
                    url: window.location.href
                });
            } else {
                alert('Web Share API not supported in your browser');
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-20">
            <Head>
                <title>AI-Powered Pitch Deck Generator | Plexus AI</title>
                <meta name="description" content="Generate a professional pitch deck for Plexus AI" />
            </Head>

            {!isPresenting ? (
                <main className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Plexus AI Pitch Deck
                        </h1>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => setIsPresenting(true)}
                                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                <Maximize2 className="w-5 h-5" />
                                Present
                            </button>
                            <button
                                onClick={generatePDF}
                                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                            >
                                <Download className="w-5 h-5" />
                                Download PDF
                            </button>
                            <button
                                onClick={shareDeck}
                                className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                            >
                                <Share2 className="w-5 h-5" />
                                Share
                            </button>
                        </div>
                    </div>

                    <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-xl">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Company Name:
                            <input
                                type="text"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                className="mt-1 block w-full bg-white/10 border border-gray-600 rounded-lg shadow-sm p-2 text-white"
                            />
                        </label>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {slides.map((slide, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl"
                            >
                                <h2 className="text-xl font-semibold mb-4 text-blue-400">Slide {index + 1}</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <label className="block text-sm font-medium text-gray-300">
                                            Title:
                                            <input
                                                type="text"
                                                value={slide.title}
                                                onChange={(e) => handleSlideChange(index, 'title', e.target.value)}
                                                className="mt-1 block w-full bg-white/10 border border-gray-600 rounded-lg shadow-sm p-2 text-white"
                                            />
                                        </label>

                                        <label className="block text-sm font-medium text-gray-300">
                                            Content:
                                            <textarea
                                                value={slide.content}
                                                onChange={(e) => handleSlideChange(index, 'content', e.target.value)}
                                                rows={3}
                                                className="mt-1 block w-full bg-white/10 border border-gray-600 rounded-lg shadow-sm p-2 text-white"
                                            />
                                        </label>

                                        <label className="block text-sm font-medium text-gray-300">
                                            Speaker Notes:
                                            <textarea
                                                value={slide.notes}
                                                onChange={(e) => handleSlideChange(index, 'notes', e.target.value)}
                                                rows={2}
                                                className="mt-1 block w-full bg-white/10 border border-gray-600 rounded-lg shadow-sm p-2 text-white"
                                            />
                                        </label>
                                    </div>

                                    <div
                                        id={`slide-${index}`}
                                        className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-8 rounded-xl aspect-video flex flex-col items-center justify-center text-center"
                                    >
                                        <h3 className="text-2xl font-bold mb-4 text-white">{slide.title}</h3>
                                        <p className="text-gray-300">{slide.content}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </main>
            ) : (
                <div className="fixed inset-0 bg-black pt-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="h-full flex flex-col items-center justify-center p-8"
                        >
                            <div className="max-w-4xl w-full">
                                <h2 className="text-4xl font-bold mb-6 text-center text-white">
                                    {slides[currentSlide].title}
                                </h2>
                                <p className="text-xl text-gray-300 text-center">
                                    {slides[currentSlide].content}
                                </p>
                            </div>

                            <div className="absolute bottom-8 left-8 text-gray-400">
                                Slide {currentSlide + 1} of {slides.length}
                            </div>

                            <div className="absolute bottom-8 right-8 flex gap-4">
                                <button
                                    onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                >
                                    <ArrowLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                >
                                    <ArrowRight className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={() => setIsPresenting(false)}
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                >
                                    <Minimize2 className="w-6 h-6" />
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
} 