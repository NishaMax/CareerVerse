import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Experience from '../components/Experience';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <Hero />
            <Features />
            <Experience />
            <CTA />
        </motion.div>
    );
};

export default Home;
