import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10 px-4" style={{ backgroundColor: '#111827' }}>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <Link to="/home" className="text-xl font-bold text-teal-500 mb-6 block" style={{ color: 'var(--color-teal)' }}>
                            CareerVerse
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            AI powered career recommendations through hyper realistic simulations.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>

                            <li><a href="#" className="hover:text-white transition-colors">Simulations</a></li>
                        </ul>
                    </div>

                    {/* Simulations */}
                    <div>
                        <h4 className="font-bold mb-6">Simulations</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">The Educator</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">The Diagnostician</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">The Advocate</a></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-bold mb-6">Connect With Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors text-gray-400 hover:text-white">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors text-gray-400 hover:text-white">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors text-gray-400 hover:text-white">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors text-gray-400 hover:text-white">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} CareerVerse. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
