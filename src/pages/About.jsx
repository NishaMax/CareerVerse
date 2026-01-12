import React from 'react';
import { Brain, Zap, TrendingUp, Target, Star, BarChart3, Globe, Award } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
            {/* Animated Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-900/20 dark:via-black dark:to-teal-900/20"></div>
            </div>

            {/* Hero */}
            <section className="relative z-10 pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-500/20 rounded-full mb-8 border border-teal-200 dark:border-teal-500/30">
                        <Star className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                        <span className="text-sm font-semibold text-teal-700 dark:text-teal-300">About CareerVerse</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 text-gray-900 dark:text-white">
                        Redefining
                        <br />
                        <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 bg-clip-text text-transparent">
                            Career Discovery
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We're building the future of career guidance—where AI meets action, and simulations reveal your true potential.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="relative z-10 py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl font-black mb-6 text-gray-900 dark:text-white">
                                Our <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">Mission</span>
                            </h2>
                            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    Traditional career tests are broken. They ask what you'd do in hypothetical scenarios—but theory and reality are worlds apart.
                                </p>
                                <p>
                                    CareerVerse drops you into hyper-realistic AI simulations where you don't just answer questions—you perform actual work.
                                </p>
                                <p>
                                    Our machine learning algorithms analyze how you think, communicate, solve problems, and handle pressure in real-time. The result? Career recommendations based on demonstrated skills, not just preferences.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="p-12 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-600/20 dark:to-teal-600/20 backdrop-blur-xl border border-emerald-200 dark:border-emerald-500/30 rounded-3xl shadow-lg dark:shadow-none">
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { icon: <Brain className="w-12 h-12" />, label: 'AI-Powered', color: 'from-emerald-500 to-green-500' },
                                        { icon: <Target className="w-12 h-12" />, label: 'Precision Matched', color: 'from-teal-500 to-cyan-500' },
                                        { icon: <TrendingUp className="w-12 h-12" />, label: 'Real Growth', color: 'from-green-500 to-lime-500' },
                                        { icon: <Zap className="w-12 h-12" />, label: 'Instant Insights', color: 'from-yellow-500 to-orange-500' }
                                    ].map((item, i) => (
                                        <div key={i} className={`p-6 bg-gradient-to-br ${item.color} rounded-2xl text-center shadow-md`}>
                                            <div className="text-white mb-3 flex justify-center">{item.icon}</div>
                                            <div className="text-white font-bold">{item.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology */}
            <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-transparent via-emerald-50 to-transparent dark:via-emerald-950/20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">
                            Powered by <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">Advanced Tech</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Brain className="w-12 h-12" />,
                                title: 'Neural Networks',
                                desc: 'Deep learning models track 20+ skill dimensions in real-time',
                                gradient: 'from-emerald-600 to-green-600'
                            },
                            {
                                icon: <Zap className="w-12 h-12" />,
                                title: 'Adaptive ML',
                                desc: 'Reinforcement learning adjusts difficulty based on your performance',
                                gradient: 'from-teal-600 to-cyan-600'
                            },
                            {
                                icon: <Award className="w-12 h-12" />,
                                title: 'Career Matching',
                                desc: 'Proprietary algorithms match your skills to 100+ career paths',
                                gradient: 'from-green-600 to-lime-600'
                            }
                        ].map((tech, i) => (
                            <div key={i} className="group p-8 bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl hover:shadow-xl dark:hover:bg-white/10 transition-all duration-500 hover:-translate-y-4 shadow-sm">
                                <div className={`inline-flex p-4 bg-gradient-to-br ${tech.gradient} rounded-2xl mb-6 text-white group-hover:scale-110 transition-transform duration-500 shadow-md`}>
                                    {tech.icon}
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">{tech.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="relative z-10 py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { value: '5', label: 'Career Simulations', icon: <Globe className="w-8 h-8" /> },
                            { value: '20+', label: 'Skills Analyzed', icon: <BarChart3 className="w-8 h-8" /> },
                            { value: '8', label: 'Month Project', icon: <TrendingUp className="w-8 h-8" /> },
                            { value: '100%', label: 'ML Powered', icon: <Brain className="w-8 h-8" /> }
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-8 bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl hover:shadow-xl dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 shadow-sm">
                                <div className="flex justify-center text-teal-600 dark:text-teal-400 mb-4">{stat.icon}</div>
                                <div className="text-5xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-3">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="relative z-10 py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">
                            Built With <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">Innovation</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: 'Unity Engine', desc: 'Immersive 3D simulations with C# scripting', techs: ['C#', '3D Graphics', 'Real-time'] },
                            { title: 'ML Pipeline', desc: 'TensorFlow & PyTorch for skill analysis', techs: ['Python', 'Neural Nets', 'NLP'] },
                            { title: 'Smart Backend', desc: 'FastAPI serving ML models in real-time', techs: ['FastAPI', 'MongoDB', 'Firebase'] },
                            { title: 'Modern Frontend', desc: 'React dashboard with live insights', techs: ['React', 'Charts', 'Real-time'] }
                        ].map((stack, i) => (
                            <div key={i} className="p-8 bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl hover:shadow-xl dark:hover:bg-white/10 transition-all duration-300 shadow-sm">
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">{stack.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">{stack.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {stack.techs.map((tech, idx) => (
                                        <span key={idx} className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-500/20 dark:to-teal-500/20 border border-emerald-200 dark:border-emerald-500/30 rounded-xl text-sm font-semibold text-teal-700 dark:text-teal-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
