import React from 'react';
import { GraduationCap, Stethoscope, Scale, ArrowRight } from 'lucide-react';

const paths = [
    {
        icon: <GraduationCap size={28} className="text-blue-500" />,
        title: "The Educator",
        description: "Teach a high school class",
        bg: "#dbeafe", // Light Blue
        borderColor: "#bfdbfe"
    },
    {
        icon: <Stethoscope size={28} className="text-teal-600" />,
        title: "The Diagnostician",
        description: "Diagnose medical cases",
        bg: "#ccfbf1", // Light Teal
        borderColor: "#99f6e4"
    },
    {
        icon: <Scale size={28} className="text-orange-500" />,
        title: "The Advocate",
        description: "Navigate legal negotiations",
        bg: "#ffedd5", // Light Orange
        borderColor: "#fed7aa"
    }
];

const Experience = () => {
    return (
        <section className="py-24 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Experience Three <span className="text-teal-500 dark:text-teal-400" style={{ color: 'var(--color-teal)' }}>Career Paths</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-3xl mx-auto">
                        Immerse yourself in hyper realistic simulations designed to measure your natural aptitudes
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {paths.map((path, index) => (
                        <div
                            key={index}
                            className="p-10 rounded-[2rem] transition-transform hover:-translate-y-2 border dark:bg-gray-800 dark:border-gray-700"
                            style={{
                                backgroundColor: document.documentElement.classList.contains('dark') ? undefined : path.bg,
                                borderColor: document.documentElement.classList.contains('dark') ? undefined : path.borderColor
                            }}
                        >
                            <div className="w-14 h-14 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                                {path.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{path.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300 text-lg">{path.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button className="btn btn-primary px-10 py-4 rounded-full text-lg shadow-xl shadow-teal-500/20 hover:shadow-teal-500/30 transition-all flex items-center justify-center gap-2 mx-auto">
                        Try All Simulations
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Experience;
