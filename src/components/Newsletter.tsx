import React from 'react';

const Newsletter = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="blue-bg rounded-lg shadow-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-4 uppercase font-display">Stay Updated with SaaS Insights</h2>
        <p className="text-xl mb-6 font-display">Subscribe to our newsletter for the latest SaaS trends, acquisition opportunities, and growth strategies.</p>
        <form className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded-md text-secondary-900 font-display"
          />
          <button type="submit" className="bg-white text-primary-600 px-6 py-2 rounded-md font-semibold hover:bg-primary-50 transition duration-300 uppercase font-display">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Newsletter;