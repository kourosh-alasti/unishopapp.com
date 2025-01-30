import React from 'react';

export default function MarketingPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      {/* Hero Section */}
      <section className="w-full py-20 bg-purple-600 text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to UniShop!</h1>
          <p className="text-xl mb-8">
              The ultimate marketplace for university students.
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-200 transition">
              Join Now
          </button>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Features</h2>
          <ul className="space-y-4">
              <li>Easy to use platform</li>
              <li>Secure transactions</li>
              <li>Wide range of products</li>
          </ul>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20 bg-gray-100 dark:bg-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-6">Pricing</h2>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Student Plan</h3>
              <p className="text-xl mb-4">\$9.99/month</p>
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                  Subscribe
              </button>
          </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full py-6 bg-purple-600 text-white text-center">
          <p>&copy; 2025 UniShop. All rights reserved.</p>
      </footer>
  </div>
    );
}