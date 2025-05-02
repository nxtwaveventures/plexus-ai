'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BiologicalAgeAssessment() {
    const [form, setForm] = useState({
        age: '',
        weight: '',
        height: '',
        exercise: '0',
        sleep: '0',
        stress: '0',
        diet: '0'
    });
    const [result, setResult] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const calculateBiologicalAge = () => {
        const baseAge = Number(form.age);
        const bmi = Number(form.weight) / Math.pow(Number(form.height) / 100, 2);

        // Lifestyle factors (each can add or subtract years)
        const exerciseFactor = (5 - Number(form.exercise)) * 2; // More exercise = younger
        const sleepFactor = (5 - Number(form.sleep)) * 1.5; // Better sleep = younger
        const stressFactor = Number(form.stress) * 2; // More stress = older
        const dietFactor = (5 - Number(form.diet)) * 1.5; // Better diet = younger

        // BMI factor (ideal BMI is around 22)
        const bmiFactor = Math.abs(bmi - 22) * 0.5;

        const biologicalAge = baseAge + exerciseFactor + sleepFactor + stressFactor + dietFactor + bmiFactor;
        return Math.round(biologicalAge);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const bioAge = calculateBiologicalAge();
        setResult(bioAge);
    };

    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-10">
                <Link
                    href="/plexus-lifex"
                    className="inline-flex items-center text-white/60 hover:text-white mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Plexus LifeX
                </Link>

                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                        Biological Age Assessment
                    </h1>
                    <p className="text-white/80 mb-8">
                        Discover your biological age by answering a few simple questions about your lifestyle and health metrics.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white/80 mb-2">Chronological Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={form.age}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                                    placeholder="Enter your age"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white/80 mb-2">Weight (kg)</label>
                                <input
                                    type="number"
                                    name="weight"
                                    value={form.weight}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                                    placeholder="Enter your weight"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white/80 mb-2">Height (cm)</label>
                                <input
                                    type="number"
                                    name="height"
                                    value={form.height}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                                    placeholder="Enter your height"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white/80 mb-2">Exercise Level</label>
                                <select
                                    name="exercise"
                                    value={form.exercise}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                                    required
                                >
                                    <option value="0">Sedentary (No exercise)</option>
                                    <option value="1">Light (1-2 times/week)</option>
                                    <option value="2">Moderate (3-4 times/week)</option>
                                    <option value="3">Active (5-6 times/week)</option>
                                    <option value="4">Very Active (Daily exercise)</option>
                                    <option value="5">Athletic (Professional level)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-white/80 mb-2">Sleep Quality</label>
                                <select
                                    name="sleep"
                                    value={form.sleep}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                                    required
                                >
                                    <option value="0">Poor (Less than 6 hours)</option>
                                    <option value="1">Fair (6-7 hours)</option>
                                    <option value="2">Good (7-8 hours)</option>
                                    <option value="3">Very Good (8-9 hours)</option>
                                    <option value="4">Excellent (9+ hours)</option>
                                    <option value="5">Optimal (Consistent 8 hours)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-white/80 mb-2">Stress Level</label>
                                <select
                                    name="stress"
                                    value={form.stress}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                                    required
                                >
                                    <option value="0">Very High</option>
                                    <option value="1">High</option>
                                    <option value="2">Moderate</option>
                                    <option value="3">Low</option>
                                    <option value="4">Very Low</option>
                                    <option value="5">Minimal</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-white/80 mb-2">Diet Quality</label>
                                <select
                                    name="diet"
                                    value={form.diet}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                                    required
                                >
                                    <option value="0">Poor (Fast food, processed)</option>
                                    <option value="1">Fair (Mixed diet)</option>
                                    <option value="2">Good (Balanced diet)</option>
                                    <option value="3">Very Good (Mostly whole foods)</option>
                                    <option value="4">Excellent (Mostly organic)</option>
                                    <option value="5">Optimal (Mediterranean/Plant-based)</option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            Calculate Biological Age
                        </button>
                    </form>

                    {result !== null && (
                        <div className="mt-8 p-6 rounded-lg bg-white/5 border border-white/10">
                            <h2 className="text-2xl font-semibold mb-4 text-white">Your Results</h2>
                            <p className="text-white/80 mb-2">Chronological Age: {form.age} years</p>
                            <p className="text-white/80 mb-4">Biological Age: {result} years</p>
                            <div className="text-white/60 text-sm">
                                {result > Number(form.age) ? (
                                    <p>Your biological age is higher than your chronological age. Consider improving your lifestyle factors to reduce your biological age.</p>
                                ) : result < Number(form.age) ? (
                                    <p>Great job! Your biological age is lower than your chronological age, indicating good health and lifestyle choices.</p>
                                ) : (
                                    <p>Your biological age matches your chronological age, indicating average health status.</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
} 