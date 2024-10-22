import React from 'react';

const CaseStudyItem = ({ title, description, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-secondary-900 uppercase font-display">{title}</h3>
      <p className="text-secondary-600 font-display">{description}</p>
      <a href="#" className="text-primary-600 font-semibold mt-4 inline-block uppercase font-display">Read More</a>
    </div>
  </div>
);

const CaseStudies = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16 text-secondary-900 uppercase font-display">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CaseStudyItem
          title="SaaSPro Acquisition"
          description="How we helped SaaSPro achieve a 5x valuation increase in 18 months before a successful exit."
          imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
        />
        <CaseStudyItem
          title="CloudManager Growth"
          description="Scaling CloudManager from 100 to 10,000 customers with our proven growth marketing strategies."
          imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
        <CaseStudyItem
          title="DataViz Launch"
          description="From concept to 1,000 paying customers: How we built and launched DataViz in 6 months."
          imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
      </div>
    </div>
  </section>
);

export default CaseStudies;