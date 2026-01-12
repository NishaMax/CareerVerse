import React from 'react';

const Footer = () => {
    return (
        <footer className="relative z-10 bg-gradient-to-b from-transparent to-gray-50 dark:to-black border-t border-gray-200 dark:border-white/10 py-16 px-4 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <div className="text-3xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-4">
                            CareerVerse
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            AI-powered career discovery through immersive simulations. Built with cutting-edge ML technology.
                        </p>
                        <div className="flex gap-4">
                            {['Twitter', 'LinkedIn', 'GitHub'].map((social, i) => (
                                <button key={i} className="w-12 h-12 bg-white dark:bg-white/5 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 border border-gray-200 dark:border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm dark:shadow-none">
                                    <div className="w-5 h-5 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 rounded"></div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-black text-gray-900 dark:text-white mb-4">Explore</h3>
                        <div className="space-y-3">
                            {['Simulations', 'Technology', 'Pricing', 'Blog'].map((link, i) => (
                                <button key={i} className="block text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
                                    {link}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-black text-gray-900 dark:text-white mb-4">Company</h3>
                        <div className="space-y-3">
                            {['About', 'Careers', 'Contact', 'Support'].map((link, i) => (
                                <button key={i} className="block text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
                                    {link}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-white/10 text-center text-gray-500 text-sm">
                    © 2026 CareerVerse. Powered by AI. Built for the Future.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
