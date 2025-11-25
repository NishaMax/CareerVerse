import React from 'react';
import { Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-teal-50 to-white">
            <div className="bg-white p-10 rounded-[2rem] shadow-xl w-full max-w-md border border-gray-100 mx-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-teal-500 mb-2">Welcome Back</h2>
                    <p className="text-gray-500 text-sm">
                        Login to continue your career journey
                    </p>
                </div>

                <form className="space-y-6">
                    {/* Email Address */}
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Mail size={20} className="text-gray-400" />
                            </div>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-gray-600 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Lock size={20} className="text-gray-400" />
                            </div>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-gray-600 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    <button
                        type="button"
                        className="w-full bg-teal-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-teal-500/30 hover:bg-teal-600 hover:shadow-teal-600/30 transition-all transform hover:-translate-y-0.5"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-teal-500 font-medium hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
