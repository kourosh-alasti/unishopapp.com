import React from 'react';

export default function MarketingPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="w-full px-4 py-32 bg-gradient-to-br from-indigo-600 to-indigo-800 dark:from-indigo-700 dark:to-indigo-900">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                    Welcome to UniShop
                </h1>
                <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                    The smart marketplace designed exclusively for university students.
                </p>
                <button className="px-8 py-4 bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-150">
                    Get Started →
                </button>
            </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-24 px-4 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                    Why Choose UniShop?
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Easy to Use",
                            description: "Intuitive interface designed for students"
                        },
                        {
                            title: "Secure Transactions",
                            description: "Safe and protected payments"
                        },
                        {
                            title: "Wide Selection",
                            description: "Everything you need for university life"
                        }
                    ].map((feature, index) => (
                        <div key={index} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-md transition-all">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-24 px-4 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-md mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    Student Pricing
                </h2>
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Student Plan
                        </h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">$9.99</span>
                            <span className="text-gray-600 dark:text-gray-400">/month</span>
                        </div>
                        <button className="w-full py-4 px-8 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white rounded-lg transition-colors">
                            Start Free Trial
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="text-center text-gray-600 dark:text-gray-400">
                <p>&copy; {new Date().getFullYear()} UniShop. All rights reserved.</p>
            </div>
        </footer>
    </div>
    );
}