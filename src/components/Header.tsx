import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header className="bg-primary-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Rocket className="h-8 w-8 text-white" />
              <span className="ml-2 text-2xl font-bold text-white uppercase font-display">SAASVEST</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/valuation">VALUATION TOOL</NavLink>
            <NavLink to="/careers">CAREERS</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <MobileNavLink to="/" onClick={() => handleNavigation('/')}>HOME</MobileNavLink>
            <MobileNavLink to="/valuation" onClick={() => handleNavigation('/valuation')}>VALUATION TOOL</MobileNavLink>
            <MobileNavLink to="/careers" onClick={() => handleNavigation('/careers')}>CAREERS</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => handleNavigation('/contact')}>CONTACT</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ children, to }) => (
  <Link
    to={to}
    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white hover:text-white uppercase font-display nav-link"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ children, to, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:bg-primary-700 hover:border-white hover:text-white uppercase font-display nav-link"
  >
    {children}
  </Link>
);

export default Header;