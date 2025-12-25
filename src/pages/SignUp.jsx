import React from 'react';
import { User, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-teal-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-[2rem] shadow-xl w-full max-w-md border border-gray-100 dark:border-gray-700 mx-4">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-teal-500 dark:text-teal-400 mb-2">Join CareerVerse</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Create your account to discover your career path
                    </p>
                </div>

                <form className="space-y-5">
                    {/* Full Name */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <User size={20} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all text-gray-600 dark:text-white placeholder-gray-400"
                        />
                    </div>

                    {/* Email Address */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Mail size={20} className="text-gray-400" />
                        </div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all text-gray-600 dark:text-white placeholder-gray-400"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Lock size={20} className="text-gray-400" />
                        </div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all text-gray-600 dark:text-white placeholder-gray-400"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Lock size={20} className="text-gray-400" />
                        </div>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition-all text-gray-600 dark:text-white placeholder-gray-400"
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full bg-teal-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-teal-500/30 hover:bg-teal-600 hover:shadow-teal-600/30 transition-all transform hover:-translate-y-0.5"
                    >
                        Create Account
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Already have an account?{' '}
                        <Link to="/login" className="text-teal-500 dark:text-teal-400 font-medium hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
