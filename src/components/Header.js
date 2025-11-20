import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import DonationsModal from './DonationsModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const whatsappNumber = '2348033059716';

  const openDonate = () => setIsDonateOpen(true);
  const closeDonate = () => setIsDonateOpen(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="CRCCM logo"
              className="w-13 h-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">CRCCM</h1>
              <p className="text-xs text-secondary font-semibold">Christ The Redeemer Cares and Compassion Ministry</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <Navigation onOpenDonate={openDonate} whatsappNumber={whatsappNumber} />

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-primary mb-1.5"></div>
            <div className="w-6 h-0.5 bg-primary mb-1.5"></div>
            <div className="w-6 h-0.5 bg-primary"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary font-medium">About</Link>
              <Link to="/ministries" className="text-gray-700 hover:text-primary font-medium">Ministries</Link>
              <button
                onClick={openDonate}
                className="text-gray-700 hover:text-primary font-medium text-left bg-transparent border-0 p-0"
              >
                Donate
              </button>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary font-medium">Contact</a>
            </nav>
          </div>
        )}

        <DonationsModal isOpen={isDonateOpen} onClose={closeDonate} whatsappNumber={whatsappNumber} />
      </div>
    </header>
  );
};

export default Header;