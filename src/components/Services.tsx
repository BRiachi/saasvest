import React from 'react';
import { Rocket, BarChart, Code, FileSignature } from 'lucide-react';

const ServiceSection = ({ icon: Icon, title, description, imageUrl, reverse }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center mb-20`}>
    <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4">
      <img src={imageUrl} alt={title} className="rounded-lg shadow-lg w-full h-64 object-cover" />
    </div>
    <div className="w-full md:w-1/2 px-4">
      <div className="flex items-center mb-4">
        <Icon className="h-10 w-10 text-primary-600 mr-4" />
        <h3 className="text-2xl font-semibold uppercase font-display">{title}</h3>
      </div>
      <p className="text-secondary-600 font-display">{description}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 uppercase font-display">What We Do</h2>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto font-display">
          SaaS needs to be sustainable and innovative. We grow thriving platforms that solve real business problems with solid plans for the future. We help through acquisition, development, and growth hacking.
        </p>

        <ServiceSection
          icon={Rocket}
          title="Portfolio Companies"
          description="Interested in high-growth SaaS brands? We always have thriving platforms that are up for investment. Our portfolio companies offer cutting-edge solutions across various industries, providing lucrative opportunities for investors looking to enter the SaaS market."
          imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
          reverse={false}
        />

        <ServiceSection
          icon={BarChart}
          title="Acquiring SaaS Brands"
          description="Do you own a SaaS platform with huge growth potential? We're actively seeking to expand our portfolio by acquiring businesses that offer exciting opportunities for scaling. Whether you're planning an exit or looking for a partner to take your SaaS to new heights, let's connect and explore the possibilities."
          imageUrl="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          reverse={true}
        />

        <ServiceSection
          icon={Code}
          title="Build & Grow"
          description="Have a great SaaS idea but don't know where to start? Our team of experienced developers and marketers can help bring your vision to life. We use proven frameworks to develop, launch, and scale SaaS platforms, allowing you to skip the learning curve and go straight to market with a professional, high-quality product."
          imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          reverse={false}
        />

        <ServiceSection
          icon={FileSignature}
          title="M&A Services"
          description="Planning to sell your SaaS company? Our M&A team can guide you through the process, ensuring you get the best value for your business. We'll help you prepare your SaaS for sale, identify potential buyers, and negotiate the best terms. With our expertise, you can maximize the return on your hard work and investment in the competitive SaaS market."
          imageUrl="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          reverse={true}
        />
      </div>
    </section>
  );
};

export default Services;