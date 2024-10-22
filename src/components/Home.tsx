import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Stats from './Stats';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import CaseStudies from './CaseStudies';
import Newsletter from './Newsletter';

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Services />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <CaseStudies />
      <Newsletter />
    </div>
  );
};

export default Home;