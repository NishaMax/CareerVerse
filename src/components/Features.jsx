import React from 'react';
import { Brain, Target, TrendingUp } from 'lucide-react';

const features = [
    {
        icon: <Brain size={32} color="white" />,
        title: "AI-Powered Analysis",
        description: "Advanced AI evaluates your natural skills through realistic simulations.",
        color: "#00bfa5" // Teal
    },
    {
        icon: <Target size={32} color="white" />,
        title: "Precise Recommendations",
        description: "Get data-driven career matches based on your actual performance.",
        color: "#00897b" // Darker Teal
    },
    {
        icon: <TrendingUp size={32} color="white" />,
        title: "Track Your Growth",
        description: "Monitor your skill development across multiple simulation sessions.",
        color: "#00bfa5"
    }
];

const Features = () => {
    return (
        <section className="py-24 px-4 bg-transparent">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Why Choose <span className="text-blue-600 dark:text-blue-400" style={{ color: '#2563eb' }}>CareerVerse</span> ?
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Move beyond traditional career quizzes with AI-powered simulations
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-10 rounded-[2rem] shadow-xl shadow-gray-100/50 dark:shadow-none border border-gray-50 dark:border-gray-700 hover:-translate-y-1 transition-transform duration-300">
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-teal-500/20"
                                style={{ backgroundColor: feature.color }}
                            >
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
