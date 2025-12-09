import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Landing.css';

const Landing = () => {
    useEffect(() => {
        // Create floating particles
        const createParticle = () => {
            const bgShapes = document.querySelector('.bg-shapes');
            if (!bgShapes) return;

            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.width = Math.random() * 10 + 5 + 'px';
            particle.style.height = particle.style.width;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = Math.random() * 10 + 10 + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            bgShapes.appendChild(particle);

            setTimeout(() => particle.remove(), 20000);
        };

        // Initial particles
        for (let i = 0; i < 10; i++) {
            createParticle();
        }

        // Generate particles periodically
        const intervalId = setInterval(createParticle, 2000);

        return () => clearInterval(intervalId);
    }, []);

    const handleRipple = (e) => {
        const btn = e.currentTarget;
        const ripple = document.createElement('div');
        const rect = btn.getBoundingClientRect();

        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255,255,255,0.6)';
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.animation = 'ripple-effect 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        // Add keyframes if not already present (though we have them in CSS now, 
        // but the JS in original file added them dynamically. 
        // We moved them to CSS so we don't need to add style tag here)

        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    };

    return (
        <motion.div
            className="landing-page relative h-screen w-full overflow-hidden flex items-center justify-center font-sans text-white"
            exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <video className="background-video" autoPlay muted loop playsInline>
                <source src="/Something03.mp4" type="video/mp4" />
            </video>
            <div className="video-overlay"></div>

            {/* Animated Background */}
            <div className="bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            {/* Hero Container */}
            <div className="hero-container relative z-10 flex flex-col items-center justify-center px-4">
                {/* Floating Icons */}
                <div className="floating-icons">
                    <div className="floating-icon icon-1">🎓</div>
                    <div className="floating-icon icon-2">💼</div>
                    <div className="floating-icon icon-3">🚀</div>
                    <div className="floating-icon icon-4">⭐</div>
                </div>

                {/* Badge */}
                <div className="badge-container">
                    <div className="badge">
                        <span className="sparkle-icon">✨</span>
                        <span>AI-Powered Career Discovery</span>
                    </div>
                </div>

                {/* Title with word animation */}
                <h1 className="hero-title">
                    <span className="word">Discover</span>{' '}
                    <span className="word">Your</span>{' '}
                    <span className="word gradient-text">True</span>{' '}
                    <span className="word gradient-text">Career</span>{' '}
                    <span className="word gradient-text">Path</span>
                </h1>

                {/* Description */}
                <p className="hero-description max-w-2xl mx-auto text-center">
                    Step into hyper-realistic simulations. Let AI analyze your natural skills. Get
                    precise career recommendations based on actual performance.
                </p>

                {/* Button */}
                <div className="button-container">
                    <Link
                        to="/home"
                        className="btn btn-primary"
                        onClick={handleRipple}
                    >
                        Start Your Journey
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Landing;
