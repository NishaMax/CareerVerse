import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-32 px-4 text-center" style={{ backgroundColor: '#00bfa5' }}>
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">
                    Ready to Find Your Perfect Career?
                </h2>
                <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                    Join thousands discovering their true potential through AI powered career
                    <br className="hidden md:block" /> simulations
                </p>
                <button className="bg-white text-teal-500 font-bold py-4 px-10 rounded-full inline-flex items-center gap-3 hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg">
                    Start Your Journey
                    <ArrowRight size={20} />
                </button>
            </div>
        </section>
    );
};

export default CTA;
