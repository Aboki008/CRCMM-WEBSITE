import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ onOpenDonate, whatsappNumber = '2348033059716' }) => {
  const location = useLocation();

  const items = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/ministries', label: 'Ministries' },
  ];

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`font-medium transition-colors duration-200 ${
            location.pathname === item.to ? 'text-primary border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
          }`}
        >
          {item.label}
        </Link>
      ))}

      {/* Donate button - opens modal via prop */}
      <button
        onClick={onOpenDonate}
        className="font-medium text-primary hover:text-primary transition-colors duration-200 bg-transparent border-0 p-0 cursor-pointer"
        aria-label="Donate"
      >
        Donate
      </button>

      {/* Contact opens WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-gray-700 hover:text-primary"
        aria-label="Contact us on WhatsApp"
      >
        Contact
      </a>
    </nav>
  );
};

export default Navigation;