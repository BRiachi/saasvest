import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const texts = ['BUYING', 'BUILDING', 'INVESTING', 'GROWING', 'SCALING'];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= texts[textIndex].length) {
        setDisplayText(texts[textIndex].slice(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [textIndex]);

  return (
    <div className="blue-bg py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="hero-text mb-4">
            #1 Partner in SaaS <br />
            <span className="inline-block w-full overflow-hidden">
              {displayText}
            </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Acquiring, Growing and selling SAAS companies
          </p>
          <Link to="/contact" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-600 uppercase">
            BOOK A MEETING
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;