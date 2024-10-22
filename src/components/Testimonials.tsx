import React from 'react';

const TestimonialItem = ({ quote, author, position }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-secondary-600 mb-4 font-display">"{quote}"</p>
    <p className="font-semibold text-secondary-900 font-display">{author}</p>
    <p className="text-secondary-600 font-display">{position}</p>
  </div>
);

const Testimonials = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16 text-secondary-900 uppercase font-display">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TestimonialItem
          quote="saasvest's expertise in SaaS acquisitions helped us achieve a successful exit beyond our expectations. Their guidance throughout the process was invaluable."
          author="Thomas Meidema"
          position="Founder, BlitzScale"
        />
        <TestimonialItem
          quote="The growth strategies implemented by saasvest transformed our struggling SaaS into a thriving business. We've seen a 300% increase in MRR within a year."
          author="Kyle Herod"
          position="CEO, CloudTech Solutions"
        />
      </div>
    </div>
  </section>
);

export default Testimonials;