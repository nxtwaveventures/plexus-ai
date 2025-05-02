'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Heart, Brain, AlertCircle, Moon, Coffee, Scale, Apple, Cigarette, Beer, Bed, Salad, Info } from 'lucide-react';
import React from 'react';

interface AssessmentQuestion {
    id: number;
    question: string;
    type: 'number' | 'select';
    options?: string[];
    unit?: string;
    min?: number;
    max?: number;
    category: 'basic' | 'lifestyle' | 'health' | 'habits';
    weight: number;
    icon?: any;
    explanation?: string;
}

const questions: AssessmentQuestion[] = [
    {
        id: 1,
        question: 'What is your age?',
        type: 'number',
        min: 18,
        max: 120,
        unit: 'years',
        category: 'basic',
        weight: 1,
        icon: Brain,
        explanation: 'Your chronological age serves as the baseline for calculating biological age.'
    },
    {
        id: 2,
        question: 'How many hours of sleep do you typically get per night?',
        type: 'number',
        min: 0,
        max: 24,
        unit: 'hours',
        category: 'lifestyle',
        weight: 0.5,
        icon: Moon,
        explanation: 'Sleep is crucial for physical and mental health.'
    },
    {
        id: 3,
        question: 'How would you rate your physical activity level?',
        type: 'select',
        options: ['Sedentary', 'Light', 'Moderate', 'Very Active', 'Extremely Active'],
        category: 'lifestyle',
        weight: 0.7,
        icon: Activity,
        explanation: 'Physical activity impacts your biological age significantly.'
    }
];

export default function BiologicalAgeAssessment() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string | number>>({});

    const handleAnswer = (answer: string | number) => {
        setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: answer }));
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        }
    };

    return (
        <main className="min-h-screen bg-background pt-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                            Biological Age Assessment
                        </h1>
                        <p className="text-lg text-white/80">
                            Discover your biological age through our advanced AI-powered assessment
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="card-glow p-8 rounded-lg"
                    >
                        {currentQuestion < questions.length ? (
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    {questions[currentQuestion].icon && (
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                            {React.createElement(questions[currentQuestion].icon, {
                                                className: "w-6 h-6 text-primary"
                                            })}
                                        </div>
                                    )}
                                    <h2 className="text-2xl font-semibold">{questions[currentQuestion].question}</h2>
                                </div>

                                {questions[currentQuestion].type === 'select' ? (
                                    <div className="space-y-4">
                                        {questions[currentQuestion].options?.map((option, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleAnswer(option)}
                                                className="w-full p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left"
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-4">
                                        <input
                                            type="number"
                                            min={questions[currentQuestion].min}
                                            max={questions[currentQuestion].max}
                                            onChange={(e) => handleAnswer(Number(e.target.value))}
                                            className="w-full p-4 rounded-lg bg-white/5 border border-white/20 focus:border-primary focus:outline-none"
                                            placeholder={`Enter value (${questions[currentQuestion].unit})`}
                                        />
                                    </div>
                                )}

                                {questions[currentQuestion].explanation && (
                                    <div className="mt-6 flex items-start gap-2 text-white/60">
                                        <Info className="w-5 h-5 mt-0.5" />
                                        <p>{questions[currentQuestion].explanation}</p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="text-center">
                                <h2 className="text-2xl font-semibold mb-4">Assessment Complete!</h2>
                                <p className="text-white/80 mb-6">
                                    Thank you for completing the assessment. Your results are being calculated.
                                </p>
                                <button
                                    onClick={() => setCurrentQuestion(0)}
                                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                                >
                                    Start Over
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </main>
    );
} 