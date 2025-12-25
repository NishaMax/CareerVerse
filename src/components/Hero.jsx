import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="pt-40 pb-32 px-4 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-teal-50/50 dark:bg-teal-900/20 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-blue-50/50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="container mx-auto text-center max-w-5xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white dark:bg-gray-800 border border-teal-100 dark:border-gray-700 shadow-sm mb-12">
                    <Sparkles size={18} className="text-teal-500 dark:text-teal-400" style={{ color: 'var(--color-teal)' }} />
                    <span className="text-base font-medium text-gray-600 dark:text-gray-300">AI-Powered Career Discovery</span>
                </div>

                {/* Headline */}
                <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
                    Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500" style={{ color: 'var(--color-teal)' }}>True Career Path</span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                    Step into hyper-realistic simulations. Let AI analyze your natural skills.
                    Get precise career recommendations based on actual performance.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="btn btn-primary text-lg px-10 py-4 rounded-full shadow-xl shadow-teal-500/20 hover:shadow-teal-500/30 transition-all">
                        Get Started Free
                    </button>
                    <button className="btn btn-outline text-lg px-10 py-4 rounded-full border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all dark:bg-transparent">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
