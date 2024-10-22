import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-10 text-primary-600 text-[20vw] font-bold font-display">
        SAASVEST
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Rocket className="h-8 w-8 text-primary-600 mr-2" />
              <span className="text-2xl font-bold text-primary-600 uppercase font-display">SAASVEST</span>
            </div>
            <p className="mt-2 text-secondary-600 font-display">
              Acquiring, Growing and selling SAAS companies
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase font-display">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-secondary-600 hover:text-primary-600 uppercase font-display">Home</Link></li>
              <li><Link to="/valuation" className="text-secondary-600 hover:text-primary-600 uppercase font-display">Valuation Tool</Link></li>
              <li><Link to="/careers" className="text-secondary-600 hover:text-primary-600 uppercase font-display">Careers</Link></li>
              <li><Link to="/contact" className="text-secondary-600 hover:text-primary-600 uppercase font-display">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase font-display">Contact Us</h3>
            <p className="text-secondary-600 font-display">Email: baz@saasvest.com</p>
            <p className="text-secondary-600 font-display">Phone: +1(305)515-5460</p>
            <p className="text-secondary-600 font-display">Address: Herengracht 564, 1017CH Amsterdam</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary-200 text-center">
          <p className="text-secondary-600 font-display">
            &copy; 2024 saasvest. All rights reserved. Made with ❤️ in Amsterdam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;