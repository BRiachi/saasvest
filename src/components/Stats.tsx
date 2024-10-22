import React from 'react';

const StatItem = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatItem value="15+" label="SaaS Brands" />
          <StatItem value="$25M+" label="Revenue Generated" />
          <StatItem value="100+" label="Happy Clients" />
        </div>
      </div>
    </section>
  );
};

export default Stats;