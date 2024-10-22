import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const Contact = () => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <div className="bg-secondary-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-center text-secondary-900 uppercase font-display">
            Schedule a Call
          </h1>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <iframe
              src="https://calendly.com/bookbaz"
              style={{ width: '100%', height: '800px', border: 'none' }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;