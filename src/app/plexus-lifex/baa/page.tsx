'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Heart, Brain, Dumbbell, AlertCircle, Moon, Coffee, Scale, Apple, Cigarette, Beer, Bed, Salad, Info, ChevronDown, ChevronUp, Calendar, TrendingUp, TrendingDown } from 'lucide-react';

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

interface HealthScore {
    category: string;
    score: number;
    recommendation: string;
    icon: any;
    impactLevel: 'low' | 'medium' | 'high';
    actionItems: string[];
    explanation: string;
}

interface AssessmentHistory {
    date: string;
    biologicalAge: number;
    chronologicalAge: number;
    scores: HealthScore[];
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
        explanation: 'Your chronological age serves as the baseline for calculating biological age. This helps us understand how your lifestyle and health factors are influencing your aging process.'
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
        explanation: 'Sleep is crucial for physical and mental health. It helps your body recover and rejuvenate, and can impact your biological age.'
    },
    {
        id: 3,
        question: 'How would you rate your physical activity level?',
        type: 'select',
        options: ['Sedentary', 'Light', 'Moderate', 'Very Active', 'Extremely Active'],
        category: 'lifestyle',
        weight: 0.7,
        icon: Activity,
        explanation: 'Physical activity is important for maintaining a healthy body and mind. It can impact your biological age.'
    },
    {
        id: 4,
        question: 'What is your resting heart rate?',
        type: 'number',
        min: 40,
        max: 200,
        unit: 'bpm',
        category: 'health',
        weight: 0.3,
        icon: Heart,
        explanation: 'Resting heart rate can be an indicator of cardiovascular health. It can impact your biological age.'
    },
    {
        id: 5,
        question: 'How many days per week do you exercise?',
        type: 'number',
        min: 0,
        max: 7,
        unit: 'days',
        category: 'lifestyle',
        weight: 0.4,
        icon: Dumbbell,
        explanation: 'Regular exercise can improve your cardiovascular health and can impact your biological age.'
    },
    {
        id: 6,
        question: 'How many servings of fruits and vegetables do you eat daily?',
        type: 'number',
        min: 0,
        max: 20,
        unit: 'servings',
        category: 'lifestyle',
        weight: 0.4,
        icon: Apple,
        explanation: 'Fruits and vegetables are rich in vitamins, minerals, and antioxidants. They can impact your biological age.'
    },
    {
        id: 7,
        question: 'How many cups of water do you drink daily?',
        type: 'number',
        min: 0,
        max: 20,
        unit: 'cups',
        category: 'health',
        weight: 0.3,
        icon: Coffee,
        explanation: 'Water is essential for maintaining good health. It can impact your biological age.'
    },
    {
        id: 8,
        question: 'How would you rate your stress level?',
        type: 'select',
        options: ['Very Low', 'Low', 'Moderate', 'High', 'Very High'],
        category: 'health',
        weight: 0.6,
        icon: Brain,
        explanation: 'Stress can have a significant impact on your health. It can impact your biological age.'
    },
    {
        id: 9,
        question: 'Do you smoke?',
        type: 'select',
        options: ['Never', 'Occasionally', 'Regularly', 'Heavy Smoker'],
        category: 'habits',
        weight: 0.8,
        icon: Cigarette,
        explanation: 'Smoking can have a negative impact on your health. It can impact your biological age.'
    },
    {
        id: 10,
        question: 'How many alcoholic drinks do you consume per week?',
        type: 'number',
        min: 0,
        max: 50,
        unit: 'drinks',
        category: 'habits',
        weight: 0.6,
        icon: Beer,
        explanation: 'Alcohol consumption can have a negative impact on your health. It can impact your biological age.'
    },
    {
        id: 11,
        question: 'How would you rate your sleep quality?',
        type: 'select',
        options: ['Very Poor', 'Poor', 'Fair', 'Good', 'Excellent'],
        category: 'health',
        weight: 0.5,
        icon: Bed,
        explanation: 'Sleep quality can impact your health. It can impact your biological age.'
    },
    {
        id: 12,
        question: 'How many processed meals do you eat per week?',
        type: 'number',
        min: 0,
        max: 30,
        unit: 'meals',
        category: 'habits',
        weight: 0.4,
        icon: Salad,
        explanation: 'Processed foods often contain additives, preservatives, and high levels of sugar, salt, and unhealthy fats. Regular consumption can impact your metabolic health and accelerate biological aging.'
    }
];

