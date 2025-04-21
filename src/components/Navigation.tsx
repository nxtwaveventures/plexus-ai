'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
    currentSlide: number;
    totalSlides: number;
    onPrevious: () => void;
    onNext: () => void;
}

export default function Navigation({ currentSlide, totalSlides, onPrevious, onNext }: NavigationProps) {
    return (
        <>
            {/* Navigation buttons */}
            <div className="fixed top-1/2 -translate-y-1/2 left-4 z-50">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onPrevious}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-colors"
                    style={{ opacity: currentSlide === 0 ? 0.5 : 1 }}
                    disabled={currentSlide === 0}
                >
                    <ChevronLeft className="w-6 h-6" />
                </motion.button>
            </div>
            <div className="fixed top-1/2 -translate-y-1/2 right-4 z-50">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onNext}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-colors"
                    style={{ opacity: currentSlide === totalSlides - 1 ? 0.5 : 1 }}
                    disabled={currentSlide === totalSlides - 1}
                >
                    <ChevronRight className="w-6 h-6" />
                </motion.button>
            </div>

            {/* Progress bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
                <motion.div
                    className="h-full bg-accent"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {/* Slide counter */}
            <div className="fixed top-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm z-50">
                {currentSlide + 1} / {totalSlides}
            </div>
        </>
    );
} 