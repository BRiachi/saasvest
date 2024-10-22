import React from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

const JobListing = ({ title, description, path }) => {
  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h3 className="text-2xl font-bold mb-2 uppercase font-display">{title}</h3>
      <p className="text-gray-600 mb-4 font-display">{description}</p>
      <Link 
        to={path} 
        className="text-blue-600 font-semibold hover:underline uppercase font-display"
        onClick={handleClick}
      >
        VIEW DETAILS
      </Link>
    </div>
  );
};

const Careers = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-center uppercase font-display">
            CAREERS AT SAASVEST
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto font-display">
            Join our team of passionate professionals dedicated to revolutionizing the SaaS industry. We offer exciting opportunities for growth and innovation.
          </p>
          <div className="max-w-2xl mx-auto space-y-6">
            <JobListing 
              title="Acquisition Officer" 
              description="Lead the charge in identifying and evaluating potential SaaS acquisitions, playing a crucial role in expanding our portfolio."
              path="/careers/acquisition-officer" 
            />
            <JobListing 
              title="Growth Marketeer" 
              description="Drive user acquisition and retention strategies for our portfolio of SaaS companies, leveraging cutting-edge marketing techniques."
              path="/careers/growth-marketeer" 
            />
            <JobListing 
              title="Administrative Assistant" 
              description="Support our fast-paced team with essential administrative tasks, ensuring smooth operations across all departments."
              path="/careers/administrative-assistant" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;