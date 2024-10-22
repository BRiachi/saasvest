import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => (
  <section className="blue-bg py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold mb-4 uppercase font-display text-white">Ready to Scale Your SaaS?</h2>
      <p className="text-xl mb-8 font-display text-white">Let's discuss how we can help you grow or acquire your next successful SaaS venture.</p>
      <Link to="/contact" className="bg-white text-primary-600 px-6 py-2 rounded-md font-semibold hover:bg-primary-50 transition duration-300 uppercase font-display inline-block">
        Get in Touch
      </Link>
    </div>
  </section>
);

export default CTA;