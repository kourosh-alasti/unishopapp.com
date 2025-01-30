import React from 'react';
import ThemeSwitcher from '@/components/theme-switcher';

export default function MarketingPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
            {/* Navigation */}
            <nav className="w-full px-4 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 fixed top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">UniShop</div>
                    <ThemeSwitcher />
                </div>
            </nav>

            {/* Hero Section */}
            <section className="w-full px-4 pt-32 pb-20 bg-gradient-to-br from-indigo-600 to-indigo-800 dark:from-indigo-700 dark:to-indigo-900">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6">
                        <span className="text-indigo-100">🎓 Exclusive to University Students</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Buy, Sell, and Swap<br />Within Your Campus
                    </h1>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        The safest way to trade items with fellow students in your dorm or apartment complex.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="px-8 py-4 bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-150">
                            Start Shopping →
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-150">
                            List an Item
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full py-16 px-4 bg-white dark:bg-gray-900 relative -mt-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                    {[
                        { value: "50+", label: "Universities" },
                        { value: "10K+", label: "Active Students" },
                        { value: "1000+", label: "Items Listed Daily" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</div>
                            <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="w-full py-24 px-4 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                        Why Choose UniShop?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Verified Students Only",
                                description: "Trade safely with verified university email accounts only"
                            },
                            {
                                title: "Campus-Based",
                                description: "Find items near you within your dorm or apartment complex"
                            },
                            {
                                title: "Student Budget",
                                description: "Great deals on textbooks, furniture, electronics, and more"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="p-6 rounded-xl bg-white dark:bg-gray-900 hover:shadow-md transition-all">
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

            {/* Footer */}
            <footer className="w-full py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="text-center text-gray-600 dark:text-gray-400">
                    <p>&copy; {new Date().getFullYear()} UniShop. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}