// Add static export configuration
export const dynamic = 'force-static';
export const revalidate = false;

export default function BAA() {
    const [isClient, setIsClient] = useState(false);
    const [answers, setAnswers] = useState<Record<number, string | number>>({});
    const [showResults, setShowResults] = useState(false);
    const [biologicalAge, setBiologicalAge] = useState<number | null>(null);
    const [healthScores, setHealthScores] = useState<HealthScore[]>([]);
    const [errors, setErrors] = useState<Record<number, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [assessmentHistory, setAssessmentHistory] = useState<AssessmentHistory[]>([]);
    const [showExplanation, setShowExplanation] = useState<number | null>(null);
    const [showHistory, setShowHistory] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const savedHistory = localStorage.getItem('baa_history');
        if (savedHistory) {
            try {
                setAssessmentHistory(JSON.parse(savedHistory));
            } catch (error) {
                console.error('Error parsing assessment history:', error);
                setAssessmentHistory([]);
            }
        }
    }, []);

    const saveAssessmentToHistory = (age: number, scores: HealthScore[]) => {
        const newHistory: AssessmentHistory = {
            date: new Date().toISOString(),
            biologicalAge: age,
            chronologicalAge: Number(answers[1]) || 0,
            scores: scores
        };

        const updatedHistory = [...assessmentHistory, newHistory].sort((a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setAssessmentHistory(updatedHistory);
        localStorage.setItem('baa_history', JSON.stringify(updatedHistory));
    };

    const validateAnswer = (questionId: number, value: string | number): string => {
        const question = questions.find(q => q.id === questionId);
        if (!question) return '';

        if (value === '' || value === undefined) {
            return 'This field is required';
        }

        if (question.type === 'number') {
            const numValue = Number(value);
            if (isNaN(numValue)) {
                return 'Please enter a valid number';
            }
            if (question.min !== undefined && numValue < question.min) {
                return `Minimum value is ${question.min}`;
            }
            if (question.max !== undefined && numValue > question.max) {
                return `Maximum value is ${question.max}`;
            }
        }

        return '';
    };

    const handleAnswer = (questionId: number, answer: string | number) => {
        const error = validateAnswer(questionId, answer);
        setErrors(prev => ({
            ...prev,
            [questionId]: error
        }));
        setAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
    };

    const calculateHealthScores = () => {
        const scores: HealthScore[] = [
            {
                category: 'Sleep Quality',
                score: Math.min(100, ((Number(answers[2]) - 4) / 4) * 100),
                icon: Moon,
                impactLevel: Number(answers[2]) < 6 ? 'high' : Number(answers[2]) < 7 ? 'medium' : 'low',
                recommendation: Number(answers[2]) < 7
                    ? 'Your sleep duration needs improvement for optimal health.'
                    : 'Great sleep habits! Keep maintaining this schedule.',
                actionItems: [
                    'Set a consistent sleep schedule',
                    'Create a relaxing bedtime routine',
                    'Avoid screens 1 hour before bed',
                    'Keep your bedroom cool and dark'
                ],
                explanation: 'Sleep is crucial for physical and mental health. It helps your body recover and rejuvenate, and can impact your biological age.'
            },
            {
                category: 'Physical Activity',
                score: ['Sedentary', 'Light', 'Moderate', 'Very Active', 'Extremely Active']
                    .indexOf(String(answers[3])) * 25,
                icon: Activity,
                impactLevel: ['Sedentary', 'Light'].includes(String(answers[3])) ? 'high' : 'low',
                recommendation: ['Sedentary', 'Light'].includes(String(answers[3]))
                    ? 'Increasing your physical activity could significantly improve your biological age.'
                    : 'Your activity level is contributing positively to your health.',
                actionItems: [
                    'Aim for 150 minutes of moderate exercise weekly',
                    'Include both cardio and strength training',
                    'Take regular breaks from sitting',
                    'Find activities you enjoy to stay motivated'
                ],
                explanation: 'Regular exercise can improve your cardiovascular health and can impact your biological age.'
            },
            {
                category: 'Cardiovascular Health',
                score: Math.max(0, 100 - Math.abs(Number(answers[4]) - 60) * 2),
                icon: Heart,
                impactLevel: Number(answers[4]) > 80 ? 'high' : Number(answers[4]) > 70 ? 'medium' : 'low',
                recommendation: Number(answers[4]) > 80
                    ? 'Your resting heart rate indicates room for cardiovascular improvement.'
                    : 'Your heart rate is in a healthy range.',
                actionItems: [
                    'Practice regular cardio exercises',
                    'Manage stress through meditation',
                    'Maintain a heart-healthy diet',
                    'Stay hydrated throughout the day'
                ],
                explanation: 'Resting heart rate can be an indicator of cardiovascular health. It can impact your biological age.'
            },
            {
                category: 'Nutrition',
                score: Math.min(100, (Number(answers[6]) / 5) * 100),
                icon: Apple,
                impactLevel: Number(answers[6]) < 3 ? 'high' : Number(answers[6]) < 5 ? 'medium' : 'low',
                recommendation: Number(answers[6]) < 5
                    ? 'Increasing your fruit and vegetable intake could improve your health significantly.'
                    : 'Your nutrition habits are supporting good health.',
                actionItems: [
                    'Include a variety of colorful fruits and vegetables',
                    'Prepare meals at home more often',
                    'Choose whole grains over refined grains',
                    'Limit processed foods and added sugars'
                ],
                explanation: 'Fruits and vegetables are rich in vitamins, minerals, and antioxidants. They can impact your biological age.'
            },
            {
                category: 'Lifestyle Habits',
                score: calculateLifestyleScore(),
                icon: Coffee,
                impactLevel: calculateLifestyleScore() < 60 ? 'high' : calculateLifestyleScore() < 80 ? 'medium' : 'low',
                recommendation: calculateLifestyleScore() < 70
                    ? 'Some of your lifestyle habits may be accelerating aging.'
                    : 'Your lifestyle choices are supporting healthy aging.',
                actionItems: [
                    'Limit alcohol consumption',
                    'Avoid or quit smoking',
                    'Maintain work-life balance',
                    'Practice stress management techniques'
                ],
                explanation: 'Processed foods often contain additives, preservatives, and high levels of sugar, salt, and unhealthy fats. Regular consumption can impact your metabolic health and accelerate biological aging.'
            }
        ];
        return scores;
    };

    const calculateLifestyleScore = () => {
        const smokingScore = ['Never', 'Occasionally', 'Regularly', 'Heavy Smoker']
            .reverse()
            .indexOf(String(answers[9])) * 25;

        const alcoholScore = Math.max(0, 100 - (Number(answers[10]) * 5));
        const processedFoodScore = Math.max(0, 100 - (Number(answers[12]) * 3));

        return (smokingScore + alcoholScore + processedFoodScore) / 3;
    };

    const calculateBiologicalAge = () => {
        const chronologicalAge = Number(answers[1]) || 0;
        const sleepScore = (Number(answers[2]) - 7) * 0.5;
        const activityScore = ['Sedentary', 'Light', 'Moderate', 'Very Active', 'Extremely Active']
            .indexOf(String(answers[3])) * -0.7;
        const heartRateScore = ((Number(answers[4]) - 70) / 10) * 0.3;
        const exerciseScore = (Number(answers[5]) - 3) * -0.4;
        const nutritionScore = (Number(answers[6]) - 5) * -0.3;
        const stressScore = ['Very Low', 'Low', 'Moderate', 'High', 'Very High']
            .indexOf(String(answers[8])) * 0.5;
        const smokingScore = ['Never', 'Occasionally', 'Regularly', 'Heavy Smoker']
            .indexOf(String(answers[9])) * 1.2;
        const alcoholScore = (Number(answers[10]) / 7) * 0.8;
        const sleepQualityScore = ['Very Poor', 'Poor', 'Fair', 'Good', 'Excellent']
            .reverse()
            .indexOf(String(answers[11])) * -0.6;
        const processedFoodScore = (Number(answers[12]) / 10) * 0.5;

        const adjustment = (
            sleepScore +
            activityScore +
            heartRateScore +
            exerciseScore +
            nutritionScore +
            stressScore +
            smokingScore +
            alcoholScore +
            sleepQualityScore +
            processedFoodScore
        ) * 1.2;

        return Math.max(18, Math.round(chronologicalAge + adjustment));
    };

    const handleSubmit = () => {
        setIsSubmitting(true);
        const newErrors: Record<number, string> = {};
        let hasErrors = false;

        questions.forEach(q => {
            const error = validateAnswer(q.id, answers[q.id]);
            if (error) {
                newErrors[q.id] = error;
                hasErrors = true;
            }
        });

        setErrors(newErrors);

        if (!hasErrors) {
            const age = calculateBiologicalAge();
            const scores = calculateHealthScores();
            setBiologicalAge(age);
            setHealthScores(scores);
            saveAssessmentToHistory(age, scores);
            setShowResults(true);
        }
        setIsSubmitting(false);
    };

    const resetAssessment = () => {
        setShowResults(false);
        setAnswers({});
        setBiologicalAge(null);
        setHealthScores([]);
        setErrors({});
        setCurrentStep(1);
    };

    const currentQuestions = questions.slice((currentStep - 1) * 4, currentStep * 4);
    const totalSteps = Math.ceil(questions.length / 4);

    const HistoryTable = () => {
        const getAgeTrend = (current: number, previous: number) => {
            if (current === previous) return null;
            return current < previous ? (
                <TrendingDown className="w-4 h-4 text-green-500" />
            ) : (
                <TrendingUp className="w-4 h-4 text-red-500" />
            );
        };

        return (
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="py-3 text-left">Date</th>
                            <th className="py-3 text-right">Chronological Age</th>
                            <th className="py-3 text-right">Biological Age</th>
                            <th className="py-3 text-right">Difference</th>
                            <th className="py-3 text-center">Trend</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assessmentHistory.map((history, index) => {
                            const prevHistory = assessmentHistory[index + 1];
                            const trend = prevHistory ? getAgeTrend(history.biologicalAge, prevHistory.biologicalAge) : null;
                            const difference = history.biologicalAge - history.chronologicalAge;

                            return (
                                <tr key={history.date} className="border-b border-white/5 hover:bg-white/5">
                                    <td className="py-3 text-left">
                                        {new Date(history.date).toLocaleDateString()}
                                    </td>
                                    <td className="py-3 text-right">{history.chronologicalAge}</td>
                                    <td className="py-3 text-right">{history.biologicalAge}</td>
                                    <td className={`py-3 text-right ${difference < 0 ? 'text-green-500' : difference > 0 ? 'text-red-500' : 'text-white/60'}`}>
                                        {difference === 0 ? '-' : `${difference > 0 ? '+' : ''}${difference}`}
                                    </td>
                                    <td className="py-3 flex justify-center">
                                        {trend}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    };

    const ResultsSection = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
        >
            <div className="card-glow p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-6">Your Biological Age</h2>
                <div className="text-6xl font-bold text-primary mb-8">
                    {biologicalAge}
                </div>
                <p className="text-white/80 mb-6">
                    Based on your lifestyle factors and health indicators, your body is functioning at an age of {biologicalAge} years.
                    {biologicalAge && answers[1] && (
                        <span className="block mt-2">
                            This is {Math.abs(biologicalAge - Number(answers[1]))} years {biologicalAge > Number(answers[1]) ? 'older' : 'younger'} than your chronological age.
                        </span>
                    )}
                </p>
            </div>

            {assessmentHistory.length > 1 && (
                <div className="card-glow p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">Assessment History</h3>
                        <button
                            onClick={() => setShowHistory(!showHistory)}
                            className="flex items-center gap-2 text-white/60 hover:text-white"
                        >
                            {showHistory ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            {showHistory ? 'Hide History' : 'Show History'}
                        </button>
                    </div>
                    {showHistory && <HistoryTable />}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {healthScores.map((score, index) => (
                    <motion.div
                        key={score.category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="card-glow p-6 rounded-lg"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${score.impactLevel === 'high' ? 'bg-red-500/20' :
                                score.impactLevel === 'medium' ? 'bg-yellow-500/20' :
                                    'bg-green-500/20'
                                }`}>
                                <score.icon className={`w-6 h-6 ${score.impactLevel === 'high' ? 'text-red-500' :
                                    score.impactLevel === 'medium' ? 'text-yellow-500' :
                                        'text-green-500'
                                    }`} />
                            </div>
                            <h3 className="text-xl font-semibold">{score.category}</h3>
                            <button
                                onClick={() => setShowExplanation(index)}
                                className="ml-auto text-white/60 hover:text-white"
                            >
                                <Info className="w-5 h-5" />
                            </button>
                        </div>

                        {showExplanation === index && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-4 p-4 bg-white/5 rounded-lg text-sm text-white/80"
                            >
                                {score.explanation}
                            </motion.div>
                        )}

                        <div className="relative h-2 bg-white/10 rounded-full mb-4 overflow-hidden">
                            <div
                                className={`absolute inset-y-0 left-0 transition-all duration-1000 ${score.score >= 80 ? 'bg-green-500' :
                                    score.score >= 60 ? 'bg-yellow-500' :
                                        'bg-red-500'
                                    }`}
                                style={{ width: `${score.score}%` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                            </div>
                        </div>

                        <div className="flex justify-between text-sm mb-4">
                            <span className="text-white/60">Score</span>
                            <span className={`font-semibold ${score.score >= 80 ? 'text-green-500' :
                                score.score >= 60 ? 'text-yellow-500' :
                                    'text-red-500'
                                }`}>
                                {score.score}%
                            </span>
                        </div>

                        <p className="text-white/70 mb-4">
                            {score.recommendation}
                        </p>

                        <div className="space-y-2">
                            {score.actionItems.map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center gap-4">
                <button
                    onClick={resetAssessment}
                    className="bg-primary/20 hover:bg-primary/30 text-white rounded-lg px-6 py-3 transition-colors"
                >
                    Take Assessment Again
                </button>
                {assessmentHistory.length > 0 && (
                    <button
                        onClick={() => setShowHistory(!showHistory)}
                        className="bg-white/10 hover:bg-white/20 text-white rounded-lg px-6 py-3 transition-colors flex items-center gap-2"
                    >
                        <Calendar className="w-5 h-5" />
                        View History
                    </button>
                )}
            </div>
        </motion.div>
    );

    if (!isClient) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading assessment...</p>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                        Biological Age Assessment
                    </h1>

                    {!showResults ? (
                        <>
                            <div className="mb-8">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-white/60">Step {currentStep} of {totalSteps}</span>
                                    <span className="text-white/60">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full">
                                    <div
                                        className="h-full bg-primary rounded-full transition-all duration-300"
                                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-8">
                                {currentQuestions.map((q) => (
                                    <motion.div
                                        key={q.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: (q.id % 4) * 0.1 }}
                                        className="card-glow p-6 rounded-lg"
                                    >
                                        <h3 className="text-xl mb-4">{q.question}</h3>
                                        {q.type === 'number' ? (
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center gap-4">
                                                    <input
                                                        type="number"
                                                        min={q.min}
                                                        max={q.max}
                                                        value={answers[q.id] || ''}
                                                        className={`bg-background/50 border ${errors[q.id] ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-2 w-32`}
                                                        onChange={(e) => handleAnswer(q.id, e.target.value ? Number(e.target.value) : '')}
                                                    />
                                                    <span className="text-white/60">{q.unit}</span>
                                                </div>
                                                {errors[q.id] && (
                                                    <div className="flex items-center gap-2 text-red-500 text-sm">
                                                        <AlertCircle className="w-4 h-4" />
                                                        {errors[q.id]}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="flex flex-col gap-2">
                                                <select
                                                    value={answers[q.id] || ''}
                                                    className={`bg-background/50 border ${errors[q.id] ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-2 w-full`}
                                                    onChange={(e) => handleAnswer(q.id, e.target.value)}
                                                >
                                                    <option value="">Select an option</option>
                                                    {q.options?.map((opt) => (
                                                        <option key={opt} value={opt}>
                                                            {opt}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors[q.id] && (
                                                    <div className="flex items-center gap-2 text-red-500 text-sm">
                                                        <AlertCircle className="w-4 h-4" />
                                                        {errors[q.id]}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}

                                <div className="flex justify-between gap-4">
                                    {currentStep > 1 && (
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="bg-white/10 hover:bg-white/20 text-white rounded-lg px-6 py-3 transition-colors"
                                            onClick={() => setCurrentStep(prev => prev - 1)}
                                        >
                                            Previous
                                        </motion.button>
                                    )}
                                    {currentStep < totalSteps ? (
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="ml-auto bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-3 transition-colors"
                                            onClick={() => setCurrentStep(prev => prev + 1)}
                                        >
                                            Next
                                        </motion.button>
                                    ) : (
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            disabled={isSubmitting}
                                            className={`ml-auto ${isSubmitting ? 'bg-primary/50' : 'bg-primary hover:bg-primary/90'} text-white rounded-lg px-6 py-3 transition-colors`}
                                            onClick={handleSubmit}
                                        >
                                            {isSubmitting ? 'Calculating...' : 'Calculate Results'}
                                        </motion.button>
                                    )}
                                </div>
                            </div>
                        </>
                    ) : (
                        <ResultsSection />
                    )}
                </motion.div>
            </div>
        </main>
    );
} 