import React from 'react';
import { Brain, Zap, Sparkles, Rocket, Target, TrendingUp, Code, GraduationCap, Stethoscope, Scale, Gamepad2, ArrowRight, Star, BarChart3, Globe, Play, Award } from 'lucide-react';

const Home = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden transition-colors duration-300">
            {/* Animated Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-900/20 dark:via-black dark:to-teal-900/20"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/20 dark:bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200/20 dark:bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Hero Section */}
            <section className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-8 animate-fade-in">
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/50 dark:bg-emerald-500/20 backdrop-blur-xl border border-emerald-200 dark:border-emerald-500/30 rounded-full shadow-sm dark:shadow-none">
                            <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400 animate-pulse" />
                            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-300 dark:to-teal-300 bg-clip-text text-transparent">
                                Next-Gen Career Intelligence
                            </span>
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-fade-in-up text-gray-900 dark:text-white">
                        Your Future,
                        <br />
                        <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 bg-clip-text text-transparent animate-gradient">
                            Simulated & Decoded
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        Step into AI-powered career universes. Experience real work, not guesswork.
                        Get precision-matched to your perfect path through machine learning magic.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up delay-300">
                        <button className="group px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl font-bold text-lg text-white hover:shadow-2xl hover:shadow-emerald-500/30 dark:hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3">
                            Launch Experience
                            <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-10 py-5 bg-white/50 dark:bg-white/5 backdrop-blur-xl border-2 border-gray-200 dark:border-white/20 rounded-2xl font-bold text-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 flex items-center gap-3 shadow-sm dark:shadow-none">
                            <Play className="w-6 h-6" />
                            Watch Demo
                        </button>
                    </div>

                    {/* Floating Stats */}
                    <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                        {[
                            { value: '5', label: 'Career Worlds', icon: <Globe className="w-6 h-6" /> },
                            { value: '20+', label: 'Skills Tracked', icon: <BarChart3 className="w-6 h-6" /> },
                            { value: '100%', label: 'AI-Powered', icon: <Brain className="w-6 h-6" /> }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-white dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 shadow-sm dark:shadow-none">
                                <div className="flex justify-center mb-3 text-teal-600 dark:text-teal-400">{stat.icon}</div>
                                <div className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Career Simulations Grid */}
            <section className="relative z-10 py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-500/20 rounded-full mb-6 border border-emerald-200 dark:border-emerald-500/30">
                            <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Interactive Simulations</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 dark:text-white">
                            Choose Your
                            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent"> Reality</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Five immersive career experiences powered by cutting-edge AI
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Code Architect',
                                desc: 'Build digital empires',
                                icon: <Code className="w-12 h-12" />,
                                gradient: 'from-teal-500 to-emerald-500',
                                skills: ['Logic', 'Problem Solving', 'Debugging']
                            },
                            {
                                title: 'Knowledge Shaper',
                                desc: 'Inspire minds, change lives',
                                icon: <GraduationCap className="w-12 h-12" />,
                                gradient: 'from-green-500 to-emerald-500',
                                skills: ['Communication', 'Planning', 'Empathy']
                            },
                            {
                                title: 'Game Forge',
                                desc: 'Create immersive worlds',
                                icon: <Gamepad2 className="w-12 h-12" />,
                                gradient: 'from-emerald-500 to-lime-500',
                                skills: ['Creativity', 'Technical', 'Design']
                            },
                            {
                                title: 'Life Guardian',
                                desc: 'Diagnose, heal, save',
                                icon: <Stethoscope className="w-12 h-12" />,
                                gradient: 'from-teal-600 to-cyan-600',
                                skills: ['Accuracy', 'Stress Management', 'Analysis']
                            },
                            {
                                title: 'Justice Warrior',
                                desc: 'Defend rights, win battles',
                                icon: <Scale className="w-12 h-12" />,
                                gradient: 'from-lime-500 to-yellow-500',
                                skills: ['Persuasion', 'Critical Thinking', 'Strategy']
                            },
                        ].map((career, i) => (
                            <div
                                key={i}
                                className={`group relative p-8 bg-gradient-to-br ${career.gradient} rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-xl ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                            >
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"></div>
                                <div className="relative z-10">
                                    <div className="mb-6 text-white/90 group-hover:scale-110 transition-transform duration-500">
                                        {career.icon}
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-2">{career.title}</h3>
                                    <p className="text-white/90 mb-6 text-lg">{career.desc}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {career.skills.map((skill, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-xl rounded-full text-sm font-semibold text-white border border-white/20">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                                        Enter Simulation
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="relative z-10 py-32 px-4 bg-gradient-to-b from-transparent via-emerald-50 to-transparent dark:via-emerald-950/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 dark:text-white">
                            The <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">Process</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Dive In', desc: 'Choose your simulation universe', icon: <Rocket className="w-8 h-8" /> },
                            { step: '02', title: 'Perform', desc: 'Complete real-world challenges', icon: <Target className="w-8 h-8" /> },
                            { step: '03', title: 'Analyze', desc: 'AI tracks every decision', icon: <Brain className="w-8 h-8" /> },
                            { step: '04', title: 'Discover', desc: 'Get your career blueprint', icon: <Award className="w-8 h-8" /> }
                        ].map((item, i) => (
                            <div key={i} className="relative group">
                                <div className="p-8 bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl hover:shadow-xl dark:hover:bg-white/10 transition-all duration-500 hover:-translate-y-4 shadow-sm">
                                    <div className="text-6xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-4">
                                        {item.step}
                                    </div>
                                    <div className="mb-4 text-teal-600 dark:text-teal-400">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                                </div>
                                {i < 3 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 z-20"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-32 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="relative p-16 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-[3rem] overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="relative z-10 text-center">
                            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                                Ready to Decode Your Future?
                            </h2>
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                                Join the revolution in career discovery. No more guessing games.
                            </p>
                            <button className="px-12 py-6 bg-white text-emerald-600 rounded-2xl font-black text-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl inline-flex items-center gap-3">
                                Start Your Journey
                                <Sparkles className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
