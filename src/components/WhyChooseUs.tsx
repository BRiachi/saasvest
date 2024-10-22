import React from 'react';
import { Globe, TrendingUp, Users } from 'lucide-react';

const WhyChooseUsItem = ({ icon: Icon, title, description }) => (
  <div className="text-center">
    <div className="flex justify-center mb-4">{<Icon className="h-12 w-12 text-primary-600" />}</div>
    <h3 className="text-xl font-semibold mb-2 text-secondary-900 uppercase font-display">{title}</h3>
    <p className="text-secondary-600 font-display">{description}</p>
  </div>
);

const WhyChooseUs = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16 text-secondary-900 uppercase font-display">Why Choose saasvest?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <WhyChooseUsItem
          icon={Globe}
          title="Global Network"
          description="Access to a vast network of SaaS buyers, sellers, and industry experts worldwide."
        />
        <WhyChooseUsItem
          icon={TrendingUp}
          title="Proven Track Record"
          description="Consistently delivering exceptional results in SaaS acquisitions, growth, and exits."
        />
        <WhyChooseUsItem
          icon={Users}
          title="Expert Team"
          description="A diverse team of SaaS veterans, growth marketers, and tech innovators at your service."
        />
      </div>
    </div>
  </section>
);

export default WhyChooseUs;